// Guide body: Consensual Divorce vs. Mediated Divorce in Korea
// Authored via the english-guide-writer skill workflow (#38, divorce-family-law).
// Search intent split from #6 (consensual vs. judicial): this guide compares the two
// agreement-based routes and what each one actually enforces. Statutes verified —
// see REVIEW-GUIDES.md. No case law; mediation written with effect + limit together.

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

export default function ConsensualVsMediatedDivorce() {
  return (
    <>
      <Image
        src="/assets/guides/mediated-divorce-hero.jpg"
        alt="An empty mediation room at a Korean family court — a round table with chairs in soft light, where a mediated divorce settles everything in one recorded agreement"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            If you both agree to divorce, Korea gives you <strong>two agreement-based
            routes</strong>: consensual divorce confirmed at the family court, or mediated
            divorce recorded by it. They differ in what you walk away holding.
          </li>
          <li>
            <strong>Consensual divorce</strong> confirms the divorce and the children&rsquo;s
            arrangements after a <strong>cooling-off period</strong> of 3 months (minor
            children) or 1 month. Your property deal is a private contract — the court does not
            record or enforce it.
          </li>
          <li>
            <strong>Mediated divorce</strong> has <strong>no cooling-off period</strong>, and the
            mediation record covers property, alimony, custody, support and visitation in one
            document with the <strong>force of a court judgment</strong> (Family Litigation Act
            art. 59).
          </li>
          <li>
            The divorce takes effect when the mediation record is drawn up; the report within
            1 month is bookkeeping. A consensual divorce exists only once it is reported — and
            either spouse can withdraw until then.
          </li>
          <li>
            Mediation&rsquo;s limit is the same as its strength: it needs both of you at the
            table. If the other spouse will not engage, neither route works, and the case moves
            to a judicial divorce.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        You have both reached the same conclusion: the marriage is over, and neither of you wants
        a fight about it. Most people in Korea have heard of consensual divorce — the
        cooling-off period, the two visits to the family court. Fewer have heard that the same
        court will, on application, record your agreement in a form enforceable the way a
        judgment is, without the waiting period.
      </p>
      <p className={P}>
        The two routes are <Term ko="협의이혼">consensual divorce (hyeobui ihon)</Term> under
        the Civil Act <span lang="ko">(민법)</span> arts. 834 and 836, and{' '}
        <Term ko="조정이혼">mediated divorce (jojeong ihon)</Term> under the Family Litigation
        Act <span lang="ko">(가사소송법)</span>. Neither is a contested case. Both begin with
        agreement. The difference is how much of that agreement the court writes down, and what
        happens if one of you later changes their mind.
      </p>
      <p className={P}>
        This guide sets the two side by side. The wider map — judicial divorce and the six
        grounds — is in{' '}
        <Link href="/guides/divorce-family-law/divorce-in-korea-consensual-vs-judicial" className={LINK}>
          Divorce in Korea: Consensual vs. Judicial
        </Link>
        .
      </p>

      <GuideToc
        items={[
          { href: '#two-routes', label: '1. Two agreement-based routes — and why there are two' },
          { href: '#consensual', label: '2. Consensual divorce: what the court confirms, and what it does not' },
          { href: '#mediated', label: '3. Mediated divorce: one session, one enforceable record' },
          { href: '#side-by-side', label: '4. Side by side' },
          { href: '#when-consensual', label: '5. When consensual divorce is still the right call' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="two-routes" className={H2}>
        1. Two agreement-based routes — and why there are two
      </h2>
      <p className={P}>
        Consensual divorce is the Civil Act&rsquo;s procedure for a couple who agree: the
        family court confirms that you both mean it, and the divorce takes effect when reported.
        It was never designed to settle money. Mediation belongs to the Family Litigation Act,
        and most people meet it as the stage a judge sends a contested case to before trial
        (art. 50). But a couple who already agree can apply for it directly, to have the court
        record the whole settlement at once.
      </p>
      <p className={P}>
        So the two routes differ in reach. Consensual divorce ends the marriage and fixes the
        children&rsquo;s arrangements; everything else stays private between you. Mediated
        divorce fixes everything you put into the record, with the enforceability of a court
        decision. Which one fits depends on how much there is to settle, and how much you want
        to rely on the other person keeping their word.
      </p>

      <h2 id="consensual" className={H2}>
        2. Consensual divorce: what the court confirms, and what it does not
      </h2>
      <p className={P}>
        You apply together at the family court, attend its guidance session, wait out the
        cooling-off period — 3 months with minor children, 1 month without (Civil Act art.
        836-2) — then appear together before a judge who confirms the intention to divorce. The
        court can shorten or waive the period only for an urgent reason such as violence; plan
        on the full period.
      </p>
      <p className={P}>
        With minor children you file a written agreement on custody and child support, and the
        court draws up a <Term ko="양육비부담조서">child-support record (yangyukbi budam
        joseo)</Term> — the one financial item consensual divorce does enforce. It has the force
        of an executable court order (art. 836-2 para. 5, applying Family Litigation Act art.
        41), so unpaid support can be collected without a new lawsuit.
      </p>
      <p className={P}>
        Everything else is outside the court&rsquo;s paperwork. A property division agreed at
        the kitchen table is a private contract: if your spouse does not pay, you sue on the
        contract, or claim division afresh within the <strong>2-year</strong> limit (Civil Act
        art. 839-2) explained in{' '}
        <Link href="/guides/divorce-family-law/property-division-basics" className={LINK}>
          Property Division Basics
        </Link>
        . And the confirmation is not yet a divorce. It becomes one when reported to the local
        office within 3 months (Family Relations Registration Act art. 75); miss the window and
        the confirmation lapses. Until then either spouse can withdraw by lodging a withdrawal
        at the registration office, and a withdrawal filed before the other&rsquo;s report stops
        the divorce.
      </p>

      <h2 id="mediated" className={H2}>
        3. Mediated divorce: one session, one enforceable record
      </h2>
      <p className={P}>
        <Term ko="가사조정">Family mediation (gasa jojeong)</Term> is a session at the family
        court, before a mediation judge or a panel, in which the court records what you agree.
        Apply jointly, or one spouse applies and the other comes to the table. There is{' '}
        <strong>no cooling-off period</strong>, and the application fee is ₩5,000 (Family
        Litigation Fee Rules art. 6). Once the terms are entered in the record, the mediation
        has the same effect as a settlement in court (Family Litigation Act art. 59) — the
        effect of a final judgment on everything it covers.
      </p>
      <GuideFlow
        steps={[
          {
            title: 'Apply for mediation',
            body: 'A joint application, or one spouse applies naming the other. Attach the agreed terms as far as they exist: who keeps what, any lump sum or alimony, custody, monthly support, visitation.',
          },
          {
            title: 'The mediation date',
            body: 'The court sets a date, commonly within a few weeks to a couple of months depending on the court. Both spouses attend; a representative may appear in your place only with the judge’s permission (art. 7). Terms are read through and adjusted on the spot.',
          },
          {
            title: 'The record is drawn up',
            body: 'The agreed terms are entered in the mediation record. The divorce takes effect at this point, with everything in the record enforceable as a judgment.',
          },
          {
            title: 'Report within 1 month',
            body: 'The divorce is reported to the local office within 1 month of the mediation (Family Relations Registration Act art. 78 applying art. 58). This is a bookkeeping step — the marriage has already ended.',
          },
        ]}
      />
      <p className={P}>
        Two features matter most. Scope: the record holds the whole settlement, so a spouse
        who later refuses to transfer the apartment or pay the agreed sum faces direct
        enforcement, not a fresh lawsuit, and the 2-year property-division clock never becomes
        your problem. Finality: a completed mediation cannot be withdrawn the way a consensual
        confirmation can. The limit is the mirror image. Mediation cannot force terms on a
        spouse who will not attend or agree; one that fails converts into a divorce suit, deemed
        filed on the application date (art. 49, applying Civil Mediation Act art. 36), with the
        difference in court fees paid then. And the court&rsquo;s tools for tracing hidden
        assets are narrower in mediation than in a contested case.
      </p>
      <figure className="my-6">
        <Image
          src="/assets/guides/mediated-divorce-record.jpg"
          alt="A pen resting on a blank agreement beside two cups on a wooden table — in a mediated divorce the court records the whole settlement in one document"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          One document, everything in it: property, alimony, custody, support and visitation
          entered in a mediation record carry the force of a judgment from the day they are
          written down.
        </Caption>
      </figure>
      <p className={P}>
        Where one spouse does not appear, the mediation judge may issue a{' '}
        <Term ko="조정을 갈음하는 결정">decision in lieu of mediation</Term> setting terms; it
        becomes final unless either side objects within <strong>2 weeks</strong> of service
        (Civil Mediation Act arts. 30 and 34). It is the court&rsquo;s tool, not a shortcut you
        can count on.
      </p>

      <h2 id="side-by-side" className={H2}>
        4. Side by side
      </h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full min-w-[640px] border-collapse">
          <thead>
            <tr>
              <th className={TH}>&nbsp;</th>
              <th className={TH}>Consensual divorce</th>
              <th className={TH}>Mediated divorce</th>
              <th className={TH}>Basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={TD}>Cooling-off period</td>
              <td className={TD}>3 months with minor children, 1 month without; shortened only for urgent reasons</td>
              <td className={TD}>None</td>
              <td className={TD}>Civil Act art. 836-2</td>
            </tr>
            <tr>
              <td className={TD}>What the court records</td>
              <td className={TD}>The divorce; custody and child support where there are minor children</td>
              <td className={TD}>Everything agreed: property, alimony, custody, support, visitation</td>
              <td className={TD}>Civil Act art. 836-2 para. 4–5; Family Litigation Act art. 59</td>
            </tr>
            <tr>
              <td className={TD}>Enforceable without a new suit</td>
              <td className={TD}>Child support only (child-support record)</td>
              <td className={TD}>Every term in the record</td>
              <td className={TD}>Family Litigation Act art. 41; art. 59</td>
            </tr>
            <tr>
              <td className={TD}>When the divorce takes effect</td>
              <td className={TD}>On report to the local office, within 3 months of confirmation</td>
              <td className={TD}>When the mediation record is drawn up; report within 1 month is bookkeeping</td>
              <td className={TD}>Family Relations Registration Act arts. 75, 78</td>
            </tr>
            <tr>
              <td className={TD}>Can one spouse back out?</td>
              <td className={TD}>Yes, until the divorce is reported</td>
              <td className={TD}>No, once the record is drawn up</td>
              <td className={TD}>Family Litigation Act art. 59</td>
            </tr>
            <tr>
              <td className={TD}>Attendance</td>
              <td className={TD}>Both spouses in person, twice (guidance and confirmation)</td>
              <td className={TD}>Both spouses at the session; representative only with the judge&rsquo;s permission</td>
              <td className={TD}>Family Litigation Act art. 7</td>
            </tr>
            <tr>
              <td className={TD}>If the other spouse stops cooperating</td>
              <td className={TD}>Procedure lapses; start a judicial divorce</td>
              <td className={TD}>Converts into a divorce suit, deemed filed on the application date</td>
              <td className={TD}>Family Litigation Act art. 49; Civil Mediation Act art. 36</td>
            </tr>
            <tr>
              <td className={TD}>Court fee</td>
              <td className={TD}>Nominal</td>
              <td className={TD}>₩5,000 to apply; the difference to a suit&rsquo;s fee is paid only if it converts</td>
              <td className={TD}>Family Litigation Fee Rules art. 6</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="when-consensual" className={H2}>
        5. When consensual divorce is still the right call
      </h2>
      <p className={P}>
        Mediation earns its advantages where there is something to enforce. If there is no
        property to divide, no lump sum changing hands, and no money question beyond child
        support — which the child-support record already covers — consensual divorce does the
        job, and the cooling-off period is its only real cost. Couples in that position
        routinely complete it without a lawyer.
      </p>
      <p className={P}>
        Mediation is the better instrument when the settlement has moving parts: an apartment or
        deposit to transfer, a payment schedule, visitation one of you fears will quietly erode.
        The value is less the session than the drafting — terms with dates, amounts and
        conditions a court officer can act on. That is where counsel earns a fee, and where a
        self-drafted agreement most often fails later. Honest arithmetic applies: for a
        settlement worth a few million won, legal fees can approach what is at stake, and a
        careful consensual divorce with a notarised side agreement may be the proportionate
        choice.
      </p>
      <p className={P}>
        For a foreign spouse, two practical additions. Family courts work in Korean, so
        interpretation at the session is arranged in advance. And if one of you lives abroad,
        the consular route for consensual divorce is built around Korean nationals; confirm
        whether it serves your situation before relying on it, and consider mediation with a
        permitted representative as the more predictable path.
      </p>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Treating the consensual confirmation as the divorce.</strong> It is not, until
          reported — and the report window is 3 months.
        </li>
        <li>
          <strong>Leaving property &ldquo;to sort out later&rdquo; after a consensual divorce.</strong>{' '}
          Later has a 2-year limit, and the agreement you shook hands on has no enforcement
          behind it.
        </li>
        <li>
          <strong>Applying for mediation as pressure.</strong> It is not a weapon. A spouse who
          does not engage converts it into a suit, and you are back to proving grounds.
        </li>
        <li>
          <strong>Vague terms in the record.</strong> &ldquo;He will help with the
          children&rsquo;s costs&rdquo; cannot be enforced. &ldquo;₩800,000 by the 25th of each
          month until the child turns 19&rdquo; can.
        </li>
        <li>
          <strong>Assuming a representative can attend for you.</strong> The family court
          applies a party-appearance rule; permission is asked for in advance.
        </li>
      </ul>
      <Callout variant="warning" title="Keep the record clean">
        Terms agreed but not entered in the mediation record are not part of the mediated
        divorce. A promise made in the corridor is just a promise — and trying to hold a former
        spouse to it by other means can create separate legal problems for you. If it matters,
        it goes in the record.
      </Callout>

      <GuideDeadlines
        items={[
          {
            when: '3 months / 1 month',
            what: 'Cooling-off period before a consensual divorce can be confirmed — with or without minor children (Civil Act art. 836-2).',
          },
          {
            when: '3 months',
            what: 'From receiving the consensual-divorce confirmation — the window to report the divorce, or the confirmation lapses (Family Relations Registration Act art. 75).',
          },
          {
            when: '1 month',
            what: 'From a completed mediation — the window to report a divorce that has already taken effect (art. 78 applying art. 58).',
          },
          {
            when: '2 weeks',
            what: 'From service of a decision in lieu of mediation — the time to object before it becomes final (Civil Mediation Act art. 34).',
          },
          {
            when: '2 years',
            what: 'From the divorce — the limit for a property-division claim not already settled in a mediation record (Civil Act art. 839-2).',
          },
        ]}
      />
      <p className={P}>
        Start by listing what has to change hands. If the list is empty, consensual divorce is
        enough. If not, the question is which document you want behind it.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'We already finished the cooling-off period. Can we still switch to mediation?',
            a: (
              <p>
                Yes. A couple can withdraw a consensual application and apply for mediation
                instead. The usual reason to switch is realising that the property agreement
                needs enforcement behind it; the usual cost is a few weeks waiting for a
                mediation date.
              </p>
            ),
          },
          {
            q: 'Does a mediated divorce look different on my record, or to my home country?',
            a: (
              <p>
                In Korea it is a divorce like any other; the register does not grade divorces
                by route. Recognition abroad depends on your country&rsquo;s rules, and some
                ask for a court document — a mediation record is one, which can make
                recognition simpler than a consensual divorce with no court decision behind
                it. Check with your embassy before choosing.
              </p>
            ),
          },
          {
            q: 'My spouse agrees to the divorce but not to the money. Which route?',
            a: (
              <p>
                A mediation case, not a consensual one. Consensual divorce ends the marriage and
                leaves the money unresolved with the 2-year clock running. Mediation puts both
                on the table; if the money cannot be agreed, the case converts into a suit where
                the court decides it. Divorcing first and litigating the money second is the
                slowest version of the same path.
              </p>
            ),
          },
          {
            q: 'Can a mediated divorce be reopened if circumstances change?',
            a: (
              <p>
                The divorce and the property terms are final. Custody, support and visitation
                can be changed later by the court, on application, where the child&rsquo;s
                circumstances warrant it. Treat the record as final for money and as the
                current arrangement for the children.
              </p>
            ),
          },
          {
            q: 'Do I need a lawyer at the mediation session?',
            a: (
              <p>
                Not as a rule; parties attend in person and the court runs the session. A
                lawyer adds value before the date, drafting terms that will enforce, and in the
                room when a proposal needs testing against what a court would order. For a
                simple record with little to transfer, many couples proceed without one.
              </p>
            ),
          },
        ]}
      />

      <p className="text-sm text-gray-500 leading-relaxed mt-10">
        Written by Attorney Chulho Choi (SOL &amp; LUNA / Law Firm Myeong, KBA-registered specialist
        in Civil and Criminal Law). Reviewed as of November 2026. Updated when laws change.
      </p>
    </>
  )
}
