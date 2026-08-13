// Areas we serve — single source of truth for the nav dropdown, the /location
// "Getting here from nearby areas" block, and each city page's Directions
// figures (city-pages brief §D-2 requires the /location times to match the
// city pages exactly, so both read from here).
//
// Fact basis (verified 2026-08, see PR notes): jurisdictions from
// suwon.scourt.go.kr (Pyeongtaek branch covers Pyeongtaek + Anseong) and
// daejeon.scourt.go.kr (Cheonan branch covers Cheonan + Asan); road distances
// from OSM routing, with drive times stated as "about" figures padded for
// normal traffic; rail times from published Line 1 journey data.

export type ServiceArea = {
  slug: string
  /** Short name for the nav dropdown / location list. */
  navLabel: string
  /** One-line "getting here" entry for /location. */
  driveLine: string
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: 'camp-humphreys-legal-help',
    navLabel: 'Camp Humphreys',
    driveLine: 'From the Camp Humphreys area, our office in central Pyeongtaek is a short local drive.',
  },
  {
    slug: 'lawyer-near-osan-air-base',
    navLabel: 'Osan Air Base',
    driveLine:
      'From the Osan Air Base main gate (Songtan), about 20 minutes by car — roughly 13 km down Gyeonggi-daero.',
  },
  {
    slug: 'english-speaking-lawyer-anseong',
    navLabel: 'Anseong',
    driveLine: 'From central Anseong, about 30 minutes by car — roughly 22 km along National Route 38.',
  },
  {
    slug: 'english-speaking-lawyer-cheonan',
    navLabel: 'Cheonan',
    driveLine:
      'From central Cheonan, about 40 minutes by car (roughly 25 km), or about 25 minutes on Line 1 from Cheonan Station to Pyeongtaek Station.',
  },
  {
    slug: 'english-speaking-lawyer-asan',
    navLabel: 'Asan',
    driveLine:
      'From central Asan, about 45 minutes by car (roughly 29 km), or about 40 minutes on Line 1 to Pyeongtaek Station.',
  },
]
