import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import TrackView from '@/components/TrackView'
import ConsultationFees from '@/components/ConsultationFees'
import TaggedGuides from '@/components/guide/TaggedGuides'
import { Icons } from '@/components/Icons'
import { CONTACT_INFO, CONSULTATION } from '@/constants'

// From-abroad brief (PART A). Copy follows the brief; the three places where a
// statute or practice point could not be stated with certainty carry
// PENDING REVIEW notes in the source and are listed in the PR report.

const BASE = 'https://www.lsfp.co.kr'
const SLUG = 'korea-legal-matters-from-abroad'
const PAGE_URL = `${BASE}/${SLUG}`
const META_TITLE = 'Korean Legal Matters Handled From Abroad | SOL & LUNA'
const META_DESCRIPTION =
  "You left Korea with a legal matter unresolved, or a matter in Korea now needs a lawyer. What can be handled from abroad, what can't, and how we work with clients in other time zones."

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  openGraph: { title: META_TITLE, description: META_DESCRIPTION, url: PAGE_URL },
  twitter: { card: 'summary', title: META_TITLE, description: META_DESCRIPTION },
  alternates: { canonical: PAGE_URL },
}

const IS_THIS_YOU = [
  'You left Korea and your landlord never returned your deposit',
  'Your last Korean employer still owes you wages or severance',
  'Someone in Korea owes you money — a person or a company',
  "You've received, or heard of, a Korean lawsuit against you",
  'You left Korea while a police matter was still open, and you want to know whether you can come back',
  'You were defrauded or harmed by someone in Korea and want to file a complaint',
  'You own an apartment or land in Korea and the tenant has stopped paying — or you want to sell',
  'You had a child with a Korean national who has since disappeared, or you need child support or a divorce handled in Korea',
  'A relative in Korea has died and left property in Korea',
]

type Branch = {
  matter: string
  remotely: string
  inPerson: string
  /** Practice-area link; omitted for inheritance (hub not built — brief PART C). */
  href?: string
  linkLabel?: string
}

