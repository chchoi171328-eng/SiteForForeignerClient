// Guide body: Paternity and Child Support in Korea When You Live Abroad
// Authored via the english-guide-writer skill workflow (#35, from-abroad series, ⚠ topic).
// Wording levels: party-appearance rule (Family Litigation Act art. 7) and in-Korea DNA
// sampling (art. 29) per the PR #52 verifications; nationality/registration consequences
// at perspective level only; cross-border enforcement hedged (Korea outside the Hague
// child-support regime). Statutes verified — see REVIEW-GUIDES.md.

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

export default function PaternityAndChildSupportFromAbroad() {
  return (
    <>
      <Image
        src="/assets/guides/paternity-abroad-hero.jpg"
        alt="A child's small shoes beside a folded blank document on a windowsill in morning light — a parent abroad can establish paternity and claim child support in a Korean court against a Korean parent"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            A Korean court can hear a paternity or child-support case even if you and the child
            live abroad — the <strong>defendant parent being a Korean national</strong> is itself
            a ground for Korean jurisdiction (Act on Private International Law art. 57).
          </li>
          <li>
            If the father will not acknowledge the child voluntarily, the child can obtain a{' '}
            <strong>court declaration of paternity</strong> (Civil Act art. 863), effective back
            to birth (art. 860). If he has died, the claim must be filed within{' '}
            <strong>2 years</strong> of learning of the death (art. 864).
          </li>
          <li>
            The court can order <strong>DNA testing</strong> (Family Litigation Act art. 29);
            refusal carries fines of up to ₩10 million and, on repeat, detention (art. 67). The
            sampling is normally done <strong>in Korea</strong> by the appointed examiner.
          </li>
          <li>
            Child support follows paternity. Enforcement tools are strong: wage deductions
            ordered straight to you after <strong>2 missed payments</strong>, security or
            lump-sum orders, and — for serious defaulters — exit bans, licence suspension and
            name publication.
          </li>
          <li>
            Most of the case runs through your attorney — but family courts apply a{' '}
            <strong>party-appearance rule</strong>, and the DNA sampling needs a trip. Plan one
            visit that covers both.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        The relationship was with a Korean national; the child was born after you had left, or
        you left together and he stayed, or he simply stopped answering once the pregnancy was
        known. Now you are raising a child in another country whose father is in Korea, has a
        Korean name on no document the child holds, and pays nothing. The question is whether
        anything can be done about that from where you are — and the answer is more than most
        parents in this position expect.
      </p>
      <p className={P}>
        Two Korean statutes carry it: the Civil Act <span lang="ko">(민법)</span>, which lets a
        child whose father will not acknowledge them obtain a court declaration of paternity,
        and the Family Litigation Act <span lang="ko">(가사소송법)</span>, which gives Korean
        family courts unusually direct tools for collecting support once it is ordered. The
        amounts themselves are the subject of{' '}
        <Link href="/guides/divorce-family-law/child-support-how-amounts-are-set" className={LINK}>
          Child Support: How Amounts Are Set
        </Link>
        ; this guide is about getting from abroad to an order, and from an order to money.
      </p>
      <p className={P}>
        One honest line first: this is the from-abroad case that most needs a trip. The sections
        below say exactly where.
      </p>

      <GuideToc
        items={[
          { href: '#jurisdiction', label: '1. Can a Korean court hear it when you live abroad?' },
          { href: '#paternity', label: '2. Establishing paternity: acknowledgment or a court declaration' },
          { href: '#dna', label: '3. The DNA test — and why it needs a trip' },
          { href: '#support-and-enforcement', label: '4. Child support: the order, and the tools behind it' },
          { href: '#from-abroad', label: '5. What can be done from abroad — and what needs you in Korea' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="jurisdiction" className={H2}>
        1. Can a Korean court hear it when you live abroad?
      </h2>
      <p className={P}>
        For cases about whether someone is a child&rsquo;s parent, Korean courts have
        jurisdiction where the child&rsquo;s habitual residence is in Korea, <em>or</em> where
        the child and the parent being sued include a Korean national (Act on Private
        International Law art. 57). A foreign mother abroad suing a Korean father in Korea
        therefore has a Korean forum on the second ground alone. Support and custody questions
        attached to the same facts generally travel with the case.
      </p>
      <p className={P}>
        Which country&rsquo;s law the court applies, and whether a judgment from your own
        country could instead be brought to Korea, are real questions in some cases — the
        broader treatment is in{' '}
        <Link href="/guides/divorce-family-law/which-countrys-court-international-divorce" className={LINK}>
          Which Country&rsquo;s Court?
        </Link>
        . The practical point for most readers is simpler: the father, his income, and his
        assets are in Korea, and a Korean order is the one the Korean enforcement tools attach
        to.
      </p>

      <h2 id="paternity" className={H2}>
        2. Establishing paternity: acknowledgment or a court declaration
      </h2>
      <p className={P}>
        A child born outside marriage has no legal father in Korea until one is established.
        The simple route is <Term ko="인지">acknowledgment (inji)</Term>: the father registers
        the child as his (Civil Act art. 855), and the effect runs back to the child&rsquo;s
        birth (art. 860). Some fathers who have gone quiet will still sign when approached
        through counsel with the alternative spelled out; it is worth one properly framed
        request.
      </p>
      <p className={P}>
        If he will not, the child — through you as legal representative — can bring a{' '}
        <Term ko="인지청구의 소">paternity suit (inji cheonggu ui so)</Term> and have the court
        declare him the father (art. 863). The declaration has the same backdated effect. If
        the father has died, the suit is brought against the public prosecutor instead and must
        be filed within <strong>2 years of learning of the death</strong> (art. 864) — the one
        hard deadline in this guide, and the reason a parent who hears of a death should act on
        the news rather than grieve first and file later.
      </p>
      <GuideFlow
        steps={[
          {
            title: 'Power of attorney and the file',
            body: 'Legalised where you live. With it: the child’s birth record, anything showing the relationship and its timing — messages, photographs, travel records, remittances.',
          },
          {
            title: 'Mediation first',
            body: 'Paternity cases must go through family-court mediation before trial (Family Litigation Act art. 50). A father who attends sometimes acknowledges there; one who does not simply moves the case on.',
          },
          {
            title: 'Trial — and the DNA order',
            body: 'Where the evidence is contested, the court orders genetic testing (art. 29). Section 3 explains what that means for you and the child.',
          },
          {
            title: 'Declaration and registration',
            body: 'The judgment is recorded in the Korean family register; the child now has a legal father in Korea, and the support claim in section 4 opens.',
          },
        ]}
      />

      <h2 id="dna" className={H2}>
        3. The DNA test — and why it needs a trip
      </h2>
      <p className={P}>
        Where other evidence does not settle the question, the family court may order the
        parties to undergo genetic testing, within limits that protect health and dignity
        (Family Litigation Act art. 29). The order has teeth: a party who defies it without
        good reason faces a fine of up to <strong>₩10 million</strong>, and one who defies it
        again after being fined can be detained for up to <strong>30 days</strong> until they
        comply (art. 67). A father who thinks silence will protect him usually learns otherwise
        at this stage.
      </p>
      <p className={P}>
        The part that matters for a parent abroad: court-ordered testing is taken by an
        examiner the court appoints, with identity checks, and in practice that sampling is
        done <strong>in Korea</strong>. A kit mailed from overseas is not what the court
        orders. The child, and often you, will need to be in Korea for the sample — which is
        why the sensible plan is one trip timed to the test, with any hearing the court wants
        you at scheduled around it.
      </p>
      <figure className="my-6">
        <Image
          src="/assets/guides/paternity-abroad-desk.jpg"
          alt="A clinical sample tube and a sealed blank envelope on a clean table in soft light — court-ordered DNA testing in a Korean paternity case is taken by the appointed examiner, in Korea"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          The court&rsquo;s test, not yours: a result from an examiner the court appointed is
          what the judgment rests on, and it is taken in Korea.
        </Caption>
      </figure>

      <h2 id="support-and-enforcement" className={H2}>
        4. Child support: the order, and the tools behind it
      </h2>
      <p className={P}>
        Once paternity is established, the father owes support like any parent, and the court
        sets a monthly amount by reference to both parents&rsquo; incomes and the child&rsquo;s
        age — the mechanics and typical figures are in the child-support guide linked above.
        Whether support can be claimed for the period before the order is fact-specific; raise
        it from the start rather than assuming either way.
      </p>
      <p className={P}>
        What distinguishes Korea is what happens when the order is ignored. After{' '}
        <strong>2 missed payments</strong>, the court can order the father&rsquo;s employer to
        deduct the support from his wages and pay it to you directly — an order with the force
        of a seizure and assignment combined, and one that reaches future instalments as they
        fall due (Family Litigation Act art. 63-2). The court can also require{' '}
        <strong>security</strong> for the support, and where it is not provided, order some or
        all of it paid as a <strong>lump sum</strong> (art. 63-3). A performance order (art. 64)
        backed by fines of up to ₩10 million (art. 67) sits behind both.
      </p>
      <p className={P}>
        Beyond the court, the child-support enforcement framework adds administrative pressure
        on serious defaulters — exit bans, driver&rsquo;s-licence suspension and name
        publication for those who ignore a performance order across multiple payments or a
        large arrears figure — and a public agency,{' '}
        <Term ko="양육비이행관리원">the Child Support Agency (Yangyukbi Ihaeng Gwalliwon)</Term>,
        that supports custodial parents of children under 19 with claims and collection.
        Whether a custodial parent living abroad qualifies for its help is not something to
        assume; ask early. What does not exist is a simplified cross-border collection channel
        under the Hague child-support regime, which Korea is outside — so enforcement in practice
        means enforcement in Korea, against Korean income and assets.
      </p>

      <h2 id="from-abroad" className={H2}>
        5. What can be done from abroad — and what needs you in Korea
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
              <td className={TD}>Power of attorney and evidence</td>
              <td className={TD}>Legalised where you live; records gathered and translated.</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Request for voluntary acknowledgment</td>
              <td className={TD}>Made through counsel.</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Filing, mediation, hearings</td>
              <td className={TD}>Filed by your attorney; a representative may appear in your place only with the judge&rsquo;s permission.</td>
              <td className={TD}>
                Sometimes — family courts apply a party-appearance rule (art. 7); we tell you
                early which dates will need you.
              </td>
            </tr>
            <tr>
              <td className={TD}>DNA sampling</td>
              <td className={TD}>—</td>
              <td className={TD}>Yes, normally — the child, and often you, with the court-appointed examiner.</td>
            </tr>
            <tr>
              <td className={TD}>Support order and enforcement</td>
              <td className={TD}>Applications for direct payment, security, lump sum and performance orders filed by counsel; funds to your account.</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Child Support Agency assistance</td>
              <td className={TD}>Eligibility for a parent abroad to be confirmed with the agency.</td>
              <td className={TD}>Unclear — ask first.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Waiting for him to come round.</strong> Years pass, evidence fades, and if he
          dies the 2-year clock starts without you noticing. File while the facts are fresh.
        </li>
        <li>
          <strong>Sending a home DNA kit and expecting the court to use it.</strong> A private
          result may persuade him; it is not the court&rsquo;s test and does not replace it.
        </li>
        <li>
          <strong>Letting the relationship record disappear.</strong> Messages, photographs with
          dates, hospital records, transfers — exported now, before an old phone or account is
          gone.
        </li>
        <li>
          <strong>Booking a short trip with no slack.</strong> The sampling and any hearing the
          court wants you at should fall inside one visit; build in days, not hours.
        </li>
        <li>
          <strong>Stopping at the declaration.</strong> Paternity is the door; support and its
          enforcement orders are the room. Apply for them in the same breath.
        </li>
      </ul>
      <Callout variant="warning" title="Keep the pressure inside the case">
        Messages threatening to expose him to his family or employer unless he pays can create
        separate legal problems for you and hand him a complaint of his own. The lawful
        pressure is the court order, the wage deduction, and the sanctions that follow a
        performance order — use those.
      </Callout>

      <GuideDeadlines
        items={[
          {
            when: '2 years',
            what: 'From learning of the father’s death — the deadline for a paternity suit against the prosecutor (Civil Act art. 864).',
          },
          {
            when: '2 missed payments',
            what: 'The point from which a direct-payment order to the father’s employer can be sought (Family Litigation Act art. 63-2).',
          },
          {
            when: 'Under 19',
            what: 'The child’s age limit for assistance from the Child Support Agency under the enforcement framework.',
          },
          {
            when: 'Before any hearing',
            what: 'The time to ask the court for permission for a representative to appear in your place under the party-appearance rule (art. 7) — not the day before the flight.',
          },
        ]}
      />
      <p className={P}>
        Start with two things you can do from your kitchen table: assemble the relationship
        record, and begin the power of attorney. The trip comes later, and it comes once.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'The child was born abroad and has never been to Korea. Does a Korean court still have jurisdiction?',
            a: (
              <p>
                Yes, on the ground that the parent being sued is a Korean national — the
                child&rsquo;s residence abroad does not remove it (Act on Private International
                Law art. 57). Which law the court applies to the substance can be its own
                question, and whether to proceed in Korea or at home is a choice to make with
                advice; but the forum is there.
              </p>
            ),
          },
          {
            q: 'He says he is not the father and refuses to be tested. What then?',
            a: (
              <p>
                That is the situation the test order exists for. A party who defies a court
                order to be tested, without good reason, faces a fine of up to ₩10 million and,
                on continued refusal, detention of up to 30 days; and a court weighing a
                refusal alongside the other evidence is unlikely to read it in his favour. Most
                refusals end at the fine.
              </p>
            ),
          },
          {
            q: 'He has died. Is it too late?',
            a: (
              <p>
                Not if you are within 2 years of learning of his death: the paternity suit is
                then brought against the public prosecutor (Civil Act art. 864), with the same
                backdated effect — which can matter for the child&rsquo;s position in his
                estate. Past the 2 years the door closes, so the date you learned of the death
                is the first fact to fix.
              </p>
            ),
          },
          {
            q: 'Will establishing paternity give my child Korean nationality or a Korean family record?',
            a: (
              <p>
                A declaration of paternity is recorded in the Korean family register and can
                open the way to questions of nationality and documentation for the child — but
                those run on their own rules, with their own procedures and time limits, and
                are a separate matter from the support claim. Raise them at the outset so the
                case is planned with them in view rather than discovered afterwards.
              </p>
            ),
          },
          {
            q: 'Can I get support for the years he paid nothing?',
            a: (
              <p>
                Possibly in part. Korean courts can address the period before an order in some
                circumstances, and the answer turns on the facts — when paternity was
                established, what you asked for and when, what you spent. It is a claim to
                raise explicitly from the first filing, not one that follows automatically from
                the declaration.
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
