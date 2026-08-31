'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { Icons } from './Icons';
import { CONTACT_INFO } from '../constants';
import { trackEvent, reportAdsConversion, ADS_CONTACT_CONVERSION } from '../lib/gtag';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// EmailJS Configuration from environment variables
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

// Content-length limits (also enforced with maxLength on the inputs).
// form-lightweight §5: the description carries the whole matter now, so it gets
// 2,000 characters and no minimum that pressures people into padding.
const LIMITS = { name: 100, phone: 30, email: 150, message: 2000 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// §6 — realistic contact channels only (no messengers the office doesn't use).
const CONTACT_METHODS = ['Email', 'Phone'] as const;

// §6 — time to CALL the applicant, never a consultation-time picker.
const BEST_TIMES = ['No Preference', 'Morning', 'Afternoon', '5 PM – 7 PM'] as const;

// §4 — the guidance card. Prompts, not required questions: the applicant
// describes the situation in their own words and the attorney classifies it.
const DESCRIPTION_PROMPTS = [
    'What happened and what problem you are facing',
    'What has happened so far, such as police contact, court papers, a demand for payment, or a dispute with another person or company',
    'Any important or urgent date you know about',
    'What you would like help with',
    'Names of other people or companies involved, only if you are comfortable providing them at this stage',
] as const;

// Remote-nationwide brief B-1 — how the consultation itself is held.
// Remote methods need a reachable phone number and carry the advance-payment
// note; the microcopy renders under the selected option.
const MEETING_METHODS = [
    { value: 'in-person', label: 'In person — at our Pyeongtaek office', note: null },
    {
        value: 'video',
        label: 'Video call — Google Meet',
        note: 'Held over Google Meet — no account or installation needed. Video consultations are never recorded.',
    },
    {
        value: 'phone-call',
        label: "Phone call — we call you",
        note: "We call you at the confirmed time — you don't need to call us. Calls are not recorded.",
    },
] as const;

type MeetMethod = (typeof MEETING_METHODS)[number]['value'] | '';
const isRemote = (m: MeetMethod) => m === 'video' || m === 'phone-call';

type FormState = {
    name: string;
    email: string;
    phone: string;
    message: string;
    meetMethod: MeetMethod;
    contactMethod: string;
    bestTime: string;
    agreed: boolean;
};

const EMPTY_FORM: FormState = {
    name: '',
    email: '',
    phone: '',
    message: '',
    meetMethod: '',
    contactMethod: '',
    bestTime: 'No Preference',
    agreed: false,
};

type FieldErrors = Partial<
    Record<'name' | 'email' | 'phone' | 'message' | 'meetMethod' | 'contactMethod' | 'agreed', string>
>;

function validate(form: FormState): FieldErrors {
    const errors: FieldErrors = {};
    if (!form.name.trim()) errors.name = 'Please enter your name.';
    else if (form.name.trim().length > LIMITS.name) errors.name = 'Name is too long.';

    if (!form.email.trim()) errors.email = 'Please enter your email.';
    else if (!EMAIL_RE.test(form.email.trim())) errors.email = 'Please enter a valid email address.';

    // Phone is optional — unless the applicant asked to be called, or chose a
    // remote consultation (we need a number in case the connection fails).
    if (form.phone.trim().length > LIMITS.phone) errors.phone = 'Phone number is too long.';
    else if ((form.contactMethod === 'Phone' || isRemote(form.meetMethod)) && !form.phone.trim())
        errors.phone = 'Please enter a phone number so we can reach you.';

    const msg = form.message.trim();
    if (!msg) errors.message = 'Please tell us briefly what happened.';
    else if (msg.length > LIMITS.message) errors.message = 'Message is too long.';

    if (!form.meetMethod) errors.meetMethod = 'Please choose how you would like to meet.';
    if (!form.contactMethod) errors.contactMethod = 'Please choose how we should contact you.';

    if (!form.agreed)
        errors.agreed = 'Please confirm the consultation fee and the personal-information consent.';

    return errors;
}

/**
 * Assemble the whole request into one readable email body. The EmailJS
 * dashboard template prints {{message_body}} only, so field changes like this
 * one need no dashboard edit (§9).
 */
function buildMessageBody(form: FormState): string {
    const lines = [
        '— Applicant —',
        `Name: ${form.name.trim()}`,
        `Email: ${form.email.trim()}`,
        `Phone: ${form.phone.trim() || 'Not provided'}`,
        '',
        'Brief Description:',
        form.message.trim(),
        '',
        '— Contact —',
        `Consultation Method: ${MEETING_METHODS.find((m) => m.value === form.meetMethod)?.label ?? form.meetMethod}`,
        `Preferred Contact Method: ${form.contactMethod}`,
    ];
    if (form.contactMethod === 'Phone') lines.push(`Best Time to Call: ${form.bestTime}`);
    lines.push(
        '',
        'Consultation Fee Acknowledged & Privacy Consent: Yes (KRW 150,000 for a 60-minute consultation, or KRW 100,000 if it ends within 30 minutes, VAT included; appointment not confirmed by submission; consented to personal-information handling for this request)'
    );
    return lines.join('\n');
}

const ContactSection: React.FC = () => {
    const [formState, setFormState] = useState<FormState>(EMPTY_FORM);
    const [errors, setErrors] = useState<FieldErrors>({});
    // Honeypot: a field hidden from real users. If it is filled, the submission
    // is almost certainly a bot and is dropped.
    const [honeypot, setHoneypot] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const { ref, isVisible } = useScrollAnimation(0.2);
    // Fire "contact_form_started" only on the first interaction.
    const startedRef = useRef(false);
    // Synchronous double-submit guard: React state updates are async, so two
    // submits in the same tick would both see status === 'idle'. The ref
    // closes that gap; the status check still covers the rendered UI.
    const submittingRef = useRef(false);

    const handleFormStart = () => {
        if (!startedRef.current) {
            startedRef.current = true;
            trackEvent('contact_form_started');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Guard against double submission (e.g. Enter key + click).
        if (status === 'submitting' || submittingRef.current) return;

        // Honeypot tripped → silently accept without sending (do not tip off the bot).
        if (honeypot.trim() !== '') {
            setStatus('success');
            setFormState(EMPTY_FORM);
            return;
        }

        const nextErrors = validate(formState);
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;

        submittingRef.current = true;
        setStatus('submitting');

        try {
            if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
                // Never show a fake success — treat missing configuration as a real failure.
                throw new Error('Email service is not configured (missing EmailJS environment variables).');
            }

            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    // Kept for the template's subject and reply-to line.
                    from_name: formState.name.trim(),
                    from_email: formState.email.trim(),
                    from_phone: formState.phone.trim() || 'Not provided',
                    // Single-assembly body — the template body prints only this.
                    message_body: buildMessageBody(formState),
                },
                EMAILJS_PUBLIC_KEY
            );

            setStatus('success');
            // Same event name and timing; the consultation_method parameter was
            // added by the remote-nationwide brief B-1.
            trackEvent('contact_form_submitted', { consultation_method: formState.meetMethod });
            // Google Ads conversion — only after the request was actually delivered,
            // so it never fires on click, on a validation failure, or on a send error.
            reportAdsConversion(ADS_CONTACT_CONVERSION);
            setFormState(EMPTY_FORM);
            setErrors({});
        } catch (error) {
            console.error("Failed to send email:", error);
            setStatus('error');
        } finally {
            submittingRef.current = false;
        }
    };

    const inputClass =
        'w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all disabled:bg-gray-100';
    const groupHeadingClass =
        'text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2';

    return (
        <section
            id="contact"
            ref={ref as React.RefObject<HTMLElement>}
            className={`py-20 bg-slate-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Header — §3: value frame, fee line, and the pressure-removal
                    paragraph are kept verbatim; only the review-flow sentence moves. */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">Request a Consultation</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-5">
                        Meet directly with the attorney who would actually handle your case — by video,
                        by phone, or in person at our Pyeongtaek office.
                    </p>
                    {/* Fee line — visually distinct, echoing the site's fee blocks */}
                    <p className="inline-block bg-navy-900 text-white font-bold px-6 py-3 rounded-md mb-5">
                        60 minutes&ensp;·&ensp;₩150,000 (VAT included)&ensp;·&ensp;₩100,000 if it
                        ends within 30 minutes&ensp;·&ensp;Korean or English, same fee
                    </p>
                    {isRemote(formState.meetMethod) && (
                        <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-3">
                            Video and phone consultations are confirmed after advance payment by bank
                            transfer — we send an invoice with our account details when we reply.
                        </p>
                    )}
                    <p className="text-gray-600 max-w-2xl mx-auto mb-3">
                        Tell us briefly about your situation. We will review whether we can assist and check
                        for potential conflicts of interest. If appropriate, we will contact you with
                        available consultation times.
                    </p>
                    {/* Pressure-removal paragraph — keep (balances the checkbox friction). */}
                    <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                        Sending this form does not commit you to anything. Deciding whether to hire us after
                        the consultation is entirely up to you — and your appointment is not confirmed until
                        we contact you.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg relative overflow-hidden">
                    {/* Success Overlay — §8. */}
                    {status === 'success' && (
                        <div
                            className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-8 animate-fade-in"
                            role="alert"
                            aria-live="polite"
                        >
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600" aria-hidden="true">
                                <Icons.ArrowRight className="w-8 h-8 -rotate-45" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy-900 mb-2">
                                Your consultation request has been received.
                            </h3>
                            <p className="text-gray-600 max-w-md mb-3">
                                We will review the information you provided and check for potential conflicts
                                of interest. If we are able to assist, we will contact you regarding available
                                consultation times.
                            </p>
                            <p className="text-gray-600 max-w-md font-medium mb-1">
                                Your appointment is not yet confirmed.
                            </p>
                            <p className="text-gray-500 text-sm max-w-md">
                                Please do not send additional confidential documents unless requested.
                            </p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-6 text-gold-600 font-bold hover:text-gold-700 underline"
                            >
                                Send another request
                            </button>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} onFocus={handleFormStart} className="space-y-6">
                        {/* ——— About You ——— */}
                        <p className={groupHeadingClass}>About You</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* 1. Name */}
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-bold text-gray-700 mb-2">
                                    Full Name <span className="text-red-500" aria-label="required">*</span>
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    required
                                    maxLength={LIMITS.name}
                                    disabled={status === 'submitting'}
                                    className={inputClass}
                                    placeholder="John Doe"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    aria-required="true"
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                                />
                                {errors.name && (
                                    <p id="contact-name-error" className="text-red-600 text-sm mt-1">{errors.name}</p>
                                )}
                            </div>
                            {/* 2. Email */}
                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-bold text-gray-700 mb-2">
                                    Email <span className="text-red-500" aria-label="required">*</span>
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    required
                                    maxLength={LIMITS.email}
                                    disabled={status === 'submitting'}
                                    className={inputClass}
                                    placeholder="john@example.com"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    aria-required="true"
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                                />
                                {errors.email && (
                                    <p id="contact-email-error" className="text-red-600 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>
                            {/* 3. Phone — optional unless "Phone" is the chosen contact method (§2). */}
                            <div>
                                <label htmlFor="contact-phone" className="block text-sm font-bold text-gray-700 mb-2">
                                    Phone Number{' '}
                                    {formState.contactMethod === 'Phone' || isRemote(formState.meetMethod) ? (
                                        <span className="text-red-500" aria-label="required">*</span>
                                    ) : (
                                        <span className="text-gray-400 font-normal">(optional)</span>
                                    )}
                                </label>
                                <input
                                    id="contact-phone"
                                    type="tel"
                                    required={formState.contactMethod === 'Phone' || isRemote(formState.meetMethod)}
                                    maxLength={LIMITS.phone}
                                    disabled={status === 'submitting'}
                                    className={inputClass}
                                    placeholder="010-1234-5678 or +1 555 123 4567"
                                    value={formState.phone}
                                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                    aria-required={formState.contactMethod === 'Phone'}
                                    aria-invalid={!!errors.phone}
                                    aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                                />
                                {errors.phone && (
                                    <p id="contact-phone-error" className="text-red-600 text-sm mt-1">{errors.phone}</p>
                                )}
                            </div>
                        </div>

                        {/* ——— Guidance card (§4) — read before the box, not inside it. ——— */}
                        <div className="rounded-lg border border-gray-200 bg-slate-50 p-5 md:p-6">
                            <h3 className="text-base font-bold text-navy-900 mb-2">
                                Tell us briefly what happened
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-3">
                                You do not need to know the legal category or use legal terms. Please describe
                                the situation in your own words.
                            </p>
                            <p className="text-sm text-navy-900 font-bold leading-relaxed mb-3">
                                You do not need to answer every point below. These are simply a guide to help
                                us understand your situation.
                            </p>
                            <p className="text-sm text-gray-600 mb-2">It is helpful to include:</p>
                            <ul className="space-y-1.5">
                                {DESCRIPTION_PROMPTS.map((prompt) => (
                                    <li key={prompt} className="flex items-start gap-2 text-sm text-gray-600">
                                        <span className="text-gold-500 mt-0.5" aria-hidden="true">·</span>
                                        <span className="leading-relaxed">{prompt}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 4. Brief description (§5) */}
                        <div>
                            <label htmlFor="contact-message" className="block text-sm font-bold text-gray-700 mb-2">
                                Brief Description of Your Matter <span className="text-red-500" aria-label="required">*</span>
                            </label>
                            <p id="contact-message-hint" className="text-sm text-gray-500 mb-2">
                                Please tell us in your own words what happened and what you would like help with.
                            </p>
                            <textarea
                                id="contact-message"
                                required
                                rows={7}
                                maxLength={LIMITS.message}
                                disabled={status === 'submitting'}
                                className={inputClass}
                                placeholder="Briefly describe your situation here..."
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                aria-required="true"
                                aria-invalid={!!errors.message}
                                aria-describedby={
                                    errors.message ? 'contact-message-hint contact-message-error' : 'contact-message-hint'
                                }
                            ></textarea>
                            {errors.message && (
                                <p id="contact-message-error" className="text-red-600 text-sm mt-1">{errors.message}</p>
                            )}
                        </div>

                        {/* ——— How Should We Contact You? ——— */}
                        <p className={groupHeadingClass}>How Should We Contact You?</p>
                        {/* B-1: how the consultation itself is held — above the contact method. */}
                        <fieldset
                            aria-required="true"
                            aria-invalid={!!errors.meetMethod}
                            aria-describedby={errors.meetMethod ? 'meet-method-error' : undefined}
                        >
                            <legend className="block text-sm font-bold text-gray-700 mb-2">
                                How would you like to meet? <span className="text-red-500" aria-label="required">*</span>
                            </legend>
                            <div className="space-y-2 pt-1">
                                {MEETING_METHODS.map((m) => (
                                    <div key={m.value}>
                                        <label className="flex items-center gap-2 cursor-pointer text-gray-700">
                                            <input
                                                type="radio"
                                                name="meet-method"
                                                value={m.value}
                                                required
                                                disabled={status === 'submitting'}
                                                className="w-4 h-4 accent-gold-500"
                                                checked={formState.meetMethod === m.value}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        meetMethod: e.target.value as MeetMethod,
                                                    })
                                                }
                                            />
                                            {m.label}
                                        </label>
                                        {m.note && formState.meetMethod === m.value && (
                                            <p className="text-gray-500 text-xs mt-1 ml-6 leading-relaxed">
                                                {m.note}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                            {errors.meetMethod && (
                                <p id="meet-method-error" className="text-red-600 text-sm mt-1">{errors.meetMethod}</p>
                            )}
                        </fieldset>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* 5. Preferred contact method */}
                            <fieldset
                                aria-required="true"
                                aria-invalid={!!errors.contactMethod}
                                aria-describedby={errors.contactMethod ? 'contact-method-error' : undefined}
                            >
                                <legend className="block text-sm font-bold text-gray-700 mb-2">
                                    Preferred Contact Method <span className="text-red-500" aria-label="required">*</span>
                                </legend>
                                <div className="flex gap-6 pt-2">
                                    {CONTACT_METHODS.map((m) => (
                                        <label key={m} className="flex items-center gap-2 cursor-pointer text-gray-700">
                                            <input
                                                type="radio"
                                                name="contact-method"
                                                value={m}
                                                required
                                                disabled={status === 'submitting'}
                                                className="w-4 h-4 accent-gold-500"
                                                checked={formState.contactMethod === m}
                                                onChange={(e) =>
                                                    setFormState({ ...formState, contactMethod: e.target.value })
                                                }
                                            />
                                            {m}
                                        </label>
                                    ))}
                                </div>
                                {errors.contactMethod && (
                                    <p id="contact-method-error" className="text-red-600 text-sm mt-1">{errors.contactMethod}</p>
                                )}
                            </fieldset>
                            {/* 6. Best time to CALL — only when a call was requested (§6). */}
                            {formState.contactMethod === 'Phone' && (
                                <div>
                                    <label htmlFor="contact-besttime" className="block text-sm font-bold text-gray-700 mb-2">
                                        Best Time for Us to Call You{' '}
                                        <span className="text-gray-400 font-normal">(optional)</span>
                                    </label>
                                    <select
                                        id="contact-besttime"
                                        disabled={status === 'submitting'}
                                        className={inputClass}
                                        value={formState.bestTime}
                                        onChange={(e) => setFormState({ ...formState, bestTime: e.target.value })}
                                    >
                                        {BEST_TIMES.map((t) => (
                                            <option key={t} value={t} className="text-gray-900">
                                                {t}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}
                        </div>

                        {/* ——— Consultation Fee & Privacy ——— */}
                        <p className={groupHeadingClass}>Consultation Fee &amp; Privacy</p>
                        {/* 7. Fee acknowledgement + personal-information consent (single checkbox) */}
                        <div>
                            <label htmlFor="contact-agree" className="flex items-start gap-3 cursor-pointer">
                                <input
                                    id="contact-agree"
                                    type="checkbox"
                                    required
                                    disabled={status === 'submitting'}
                                    className="mt-1 w-4 h-4 shrink-0 accent-gold-500"
                                    checked={formState.agreed}
                                    onChange={(e) => setFormState({ ...formState, agreed: e.target.checked })}
                                    aria-required="true"
                                    aria-invalid={!!errors.agreed}
                                    aria-describedby={errors.agreed ? 'contact-agree-error' : undefined}
                                />
                                <span className="text-sm text-gray-700 leading-relaxed">
                                    I understand the consultation fee — KRW 150,000 for a 60-minute
                                    consultation (VAT included), or KRW 100,000 if it ends within 30
                                    minutes — and that
                                    submitting this form does not confirm an appointment, and I consent to the
                                    collection and use of the personal information in this form for the purpose
                                    of handling my consultation request, as described in the{' '}
                                    <Link
                                        href="/privacy"
                                        target="_blank"
                                        className="text-gold-600 hover:text-gold-700 underline underline-offset-2"
                                    >
                                        Privacy Policy
                                    </Link>
                                    .{' '}
                                    <span className="text-red-500" aria-label="required">*</span>
                                </span>
                            </label>
                            {errors.agreed && (
                                <p id="contact-agree-error" className="text-red-600 text-sm mt-1">{errors.agreed}</p>
                            )}
                        </div>

                        {/* Honeypot: hidden from users; bots that fill it are dropped. */}
                        <div className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden="true">
                            <label htmlFor="contact-company">Company (leave this field empty)</label>
                            <input
                                id="contact-company"
                                type="text"
                                tabIndex={-1}
                                autoComplete="off"
                                value={honeypot}
                                onChange={(e) => setHoneypot(e.target.value)}
                            />
                        </div>

                        {/* Submit (§8 — no booking-confirmation language) */}
                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className={`w-full bg-navy-900 text-white font-bold py-4 rounded-md hover:bg-navy-800 transition-colors flex items-center justify-center gap-2 ${status === 'submitting' ? 'opacity-80 cursor-wait' : ''}`}
                            aria-label={status === 'submitting' ? 'Sending request' : 'Submit consultation request'}
                        >
                            {status === 'submitting' ? (
                                <>
                                    <Icons.Loader className="w-5 h-5 animate-spin" aria-hidden="true" />
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <span>Submit Consultation Request</span>
                                    <Icons.ArrowRight className="w-5 h-5" aria-hidden="true" />
                                </>
                            )}
                        </button>

                        {status === 'error' && (
                            <p role="alert" aria-live="assertive" className="text-red-600 text-center font-medium">
                                We could not send your request. Please try again later, or contact us directly at{' '}
                                <a href={`tel:${CONTACT_INFO.PHONE}`} className="underline font-bold whitespace-nowrap">
                                    {CONTACT_INFO.PHONE}
                                </a>.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
