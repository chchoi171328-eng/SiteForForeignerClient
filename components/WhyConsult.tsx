'use client';

import React from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WhyConsult: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.2);

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className={`relative py-20 md:py-28 bg-navy-900 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            {/* Decorative texture background — readability of the text takes priority */}
            <Image
                src="/assets/texture-section.png"
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy-900/85" aria-hidden="true" />

            <div className="container mx-auto px-6 max-w-3xl relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
                    Feeling lost here is not a weakness.
                </h2>

                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                    You are dealing with a legal system you didn&apos;t grow up with, in a language that
                    isn&apos;t yours. Being anxious about that is rational — what makes it worse is not
                    knowing where you actually stand.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                    That is what the first consultation is for. You describe what happened, in English, to
                    the attorney himself. He explains what Korean law says about your situation and what
                    outcomes are realistic. If you&apos;re deciding whether to sue, that includes telling you
                    when the honest answer is &ldquo;don&apos;t.&rdquo; If you&apos;re facing a charge or a
                    claim you didn&apos;t choose, it means a clear-eyed view of the best achievable outcome —
                    not false comfort, and not needless alarm.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-10">
                    Understanding your position comes first.<br />
                    Deciding whether to hire us comes after — or not at all.
                </p>

                <p className="border-l-4 border-gold-400 pl-6 text-white text-lg font-medium leading-relaxed">
                    The consultation is paid for a reason: our advice doesn&apos;t depend on signing you as a
                    client. You pay for the assessment — the assessment is the product.
                </p>
            </div>
        </section>
    );
};

export default WhyConsult;
