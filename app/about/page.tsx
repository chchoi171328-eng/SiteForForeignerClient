import type { Metadata } from 'next'
import Image from 'next/image'
import AttorneyIntro from '@/components/AttorneyIntro'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'How SOL & LUNA (Law Firm Myeong), a Korean law firm in Pyeongtaek, actually operates — a limited caseload, fees quoted upfront, and honest assessments for foreign residents.',
  openGraph: {
    title: 'About Us | SOL & LUNA Law Firm',
    description: 'How SOL & LUNA operates: a limited caseload, upfront fees, and honest assessments for foreign residents in Korea.',
    url: 'https://www.lsfp.co.kr/about',
  },
  twitter: {
    card: 'summary',
    title: 'About Us | SOL & LUNA Law Firm',
    description: 'How SOL & LUNA operates: a limited caseload, upfront fees, and honest assessments for foreign residents in Korea.',
  },
  alternates: {
    canonical: 'https://www.lsfp.co.kr/about',
  },
}

export default function AboutPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-8">About SOL &amp; LUNA</h1>

        <div className="mb-12 rounded-xl overflow-hidden">
          <Image
            src="/assets/office-consult-wide.jpg"
            alt="Consultation room at SOL &amp; LUNA: a table, two chairs facing each other, natural light from the window"
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">Why we run the firm this way</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most law firm websites say the same things: trust, excellence, experience. We&apos;d rather
            tell you how we actually operate, so you can judge for yourself.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <span className="font-bold text-navy-900">We limit our caseload.</span> A case handled
            properly takes time — reading the full record, preparing you for questioning, drafting without
            boilerplate. That is impossible at volume, so we cap the number of matters we run concurrently.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <span className="font-bold text-navy-900">We quote fees upfront, in writing.</span> Consultation
            fees are published on every page of this site — and the same fees appear on our Korean site. If
            you retain us, representation fees are set out in your engagement letter before you sign — not
            discovered mid-case.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-bold text-navy-900">We tell you the truth about your case.</span> When
            suing is optional and the numbers don&apos;t work, we say so — some cases cost more than they can
            ever return. When the case isn&apos;t optional — you&apos;ve been charged, or sued — we tell you
            the best realistic outcome and what reaching it requires. Either way, the honest assessment is
            part of what you pay for.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">Who we serve</h2>
          <p className="text-gray-700 leading-relaxed">
            We serve foreign residents and international clients dealing with legal matters in Korea —
            people working, running businesses, raising families, or stationed here, as well as those
            abroad with a case in Korea — who need Korean legal problems explained and handled in English,
            by the attorney responsible for the outcome.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">The firm</h2>
          <p className="text-gray-700 leading-relaxed">
            SOL &amp; LUNA is the English name of 법무법인 명 (Law Firm Myeong), a Korean law firm based in
            Pyeongtaek, Gyeonggi-do. Our Korean-language site serves domestic clients; this site exists so
            that foreign residents get the same information — and the same fees — with nothing lost in
            translation.
          </p>
        </section>
      </div>

      <AttorneyIntro />
    </div>
  )
}
