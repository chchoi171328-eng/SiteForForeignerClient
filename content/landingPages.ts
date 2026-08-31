// Landing-page content (single source of truth).
//
// Guideline §7 requires these three pages to answer DISTINCT questions so they do
// not read as doorway pages. Each entry below states its central question and is
// written to answer only that question — do not copy/recombine paragraphs across
// entries. If two pages start to overlap, cut content rather than duplicating it.

export type LandingSection = {
  heading?: string
  paragraphs?: string[]
  bullets?: string[]
  /** Optional in-body photo (e.g. the courtroom-window view on the Anseong page). */
  image?: { src: string; alt: string; caption?: string }
}

export type LandingPage = {
  slug: string
  /** Internal note: the single question this page exists to answer. */
  centralQuestion: string
  /** H1 on the page. */
  title: string
  /** Shorter label for the footer "For Foreigners" list (falls back to title). */
  footerTitle?: string
  metaTitle: string
  metaDescription: string
  heroSubtitle: string
  sections: LandingSection[]
  /**
   * City pages: verified travel block rendered after the sections
   * (city-pages brief §B — figures must match content/serviceAreas.ts).
   */
  directions?: { paragraphs: string[] }
  /**
   * Small one-line audience-routing note rendered right after the hook
   * (first section). The Osan pair's mutual pointer is the ONLY sanctioned
   * exception to the no-cross-links-between-landing-pages rule.
   */
  hookNote?: { text: string; linkText: string; href: string }
  /** Render the "What's your situation?" component before the CTA (brief §C). */
  showSituationNav?: boolean
  /** Camp Humphreys / Osan AB pages must show the non-affiliation disclaimer. */
  disclaimer?: string
}

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: 'english-speaking-lawyer-pyeongtaek',
    centralQuestion: 'Is there a lawyer in Pyeongtaek I can consult with in English?',
    title: 'English-Speaking Lawyer in Pyeongtaek',
    showSituationNav: true,
    metaTitle: 'English-Speaking Lawyer in Pyeongtaek | SOL & LUNA Law Firm',
    metaDescription:
      'Consult a Korean lawyer in English in Pyeongtaek. Paid consultations conducted directly by the attorney, by appointment. Fees, process, and office details.',
    heroSubtitle:
      'Consult a Korean attorney in English, in Pyeongtaek — by appointment, directly with the attorney.',
    sections: [
      {
        heading: 'Consultation in English',
        paragraphs: [
          'At SOL & LUNA Law Firm, consultations are conducted directly by the attorney in English. You speak with the lawyer who will handle your matter, not an intermediary.',
        ],
      },
      {
        heading: 'How a Consultation Works',
        bullets: [
          'Send a brief description of your situation through the contact form or by phone.',
          'Book a paid consultation at a scheduled time.',
          'The attorney explains the realistic options and outcomes honestly.',
          'The same attorney continues with your matter if you proceed.',
        ],
      },
      {
        heading: 'Why "directly by the attorney" matters',
        paragraphs: [
          'At many firms, "English service" means a staff interpreter relays your words to a lawyer you rarely meet. Here, the person listening to you at the consultation is the attorney who will argue your case. Nuance survives. Questions get answered by the person accountable for the answer.',
        ],
      },
      {
        heading: 'Office & Hours',
        bullets: [
          '5F, SJ Plaza, 1029-1 Pyeongnam-ro, Pyeongtaek-si, Gyeonggi-do',
          'Weekdays 09:00–18:00 · Weekends and public holidays by appointment',
          'Phone: 031-658-6100',
        ],
      },
    ],
  },
  {
    slug: 'camp-humphreys-legal-help',
    centralQuestion:
      'I live near Camp Humphreys and have a legal problem in Korea — what should I do?',
    title: 'Legal Help Near Camp Humphreys',
    showSituationNav: true,
    metaTitle: 'Legal Help Near Camp Humphreys | SOL & LUNA Law Firm',
    metaDescription:
      'Legal help for residents near Camp Humphreys. A Korean law firm in Pyeongtaek handling police, traffic, lease, civil, labor, and family matters. Independent, not affiliated with USFK.',
    heroSubtitle:
      'A Korean law firm in Pyeongtaek, near the Camp Humphreys area, for foreign residents facing legal problems in Korea.',
    sections: [
      {
        heading: 'Where We Are',
        paragraphs: [
          'SOL & LUNA Law Firm is located in Pyeongtaek, within general reach of the Camp Humphreys area. Consultations are by appointment at our office.',
          'Off-base legal matters (Korean police investigations, leases, family disputes) proceed in the Korean system regardless of your status, and that system is where we work every day.',
        ],
      },
      {
        heading: 'Matters We Handle',
        bullets: [
          'Korean police investigations',
          'Traffic and criminal matters',
          'Lease and deposit disputes',
          'Civil claims',
          'Labor and employment issues',
          'Divorce and family disputes',
        ],
      },
      {
        heading: 'Military service, on a U.S. Army post',
        paragraphs: [
          "Attorney Choi served his own military service as a KATUSA with the 2nd Infantry Division — the same division now headquartered at Camp Humphreys. Two years living and working inside a U.S. Army unit means the culture around an American base doesn't need to be explained to him: the ranks, the rhythms, and the kinds of trouble that can find a soldier off-post. That's part of why this firm serves this community.",
        ],
      },
      {
        heading: 'How to Request a Consultation',
        paragraphs: [
          'Send a brief description of your situation through the contact form or by phone. Initial consultations are paid and by appointment; fees are listed below.',
        ],
      },
    ],
    disclaimer:
      'SOL & LUNA Law Firm is an independent Korean law firm and is not affiliated with, endorsed by, or officially connected to USFK or Camp Humphreys.',
  },
  {
    slug: 'lawyer-for-foreigners-korea',
    centralQuestion:
      'How is the Korean legal system different, and why do I need a Korean lawyer?',
    title: 'A Lawyer for Foreigners in Korea',
    showSituationNav: true,
    metaTitle: 'Lawyer for Foreigners in Korea | SOL & LUNA Law Firm',
    metaDescription:
      'Why foreign residents need a Korean lawyer — how Korean litigation and investigation differ, language and cultural barriers, interpretation, and the types of cases we handle.',
    heroSubtitle:
      'Understanding why the Korean legal system works differently — and how a Korean attorney helps foreign residents navigate it.',
    sections: [
      {
        heading: 'How the Korean System Differs',
        paragraphs: [
          'Korean litigation and criminal investigation follow procedures that are often unfamiliar to those from other legal systems. Documents, deadlines, and the way evidence is presented can differ significantly from what you may expect.',
          'A Korean attorney bridges that gap — explaining what is happening, what is required, and what is realistic under Korean law.',
        ],
      },
      {
        heading: 'Language & Cultural Barriers',
        paragraphs: [
          'Legal processes conducted in Korean can be difficult to follow even with everyday fluency. Misunderstandings at an early stage — during questioning or in a written statement — can have lasting consequences.',
        ],
      },
      {
        heading: 'Interpretation & Translation',
        paragraphs: [
          "Where necessary, we address language barriers so that you understand the proceedings and your position is accurately represented. Consultations themselves are conducted directly in English by the attorney. And his English wasn't learned in a classroom: before law school, Attorney Choi spent two years as a KATUSA — a Korean Army soldier assigned to a U.S. Army unit — living and working in English alongside American soldiers.",
        ],
      },
      {
        heading: 'Types of Cases We Handle',
        bullets: [
          'Criminal defense and police investigations',
          'Civil litigation',
          'Real estate and lease disputes',
          'Debt collection',
          'Divorce and family matters',
          'Labor and employment',
        ],
      },
      {
        paragraphs: [
          "Since 2025, Attorney Choi has served as a legal advisor at the foreign resident counseling center run by the Pyeongtaek International Exchange Foundation (PIEF) — the city's public foundation for its international community. Appointed and reappointed by the foundation, he advises foreign residents on legal matters through the center's consultation program.",
        ],
      },
      {
        paragraphs: [
          'One more thing worth knowing: a consultation here does not commit you to anything. Some visitors book an assessment, learn where they stand, and decide not to litigate — with our agreement. That is a good outcome too.',
        ],
      },
      {
        heading: 'Anywhere in Korea — without coming to Pyeongtaek first',
        paragraphs: [
          "You don't need to visit our office to get an honest assessment. Consultations are available by video (Google Meet) or phone at the same fee, paid in advance by bank transfer — and if we finish within 30 minutes, ₩50,000 comes back to you.",
          'Korean civil litigation now runs largely through the electronic filing system, so for many civil, lease, debt, and inheritance matters — including flat-fee inheritance renunciation — distance matters less than it used to. We are based in Pyeongtaek, and we say so plainly; what you get from here is the attorney himself, in English, wherever you are in Korea.',
        ],
      },
    ],
  },

  // ——— City pages (city-pages brief §B). Each page has its own hook and body;
  // no paragraph is copied between pages, and every page states plainly that
  // the office is in Pyeongtaek. Travel figures match content/serviceAreas.ts.
  {
    slug: 'lawyer-near-osan-air-base',
    centralQuestion:
      'I am stationed at or live near Osan Air Base — where does an off-base legal problem actually get handled?',
    title: 'A Lawyer Near Osan Air Base — in the City the Base Is Actually In',
    footerTitle: 'Lawyer Near Osan Air Base',
    metaTitle: 'Lawyer Near Osan Air Base (Songtan) | SOL & LUNA Law Firm',
    metaDescription:
      'Osan Air Base sits in Songtan, Pyeongtaek — the same city as our office and its courthouse. English consultations directly with a Korean attorney, about 20 minutes from the main gate.',
    heroSubtitle:
      'Osan Air Base is in Songtan, Pyeongtaek — the same city as our office, and the same city whose courthouse handles off-base matters.',
    hookNote: {
      text: 'Live in Osan the city, not on base?',
      linkText: 'See our page for Osan residents.',
      href: '/english-speaking-lawyer-osan',
    },
    sections: [
      {
        paragraphs: [
          "As most people stationed here learn quickly, Osan Air Base isn't in Osan — it sits in Songtan, in the city of Pyeongtaek. That geography matters for one practical reason: if a legal matter finds you off-base, Pyeongtaek is where it will be handled — and the courthouse that will handle it stands directly across the street from our office.",
        ],
      },
      {
        heading: 'Off-base, your case runs on the Korean system',
        paragraphs: [
          'A landlord in Songtan holding your deposit, a police call after an argument outside the gate, a marriage ending in a Korean family court — none of it is decided on base. These matters run through Korean police stations, Korean procedure, and Korean courts, whatever your nationality or status.',
          'For anything arising around the base, the courthouse in question is the Pyeongtaek branch court — in our city, across the street from our windows. Working within sight of the building where local cases are heard is not a slogan; it is our commute.',
        ],
      },
      {
        heading: 'English, directly with the attorney',
        paragraphs: [
          'Every consultation here is conducted in English by the attorney himself — the same person who would sign your filings and stand up in that courthouse. Nothing is relayed through a staff interpreter, and the consultation fee is the same whether you speak English or Korean.',
        ],
      },
    ],
    directions: {
      paragraphs: [
        'From the Osan Air Base main gate, our office is about 20 minutes by car (roughly 13 km). Head south on Gyeonggi-daero — the National Route 1 corridor through Seojeong-dong — toward central Pyeongtaek. Parking is available at the building.',
        '5F, SJ Plaza, 1029-1 Pyeongnam-ro, Pyeongtaek-si, Gyeonggi-do',
      ],
    },
    showSituationNav: true,
    disclaimer:
      'SOL & LUNA Law Firm is an independent Korean law firm and is not affiliated with, endorsed by, or officially connected to USFK or Osan Air Base.',
  },
  {
    slug: 'english-speaking-lawyer-osan',
    centralQuestion:
      'I live in Osan (the city) — where would my case be heard, and who can take it in English?',
    title: 'An English-Speaking Lawyer for Osan Residents',
    footerTitle: 'English-Speaking Lawyer — Osan City',
    metaTitle: 'English-Speaking Lawyer for Osan Residents | SOL & LUNA Law Firm',
    metaDescription:
      "Osan residents' court cases are heard at the Suwon District Court, where we work regularly. English consultations directly with a Korean attorney, about 30 minutes from Osan.",
    heroSubtitle:
      'Osan cases are heard at the Suwon District Court — part of our normal territory. Our office, and the English consultation, is in Pyeongtaek.',
    hookNote: {
      text: "Stationed at Osan Air Base? That's actually in Pyeongtaek —",
      linkText: 'see our page for the base community.',
      href: '/lawyer-near-osan-air-base',
    },
    sections: [
      {
        paragraphs: [
          "If you live in Osan, your court cases are heard at the Suwon District Court — not in Pyeongtaek. We work in the Suwon courts regularly: appeals from Pyeongtaek cases are heard there, so Suwon is part of this firm's normal territory. And what we offer from Pyeongtaek, about 30 minutes from Osan, is what's hard to find closer: a consultation conducted in English, directly by the attorney who would handle your case.",
        ],
      },
      {
        heading: 'Who this page is for',
        paragraphs: [
          "Osan's foreign residents mostly work for a living in Korean workplaces — production staff and engineers at the plants and logistics parks around the city, and English teachers in its schools and academies. Their legal problems arrive in Korean: an employment contract signed half-understood, wages that stopped, a lease that went wrong, a police matter after an ordinary night.",
          'Each of those runs on Korean procedure and, when it reaches a courtroom, on the Suwon courts. What usually decides the outcome is not finding a lawyer — it is finding one you can brief precisely, in your own language, before the deadlines start expiring.',
        ],
      },
      {
        heading: 'Suwon court work, from a Pyeongtaek office',
        paragraphs: [
          'We say it plainly: our office is in Pyeongtaek, not Osan or Suwon. When your matter needs a filing or a hearing at the Suwon District Court, we handle it there — that is routine for this firm, not an away game — while the consultations and case preparation happen with you, in English, with the attorney himself.',
        ],
      },
    ],
    directions: {
      paragraphs: [
        'From Osan Station, our office is about 30 minutes by car (roughly 20 km), south along the Gyeonggi-daero (National Route 1) corridor into central Pyeongtaek. By rail, Line 1 runs from Osan Station to Pyeongtaek Station in about 15 minutes, and the office is a short taxi ride from the station. Parking is available at the building.',
        '5F, SJ Plaza, 1029-1 Pyeongnam-ro, Pyeongtaek-si, Gyeonggi-do',
      ],
    },
    showSituationNav: true,
  },
  {
    slug: 'english-speaking-lawyer-anseong',
    centralQuestion: 'I live in Anseong — where would my case be heard, and who can handle it in English?',
    title: 'An English-Speaking Lawyer for Anseong',
    footerTitle: 'English-Speaking Lawyer — Anseong',
    metaTitle: 'English-Speaking Lawyer for Anseong | SOL & LUNA Law Firm',
    metaDescription:
      'Anseong cases are heard at the Pyeongtaek branch court — the building across from our office. English consultations directly with a Korean attorney, about 30 minutes from Anseong.',
    heroSubtitle:
      'Anseong falls under the Pyeongtaek branch court — the building across the street from our office in Pyeongtaek.',
    sections: [
      {
        paragraphs: [
          "If you live in Anseong, your court case doesn't happen in Anseong — it happens in Pyeongtaek. Anseong falls under the jurisdiction of the Pyeongtaek branch court, the building directly across from our office window.",
        ],
        image: {
          src: '/assets/hero-window-court.jpg',
          alt: 'The Pyeongtaek courthouse and prosecutors’ office — the court with jurisdiction over Anseong — seen from the SOL & LUNA office window',
          caption:
            'The court that hears Anseong cases, photographed from our office window. When your case has a hearing, this is the building.',
        },
      },
      {
        heading: 'What that jurisdiction means for you',
        paragraphs: [
          'Lawsuits, family cases, and criminal trials for Anseong residents are filed and heard at this branch court, and the prosecutors reviewing an Anseong investigation sit in the building beside it. Practically, the legal center of gravity for Anseong is a 30-minute drive west — and our office in Pyeongtaek faces it.',
          'Anseong itself has a small municipal court for minor matters, but anything substantial lands here. Choosing a lawyer next to the court that will actually hear your case is the ordinary Korean logic; we simply apply it for English speakers.',
        ],
      },
      {
        heading: 'Consultations in English, by the attorney',
        paragraphs: [
          "You explain your situation once, in English, to the attorney who would run the case — not to an interpreter who summarizes it later. For Anseong's international residents, that usually removes the biggest single obstacle to actually getting advice.",
        ],
      },
    ],
    directions: {
      paragraphs: [
        'From central Anseong, our office is about 30 minutes by car (roughly 22 km), heading west along the National Route 38 corridor toward central Pyeongtaek. Parking is available at the building.',
        '5F, SJ Plaza, 1029-1 Pyeongnam-ro, Pyeongtaek-si, Gyeonggi-do',
      ],
    },
    showSituationNav: true,
  },
  {
    slug: 'english-speaking-lawyer-cheonan',
    centralQuestion: 'I live in Cheonan — is it worth going to Pyeongtaek for an English-speaking lawyer?',
    title: 'An English-Speaking Lawyer for Cheonan',
    footerTitle: 'English-Speaking Lawyer — Cheonan',
    metaTitle: 'English-Speaking Lawyer for Cheonan | SOL & LUNA Law Firm',
    metaDescription:
      'Cheonan cases are heard at the Cheonan branch court — and we appear there. What Pyeongtaek offers is consultations in English, directly with the attorney, about 40 minutes away.',
    heroSubtitle:
      'Cheonan cases are heard at the Cheonan branch court, and we appear there. Our office is in Pyeongtaek — one city north.',
    sections: [
      {
        paragraphs: [
          "Cheonan and Asan cases are heard at the Cheonan branch court, not in Pyeongtaek — and we appear there. What we offer from Pyeongtaek is what's hard to find closer: consultations conducted in English, directly by the attorney who would handle your case.",
        ],
      },
      {
        heading: 'Why Cheonan residents come one city north',
        paragraphs: [
          'Cheonan has plenty of lawyers. What it has far fewer of is lawyers a foreign resident can brief in English without a go-between — and for the engineers, university staff, and English teachers who make up much of the city’s international community, the go-between is exactly where cases go wrong. A 40-minute drive, or a Line 1 ride, buys a conversation where nothing is lost in relay.',
          'Where your matter needs court appearances, we make them at the Cheonan branch court; the preparation — the part that decides most cases — happens with you, in English, at our office in Pyeongtaek.',
        ],
      },
      {
        heading: 'One office, stated plainly',
        paragraphs: [
          'We are not a Cheonan firm with a satellite desk; our office is in Pyeongtaek, and this page exists so you can weigh the distance honestly against the value of direct English communication before you book.',
        ],
      },
    ],
    directions: {
      paragraphs: [
        'From central Cheonan, our office is about 40 minutes by car (roughly 25 km) up the National Route 1 corridor. By rail, take Line 1 from Cheonan Station and get off at Pyeongtaek Station — about 25 minutes — and the office is a short taxi ride from the station. Parking is available at the building.',
        '5F, SJ Plaza, 1029-1 Pyeongnam-ro, Pyeongtaek-si, Gyeonggi-do',
      ],
    },
    showSituationNav: true,
  },
  {
    slug: 'english-speaking-lawyer-asan',
    centralQuestion: 'I live in Asan — who can take my case in English, and where would it be heard?',
    title: 'An English-Speaking Lawyer for Asan',
    footerTitle: 'English-Speaking Lawyer — Asan',
    metaTitle: 'English-Speaking Lawyer for Asan | SOL & LUNA Law Firm',
    metaDescription:
      'Asan cases are heard at the Cheonan branch court, where we appear. From Asan, our Pyeongtaek office is about 45 minutes by car or 40 on Line 1 — with consultations in English, by the attorney.',
    heroSubtitle:
      'Asan cases go to the Cheonan branch court, where we appear. Our office — and the English-language consultation — is in Pyeongtaek.',
    sections: [
      {
        paragraphs: [
          'Start with the honest map: a lawsuit or criminal case for an Asan resident is heard at the Cheonan branch court, whose district covers both Cheonan and Asan. Our office is not there — it is in Pyeongtaek, up the Line 1 corridor — and we handle Asan matters by appearing at that court while doing the real work with you in English.',
        ],
      },
      {
        heading: 'Built for how Asan’s foreign community actually works',
        paragraphs: [
          'Asan’s international residents cluster around the display and manufacturing complexes near Tangjeong and the university neighborhoods of Onyang — expatriate engineers on rotation, factory workers, teachers. Most have employers, landlords, and contracts in Korean, and no one nearby who can explain a legal problem to them in their own language.',
          'That explanation is the product here. Before any filing, you sit with the attorney — not staff — and hear in plain English what your position is, what it costs to fight, and whether fighting is worth it. If the answer is no, that is the advice you get.',
        ],
      },
      {
        heading: 'The distance, priced honestly',
        paragraphs: [
          'Pyeongtaek is a real trip from Asan — plan on most of an hour by car — so we keep it worth the ride: consultations are by appointment, start on time, and are conducted by the person who would actually run your case at the Cheonan branch court.',
        ],
      },
    ],
    directions: {
      paragraphs: [
        'From central Asan, our office is about 45 minutes by car (roughly 29 km) heading north on the National Route 45 corridor toward Pyeongtaek. By rail, Line 1 runs from Asan’s stations to Pyeongtaek Station in about 40 minutes, and the office is a short taxi ride from there. Parking is available at the building.',
        '5F, SJ Plaza, 1029-1 Pyeongnam-ro, Pyeongtaek-si, Gyeonggi-do',
      ],
    },
    showSituationNav: true,
  },
]

export function getLandingPage(slug: string): LandingPage | undefined {
  return LANDING_PAGES.find((p) => p.slug === slug)
}