const BRANCHES: Branch[] = [
  {
    matter: 'Criminal — you are the victim or complainant',
    // Complaint through a representative: Criminal Procedure Act art. 236 (verified).
    remotely:
      'Filing the complaint through us as your representative, following the investigation, settlement talks, victim statements by document.',
    // Complainant statements (고소보충조서) are the norm; for a client abroad they are
    // usually given through the complaint representative or in writing. Worded to
    // the practice rather than the brief's "Rarely" (user-approved 2026-10).
    inPerson:
      'Not usually. A complainant statement is almost always taken — but for a client abroad it is typically given through us as your complaint representative, or in writing. Some investigators still want your own account, in person or by video, especially on facts only you know; we tell you early if yours will.',
    href: '/practice-areas/criminal-defense',
    linkLabel: 'Criminal Defense',
  },
  {
    matter: 'Criminal — you are the suspect or defendant',
    // Travel-ban status: a retained attorney can confirm it in person at the
    // immigration office (easylaw 출국금지제도 — verified 2026-10; online lookup is
    // for nationals only). Warrant status is a separate, unverified channel, so the
    // cell describes the outcome, not a procedure. Suspect questioning: "generally
    // require you to be here" — remote questioning is not asserted either way.
    remotely:
      'Finding out where your case stands (including whether a warrant or travel ban exists), written submissions, settlement with the other side, planning a voluntary appearance.',
    // Stages are police questioning (with any follow-up) and trial — no separate
    // prosecution interview stage in current practice. The brief's "so it happens
    // once" was a promise and is dropped (user-approved 2026-10).
    inPerson:
      "Usually, more than once. Questioning as a suspect and trial hearings generally require you to be here, and they can fall months apart — the police stage, including any follow-up questioning, and then the court. We can't promise a single trip; what we can do is prepare each stage before you fly so no trip is wasted, and tell you honestly when staying abroad is no longer an option.",
    href: '/practice-areas/criminal-defense',
    linkLabel: 'Criminal Defense',
  },
  {
    matter: 'Civil — deposits, wages, money owed, lawsuits against you',
    // Attorney e-filing and representation: Act on the Use of Electronic Documents in
    // Civil Litigation and its rules (verified — appointed counsel file, receive service
    // and act in the electronic system).
    remotely:
      'Nearly everything. Korean civil litigation runs on an electronic filing system; your attorney files, appears, and enforces on your behalf under a power of attorney.',
    inPerson: 'Almost never.',
    href: '/practice-areas/civil-litigation',
    linkLabel: 'Civil Litigation',
  },
  {
    matter: 'Property you own in Korea — rent arrears, eviction, sale',
    remotely:
      'Demand letters, lease termination, suits for unpaid rent and possession, enforcement, sale under power of attorney, setting up and supervising a management company.',
    inPerson: 'No.',
    href: '/practice-areas/real-estate-lease-disputes',
    linkLabel: 'Real Estate & Lease',
  },
  {
    matter: 'Family — paternity, child support, divorce with a Korean spouse',
    // Court-ordered genetic testing (Family Litigation Act art. 29) is taken by the
    // appointed examiner with identity checks, in practice in Korea — the brief's
    // "DNA testing arranged where you live" was dropped (user-approved 2026-10).
    remotely:
      'Paternity suits, child support claims and enforcement, divorce filings and property division — the filings and the case itself run through your attorney.',
    // Family Litigation Act art. 7 (verified): the party-appearance rule — a
    // representative may appear instead only with the presiding judge's permission.
    // Worded to match the statute rather than the brief's "usually not".
    inPerson:
      "Sometimes. Family courts apply a party-appearance rule — a representative may appear in your place only with the judge's permission — and in a paternity case the court-ordered DNA sampling is normally done in Korea by the appointed examiner. We tell you early if yours will need a trip, and plan it so one trip covers both.",
    href: '/practice-areas/divorce-family-law',
    linkLabel: 'Divorce & Family',
  },
  {
    matter: 'Inheritance — property left to you in Korea',
    remotely:
      'Confirming heirs and shares, registration, agreements with co-heirs in Korea, and sale of inherited property under power of attorney.',
    inPerson: 'No.',
    // No hub link (brief PART C on hold) — this branch routes to the consultation CTA only.
  },
]

const HOW_WE_WORK = [
  'Consultation by video or phone in your time zone — evenings and early mornings in Korea are available for the Americas.',
  'A power of attorney and the documents your country requires — we send a checklist for where you live.',
  'We act in Korea; you get updates in English by email at each step.',
  // Fee line composed from the CONSULTATION constants so it cannot drift from the
  // site standard. Payment stays "bank transfer" (site-wide wording); card payment
  // is possible only case by case, so it is handled at booking rather than promised
  // here — the "tell us" clause covers clients for whom a transfer is hard.
  `Fees: the same consultation fee as everyone else (${CONSULTATION.DURATION_MIN} minutes · ${CONSULTATION.FEE_KRW_LABEL}, VAT included — ${CONSULTATION.SHORT_FEE_KRW_LABEL} if it ends within ${CONSULTATION.SHORT_DURATION_MIN} minutes), paid in advance by bank transfer — tell us if that is difficult from where you are; retainers quoted in writing after the consultation.`,
]

