'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Icons } from './Icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// EmailJS Configuration from environment variables
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const ContactSection: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const { ref, isVisible } = useScrollAnimation(0.2);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
                // Real EmailJS Send
                await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    {
                        from_name: formState.name,
                        from_email: formState.email,
                        from_phone: formState.phone,
                        message: formState.message,
                    },
                    EMAILJS_PUBLIC_KEY
                );
            } else {
                // Simulated Send if keys are missing
                console.log("EmailJS keys are missing. Simulating success.");
                await new Promise(resolve => setTimeout(resolve, 1500));
            }

            setStatus('success');
            setFormState({ name: '', email: '', phone: '', message: '' });

            // Reset status after showing success message
            setTimeout(() => {
                setStatus('idle');
            }, 5000);

        } catch (error) {
            console.error("Failed to send email:", error);
            alert("Failed to send message. Please try again or contact us directly via phone.");
            setStatus('idle');
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
                    <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">Request a Consultation</h2>
                    <p className="text-gray-600">Send us a message and our team will get back to you within 24 hours.</p>
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

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-bold text-gray-700 mb-2">
                                    Full Name <span className="text-red-500" aria-label="required">*</span>
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    required
                                    disabled={status === 'submitting'}
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all disabled:bg-gray-100"
                                    placeholder="John Doe"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    aria-required="true"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-phone" className="block text-sm font-bold text-gray-700 mb-2">
                                    Phone Number <span className="text-red-500" aria-label="required">*</span>
                                </label>
                                <input
                                    id="contact-phone"
                                    type="tel"
                                    required
                                    disabled={status === 'submitting'}
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all disabled:bg-gray-100"
                                    placeholder="010-1234-5678"
                                    value={formState.phone}
                                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                    aria-required="true"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="contact-email" className="block text-sm font-bold text-gray-700 mb-2">
                                    Email Address <span className="text-red-500" aria-label="required">*</span>
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    required
                                    disabled={status === 'submitting'}
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all disabled:bg-gray-100"
                                    placeholder="john@example.com"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    aria-required="true"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="contact-message" className="block text-sm font-bold text-gray-700 mb-2">
                                How can we help? <span className="text-red-500" aria-label="required">*</span>
                            </label>
                            <textarea
                                id="contact-message"
                                required
                                rows={4}
                                disabled={status === 'submitting'}
                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all disabled:bg-gray-100"
                                placeholder="Briefly describe your legal inquiry..."
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                aria-required="true"
                            ></textarea>
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
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
