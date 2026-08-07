// Guide body: Which Country's Court? (international divorce jurisdiction)
// Authored via the english-guide-writer skill workflow (guide-production Phase 1, #7).
// Statute references verified against casenote.kr / law.go.kr — see REVIEW-GUIDES.md.

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
const LINK = 'text-navy-900 underline decoration-gold-400 underline-offset-2 hover:text-gold-600'

export default function WhichCountrysCourtInternationalDivorce() {
  return (
    <>
      <Image
        src="/assets/guides/jurisdiction-hero.jpg"
        alt="The view from an airplane window between two countries — international divorce starts with deciding which country's court hears the case"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            In an international divorce, <strong>where you file changes the outcome</strong> —
            property rules, support, speed, and whether the judgment can actually be enforced.
          </li>
          <li>
            Korean courts can hear a divorce when the case has the right connection to Korea —
            most commonly when <strong>the couple&rsquo;s life together was based here</strong>, or
            the plaintiff lives here with the children (Act on Private International Law art. 56).
          </li>
          <li>
            A Korean court does not automatically apply Korean law: the governing law follows a{' '}
            <strong>statutory ladder</strong> — but if one spouse is a Korean national living in
            Korea, <strong>Korean law applies</strong>.
          </li>
          <li>
            A foreign court&rsquo;s divorce judgment is recognized in Korea{' '}
            <strong>without a re-trial</strong> if four conditions are met — jurisdiction, proper
            service, public policy, and reciprocity.
          </li>
          <li>
            Before filing anywhere, check <strong>both ends</strong>: the forum that hears you,
            and the country that must later respect the result.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        International divorce jurisdiction sounds like an academic topic until the day it decides
        your case: a couple with two nationalities, or one nationality and two countries of
        residence, can often divorce in more than one legal system — and the systems do not treat
        money, children, or time the same way. The question &ldquo;which country&rsquo;s
        court?&rdquo; is not paperwork. It is strategy.
      </p>
      <p className={P}>
        In Korea the answers live mainly in the{' '}
        <strong>Act on Private International Law</strong> <span lang="ko">(국제사법)</span>, which
        sets when Korean courts have jurisdiction over a marriage case and which country&rsquo;s
        law they apply, and in the Civil Procedure Act&rsquo;s rules on recognizing foreign
        judgments. This guide walks through the three questions in order: can Korea hear it, whose
        law governs, and what a divorce from somewhere else is worth here.
      </p>

      <GuideToc
        items={[
          { href: '#why-forum-matters', label: '1. Why the forum matters' },
          { href: '#korean-jurisdiction', label: '2. When Korean courts can hear your divorce' },
          { href: '#applicable-law', label: "3. Which country's law applies in a Korean courtroom" },
          { href: '#foreign-divorce-recognition', label: '4. A divorce from abroad: does Korea recognize it?' },
          { href: '#choosing-forum', label: '5. Choosing the forum: practical factors' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="why-forum-matters" className={H2}>
        1. Why the forum matters
      </h2>
      <p className={P}>
        Legal systems answer the same divorce differently. Some divide all marital property near
        the middle; others weigh contribution. Some award ongoing spousal support for years;
        Korean practice centers on one-time property division and a separate solatium payment.
        Procedures differ too — Korea requires mediation before a divorce trial, and its
        litigation costs are modest by common-law standards.
      </p>
      <p className={P}>
        Enforcement is the quieter half of the question. A judgment is worth what it can reach:
        if the assets are an apartment in Gyeonggi-do and a Korean salary, a Korean judgment
        reaches them directly, while a foreign one must first be recognized and enforced here.
        Reverse the geography and the logic reverses with it.
      </p>

      <h2 id="korean-jurisdiction" className={H2}>
        2. When Korean courts can hear your divorce
      </h2>
      <p className={P}>
        The Act gives Korean courts jurisdiction over a matrimonial case against one spouse in
        these situations (art. 56(1)):
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          One spouse&rsquo;s <Term ko="일상거소">habitual residence</Term> is in Korea, and the
          couple&rsquo;s <strong>last common habitual residence was in Korea</strong>;
        </li>
        <li>
          The <strong>plaintiff and all or some of the minor children</strong> have their habitual
          residence in Korea;
        </li>
        <li>
          <strong>Both spouses are Korean nationals</strong>;
        </li>
        <li>
          The plaintiff is a <strong>Korean national habitually resident in Korea</strong> and the
          claim seeks only dissolution of the marriage.
        </li>
      </ul>
      <p className={P}>
        &ldquo;Habitual residence&rdquo; means the place where your daily life is actually based —
        in practice, living in a place for a substantial period with your life centered there. For
        most readers of this site the practical takeaway is simple: a couple whose married life
        ran its course in Korea can litigate its end in Korea, whatever their passports say — and
        a foreign spouse living here with the children usually can, too.
      </p>

      <h2 id="applicable-law" className={H2}>
        3. Which country&rsquo;s law applies in a Korean courtroom
      </h2>
      <p className={P}>
        Jurisdiction and governing law are separate questions. A Korean court hearing an
        international divorce chooses the applicable law by a ladder (art. 66, applying art. 64):
        first the spouses&rsquo; <strong>shared nationality law</strong>; failing that, their{' '}
        <strong>shared habitual-residence law</strong>; failing that, the law of the place{' '}
        <strong>most closely connected</strong> to the marriage. One proviso overrides the ladder:
        if either spouse is a Korean national with habitual residence in Korea,{' '}
        <strong>Korean law governs the divorce</strong>.
      </p>
      <p className={P}>
        Run the ladder on the common cases. A Korean–foreign couple living in Korea: Korean law,
        by the proviso. Two nationals of the same foreign country living in Korea: their shared
        national law — meaning a Korean court may find itself applying, say, U.S. state law or
        Vietnamese law to the divorce itself, with the parties helping prove what that law says.
        A couple with nothing shared: closest connection, argued on the facts.
      </p>
      <Callout title="Foreign law in a Korean court is workable — but plan for it">
        Korean courts do try cases under foreign law, and evidence of that law becomes part of the
        case. It adds time and translation cost, and outcomes track the foreign rule, not Korean
        habit. If the ladder points abroad, that is a factor in choosing your forum, not a reason
        to panic.
      </Callout>

      <h2 id="foreign-divorce-recognition" className={H2}>
        4. A divorce from abroad: does Korea recognize it?
      </h2>
      <p className={P}>
        Korea recognizes a foreign court&rsquo;s final divorce judgment{' '}
        <strong>automatically — no new lawsuit, no re-trial</strong> — when four conditions are
        met (Civil Procedure Act art. 217): the foreign court had proper international
        jurisdiction; the losing party was properly served (not by public notice) or appeared
        anyway; recognition does not offend Korean public policy; and reciprocity exists between
        the two systems for judgments of that kind.
      </p>
      <p className={P}>
        Recognition being automatic does not mean the paperwork does itself. Where a Korean
        national is involved, the divorce must still be reported into the Korean family register
        with the judgment documents, or the register will go on showing a marriage that no longer
        exists — a mismatch that resurfaces at remarriage, inheritance, and visa renewals.
        Divorces that were not court judgments — administrative or registry divorces some
        countries offer — sit less neatly in these rules; have one checked before relying on it in
        Korea.
      </p>
      <p className={P}>
        The mirror image deserves equal care: whether your home country will respect a Korean
        divorce — including a consensual one confirmed by the family court — is a question for
        your embassy or a home-country lawyer, asked <em>before</em> you choose the Korean route,
        not after.
      </p>

      <h2 id="choosing-forum" className={H2}>
        5. Choosing the forum: practical factors
      </h2>
      <figure className="my-6">
        <Image
          src="/assets/guides/jurisdiction-map.jpg"
          alt="A blank notebook and desk globe — mapping nationalities, residences, and assets before choosing a divorce forum"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          One page decides most forum questions: each spouse&rsquo;s nationality and habitual
          residence, the children&rsquo;s residence, and the assets listed by country.
        </Caption>
      </figure>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Where the assets are.</strong> Judgments enforce best where the property sits.
          List the assets by country before comparing anything else.
        </li>
        <li>
          <strong>Where the children live.</strong> Custody and support orders work best in the
          children&rsquo;s day-to-day jurisdiction, and courts weigh the children&rsquo;s settled
          life heavily.
        </li>
        <li>
          <strong>Which substantive rules favor your facts</strong> — property division,
          support duration, fault — compared honestly across the candidate systems, with the
          governing-law ladder in mind.
        </li>
        <li>
          <strong>Speed, cost, and language</strong> — including whether you can litigate where
          you do not live, and what that does to your visa, work, and childcare in the meantime.
        </li>
        <li>
          <strong>Parallel proceedings.</strong> When both spouses file in different countries,
          Korean law has rules for handling the overlap, and being second to file is not
          automatically fatal — but the overlap itself burns money. If a race is starting, get
          advice at once.
        </li>
      </ul>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Assuming the wedding country controls.</strong> Where you married matters far
          less than where the marriage was lived and where its assets and children are now.
        </li>
        <li>
          <strong>Divorcing abroad and leaving Korea un-updated.</strong> The family register, the
          apartment title, the unfiled property claim — loose Korean ends surface years later at
          the worst moments.
        </li>
        <li>
          <strong>Checking only one end.</strong> A forum that hears you quickly but produces a
          judgment your home country ignores has solved half your problem, sometimes the cheaper
          half.
        </li>
        <li>
          <strong>Moving children across borders unilaterally</strong> while the case is
          unresolved. Beyond the harm to the children, it can create serious legal problems of its
          own and colors every later custody decision.
        </li>
        <li>
          <strong>Letting deadlines run while you compare forums.</strong> The comparison is worth
          weeks, not years — the money claims below have clocks.
        </li>
      </ul>

      <GuideDeadlines
        items={[
          {
            when: '2 years from divorce',
            what: 'Where Korean law governs the money: the property-division claim must be filed at the family court within 2 years (Civil Act art. 839-2(3)) — including after a divorce obtained abroad, so do not sit on it.',
          },
          {
            when: 'Sooner than that',
            what: 'Solatium runs on a shorter limitation clock than property division — treat it as the earlier alarm.',
          },
          {
            when: 'Promptly after a foreign judgment',
            what: 'Report a recognized foreign divorce into the Korean family register where a Korean national is involved — the register does not update itself.',
          },
        ]}
      />
      <p className={P}>
        Start with a one-page map: each spouse&rsquo;s nationality and habitual residence, the
        children&rsquo;s residence, and the assets by country. Every question in this guide is
        answered off that map.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'We are both foreigners living in Korea. Can we divorce here?',
            a: (
              <p>
                Usually yes — a couple whose life together was based in Korea fits the
                jurisdiction rules, most directly where one spouse still lives here and Korea was
                your last common home, or where the plaintiff lives here with the children. Which
                country&rsquo;s <em>law</em> the Korean court then applies is the separate ladder
                question in section 3 — for a same-nationality couple, often your home
                country&rsquo;s law.
              </p>
            ),
          },
          {
            q: 'My spouse already filed for divorce in another country. Is it too late to file in Korea?',
            a: (
              <p>
                Not automatically — Korean law has rules for parallel international proceedings,
                and the first filing does not always win everything. But these situations are
                time-sensitive in both directions: responding properly abroad matters as much as
                filing here. Treat an overseas filing as an urgent reason to get advice, not a
                closed door.
              </p>
            ),
          },
          {
            q: 'We divorced by mutual agreement at a city office abroad. Does Korea accept that?',
            a: (
              <p>
                Court judgments travel best — the automatic recognition rules are written for
                them. Administrative and registry divorces exist in several countries and are
                often workable in Korea, but they sit less neatly in the recognition framework and
                the answer can depend on the country and the paperwork. Have it checked before
                you remarry, buy property, or renew a visa on the strength of it.
              </p>
            ),
          },
          {
            q: 'Does filing in Korea affect my visa while the case runs?',
            a: (
              <p>
                A divorce — wherever filed — can affect a stay that is based on the marriage, and
                the timing of the two processes can interact. Factor your status into the forum
                decision from the start and have it assessed for your specific situation; it is
                one of the practical factors in section 5, not an afterthought.
              </p>
            ),
          },
          {
            q: 'Which forum is cheaper?',
            a: (
              <p>
                Korean family litigation is generally inexpensive by common-law standards — court
                fees are modest and mediation resolves many cases before a full trial. But a cheap
                forum that cannot reach the assets, or whose judgment needs a second round of
                enforcement litigation abroad, is not cheap overall. Price the whole path,
                including recognition and enforcement, not the filing fee.
              </p>
            ),
          },
        ]}
      />

      <p className={P + ' mt-8'}>
        Once the forum question points to Korea, the procedure itself — consensual versus
        judicial, mediation, and the money decided alongside — is covered step by step in{' '}
        <Link href="/guides/divorce-family-law/divorce-in-korea-consensual-vs-judicial" className={LINK}>
          Divorce in Korea: Consensual vs. Judicial
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
