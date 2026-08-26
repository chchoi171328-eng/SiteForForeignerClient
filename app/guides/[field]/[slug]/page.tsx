import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  GUIDES,
  FIELD_LABELS,
  getGuide,
  getGuideBySlug,
  guidePath,
} from '@/content/guides/registry'
import { PRACTICE_DISCLAIMER } from '@/content/practiceAreas'
import { CONSULTATION, CONTACT_INFO } from '@/constants'
import { Icons } from '@/components/Icons'
import TrackView from '@/components/TrackView'

const BASE = 'https://www.lsfp.co.kr'

export function generateStaticParams() {
  return GUIDES.map((g) => ({ field: g.field, slug: g.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ field: string; slug: string }>
}): Promise<Metadata> {
  const { field, slug } = await params
  const guide = getGuide(field, slug)
  if (!guide) return {}

  const url = `${BASE}${guidePath(guide)}`
  const title = guide.metaTitle ?? guide.listingTitle
  return {
    title,
    description: guide.metaDescription,
    openGraph: { title: `${title} | SOL & LUNA Law Firm`, description: guide.metaDescription, url },
    twitter: { card: 'summary', title: `${title} | SOL & LUNA Law Firm`, description: guide.metaDescription },
    alternates: { canonical: url },
  }
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ field: string; slug: string }>
}) {
  const { field, slug } = await params
  const guide = getGuide(field, slug)
  if (!guide) notFound()

  const Body = guide.body
  const related = (guide.related ?? [])
    .map((s) => getGuideBySlug(s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.metaTitle ?? guide.listingTitle,
    description: guide.metaDescription,
    url: `${BASE}${guidePath(guide)}`,
    dateModified: `${guide.reviewed}-01`,
    author: { '@type': 'Organization', name: 'SOL & LUNA Law Firm' },
    publisher: { '@type': 'Organization', name: 'SOL & LUNA Law Firm', url: BASE },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Legal Guides', item: `${BASE}/guides` },
        { '@type': 'ListItem', position: 3, name: guide.listingTitle, item: `${BASE}${guidePath(guide)}` },
      ],
    },
  }

  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <TrackView event="guide_viewed" params={{ field: guide.field, slug: guide.slug }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="container mx-auto px-6 max-w-3xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gold-600">Home</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <Link href="/guides" className="hover:text-gold-600">Legal Guides</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-gray-800">{guide.listingTitle}</span>
        </nav>

        {/* Header — evergreen: Reviewed only, no publish date */}
        <header className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-3">
            {FIELD_LABELS[guide.field]}
          </p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-3 leading-tight">
            {guide.listingTitle}
          </h1>
          <p className="text-sm text-gray-400">Reviewed {guide.reviewed}</p>
        </header>

        {/* Body */}
        <div className="guide-body">
          <Body />
        </div>

        {/* Consultation CTA */}
        <section className="mt-12 bg-navy-900 text-white p-8 rounded-xl">
          <h2 className="text-xl font-serif font-bold mb-3">Talk it through with the attorney</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            A {CONSULTATION.DURATION_MIN}-minute consultation is {CONSULTATION.FEE_KRW_LABEL}{' '}
            ({CONSULTATION.FEE_USD_APPROX_LABEL}), VAT included —{' '}
            {CONSULTATION.SHORT_FEE_KRW_LABEL} if it ends within{' '}
            {CONSULTATION.SHORT_DURATION_MIN} minutes. The same fee in Korean or English, conducted
            by the attorney who would handle your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-gold-400 hover:bg-gold-500 text-navy-900 px-6 py-3 rounded-sm font-bold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Icons.Calendar className="w-5 h-5" aria-hidden="true" />
              Request a Consultation
            </Link>
            <a
              href={`tel:${CONTACT_INFO.PHONE}`}
              className="border border-white/40 hover:bg-white/10 text-white px-6 py-3 rounded-sm font-bold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Icons.Phone className="w-5 h-5" aria-hidden="true" />
              {CONTACT_INFO.PHONE}
            </a>
          </div>
        </section>

        {/* Disclaimer */}
        <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-200 pt-6 mt-8">
          {PRACTICE_DISCLAIMER}
        </p>

        {/* Related guides */}
        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">Related Guides</h2>
            <ul className="space-y-4">
              {related.map((r) => (
                <li key={`${r.field}/${r.slug}`}>
                  <Link href={guidePath(r)} className="group block">
                    <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block mb-0.5">
                      {FIELD_LABELS[r.field]}
                    </span>
                    <span className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                      {r.listingTitle}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </div>
  )
}
