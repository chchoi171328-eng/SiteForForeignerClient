'use client';

// Guide listing with a six-field filter. Cards show listingTitle, field label
// and "Reviewed {YYYY-MM}" — guides are evergreen, so no publish dates exist.

import { useState } from 'react';
import Link from 'next/link';
import {
    GUIDE_FIELDS,
    FIELD_LABELS,
    guidePath,
    type Guide,
    type GuideField,
} from '@/content/guides/registry';
import { Icons } from '@/components/Icons';

export default function GuidesList({ guides }: { guides: Guide[] }) {
    const [field, setField] = useState<GuideField | 'all'>('all');
    const visible = field === 'all' ? guides : guides.filter((g) => g.field === field);

    return (
        <div>
            {/* Field filter */}
            <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter guides by area">
                <button
                    onClick={() => setField('all')}
                    aria-pressed={field === 'all'}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${field === 'all'
                        ? 'bg-navy-900 text-white'
                        : 'bg-slate-100 text-gray-600 hover:bg-slate-200'
                        }`}
                >
                    All areas
                </button>
                {GUIDE_FIELDS.map((f) => (
                    <button
                        key={f}
                        onClick={() => setField(f)}
                        aria-pressed={field === f}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${field === f
                            ? 'bg-navy-900 text-white'
                            : 'bg-slate-100 text-gray-600 hover:bg-slate-200'
                            }`}
                    >
                        {FIELD_LABELS[f]}
                    </button>
                ))}
            </div>

            {visible.length === 0 ? (
                <p className="text-center text-gray-600 py-16">
                    {guides.length === 0
                        ? 'Guides are on their way. Check back soon.'
                        : 'No guides in this area yet.'}
                </p>
            ) : (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {visible.map((g) => (
                        <li key={`${g.field}/${g.slug}`}>
                            <Link
                                href={guidePath(g)}
                                className="block h-full bg-white border border-gray-200 rounded-lg p-6 hover:border-gold-400 hover:shadow-lg transition-all group"
                            >
                                <p className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-2">
                                    {FIELD_LABELS[g.field]}
                                </p>
                                <h2 className="text-xl font-serif font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-3">
                                    {g.listingTitle}
                                </h2>
                                <p className="text-sm text-gray-600 leading-relaxed mb-4">{g.metaDescription}</p>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400">Reviewed {g.reviewed}</span>
                                    <span className="text-gold-600 font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Read
                                        <Icons.ArrowRight className="w-4 h-4" aria-hidden="true" />
                                    </span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
