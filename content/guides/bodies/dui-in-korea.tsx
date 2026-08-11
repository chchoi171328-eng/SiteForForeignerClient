// Guide body: DUI in Korea
// Authored via the english-guide-writer skill workflow (guide-production Phase 1, #5).
// All BAC thresholds and penalty ranges web-verified — see REVIEW-GUIDES.md.
// Visa/SOFA passages are perspective-level only (skill rule 5-6).

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

export default function DuiInKorea() {
  return (
    <>
      <Image
        src="/assets/guides/dui-hero.jpg"
        alt="A parked car on a quiet Korean street at night — DUI in Korea starts at 0.03% blood alcohol"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            Korea&rsquo;s DUI threshold is <strong>0.03% blood alcohol</strong> — well below the
            0.08% many English-speaking countries use. A single drink can put a smaller person
            over.
          </li>
          <li>
            Penalties scale with the level: from a fine at the bottom tier to{' '}
            <strong>2–5 years imprisonment at 0.2% or more</strong> — and{' '}
            <strong>refusing the breath test is punished like a high-level DUI</strong>, not a way
            out.
          </li>
          <li>
            The criminal case is only half of it: <strong>your license</strong> is suspended from
            0.03% and revoked from 0.08%, on a separate administrative track with its own short
            appeal deadlines.
          </li>
          <li>
            An accident with injury moves the case to an aggravated statute with{' '}
            <strong>far heavier ranges</strong> — and makes settlement with the victim central.
          </li>
          <li>
            Korea&rsquo;s <strong>designated-driver services (대리운전)</strong> are cheap and
            everywhere. Against a 0.03% limit, they are the only sensible plan.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        DUI in Korea catches foreign residents off guard for one simple reason: the number is
        lower than the one they grew up with. If your mental benchmark is 0.08% — the limit in
        most U.S. states and the U.K. — Korea&rsquo;s 0.03% means roughly a third of that, a level
        one glass can reach. People who would never describe themselves as drunk drivers get
        arrested at Korean checkpoints believing they were fine.
      </p>
      <p className={P}>
        The governing statute is the <strong>Road Traffic Act</strong>{' '}
        <span lang="ko">(도로교통법)</span>: driving with a blood alcohol concentration of 0.03% or
        higher is prohibited (art. 44), and the criminal penalties are graded by level (art.
        148-2). A DUI also triggers a second, separate track — the administrative action against
        your driver&rsquo;s license — which runs on its own rules and its own deadlines.
      </p>
      <p className={P}>
        This guide covers the numbers, both tracks, what happens at the stop, and where the case
        goes afterward — including the points where decisions are still yours to make.
      </p>

      <GuideToc
        items={[
          { href: '#the-limit', label: '1. The limit: 0.03% — lower than you think' },
          { href: '#penalties', label: '2. Criminal penalties by blood alcohol level' },
          { href: '#license', label: '3. Your license: the second, faster track' },
          { href: '#the-stop', label: '4. The stop: breath test, blood test, refusal' },
          { href: '#accidents', label: '5. If there was an accident' },
          { href: '#the-process', label: '6. What happens after: the criminal process' },
          { href: '#common-mistakes', label: '7. Common mistakes' },
        ]}
      />

      <h2 id="the-limit" className={H2}>
        1. The limit: 0.03% — lower than you think
      </h2>
      <p className={P}>
        How much alcohol is 0.03%? There is no safe formula — it depends on body weight, sex,
        food, timing, and metabolism — and that is precisely the point: at this threshold you
        cannot reliably drink <em>anything</em> and stay under. One glass of soju or one pint of
        beer is enough to put many people over, and being at 0.029% is luck, not judgment.
      </p>
      <p className={P}>
        The same threshold produces Korea&rsquo;s other trap:{' '}
        <Term ko="숙취운전">morning-after driving</Term>. Alcohol clears at a fixed rate; after a
        late, heavy night you can still be over 0.03% on the morning commute, and morning
        checkpoints exist. If the night ran long, the safe answer is transit, a taxi, or waiting.
      </p>
      <p className={P}>
        The practical alternative Koreans actually use is{' '}
        <Term ko="대리운전">designated-driver service</Term>: a driver comes to you, drives your
        own car home with you in it, and charges a modest fee arranged through an app or a phone
        call. Against a 0.03% limit, it is not a luxury — it is the system working as intended.
      </p>
      <figure className="my-6">
        <Image
          src="/assets/guides/dui-daeri.jpg"
          alt="Handing over car keys to a designated driver (대리운전) after drinking in Korea"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          Designated-driver services (대리운전) operate late into the night in every Korean city —
          a driver arrives within minutes and takes you home in your own car.
        </Caption>
      </figure>

      <h2 id="penalties" className={H2}>
        2. Criminal penalties by blood alcohol level
      </h2>
      <div className="my-6 overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full min-w-[560px] border-collapse">
          <thead className="bg-slate-50 border-b border-gray-200">
            <tr>
              <th className={TH}>Situation (first offense)</th>
              <th className={TH}>Statutory range</th>
              <th className={TH}>Basis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className={TD}>BAC 0.03% – under 0.08%</td>
              <td className={TD}>Up to 1 year imprisonment or fine up to ₩5,000,000</td>
              <td className={TD}>Road Traffic Act art. 148-2(3)3</td>
            </tr>
            <tr>
              <td className={TD}>BAC 0.08% – under 0.2%</td>
              <td className={TD}>1–2 years imprisonment or fine of ₩5,000,000–10,000,000</td>
              <td className={TD}>art. 148-2(3)2</td>
            </tr>
            <tr>
              <td className={TD}>BAC 0.2% or higher</td>
              <td className={TD}>2–5 years imprisonment or fine of ₩10,000,000–20,000,000</td>
              <td className={TD}>art. 148-2(3)1</td>
            </tr>
            <tr>
              <td className={TD}>Refusing the breath test</td>
              <td className={TD}>1–5 years imprisonment or fine of ₩5,000,000–20,000,000</td>
              <td className={TD}>art. 148-2(2)</td>
            </tr>
            <tr>
              <td className={TD}>Repeat offense within 10 years of a prior conviction</td>
              <td className={TD}>
                Aggravated ranges — up to 6 years imprisonment or fines up to ₩30,000,000
                depending on the level
              </td>
              <td className={TD}>art. 148-2(1)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={P}>
        Two things stand out. First, even the bottom tier is a genuine criminal offense that
        produces a criminal record — not a traffic ticket. Second, the refusal row sits at the
        level of a serious DUI: the law is written so that refusing measurement cannot be the
        better deal.
      </p>

      <h2 id="license" className={H2}>
        3. Your license: the second, faster track
      </h2>
      <p className={P}>
        Separately from the criminal case, the police commissioner acts against your license (Road
        Traffic Act art. 93): from 0.03% the license is <strong>suspended</strong>; from 0.08% —
        or on refusal, or with an accident — it is <strong>revoked</strong>. Revocation carries a
        waiting period before you can retake the license, commonly a year for a simple first
        offense and longer with accidents or repeat offenses.
      </p>
      <p className={P}>
        This administrative track moves faster than the criminal one and has its own remedies: an
        objection to the provincial police agency within <strong>60 days</strong> (art. 94), and
        an administrative appeal within <strong>90 days</strong> of learning of the disposition.
        Reinstatement arguments — livelihood dependence on driving, mitigating circumstances — are
        argued here, not in the criminal court. If driving is how you earn your living, these
        deadlines matter as much as the criminal case.
      </p>

      <p className={P}>
        Keep the two tracks apart in your head, because they do not wait for each other. The
        license action lands first and stands on its own: a light criminal outcome does not
        automatically soften it, and contesting one track does not pause the other. Treat them as
        two cases with two calendars — most people who miss a remedy here miss it because they
        assumed one decision would settle both.
      </p>

      <h2 id="the-stop" className={H2}>
        4. The stop: breath test, blood test, refusal
      </h2>
      <p className={P}>
        Korean police run both random checkpoints and targeted stops, and the law obliges a driver
        to comply with a breath measurement when there are reasonable grounds (art. 44(2)). If you
        dispute the breath result, you may promptly request a <strong>blood test</strong> — a
        right worth knowing, since breath machines have margins and the blood result then governs.
      </p>
      <Callout variant="warning" title="Refusing the test is not a strategy">
        Refusal is its own crime, punished at the level of a serious DUI (1–5 years or
        ₩5–20 million), and it usually costs the license too. People refuse imagining they are
        denying the police evidence; in practice they are converting an uncertain low-tier case
        into a certain high-tier one.
      </Callout>
      <p className={P}>
        Beyond the test itself, the usual interview rules apply: you can decline to answer
        substantive questions, you can have counsel involved, and you should not sign statements
        you cannot read. The interview mechanics are covered in{' '}
        <Link href="/guides/criminal-defense/received-a-police-summons" className={LINK}>
          Received a Police Summons
        </Link>
        .
      </p>

      <h2 id="accidents" className={H2}>
        5. If there was an accident
      </h2>
      <p className={P}>
        A DUI with a victim changes statutes entirely. Causing injury while driving in a state
        where normal driving was difficult due to alcohol is{' '}
        <Term ko="위험운전치사상">dangerous driving causing death or injury</Term> under the Act
        on Aggravated Punishment of Specific Crimes (art. 5-11): injury carries{' '}
        <strong>1–15 years imprisonment or a ₩10–30 million fine</strong>; death carries{' '}
        <strong>imprisonment for life or at least 3 years</strong>. Fleeing the scene aggravates
        further.
      </p>
      <p className={P}>
        In these cases the victim&rsquo;s position becomes central to the outcome, which makes
        settlement — <Term ko="합의">hapui</Term> — the main strategic question alongside the
        facts. How settlement works, its deadline, and the criminal-deposit fallback are covered
        in{' '}
        <Link href="/guides/criminal-defense/hapui-settlement-in-criminal-cases" className={LINK}>
          Settlement (합의) in Criminal Cases
        </Link>
        .
      </p>

      <h2 id="the-process" className={H2}>
        6. What happens after: the criminal process
      </h2>
      <p className={P}>
        A first, low-level DUI with no accident is commonly resolved by a{' '}
        <Term ko="약식명령">summary order</Term> — a fine imposed on the papers, without a trial.
        If you receive one, you have <strong>7 days from notice</strong> to demand a formal trial
        (Criminal Procedure Act art. 453); whether to accept the fine or contest is a real
        decision, because the conviction stands either way and repeat offenses within 10 years are
        punished on the aggravated scale. The order, the 7-day fork, and the payment machinery are
        covered in{' '}
        <Link href="/guides/criminal-defense/summary-orders-and-formal-trial" className={LINK}>
          Summary Orders (약식명령) and Formal Trial
        </Link>
        .
      </p>
      <p className={P}>
        Higher levels, refusals, repeat offenses, and accident cases go to ordinary prosecution,
        where outcomes range from fines through suspended sentences to imprisonment. What moves
        the needle: the measured level, any accident and its settlement, prior record, and how the
        period after the offense is used — treatment programs, no further driving, restitution.
        Nothing here is automatic in either direction, and no one can promise you a specific
        outcome.
      </p>

      <h2 id="common-mistakes" className={H2}>
        7. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Driving the morning after.</strong> The checkpoint at 8 a.m. does not care when
          you stopped drinking, only what the meter reads now.
        </li>
        <li>
          <strong>&ldquo;Just moving the car&rdquo; a few meters.</strong> Re-parking in the
          building lot after drinks is still driving; short distance is mitigation at best, not a
          defense.
        </li>
        <li>
          <strong>Sleeping it off in the driver&rsquo;s seat with the engine on.</strong> Whether
          that counts as driving turns on disputed facts you do not control. Sleep in the back, or
          better, not in the car.
        </li>
        <li>
          <strong>Riding an e-scooter home instead.</strong> The 0.03% rule covers personal
          mobility devices too — drunk riding draws a ₩100,000 on-the-spot fine and can still
          affect your license.
        </li>
        <li>
          <strong>Treating the fine as the end of it.</strong> The criminal fine, the license
          action, insurance consequences, and — for a foreign resident — the record&rsquo;s effect
          on your future plans are four separate bills for the same night.
        </li>
      </ul>

      <GuideDeadlines
        items={[
          {
            when: '60 days',
            what: 'To file an objection against the license suspension or revocation with the provincial police agency (Road Traffic Act art. 94).',
          },
          {
            when: '90 days',
            what: 'From learning of the license disposition, to file an administrative appeal (Administrative Appeals Act art. 27).',
          },
          {
            when: '7 days',
            what: 'From notice of a summary order, to demand a formal trial instead of accepting the fine (Criminal Procedure Act art. 453).',
          },
        ]}
      />
      <p className={P}>
        Start by collecting every paper you received — the measurement record, the license
        disposition notice, and any court mail — and check each one&rsquo;s date. All three clocks
        above run from those dates.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: "I'm USFK / SOFA personnel. Does any of this apply differently to me?",
            a: (
              <p>
                Possibly — notification and handling can differ depending on your status,
                including for SOFA personnel, and USFK maintains its own alcohol and driving
                policies with separate consequences on the military side. Clarify your situation
                with your unit&rsquo;s legal office and, for the Korean proceedings, with a Korean
                lawyer, before making decisions. The Korean statutes described here are the
                civilian framework.
              </p>
            ),
          },
          {
            q: 'Will a DUI affect my visa or my ability to stay in Korea?',
            a: (
              <p>
                A criminal outcome can affect your stay in Korea and future applications, so
                factor it into every decision from the start — including whether to contest the
                case and how seriously to treat what looks like &ldquo;just a fine.&rdquo; What it
                means for your specific status is a question to assess individually, not from a
                general rule.
              </p>
            ),
          },
          {
            q: 'Can I drive at all while the case is pending?',
            a: (
              <p>
                Check your license status before assuming anything: the administrative suspension
                or revocation usually takes effect long before the criminal case ends, and driving
                on a suspended license is a separate offense that makes everything worse. If the
                disposition notice has arrived, its dates — not the criminal timeline — control
                whether you may drive.
              </p>
            ),
          },
          {
            q: 'Is a first offense really punished, or is it warnings first?',
            a: (
              <p>
                There is no warning tier — 0.03% is an offense the first time. That said, the
                statutory range at the lowest level allows a fine, and a first, low-level,
                no-accident case is commonly resolved by a summary fine order. Aggravators —
                higher level, refusal, an accident, a prior — move outcomes up quickly, and none
                of this is guaranteed in any individual case.
              </p>
            ),
          },
          {
            q: 'The breathalyzer read just over the limit. Is that worth challenging?',
            a: (
              <p>
                Sometimes. Breath machines have tolerances, the timing of the measurement matters
                (alcohol levels rise for a while after drinking), and you had the right to demand
                a blood test at the scene. Marginal readings near a tier boundary — 0.03% or
                0.08% — are where technical challenges have the most to work with. Bring the
                measurement record to a consultation before deciding.
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
