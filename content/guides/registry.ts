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
import DivorceInKoreaConsensualVsJudicial from './bodies/divorce-in-korea-consensual-vs-judicial'
import WhichCountrysCourtInternationalDivorce from './bodies/which-countrys-court-international-divorce'
import UnpaidWagesLaborOfficeVsLawsuit from './bodies/unpaid-wages-labor-office-vs-lawsuit'
import SeverancePayWhoQualifies from './bodies/severance-pay-who-qualifies'
import LeaseRegistrationOrder from './bodies/lease-registration-order'
import PropertyDivisionBasics from './bodies/property-division-basics'

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
  /** Listing thumbnail (the guide's hero image), 16:9, under /assets/guides. */
  thumbnail: string
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
    thumbnail: '/assets/guides/deposit-back-hero.jpg',
    related: ['jeonse-explained', 'lease-registration-order'],
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
    thumbnail: '/assets/guides/jeonse-hero.jpg',
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
    thumbnail: '/assets/guides/police-summons-hero.jpg',
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
    thumbnail: '/assets/guides/hapui-hero.jpg',
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
    thumbnail: '/assets/guides/dui-hero.jpg',
    related: ['received-a-police-summons', 'hapui-settlement-in-criminal-cases'],
    body: DuiInKorea,
  },
  {
    slug: 'divorce-in-korea-consensual-vs-judicial',
    field: 'divorce-family-law',
    listingTitle: 'Divorce in Korea: Consensual vs. Judicial',
    metaTitle:
      'Divorce in Korea for Foreigners — Consensual vs. Judicial, Step by Step',
    metaDescription:
      'The two routes to divorce in Korea — the consensual process and its cooling-off period, the six judicial grounds, mediation, and the deadlines around money.',
    reviewed: '2026-08',
    thumbnail: '/assets/guides/divorce-hero.jpg',
    related: ['which-countrys-court-international-divorce', 'property-division-basics'],
    body: DivorceInKoreaConsensualVsJudicial,
  },
  {
    slug: 'which-countrys-court-international-divorce',
    field: 'divorce-family-law',
    listingTitle: "Which Country's Court?",
    metaTitle:
      "International Divorce: Which Country's Court — and Which Law — Applies in Korea",
    metaDescription:
      "When Korean courts can hear an international divorce, which country's law applies under the statutory ladder, and how foreign divorces are recognized in Korea.",
    reviewed: '2026-08',
    thumbnail: '/assets/guides/jurisdiction-hero.jpg',
    related: ['divorce-in-korea-consensual-vs-judicial'],
    body: WhichCountrysCourtInternationalDivorce,
  },
  {
    slug: 'unpaid-wages-labor-office-vs-lawsuit',
    field: 'labor-employment',
    listingTitle: 'Unpaid Wages: Labor Office vs. Lawsuit',
    metaTitle:
      'Unpaid Wages in Korea — Labor Office Complaint vs. Lawsuit, and How to Actually Get Paid',
    metaDescription:
      'What to do about unpaid wages in Korea: the 14-day rule, the labor office complaint, the government wage fund (대지급금), free legal aid, and the 3-year deadline.',
    reviewed: '2026-08',
    thumbnail: '/assets/guides/unpaid-wages-hero.jpg',
    related: ['severance-pay-who-qualifies'],
    body: UnpaidWagesLaborOfficeVsLawsuit,
  },
  {
    slug: 'severance-pay-who-qualifies',
    field: 'labor-employment',
    listingTitle: 'Severance Pay: Who Qualifies',
    metaTitle:
      "Severance Pay in Korea (퇴직금) — Who Qualifies, How It's Calculated, and How It's Paid",
    metaDescription:
      "Korea's statutory severance: a month's average pay per year worked. Who qualifies (1 year, 15 hours/week), the freelancer question, IRP accounts, and E-9 insurance.",
    reviewed: '2026-08',
    thumbnail: '/assets/guides/severance-hero.jpg',
    related: ['unpaid-wages-labor-office-vs-lawsuit'],
    body: SeverancePayWhoQualifies,
  },
  {
    slug: 'lease-registration-order',
    field: 'real-estate-lease-disputes',
    listingTitle: 'Lease Registration Order (임차권등기명령)',
    metaTitle:
      'The Lease Registration Order (임차권등기명령) — Keeping Your Deposit Rights After You Move Out',
    metaDescription:
      'How to get a lease registration order in Korea: when you qualify, filing step by step (self-filing included), costs recoverable from the landlord, and what to verify before moving out.',
    reviewed: '2026-08',
    thumbnail: '/assets/guides/lease-registration-hero.jpg',
    related: ['getting-your-housing-deposit-back', 'jeonse-explained'],
    body: LeaseRegistrationOrder,
  },
  {
    slug: 'property-division-basics',
    field: 'divorce-family-law',
    listingTitle: 'Property Division Basics',
    metaTitle:
      'Property Division in a Korean Divorce — What Gets Divided, How Shares Are Set, and the 2-Year Deadline',
    metaDescription:
      'How property division works in a Korean divorce: what counts as marital property, how contribution sets shares, pensions, hidden assets, and the 2-year limit.',
    reviewed: '2026-08',
    thumbnail: '/assets/guides/property-division-hero.jpg',
    related: ['divorce-in-korea-consensual-vs-judicial', 'which-countrys-court-international-divorce'],
    body: PropertyDivisionBasics,
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
