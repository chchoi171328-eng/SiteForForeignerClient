// Guide body: Severance Pay: Who Qualifies
// Authored via the english-guide-writer skill workflow (guide-production Phase 1, #9).
// Statute references verified against law.go.kr / casenote.kr / easylaw.go.kr — see REVIEW-GUIDES.md.

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
const TH = 'text-left text-xs font-bold uppercase tracking-wider text-gray-500 px-4 py-3'
const TD = 'px-4 py-3 text-sm text-gray-700 leading-relaxed align-top'
const LINK = 'text-navy-900 underline decoration-gold-400 underline-offset-2 hover:text-gold-600'

export default function SeverancePayWhoQualifies() {
  return (
    <>
      <Image
        src="/assets/guides/severance-hero.jpg"
        alt="A worker's desk with a small farewell plant and a sealed envelope — severance pay in Korea is one month's wages per year worked"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            Korean statutory severance <Term ko="퇴직금">(toejikgeum)</Term> is roughly{' '}
            <strong>one month&rsquo;s average pay for every year worked</strong> — 30 days of
            average wages per year of continuous service.
          </li>
          <li>
            You qualify after <strong>1 year of continuous work at 15+ hours a week</strong> —
            regardless of company size, your nationality, your visa type, or whether you quit or
            were let go.
          </li>
          <li>
            What controls is <strong>substance, not the label</strong>: &ldquo;freelance&rdquo;
            contracts do not erase severance if you worked like an employee.
          </li>
          <li>
            Payment is due <strong>within 14 days of leaving</strong>, normally into an IRP
            retirement account; E-9 workers are covered by a special{' '}
            <strong>departure guarantee insurance</strong> instead.
          </li>
          <li>
            The claim <strong>expires 3 years</strong> after you leave — and the enforcement
            machine from our unpaid-wages guide applies to severance too.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        Severance pay in Korea surprises foreign workers twice. The first surprise is that it
        exists at all: a statutory, non-negotiable lump sum — about a month of pay per year of
        service — owed to almost every employee who stays a year, whether they quit, get fired, or
        simply don&rsquo;t get renewed. The second surprise is how often employers quietly
        structure around it: eleven-month contracts, &ldquo;freelancer&rdquo; labels,
        severance &ldquo;included&rdquo; in monthly pay.
      </p>
      <p className={P}>
        The governing statute is the{' '}
        <strong>Act on the Guarantee of Employees&rsquo; Retirement Benefits</strong>{' '}
        <span lang="ko">(근로자퇴직급여 보장법)</span>. This guide covers what the entitlement is,
        the two thresholds that decide who qualifies, the freelancer question that decides most
        real disputes, and how payment actually works — including the separate system for E-9
        workers.
      </p>

      <GuideToc
        items={[
          { href: '#the-rule', label: "1. The rule: 30 days' pay per year worked" },
          { href: '#who-qualifies', label: '2. Who qualifies — the two thresholds' },
          { href: '#employee-in-substance', label: '3. Employee in substance: the freelancer question' },
          { href: '#how-paid', label: '4. How it must be paid' },
          { href: '#e9-insurance', label: '5. E-9 workers: departure guarantee insurance' },
          { href: '#common-disputes', label: '6. Common disputes and traps' },
          { href: '#if-unpaid', label: "7. If it isn't paid" },
        ]}
      />

      <h2 id="the-rule" className={H2}>
        1. The rule: 30 days&rsquo; pay per year worked
      </h2>
      <p className={P}>
        An employer must pay a departing employee at least{' '}
        <strong>30 days of average wages for each year of continuous service</strong> (art. 8).{' '}
        <Term ko="평균임금">Average wages</Term> means your total pay over the final 3 months
        divided by the days in that period — so it captures not just base salary but regular
        allowances, and overtime actually paid in that window.
      </p>
      <p className={P}>
        The arithmetic is friendly: three years at an average of ₩3 million a month points to
        roughly ₩9 million; partial years after the first count proportionally. Because the final
        three months set the rate, what happens in those months matters — a point section 6
        returns to.
      </p>

      <figure className="my-6">
        <Image
          src="/assets/guides/severance-calc.jpg"
          alt="Estimating Korean severance pay — one month's average wages for each year of service"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          A five-minute estimate — final three months&rsquo; total pay, divided into a daily rate,
          times 30, times your years — tells you whether the number you were offered is even in
          the right neighborhood.
        </Caption>
      </figure>
      <p className={P}>
        Two refinements are worth knowing when the sums are large. Regular annual bonuses and
        annual-leave pay can enter the calculation in proportional ways rather than simply
        whatever landed in the last three months — so a payout that looks too small deserves a
        proper recalculation, not a shrug. And if the final months were abnormal — unpaid leave, a
        sudden pay cut — the law&rsquo;s aim is your normal earning level, which is an argument
        worth making with records in hand.
      </p>

      <h2 id="who-qualifies" className={H2}>
        2. Who qualifies — the two thresholds
      </h2>
      <div className="my-6 overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full min-w-[560px] border-collapse">
          <thead className="bg-slate-50 border-b border-gray-200">
            <tr>
              <th className={TH}>Threshold</th>
              <th className={TH}>What it means</th>
              <th className={TH}>Basis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className={TD}><strong>1 year of continuous service</strong></td>
              <td className={TD}>
                Counted from your first day — probation included. Renewed contracts count as
                continuous where the work in fact continued.
              </td>
              <td className={TD}>Retirement Benefits Act art. 4</td>
            </tr>
            <tr>
              <td className={TD}><strong>15+ hours per week</strong></td>
              <td className={TD}>
                Averaged over 4 weeks. Below it, the entitlement does not arise — the main reason
                very-part-time work is excluded.
              </td>
              <td className={TD}>art. 4</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={P}>
        Just as important is what does <em>not</em> matter: company size (the smallest workplaces
        are covered), your nationality or visa type, how the job ended — resignation, dismissal,
        or non-renewal — and whether anything about severance was written into your contract. The
        entitlement is statutory; a contract that promises less, or nothing, does not change it.
      </p>

      <h2 id="employee-in-substance" className={H2}>
        3. Employee in substance: the freelancer question
      </h2>
      <p className={P}>
        Most severance disputes in the foreign community are not about the arithmetic — they are
        about the label. Hagwon teachers on &ldquo;independent contractor&rdquo; agreements,
        workers paid with 3.3% tax withheld instead of payroll deductions, staff called
        &ldquo;partners&rdquo; — the question in every case is the same: were you an employee in
        substance?
      </p>
      <p className={P}>
        What the label says matters far less than how the work ran: fixed working hours set by
        the business, a schedule and workplace you did not control, direction and supervision
        over how you worked, the business&rsquo;s materials and premises, pay tied to time rather
        than results. Where the substance looks like employment, severance (and the rest of labor
        law) generally follows, whatever the contract calls you — though each case turns on its
        facts and is worth assessing properly before you rely on it.
      </p>

      <h2 id="how-paid" className={H2}>
        4. How it must be paid
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Within 14 days of leaving</strong> (art. 9), extendable only by genuine
          agreement — and unpaid severance for a departed worker accrues 20% annual interest, the
          same as wages.
        </li>
        <li>
          <strong>Into an IRP account, as a rule.</strong> For most workers under 55, the employer
          must pay severance by transfer into an{' '}
          <Term ko="개인형퇴직연금">individual retirement pension (IRP)</Term> account you
          designate, rather than your bank account (art. 9(2)) — so opening the IRP promptly is
          part of getting paid on time.
        </li>
        <li>
          <strong>Pension plans change the shape, not the substance.</strong> Employers running
          DB/DC retirement-pension plans meet the duty through the plan; the value must be at
          least equivalent to the statutory lump sum.
        </li>
        <li>
          <strong>Leaving Korea for good</strong> does not forfeit anything — the money is yours,
          and departure-related withdrawal of the IRP is handled through the financial
          institution. Sort the account mechanics before you fly, not after.
        </li>
      </ul>

      <p className={P}>
        On tax: severance is taxed separately from salary, as retirement income, under rules that
        are generally gentler than ordinary income tax — and routing through the IRP interacts
        with when that tax falls due. The mechanics are a financial-institution conversation
        rather than a legal one, but budget on the gross figure being trimmed, not paid over
        untouched.
      </p>

      <h2 id="e9-insurance" className={H2}>
        5. E-9 workers: departure guarantee insurance
      </h2>
      <p className={P}>
        Employers of E-9 workers must enroll them in{' '}
        <Term ko="출국만기보험">departure guarantee insurance</Term> — premiums of 8.3% of
        ordinary monthly wages — and that enrollment stands in for the severance system (Act on
        Employment of Foreign Workers art. 13). After a year or more of service, the insurance
        benefit is paid within <strong>14 days of your departure</strong> from Korea (or of your
        application, for status changes and post-departure claims).
      </p>
      <p className={P}>
        One number to check: the insurance payout is built from premiums, and where it comes to
        less than the statutory severance the arithmetic in section 1 produces, the difference is
        generally for the employer to make up. Compare the two figures before you leave, while
        collecting the paperwork is still easy.
      </p>

      <h2 id="common-disputes" className={H2}>
        6. Common disputes and traps
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>&ldquo;Your severance is included in your salary.&rdquo;</strong> Folding
          severance into monthly pay generally does not extinguish the entitlement — the practice
          is treated as invalid in principle, because the money is only calculable when you leave.
          Do not accept the line at face value; have the contract read.
        </li>
        <li>
          <strong>The 11-month contract.</strong> Ending employment just short of a year is the
          crude way around the entitlement, and just-under-a-year offers deserve to be read with
          that in mind. But repeated renewals that in fact continue the same work accumulate
          continuous service — a gap on paper does not always reset the clock.
        </li>
        <li>
          <strong>Final-quarter wage games.</strong> Because the last 3 months set the average
          wage, cutting hours, dropping allowances, or moving you to &ldquo;standby&rdquo; just
          before departure shrinks the number. Keep records of what changed and when.
        </li>
        <li>
          <strong>Resign-and-rejoin paperwork.</strong> Signing a &ldquo;resignation&rdquo; and a
          &ldquo;new contract&rdquo; at renewal time can be used later to argue the clock reset.
          Where work genuinely continued, the argument is weak — but the paper helps the employer,
          so understand what you are signing.
        </li>
      </ul>

      <h2 id="if-unpaid" className={H2}>
        7. If it isn&rsquo;t paid
      </h2>
      <p className={P}>
        Unpaid severance rides the same enforcement machine as unpaid wages: the labor office
        complaint, the criminal backstop, the government wage fund — which covers up to ₩7
        million of severance for the final 3 years of service — and free legal aid for workers
        under the ₩4 million wage threshold. The whole sequence, with its deadlines, is covered in{' '}
        <Link href="/guides/labor-employment/unpaid-wages-labor-office-vs-lawsuit" className={LINK}>
          Unpaid Wages: Labor Office vs. Lawsuit
        </Link>
        .
      </p>

      <GuideDeadlines
        items={[
          {
            when: '14 days after leaving',
            what: 'The employer’s deadline to pay severance (art. 9); 20% annual interest accrues after it.',
          },
          {
            when: '14 days after departure',
            what: 'When E-9 departure guarantee insurance must be paid out (or within 14 days of application for status-change and post-departure claims).',
          },
          {
            when: '3 years',
            what: 'The severance claim expires 3 years from the day after you leave (art. 10) — the same cliff as wages.',
          },
        ]}
      />
      <p className={P}>
        Start with two numbers: your first day of work, and your average monthly pay over the
        last three months. Between them they decide whether you qualify and roughly what you are
        owed.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: "I teach at a hagwon on a 'freelance' contract with 3.3% tax withheld. Do I get severance?",
            a: (
              <p>
                Possibly — the 3.3% withholding and the contract title do not decide it. If the
                hagwon set your schedule, assigned your classes, supervised your work, and paid
                you by the month, the substance points toward employment, and severance follows
                the substance. These cases are won on records: timetables, work rules, messages
                assigning duties. Have the facts assessed rather than assuming the label wins.
              </p>
            ),
          },
          {
            q: "My contract ends at 11 months and they won't renew. Am I entitled to anything?",
            a: (
              <p>
                Under a year of continuous service, the statutory entitlement does not arise —
                which is exactly why the 11-month structure exists. Where it gets contestable: if
                you previously renewed and the work ran continuously past a year in total, or if
                the &ldquo;break&rdquo; between contracts was paper-thin while the job carried
                on. If either sounds like your history, the clock may already be past a year.
              </p>
            ),
          },
          {
            q: 'Does quitting voluntarily cost me my severance?',
            a: (
              <p>
                No. Resignation, dismissal, and non-renewal all trigger the same entitlement —
                severance is deferred pay for service, not a reward for how the job ended.
                What resigning can affect is other things (unemployment benefits, for example),
                but the severance itself does not depend on who ended the relationship.
              </p>
            ),
          },
          {
            q: 'Does my visa type change my severance rights?',
            a: (
              <p>
                The entitlement itself does not depend on nationality or visa type — the
                thresholds are the same 1 year and 15 hours for everyone. What changes by visa is
                the payment plumbing: E-9 workers are covered through departure guarantee
                insurance rather than the ordinary route, and anyone leaving Korea permanently
                should sort the IRP account mechanics before departing.
              </p>
            ),
          },
          {
            q: 'My employer says the company is too small to owe severance. True?',
            a: (
              <p>
                No — the retirement-benefit duty covers even the smallest workplaces. The claim
                sometimes traces to an era when very small businesses were phased in gradually,
                but that phase-in is long past. If a year and the 15-hour threshold are met, size
                is not a defense.
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
