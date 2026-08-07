// Guide body: Unpaid Wages: Labor Office vs. Lawsuit
// Authored via the english-guide-writer skill workflow (guide-production Phase 1, #8).
// Statute references verified against casenote.kr / easylaw.go.kr / moel.go.kr — see REVIEW-GUIDES.md.
// The self-filing note on labor office complaints is the skill's explicit honesty exception.

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

export default function UnpaidWagesLaborOfficeVsLawsuit() {
  return (
    <>
      <Image
        src="/assets/guides/unpaid-wages-hero.jpg"
        alt="An empty desk after quitting time — unpaid wages in Korea have a 14-day settlement rule and a 3-year deadline"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            When you leave a job in Korea, everything owed — wages, severance, unused leave pay —
            must be settled <strong>within 14 days</strong>. After that, interest runs at{' '}
            <strong>20% per year</strong> and the non-payment is a crime.
          </li>
          <li>
            The standard remedy is not a lawsuit but a{' '}
            <strong>complaint to the labor office</strong> — free, filed online or in person, and
            realistic to do yourself.
          </li>
          <li>
            If the employer still won&rsquo;t or can&rsquo;t pay, a government fund pays you
            first — up to <strong>₩10 million</strong> — and chases the employer itself.
          </li>
          <li>
            For the court route, workers earning under ₩4 million a month get{' '}
            <strong>free legal aid</strong>, foreign residents included.
          </li>
          <li>
            The hard limit: wage claims <strong>expire after 3 years</strong>. Everything in this
            guide works better started early.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        Unpaid wages in Korea are common enough to have a whole enforcement system of their own —
        and that is the first thing to understand if your salary has stopped arriving: you are not
        suing a company from scratch. The Labor Standards Act{' '}
        <span lang="ko">(근로기준법)</span> makes paying you a legal duty backed by criminal
        penalties, a government inspectorate exists to enforce it, and a public fund exists to pay
        you when the employer cannot.
      </p>
      <p className={P}>
        The practical question is not whether you have rights but which track to use: the{' '}
        <Term ko="진정">labor office complaint</Term>, the civil lawsuit, or — as it usually plays
        out — the complaint first, feeding everything else. This guide walks the tracks in the
        order that works, with the numbers and deadlines attached.
      </p>

      <GuideToc
        items={[
          { href: '#the-rules', label: '1. The rules your employer already broke' },
          { href: '#two-tracks', label: '2. Two tracks — and the order that works' },
          { href: '#labor-office', label: '3. The labor office complaint, step by step' },
          { href: '#wage-fund', label: "4. When the employer won't pay: the wage fund" },
          { href: '#lawsuit', label: '5. The lawsuit — and free legal aid' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="the-rules" className={H2}>
        1. The rules your employer already broke
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Wages must be paid in full, directly, in currency, on a fixed day</strong> at
          least monthly (Labor Standards Act art. 43). &ldquo;Sales were bad this month&rdquo; is
          not a legal category.
        </li>
        <li>
          <strong>The 14-day settlement rule.</strong> When you quit, are fired, or the contract
          ends, every amount owed — final wages, statutory severance, unused annual-leave pay —
          is due within 14 days (art. 36), extendable only by genuine agreement.
        </li>
        <li>
          <strong>20% interest.</strong> Miss the 14 days and unpaid wages and severance for a
          departed worker carry interest at 20% per year until paid (art. 37).
        </li>
        <li>
          <strong>It is a crime.</strong> Non-payment is punishable by up to 3 years imprisonment
          or a ₩30 million fine (art. 109). The offense cannot be prosecuted against your
          expressed wish — which quietly makes <em>your</em> signature on a settlement the
          employer&rsquo;s exit from criminal exposure. That is leverage; spend it only in
          exchange for money.
        </li>
        <li>
          <strong>Three years.</strong> Wage claims expire 3 years after each payment fell due
          (art. 49).
        </li>
      </ul>

      <h2 id="two-tracks" className={H2}>
        2. Two tracks — and the order that works
      </h2>
      <div className="my-6 overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full min-w-[560px] border-collapse">
          <thead className="bg-slate-50 border-b border-gray-200">
            <tr>
              <th className={TH}></th>
              <th className={TH}>Labor office complaint (진정)</th>
              <th className={TH}>Civil lawsuit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className={TD}><strong>Cost</strong></td>
              <td className={TD}>Free</td>
              <td className={TD}>Court fees; lawyer optional (free legal aid below)</td>
            </tr>
            <tr>
              <td className={TD}><strong>Speed</strong></td>
              <td className={TD}>Commonly a month or two for the investigation</td>
              <td className={TD}>Months; small-claims track is faster</td>
            </tr>
            <tr>
              <td className={TD}><strong>Pressure on employer</strong></td>
              <td className={TD}>Criminal exposure — most cases end in payment here</td>
              <td className={TD}>A judgment you can enforce against assets</td>
            </tr>
            <tr>
              <td className={TD}><strong>What it produces</strong></td>
              <td className={TD}>
                Payment, or an official <Term ko="체불 임금등 사업주 확인서">wage-arrears
                confirmation</Term> that unlocks the fund and free legal aid
              </td>
              <td className={TD}>An enforceable judgment (and the fund&rsquo;s judgment route)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={P}>
        These are not rivals. The sequence that works for most people: complain to the labor
        office first — it is free, fast, and most employers pay under criminal pressure — and let
        its confirmation document power the wage fund and, if needed, a lawsuit that someone else
        pays for.
      </p>

      <h2 id="labor-office" className={H2}>
        3. The labor office complaint, step by step
      </h2>
      <GuideFlow
        steps={[
          {
            title: 'File the complaint',
            body: "Online through the Ministry of Employment and Labor's Labor Portal, or in person at the labor office covering the workplace. Filing is designed for workers to do themselves — no representative is required.",
          },
          {
            title: 'The labor inspector investigates',
            body: 'Both sides are summoned and questioned; bring your evidence (section 6). The inspector establishes what is owed and orders correction.',
          },
          {
            title: 'Most cases end here — with payment',
            body: 'Faced with an official arrears figure and criminal referral, most employers pay or settle in installments in writing.',
          },
          {
            title: "If not: confirmation document + criminal referral",
            body: 'The office issues the wage-arrears confirmation — your key to the fund and free legal aid — and refers the employer for prosecution.',
          },
        ]}
      />
      <Callout variant="warning" title="Do not withdraw the complaint before the money arrives">
        Because the offense cannot be prosecuted against your wish, employers ask for the
        withdrawal — or a &ldquo;no punishment&rdquo; signature — in exchange for a promise to
        pay. Signed paper against future promises is how people end up with neither money nor
        leverage. Withdraw after the transfer clears, or against a written installment agreement
        with real dates.
      </Callout>

      <h2 id="wage-fund" className={H2}>
        4. When the employer won&rsquo;t pay: the wage fund
      </h2>
      <p className={P}>
        Korea&rsquo;s wage-guarantee system pays workers first and collects from the employer
        afterward. The version most workers use, the{' '}
        <Term ko="간이대지급금">simplified advance payment</Term>, covers up to{' '}
        <strong>₩7 million of the last 3 months&rsquo; wages and ₩7 million of the last 3
        years&rsquo; severance — ₩10 million combined</strong> — and does not require the company
        to be bankrupt. It is claimed from the Korea Workers&rsquo; Compensation &amp; Welfare
        Service on the strength of either the labor office&rsquo;s confirmation document or a
        court judgment.
      </p>
      <p className={P}>
        The windows are tight and worth writing down: on the confirmation route, the complaint
        must be filed within 1 year of leaving the job and the fund claimed within 6 months of the
        confirmation&rsquo;s issuance; on the judgment route, suit must be filed within 2 years of
        leaving and the fund claimed within 1 year of the final judgment. A separate, larger
        version of the fund exists for genuinely insolvent employers.
      </p>

      <h2 id="lawsuit" className={H2}>
        5. The lawsuit — and free legal aid
      </h2>
      <p className={P}>
        The civil route matters when the amounts exceed the fund&rsquo;s ceiling, when the
        employer disputes the debt itself, or when you need a judgment to seize assets. Claims of
        ₩30 million or less travel the simplified small-claims track. Interest keeps running —
        the 20% rate for a departed worker&rsquo;s wages and severance — and a final judgment can
        be enforced against the employer&rsquo;s bank accounts and property.
      </p>
      <p className={P}>
        Here is the fact that changes the economics: workers whose average monthly wage over the
        final three months was <strong>under ₩4 million</strong> qualify for{' '}
        <strong>free legal aid</strong> through the Korea Legal Aid Corporation — consultation and
        the lawsuit itself, at no cost, and the program explicitly includes foreign residents. The
        path runs through the labor office confirmation document, then an application to the
        Corporation (helpline 132). For most unpaid-wage cases at ordinary salaries, in other
        words, the lawsuit does not cost you a lawyer.
      </p>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <figure className="my-6">
        <Image
          src="/assets/guides/unpaid-wages-office.jpg"
          alt="Gathering pay records and documents into a folder before filing an unpaid wages complaint in Korea"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          The complaint is only as strong as the records behind it — contract, payslips,
          schedules, bank statements, and the messages where pay was discussed.
        </Caption>
      </figure>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Working months on promises.</strong> Every unpaid month ages toward the 3-year
          cliff and deepens your exposure to a failing company. Two missed paydays is a pattern,
          not an accident.
        </li>
        <li>
          <strong>Quitting without securing the records.</strong> Contract, payslips, timesheets
          or shift schedules, bank statements, and the messages where work and pay were discussed
          — collect them while you still have access. No written contract does not kill the claim;
          evidence of the work and the promised rate carries it.
        </li>
        <li>
          <strong>Signing away leverage for promises</strong> — the withdrawal-before-payment trap
          in section 3, and its cousin, accepting a partial payment &ldquo;in full
          settlement.&rdquo;
        </li>
        <li>
          <strong>Letting visa worries stop you from filing.</strong> Wages for work already
          performed are treated as claimable in practice regardless of your status situation, and
          labor offices routinely handle complaints from foreign workers. If your status is
          irregular, get advice on the immigration side before filing — but do not simply write
          the money off.
        </li>
        <li>
          <strong>Missing the fund&rsquo;s short windows</strong> — 1 year to complain, 6 months
          from the confirmation — while waiting to see if the employer&rsquo;s promises ripen.
        </li>
      </ul>

      <GuideDeadlines
        items={[
          {
            when: '14 days after leaving',
            what: 'The employer’s deadline to settle all wages and severance (art. 36); 20% annual interest runs from day 15 (art. 37).',
          },
          {
            when: '1 year from leaving',
            what: 'To file the labor office complaint if you will use the wage fund’s confirmation route — then 6 months from the confirmation to claim the fund.',
          },
          {
            when: '2 years from leaving',
            what: 'To file suit if you will use the fund’s judgment route — then 1 year from the final judgment to claim.',
          },
          {
            when: '3 years',
            what: 'Each wage payment’s claim expires 3 years after it fell due (art. 49) — older months fall off first.',
          },
        ]}
      />
      <p className={P}>
        Start by writing down two dates — your last day of work, and the oldest unpaid payday —
        and gathering the records while you still have them. Every deadline above counts from
        those.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'Does my visa status affect my right to be paid?',
            a: (
              <p>
                The claim to wages for work you already performed does not depend on your visa
                type, and in practice labor offices take wage complaints from foreign workers of
                every status. Where your status itself is irregular, the complaint process and
                immigration consequences can interact — get advice on that side first rather than
                abandoning the claim. Money already earned is money you can pursue.
              </p>
            ),
          },
          {
            q: 'The company shut down and the owner is unreachable. Is it over?',
            a: (
              <p>
                No — this is exactly what the wage-guarantee system is for. The simplified fund
                does not require the company to be operating, and a larger insolvency version
                covers genuinely bankrupt employers. The labor office investigation can proceed
                against a closed business, and its confirmation document still unlocks the fund.
                File promptly; the windows in section 4 keep running.
              </p>
            ),
          },
          {
            q: 'I never signed a written contract. Can I still claim?',
            a: (
              <p>
                Yes. The absence of a written contract is the employer&rsquo;s violation, not
                yours, and the claim stands on evidence that you worked and what was promised:
                messages, schedules, transfer records, colleagues&rsquo; statements. Bring what
                you have; labor inspectors reconstruct wages from exactly this kind of material
                every day.
              </p>
            ),
          },
          {
            q: "My employer offered half now if I 'drop everything.' Should I take it?",
            a: (
              <p>
                Sometimes half now genuinely beats a long chase — but price the alternative before
                deciding: the fund can cover up to ₩10 million of what is owed, free legal aid may
                make the lawsuit costless, and 20% interest is accruing on your side of the table.
                If you do settle, settle in writing, for a scheduled amount, and hand over the
                withdrawal only as the money lands.
              </p>
            ),
          },
          {
            q: 'Do I actually need a lawyer for this?',
            a: (
              <p>
                Often not at the start — the labor office complaint is built for self-filing, and
                free legal aid covers the court stage for most ordinary salaries. Where a lawyer
                earns their fee: disputed amounts, arguments about whether you were an
                &ldquo;employee&rdquo; at all (freelancers, contractors), larger claims above the
                aid threshold, and employers with assets worth chasing properly.
              </p>
            ),
          },
        ]}
      />

      <p className={P + ' mt-8'}>
        If the missing money is severance pay specifically — or you are not sure you qualify for
        it — start with{' '}
        <Link href="/guides/labor-employment/severance-pay-who-qualifies" className={LINK}>
          Severance Pay: Who Qualifies
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
