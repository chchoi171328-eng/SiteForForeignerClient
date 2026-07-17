import type { Metadata } from 'next'
import LegalDocumentPage from '@/components/LegalDocument'
import { getLegalDocument } from '@/content/legal'

const doc = getLegalDocument('privacy')!
const url = `https://www.lsfp.co.kr/${doc.slug}`

export const metadata: Metadata = {
  title: doc.title,
  description: doc.metaDescription,
  alternates: { canonical: url },
  openGraph: { title: `${doc.title} | SOL & LUNA Law Firm`, description: doc.metaDescription, url },
}

export default function Page() {
  return <LegalDocumentPage doc={doc} />
}
