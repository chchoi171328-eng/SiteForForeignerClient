'use client';

import React from 'react';
import { SERVICE_AREAS } from '../constants';
import { Icons } from './Icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PracticeAreas: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.2);

    return (
        <section
            id="practice"
            ref={ref as React.RefObject<HTMLElement>}
            className={`py-20 md:py-32 bg-slate-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-gold-600 font-bold uppercase tracking-widest mb-2">Our Practice Areas</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">Comprehensive Legal Solutions</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICE_AREAS.map((area, index) => {
                        const IconComponent = Icons[area.icon as keyof typeof Icons] || Icons.Scale;
                        return (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-gold-400 group hover:-translate-y-2 cursor-pointer"
                            >
                                <div className="mb-6 p-4 bg-navy-50 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-navy-900 transition-colors" aria-hidden="true">
                                    <IconComponent className="w-8 h-8 text-navy-900 group-hover:text-gold-400 transition-colors" />
                                </div>
                                <h4 className="text-xl font-bold text-navy-900 mb-3">{area.title}</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    {area.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PracticeAreas;
