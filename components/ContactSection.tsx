'use client';

import React, { useRef, useState } from 'react';
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
// LSFP-form-revision-v2 §4-9: description capped at 1,000 characters, and no
// visible minimum that pressures people into writing long legal essays.
const LIMITS = {
    name: 100,
    phone: 30,
    email: 150,
    message: 1000,
    messageMin: 10,
    deadline: 120,
    location: 120,
    opposing: 150,
    stageOther: 120,
} as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Consultation-request options. Matter types mirror the site's actual
// practice areas (form-revision-v2 §4-4: do not invent new ones).
const MATTER_TYPES = [
    'Criminal',
    'Divorce & Family',
    'Civil or Debt',
    'Real Estate & Lease',
    'Labor & Employment',
    'Other',
] as const;

// §4-5 — where the matter currently stands.
const STAGES = [
    'Contacted by police',
    'Police interview scheduled',
    'Received court papers',
    'Lawsuit already pending',
    'Dispute has arisen but no case has been filed',
    'Judgment or court decision already issued',
    'Other',
] as const;

// §4-10 — realistic contact channels only (no messengers the office doesn't use).
const CONTACT_METHODS = ['Email', 'Phone'] as const;

// §4-11 — time to CONTACT the applicant, never a consultation-time picker.
const BEST_TIMES = ['No Preference', 'Morning', 'Afternoon', '5 PM – 7 PM'] as const;

type FormState = {
    name: string;
    email: string;
    phone: string;
    matter: string;
    stage: string;
    stageOther: string;
    deadline: string;
    location: string;
    opposingParty: string;
    message: string;
    contactMethod: string;
    bestTime: string;
    agreed: boolean;
};

const EMPTY_FORM: FormState = {
    name: '',
    email: '',
    phone: '',
    matter: '',
    stage: '',
    stageOther: '',
    deadline: '',
    location: '',
    opposingParty: '',
    message: '',
    contactMethod: '',
    bestTime: 'No Preference',
    agreed: false,
};

type FieldErrors = Partial<
    Record<
        | 'name'
        | 'email'
        | 'phone'
        | 'matter'
        | 'stage'
        | 'location'
        | 'opposingParty'
        | 'message'
        | 'contactMethod'
        | 'agreed',
        string
    >
>;

function validate(form: FormState): FieldErrors {
    const errors: FieldErrors = {};
    if (!form.name.trim()) errors.name = 'Please enter your name.';
    else if (form.name.trim().length > LIMITS.name) errors.name = 'Name is too long.';

    if (!form.email.trim()) errors.email = 'Please enter your email.';
    else if (!EMAIL_RE.test(form.email.trim())) errors.email = 'Please enter a valid email address.';

    if (!form.phone.trim()) errors.phone = 'Please enter a phone number.';
    else if (form.phone.trim().length > LIMITS.phone) errors.phone = 'Phone number is too long.';

    if (!form.matter) errors.matter = 'Please choose the kind of matter.';
    if (!form.stage) errors.stage = 'Please choose where things currently stand.';

    if (!form.location.trim()) errors.location = 'Please tell us where the matter is based.';
    else if (form.location.trim().length > LIMITS.location) errors.location = 'Location is too long.';

    if (!form.opposingParty.trim())
        errors.opposingParty = "Please name the other party — or write 'Unknown' or 'Not applicable'.";
    else if (form.opposingParty.trim().length > LIMITS.opposing)
        errors.opposingParty = 'This entry is too long.';

    const msg = form.message.trim();
    if (!msg) errors.message = 'Please tell us briefly what happened.';
    else if (msg.length < LIMITS.messageMin) errors.message = 'Please provide a little more detail.';
    else if (msg.length > LIMITS.message) errors.message = 'Message is too long.';

    if (!form.contactMethod) errors.contactMethod = 'Please choose how we should contact you.';

    if (!form.agreed) errors.agreed = 'Please confirm you understand the consultation terms.';

    return errors;
}

/**
 * Assemble the entire request into one readable email body (§8/§8-A single-
 * assembly principle). The EmailJS dashboard template prints {{message_body}}
 * only, so future field changes need no dashboard edits. Ordered so the
 * office can judge at a glance: can we take it, any conflict, how urgent,
 * and how to reach the applicant.
 */
