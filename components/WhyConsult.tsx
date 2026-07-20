'use client';

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WhyConsult: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.2);

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className={`py-20 md:py-28 bg-slate-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-8">
                    Feeling lost here is not a weakness.
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    You are dealing with a legal system you didn&apos;t grow up with, in a language that
                    isn&apos;t yours. Being anxious about that is rational — what makes it worse is not
                    knowing where you actually stand.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    That is what the first consultation is for. You describe what happened, in English, to
                    the attorney himself. He explains what Korean law says about your situation and what
                    outcomes are realistic. If you&apos;re deciding whether to sue, that includes telling you
                    when the honest answer is &ldquo;don&apos;t.&rdquo; If you&apos;re facing a charge or a
                    claim you didn&apos;t choose, it means a clear-eyed view of the best achievable outcome —
                    not false comfort, and not needless alarm.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-10">
                    Understanding your position comes first.<br />
                    Deciding whether to hire us comes after — or not at all.
                </p>

                <p className="border-l-4 border-gold-400 pl-6 text-navy-900 text-lg font-medium leading-relaxed">
                    The consultation is paid for a reason: our advice doesn&apos;t depend on signing you as a
                    client. You pay for the assessment — the assessment is the product.
                </p>
            </div>
        </section>
    );
};

export default WhyConsult;
