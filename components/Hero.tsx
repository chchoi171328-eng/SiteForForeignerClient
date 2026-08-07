'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CONTACT_INFO, CONSULTATION } from '../constants';
import { Icons } from './Icons';
import { reportPhoneConversion } from '../lib/gtag';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero-window-court.jpg"
                    alt="View of the Pyeongtaek courthouse and prosecutors' office from the SOL & LUNA office window"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />

                <div className="absolute inset-0 bg-navy-900/80"></div>
            </div>

            {/* Photo caption — small, set apart from the hero copy, and kept clear of
                the floating call buttons that sit bottom-right on small screens. */}
            <p className="absolute bottom-4 left-4 z-10 max-w-[15rem] sm:max-w-xs text-left text-[11px] md:text-xs text-gray-400 leading-snug">
                The Pyeongtaek courthouse and prosecutors&apos; office — seen from our office window.
            </p>

            {/* pb reserves room for the absolutely-positioned photo caption below */}
            <div className="container mx-auto px-6 relative z-10 text-center pb-24 sm:pb-16">
                <div className="animate-fade-in-up">
                    <p className="text-gold-400 font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
                        A Law Firm for Foreign Residents in Korea
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold mb-6 leading-tight">
                        We don&apos;t take every case.
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-sans leading-relaxed">
                        We listen to your situation first, then tell you honestly where you stand — the strengths and the weaknesses — so you can make an informed decision about what to do next.
                    </p>

                    {/* Prominent Phone Number */}
                    <div className="mb-10">
                        <a
                            href={`tel:${CONTACT_INFO.PHONE}`}
                            onClick={reportPhoneConversion}
                            className="inline-flex items-center gap-3 text-3xl md:text-5xl font-serif font-bold text-white hover:text-gold-400 transition-colors group"
                            aria-label={`Call us at ${CONTACT_INFO.PHONE}`}
                        >
                            <Icons.Phone className="w-8 h-8 md:w-12 md:h-12 group-hover:scale-110 transition-transform" />
                            <span className="border-b-2 border-transparent group-hover:border-gold-400 pb-1 transition-colors">
                                {CONTACT_INFO.PHONE}
                            </span>
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-gold-400 hover:bg-gold-500 text-navy-900 px-8 py-4 rounded-sm font-bold text-lg transition-all flex items-center justify-center gap-2"
                        >
                            <Icons.Calendar className="w-5 h-5" />
                            Book a 30-Minute Assessment
                        </Link>
                        <Link
                            href="/attorneys/chulho-choi"
                            className="bg-transparent border border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-sm font-bold text-lg transition-all"
                        >
                            Meet Attorney Chulho Choi
                        </Link>
                    </div>

                    {/* Fact line */}
                    <p className="mt-10 mx-auto max-w-2xl border-t border-white/20 pt-6 text-gray-300 text-sm md:text-base">
                        {CONSULTATION.HERO_FACT_LINE}
                    </p>

                    {/* Identifier */}
                    <p className="mt-6 text-gray-400 text-xs md:text-sm tracking-wide uppercase">
                        SOL &amp; LUNA · Law Firm Myeong · Pyeongtaek
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
