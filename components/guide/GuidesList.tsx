// Field-grouped guide listing: one section per practice-area field (only
// fields that have guides), each a dense list of GuideRow items. The chips at
// the top are anchor links that scroll to their section — no client state, so
// this stays a server component.

import {
    GUIDE_FIELDS,
    FIELD_LABELS,
    type GuideMeta,
    type GuideField,
} from '@/content/guides/registry';
import GuideRow from '@/components/guide/GuideRow';

export default function GuidesList({ guides }: { guides: GuideMeta[] }) {
    const sections = GUIDE_FIELDS
        .map((field) => ({ field, items: guides.filter((g) => g.field === field) }))
        .filter((s) => s.items.length > 0);

    if (sections.length === 0) {
        return <p className="text-center text-gray-600 py-16">Guides are on their way. Check back soon.</p>;
    }

    return (
        <div>
            {/* Field filter — anchors that scroll to each section */}
            <nav aria-label="Jump to an area" className="flex flex-wrap gap-2 mb-12">
                {sections.map(({ field, items }) => (
                    <a
                        key={field}
                        href={`#${field}`}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-slate-100 text-gray-600 hover:bg-navy-900 hover:text-white transition-colors"
                    >
                        {FIELD_LABELS[field as GuideField]}
                        <span className="ml-1.5 text-xs opacity-60">{items.length}</span>
                    </a>
                ))}
            </nav>

            {/* One section per field */}
            <div className="space-y-12">
                {sections.map(({ field, items }) => (
                    <section key={field} id={field} aria-labelledby={`${field}-heading`} className="scroll-mt-28">
                        <h2
                            id={`${field}-heading`}
                            className="text-2xl font-serif font-bold text-navy-900 pb-3 border-b-2 border-gold-400"
                        >
                            {FIELD_LABELS[field as GuideField]}
                        </h2>
                        <ul className="divide-y divide-gray-200">
                            {items.map((g) => (
                                <GuideRow key={g.slug} guide={g} />
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </div>
    );
}
