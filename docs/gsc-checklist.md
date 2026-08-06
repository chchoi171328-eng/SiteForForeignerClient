# Post-Deployment Checklist — Google Search Console (GSC)

Code changes alone do **not** clean up how Google indexes the site. After the
`feature/english-site-seo-conversion` branch is merged and deployed, work through
this checklist by hand. These steps must be done by a person signed in to the
firm's Google account — they cannot be automated in code.

- **English site (canonical):** https://www.lsfp.co.kr
- **Korean site (separate, keep as-is):** https://www.sllaw.co.kr
- **GA measurement ID:** `G-0W2NHJHNLK`

> Special risk for this project: English pages may previously have been indexed
> under `sllaw.co.kr` (now the Korean site). Watch for the English and Korean
> sites getting mixed up or duplicated in the index (steps 4–5).

---

## 0. Prerequisite — confirm the deployment is live

- [ ] `https://www.lsfp.co.kr` loads over HTTPS.
- [ ] `https://lsfp.co.kr` (no `www`) redirects to `https://www.lsfp.co.kr` with a **308** (permanent) redirect.
- [ ] `https://www.lsfp.co.kr/sitemap.xml` loads and every `<loc>` uses `www.lsfp.co.kr`.
- [ ] `https://www.lsfp.co.kr/robots.txt` loads and its `Sitemap:` line points to `https://www.lsfp.co.kr/sitemap.xml`.
- [ ] Vercel env var `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-0W2NHJHNLK` is set (Production + Preview) and the site was redeployed after adding it.

---

## 1. Add / verify the property in GSC

1. Go to https://search.google.com/search-console and sign in with the firm's Google account.
2. Add a property. Prefer a **Domain property** for `lsfp.co.kr` (covers `www`, non-`www`, http, and https together).
   - Verification is done via a DNS TXT record. Since DNS is managed at **Gabia**, add the TXT record Google gives you in the Gabia DNS settings, then click Verify.
   - If a Domain property is not practical, add a **URL-prefix property** for `https://www.lsfp.co.kr` instead.

- [ ] Property added and verified.

---

## 2. Submit the sitemap

1. In GSC, open **Indexing → Sitemaps**.
2. Enter `sitemap.xml` and submit.
3. Confirm the status becomes **Success** (may take a little time).

- [ ] Sitemap submitted and reads "Success".

---

## 3. Request indexing for the key pages

Use **URL Inspection** (top search bar in GSC) for each URL below, then click
**Request Indexing**. Prioritise these:

- [ ] `https://www.lsfp.co.kr/` (home)
- [ ] `https://www.lsfp.co.kr/attorneys/chulho-choi`
- [ ] `https://www.lsfp.co.kr/english-speaking-lawyer-pyeongtaek`
- [ ] `https://www.lsfp.co.kr/camp-humphreys-legal-help`
- [ ] `https://www.lsfp.co.kr/lawyer-for-foreigners-korea`
- [ ] `https://www.lsfp.co.kr/practice-areas/criminal-defense`
- [ ] `https://www.lsfp.co.kr/practice-areas/civil-litigation`
- [ ] `https://www.lsfp.co.kr/practice-areas/real-estate-lease-disputes`
- [ ] `https://www.lsfp.co.kr/practice-areas/debt-collection`
- [ ] `https://www.lsfp.co.kr/practice-areas/divorce-family-law`
- [ ] `https://www.lsfp.co.kr/practice-areas/labor-employment`
- [ ] `https://www.lsfp.co.kr/practice-areas/korean-police-investigation`

> Google limits how many manual indexing requests you can make per day. If you
> hit the limit, do the rest the next day — the sitemap will cover them anyway.

---

## 4. Check for confusion with the Korean site

1. In Google search, run: `site:sllaw.co.kr`
   - [ ] Confirm the results are **Korean-site pages only**. If any English pages
         (e.g. old `/about`, `/practice-areas`) still appear under `sllaw.co.kr`,
         note them — those are leftovers from before the domain split.
2. In Google search, run: `site:lsfp.co.kr`
   - [ ] Over the following weeks, the English pages should begin appearing here.

> Do **not** redirect `sllaw.co.kr` — it is the live Korean site. The goal is only
> to make sure English content consolidates under `www.lsfp.co.kr`.

---

## 5. Follow-up review (2–4 weeks after deployment)

1. GSC → **Indexing → Pages** (coverage report).
   - [ ] No unexpected "Duplicate, Google chose a different canonical" entries for English pages.
   - [ ] No English URLs reported as canonicalised to `sllaw.co.kr`.
2. GSC → **URL Inspection** on the home page.
   - [ ] "User-declared canonical" and "Google-selected canonical" both point to `https://www.lsfp.co.kr`.
3. [ ] `www` vs non-`www` are not both being indexed (the 308 redirect should prevent this).

---

## 6. Google Business Profile (GBP)

1. Sign in to the firm's Google Business Profile.
   - [ ] The **website field** points to `https://www.lsfp.co.kr` (for the English-facing profile).
   - [ ] Business name, address, and phone (`031-658-6100`) match the site exactly
         (character-for-character NAP consistency). If they differ, decide which is
         the source of truth before changing either.

---

## 7. Link Google Analytics ↔ Search Console (optional but recommended)

- [ ] In GA (property `lsfp.co.kr`, ID `G-0W2NHJHNLK`) → Admin → Product links →
      **Search Console links**, link the GSC property so search-query data appears in GA.

---

## Notes

- Indexing is not instant. Expect days-to-weeks for changes to settle; revisit step 5 before concluding anything is wrong.
- Keep this file updated if URLs are added or removed (e.g. new blog posts or practice-area pages) — they are already added to `sitemap.xml` automatically, but manual indexing requests for important new pages speed things up.
