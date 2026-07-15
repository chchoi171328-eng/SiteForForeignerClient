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

// Paid consultation policy. KRW is the billed amount (VAT included);
// USD is an approximate convenience conversion only.
export const CONSULTATION = {
  DURATION_MIN: 30,
  FEE_KRW: 100000,
  FEE_KRW_LABEL: "₩100,000",
  FEE_USD_APPROX_LABEL: "approx. US$70",
  VAT_INCLUDED: true
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