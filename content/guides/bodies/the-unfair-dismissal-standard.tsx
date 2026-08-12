// Guide body: The Unfair Dismissal Standard
// Authored via the english-guide-writer skill workflow (guide-production Phase 2, #18).
// Statute references verified against law.go.kr / casenote.kr / easylaw.go.kr / moel.go.kr — see REVIEW-GUIDES.md.

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

export default function TheUnfairDismissalStandard() {
  return (
    <>
      <Image
        src="/assets/guides/unfair-dismissal-hero.jpg"
        alt="An employee lanyard and blank badge left on a cleared desk — dismissal in Korea requires just cause and written notice"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            Korea is <strong>not an at-will country</strong>: a dismissal needs{' '}
            <strong>justifiable cause</strong>, and in a dispute the employer must prove it —
            Labor Standards Act art. 23.
          </li>
          <li>
            A dismissal must be delivered <strong>in writing, stating the grounds and the
            date</strong> — without that, it has no effect, however good the reason (art. 27).
          </li>
          <li>
            The remedy is a case at the <strong>Labor Relations Commission</strong>, and the
            deadline is hard: <strong>3 months from the dismissal</strong> (art. 28).
          </li>
          <li>
            If you win, the default is <strong>reinstatement plus back pay</strong> — but you can
            ask for <strong>money instead of your job back</strong> (art. 30).
          </li>
          <li>
            The big exception: workplaces with <strong>fewer than 5 employees</strong> are outside
            the just-cause rule and the Commission remedy — though 30 days&rsquo; notice pay and
            severance still apply.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        You were called in, told it isn&rsquo;t working out, and asked not to come back — maybe
        with a month&rsquo;s pay offered as a goodbye, maybe with a resignation letter already
        printed for you to sign. If your instinct says an employer can simply do that, recalibrate:
        that instinct comes from at-will systems, and Korea is not one of them.
      </p>
      <p className={P}>
        <Term ko="부당해고">Budang haego</Term> — unfair dismissal — is any dismissal without
        justifiable cause or without the required procedure. The rules sit in the{' '}
        <strong>Labor Standards Act</strong> <span lang="ko">(근로기준법)</span>, and they apply to
        foreign employees the same as to Koreans — the Act has no nationality requirement, and
        foreign workers use its remedy system routinely.
      </p>
      <p className={P}>
        What matters most is speed and paper: the remedy deadline is three months, and the case is
        decided on documents. This guide covers what makes a dismissal unlawful, the two notice
        rules people confuse, whether what happened to you legally counts as a dismissal at all,
        and how the remedy actually runs.
      </p>

      <GuideToc
        items={[
          { href: '#the-standard', label: '1. The standard: justifiable cause' },
          { href: '#notice-rules', label: '2. The two notice rules (people confuse them)' },
          { href: '#was-it-a-dismissal', label: '3. Was it legally a dismissal at all?' },
          { href: '#labor-relations-commission', label: '4. The remedy: the Labor Relations Commission' },
          { href: '#what-you-can-win', label: '5. What you can win' },
          { href: '#under-five', label: '6. The under-5-employees exception' },
          { href: '#common-mistakes', label: '7. Common mistakes' },
        ]}
      />

      <h2 id="the-standard" className={H2}>
        1. The standard: justifiable cause
      </h2>
      <p className={P}>
        An employer may not dismiss, lay off, suspend, transfer, cut the wages of, or otherwise
        punish an employee <strong>without justifiable cause</strong>{' '}
        <Term ko="정당한 이유">(jeongdanghan iyu)</Term> — Labor Standards Act art. 23(1). Note the
        breadth: the same rule covers demotions, forced unpaid leave, and punitive transfers, not
        just firings. The Commission remedy in section 4 covers all of them.
      </p>
      <p className={P}>
        The statute does not define justifiable cause, but in practice the bar is high: conduct or
        circumstances serious enough that the employment relationship cannot reasonably continue —
        proven misconduct, sustained and documented underperformance after real chances to
        improve, genuine loss of the qualification the job requires. One bad review, a personality
        clash with a manager, or &ldquo;the vibe changed&rdquo; is not a justifiable cause. And in
        the remedy proceeding, <strong>the employer carries the burden of proving the cause</strong> —
        you do not have to prove the negative.
      </p>
      <p className={P}>
        Business-reason dismissals are their own regime: a layoff for managerial necessity has
        four statutory requirements — urgent business necessity, real efforts to avoid the
        dismissal, rational and fair selection criteria, and prior consultation with worker
        representatives (art. 24). &ldquo;Restructuring&rdquo; said out loud does not satisfy any
        of them; an employer claiming business necessity has signed up to prove all four.
      </p>

      <h2 id="notice-rules" className={H2}>
        2. The two notice rules (people confuse them)
      </h2>
      <p className={P}>
        Korean law imposes two separate notice duties on a dismissing employer, and mixing them up
        is the single most common confusion in these cases.
      </p>
      <div className="my-6 overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full min-w-[560px] border-collapse">
          <thead className="bg-slate-50 border-b border-gray-200">
            <tr>
              <th className={TH}>Rule</th>
              <th className={TH}>What it requires</th>
              <th className={TH}>If breached</th>
              <th className={TH}>Basis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className={TD}>
                <strong>Written notice</strong>
              </td>
              <td className={TD}>
                The dismissal must be notified <strong>in writing, stating the grounds and the
                effective date</strong>.
              </td>
              <td className={TD}>
                The dismissal <strong>has no effect</strong> — even if the underlying cause was
                perfectly good.
              </td>
              <td className={TD}>Labor Standards Act art. 27</td>
            </tr>
            <tr>
              <td className={TD}>
                <strong>30 days&rsquo; advance notice</strong>
              </td>
              <td className={TD}>
                30 days&rsquo; warning, or <strong>30 days of ordinary wages</strong> in lieu —{' '}
                <Term ko="해고예고수당">haego yego sudang</Term>, notice pay.
              </td>
              <td className={TD}>
                The notice pay is owed as money — but this breach alone does not void the
                dismissal.
              </td>
              <td className={TD}>art. 26</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={P}>
        The traffic runs both ways. Paying you a month&rsquo;s wages does not make an unjust
        dismissal lawful — notice pay buys time, not legitimacy. And a verbal firing, a text
        message that just says &ldquo;don&rsquo;t come in anymore,&rdquo; or a notice that names no
        grounds fails art. 27 regardless of what you were paid. The advance-notice rule has narrow
        exceptions — under 3 months of service, a disaster that makes the business impossible, or
        intentional, serious damage by the employee as defined in ministry rules — but the
        written-notice rule for the dismissal itself has none.
      </p>
      <p className={P}>
        Keep the writing you were given; it fixes both the grounds the employer is committed to
        and the date every deadline runs from. An employer who names no grounds in writing cannot
        invent better ones later without explaining why they never appeared in the notice.
      </p>

      <h2 id="was-it-a-dismissal" className={H2}>
        3. Was it legally a dismissal at all?
      </h2>
      <p className={P}>
        The protections above attach to a <em>dismissal</em> — a termination the employer imposed.
        Employers know this, which is why so much effort goes into making a dismissal look like
        something else.
      </p>
      <p className={P}>
        <strong>&ldquo;Recommended resignation.&rdquo;</strong>{' '}
        <Term ko="권고사직">Gwongo sajik</Term> is the practice of pressuring you to resign
        &ldquo;voluntarily,&rdquo; often with a printed resignation letter and a small payment
        attached. If you sign, the paper says you quit — and a person who quit was not dismissed.
        Genuine coercion can be challenged, but those cases are hard and evidence-heavy. The
        cheap protection is simply not signing in the room.
      </p>
      <p className={P}>
        <strong>Fixed-term contracts.</strong> When a fixed-term contract genuinely expires and is
        not renewed, that is normally an expiry, not a dismissal. Two important limits: being cut
        loose <em>before</em> the term ends is a dismissal and needs cause like any other; and
        under the Fixed-term Workers Act <span lang="ko">(기간제법)</span>, art. 4, an employee kept
        on fixed-term contracts <strong>beyond 2 years</strong> is treated as having an open-ended
        contract — after which &ldquo;the contract ended&rdquo; stops working as an exit. Where
        renewals were repeated and routine, non-renewal can also become contestable on its facts.
      </p>
      <p className={P}>
        <strong>Probation.</strong> A probationary period widens the employer&rsquo;s room to
        judge suitability — it does not switch the job to at-will. Ending a probationer still
        requires a reasonable ground, communicated properly; treat a probation-period firing as a
        case worth assessing, not an automatic loss.
      </p>
      <Callout variant="warning" title="Do not sign a resignation letter on the spot">
        Nothing about a resignation letter has to be decided in the meeting where it is handed to
        you. Once signed, it converts your dismissal case into a much harder coercion case.
        Take the paper home, get the offer in writing, and have it read before you sign — the
        same discipline as any contract.
      </Callout>

      <h2 id="labor-relations-commission" className={H2}>
        4. The remedy: the Labor Relations Commission
      </h2>
      <p className={P}>
        Unfair-dismissal cases do not start in court. They start at the{' '}
        <Term ko="노동위원회">Labor Relations Commission</Term> — an administrative tribunal that
        hears the case, orders remedies, and moves far faster than litigation. You apply to the
        regional commission covering the workplace (for Pyeongtaek, the Gyeonggi commission),
        online or on paper, <strong>within 3 months of the dismissal</strong> (art. 28). There is
        no filing fee, and workers file without representatives every day — though whether that is
        wise in your case is a separate question.
      </p>
      <GuideFlow
        steps={[
          {
            title: 'File the remedy application',
            body: 'Within 3 months of the dismissal taking effect, to the regional Labor Relations Commission. The application itself is short; the case is built afterward through written submissions.',
          },
          {
            title: 'Investigation and written exchange',
            body: 'Both sides submit position papers and evidence. The employer must justify the cause and the procedure; your job is the timeline and the paper trail.',
          },
          {
            title: 'The hearing (심문회의)',
            body: 'A panel questions both sides in person, usually within about 60 days of filing. Settlement (화해) is actively encouraged at every stage — a settled case ends with an agreement that has enforceable weight.',
          },
          {
            title: 'Ruling — then short appeal windows',
            body: 'The commission orders a remedy or rejects the application. Either side can seek review by the National Labor Relations Commission within 10 days of receiving the ruling, then administrative litigation within 15 days of the review decision.',
          },
        ]}
      />
      <p className={P}>
        Proceedings run in Korean — submissions, hearing, ruling — so an English-speaking
        representative or a trusted interpreter is a practical necessity rather than a luxury. If
        your average monthly wage is under ₩3 million, you can apply to have a{' '}
        <strong>publicly funded representative</strong> (a lawyer or certified labor attorney)
        appointed free of charge for the commission case. Note that this is a different track from
        the labor office wage complaint — if your problem is money you already earned rather than
        the firing itself, start with{' '}
        <Link href="/guides/labor-employment/unpaid-wages-labor-office-vs-lawsuit" className={LINK}>
          Unpaid Wages: Labor Office vs. Lawsuit
        </Link>
        .
      </p>

      <h2 id="what-you-can-win" className={H2}>
        5. What you can win
      </h2>
      <p className={P}>
        The default remedy is <strong>reinstatement plus back pay</strong>: you return to your
        original job, and the employer pays the wages you would have earned during the dismissal
        period. For many foreign employees, though, walking back into that office is the last
        thing they want — and the law accounts for it. If you do not want reinstatement, the
        commission can instead order the employer to pay you{' '}
        <strong>at least the wages for the dismissal period</strong>, with the possibility of
        more on top (art. 30(3)). Ask for the monetary order early — the request must be in
        before you are notified of the hearing date.
      </p>
      <p className={P}>
        Remedy orders have teeth. An employer who ignores one faces an{' '}
        <Term ko="이행강제금">enforcement levy</Term> of up to <strong>₩30 million</strong>,
        imposable repeatedly until the order is obeyed (art. 33). Between the levy, the back-pay
        meter, and the settlement pressure the process itself creates, most cases that survive the
        hearing stage end in payment rather than defiance.
      </p>

      <h2 id="under-five" className={H2}>
        6. The under-5-employees exception
      </h2>
      <p className={P}>
        Here is the exception that decides many cases before they start: workplaces that
        ordinarily employ <strong>fewer than 5 employees</strong> are outside much of the Labor
        Standards Act (art. 11 and its enforcement decree) — including the just-cause rule, the
        written-notice rule, and the Commission remedy. At a 4-person hagwon or a small
        restaurant, a dismissal without cause is, as a rule, not challengeable at the Labor
        Relations Commission.
      </p>
      <p className={P}>
        What survives at any size: <strong>30 days&rsquo; notice or notice pay</strong> (art. 26
        applies regardless of headcount), statutory{' '}
        <Link href="/guides/labor-employment/severance-pay-who-qualifies" className={LINK}>
          severance
        </Link>{' '}
        after a year, and all unpaid-wage protections. A contract-based civil claim for a
        termination that breached your written contract can also remain open — a narrower and
        slower road, worth a professional look rather than an assumption either way.
      </p>
      <p className={P}>
        The headcount itself is a common battleground: it is an average of workers ordinarily
        employed — part-timers included — not whoever happened to be in the room, and payroll
        records rather than the owner&rsquo;s say-so decide it. If the number hovers near five,
        do not concede the point without the records.
      </p>

      <h2 id="common-mistakes" className={H2}>
        7. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Negotiating past the deadline.</strong> The 3 months run while your employer
          says &ldquo;let&rsquo;s work something out.&rdquo; File first — the case can settle just
          as easily after filing, and the deadline stops mattering.
        </li>
        <li>
          <strong>Signing the resignation letter</strong> — or any paper handed across the desk in
          the dismissal meeting — before it has been read by someone on your side.
        </li>
        <li>
          <strong>Treating notice pay as the whole remedy.</strong> A month&rsquo;s wages settles
          art. 26 and nothing else; whether the dismissal itself was lawful is a separate and
          usually bigger question.
        </li>
        <li>
          <strong>Leaving without the records.</strong> The dismissal notice, your contract,
          payslips, the messages around the firing — collect them while your accounts and badge
          still work. The case is built from exactly these.
        </li>
        <li>
          <strong>Ignoring the visa clock.</strong> If your stay in Korea is tied to your
          employment, a dismissal can affect your status, and the timing of your response should
          take that into account from day one — get both the labor position and the immigration
          position checked early, together.
        </li>
      </ul>

      <figure className="my-6">
        <Image
          src="/assets/guides/unfair-dismissal-records.jpg"
          alt="An employment contract folder, payslips and a phone gathered on a desk — an unfair dismissal case is built from records"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          The commission decides on paper: the written notice, the contract, payslips, and the
          messages around the firing. Gather them before your accounts are cut off.
        </Caption>
      </figure>

      <GuideDeadlines
        items={[
          {
            when: '3 months',
            what: 'From the dismissal taking effect — the deadline to file the remedy application with the Labor Relations Commission (Labor Standards Act art. 28). Missed, the case is dismissed unheard.',
          },
          {
            when: '10 days',
            what: 'From receiving the regional ruling — the window to seek review by the National Labor Relations Commission.',
          },
          {
            when: '15 days',
            what: 'From receiving the review decision — the window to file administrative litigation before the ruling becomes final.',
          },
          {
            when: '3 years',
            what: 'Money claims that ride alongside — notice pay, unpaid wages, severance — expire on the ordinary 3-year wage clock.',
          },
        ]}
      />
      <p className={P}>
        Start by fixing one fact: the exact date the dismissal took effect, in writing. Every
        clock above runs from it.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'I was fired verbally, on the spot. Am I actually dismissed?',
            a: (
              <p>
                Legally, a dismissal not notified in writing with grounds and a date has no
                effect (art. 27) — which is leverage, not a reason to relax. Put your position in
                writing promptly: that you received no written notice and remain willing to work.
                Then treat the 3-month clock as running from the day you were turned away, and get
                the situation assessed before it hardens.
              </p>
            ),
          },
          {
            q: 'I already signed a resignation letter under pressure. Is it over?',
            a: (
              <p>
                Not automatically, but the road is harder: you now have to show the resignation
                was not genuinely voluntary, against your own signature. What helps is
                contemporaneous evidence — messages showing the ultimatum, witnesses, the meeting
                itself. Move quickly; these cases age badly, and the 3-month window still applies.
              </p>
            ),
          },
          {
            q: "My contract simply wasn't renewed. Do I have a case?",
            a: (
              <p>
                A genuine expiry is normally not a dismissal. But check three things: whether you
                had passed 2 years on fixed-term contracts (after which the law treats the job as
                open-ended), whether the non-renewal came before the term actually ended, and
                whether renewals had been so routine that ending them this time deserves scrutiny.
                Any of the three can turn &ldquo;expiry&rdquo; back into a dismissal question.
              </p>
            ),
          },
          {
            q: "The proceedings are in Korean. Can I realistically do this as a foreigner?",
            a: (
              <p>
                Yes — foreign employees file and win these cases; the substantive rules are the
                same regardless of nationality. Practically, plan for the language: submissions
                and the hearing run in Korean, so line up a representative or interpreter early.
                If your average monthly wage is under ₩3 million, ask the commission about the
                free publicly funded representative when you file.
              </p>
            ),
          },
          {
            q: 'My visa depends on this job. Does filing a case protect my status?',
            a: (
              <p>
                No — the labor case and your immigration status run on separate tracks, and a
                remedy order does not by itself extend a stay. Losing employment can affect a
                work-based status, so check your immigration position — deadlines, reporting
                duties, options for changing status — at the same time as you assert your labor
                rights, not after the labor case ends.
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
