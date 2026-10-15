// Guide body: Unpaid Wages After Leaving Korea
// Authored via the english-guide-writer skill workflow (#34, from-abroad series).
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
const TH = 'border border-gray-200 bg-slate-50 px-3 py-2 text-left text-sm font-bold text-navy-900'
const TD = 'border border-gray-200 px-3 py-2 text-sm text-gray-700 leading-relaxed align-top'
const LINK = 'text-navy-900 underline decoration-gold-400 underline-offset-2 hover:text-gold-600'

export default function UnpaidWagesAfterLeavingKorea() {
  return (
    <>
      <Image
        src="/assets/guides/wages-abroad-hero.jpg"
        alt="A cleared office desk with a blank lanyard badge and a cardboard box in morning light — a worker who left Korea still holds a 3-year claim for unpaid wages and severance"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            Wages and severance earned in Korea remain owed after you leave. The claim lasts{' '}
            <strong>3 years</strong> (Labor Standards Act art. 49); nothing about departure cancels
            it.
          </li>
          <li>
            Everything was due <strong>within 14 days</strong> of your last day (art. 36). Since
            then, departed workers&rsquo; wages and severance carry <strong>20% annual
            interest</strong> (art. 37), and non-payment is a criminal offence (art. 109).
          </li>
          <li>
            The main tool is still the <strong>labor office complaint</strong> — but the
            ministry&rsquo;s online portal is built around a Korean identity login, so from abroad
            the complaint usually goes through a <strong>representative in Korea</strong>.
          </li>
          <li>
            The <strong>wage fund</strong> pays up to <strong>₩10 million</strong> without a
            lawsuit — if the complaint is filed within <strong>1 year</strong> of leaving the job.
            That clock, not the 3-year one, is the deadline that matters.
          </li>
          <li>
            Employment-permit (E-9) workers: statutory severance is largely routed through{' '}
            <strong>departure-guarantee insurance</strong>, payable within 14 days of departure —
            a separate claim with its own insurer.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        The last paycheck never arrived. Or the severance did not. Or the final month was paid
        short, with a promise to &ldquo;sort it out&rdquo; that stopped being answered once you
        had boarded the plane. For a teacher, an engineer, a factory worker, or a restaurant
        employee who has already gone home, the question is whether a Korean employer can simply
        wait you out.
      </p>
      <p className={P}>
        It cannot, in law. The Labor Standards Act <span lang="ko">(근로기준법)</span> made
        your pay a debt backed by criminal penalties, and a government inspectorate and a public
        wage fund exist to enforce it. The general guide,{' '}
        <Link href="/guides/labor-employment/unpaid-wages-labor-office-vs-lawsuit" className={LINK}>
          Unpaid Wages: Labor Office vs. Lawsuit
        </Link>
        , covers the machinery for a worker still in Korea. This one is about running that
        machinery from another country — what still works, what needs a representative, and the
        one deadline that is much shorter than it looks.
      </p>
      <p className={P}>
        The short version: the right is intact; the practical window is the first year.
      </p>

      <GuideToc
        items={[
          { href: '#what-you-are-owed', label: '1. What you are owed — and what the delay costs the employer' },
          { href: '#complaint-from-abroad', label: '2. The labor office complaint, from abroad' },
          { href: '#wage-fund', label: '3. The wage fund and its one-year clock' },
          { href: '#e9-insurance', label: '4. Employment-permit workers: departure-guarantee insurance' },
          { href: '#worth-it', label: '5. Is a lawyer worth it? It depends on the amount' },
          { href: '#from-abroad', label: '6. What can be done from abroad — and what needs you in Korea' },
          { href: '#common-mistakes', label: '7. Common mistakes' },
        ]}
      />

      <h2 id="what-you-are-owed" className={H2}>
        1. What you are owed — and what the delay costs the employer
      </h2>
      <p className={P}>
        When employment ends, every amount owed — final wages, statutory severance for a year or
        more of service, pay for unused annual leave — must be settled within <strong>14
        days</strong>, extendable only by genuine agreement (art. 36). From the day after that
        window, wages and severance owed to a departed worker accrue interest at{' '}
        <strong>20% per year</strong> (art. 37). Non-payment is punishable by up to 3 years&rsquo;
        imprisonment or a fine of up to ₩30 million (art. 109) — a provision that matters less for
        its punishment than for its leverage, because the offence cannot be prosecuted against
        the worker&rsquo;s wish, which makes a signed settlement the thing an employer wants.
      </p>
      <p className={P}>
        None of this depends on where you now live or on the status you held while working.
        Wages for work actually done are treated as claimable in practice regardless of how the
        visa situation ended, and the 3-year limitation (art. 49) runs from each payday missed,
        not from your departure. The evidence is what travels badly: contract, payslips, shift
        records, bank statements, and the messages in which pay was discussed — export them now
        if you still can.
      </p>

      <h2 id="complaint-from-abroad" className={H2}>
        2. The labor office complaint, from abroad
      </h2>
      <p className={P}>
        The standard remedy is a <Term ko="진정">complaint (jinjeong)</Term> to the regional
        labor office: an inspector summons the employer, establishes the arrears, and issues an
        official confirmation of the amount — the document that unlocks the wage fund and free
        legal aid. It is free and, for a worker in Korea, designed to be filed personally.
      </p>
      <p className={P}>
        From abroad the practical obstacle is identity. The ministry&rsquo;s online portal is
        built around a Korean identity login that a departed foreigner often no longer holds,
        and in-person filing is off the table. The workable route is a{' '}
        <strong>representative in Korea</strong> — a lawyer, or a licensed labor attorney{' '}
        <Term ko="공인노무사">(gongin nomusa)</Term> — acting under a power of attorney signed
        and legalised where you live. The inspector will still want your account of the facts;
        in practice that is taken in writing or by remote means through the representative,
        though an inspector can ask for more, and the file moves faster when your statement is
        ready on day one.
      </p>
      <GuideFlow
        steps={[
          {
            title: 'Power of attorney and the evidence file',
            body: 'Notarised and apostilled where you live, or certified at a Korean consulate. Alongside it: contract, payslips, bank records, schedules, messages — translated where needed.',
          },
          {
            title: 'Complaint filed by your representative',
            body: 'With the arrears calculated month by month. The office summons the employer; many pay or agree instalments at this stage.',
          },
          {
            title: 'Confirmation of arrears',
            body: 'If the employer does not pay, the office issues the official confirmation of unpaid wages and refers the employer for prosecution — the document that opens section 3.',
          },
          {
            title: 'Settlement, or not',
            body: 'Because the offence cannot proceed against your wish, employers often offer payment in exchange for a withdrawal. Sign when the money has arrived, not when it is promised.',
          },
        ]}
      />

      <h2 id="wage-fund" className={H2}>
        3. The wage fund and its one-year clock
      </h2>
      <p className={P}>
        Korea&rsquo;s wage-guarantee system pays the worker first and collects from the employer
        afterward. The version most departed workers use, the{' '}
        <Term ko="간이대지급금">simplified advance payment</Term>, does not require the employer
        to be bankrupt: on the strength of the labor office confirmation (or a court judgment),
        the fund pays up to <strong>₩7 million</strong> of the last 3 months&rsquo; wages and up
        to <strong>₩7 million</strong> of the last 3 years&rsquo; severance — <strong>₩10
        million combined</strong>. The employer must have been operating for at least 6 months
        by your last day.
      </p>
      <p className={P}>
        The condition that bites from abroad is timing. On the confirmation route, the labor
        office complaint must be filed <strong>within 1 year of the day after you left the
        job</strong>; on the judgment route, suit must be filed <strong>within 2 years</strong>.
        A worker who waits for the employer&rsquo;s promises, then for a convenient trip, then
        for a lawyer, can arrive at a valid 3-year claim that the fund will no longer pay. If
        you remember one number from this guide, make it the year.
      </p>
      <figure className="my-6">
        <Image
          src="/assets/guides/wages-abroad-desk.jpg"
          alt="A folder of blank pay records beside a calculator with a dark display on a desk abroad — the month-by-month arrears calculation that a Korean wage complaint and the wage fund run on"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          The fund pays against a confirmed figure — build the month-by-month calculation from
          your own records before the complaint goes in, so the inspector confirms your number,
          not the employer&rsquo;s.
        </Caption>
      </figure>
      <p className={P}>
        Where the arrears exceed the fund&rsquo;s ceiling, the balance is pursued against the
        employer — by the civil claim in section 5, or by the fund itself, which steps into your
        shoes for what it paid. Payment from the fund is by bank transfer; a Korean account you
        kept open simplifies it, and remittance to a foreign account is a question to raise with
        the paying agency at the outset rather than after approval.
      </p>

      <h2 id="e9-insurance" className={H2}>
        4. Employment-permit workers: departure-guarantee insurance
      </h2>
      <p className={P}>
        If you worked under the employment-permit system (E-9), part of your severance was never
        meant to come from the employer&rsquo;s account at all. Employers of permit workers must
        hold <Term ko="출국만기보험">departure-guarantee insurance</Term> for the worker&rsquo;s
        severance, and the insured amount is payable <strong>within 14 days of your
        departure</strong> from Korea — or, where you apply after leaving for reasons such as a
        change of status, within 14 days of the application (Act on the Employment, etc. of
        Foreign Workers art. 13). The claim is made to the insurer, typically to an overseas
        account, and is separate from the labor office process.
      </p>
      <p className={P}>
        Two cautions. The insured sum may not equal your full statutory severance — the
        difference, like unpaid wages, is owed by the employer and pursued through sections 2
        and 3. And an employer who never paid the premiums leaves a gap that the labor office
        complaint, not the insurer, addresses. Check both figures before deciding what remains
        to be chased.
      </p>

      <h2 id="worth-it" className={H2}>
        5. Is a lawyer worth it? It depends on the amount
      </h2>
      <p className={P}>
        <strong>Arrears inside the fund&rsquo;s ceiling.</strong> The system is priced for this
        case: a complaint filed through a representative, the confirmation, and the fund can
        recover the money without a lawsuit. Representation here is a modest fixed task rather
        than litigation, and for a few million won of back pay it is often the whole job.
        Korea&rsquo;s free legal aid for wage claimants earning under ₩4 million a month is
        designed around residents and runs through the labor office confirmation; whether a
        departed worker still qualifies is worth asking before assuming either way.
      </p>
      <p className={P}>
        <strong>Arrears above the ceiling, or a disputed debt.</strong> A judgment is then needed
        — for the balance, for interest at 20%, and to seize the employer&rsquo;s accounts. Claims
        of ₩30 million or less run on the small-claims track; your attorney files and appears
        electronically; enforcement follows{' '}
        <Link href="/guides/debt-collection/enforcing-a-judgment" className={LINK}>
          the usual route
        </Link>
        . Against a solvent employer this is usually rational; against one that has already
        closed, the fund may be the only money that ever arrives. We&rsquo;ll tell you at the
        consultation if it isn&rsquo;t worth it.
      </p>

      <h2 id="from-abroad" className={H2}>
        6. What can be done from abroad — and what needs you in Korea
      </h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full min-w-[560px] border-collapse">
          <thead>
            <tr>
              <th className={TH}>Step</th>
              <th className={TH}>From abroad</th>
              <th className={TH}>Needs you in Korea</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={TD}>Power of attorney</td>
              <td className={TD}>Notary and apostille where you live, or a Korean consulate (appointment required).</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Labor office complaint</td>
              <td className={TD}>Filed by your representative; your statement given in writing or remotely through them.</td>
              <td className={TD}>Not usually — an inspector can ask for more, and the file is handled case by case.</td>
            </tr>
            <tr>
              <td className={TD}>Wage fund claim</td>
              <td className={TD}>Filed on the confirmation; payment by transfer, foreign-account remittance to be confirmed with the agency.</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Departure-guarantee insurance (E-9)</td>
              <td className={TD}>Claimed from the insurer to an overseas account.</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Lawsuit and enforcement</td>
              <td className={TD}>Filed and argued electronically by your attorney; proceeds to your account or your attorney&rsquo;s.</td>
              <td className={TD}>No — hearings are attended by counsel.</td>
            </tr>
            <tr>
              <td className={TD}>Settlement with the employer</td>
              <td className={TD}>Negotiated and documented by your representative.</td>
              <td className={TD}>No.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="common-mistakes" className={H2}>
        7. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Trusting the 3-year figure.</strong> The claim lasts 3 years; the fund&rsquo;s
          complaint window is 1 year. Most of the money in a small case comes from the fund.
        </li>
        <li>
          <strong>Closing the Korean bank account on the way out.</strong> It is where the fund,
          a settlement, or an enforcement payout lands most easily. Keep it, or plan the
          alternative before you need it.
        </li>
        <li>
          <strong>Leaving the evidence in a phone number you cancelled.</strong> Export the chat
          history, download the payslips, screenshot the schedules — before the accounts close.
        </li>
        <li>
          <strong>Accepting &ldquo;you left without notice, so you forfeit it.&rdquo;</strong>{' '}
          Wages for work done are owed regardless; any claim the employer has about notice is
          a separate matter, not a licence to withhold pay.
        </li>
        <li>
          <strong>Withdrawing the complaint on a promise.</strong> The withdrawal ends the
          criminal exposure that made the employer negotiate. Money first, signature second.
        </li>
      </ul>
      <Callout variant="warning" title="Don't let the employer's status story stop you">
        Employers sometimes suggest that a worker whose visa had lapsed, or who worked outside
        its terms, has no claim — and that pressing one will cause problems. Pay for work done
        is claimable in practice regardless; whether your own situation carries any separate
        consequence is a question to clarify with counsel first, not a reason to abandon the
        wages.
      </Callout>

      <GuideDeadlines
        items={[
          {
            when: '14 days',
            what: 'After your last day — the settlement deadline for wages, severance and leave pay (Labor Standards Act art. 36); 20% interest runs from the day after (art. 37). For E-9 workers, departure-guarantee insurance is payable within 14 days of departure (Employment of Foreign Workers Act art. 13).',
          },
          {
            when: '1 year',
            what: 'From the day after leaving the job — the labor office complaint must be filed by then for the wage fund’s confirmation route.',
          },
          {
            when: '2 years',
            what: 'From the day after leaving — suit must be filed by then for the wage fund’s judgment route.',
          },
          {
            when: '3 years',
            what: 'The limitation period for the wage claim itself, counted from each missed payday (art. 49).',
          },
        ]}
      />
      <p className={P}>
        Start by fixing one date — your last day of work — and counting forward: 14 days, 1 year,
        3 years. Then gather the records and send the power of attorney on its way.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'I never had a written contract. Can I still claim?',
            a: (
              <p>
                Yes. The absence of a written contract is the employer&rsquo;s breach, not yours,
                and it does not defeat a wage claim. What carries the claim is evidence of the work
                and the agreed rate: bank deposits showing the pattern of pay, schedules, messages
                assigning shifts, colleagues who can confirm. Assemble that before the complaint
                goes in.
              </p>
            ),
          },
          {
            q: 'My employer says the company has closed. Is there any point?',
            a: (
              <p>
                Often, yes — because the wage fund pays on the confirmed arrears whether or not
                the employer can, up to its ceiling, and a separate, larger version of the fund
                exists for formally insolvent employers. The complaint still has to be filed
                within the fund&rsquo;s windows, and against a closed business the fund is
                frequently the only source of payment, which makes speed the whole strategy.
              </p>
            ),
          },
          {
            q: 'I worked on an E-9 permit. Where does my severance actually come from?',
            a: (
              <p>
                Largely from the departure-guarantee insurance your employer was required to
                hold, payable within 14 days of your departure to an account you designate — a
                claim to the insurer, not the employer. Any shortfall between the insured sum and
                your statutory severance, and any unpaid wages, remain the employer&rsquo;s debt
                and go through the labor office route like anyone else&rsquo;s.
              </p>
            ),
          },
          {
            q: 'My visa had expired by the time I stopped working. Does that kill the claim?',
            a: (
              <p>
                Pay for work actually done is treated as claimable in practice regardless of how
                the visa situation ended, and the labor office processes such complaints. Whether
                your own circumstances carry any separate consequence for a future return to
                Korea is a different question — factor it into how you proceed, with advice,
                rather than treating it as a reason not to claim.
              </p>
            ),
          },
          {
            q: 'How does the money get to me overseas?',
            a: (
              <p>
                A settling employer can remit directly to a foreign account; the wage fund and a
                court enforcement pay by bank transfer, most simply into a Korean account —
                yours if you kept one, or your representative&rsquo;s client account with onward
                remittance. Agree the route in writing at the start; international transfers add
                paperwork on both ends, and a payment should not stall on a form.
              </p>
            ),
          },
        ]}
      />

      <p className="text-sm text-gray-500 leading-relaxed mt-10">
        Written by Attorney Chulho Choi (SOL &amp; LUNA / Law Firm Myeong, KBA-registered specialist
        in Civil and Criminal Law). Reviewed as of October 2026. Updated when laws change.
      </p>
    </>
  )
}
