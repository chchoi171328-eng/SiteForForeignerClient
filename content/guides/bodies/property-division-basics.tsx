// Guide body: Property Division Basics
// Authored via the english-guide-writer skill workflow (guide-production Phase 2, #11).
// Statute references verified against law.go.kr / casenote.kr — see REVIEW-GUIDES.md.
// Case-law doctrines (separate-property exception, future benefits, debt-excess division)
// are stated as hedged practice without citations.

import Image from 'next/image'
import Link from 'next/link'
import {
  GuideSummary,
  GuideToc,
  Term,
  Caption,
  Callout,
  GuideDeadlines,
  GuideFaq,
} from '@/components/guide/GuideComponents'

const H2 = 'text-2xl font-serif font-bold text-navy-900 mt-12 mb-4 scroll-mt-28'
const P = 'text-gray-700 leading-relaxed mb-4'
const LINK = 'text-navy-900 underline decoration-gold-400 underline-offset-2 hover:text-gold-600'

export default function PropertyDivisionBasics() {
  return (
    <>
      <Image
        src="/assets/guides/property-division-hero.jpg"
        alt="A Korean apartment complex at dusk — in a Korean divorce, property division turns on contribution, not on whose name is on the title"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            Korean property division splits what the couple <strong>built together during the
            marriage</strong> — by contribution, not by whose name is on the title, and{' '}
            <strong>not by who was at fault</strong>.
          </li>
          <li>
            Homemaking and childcare count as contribution. Debts count too — the court divides
            the <strong>net</strong> estate.
          </li>
          <li>
            Pensions are part of the picture: the <strong>National Pension can be split</strong>{' '}
            for marriages of 5+ years, by a separate claim to the pension service.
          </li>
          <li>
            Against hidden or shifted assets, the family court can order{' '}
            <strong>asset disclosure and account tracing</strong>, and transfers made to defeat
            your claim can be <strong>unwound</strong>.
          </li>
          <li>
            The whole claim <strong>dies 2 years after the divorce</strong> — and only filing at
            court stops that clock.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        Property division in a Korean divorce answers one question: of everything this marriage
        accumulated, who walks away with what? The Civil Act gives each spouse a claim to divide
        the property built up during the marriage (art. 839-2, applied to judicial divorces by
        art. 843) — a claim that exists whether the divorce was consensual or fought, and whether
        or not your name ever appeared on a deed.
      </p>
      <p className={P}>
        Two features surprise foreign readers. First, fault lives elsewhere: the spouse who
        wrecked the marriage may owe <Term ko="위자료">solatium</Term>, but property division
        itself is an accounting of contribution, not a punishment. Second, the deadline is
        unusually hard: two years after the divorce, the claim is simply gone. This guide covers
        what is in the pot, how shares are set, pensions, hidden assets, and the mistakes that
        cost people their share.
      </p>

      <GuideToc
        items={[
          { href: '#the-principle', label: '1. The principle: contribution, not names or fault' },
          { href: '#whats-in-the-pot', label: "2. What's in the pot — and what isn't" },
          { href: '#how-shares-are-set', label: '3. How shares are set' },
          { href: '#pensions', label: '4. Pensions split too' },
          { href: '#hidden-assets', label: '5. Hidden and moved assets' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="the-principle" className={H2}>
        1. The principle: contribution, not names or fault
      </h2>
      <p className={P}>
        The statute is short: the spouses divide by agreement, and failing agreement the family
        court sets the amount and method &ldquo;considering the amount of property achieved
        through the cooperation of both parties and other circumstances&rdquo; (art. 839-2).
        Everything practical flows from that word <em>cooperation</em>: what matters is what each
        spouse contributed to building and keeping the marital estate — income, but equally
        homemaking, childcare, and supporting the other&rsquo;s career.
      </p>
      <p className={P}>
        Registration is bookkeeping, not ownership of the claim: an apartment titled solely to one
        spouse is still divided if the marriage built it. And because fault is handled by the
        separate solatium claim, a spouse principally responsible for the breakdown still receives
        their contribution-based share of the property. Keep the two claims apart in your head —
        they are argued, and time-barred, differently.
      </p>

      <h2 id="whats-in-the-pot" className={H2}>
        2. What&rsquo;s in the pot — and what isn&rsquo;t
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>In:</strong> the home and its <Term ko="전세">jeonse</Term> deposit, savings and
          investments, vehicles, business interests built during the marriage — wherever titled,
          and including assets held through the other spouse&rsquo;s name.
        </li>
        <li>
          <strong>Presumptively out:</strong> <Term ko="특유재산">separate property</Term> — what
          each spouse brought into the marriage or received individually by inheritance or gift.
          The working exception: where the other spouse contributed to keeping or growing that
          asset over a real period, practice lets it enter the division to that extent.
        </li>
        <li>
          <strong>Debts count.</strong> Loans taken to acquire or run the marital life — the
          mortgage, the jeonse loan, business debt — are netted against the assets; the division
          works on the remainder, and practice has moved to allow division even where debts exceed
          assets.
        </li>
        <li>
          <strong>Money not yet in hand counts too.</strong> Severance and retirement benefits
          expected from ongoing employment are treated in practice as divisible to the extent
          earned during the marriage — a large item for long marriages, easy to forget.
        </li>
      </ul>
      <figure className="my-6">
        <Image
          src="/assets/guides/property-division-map.jpg"
          alt="Sorting the marital estate into an asset map before a Korean property division"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          Divisions are argued asset by asset — an inventory with dates and paper trails is worth
          more than any percentage argument.
        </Caption>
      </figure>
      <Callout title="Build the asset map first">
        Before arguing percentages, fix the inventory: every account, deposit, policy, loan, and
        title, each with a date and a paper trail. Divisions are won on complete maps — and the
        disclosure tools in section 5 exist for the parts you cannot see.
      </Callout>

      <h2 id="how-shares-are-set" className={H2}>
        3. How shares are set
      </h2>
      <p className={P}>
        There is no statutory percentage. Agreement comes first — a written settlement covering
        the split is binding and usually cheapest. Failing that, the family court weighs the
        contributions on both sides, the length of the marriage, ages and earning capacity, who
        keeps the children and the home they need, and what each side&rsquo;s life looks like
        after the divorce.
      </p>
      <p className={P}>
        For a full-time homemaker, the contribution is real and substantial in practice — long
        marriages commonly end near even splits — but no fixed entitlement exists, and short
        marriages, large separate fortunes, or one-sided debt change the arithmetic. Treat any
        percentage someone quotes you from the internet as an anecdote, not a rule; the honest
        version is a range argued from your specific facts.
      </p>

      <p className={P}>
        The method is as negotiable as the number. Division can be ordered as a money payment, a
        transfer of the asset itself, or a mix — the family home to one side balanced by cash from
        the other, paid at once or in installments. If keeping a particular asset matters to you —
        the apartment the children live in, the business you run — say so from the start; method
        arguments land better before positions harden around percentages.
      </p>

      <h2 id="pensions" className={H2}>
        4. Pensions split too
      </h2>
      <p className={P}>
        The National Pension has a statutory split: a divorced spouse whose marriage overlapped
        the other&rsquo;s pension enrollment for <strong>5 years or more</strong> can claim a{' '}
        <Term ko="분할연금">divided pension</Term> — an equal share of the marriage-period portion
        of the ex-spouse&rsquo;s old-age pension — once the ex-spouse is drawing it and the
        claimant reaches pension age (National Pension Act art. 64). It is claimed from the
        National Pension Service, separately from the divorce itself; it does not happen
        automatically.
      </p>
      <p className={P}>
        Occupational schemes — civil-service, teachers&rsquo;, military — run their own versions
        with their own rules, and private retirement accounts (IRP, severance expectations) enter
        the ordinary division in section 2. In a long marriage the pension layer can outweigh the
        savings — put it on the asset map from the start.
      </p>

      <h2 id="hidden-assets" className={H2}>
        5. Hidden and moved assets
      </h2>
      <p className={P}>
        Korean family procedure has teeth for the classic problem — a spouse who empties accounts
        or parks assets with relatives once divorce is in the air:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Asset disclosure</strong> <span lang="ko">(재산명시)</span> — the family court
          can order a party to file a sworn asset list in division, support, and child-support
          cases (Family Litigation Act art. 48-2).
        </li>
        <li>
          <strong>Asset inquiry</strong> <span lang="ko">(재산조회)</span> — where the list looks
          thin, the court can query financial institutions and registries about assets in a
          party&rsquo;s name (art. 48-3). Bank secrecy is not a hiding place inside this
          procedure.
        </li>
        <li>
          <strong>Unwinding transfers</strong> — a transfer made knowing it would defeat your
          division claim can be revoked through the family court and the asset restored (Civil
          Act art. 839-3), on the short windows noted below.
        </li>
        <li>
          <strong>Freezing first</strong> — provisional attachment of accounts or real estate at
          the outset keeps the estate where it is while the case runs. Speed matters more here
          than anywhere else in the case.
        </li>
      </ul>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Divorcing now, dividing &ldquo;later.&rdquo;</strong> The 2-year clock runs
          from the divorce, and only a court filing stops it — messages about
          &ldquo;sorting it out&rdquo; stop nothing.
        </li>
        <li>
          <strong>Leaving Korea with the claim unfiled.</strong> Distance makes evidence stale
          and deadlines invisible. File first, or at least have the claim assessed and calendared
          before you fly.
        </li>
        <li>
          <strong>Trusting a verbal split.</strong> Put the agreement in writing with the amounts
          and dates; an agreement that lives in conversation is unenforceable exactly when you
          need it.
        </li>
        <li>
          <strong>Ignoring the debts</strong> — or assuming they are all &ldquo;his&rdquo; or
          &ldquo;hers.&rdquo; The net-estate arithmetic can move the outcome more than the
          percentage argument does.
        </li>
        <li>
          <strong>Forgetting the pension claim.</strong> The National Pension split is a separate
          application to the pension service — divorcing carefully and never claiming it is
          leaving statutory money on the table.
        </li>
      </ul>

      <GuideDeadlines
        items={[
          {
            when: '2 years from divorce',
            what: 'The property-division claim must be filed at the family court (art. 839-2(3)) — an exclusion period, not a negotiating guideline.',
          },
          {
            when: '1 year / 5 years',
            what: 'To sue to unwind a transfer made to defeat your claim: within 1 year of learning of it, and 5 years of the transfer (arts. 839-3, 406(2)).',
          },
          {
            when: 'After eligibility',
            what: 'Claim the divided National Pension from the pension service once the conditions are met — it is a separate application with its own claim rules, not an automatic payment.',
          },
        ]}
      />
      <p className={P}>
        Start with the asset map and two dates: the divorce date (or the date you expect it), and
        the earliest date you suspect assets started moving. Every tool in this guide is aimed
        with those.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: "I was a full-time parent with no income. Am I really entitled to a share?",
            a: (
              <p>
                Yes. Contribution is the measure, and Korean practice treats homemaking and
                childcare as genuine contribution to the marital estate — in long marriages,
                commonly a share approaching half. The years, the children raised, and what the
                household would have cost to replace are your evidence; income was only ever one
                way of contributing.
              </p>
            ),
          },
          {
            q: "Everything is in my spouse's name. Does that decide anything?",
            a: (
              <p>
                No — title determines who must transfer, not who is entitled. Property built
                during the marriage is divisible whoever holds it. What the name on the title does
                affect is logistics: freezing the asset early matters more when you are not the
                registered owner, which is why provisional attachment comes up in almost every
                contested division.
              </p>
            ),
          },
          {
            q: 'My spouse received an inheritance during the marriage. Is it divided?',
            a: (
              <p>
                The starting point is no — inherited and gifted assets are separate property. The
                argument that brings them in is contribution to keeping or growing them: years of
                managing the inherited building, working the family business, paying its taxes and
                upkeep from household funds. The longer and more concrete that involvement, the
                more of the asset practice lets into the division.
              </p>
            ),
          },
          {
            q: 'Some of our assets are in another country. Can the Korean court reach them?',
            a: (
              <p>
                The court can weigh them in the division — the accounting is of the whole estate —
                but enforcing against foreign assets runs through the other country&rsquo;s
                recognition and enforcement rules, which affects strategy about where to litigate
                and what to trade for what. For couples with two-country lives, read this guide
                together with{' '}
                <Link href="/guides/divorce-family-law/which-countrys-court-international-divorce" className={LINK}>
                  Which Country&rsquo;s Court?
                </Link>
                .
              </p>
            ),
          },
          {
            q: 'Can we just agree on the split ourselves and skip the court?',
            a: (
              <p>
                Yes — agreement is the statute&rsquo;s first route, and most divisions end there.
                Do it in writing, with the assets listed and transfer dates fixed, ideally
                alongside the divorce paperwork rather than after it. If the agreement is broken
                later, you enforce the contract; and if agreement never truly forms, remember the
                2-year window assumes you will eventually file, not talk.
              </p>
            ),
          },
        ]}
      />

      <p className={P + ' mt-8'}>
        Property division is one piece of the wider process — the two divorce routes, mediation,
        and the other money claims are covered in{' '}
        <Link href="/guides/divorce-family-law/divorce-in-korea-consensual-vs-judicial" className={LINK}>
          Divorce in Korea: Consensual vs. Judicial
        </Link>
        .
      </p>

      <p className="text-sm text-gray-500 leading-relaxed mt-10">
        Written by Attorney Chulho Choi (SOL &amp; LUNA / Law Firm Myeong, KBA-registered specialist
        in Civil and Criminal Law). Reviewed as of August 2026. Updated when laws change.
      </p>
    </>
  )
}
