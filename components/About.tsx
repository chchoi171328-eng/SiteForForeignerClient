'use client';

import React from 'react';
import Image from 'next/image';
import { Icons } from './Icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.2);

    return (
        <section
            id="about"
            ref={ref as React.RefObject<HTMLElement>}
            className={`py-20 md:py-32 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <Image
                                src="/assets/office1.png"
                                alt="Professional business meeting between lawyers and clients discussing legal matters"
                                width={800}
                                height={600}
                                className="rounded-lg shadow-2xl z-10 relative object-cover w-full h-auto"
                                loading="eager"
                                priority
                            />
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-navy-900 rounded-lg -z-0 hidden md:block" aria-hidden="true"></div>
                            <div className="absolute -top-6 -left-6 w-48 h-48 border-4 border-gold-400 rounded-lg -z-0 hidden md:block" aria-hidden="true"></div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-gold-400 font-bold uppercase tracking-widest mb-2">Who We Are</h2>
                        <h3 className="text-4xl font-serif font-bold text-navy-900 mb-6">A Small Firm, Deliberately</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            <span className="font-bold text-navy-900">SOL &amp; LUNA (Law Firm Myeong)</span> is a Korean law firm in Pyeongtaek serving foreign residents across Gyeonggi-do and beyond.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            We deliberately limit the number of cases we take on at one time. The attorney you meet at your first consultation is the same attorney who drafts your documents, appears at your hearings, and stands with you in court. Nothing is lost in handoffs — and nothing is lost in translation, because your attorney is the one speaking with you.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="bg-navy-50 p-3 rounded-full text-gold-600" aria-hidden="true">
                                    <Icons.Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy-900">English, directly with the attorney</h4>
                                    <p className="text-sm text-gray-500">no intermediaries, no relay interpreting</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-navy-50 p-3 rounded-full text-gold-600" aria-hidden="true">
                                    <Icons.Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy-900">KBA-Registered Specialist</h4>
                                    <p className="text-sm text-gray-500">Civil Law &amp; Criminal Law — verifiable public registration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
