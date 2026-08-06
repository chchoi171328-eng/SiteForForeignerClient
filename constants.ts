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

// Paid consultation policy — one unified fee regardless of language.
// KRW is the billed amount (VAT included); USD is an approximate conversion only.
export const CONSULTATION = {
  DURATION_MIN: 30,
  FEE_KRW_LABEL: "₩100,000",
  FEE_USD_APPROX_LABEL: "approx. US$70",
  VAT_INCLUDED: true,
  // Standard block body (unification signal — do not drop).
  BLOCK_BODY: "The same fee whichever language you speak, Korean or English. Every consultation is conducted by the attorney who would actually handle your case — not by staff, and not through an interpreter.",
  // Inline abbreviated form for use mid-sentence.
  INLINE: "₩100,000 for 30 minutes (approx. US$70), VAT included — the same fee in Korean or English",
  // Compact hero fact line.
  HERO_FACT_LINE: "30-minute assessment — ₩100,000, VAT included. The same fee in Korean or English, conducted by the attorney who would handle your case. No obligation to proceed.",
  // How We Work step 02 body.
  STEP2: "₩100,000 (approx. US$70), VAT included, by appointment — the same fee whichever language you speak. The fee is fixed; it does not change based on your case type.",
  // Symmetric-disclosure line — must appear wherever the fee block is shown.
  KOREAN_SITE_LINE: "The same fee is published on our Korean-language site."
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

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Fees", href: "/fees" },
  { name: "Location", href: "/location" },
  { name: "Contact", href: "/contact" },
];

// Practice-area content now lives in content/practiceAreas.ts (single source of truth).