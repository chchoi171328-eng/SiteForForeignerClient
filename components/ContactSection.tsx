'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Icons } from './Icons';
import { CONTACT_INFO } from '../constants';
import { trackEvent } from '../lib/gtag';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// EmailJS Configuration from environment variables
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

// Content-length limits (also enforced with maxLength on the inputs).
const LIMITS = { name: 100, phone: 30, email: 150, message: 2000, messageMin: 10 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = Partial<Record<'name' | 'email' | 'phone' | 'message', string>>;

function validate(form: { name: string; email: string; phone: string; message: string }): FieldErrors {
    const errors: FieldErrors = {};
    if (!form.name.trim()) errors.name = 'Please enter your name.';
    else if (form.name.trim().length > LIMITS.name) errors.name = 'Name is too long.';

    if (!form.phone.trim()) errors.phone = 'Please enter a phone number.';
    else if (form.phone.trim().length > LIMITS.phone) errors.phone = 'Phone number is too long.';

    if (!form.email.trim()) errors.email = 'Please enter your email.';
    else if (!EMAIL_RE.test(form.email.trim())) errors.email = 'Please enter a valid email address.';

    const msg = form.message.trim();
    if (!msg) errors.message = 'Please describe your inquiry.';
    else if (msg.length < LIMITS.messageMin) errors.message = 'Please provide a little more detail.';
    else if (msg.length > LIMITS.message) errors.message = 'Message is too long.';

    return errors;
}

const ContactSection: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
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
            setFormState({ name: '', email: '', phone: '', message: '' });
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
                    from_name: formState.name.trim(),
                    from_email: formState.email.trim(),
                    from_phone: formState.phone.trim(),
                    message: formState.message.trim(),
                },
                EMAILJS_PUBLIC_KEY
            );

            setStatus('success');
            trackEvent('contact_form_submitted');
            setFormState({ name: '', email: '', phone: '', message: '' });
            setErrors({});
        } catch (error) {
            console.error("Failed to send email:", error);
            setStatus('error');
        }
    };

    return (
        <section
            id="contact"
            ref={ref as React.RefObject<HTMLElement>}
            className={`py-20 bg-slate-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">Tell Us What Happened</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-3">
                        Describe your situation in your own words — plain English is fine, and you don&apos;t need to organize it like a lawyer would. We respond during business hours (weekdays) to schedule an assessment.
                    </p>
                    <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                        Sending this form does not create an attorney–client relationship and does not commit you to anything.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg relative overflow-hidden">
                    {/* Success Overlay */}
                    {status === 'success' && (
                        <div
                            className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-8 animate-fade-in"
                            role="alert"
                            aria-live="polite"
                        >
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600" aria-hidden="true">
                                <Icons.ArrowRight className="w-8 h-8 -rotate-45" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy-900 mb-2">Message Sent!</h3>
                            <p className="text-gray-600 max-w-md">
                                Thank you for reaching out. We have received your inquiry and will contact you shortly at the email address provided.
                            </p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-6 text-gold-600 font-bold hover:text-gold-700 underline"
                            >
                                Send another message
                            </button>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} onFocus={handleFormStart} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all disabled:bg-gray-100"
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
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all disabled:bg-gray-100"
                                    placeholder="010-1234-5678"
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
                            <div className="md:col-span-2">
                                <label htmlFor="contact-email" className="block text-sm font-bold text-gray-700 mb-2">
                                    Email Address <span className="text-red-500" aria-label="required">*</span>
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    required
                                    maxLength={LIMITS.email}
                                    disabled={status === 'submitting'}
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all disabled:bg-gray-100"
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
                        </div>

                        <div>
                            <label htmlFor="contact-message" className="block text-sm font-bold text-gray-700 mb-2">
                                What happened? <span className="text-red-500" aria-label="required">*</span>
                            </label>
                            <textarea
                                id="contact-message"
                                required
                                rows={4}
                                maxLength={LIMITS.message}
                                disabled={status === 'submitting'}
                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all disabled:bg-gray-100"
                                placeholder="Briefly describe your legal inquiry..."
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

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className={`w-full bg-navy-900 text-white font-bold py-4 rounded-md hover:bg-navy-800 transition-colors flex items-center justify-center gap-2 ${status === 'submitting' ? 'opacity-80 cursor-wait' : ''}`}
                            aria-label={status === 'submitting' ? 'Sending message' : 'Send message'}
                        >
                            {status === 'submitting' ? (
                                <>
                                    <Icons.Loader className="w-5 h-5 animate-spin" aria-hidden="true" />
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <Icons.ArrowRight className="w-5 h-5" aria-hidden="true" />
                                </>
                            )}
                        </button>

                        {status === 'error' && (
                            <p role="alert" aria-live="assertive" className="text-red-600 text-center font-medium">
                                We could not send your message. Please try again later, or contact us directly at{' '}
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
