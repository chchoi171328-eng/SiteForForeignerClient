import { MetadataRoute } from 'next'
import { PRACTICE_AREAS } from '@/content/practiceAreas'
import { LANDING_PAGES } from '@/content/landingPages'
import { LEGAL_DOCUMENTS } from '@/content/legal'
import { GUIDES, guidePath } from '@/content/guides/registry'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.lsfp.co.kr'
  const practiceAreaPages: MetadataRoute.Sitemap = PRACTICE_AREAS.map((area) => ({
    url: `${baseUrl}/practice-areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.8,
  }))
  const landingPages: MetadataRoute.Sitemap = LANDING_PAGES.map((p) => ({
    url: `${baseUrl}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }))
  const legalPages: MetadataRoute.Sitemap = LEGAL_DOCUMENTS.map((doc) => ({
    url: `${baseUrl}/${doc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.3,
  }))
  const guidePages: MetadataRoute.Sitemap = GUIDES.map((g) => ({
    url: `${baseUrl}${guidePath(g)}`,
    lastModified: new Date(`${g.reviewed}-01`),
    changeFrequency: 'yearly',
    priority: 0.7,
  }))

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/attorneys/chulho-choi`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.9 },
    { url: `${baseUrl}/practice-areas`, lastModified: new Date(), priority: 0.9 },
    ...practiceAreaPages,
    { url: `${baseUrl}/fees`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ...guidePages,
    ...landingPages,
    { url: `${baseUrl}/location`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8 },
    ...legalPages,
  ]
}
