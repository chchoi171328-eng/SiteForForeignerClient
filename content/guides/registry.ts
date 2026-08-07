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
import GettingYourHousingDepositBack from './bodies/getting-your-housing-deposit-back'
import JeonseExplained from './bodies/jeonse-explained'
import ReceivedAPoliceSummons from './bodies/received-a-police-summons'
import HapuiSettlementInCriminalCases from './bodies/hapui-settlement-in-criminal-cases'
import DuiInKorea from './bodies/dui-in-korea'

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

/** Serializable guide fields — safe to pass into client components (no body). */
export type GuideMeta = Omit<Guide, 'body'>

export function toGuideMeta({ body: _body, ...meta }: Guide): GuideMeta {
  return meta
}

/** Registered guides, in listing order within each field. */
export const GUIDES: Guide[] = [
  {
    slug: 'getting-your-housing-deposit-back',
    field: 'real-estate-lease-disputes',
    listingTitle: 'Getting Your Housing Deposit Back',
    metaTitle:
      'Getting Your Housing Deposit Back in Korea — Deadlines, Leverage, and the Order That Works',
    metaDescription:
      'How to get your housing deposit back in Korea: the notice deadlines, the lease registration order (임차권등기명령), and when a lawsuit is worth filing.',
    reviewed: '2026-08',
    related: ['jeonse-explained'],
    body: GettingYourHousingDepositBack,
  },
  {
    slug: 'jeonse-explained',
    field: 'real-estate-lease-disputes',
    listingTitle: 'Jeonse, Explained',
    metaTitle:
      "Jeonse, Explained — How Korea's Lump-Sum Deposit Lease Works and How to Protect Your Money",
    metaDescription:
      "What jeonse (전세) is, how Korea's lump-sum deposit lease compares to wolse, and the steps that keep your deposit safe — explained for foreign residents.",
    reviewed: '2026-08',
    related: ['getting-your-housing-deposit-back'],
    body: JeonseExplained,
  },
  {
    slug: 'received-a-police-summons',
    field: 'criminal-defense',
    listingTitle: 'Received a Police Summons',
    metaTitle:
      'Received a Police Summons in Korea — What It Means and What to Do Before You Go',
    metaDescription:
      'What a Korean police summons (출석요구) means for a foreigner: suspect vs. witness status, your rights at the interview, and how to prepare.',
    reviewed: '2026-08',
    related: ['hapui-settlement-in-criminal-cases', 'dui-in-korea'],
    body: ReceivedAPoliceSummons,
  },
  {
    slug: 'hapui-settlement-in-criminal-cases',
    field: 'criminal-defense',
    listingTitle: 'Settlement (합의) in Criminal Cases',
    metaTitle:
      'Hapui (합의): How Settlement Works in Korean Criminal Cases — Timing, Terms, and Limits',
    metaDescription:
      'How hapui (합의), the Korean criminal settlement, actually works: when it ends a case, when it only helps, the deadline, and the mistakes to avoid.',
    reviewed: '2026-08',
    related: ['received-a-police-summons', 'dui-in-korea'],
    body: HapuiSettlementInCriminalCases,
  },
  {
    slug: 'dui-in-korea',
    field: 'criminal-defense',
    listingTitle: 'DUI in Korea',
    metaTitle:
      'DUI in Korea — The 0.03% Limit, Penalties by Level, and What Happens to Your License',
    metaDescription:
      "Korea's DUI limit is 0.03% BAC. Penalties by blood alcohol level, license suspension and revocation, test refusal, and the appeal deadlines that follow.",
    reviewed: '2026-08',
    related: ['received-a-police-summons', 'hapui-settlement-in-criminal-cases'],
    body: DuiInKorea,
  },
]

export function getGuide(field: string, slug: string): Guide | undefined {
  return GUIDES.find((g) => g.field === field && g.slug === slug)
}

export function getGuidesByField(field: GuideField): Guide[] {
  return GUIDES.filter((g) => g.field === field)
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug)
}

export function guidePath(g: Pick<Guide, 'field' | 'slug'>): string {
  return `/guides/${g.field}/${g.slug}`
}
