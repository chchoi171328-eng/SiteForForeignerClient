import ContactSection from '@/components/ContactSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with SOL & LUNA Law Firm. Request a consultation for expert legal guidance tailored for the international community in Korea.',
  openGraph: {
    title: 'Contact Us | SOL & LUNA Law Firm',
    description: 'Schedule a consultation with our experienced attorneys for expert legal representation in Korea.',
    url: 'https://sllaw.co.kr/contact',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us | SOL & LUNA Law Firm',
    description: 'Schedule a consultation with our experienced attorneys for expert legal representation in Korea.',
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
