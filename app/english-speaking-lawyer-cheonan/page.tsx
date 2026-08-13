import type { Metadata } from 'next'
import LandingTemplate from '@/components/LandingTemplate'
import TrackView from '@/components/TrackView'
import { getLandingPage } from '@/content/landingPages'

const page = getLandingPage('english-speaking-lawyer-cheonan')!
const url = `https://www.lsfp.co.kr/${page.slug}`

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  openGraph: { title: page.metaTitle, description: page.metaDescription, url },
  twitter: { card: 'summary', title: page.metaTitle, description: page.metaDescription },
  alternates: { canonical: url },
}

export default function Page() {
  return (
    <>
      <TrackView event="cheonan_page_viewed" />
      <LandingTemplate page={page} />
    </>
  )
}
