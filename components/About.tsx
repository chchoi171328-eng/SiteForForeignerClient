import React from 'react';
import { Icons } from './Icons';
import LazyImage from './LazyImage';
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
                            <LazyImage
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                                alt="Professional business meeting between lawyers and clients discussing legal matters"
                                className="rounded-lg shadow-2xl z-10 relative"
                            />
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-navy-900 rounded-lg -z-0 hidden md:block" aria-hidden="true"></div>
                            <div className="absolute -top-6 -left-6 w-48 h-48 border-4 border-gold-400 rounded-lg -z-0 hidden md:block" aria-hidden="true"></div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-gold-400 font-bold uppercase tracking-widest mb-2">Who We Are</h2>
                        <h3 className="text-4xl font-serif font-bold text-navy-900 mb-6">Expert Legal Solutions for International Clients</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            Navigating the Korean legal system requires more than just representation—it demands specialized insight and strategy. At <span className="font-bold text-navy-900">SOL & LUNA Law Firm</span>, we are dedicated to helping expatriates and foreign business owners operating in Korea overcome complex legal challenges with confidence.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Backed by years of experience and a proven track record in foreigner-related cases, our team provides comprehensive legal support tailored to the global community. We combine deep knowledge of Korean law with an international perspective to protect your rights and deliver results.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="bg-navy-50 p-3 rounded-full text-gold-600" aria-hidden="true">
                                    <Icons.Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy-900">English Service</h4>
                                    <p className="text-sm text-gray-500">Fluent communication</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-navy-50 p-3 rounded-full text-gold-600" aria-hidden="true">
                                    <Icons.Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy-900">Trusted Defense</h4>
                                    <p className="text-sm text-gray-500">Proven track record</p>
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
