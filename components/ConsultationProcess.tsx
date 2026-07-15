'use client';

import React from 'react';
import Link from 'next/link';
import { CONSULTATION, CONTACT_INFO } from '../constants';
import { Icons } from './Icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const STEPS = [
    {
        title: 'Submit an Inquiry',
        body: 'Send a brief description of your situation through the contact form or by phone.',
    },
    {
        title: 'Paid Consultation',
        body: `A ${CONSULTATION.DURATION_MIN}-minute consultation is ${CONSULTATION.FEE_KRW_LABEL} (${CONSULTATION.FEE_USD_APPROX_LABEL}), VAT included, by appointment.`,
    },
    {
        title: 'Honest Assessment',
        body: 'We explain the realistic outcomes first — including when litigation is not worth pursuing.',
    },
    {
        title: 'Consistent Representation',
        body: 'The same attorney handles your matter from consultation through to court.',
    },
];

const ConsultationProcess: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.2);

    return (
        <section
            id="consultation"
            ref={ref as React.RefObject<HTMLElement>}
            className={`py-20 md:py-28 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-14">
                    <h2 className="text-gold-600 font-bold uppercase tracking-widest mb-2">How We Work</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">The Consultation Process</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        We do not take on every case, and we do not recommend litigation that has little chance
                        of a meaningful result. We listen first, then tell you honestly what is realistic.
                    </p>
                </div>

                <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {STEPS.map((step, i) => (
                        <li key={step.title} className="bg-slate-50 p-6 rounded-lg border-t-4 border-gold-400">
                            <div className="text-gold-600 font-serif font-bold text-3xl mb-3" aria-hidden="true">
                                {String(i + 1).padStart(2, '0')}
                            </div>
                            <h4 className="font-bold text-navy-900 mb-2">{step.title}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
                        </li>
                    ))}
                </ol>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
                    <span className="inline-flex items-center gap-2">
                        <Icons.Calendar className="w-4 h-4 text-gold-600" aria-hidden="true" />
                        {CONTACT_INFO.HOURS_EN}
                    </span>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 px-6 py-3 rounded-sm font-bold transition-colors"
                    >
                        Request a Paid Consultation
                        <Icons.ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ConsultationProcess;
