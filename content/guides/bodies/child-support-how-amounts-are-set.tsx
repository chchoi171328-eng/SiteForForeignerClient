// Guide body: Child Support: How Amounts Are Set
// Authored via the english-guide-writer skill workflow (guide-production Phase 2, #13).
// Figures verified against the Seoul Family Court 2021 guidelines table (effective
// March 2022) and the Family Litigation Act / enforcement-support statutes — see
// REVIEW-GUIDES.md. Completes the divorce-family-law cluster.

import Image from 'next/image'
import Link from 'next/link'
import {
  GuideSummary,
  GuideToc,
  Term,
  Caption,
  Callout,
  GuideFlow,
  GuideDeadlines,
  GuideFaq,
} from '@/components/guide/GuideComponents'

const H2 = 'text-2xl font-serif font-bold text-navy-900 mt-12 mb-4 scroll-mt-28'
const P = 'text-gray-700 leading-relaxed mb-4'
const LINK = 'text-navy-900 underline decoration-gold-400 underline-offset-2 hover:text-gold-600'

export default function ChildSupportHowAmountsAreSet() {
  return (
    <>
      <Image
        src="/assets/guides/child-support-hero.jpg"
        alt="A child's backpack and lunchbox on a Korean kitchen counter — child support in Korea is set from a published court guidelines table"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            Both parents owe child support <strong>regardless of custody, visitation, or how the
            marriage ended</strong> — the duty runs to the child, until majority (19).
          </li>
          <li>
            Amounts start from a <strong>published court guidelines table</strong>: the
            parents&rsquo; combined income and the child&rsquo;s age set a standard figure, which
            is then <strong>split between the parents by income ratio</strong>.
          </li>
          <li>
            The number is <strong>adjustable later</strong> — incomes, needs, and living
            arrangements change, and so can the order.
          </li>
          <li>
            Non-payment triggers a real ladder: <strong>salary deduction at the source</strong>,
            court compliance orders, fines, detention — and then{' '}
            <strong>license suspension, exit bans, public naming, and criminal punishment</strong>.
          </li>
          <li>
            A government agency exists to run collection for you — custodial parents rarely have
            to chase alone.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        Child support in Korea is less of a negotiation than foreign parents expect. The starting
        number comes off a table the courts publish, the duty belongs to both parents whatever
        happened between them, and the enforcement system — rebuilt over recent years — now
        reaches salaries, driver&rsquo;s licenses, and airport gates. Knowing how the machine works
        matters on both sides of it: the parent entitled to support, and the parent paying it.
      </p>
      <p className={P}>
        The legal spine is short. Support terms are part of the mandatory child arrangements on
        divorce (Civil Act art. 837 — see{' '}
        <Link href="/guides/divorce-family-law/divorce-in-korea-consensual-vs-judicial" className={LINK}>
          the divorce guide
        </Link>
        ), the family court sets or changes them when parents cannot agree, and the Family
        Litigation Act plus a dedicated enforcement-support law supply the teeth. This guide walks
        the amount, the changes, the enforcement ladder, and the cross-border cases.
      </p>

      <GuideToc
        items={[
          { href: '#the-duty', label: '1. The duty — and how long it runs' },
          { href: '#the-table', label: '2. The guidelines table: how amounts are computed' },
          { href: '#changing', label: '3. Changing the number later' },
          { href: '#enforcement', label: '4. When payments stop: the enforcement ladder' },
          { href: '#cross-border', label: '5. Cross-border support' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="the-duty" className={H2}>
        1. The duty — and how long it runs
      </h2>
      <p className={P}>
        Child support is the child&rsquo;s claim, carried by whichever parent raises them. It does
        not depend on marriage — parents never married to each other owe it too — and it does not
        depend on contact: a parent barred from visitation still pays, and a parent behind on
        payments still visits. The two systems deliberately do not trade against each other.
      </p>
      <p className={P}>
        The default duty runs until the child reaches majority at 19. Parents can agree to carry
        costs beyond that — university is the common case — and such agreements are enforceable
        like the rest of the support terms; without one, adult children&rsquo;s costs are a
        voluntary matter.
      </p>

      <p className={P}>
        One prerequisite trips up unmarried parents: the duty attaches to <em>legal</em> parents.
        Where the father was never married to the mother and never formally acknowledged the
        child, legal paternity — by acknowledgment{' '}
        <Term ko="인지">(inji)</Term> or a court finding — comes first, and support flows from it.
        For international couples this step is worth handling early, while evidence and
        cooperation are still easy to come by.
      </p>

      <h2 id="the-table" className={H2}>
        2. The guidelines table: how amounts are computed
      </h2>
      <p className={P}>
        Korean courts work from the <Term ko="양육비 산정기준표">child support guidelines
        table</Term> published by the Seoul Family Court and used nationwide. The mechanism has
        three steps:
      </p>
      <GuideFlow
        steps={[
          {
            title: 'Add both parents’ gross incomes',
            body: 'Pre-tax, and broad: salary, business and rental income, interest, pensions, government benefits.',
          },
          {
            title: 'Read the standard amount off the table',
            body: 'The combined-income band and the child’s age bracket give a standard per-child monthly figure — under the 2021 table (in effect since March 2022), ranging from roughly ₩620,000 to ₩2,880,000.',
          },
          {
            title: 'Split it by income ratio',
            body: 'Each parent bears the standard amount in proportion to their income; the paying parent transfers their share to the custodial parent.',
          },
        ]}
      />
      <figure className="my-6">
        <Image
          src="/assets/guides/child-support-school.jpg"
          alt="School supplies and a piggy bank — the Korean child support table prices the ordinary costs of a childhood"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          The table&rsquo;s standard amounts price an ordinary childhood at each age — housing,
          food, schooling — which is why documented incomes, not impressions, drive the number.
        </Caption>
      </figure>
      <p className={P}>
        The table is a starting point, not a straitjacket: courts adjust for the number of
        children, unusual education or medical costs, housing, and the parents&rsquo; real
        circumstances. But it anchors every negotiation — which is why the productive argument is
        rarely &ldquo;what feels fair&rdquo; and usually &ldquo;what are the incomes, documented.&rdquo;
      </p>

      <h2 id="changing" className={H2}>
        3. Changing the number later
      </h2>
      <p className={P}>
        Support orders are living documents. Job loss, a raise, a child&rsquo;s new school or
        medical needs, a custody change — any real shift in circumstances supports asking the
        family court to adjust the amount, up or down. What does not work is silently paying less:
        the order stands until changed, and the shortfall accumulates as enforceable arrears.
      </p>
      <p className={P}>
        The past is not automatically lost either: support for periods already elapsed can be
        claimed in practice, though courts weigh how the costs were actually borne and delay makes
        the accounting harder. The working rule in both directions is the same — deal with changes
        through the court promptly, not through unilateral arithmetic.
      </p>

      <h2 id="enforcement" className={H2}>
        4. When payments stop: the enforcement ladder
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Salary at the source.</strong> After two or more missed periodic payments, the
          family court can order the payer&rsquo;s <strong>employer</strong> to deduct the support
          from wages and send it directly to you (Family Litigation Act art. 63-2). For salaried
          payers this is the single most effective tool. Security deposits and lump-sum orders
          exist for payers without steady wages (art. 63-3).
        </li>
        <li>
          <strong>Compliance order.</strong> The court orders performance of the duty (art. 64);
          defying it without just cause brings a fine of up to ₩10,000,000 (art. 67) and, on the
          statutory conditions, <strong>detention of up to 30 days</strong> (art. 68).
        </li>
        <li>
          <strong>Administrative sanctions.</strong> For debtors who still refuse after the court
          stage: driver&rsquo;s-license suspension (100 days), exit bans (6-month units), and
          public disclosure of name and arrears (3 years) under the enforcement-support law.
        </li>
        <li>
          <strong>Criminal punishment.</strong> A debtor who, after a detention order, still fails
          to pay within a year faces up to 1 year&rsquo;s imprisonment or a ₩10,000,000 fine.
        </li>
      </ul>
      <Callout title="You do not have to run this ladder alone">
        The government&rsquo;s child-support agency{' '}
        <span lang="ko">(양육비이행관리원)</span> handles applications, collection, and the
        sanction petitions on behalf of custodial parents — including temporary emergency support
        while collection runs. Filing with the agency early is the difference between a system
        working for you and a stack of unanswered messages.
      </Callout>

      <h2 id="cross-border" className={H2}>
        5. Cross-border support
      </h2>
      <p className={P}>
        International families meet two versions of the problem. When the paying parent leaves
        Korea, a Korean order must be enforced through the other country&rsquo;s recognition
        rules — possible in many places, but slower and country-dependent. The practical
        countermeasures live at order time, not collection time: security deposits or a lump-sum
        structure where flight is a real risk (art. 63-3), and an exit-ban petition while arrears
        mount.
      </p>
      <p className={P}>
        In the mirror case — a foreign support order against a parent in Korea — the order travels
        through the recognition framework covered in{' '}
        <Link href="/guides/divorce-family-law/which-countrys-court-international-divorce" className={LINK}>
          Which Country&rsquo;s Court?
        </Link>
        , after which Korean enforcement applies. Where the child now lives in Korea, setting
        support afresh in the Korean courts is often the cleaner route. Either way, document the
        incomes early; distance makes evidence expensive.
      </p>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Cash without records.</strong> Informal envelopes and &ldquo;I&rsquo;ll send
          what I can&rdquo; leave both sides unprotected — the payer cannot prove payment, the
          recipient cannot prove arrears. Fixed amounts, fixed dates, bank transfers.
        </li>
        <li>
          <strong>Vague agreements at the divorce.</strong> &ldquo;He&rsquo;ll help with the
          kids&rsquo; costs&rdquo; is not an order. Use the table, name the number, and get it
          into the court-confirmed paperwork — the enforcement ladder only grips documents.
        </li>
        <li>
          <strong>Trading contact against money.</strong> Withholding visitation over unpaid
          support — or support over blocked visitation — hurts the child and your own case; each
          problem has its own remedy (see{' '}
          <Link href="/guides/divorce-family-law/child-custody-in-international-marriages" className={LINK}>
            the custody guide
          </Link>
          ).
        </li>
        <li>
          <strong>Quietly adjusting the amount yourself</strong> after an income change, instead
          of applying to change the order.
        </li>
        <li>
          <strong>Waiting years to enforce.</strong> Arrears grow, but memories, employers, and
          assets move. The ladder works best started at the second missed payment, not the
          twentieth.
        </li>
      </ul>

      <GuideDeadlines
        items={[
          {
            when: 'At the divorce',
            what: 'Support terms are part of the mandatory child arrangements the family court confirms — set the number there, off the table, not "later."',
          },
          {
            when: 'From the 2nd missed payment',
            what: 'The direct-payment (salary deduction) order becomes available (Family Litigation Act art. 63-2) — the practical trigger to start enforcing.',
          },
          {
            when: 'Until the child turns 19',
            what: 'The default duty period — costs beyond majority need their own written agreement.',
          },
        ]}
      />
      <p className={P}>
        Start with three documents: both parents&rsquo; income evidence, the child&rsquo;s
        recurring cost list, and — if an order already exists — the payment record to date. The
        table, the court, and the agency all run on exactly those.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'What does child support typically cost in Korea?',
            a: (
              <p>
                There is no single number — the standard figure moves with combined income and the
                child&rsquo;s age, from roughly ₩620,000 to ₩2,880,000 per child per month under
                the current table, before the income-ratio split and case adjustments. Two
                documented pay stubs and the child&rsquo;s age bracket will locate your range
                faster than any anecdote from a forum.
              </p>
            ),
          },
          {
            q: "My ex says they have no income, so they'll pay nothing. Does that work?",
            a: (
              <p>
                Not automatically. Courts look past a bare &ldquo;no income&rdquo; claim — at
                earning capacity, assets, lifestyle, and the reasons for the non-earning — and
                can set support accordingly; the asset-disclosure tools from the property-division
                context reach here too. Genuine hardship does shape the number, but it is argued
                with evidence, not declared.
              </p>
            ),
          },
          {
            q: 'My ex moved abroad and stopped paying. Is the money gone?',
            a: (
              <p>
                Not necessarily, but the path changes: enforcing the Korean order where they now
                live depends on that country&rsquo;s recognition rules, and the agency can advise
                on what is workable. If they still hold Korean assets, employers, or travel plans,
                the domestic ladder — deduction, attachment, exit-related measures — still bites.
                This risk is exactly why security or lump-sum structures are worth raising while
                the order is being set.
              </p>
            ),
          },
          {
            q: "Can I pay a lump sum instead of monthly transfers?",
            a: (
              <p>
                It can be agreed, and courts can order security or lump-sum payment where ongoing
                compliance is doubtful. Lump sums buy certainty at the cost of flexibility — they
                fit flight-risk and clean-break situations, less so long childhoods with changing
                needs. If you agree on one, document what it covers and what happens if major new
                costs arise.
              </p>
            ),
          },
          {
            q: "Does remarriage — mine or my ex's — end the support duty?",
            a: (
              <p>
                Not by itself: the duty belongs to the child&rsquo;s parents. New households and
                step-parents can change the financial picture in ways that support a modification
                application, and adoption of the child restructures the legal relationships — but
                none of that happens automatically. Until an order is changed, it stands.
              </p>
            ),
          },
        ]}
      />

      <p className={P + ' mt-8'}>
        This completes the money-and-children side of the divorce cluster — the process itself
        lives in{' '}
        <Link href="/guides/divorce-family-law/divorce-in-korea-consensual-vs-judicial" className={LINK}>
          Divorce in Korea: Consensual vs. Judicial
        </Link>
        , and the property side in{' '}
        <Link href="/guides/divorce-family-law/property-division-basics" className={LINK}>
          Property Division Basics
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
