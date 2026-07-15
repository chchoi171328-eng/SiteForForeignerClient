import { MetadataRoute } from 'next'
import { PRACTICE_AREAS } from '@/content/practiceAreas'
import { LANDING_PAGES } from '@/content/landingPages'

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

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/attorneys/cheolho-choi`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.9 },
    { url: `${baseUrl}/practice-areas`, lastModified: new Date(), priority: 0.9 },
    ...practiceAreaPages,
    ...landingPages,
    { url: `${baseUrl}/location`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ]
}
