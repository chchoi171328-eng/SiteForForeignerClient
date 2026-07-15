import type { Metadata } from 'next'
import LandingTemplate from '@/components/LandingTemplate'
import { getLandingPage } from '@/content/landingPages'

const page = getLandingPage('english-speaking-lawyer-pyeongtaek')!
const url = `https://www.lsfp.co.kr/${page.slug}`

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  openGraph: { title: page.metaTitle, description: page.metaDescription, url },
  twitter: { card: 'summary', title: page.metaTitle, description: page.metaDescription },
  alternates: { canonical: url },
}

export default function Page() {
  return <LandingTemplate page={page} />
}
