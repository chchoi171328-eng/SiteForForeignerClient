// Guide body: Divorce in Korea: Consensual vs. Judicial
// Authored via the english-guide-writer skill workflow (guide-production Phase 1, #6).
// Statute references verified against law.go.kr / casenote.kr / easylaw.go.kr — see REVIEW-GUIDES.md.
// Marriage-visa (F-6) impact is perspective-level only; the full residency topic is on the
// hold list pending user review (guide-production PART B).

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

export default function DivorceInKoreaConsensualVsJudicial() {
  return (
    <>
      <Image
        src="/assets/guides/divorce-hero.jpg"
        alt="Two wedding rings on a table by a window — divorce in Korea follows one of two routes, consensual or judicial"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            Korean divorce runs through one of two doors:{' '}
            <strong>consensual divorce</strong> — both spouses agree and confirm it at the family
            court — or <strong>judicial divorce</strong>, where one spouse sues on statutory
            grounds.
          </li>
          <li>
            Consensual divorce requires a <strong>cooling-off period</strong>: 3 months if you
            have minor children, 1 month if not — and with children, a{' '}
            <strong>written custody and support agreement</strong> is mandatory.
          </li>
          <li>
            Judicial divorce needs one of <strong>six statutory grounds</strong> (Civil Act art.
            840), and a <strong>mediation stage comes first</strong> by law.
          </li>
          <li>
            Property division is a separate claim with a hard deadline:{' '}
            <strong>2 years from the divorce</strong> — a trap for people who settle the divorce
            first and the money &ldquo;later.&rdquo;
          </li>
          <li>
            Foreign spouses use the same two doors; what differs is jurisdiction, language, and
            paperwork — plan those, not a different law.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        Divorce in Korea, for a foreigner, usually starts with a translation problem: the words{' '}
        <Term ko="협의이혼">consensual divorce</Term> and{' '}
        <Term ko="재판상 이혼">judicial divorce</Term> describe two procedures so different — in
        cost, in time, in what you must prove — that the first real decision in any Korean divorce
        is which door you are walking through.
      </p>
      <p className={P}>
        The framework is the Civil Act <span lang="ko">(민법)</span>: spouses may divorce by
        agreement with the family court&rsquo;s confirmation (arts. 834, 836), or one spouse may
        sue for divorce on listed grounds (art. 840). Everything else — the cooling-off period,
        mediation, property division, custody — hangs off that fork.
      </p>
      <p className={P}>
        This guide walks both routes end to end, then covers what gets decided alongside the
        divorce itself and the deadlines that quietly control the money.
      </p>

      <GuideToc
        items={[
          { href: '#two-routes', label: '1. The two routes — and how to choose' },
          { href: '#consensual', label: '2. Consensual divorce (협의이혼): the process' },
          { href: '#judicial-grounds', label: '3. Judicial divorce: the six grounds' },
          { href: '#mediation', label: '4. Mediation comes first' },
          { href: '#money-and-children', label: '5. Money and children: decided alongside' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="two-routes" className={H2}>
        1. The two routes — and how to choose
      </h2>
      <p className={P}>
        If both spouses genuinely agree to end the marriage, consensual divorce is faster,
        cheaper, and requires no grounds at all — nobody has to be at fault, and nothing has to be
        proven. Its weakness is that it needs the other spouse&rsquo;s cooperation at every step,
        including physically appearing at court.
      </p>
      <p className={P}>
        Judicial divorce is the route when agreement is impossible — a spouse who refuses, has
        disappeared, or will only negotiate under the pressure of a filed case. It requires
        statutory grounds and takes months to years, but it ends in a judgment that does not
        depend on anyone&rsquo;s cooperation. Many contested cases still settle along the way, in
        mediation — more on that below.
      </p>

      <h2 id="consensual" className={H2}>
        2. Consensual divorce <span lang="ko">(협의이혼)</span>: the process
      </h2>
      <GuideFlow
        steps={[
          {
            title: 'Apply together at the family court',
            body: 'Both spouses file a confirmation application at the family court for your registered or resident address and receive the statutory guidance session.',
          },
          {
            title: 'Wait out the cooling-off period',
            body: 'From the guidance date: 3 months if you have minor children, 1 month if not (Civil Act art. 836-2). Courts can shorten it in urgent cases, but plan on the full period.',
          },
          {
            title: 'Appear before the judge — together',
            body: 'On the assigned date both spouses appear and confirm the intention to divorce. Couples with minor children must submit a written agreement on custody and child support; the court reviews it and can refuse confirmation if it shortchanges the children.',
          },
          {
            title: 'Report the divorce within 3 months',
            body: 'The confirmation is not the divorce. It takes effect when reported to the local administrative office — and the confirmation lapses if you miss the 3-month reporting window.',
          },
        ]}
      />
      <p className={P}>
        For a foreign spouse the procedure is the same; the practical differences are language and
        documents. Family courts work in Korean — arrange interpretation in advance rather than
        assuming it — and your home country may require its own recognition or reporting of the
        Korean divorce, which is worth checking with your embassy before you start, not after.
      </p>
      <p className={P}>
        Bring identity documents for both spouses (a foreign spouse&rsquo;s passport and
        registration card), the marriage records, and — with minor children — the custody and
        support agreement in the court&rsquo;s format. If one spouse lives abroad, procedures
        exist through Korean diplomatic missions, but they add steps and weeks; get the sequence
        confirmed before booking anything.
      </p>
      <Callout title="Agreement on paper, not in the air">
        A consensual divorce confirms the divorce itself — it does not settle your property
        unless you settle it. Put the financial terms in a signed written agreement before the
        court date. The 2-year clock in section 5 is what happens to people who left money
        &ldquo;to sort out later.&rdquo;
      </Callout>

      <h2 id="judicial-grounds" className={H2}>
        3. Judicial divorce: the six grounds
      </h2>
      <p className={P}>
        One spouse can sue for divorce only on the grounds listed in Civil Act art. 840:
      </p>
      <div className="my-6 overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full min-w-[560px] border-collapse">
          <thead className="bg-slate-50 border-b border-gray-200">
            <tr>
              <th className={TH}>Ground</th>
              <th className={TH}>What it covers</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className={TD}>1. Unchaste conduct</td>
              <td className={TD}>
                Broader than adultery — conduct incompatible with marital fidelity. Time-limited:
                see the deadlines box.
              </td>
            </tr>
            <tr>
              <td className={TD}>2. Malicious desertion</td>
              <td className={TD}>
                Abandoning the duties of cohabitation and support without just cause — leaving, or
                expelling the other spouse.
              </td>
            </tr>
            <tr>
              <td className={TD}>3. Extreme mistreatment by the spouse or their lineal ascendants</td>
              <td className={TD}>
                Abuse or grave insult from the spouse — or the in-laws — making the marriage
                unbearable.
              </td>
            </tr>
            <tr>
              <td className={TD}>4. Extreme mistreatment of your lineal ascendants by the spouse</td>
              <td className={TD}>The mirror image: your spouse gravely mistreats your parents.</td>
            </tr>
            <tr>
              <td className={TD}>5. Three years&rsquo; unknown whereabouts</td>
              <td className={TD}>
                The spouse&rsquo;s life or death has been unknown for three years or more.
              </td>
            </tr>
            <tr>
              <td className={TD}>6. Any other grave reason making the marriage impossible to continue</td>
              <td className={TD}>
                The catch-all — prolonged breakdown, violence, gambling, alcohol, long separation.
                Most contested cases are argued here alongside a specific ground.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={P}>
        Evidence matters more than labels: messages, records, photographs, hospital records,
        witness statements. What you should not do is gather it illegally — installing spyware on
        a spouse&rsquo;s phone or breaking into accounts can create separate legal problems that
        outlast the divorce.
      </p>

      <h2 id="mediation" className={H2}>
        4. Mediation comes first
      </h2>
      <p className={P}>
        You do not file a divorce suit and go straight to trial. By law, judicial divorce goes
        through <Term ko="조정">mediation</Term> first (Family Litigation Act art. 50): a
        mediation session at the family court where a settlement is attempted before litigation
        proper begins. File the suit directly and the court simply refers the case to mediation
        anyway, unless the other spouse cannot be summoned or mediation is plainly futile.
      </p>
      <figure className="my-6">
        <Image
          src="/assets/guides/divorce-mediation.jpg"
          alt="A mediation room at a Korean family court — divorce cases go to mediation before trial"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          A mediated divorce agreement carries the force of a judgment — and can resolve property,
          custody, and support in a single session rather than a year of litigation.
        </Caption>
      </figure>
      <p className={P}>
        Treat mediation as a real event, not a formality. A mediated agreement has the force of a
        judgment, can cover property, custody, and support in one package, and is often the
        fastest decent exit from a contested case. Come with numbers prepared — asset lists,
        proposals — not just grievances.
      </p>

      <h2 id="money-and-children" className={H2}>
        5. Money and children: decided alongside
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Property division</strong> <span lang="ko">(재산분할)</span> — each spouse may
          claim division of property built up during the marriage, regardless of whose name it is
          in and regardless of fault (Civil Act art. 839-2). The claim dies{' '}
          <strong>2 years after the divorce</strong>, and within that period it must actually be
          filed at court, not just mentioned in messages. What counts as marital property, how
          shares are set, and the hidden-asset tools are covered in{' '}
          <Link href="/guides/divorce-family-law/property-division-basics" className={LINK}>
            Property Division Basics
          </Link>
          .
        </li>
        <li>
          <strong>Solatium</strong> <span lang="ko">(위자료)</span> — separate, fault-based
          compensation from the spouse (or a third party) responsible for the breakdown. A
          different claim from property division, with its own shorter limitation period.
        </li>
        <li>
          <strong>Debts count too.</strong> Division looks at the marital estate as a whole —
          assets and the debts incurred building it — so a spouse&rsquo;s loans are part of the
          arithmetic, not a separate surprise. Full financial disclosure early is what keeps the
          2-year window usable.
        </li>
        <li>
          <strong>Custody, visitation, and child support</strong> — agreed in the consensual
          route (mandatorily, with court review) or decided by the court in the judicial route.
          Custody — including its international layer — is covered in{' '}
          <Link href="/guides/divorce-family-law/child-custody-in-international-marriages" className={LINK}>
            Child Custody in International Marriages
          </Link>
          .
          {/* TODO: internal link to child-support guide (production list #13) */}
        </li>
      </ul>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Divorcing first, dividing &ldquo;later.&rdquo;</strong> The 2-year property
          clock runs from the divorce, and expats who leave Korea afterward reliably underestimate
          how fast it goes.
        </li>
        <li>
          <strong>Assuming one court visit does it.</strong> The consensual route takes at least
          two appearances separated by the cooling-off period, plus the report afterward — plan
          travel and visas around that reality.
        </li>
        <li>
          <strong>Skipping the written financial agreement</strong> because the split is
          &ldquo;amicable.&rdquo; Amicable today is not enforceable tomorrow; a signed agreement
          is.
        </li>
        <li>
          <strong>Collecting evidence illegally.</strong> Spyware, secret account access, and
          taking the spouse&rsquo;s phone can create separate legal problems and taint an
          otherwise strong case.
        </li>
        <li>
          <strong>Assuming a divorce in one country automatically counts in the other.</strong>{' '}
          Recognition between legal systems is its own question — check both ends early,
          especially where remarriage or property is involved.
        </li>
      </ul>

      <GuideDeadlines
        items={[
          {
            when: '6 months / 2 years',
            what: 'To sue on the unchaste-conduct ground: within 6 months of learning of it and 2 years of it occurring (Civil Act art. 841; the same windows apply to certain other grounds, art. 842).',
          },
          {
            when: '3 months',
            what: 'To report a confirmed consensual divorce to the administrative office — the confirmation lapses if the window passes.',
          },
          {
            when: '2 years from divorce',
            what: 'To file the property division claim at the family court (art. 839-2(3)) — filing, not negotiating, stops this clock.',
          },
          {
            when: '3 years',
            what: 'The general limitation period claimed for solatium as a tort claim (art. 766) — shorter than the property window; treat it as the earlier alarm.',
          },
        ]}
      />
      <p className={P}>
        Start by fixing two facts: whether your spouse will genuinely cooperate, and what the
        marital property actually is. The first picks your door; the second decides how much the
        paperwork matters.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'Can two foreigners divorce in a Korean court?',
            a: (
              <p>
                Often yes — Korean family courts can handle divorces of foreign couples who live
                here, but which country&rsquo;s courts and which country&rsquo;s law apply is a
                genuine legal question that depends on nationality, residence, and where the
                marriage life was based. It deserves its own analysis before you file anywhere —
                including whether filing at home would serve you better.
              </p>
            ),
          },
          {
            q: 'My spouse agreed to divorce but refuses to come to court. Now what?',
            a: (
              <p>
                Then it is not a consensual divorce — the procedure requires both spouses at the
                confirmation. Your options are persuading them (a signed financial agreement often
                helps, since it removes the fear of open-ended claims) or switching to the
                judicial route, where mediation replaces their cooperation as the path to a
                settled outcome.
              </p>
            ),
          },
          {
            q: "I'm on a marriage-based visa. What happens to my status if we divorce?",
            a: (
              <p>
                A divorce can affect your stay in Korea, and the outcome depends on your specific
                status and circumstances — including matters like custody of children and
                responsibility for the breakdown, which can interact with immigration decisions.
                Factor your status into the timing and shape of the divorce from the beginning,
                and have it assessed individually rather than relying on general rules.
              </p>
            ),
          },
          {
            q: 'How long does each route take?',
            a: (
              <p>
                Consensual: the cooling-off period — 1 or 3 months — plus scheduling on both ends,
                so commonly one to four months. Judicial: mediation adds a stage before
                litigation, and a contested case runs many months and can exceed a year, longer
                with appeals. A case that settles in mediation lands somewhere between the two.
              </p>
            ),
          },
          {
            q: 'Does it matter who was at fault?',
            a: (
              <p>
                For the divorce itself, fault matters mainly in the judicial route — grounds must
                be proven, and under Korean practice the spouse principally responsible for the
                breakdown faces limits on suing for divorce themselves. For money, fault drives
                solatium but not property division, which turns on contribution to the assets. So
                the honest answer is: it matters, but for narrower questions than most people
                assume.
              </p>
            ),
          },
        ]}
      />

      <p className={P + ' mt-8'}>
        If your situation involves courts in two countries — different nationalities, a marriage
        lived across borders, a spouse abroad — start with{' '}
        <Link href="/guides/divorce-family-law/which-countrys-court-international-divorce" className={LINK}>
          Which Country&rsquo;s Court?
        </Link>{' '}
        before choosing where to file.
      </p>

      <p className="text-sm text-gray-500 leading-relaxed mt-10">
        Written by Attorney Chulho Choi (SOL &amp; LUNA / Law Firm Myeong, KBA-registered specialist
        in Civil and Criminal Law). Reviewed as of August 2026. Updated when laws change.
      </p>
    </>
  )
}
