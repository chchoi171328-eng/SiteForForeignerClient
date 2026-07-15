import Link from 'next/link'
import type { LegalDocument } from '@/content/legal'

const BASE = 'https://www.lsfp.co.kr'

/** Shared presentation for /privacy, /terms, /disclaimer. */
export default function LegalDocumentPage({ doc }: { doc: LegalDocument }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: doc.title,
    description: doc.metaDescription,
    url: `${BASE}/${doc.slug}`,
  }

  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container mx-auto px-6 max-w-3xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gold-600">Home</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-gray-800">{doc.title}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6">{doc.title}</h1>

        {doc.needsReview && (
          <div role="note" className="mb-8 border-l-4 border-gold-400 bg-slate-50 p-4 text-sm text-gray-600 rounded-r-lg">
            This page uses standard wording and is pending final review by the firm.
          </div>
        )}

        <p className="text-gray-700 leading-relaxed mb-10">{doc.intro}</p>

        {doc.sections.map((section) => (
          <section key={section.heading ?? section.paragraphs?.[0]} className="mb-8">
            {section.heading && (
              <h2 className="text-xl font-bold text-navy-900 mb-3">{section.heading}</h2>
            )}
            {section.paragraphs?.map((p) => (
              <p key={p} className="text-gray-700 leading-relaxed mb-3">{p}</p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {section.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {doc.effectiveDate && (
          <p className="text-sm text-gray-500 border-t border-gray-200 pt-6 mt-10">
            Effective date: {doc.effectiveDate}
          </p>
        )}
      </div>
    </div>
  )
}
