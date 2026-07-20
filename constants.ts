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

// Paid consultation policy — two-tier by consultation language.
// KRW is the billed amount (VAT included); USD is an approximate conversion only.
export const CONSULTATION = {
  DURATION_MIN: 30,
  FEE_KRW_KOREAN_LABEL: "₩50,000",
  FEE_KRW_ENGLISH_LABEL: "₩100,000",
  FEE_USD_APPROX_LABEL: "approx. US$70",
  VAT_INCLUDED: true,
  // Inline abbreviated form for use mid-sentence.
  INLINE: "₩50,000 in Korean / ₩100,000 in English (approx. US$70), VAT included",
  // Compact hero fact line.
  HERO_FACT_LINE: "30-minute assessment in English, directly with the attorney — ₩100,000 (₩50,000 in Korean), VAT included. No obligation to proceed.",
  // Transparency line — must appear wherever fees are shown.
  KOREAN_SITE_LINE: "The same fees are published on our Korean-language site."
};

// Representative attorney. Facts sourced from the firm's Korean site; do not
// embellish English ability, qualifications, or experience beyond this data.
export const ATTORNEY = {
  nameEn: "Cheolho Choi",
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
    "Attorney, Law Firm Suho (former)",
    "In-house Counsel, GS Engineering & Construction (former)",
    "In-house Counsel, Lotte Engineering & Construction (former)",
    "Judicial Trainee, Seoul High Court",
    "Judicial Trainee, Seoul Northern District Court"
  ],
  // Real English-service model, per the firm: attorney consults in English directly.
  englishService: "Consultations are conducted directly by the attorney in English.",
  koreanProfileUrl: "https://www.sllaw.co.kr"
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Location", href: "/location" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

// Practice-area content now lives in content/practiceAreas.ts (single source of truth).