'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ATTORNEY } from '../constants';
import { Icons } from './Icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AttorneyIntro: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.2);

    return (
        <section
            id="attorney"
            ref={ref as React.RefObject<HTMLElement>}
            className={`py-20 md:py-28 bg-slate-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="container mx-auto px-6 max-w-4xl text-center">
                {/* Portrait kept in its original 2:3 ratio rather than cropped square */}
                <div className="mx-auto mb-8 w-44 md:w-52 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src="/assets/attorney-choi-about.jpg"
                        alt={`Attorney ${ATTORNEY.nameEn} at the SOL & LUNA office in Pyeongtaek`}
                        width={1200}
                        height={1800}
                        className="w-full h-auto object-cover"
                        sizes="(max-width: 768px) 176px, 208px"
                    />
                </div>

                <h2 className="text-gold-600 font-bold uppercase tracking-widest mb-2">Representative Attorney</h2>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6">
                    {ATTORNEY.nameEn} <span className="text-gray-400 font-light">({ATTORNEY.nameKr})</span>
                </h3>

                <div className="inline-flex items-center gap-2 bg-navy-50 text-navy-900 px-4 py-2 rounded-full text-sm font-medium mb-8">
                    <Icons.Shield className="w-4 h-4 text-gold-600" aria-hidden="true" />
                    KBA-Registered Specialist — {ATTORNEY.kbaSpecialties.join(' & ')}
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    Attorney Choi served as in-house counsel at GS Engineering &amp; Construction and Lotte
                    Engineering &amp; Construction before founding his practice, and holds KBA specialist
                    registration in Civil and Criminal Law.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    He also serves as a legal advisor at the foreign resident counseling center of the
                    Pyeongtaek International Exchange Foundation (PIEF).
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {ATTORNEY.englishService}
                </p>
                <p className="text-navy-900 font-medium leading-relaxed mb-10">
                    Every credential on this site is a matter of public record in Korea.
                    We encourage you to verify them.
                </p>

                <Link
                    href="/attorneys/chulho-choi"
                    className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-sm font-bold text-lg transition-colors"
                >
                    View Full Profile
                    <Icons.ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
            </div>
        </section>
    );
};

export default AttorneyIntro;