const H2 = 'text-2xl font-serif font-bold text-navy-900 mb-4'
const P = 'text-gray-700 leading-relaxed mb-4'
const TH = 'border border-gray-200 bg-slate-50 px-3 py-2 text-left text-sm font-bold text-navy-900'
const TD = 'border border-gray-200 px-3 py-2 text-sm text-gray-700 leading-relaxed align-top'

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: META_TITLE,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'From Abroad', item: PAGE_URL },
      ],
    },
  }

  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <TrackView event="from_abroad_page_viewed" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container mx-auto px-6 max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gold-600">Home</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-gray-800">From Abroad</span>
        </nav>

        {/* Header — same textured banner as the landing pages */}
        <header className="mb-12 relative rounded-xl overflow-hidden">
          <Image src="/assets/texture-section.png" alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          <div className="absolute inset-0 bg-navy-900/85" aria-hidden="true" />
          <div className="relative z-10 p-8 md:p-10">
            <p className="text-gold-400 text-xs tracking-widest uppercase mb-3">
              Legal matters in Korea — handled from abroad
            </p>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
              You&rsquo;re Not in Korea. Your Legal Problem Is.
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              You left Korea with something unresolved — or you&rsquo;ve never lived here, but a
              matter in Korea now needs a lawyer. Most of it can be handled without flying in. Here
              is what can be done from where you are, what can&rsquo;t, and how we work with clients
              in other time zones.
            </p>
          </div>
        </header>

        {/* Is this you? */}
        <section className="mb-12">
          <h2 className={H2}>Is this you?</h2>
          <ul className="space-y-3">
            {IS_THIS_YOU.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <Icons.ArrowRight className="w-4 h-4 text-gold-500 mt-1.5 shrink-0" aria-hidden="true" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What can be done from abroad — honestly */}
        <section className="mb-12">
          <h2 className={H2}>What can be done from abroad — honestly</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr>
                  <th className={TH}>Matter</th>
                  <th className={TH}>Done remotely</th>
                  <th className={TH}>Needs you in Korea</th>
                </tr>
              </thead>
              <tbody>
                {BRANCHES.map((b) => (
                  <tr key={b.matter}>
                    <td className={`${TD} font-bold text-navy-900`}>
                      {b.matter}
                      {b.href && b.linkLabel && (
                        <Link
                          href={b.href}
                          className="block mt-1 text-xs font-medium text-gold-600 hover:text-gold-700 underline underline-offset-2"
                        >
                          {b.linkLabel} →
                        </Link>
                      )}
                      {!b.href && (
                        <Link
                          href="/contact"
                          className="block mt-1 text-xs font-medium text-gold-600 hover:text-gold-700 underline underline-offset-2"
                        >
                          Request a consultation →
                        </Link>
                      )}
                    </td>
                    <td className={TD}>{b.remotely}</td>
                    <td className={TD}>{b.inPerson}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How we work with you from abroad */}
        <section className="mb-12">
          <h2 className={H2}>How we work with you from abroad</h2>
          <ol className="space-y-4">
            {HOW_WE_WORK.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-navy-900 text-gold-400 font-bold text-sm flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-gray-700 leading-relaxed pt-1">{step}</span>
              </li>
            ))}
          </ol>
          <p className="text-sm text-gray-500 leading-relaxed mt-6">
            Referring a client from abroad? We work with overseas counsel — write to us directly
            and we&rsquo;ll coordinate with you in English.
          </p>
        </section>

        {/* Two things to know before you call */}
        <section className="mb-12 border border-gray-200 rounded-xl p-6 md:p-8 bg-slate-50">
          <h2 className={H2}>Two things to know before you call</h2>
          <p className={P}>
            <strong className="text-navy-900">Time matters more from abroad.</strong> Korean
            deadlines don&rsquo;t pause because you&rsquo;ve left — a lawsuit served while
            you&rsquo;re away can end in a default judgment, and some criminal matters are easier
            to resolve before you return than after.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong className="text-navy-900">We&rsquo;ll tell you if it isn&rsquo;t worth it.</strong>{' '}
            Some matters cost more to pursue from abroad than they&rsquo;re worth. We say so at the
            consultation — that&rsquo;s the point of paying for one.
          </p>
        </section>

        {/* Guides for clients abroad — fills in as tagged guides are published */}
        <TaggedGuides tag="from-abroad" heading="Guides for clients abroad" />

        {/* No-pressure paragraph */}
        <p className={P}>
          One more thing worth knowing: a consultation here does not commit you to anything. Some
          people book an assessment, learn where they stand, and decide not to pursue the matter —
          with our agreement. That is a good outcome too.
        </p>

        {/* Consultation CTA (site standard) */}
        <section className="bg-navy-900 text-white p-8 rounded-xl mt-8">
          <h2 className="text-2xl font-serif font-bold mb-4">Request a Consultation</h2>
          <div className="mb-6">
            <ConsultationFees variant="dark" />
          </div>
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
      </div>
    </div>
  )
}
