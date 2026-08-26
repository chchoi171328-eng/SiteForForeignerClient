export const CONTACT_INFO = {
  PHONE: "031-658-6100",
  EMAIL: "sllaw@sllaw.co.kr",
  ADDRESS_EN: "5F, SJ Plaza, 1029-1 Pyeongnam-ro, Pyeongtaek-si, Gyeonggi-do",
  ADDRESS_KR: "경기 평택시 평남로 1029-1, SJ프라자 5층",
  MAP_URL: "https://maps.google.com/maps?q=1029-1%20Pyeongnam-ro%2C%20Pyeongtaek-si&t=&z=15&ie=UTF8&iwloc=&output=embed",
  HOURS_EN: "Weekdays 09:00–18:00 · Weekends and public holidays by appointment",
  KOREAN_SITE: "https://www.sllaw.co.kr",
  NAVER_BLOG: "https://blog.naver.com/natural_born"
};

// Paid consultation policy — tiered, and identical in either language:
// up to 60 minutes at the full fee, reduced when it ends within 30 minutes.
// KRW is the billed amount (VAT included); USD is an approximate conversion
// only, and is shown solely where a USD figure already appeared.
export const CONSULTATION = {
  DURATION_MIN: 60,
  FEE_KRW_LABEL: "₩150,000",
  FEE_USD_APPROX_LABEL: "approx. US$110",
  // Reduced tier — applies when the consultation ends inside 30 minutes.
  SHORT_DURATION_MIN: 30,
  SHORT_FEE_KRW_LABEL: "₩100,000",
  SHORT_FEE_USD_APPROX_LABEL: "approx. US$70",
  VAT_INCLUDED: true,
  // Standard block heading. The two fee lines are composed in
  // ConsultationFees from the labels above so the USD figures stay attached.
  BLOCK_HEADING: "Consultation with the Attorney",
  // Standard block body (unification signal — do not drop).
  BLOCK_BODY: "We review the facts and your documents, then tell you the legal issues and how we would approach them. The same fee whichever language you speak, Korean or English — conducted by the attorney who would actually handle your case, not by staff, and not through an interpreter.",
  // Inline abbreviated form for use mid-sentence.
  INLINE: "up to 60 minutes for ₩150,000 (₩100,000 if it ends within 30 minutes), VAT included, in Korean or English",
  // Compact hero fact line.
  HERO_FACT_LINE: "Up to 60 minutes with the attorney — ₩150,000, VAT included (₩100,000 if we finish within 30). The same fee in Korean or English. No obligation to proceed.",
  // How We Work step 02 body.
  STEP2: "Up to 60 minutes for ₩150,000 (VAT included) — and if we finish within 30 minutes, you pay only ₩100,000. The same fee whichever language you speak, by appointment.",
  // Symmetric-disclosure line — must appear wherever the fee block is shown.
  KOREAN_SITE_LINE: "The same fees are published on our Korean-language site."
};

// Representative attorney. Facts sourced from the firm's Korean site; do not
// embellish English ability, qualifications, or experience beyond this data.
export const ATTORNEY = {
  nameEn: "Chulho Choi",
  nameKr: "최철호",
  titleEn: "Representative Attorney",
  firmEn: "SOL & LUNA Law Firm",
  firmKr: "법무법인 명",
  // KBA specialist registration confirmed for these fields only.
  kbaSpecialties: ["Civil Law", "Criminal Law"],
  education: [
    "Chung-Ang University, B.S. in Computer Science",
    "Sungkyunkwan University Law School (J.D. equivalent)"
  ],
  career: [
    "Representative Attorney, SOL & LUNA Law Firm (present)",
    "Legal Advisor, foreign resident counseling center, Pyeongtaek International Exchange Foundation (PIEF) · 2025–present",
    "Attorney, Law Firm Suho (former)",
    "In-house Counsel, GS Engineering & Construction (former)",
    "In-house Counsel, Lotte Engineering & Construction (former)",
    "Judicial Trainee, Seoul High Court",
    "Judicial Trainee, Seoul Northern District Court",
    "KATUSA, 102nd MI Battalion, 2nd Infantry Division, U.S. Army (Camp Essayons, Uijeongbu) · 2001–2003"
  ],
  // Real English-service model, per the firm: attorney consults in English directly.
  englishService: "Consultations are conducted directly by the attorney in English.",
  koreanProfileUrl: "https://www.sllaw.co.kr"
};

// Header/footer navigation. "Contact" is intentionally absent: in the header
// the highlighted consultation button is the single /contact entry point, and
// the footer adds its own Contact link separately (full-sitemap convention).
export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Fees", href: "/fees" },
  { name: "Guides", href: "/guides" },
  { name: "Location", href: "/location" },
];

// Practice-area content now lives in content/practiceAreas.ts (single source of truth).