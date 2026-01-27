import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Icons } from './Icons';
import { handleSmoothScroll } from '../utils/smoothScroll';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt="Modern law firm office environment with professional atmosphere"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy-900/80"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="animate-fade-in-up">
                    <p className="text-gold-400 font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
                        Trusted Legal Partner in Korea
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold mb-6 leading-tight">
                        Navigating Korean Law <br />
                        <span className="text-gray-300 font-light">With Expertise & Experience</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-sans leading-relaxed">
                        SOL & LUNA (Law Firm Myeong) provides dedicated legal services tailored for the international community, backed by extensive experience and specialized expertise.
                    </p>

                    {/* Prominent Phone Number */}
                    <div className="mb-10">
                        <a
                            href={`tel:${CONTACT_INFO.PHONE}`}
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
                        <a
                            href="#contact"
                            className="bg-gold-400 hover:bg-gold-500 text-navy-900 px-8 py-4 rounded-sm font-bold text-lg transition-all flex items-center justify-center gap-2"
                            onClick={(e) => handleSmoothScroll(e, '#contact')}
                        >
                            <Icons.Calendar className="w-5 h-5" />
                            Initial Consultation
                        </a>
                        <a
                            href="#practice"
                            className="bg-transparent border border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-sm font-bold text-lg transition-all"
                            onClick={(e) => handleSmoothScroll(e, '#practice')}
                        >
                            Our Practice Areas
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
