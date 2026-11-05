// Guide body: Divorcing a Korean Spouse While You Live Abroad
// Authored via the english-guide-writer skill workflow (#39, from-abroad series).
// Direction (user, 2026-11-05): consensual divorce needs personal attendance, so the
// workable routes from abroad are mediated and judicial divorce; and the mediation
// record can carry nearly every agreed term, which is what prevents follow-on disputes.
// Attendance (Family Litigation Act art. 7) and video mediation (Civil Mediation Rules
// art. 6-2) written as permission, not entitlement. Consular consensual divorce for a
// foreign spouse: sources conflict → written as unreliable, not impossible.
// Statutes verified — see REVIEW-GUIDES.md.

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

export default function DivorcingAKoreanSpouseFromAbroad() {
  return (
    <>
      <Image
        src="/assets/guides/divorce-abroad-hero.jpg"
        alt="A closed laptop, a phone and a folded blank document on a desk by a window at dusk — a spouse abroad can run a Korean divorce through counsel, with one trip at most"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            A Korean court can hear your divorce while you live abroad: a spouse whose habitual
            residence is in Korea can be sued there (Act on Private International Law art. 3),
            and custody and support claims travel with the case (art. 6).
          </li>
          <li>
            <strong>Consensual divorce is the wrong tool from abroad.</strong> It is built
            around two personal appearances by both spouses, and its consular variant is
            designed for Korean nationals. Do not plan around it.
          </li>
          <li>
            <strong>Mediated divorce fits.</strong> Your attorney applies under a power of
            attorney; the court can permit a representative to appear for you, and some courts
            hold the session by video. The record is final when drawn up.
          </li>
          <li>
            The record can hold <strong>almost every term you agree</strong> — property,
            payments, custody, support, long-distance visitation, travel consent — each
            enforceable as a judgment. That is what stops the dispute from continuing after the
            divorce.
          </li>
          <li>
            If your spouse will not agree, <strong>judicial divorce</strong> runs from abroad
            on the same basis: counsel files, appearance is by permission, and a judgment ends
            it without anyone&rsquo;s cooperation.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        You married a Korean national, the marriage ran its course, and you are now back in
        your own country while your spouse stays in Korea. You may have heard that a Korean
        divorce requires two appearances, together, at the family court — and concluded that
        the whole thing has to wait for a trip neither of you is planning.
      </p>
      <p className={P}>
        That is true of one route and false of the other two. Korea has three ways to end a
        marriage: <Term ko="협의이혼">consensual divorce (hyeobui ihon)</Term>, which does need
        both of you in the courtroom; <Term ko="조정이혼">mediated divorce (jojeong ihon)</Term>,
        where the family court records your agreement with the force of a judgment; and
        judicial divorce, where the court decides. The second and third can be run from
        abroad through a Korean attorney, with one trip at most and sometimes none.
      </p>
      <p className={P}>
        This guide is about doing that: which route works from a distance, how attendance is
        handled, and why the mediation record — if you use it fully — is the thing that keeps
        a long-distance divorce from turning into a long-distance argument. The general
        comparison of the two agreement routes is in{' '}
        <Link href="/guides/divorce-family-law/consensual-vs-mediated-divorce" className={LINK}>
          Consensual vs. Mediated Divorce
        </Link>
        .
      </p>

      <GuideToc
        items={[
          { href: '#jurisdiction', label: '1. Can a Korean court divorce you while you live abroad?' },
          { href: '#consensual', label: '2. Why consensual divorce usually fails from abroad' },
          { href: '#mediated', label: '3. Mediated divorce from abroad: the route that fits' },
          { href: '#the-record', label: '4. What goes in the record — and why it ends the fighting' },
          { href: '#judicial', label: '5. If your spouse will not agree: judicial divorce from abroad' },
          { href: '#from-abroad', label: '6. What can be done from abroad — and what needs you in Korea' },
          { href: '#common-mistakes', label: '7. Common mistakes' },
        ]}
      />

      <h2 id="jurisdiction" className={H2}>
        1. Can a Korean court divorce you while you live abroad?
      </h2>
      <p className={P}>
        Yes, where your spouse lives in Korea. A person whose habitual residence is in Korea
        can be sued there (Act on Private International Law art. 3), and the Act adds grounds
        for marriage cases — among them a couple whose last shared home was in Korea while one
        spouse still lives there (art. 56). Custody, child support and property division can be
        brought in the same case (art. 6). Agreement between spouses cannot create jurisdiction
        in these cases (art. 13), so the grounds have to exist on the facts.
      </p>
      <p className={P}>
        Whether to divorce in Korea or at home is a separate question — which law the court
        applies, and how each country recognises the other&rsquo;s divorce, are covered in{' '}
        <Link href="/guides/divorce-family-law/which-countrys-court-international-divorce" className={LINK}>
          Which Country&rsquo;s Court?
        </Link>
        . The practical case for Korea is usually that the spouse, the assets and the
        enforcement tools are all there.
      </p>

      <h2 id="consensual" className={H2}>
        2. Why consensual divorce usually fails from abroad
      </h2>
      <p className={P}>
        Consensual divorce confirms a divorce the two of you have agreed, after a cooling-off
        period of 3 months with minor children or 1 month without (Civil Act art. 836-2). Its
        design assumes both spouses in the family court together: once for the guidance
        session, once for the confirmation. There is a consular variant, in which a spouse
        abroad declares the intention at a Korean embassy or consulate and the court in Korea
        completes the confirmation — but it was built for Korean nationals living abroad, and
        whether a foreign spouse can use it is not answered the same way by every source. Some
        practitioners treat it as available; others steer foreign spouses away from it. Plan on
        it being unreliable.
      </p>
      <p className={P}>
        There is a second, quieter problem. Even where it works, consensual divorce records
        only the divorce and, with children, custody and child support. Your property split,
        any lump sum, visitation across borders — none of it is in the court&rsquo;s document.
        For a couple on different continents, a private agreement with no enforcement behind it
        is a poor foundation. The route that avoids the trip is also the route that records
        more.
      </p>

      <h2 id="mediated" className={H2}>
        3. Mediated divorce from abroad: the route that fits
      </h2>
      <p className={P}>
        <Term ko="가사조정">Family mediation (gasa jojeong)</Term> is a session at the family
        court where the court records what the spouses agree; the completed record has the
        force of a settlement in court (Family Litigation Act art. 59). There is no cooling-off
        period and no second appearance. From abroad, it runs like this.
      </p>
      <GuideFlow
        steps={[
          {
            title: 'Power of attorney and the terms',
            body: 'Legalised where you live. With it, a draft of the terms: property, any payment, custody, support, visitation, travel consent — the fuller the draft, the shorter the session.',
          },
          {
            title: 'Application and the attendance question',
            body: 'Your attorney files the mediation application (fee ₩5,000, Family Litigation Fee Rules art. 6). Family courts apply a party-appearance rule (art. 7): you attend in person unless the judge permits a representative for a special reason, which living abroad commonly is — applied for in advance, with proof of residence. Some courts also hold the session by video where the judge finds it appropriate (Civil Mediation Rules art. 6-2). Both are permissions, not entitlements.',
          },
          {
            title: 'The session',
            body: 'Terms are read through, adjusted and entered in the record. Where you attend by video or through counsel, the court confirms your agreement to each term before closing.',
          },
          {
            title: 'Record and report',
            body: 'The divorce takes effect when the record is drawn up. Your attorney reports it to the registration office within 1 month (Family Relations Registration Act art. 78 applying art. 58) and obtains the certified record you will need abroad.',
          },
        ]}
      />
      <p className={P}>
        Two honest limits. Mediation needs your spouse at the table: if they will not attend
        or agree, the mediation fails and the case converts into a divorce suit, deemed filed
        on the application date (art. 49, applying Civil Mediation Act art. 36). And
        permission to appear through counsel or by video is the judge&rsquo;s call; a court
        that insists on your presence means one trip, timed to the session.
      </p>
      <figure className="my-6">
        <Image
          src="/assets/guides/divorce-abroad-mediation.jpg"
          alt="A round mediation table with one chair pulled out and a blank monitor on a stand — some Korean family courts hold mediation sessions by video for a spouse abroad, with the judge's permission"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          Attendance from abroad is permission, not a right: a representative with the
          judge&rsquo;s leave, or a video session where the court allows it, applied for before
          the date.
        </Caption>
      </figure>

      <h2 id="the-record" className={H2}>
        4. What goes in the record — and why it ends the fighting
      </h2>
      <p className={P}>
        The mediation record can carry almost everything the two of you can lawfully agree
        (art. 59 — matters the parties cannot dispose of by agreement are the exception, and
        the court reviews terms about children against the child&rsquo;s welfare). Used fully,
        it settles in one document what a consensual divorce leaves to goodwill:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Property and money</strong> — who keeps the apartment or the jeonse deposit,
          transfers with dates, any lump sum or alimony with amounts and a payment schedule,
          who bears which debts and costs.
        </li>
        <li>
          <strong>Children</strong> — custody and parental authority, monthly support with
          amount, day and end date, who pays school or medical costs beyond it.
        </li>
        <li>
          <strong>Visitation designed for distance</strong> — scheduled video calls, holiday
          visits with who travels and who pays, handover arrangements, what happens when a
          flight falls through.
        </li>
        <li>
          <strong>Travel and relocation</strong> — consent for the child&rsquo;s passport and
          international travel, and the procedure if either parent wants to move.
        </li>
      </ul>
      <p className={P}>
        Each term, once in the record, is enforceable as a judgment: a transfer that does not
        happen is enforced, not re-litigated; support unpaid for two months can be deducted at
        source from a salary in Korea (Family Litigation Act art. 63-2); a performance order
        with fines sits behind the rest (arts. 64, 67). That is what &ldquo;ending the
        dispute&rdquo; means in practice: the questions that usually resurface a year later —
        the deposit, the holidays, the travel consent — have already been answered in a
        document the court will act on, from either side of the ocean.
      </p>

      <h2 id="judicial" className={H2}>
        5. If your spouse will not agree: judicial divorce from abroad
      </h2>
      <p className={P}>
        Where there is no agreement, or a mediation fails, the case is a divorce suit on one
        of the statutory grounds (Civil Act art. 840) — set out in{' '}
        <Link href="/guides/divorce-family-law/divorce-in-korea-consensual-vs-judicial" className={LINK}>
          Divorce in Korea: Consensual vs. Judicial
        </Link>
        . Your attorney files and runs it under the power of attorney; service on a spouse in
        Korea is routine. The party-appearance rule applies to hearings as to mediation (art.
        7): permission for a representative is applied for, and a court may still want you
        present for a stage — a family-court investigator&rsquo;s interview where custody is
        contested, or the final hearing. Expect the possibility of one trip, planned around
        the dates the court sets.
      </p>
      <p className={P}>
        The court will almost always send the case to mediation first anyway (art. 50), so a
        suit filed from abroad often ends in the same recorded settlement described above,
        now under the pressure of a filed case. A judgment, where it comes to that, takes
        effect on finality and is reported within 1 month, again by counsel. The timeline is
        longer — months to over a year — and that is the cost of the other side&rsquo;s refusal,
        not of the distance.
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
              <td className={TD}>Consensual divorce (guidance and confirmation)</td>
              <td className={TD}>Consular variant exists for Korean nationals; unreliable for a foreign spouse.</td>
              <td className={TD}>Yes, in practice — twice, together.</td>
            </tr>
            <tr>
              <td className={TD}>Power of attorney, documents, draft terms</td>
              <td className={TD}>Legalised where you live; marriage records and translations gathered.</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Mediation application and session</td>
              <td className={TD}>Filed by counsel. Representative with the judge&rsquo;s permission, or video where the court allows.</td>
              <td className={TD}>Sometimes — if permission is refused, one trip timed to the session.</td>
            </tr>
            <tr>
              <td className={TD}>Divorce suit: filing, hearings</td>
              <td className={TD}>Filed and argued by counsel; appearance by permission.</td>
              <td className={TD}>Possibly, for an investigator&rsquo;s interview or a hearing the court wants you at.</td>
            </tr>
            <tr>
              <td className={TD}>Report of the divorce; certified record</td>
              <td className={TD}>By counsel, within 1 month.</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Enforcing the record (transfers, support)</td>
              <td className={TD}>Applications filed by counsel; funds to your account abroad.</td>
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
          <strong>Waiting for a trip to start a consensual divorce.</strong> The trip never
          fits, and the terms you agreed informally drift. Mediation can be applied for now.
        </li>
        <li>
          <strong>Putting only the divorce in the record.</strong> A record that says
          &ldquo;the parties divorce&rdquo; and nothing else has thrown away the one advantage
          of the route.
        </li>
        <li>
          <strong>Visitation written for people in the same city.</strong> &ldquo;Every other
          weekend&rdquo; is meaningless across an ocean. Write calls, holidays, travel and who
          pays.
        </li>
        <li>
          <strong>Assuming attendance is solved.</strong> Permission for a representative or a
          video session is applied for in advance with evidence of where you live; a court can
          still require you.
        </li>
        <li>
          <strong>Leaving your home country out.</strong> Get the certified record and check
          with your own authorities what they need to recognise the divorce — before the
          session, not after.
        </li>
      </ul>
      <Callout variant="warning" title="Do not move the child first and settle later">
        Taking a child across borders ahead of an agreement, or in breach of one, can be
        treated as wrongful removal and create separate legal problems that outlast the
        divorce. Travel and relocation belong in the record, agreed, before anyone books a
        flight.
      </Callout>

      <GuideDeadlines
        items={[
          {
            when: 'Before the date',
            what: 'Permission for a representative to appear, or for a video session — applied for ahead of the mediation or hearing date with proof of residence abroad (Family Litigation Act art. 7).',
          },
          {
            when: '1 month',
            what: 'From a completed mediation or a final judgment — the window to report the divorce (Family Relations Registration Act art. 78 applying art. 58).',
          },
          {
            when: '2 weeks',
            what: 'From service of a decision in lieu of mediation — the time to object before it becomes final (Civil Mediation Act art. 34).',
          },
          {
            when: '2 years',
            what: 'From the divorce — the limit for a property-division claim not already settled in the record (Civil Act art. 839-2).',
          },
        ]}
      />
      <p className={P}>
        Start with the terms, not the ticket. A full draft of what you both want in the record
        is the thing that shortens everything that follows.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'Will I have to come to Korea at all?',
            a: (
              <p>
                For a mediated divorce, often not: counsel applies for permission to appear for
                you, or for a video session, and courts commonly grant it to a spouse abroad.
                It remains the judge&rsquo;s decision, so the honest answer is &ldquo;probably
                not, plan for possibly once.&rdquo; A contested suit raises the odds,
                particularly where custody is in dispute.
              </p>
            ),
          },
          {
            q: 'Can my spouse in Korea get a consensual divorce without me?',
            a: (
              <p>
                No. Consensual divorce requires both spouses&rsquo; confirmed intention; one
                spouse cannot complete it alone. What your spouse can do alone is file a
                divorce suit against you — in which case you will be served abroad and the
                case runs as a judicial divorce with you as defendant. Respond through counsel
                rather than ignoring it.
              </p>
            ),
          },
          {
            q: 'The children live with me abroad. Can a Korean court decide custody?',
            a: (
              <p>
                Custody and support can be brought with the divorce (Act on Private
                International Law art. 6), and a record that fixes them is enforceable in
                Korea. How the terms are recognised and enforced in your own country depends
                on its rules; where the children live abroad, the record is usually written so
                that it works there too, and checked against local advice before the session.
              </p>
            ),
          },
          {
            q: 'We agree on everything. Why not just sign a private agreement and divorce later?',
            a: (
              <p>
                Because a private agreement has no enforcement behind it and the divorce it
                anticipates has not happened. If your spouse later changes position, you are
                left suing on a contract from abroad. The same terms entered in a mediation
                record are enforceable from the day they are written, and the divorce is done.
              </p>
            ),
          },
          {
            q: 'How long does it take from abroad?',
            a: (
              <p>
                Mediation: drafting takes as long as you take; the court date commonly follows
                within weeks to a couple of months, and the divorce is effective that day. A
                suit runs months to over a year. Distance adds document legalisation and,
                occasionally, service time — not much else.
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