function buildMessageBody(form: FormState): string {
    const stage =
        form.stage === 'Other' && form.stageOther.trim()
            ? `Other — ${form.stageOther.trim()}`
            : form.stage;
    return [
        '— Applicant —',
        `Name: ${form.name.trim()}`,
        `Email: ${form.email.trim()}`,
        `Phone: ${form.phone.trim()}`,
        '',
        '— Matter —',
        `Legal Matter: ${form.matter}`,
        `Current Stage: ${stage}`,
        `Important Deadline: ${form.deadline.trim() || 'None provided'}`,
        `Location: ${form.location.trim()}`,
        `Opposing Party / Company: ${form.opposingParty.trim()}`,
        '',
        'Brief Description:',
        form.message.trim(),
        '',
        '— Contact —',
        `Preferred Contact Method: ${form.contactMethod}`,
        `Best Time to Contact: ${form.bestTime}`,
        '',
        'Consultation Fee Acknowledged: Yes (KRW 100,000 / 30 minutes, VAT included; appointment not confirmed by submission)',
    ].join('\n');
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

    const handleFormStart = () => {
        if (!startedRef.current) {
            startedRef.current = true;
            trackEvent('contact_form_started');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Guard against double submission (e.g. Enter key + click).
        if (status === 'submitting') return;

        // Honeypot tripped → silently accept without sending (do not tip off the bot).
        if (honeypot.trim() !== '') {
            setStatus('success');
            setFormState(EMPTY_FORM);
            return;
        }

        const nextErrors = validate(formState);
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;

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
                    // Kept for the template's subject/reply-to settings (§8-A rule 4).
                    from_name: formState.name.trim(),
                    from_email: formState.email.trim(),
                    from_phone: formState.phone.trim(),
                    matter_type: formState.matter,
                    // Single-assembly body — the template body prints only this.
                    message_body: buildMessageBody(formState),
                    // Legacy variable kept so the email stays readable until the
                    // dashboard template is switched to {{message_body}}.
                    message: buildMessageBody(formState),
                },
                EMAILJS_PUBLIC_KEY
            );

            setStatus('success');
            trackEvent('contact_form_submitted');
            // Google Ads conversion — only after the request was actually delivered,
            // so it never fires on click, on a validation failure, or on a send error.
            reportAdsConversion(ADS_CONTACT_CONVERSION);
            setFormState(EMPTY_FORM);
            setErrors({});
        } catch (error) {
            console.error("Failed to send email:", error);
            setStatus('error');
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
                {/* Header — form-revision-v2 §2: value frame + fee line kept; the
                    reply-with-times sentence replaced by the conflict-check flow;
                    pressure-removal paragraph kept with the not-confirmed clause. */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">Request a Consultation</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-5">
                        Meet directly with the attorney at our Pyeongtaek office — the attorney who would
                        actually handle your case.
                    </p>
                    {/* Fee line — visually distinct, echoing the site's fee blocks */}
                    <p className="inline-block bg-navy-900 text-white font-bold px-6 py-3 rounded-md mb-5">
                        30 minutes&ensp;·&ensp;₩100,000 (VAT included)&ensp;·&ensp;Korean or English, same fee
                    </p>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-3">
                        We will first confirm that we can take your matter — including a
                        conflict-of-interest check — and then contact you with available consultation times.
                    </p>
                    {/* Pressure-removal paragraph — keep (balances the checkbox friction). */}
                    <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                        Sending this form does not commit you to anything. Deciding whether to hire us after
                        the consultation is entirely up to you — and your appointment is not confirmed until
                        we contact you.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg relative overflow-hidden">
                    {/* Success Overlay — §6: received, review + conflict check, not yet confirmed. */}
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
                                of interest. If we are able to assist, we will contact you with available
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
                        {/* ——— About You (§9 grouping) ——— */}
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
                            {/* 3. Phone (international numbers welcome) */}
                            <div>
                                <label htmlFor="contact-phone" className="block text-sm font-bold text-gray-700 mb-2">
                                    Phone Number <span className="text-red-500" aria-label="required">*</span>
                                </label>
                                <input
                                    id="contact-phone"
                                    type="tel"
                                    required
                                    maxLength={LIMITS.phone}
                                    disabled={status === 'submitting'}
                                    className={inputClass}
                                    placeholder="010-1234-5678 or +1 555 123 4567"
                                    value={formState.phone}
                                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                    aria-required="true"
                                    aria-invalid={!!errors.phone}
                                    aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                                />
                                {errors.phone && (
                                    <p id="contact-phone-error" className="text-red-600 text-sm mt-1">{errors.phone}</p>
                                )}
                            </div>
                        </div>

                        {/* ——— About Your Matter ——— */}
                        <p className={groupHeadingClass}>About Your Matter</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* 4. Type of legal matter */}
                            <div>
                                <label htmlFor="contact-matter" className="block text-sm font-bold text-gray-700 mb-2">
                                    Type of Legal Matter <span className="text-red-500" aria-label="required">*</span>
                                </label>
                                <select
                                    id="contact-matter"
                                    required
                                    disabled={status === 'submitting'}
                                    className={`${inputClass} ${formState.matter ? 'text-gray-900' : 'text-gray-400'}`}
                                    value={formState.matter}
                                    onChange={(e) => setFormState({ ...formState, matter: e.target.value })}
                                    aria-required="true"
                                    aria-invalid={!!errors.matter}
                                    aria-describedby={errors.matter ? 'contact-matter-error' : undefined}
                                >
                                    <option value="" disabled>
                                        Choose one…
                                    </option>
                                    {MATTER_TYPES.map((m) => (
                                        <option key={m} value={m} className="text-gray-900">
                                            {m}
                                        </option>
                                    ))}
                                </select>
                                {errors.matter && (
                                    <p id="contact-matter-error" className="text-red-600 text-sm mt-1">{errors.matter}</p>
                                )}
                            </div>
                            {/* 5. Current stage */}
                            <div>
                                <label htmlFor="contact-stage" className="block text-sm font-bold text-gray-700 mb-2">
                                    Current Situation / Stage <span className="text-red-500" aria-label="required">*</span>
                                </label>
                                <select
                                    id="contact-stage"
                                    required
                                    disabled={status === 'submitting'}
                                    className={`${inputClass} ${formState.stage ? 'text-gray-900' : 'text-gray-400'}`}
                                    value={formState.stage}
                                    onChange={(e) => setFormState({ ...formState, stage: e.target.value })}
                                    aria-required="true"
                                    aria-invalid={!!errors.stage}
                                    aria-describedby={errors.stage ? 'contact-stage-error' : undefined}
                                >
                                    <option value="" disabled>
                                        Choose one…
                                    </option>
                                    {STAGES.map((s) => (
                                        <option key={s} value={s} className="text-gray-900">
                                            {s}
                                        </option>
                                    ))}
                                </select>
                                {errors.stage && (
                                    <p id="contact-stage-error" className="text-red-600 text-sm mt-1">{errors.stage}</p>
                                )}
                                {formState.stage === 'Other' && (
                                    <input
                                        id="contact-stage-other"
                                        type="text"
                                        maxLength={LIMITS.stageOther}
                                        disabled={status === 'submitting'}
                                        className={`${inputClass} mt-2`}
                                        placeholder="In a few words, where do things stand? (optional)"
                                        value={formState.stageOther}
                                        onChange={(e) => setFormState({ ...formState, stageOther: e.target.value })}
                                        aria-label="Briefly describe where things stand"
                                    />
                                )}
                            </div>
                            {/* 6. Important deadline (optional) */}
                            <div>
                                <label htmlFor="contact-deadline" className="block text-sm font-bold text-gray-700 mb-2">
                                    Important Deadline, If Any <span className="text-gray-400 font-normal">(optional)</span>
                                </label>
                                <input
                                    id="contact-deadline"
                                    type="text"
                                    maxLength={LIMITS.deadline}
                                    disabled={status === 'submitting'}
                                    className={inputClass}
                                    placeholder="e.g., hearing on 25 August, interview next Tuesday"
                                    value={formState.deadline}
                                    onChange={(e) => setFormState({ ...formState, deadline: e.target.value })}
                                    aria-describedby="contact-deadline-hint"
                                />
                                <p id="contact-deadline-hint" className="text-gray-400 text-xs mt-1">
                                    Court deadline, police interview date, hearing date, or another urgent date.
                                </p>
                            </div>
                            {/* 7. Location of the matter */}
                            <div>
                                <label htmlFor="contact-location" className="block text-sm font-bold text-gray-700 mb-2">
                                    Location of the Matter <span className="text-red-500" aria-label="required">*</span>
                                </label>
                                <input
                                    id="contact-location"
                                    type="text"
                                    required
                                    maxLength={LIMITS.location}
                                    disabled={status === 'submitting'}
                                    className={inputClass}
                                    placeholder="e.g., Pyeongtaek, Osan, Seoul — or another country"
                                    value={formState.location}
                                    onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                                    aria-required="true"
                                    aria-invalid={!!errors.location}
                                    aria-describedby={errors.location ? 'contact-location-error' : undefined}
                                />
                                {errors.location && (
                                    <p id="contact-location-error" className="text-red-600 text-sm mt-1">{errors.location}</p>
                                )}
                            </div>
                        </div>

                        {/* 8. Opposing party (conflict-of-interest check) */}
                        <div>
                            <label htmlFor="contact-opposing" className="block text-sm font-bold text-gray-700 mb-2">
                                Name of the Other Party or Company <span className="text-red-500" aria-label="required">*</span>
                            </label>
                            <input
                                id="contact-opposing"
                                type="text"
                                required
                                maxLength={LIMITS.opposing}
                                disabled={status === 'submitting'}
                                className={inputClass}
                                placeholder="Person or company on the other side — or 'Unknown' / 'Not applicable'"
                                value={formState.opposingParty}
                                onChange={(e) => setFormState({ ...formState, opposingParty: e.target.value })}
                                aria-required="true"
                                aria-invalid={!!errors.opposingParty}
                                aria-describedby={
                                    errors.opposingParty ? 'contact-opposing-error contact-opposing-hint' : 'contact-opposing-hint'
                                }
                            />
                            <p id="contact-opposing-hint" className="text-gray-400 text-xs mt-1">
                                This information is used to check for potential conflicts of interest.
                            </p>
                            {errors.opposingParty && (
                                <p id="contact-opposing-error" className="text-red-600 text-sm mt-1">{errors.opposingParty}</p>
                            )}
                        </div>

                        {/* 9. Brief description */}
                        <div>
                            <label htmlFor="contact-message" className="block text-sm font-bold text-gray-700 mb-2">
                                Brief Description of Your Matter <span className="text-red-500" aria-label="required">*</span>
                            </label>
                            <textarea
                                id="contact-message"
                                required
                                rows={4}
                                maxLength={LIMITS.message}
                                disabled={status === 'submitting'}
                                className={inputClass}
                                placeholder="Briefly explain what happened and what legal help you are seeking — plain English is fine."
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                aria-required="true"
                                aria-invalid={!!errors.message}
                                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                            ></textarea>
                            {errors.message && (
                                <p id="contact-message-error" className="text-red-600 text-sm mt-1">{errors.message}</p>
                            )}
                        </div>

                        {/* ——— How Should We Contact You? ——— */}
                        <p className={groupHeadingClass}>How Should We Contact You?</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* 10. Preferred contact method */}
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
                                                onChange={(e) => setFormState({ ...formState, contactMethod: e.target.value })}
                                            />
                                            {m}
                                        </label>
                                    ))}
                                </div>
                                {errors.contactMethod && (
                                    <p id="contact-method-error" className="text-red-600 text-sm mt-1">{errors.contactMethod}</p>
                                )}
                            </fieldset>
                            {/* 11. Best time to CONTACT (optional; never a consultation-time picker) */}
                            <div>
                                <label htmlFor="contact-besttime" className="block text-sm font-bold text-gray-700 mb-2">
                                    Best Time for Us to Contact You <span className="text-gray-400 font-normal">(optional)</span>
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
                        </div>

                        {/* ——— Consultation Fee ——— */}
                        <p className={groupHeadingClass}>Consultation Fee</p>
                        {/* 12. Fee acknowledgement (§4-12) */}
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
                                    I understand that the consultation fee is KRW 100,000 (VAT included) for 30
                                    minutes and that submitting this form does not confirm an appointment.{' '}
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

                        {/* Submit (§5 — no booking-confirmation language) */}
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
