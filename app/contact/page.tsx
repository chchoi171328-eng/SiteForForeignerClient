import Image from 'next/image'
import ContactSection from '@/components/ContactSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Book a 30-minute assessment with SOL & LUNA Law Firm in Pyeongtaek. Consultations are conducted directly by the attorney in English.',
  openGraph: {
    title: 'Contact Us | SOL & LUNA Law Firm',
    description: 'Book a 30-minute assessment with SOL & LUNA Law Firm in Pyeongtaek. Consultations are conducted directly by the attorney in English.',
    url: 'https://www.lsfp.co.kr/contact',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us | SOL & LUNA Law Firm',
    description: 'Book a 30-minute assessment with SOL & LUNA Law Firm in Pyeongtaek. Consultations are conducted directly by the attorney in English.',
  },
  alternates: {
    canonical: 'https://www.lsfp.co.kr/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <div className="container mx-auto px-6 max-w-4xl mb-10">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/assets/office-consult-detail.jpg"
            alt="Consultation room wall with the Sol &amp; Luna lettering at SOL &amp; LUNA Law Firm"
            width={1200}
            height={628}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
      </div>
      <ContactSection />
    </div>
  )
}
