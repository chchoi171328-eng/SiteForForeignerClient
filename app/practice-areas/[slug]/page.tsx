import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import {
  PRACTICE_AREAS,
  getPracticeArea,
  DEFAULT_ATTORNEY_ASSISTANCE,
  PRACTICE_DISCLAIMER,
  RETAINER_VAT_NOTE,
  RETAINER_STANDARD_NOTE,
} from '@/content/practiceAreas'
import { CONTACT_INFO } from '@/constants'
import { Icons } from '@/components/Icons'
import TrackView from '@/components/TrackView'
import ConsultationFees from '@/components/ConsultationFees'
import { getGuidesByField, GUIDE_FIELDS, type GuideField } from '@/content/guides/registry'
import GuideRow from '@/components/guide/GuideRow'

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
  // Guides share the six core field keys; korean-police-investigation has none.
  const areaGuides = (GUIDE_FIELDS as readonly string[]).includes(area.slug)
    ? getGuidesByField(area.slug as GuideField)
    : []

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
      <TrackView event="practice_area_viewed" params={{ slug: area.slug }} />
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
        {area.headerImage ? (
          <header className="mb-10">
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
              <Image
                src={area.headerImage}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              {/* Readability overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/55 to-navy-900/30" aria-hidden="true" />
              <div className="absolute inset-0 flex items-end p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full shrink-0" aria-hidden="true">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-white">{area.title}</h1>
                    <p className="text-gray-200 mt-1">For foreign residents in Korea · Pyeongtaek</p>
                  </div>
                </div>
              </div>
            </div>
          </header>
        ) : (
          <header className="mb-10 flex items-start gap-4">
            <div className="p-3 bg-navy-50 rounded-full shrink-0" aria-hidden="true">
              <Icon className="w-7 h-7 text-navy-900" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">{area.title}</h1>
              <p className="text-gray-500 mt-1">For foreign residents in Korea · Pyeongtaek</p>
            </div>
          </header>
        )}

        {/* 1. Overview */}
        {area.overview && area.overview.length > 0 && (
          <section className="mb-10">
            {area.overview.map((p) => (
              <p key={p} className="text-lg text-gray-700 leading-relaxed mb-4">{p}</p>
            ))}
          </section>
        )}

        {/* 2. "Is this you?" checklist */}
        {area.commonSituations && area.commonSituations.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-2">Is this you?</h2>
            <p className="text-gray-500 mb-4">If any of these apply, this page is for you.</p>
            <ul className="space-y-3">
              {area.commonSituations.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <Icons.ArrowRight className="w-4 h-4 text-gold-500 mt-1.5 shrink-0" aria-hidden="true" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 3. Procedure timeline */}
        {area.timeline && area.timeline.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-2">How the process works</h2>
            <p className="text-gray-500 mb-6">Find where your case is now.</p>
            <ol className="space-y-6">
              {area.timeline.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span
                    className="shrink-0 w-9 h-9 rounded-full bg-navy-900 text-white font-bold text-sm flex items-center justify-center"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">{step.body}</p>
                    <p className="text-gray-600 leading-relaxed text-sm border-l-2 border-gold-400 pl-3">
                      <span className="font-medium text-navy-900">What you can do at this stage — </span>
                      {step.youCanDo}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            {area.timelineClosing && (
              <p className="mt-6 text-navy-900 font-medium leading-relaxed">{area.timelineClosing}</p>
            )}
          </section>
        )}

        {/* 4. What we will tell you honestly */}
        <ListSection title="What We Will Tell You Honestly" items={assistance} />

        {/* 5. FAQ */}
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

        {/* 6. Area retainer */}
        {area.retainer && (
          <section className="mb-10 border border-gray-200 rounded-xl p-6">
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-1">Fees for this area</h2>
            <p className="text-gray-500 mb-4">We tell you the cost from the start.</p>

            {area.retainer.range && (
              <p className="text-xl font-bold text-navy-900 mb-1">
                Retainer {area.retainer.range}
              </p>
            )}
            <p className="text-sm text-gray-500 mb-3">{RETAINER_VAT_NOTE}</p>
            <p className="text-gray-700 leading-relaxed mb-3">
              It depends on {area.retainer.dependsOn}. {RETAINER_STANDARD_NOTE}
            </p>
            {area.retainer.closing && (
              <p className="text-gray-700 leading-relaxed">{area.retainer.closing}</p>
            )}
            <Link
              href="/fees"
              className="mt-4 inline-flex items-center gap-1 text-gold-600 font-bold text-sm hover:text-gold-700"
            >
              See full fee information
              <Icons.ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </section>
        )}

        {/* 6b. Guides in this area (auto — hidden while the field has no guides) */}
        {areaGuides.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-navy-900 pb-3 border-b-2 border-gold-400">
              Guides in this area
            </h2>
            <ul className="divide-y divide-gray-200">
              {areaGuides.map((g) => (
                <GuideRow key={g.slug} guide={g} />
              ))}
            </ul>
          </section>
        )}

        {/* 7. Consultation CTA */}
        <section className="mb-10 bg-navy-900 text-white p-8 rounded-xl">
          <h2 className="text-2xl font-serif font-bold mb-4">Discuss Your Case</h2>
          <div className="mb-6">
            <ConsultationFees variant="dark" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-gold-400 hover:bg-gold-500 text-navy-900 px-6 py-3 rounded-sm font-bold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Icons.Calendar className="w-5 h-5" aria-hidden="true" />
              Book a 30-Minute Assessment
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
