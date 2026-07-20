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
      <ContactSection />
    </div>
  )
}
