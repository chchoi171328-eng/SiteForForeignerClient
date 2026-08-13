'use client';

import React from 'react';
import Link from 'next/link';
import { Icons } from './Icons';
import SituationNav from './SituationNav';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Home practice-area section. The card grid was replaced by the
 * situation-based navigation per the city-pages brief §C-1 — visitors pick
 * the sentence that matches their problem instead of guessing a legal field.
 */
const PracticeAreas: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.2);

    return (
        <section
            id="practice"
            ref={ref as React.RefObject<HTMLElement>}
            className={`py-20 md:py-32 bg-slate-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="container mx-auto px-6 max-w-3xl">
                <SituationNav />
                <p className="mt-8">
                    <Link
                        href="/practice-areas"
                        className="inline-flex items-center gap-1 text-gold-600 hover:text-gold-700 font-bold underline underline-offset-2"
                    >
                        Browse all practice areas
                        <Icons.ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default PracticeAreas;
