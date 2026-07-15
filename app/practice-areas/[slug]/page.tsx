import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  PRACTICE_AREAS,
  getPracticeArea,
  DEFAULT_ATTORNEY_ASSISTANCE,
  PRACTICE_DISCLAIMER,
} from '@/content/practiceAreas'
import { CONSULTATION, CONTACT_INFO } from '@/constants'
import { Icons } from '@/components/Icons'

const BASE = 'https://www.lsfp.co.kr'

export function generateStaticParams() {
  return PRACTICE_AREAS.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const area = getPracticeArea(slug)
  if (!area) return {}

  const url = `${BASE}/practice-areas/${area.slug}`
  const title = `${area.title} for Foreigners in Korea`
  return {
    title,
    description: area.metaDescription,
    openGraph: { title: `${title} | SOL & LUNA Law Firm`, description: area.metaDescription, url },
    twitter: { card: 'summary', title: `${title} | SOL & LUNA Law Firm`, description: area.metaDescription },
    alternates: { canonical: url },
  }
}

/** Renders a titled section of bullet points, or nothing when empty. */
function ListSection({ title, items }: { title: string; items?: string[] }) {
  if (!items || items.length === 0) return null
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-gray-700">
            <Icons.ArrowRight className="w-4 h-4 text-gold-500 mt-1.5 shrink-0" aria-hidden="true" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default async function PracticeAreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const area = getPracticeArea(slug)
  if (!area) notFound()

  const Icon = Icons[area.icon] || Icons.Scale
  const assistance = area.attorneyAssistance ?? DEFAULT_ATTORNEY_ASSISTANCE

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${area.title} for Foreigners in Korea`,
    url: `${BASE}/practice-areas/${area.slug}`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Practice Areas', item: `${BASE}/practice-areas` },
        { '@type': 'ListItem', position: 3, name: area.title, item: `${BASE}/practice-areas/${area.slug}` },
      ],
    },
    ...(area.faqs && area.faqs.length > 0
      ? {
          mainEntity: area.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }
      : {}),
  }

  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container mx-auto px-6 max-w-3xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gold-600">Home</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <Link href="/practice-areas" className="hover:text-gold-600">Practice Areas</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-gray-800">{area.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10 flex items-start gap-4">
          <div className="p-3 bg-navy-50 rounded-full shrink-0" aria-hidden="true">
            <Icon className="w-7 h-7 text-navy-900" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">{area.title}</h1>
            <p className="text-gray-500 mt-1">For foreign residents in Korea · Pyeongtaek</p>
          </div>
        </header>

        {/* 1. Overview */}
        {area.overview && area.overview.length > 0 && (
          <section className="mb-10">
            {area.overview.map((p) => (
              <p key={p} className="text-lg text-gray-700 leading-relaxed mb-4">{p}</p>
            ))}
          </section>
        )}

        {/* 2–6. Optional detail sections (hidden until attorney copy is added) */}
        <ListSection title="Common Situations" items={area.commonSituations} />
        <ListSection title="How the Korean Process Works" items={area.koreanProcedure} />
        <ListSection title="Immediate Steps to Take" items={area.immediateSteps} />
        <ListSection title="Documents & Evidence to Prepare" items={area.documents} />
        <ListSection title="Risks & Deadlines" items={area.risks} />

        {/* 7. How the attorney assists */}
        <ListSection title="How We Can Help" items={assistance} />

        {/* 8. FAQ */}
        {area.faqs && area.faqs.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {area.faqs.map((f) => (
                <div key={f.question}>
                  <h3 className="font-bold text-navy-900 mb-1">{f.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 10. Consultation CTA */}
        <section className="mb-10 bg-navy-900 text-white p-8 rounded-xl">
          <h2 className="text-2xl font-serif font-bold mb-3">Discuss Your Case</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Initial consultations are paid and available by appointment — {CONSULTATION.DURATION_MIN} minutes
            for {CONSULTATION.FEE_KRW_LABEL} ({CONSULTATION.FEE_USD_APPROX_LABEL}), VAT included, conducted
            directly by the attorney in English.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-gold-400 hover:bg-gold-500 text-navy-900 px-6 py-3 rounded-sm font-bold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Icons.Calendar className="w-5 h-5" aria-hidden="true" />
              Request a Paid Consultation
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

        {/* 11. Disclaimer */}
        <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-200 pt-6">
          {PRACTICE_DISCLAIMER}
        </p>
      </div>
    </div>
  )
}
