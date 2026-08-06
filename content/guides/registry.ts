// Legal Guides registry (single source of truth).
//
// Guides are evergreen documents, not dated posts: they carry a `reviewed`
// month only — no publish date anywhere in the UI. Each guide belongs to one
// of the six practice-area fields and its URL is /guides/{field}/{slug}.
//
// IMPORTANT: guide content itself is authored via the english-guide-writer
// skill workflow (per claude-code-guide-production.md); do not hand-write
// guide bodies outside that workflow. This file only registers finished guides.

import type { ComponentType } from 'react'

/** The six field keys — identical to the core practice-area slugs. */
export const GUIDE_FIELDS = [
  'criminal-defense',
  'civil-litigation',
  'real-estate-lease-disputes',
  'debt-collection',
  'divorce-family-law',
  'labor-employment',
] as const

export type GuideField = (typeof GUIDE_FIELDS)[number]

/** Short labels for filter chips and cards. */
export const FIELD_LABELS: Record<GuideField, string> = {
  'criminal-defense': 'Criminal Defense',
  'civil-litigation': 'Civil Litigation',
  'real-estate-lease-disputes': 'Real Estate & Lease',
  'debt-collection': 'Debt Collection',
  'divorce-family-law': 'Divorce & Family',
  'labor-employment': 'Labor & Employment',
}

export type Guide = {
  /** URL segment under the field, e.g. 'getting-your-housing-deposit-back'. */
  slug: string
  field: GuideField
  /** Card/listing title (skill-defined listingTitle). */
  listingTitle: string
  /** <title> for the guide page; falls back to listingTitle. */
  metaTitle?: string
  metaDescription: string
  /** Review month, shown as "Reviewed {YYYY-MM}". No publish dates. */
  reviewed: string
  /** Slugs of related guides (same or other fields). */
  related?: string[]
  /** The guide body, composed from components/guide primitives. */
  body: ComponentType
}

/** Registered guides, in listing order within each field. */
export const GUIDES: Guide[] = []

export function getGuide(field: string, slug: string): Guide | undefined {
  return GUIDES.find((g) => g.field === field && g.slug === slug)
}

export function getGuidesByField(field: GuideField): Guide[] {
  return GUIDES.filter((g) => g.field === field)
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug)
}

export function guidePath(g: Guide): string {
  return `/guides/${g.field}/${g.slug}`
}
