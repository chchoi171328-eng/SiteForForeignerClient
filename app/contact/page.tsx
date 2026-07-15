import ContactSection from '@/components/ContactSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Request a paid consultation with SOL & LUNA Law Firm in Pyeongtaek. English consultations available for foreign residents in Korea.',
  openGraph: {
    title: 'Contact Us | SOL & LUNA Law Firm',
    description: 'Request a paid consultation with SOL & LUNA Law Firm in Pyeongtaek. English consultations available for foreign residents in Korea.',
    url: 'https://sllaw.co.kr/contact',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us | SOL & LUNA Law Firm',
    description: 'Request a paid consultation with SOL & LUNA Law Firm in Pyeongtaek. English consultations available for foreign residents in Korea.',
  },
  alternates: {
    canonical: 'https://sllaw.co.kr/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <ContactSection />
    </div>
  )
}
