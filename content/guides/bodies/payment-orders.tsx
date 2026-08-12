// Guide body: Payment Orders (지급명령)
// Authored via the english-guide-writer skill workflow (guide-production Phase 3, #21).
// Statute references verified against law.go.kr / casenote.kr / easylaw.go.kr — see REVIEW-GUIDES.md.

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
const TH = 'text-left text-xs font-bold uppercase tracking-wider text-gray-500 px-4 py-3'
const TD = 'px-4 py-3 text-sm text-gray-700 leading-relaxed align-top'
const LINK = 'text-navy-900 underline decoration-gold-400 underline-offset-2 hover:text-gold-600'

export default function PaymentOrders() {
  return (
    <>
      <Image
        src="/assets/guides/payment-order-hero.jpg"
        alt="A bright, empty corridor in a Korean public building — the payment order is Korea's fast documents-only track for money claims"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            A <strong>payment order</strong> <span lang="ko">(지급명령)</span> is a court order to
            pay, issued <strong>on the creditor&rsquo;s papers alone</strong> — no hearing, no
            testimony, the debtor is not asked first.
          </li>
          <li>
            It is the <strong>cheap, fast track</strong> for money claims: the court stamp fee is{' '}
            <strong>one-tenth of a lawsuit&rsquo;s</strong>, and uncontested cases finish in
            weeks, not months.
          </li>
          <li>
            Its one weakness: a <strong>2-week objection kills it</strong> — the debtor needs no
            reason, and the case then converts into an ordinary lawsuit.
          </li>
          <li>
            Unobjected, it gains <strong>the force of a final judgment</strong>: enforceable
            against accounts and property, with a limitation period extended to{' '}
            <strong>10 years</strong>.
          </li>
          <li>
            It only works where the debtor <strong>can be served in Korea</strong> without
            public-notice service — no address, no payment order.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        Someone owes you money — a loan that was &ldquo;definitely next month&rdquo; for half a
        year, an invoice a business stopped answering, wages your employer admits but never
        sends. You know a lawsuit exists, but the time and cost feel out of proportion to a debt
        the other side does not even seriously dispute. Korea&rsquo;s civil system has a track
        built precisely for that gap.
      </p>
      <p className={P}>
        The <Term ko="지급명령">payment order (jigeup myeongryeong)</Term> is the product of the{' '}
        <Term ko="독촉절차">demand procedure</Term> in the Civil Procedure Act{' '}
        <span lang="ko">(민사소송법 제462조 이하)</span>: a court order to pay money, issued on
        your application and documents alone. This guide covers when it is the right tool, how
        the procedure runs on both sides of the envelope, what a finalized order is worth, and
        the situations where skipping straight to a lawsuit is smarter.
      </p>

      <GuideToc
        items={[
          { href: '#what-it-is', label: '1. What a payment order is' },
          { href: '#right-tool', label: '2. When it is the right tool' },
          { href: '#how-it-runs', label: '3. How the procedure runs' },
          { href: '#if-you-received-one', label: '4. If you received one' },
          { href: '#after-final', label: '5. What a final order is worth' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="what-it-is" className={H2}>
        1. What a payment order is
      </h2>
      <p className={P}>
        The court examines only your application: the parties, the amount, and the basis of the
        claim. The debtor is not summoned and not heard; there is no hearing at all. If the
        papers are in order, the order issues and is served on the debtor, who then has a choice
        — pay, do nothing (and let the order become final), or file a short objection that sends
        everyone into an ordinary lawsuit.
      </p>
      <p className={P}>
        That design explains both the speed and the limits. Because no one is heard, the
        procedure is reserved for claims for <strong>money or other fungible things in a fixed
        amount</strong> (art. 462) — the kinds of claims where the paper either supports the
        number or it does not. And because the debtor&rsquo;s only protection is the objection,
        the order must actually reach them: it is available only where the debtor can be served
        in Korea by ordinary means, <strong>not by public-notice service</strong>. A debtor with
        no known address takes this tool off the table.
      </p>

      <h2 id="right-tool" className={H2}>
        2. When it is the right tool
      </h2>
      <div className="my-6 overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full min-w-[560px] border-collapse">
          <thead className="bg-slate-50 border-b border-gray-200">
            <tr>
              <th className={TH}>Payment order fits</th>
              <th className={TH}>Go straight to a lawsuit (or small claims)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className={TD}>
                The debt is documented and the debtor does not seriously dispute owing it —
                they just do not pay.
              </td>
              <td className={TD}>
                The debtor disputes the debt or the amount. An objection is near-certain, and the
                order stage becomes a detour that costs weeks.
              </td>
            </tr>
            <tr>
              <td className={TD}>The debtor&rsquo;s Korean address is known and serviceable.</td>
              <td className={TD}>
                The debtor&rsquo;s whereabouts are unknown or they are abroad — a lawsuit can use
                public-notice service; a payment order cannot.
              </td>
            </tr>
            <tr>
              <td className={TD}>
                You want minimal cost: one-tenth the court stamp fee, no hearings to attend.
              </td>
              <td className={TD}>
                You need interim protection first — where asset flight is a risk, securing assets
                before alerting the debtor may matter more than speed.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={P}>
        A note on the overlap: for claims up to ₩30 million, the small-claims track offers a
        similar silence-becomes-judgment mechanism (the performance recommendation covered in{' '}
        <Link href="/guides/civil-litigation/youve-been-served-first-30-days" className={LINK}>
          You&rsquo;ve Been Served
        </Link>
        ), with a judge available if it is contested. For larger undisputed debts, the payment
        order has no amount ceiling — it is often the opening move even in serious commercial
        collection.
      </p>

      <h2 id="how-it-runs" className={H2}>
        3. How the procedure runs
      </h2>
      <GuideFlow
        steps={[
          {
            title: 'Apply — on paper or online',
            body: "To the court with jurisdiction over the debtor. The electronic demand-procedure system handles the whole application online, and the stamp fee is one-tenth of a lawsuit's. State the amount, the basis, and attach the documents.",
          },
          {
            title: 'The court reviews the papers only',
            body: 'No hearing, and the debtor is not asked. If the claim type or papers are defective, the application is rejected rather than argued over.',
          },
          {
            title: 'The order is served on the debtor',
            body: 'If service fails, the court orders you to correct the address — or you can convert the case into an ordinary lawsuit rather than chase the envelope (art. 466).',
          },
          {
            title: 'Two weeks decide everything',
            body: 'No objection within 2 weeks of service: the order becomes final with the force of a judgment (arts. 470, 474). An objection — no reasons required — voids the order and the case proceeds as an ordinary lawsuit (art. 472).',
          },
        ]}
      />
      <p className={P}>
        Budget for the objection scenario before you file: the demand stage costs little, but if
        the debtor contests, you top up the court fees to lawsuit level and the case starts in
        earnest — with you as plaintiff, as if the complaint had been filed at the outset. For a
        debtor who was always going to fight, the order added weeks; for the far more common
        debtor who owes and knows it, silence or settlement ends the matter cheaply.
      </p>

      <h2 id="if-you-received-one" className={H2}>
        4. If you received one
      </h2>
      <p className={P}>
        Look at it from the envelope&rsquo;s other side. A payment order against you means a
        court has certified nothing about the truth of the claim — it has checked the
        application&rsquo;s form, not its facts, and your side has not been heard at all. Your
        hearing rights live entirely in the <strong>2-week objection</strong>: a short written
        filing, with no grounds required, that voids the order and moves the dispute into an
        ordinary lawsuit where both sides are heard.
      </p>
      <p className={P}>
        So the decision is clean. If the debt is real and the number is right, paying (or
        negotiating now, in writing) beats letting a final order attach enforcement power to it.
        If you dispute the debt or the amount — object within the 2 weeks, then prepare for the
        case to arrive as a lawsuit, with the timelines from{' '}
        <Link href="/guides/civil-litigation/youve-been-served-first-30-days" className={LINK}>
          You&rsquo;ve Been Served: First 30 Days
        </Link>
        . What you should not do is nothing: an unobjected order does not care that you
        &ldquo;never agreed to anything.&rdquo;
      </p>
      <Callout variant="warning" title="The 2 weeks are the whole defense">
        There is no hearing to wait for and no second notice coming. If you dispute a payment
        order, the objection must be filed within 2 weeks of service — after that, the order has
        the force of a final judgment, and undoing it is a far harder, narrower fight.
      </Callout>

      <h2 id="after-final" className={H2}>
        5. What a final order is worth
      </h2>
      <p className={P}>
        A payment order that survives its 2 weeks becomes an enforcement-grade title: it carries
        the same effect as a final judgment (art. 474) and supports compulsory execution against
        the debtor&rsquo;s bank accounts, wages, deposits, and property. The enforcement mechanics
        — and their costs and sequence — are their own subject, planned for this cluster&rsquo;s
        later guides.
      </p>
      <p className={P}>
        Two properties make the finalized order more valuable than people expect. First,{' '}
        <strong>the clock resets long</strong>: a claim confirmed by a finalized payment order
        runs on a 10-year limitation period, even if the underlying debt had a short one (Civil
        Act art. 165) — wages&rsquo; 3 years, for instance, becomes 10 once confirmed. Second,
        it is <strong>reusable leverage</strong>: a debtor with nothing to seize today may have
        salary or property within those 10 years, and the title waits.
      </p>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Using it on a debtor who disputes the debt.</strong> The objection needs no
          merit, so a contested payment order is a guaranteed detour. Honest triage first: will
          this person fight?
        </li>
        <li>
          <strong>Filing with a doubtful address.</strong> No valid service, no order — and the
          weeks spent on address corrections are weeks the demand letter&rsquo;s 6-month window
          (see{' '}
          <Link href="/guides/civil-litigation/certified-content-mail" className={LINK}>
            Certified Content Mail
          </Link>
          ) keeps burning.
        </li>
        <li>
          <strong>Debtor side: ignoring it as junk mail.</strong> It looks bureaucratic and
          arrives with no drama, which is exactly how it becomes a final judgment against people
          who &ldquo;were going to deal with it later.&rdquo;
        </li>
        <li>
          <strong>Inflating the claim because no one checks.</strong> The number is only
          unexamined until an objection — then every excess won becomes something to prove, and
          costs track the outcome. Claim what the documents support.
        </li>
        <li>
          <strong>Winning the order and stopping.</strong> A final order collects nothing by
          itself. If payment does not follow, enforcement is the next move — plan it while the
          debtor&rsquo;s accounts are where you last saw them.
        </li>
      </ul>

      <figure className="my-6">
        <Image
          src="/assets/guides/payment-order-response.jpg"
          alt="A single blank sheet beside an opened envelope on a desk — the objection to a Korean payment order is a short filing with a strict 2-week window"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          The objection itself is short and needs no stated grounds — the difficulty is not the
          form but the window: 2 weeks from service, and then the order is a judgment.
        </Caption>
      </figure>

      <GuideDeadlines
        items={[
          {
            when: '2 weeks',
            what: 'From service of the payment order — the debtor’s objection window (art. 470). Silence makes the order final with the force of a judgment (art. 474).',
          },
          {
            when: 'Address-correction deadline',
            what: 'If service fails, the court sets a short deadline to fix the debtor’s address — or convert to an ordinary lawsuit (art. 466). Miss it and the application lapses.',
          },
          {
            when: '10 years',
            what: 'The limitation period of a claim confirmed by a finalized payment order (Civil Act art. 165) — the window for enforcement against present and future assets.',
          },
        ]}
      />
      <p className={P}>
        Whichever side of the order you are on, the operative question is the same: what is the
        date of service, and what has to be filed within two weeks of it?
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'What does a payment order cost to file?',
            a: (
              <p>
                Court fees at one-tenth of a lawsuit&rsquo;s stamp fee, plus service costs — for
                most debts, a filing that costs less than a decent dinner. That economics is the
                point: it makes formal collection rational even for mid-sized debts where a
                full lawsuit&rsquo;s costs would give you pause. If the debtor objects, you pay
                the difference up to lawsuit-level fees to continue.
              </p>
            ),
          },
          {
            q: 'The debtor is a business that closed, or a person who left Korea. Can I still use this?',
            a: (
              <p>
                Usually not well. The order must be served in Korea by ordinary means —
                public-notice service is excluded — so a vanished debtor or one abroad typically
                pushes you to an ordinary lawsuit, where the court&rsquo;s full service toolbox
                applies. This is a threshold question worth settling before you file, not after
                the first returned envelope.
              </p>
            ),
          },
          {
            q: 'I received a payment order for a debt I partly owe. Can I object to just part of it?',
            a: (
              <p>
                The objection voids the order within the scope you contest, and the disputed
                part proceeds as a lawsuit. If the real dispute is only about the amount, say so
                early — partial positions taken clearly at the start read far better later than
                blanket denials of a debt you half-acknowledge. This is a good moment to have
                the numbers checked before filing anything.
              </p>
            ),
          },
          {
            q: "Can't the debtor just object with no reason to buy time?",
            a: (
              <p>
                Yes — the objection requires no grounds, and some debtors use it purely for
                delay. The comfort is that the delay leads somewhere: the case becomes an
                ordinary lawsuit where the debtor must actually contest the claim on the record,
                and litigation costs generally follow the result. A groundless objection buys
                weeks, not an escape.
              </p>
            ),
          },
          {
            q: 'Does a payment order work for wages my employer never paid?',
            a: (
              <p>
                It can — admitted-but-unpaid wages are a natural fit, and a finalized order
                stretches the wage claim&rsquo;s 3-year limitation to 10. But for employees, the
                labor office complaint is usually the stronger opening: it is free, applies
                criminal pressure, and unlocks the government wage fund. The full comparison is
                in{' '}
                <Link
                  href="/guides/labor-employment/unpaid-wages-labor-office-vs-lawsuit"
                  className="text-navy-900 underline decoration-gold-400 underline-offset-2 hover:text-gold-600"
                >
                  Unpaid Wages: Labor Office vs. Lawsuit
                </Link>
                .
              </p>
            ),
          },
        ]}
      />

      <p className="text-sm text-gray-500 leading-relaxed mt-10">
        Written by Attorney Chulho Choi (SOL &amp; LUNA / Law Firm Myeong, KBA-registered specialist
        in Civil and Criminal Law). Reviewed as of August 2026. Updated when laws change.
      </p>
    </>
  )
}
