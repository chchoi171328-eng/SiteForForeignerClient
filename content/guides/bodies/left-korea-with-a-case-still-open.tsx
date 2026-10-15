// Guide body: You Left Korea With a Case Still Open — Can You Come Back?
// Authored via the english-guide-writer skill workflow (#32, from-abroad series, ⚠ topic).
// Wording levels: exit-ban mechanics delegated to guide 27; wanted-status lookup is not
// described as a procedure; entry outcomes are not asserted; SOFA/visa at perspective level.
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
const TH = 'border border-gray-200 bg-slate-50 px-3 py-2 text-left text-sm font-bold text-navy-900'
const TD = 'border border-gray-200 px-3 py-2 text-sm text-gray-700 leading-relaxed align-top'
const LINK = 'text-navy-900 underline decoration-gold-400 underline-offset-2 hover:text-gold-600'

export default function LeftKoreaWithACaseStillOpen() {
  return (
    <>
      <Image
        src="/assets/guides/case-open-hero.jpg"
        alt="An empty airport arrivals corridor in morning light — a foreigner returning to Korea with an investigation still open meets the file at the border, or soon after"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            Leaving Korea does not close a criminal file. An investigation that cannot reach you
            is <strong>suspended, not ended</strong> — and it resumes the moment you are reachable
            again.
          </li>
          <li>
            Time abroad does not run out the clock: the limitation period{' '}
            <strong>stops</strong> for as long as a person stays abroad to avoid prosecution
            (Criminal Procedure Act art. 253(3)).
          </li>
          <li>
            A file can be <strong>flagged two ways</strong>: with an arrest warrant — issued where
            a suspect ignores or is expected to ignore a summons (art. 200-2) — or as a notice to
            report. Which one you are decides what the border looks like.
          </li>
          <li>
            Much can be settled <strong>before you fly</strong>: confirming the file&rsquo;s status
            through counsel, written statements, a settlement, and an arranged voluntary
            appearance — none of which guarantees the outcome, all of which shape it.
          </li>
          <li>
            Two traps for the absent: an indicted case can be <strong>tried without you</strong>{' '}
            after 6 months of failed service (Expedition Act art. 23), and once you are back, an
            exit ban can keep you here until it is resolved.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        A police matter was open when your contract ended, your posting changed, or you simply
        went home: a complaint you heard about second-hand, a summons you never answered, an
        interview that happened once and then went quiet. Months or years later a question
        surfaces — for a wedding, a job, a connecting flight — and it is the hardest one to ask
        anyone: <em>what is waiting for me if I land in Korea?</em>
      </p>
      <p className={P}>
        This guide answers it as precisely as the law allows and no further. The framework is
        the Criminal Procedure Act <span lang="ko">(형사소송법)</span>; the travel-restriction
        side — who can be stopped from leaving, and how — is its own subject, covered in{' '}
        <Link href="/guides/criminal-defense/exit-bans-during-investigation" className={LINK}>
          Exit Bans During Investigation
        </Link>
        . Here the questions are what happened to the file after you left, how it can be flagged,
        what the border actually does with that, and what you can do from abroad first.
      </p>
      <p className={P}>
        The one answer this guide will not give is a prediction for your case. The honest
        version is a map of the possibilities and the steps that narrow them.
      </p>

      <GuideToc
        items={[
          { href: '#the-file', label: '1. What happened to the file when you left' },
          { href: '#the-clock', label: '2. The clock does not run in your favour' },
          { href: '#flagged', label: '3. Wanted, or just flagged — and how to find out' },
          { href: '#the-border', label: '4. Coming back: what the border does, and what follows' },
          { href: '#before-you-fly', label: '5. What can be done from abroad before you fly' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="the-file" className={H2}>
        1. What happened to the file when you left
      </h2>
      <p className={P}>
        An investigation needs a reachable suspect. When the police cannot locate you — or know
        you to be abroad for an extended period — they do not close the case; they{' '}
        <Term ko="수사중지">suspend it (susa jungji)</Term>, and a file already with the
        prosecution office can likewise be placed on hold rather than decided. A suspended file
        is dormant, not dead: it carries the facts gathered so far and resumes when the reason
        for suspending it — your absence — ends.
      </p>
      <p className={P}>
        Suspension usually comes with a marker. Depending on the offence and on whether you
        ignored a summons, the file is entered in the police system either as a{' '}
        <Term ko="지명수배">wanted entry (jimyeong subae)</Term> backed by an arrest warrant, or
        as a <Term ko="지명통보">notice entry (jimyeong tongbo)</Term> with no warrant — an
        instruction to report that is served on you when you next come into contact with the
        system. Section 3 is about which is which; the point here is that silence from Korea
        after you left is not evidence that nothing was recorded.
      </p>

      <h2 id="the-clock" className={H2}>
        2. The clock does not run in your favour
      </h2>
      <p className={P}>
        Every Korean offence has a limitation period after which prosecution is barred, and a
        suspended file whose period expires is closed for that reason. The intuitive plan —
        stay away until it expires — meets a specific provision: the limitation period{' '}
        <strong>stops running</strong> for the whole time a person is abroad for the purpose of
        avoiding criminal punishment (Criminal Procedure Act art. 253(3)).
      </p>
      <p className={P}>
        The provision turns on purpose, which is exactly why no one can promise you either way.
        A person who left for an ordinary reason and later learned of a complaint is in a
        different position from one who left because of it — but the question of which you are
        is decided by an investigator or a court looking at the facts, not by you. Treat the
        clock as paused unless advised otherwise on your specific facts, and plan on the file
        being alive when you return.
      </p>

      <h2 id="flagged" className={H2}>
        3. Wanted, or just flagged — and how to find out
      </h2>
      <p className={P}>
        <strong>The warrant-backed entry.</strong> An arrest warrant may be issued where there is
        probable cause and the suspect, without justifiable reason, does not respond to a
        summons — or can be expected not to (art. 200-2(1)). A suspect who left after ignoring
        requests to appear fits that description. With a warrant on file, contact with the system
        — a traffic stop, an identity check, arrival at the border — means arrest. After an
        arrest, a detention warrant must be sought within <strong>48 hours</strong> or you are
        released (art. 200-2(5)).
      </p>
      <p className={P}>
        <strong>The notice entry.</strong> For lesser matters, or where no warrant has been
        sought, the file carries an instruction to report: when you surface, you are told to
        attend the investigating unit within a set period, and a warrant can follow if you do
        not. It is the more common outcome for the ordinary foreign resident&rsquo;s open case —
        and it still means the matter is waiting.
      </p>
      <figure className="my-6">
        <Image
          src="/assets/guides/case-open-desk.jpg"
          alt="A quiet meeting table with two empty chairs and a blank folder in morning light — a retained attorney confirms where a suspended Korean file stands before the client books a flight"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          There is no public database to check. What exists is the file at the investigating
          unit, and a retained attorney&rsquo;s ability to ask where it stands.
        </Caption>
      </figure>
      <p className={P}>
        <strong>Finding out.</strong> Two things can be confirmed from abroad. Whether a travel
        restriction has been imposed is something a retained attorney can check in person at the
        immigration office. Where the criminal file stands — suspended, flagged, decided — is
        learned from the unit handling it, which is a conversation counsel can generally have
        once appointed, not a lookup you can run yourself. Whether a warrant exists is part of
        that conversation. Expect it to take days, not minutes, and do it before the ticket.
      </p>

      <h2 id="the-border" className={H2}>
        4. Coming back: what the border does, and what follows
      </h2>
      <p className={P}>
        Three pictures cover most arrivals. <strong>Nothing flagged</strong>: you enter, and the
        file — if it still exists — resumes when the police learn you are reachable, typically
        through a summons to the address you register. <strong>A notice entry</strong>: you enter
        and are told to report within a set period; the interview you avoided is now scheduled.{' '}
        <strong>A warrant</strong>: you are arrested on arrival, the 48-hour clock in section 3
        starts, and whether you are detained or released pending the case is decided then — on
        facts that include what you did before flying (section 5).
      </p>
      <p className={P}>
        Two things follow regardless of the picture. First, once you are in Korea with an open
        investigation, the exit-ban mechanism of the other guide becomes available to the
        authorities — a return trip can turn into a stay until the matter is resolved, and you
        should plan the trip with that possibility priced in. Second, for a foreign national,
        entry itself is an immigration decision: the Immigration Act lists grounds on which entry
        can be refused, framed around public safety and order rather than pending cases as such
        (art. 11), and how a particular history is treated is not something this guide can
        predict. Factor it in; do not assume either way.
      </p>
      <p className={P}>
        Handling can also differ depending on your status, including for SOFA personnel —
        which channels are involved when a person covered by SOFA returns with a Korean matter
        open is exactly the kind of question to clarify first, through the command&rsquo;s legal
        resources and Korean counsel together.
      </p>

      <h2 id="before-you-fly" className={H2}>
        5. What can be done from abroad before you fly
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
              <td className={TD}>Confirming the file&rsquo;s status</td>
              <td className={TD}>Through a retained attorney — immigration office for travel restrictions, the investigating unit for the file.</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Written account and evidence</td>
              <td className={TD}>Prepared with counsel and submitted to the file before you return, so the first thing read is yours.</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Settlement with the complainant</td>
              <td className={TD}>Negotiated and documented by counsel; for complaint-only and wish-dependent offences it can end the case.</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Arranging a voluntary appearance</td>
              <td className={TD}>Counsel proposes a date and terms to the unit. It shapes how you are received; it does not undo an existing warrant.</td>
              <td className={TD}>The appearance itself — questioning as a suspect generally requires you here.</td>
            </tr>
            <tr>
              <td className={TD}>If you have been indicted</td>
              <td className={TD}>Counsel can receive documents and appear; a defendant unreachable for 6 months after failed service can be tried in absence (Expedition Act art. 23).</td>
              <td className={TD}>Usually, for trial — and a judgment entered in your absence may be reopened only on limited grounds (art. 23-2).</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={P}>
        The voluntary appearance deserves one more sentence. A suspect who comes back on an
        agreed date, with counsel, with a written account and — where the facts allow — a
        settlement already in the file, is a different person to the system from one who is
        found at a passport counter. It is not a guarantee against arrest where a warrant
        already exists, and no one should promise that; it is the strongest honest way to turn
        a wanted entry into a scheduled interview. The interview itself is covered in{' '}
        <Link href="/guides/criminal-defense/police-interview-rights-and-interpreters" className={LINK}>
          The Police Interview
        </Link>
        ; settlement in{' '}
        <Link href="/guides/criminal-defense/hapui-settlement-in-criminal-cases" className={LINK}>
          Settlement (합의) in Criminal Cases
        </Link>
        .
      </p>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Assuming time fixed it.</strong> The limitation clock is the one thing most
          likely to have been paused by your absence. Check; do not count.
        </li>
        <li>
          <strong>Flying in unannounced to &ldquo;see what happens.&rdquo;</strong> What happens
          is decided by a file you have not read, at a counter, without counsel. Read it first.
        </li>
        <li>
          <strong>Treating no news as no case.</strong> Suspension is silent by design. Mail to an
          address you left does not reach you, and the law has procedures for exactly that
          silence — including trial without you.
        </li>
        <li>
          <strong>Contacting the complainant yourself.</strong> Settlement talks run through
          counsel for a reason: a direct message from abroad can read as pressure and become a
          new problem.
        </li>
        <li>
          <strong>Booking a short trip with a hard return date.</strong> If the matter is live,
          plan for the possibility that leaving again is not in your hands.
        </li>
      </ul>
      <Callout variant="warning" title="Don't try to come in around the file">
        Entering under a different document or identity, or through a route chosen to avoid a
        flag, converts an open investigation into new criminal exposure and removes every
        option in section 5. The way back in is through the file, with counsel — not around it.
      </Callout>

      <GuideDeadlines
        items={[
          {
            when: 'While abroad to avoid prosecution',
            what: 'The limitation period stops running for the entire period (Criminal Procedure Act art. 253(3)) — do not plan on expiry.',
          },
          {
            when: '48 hours',
            what: 'After an arrest on a warrant — the window in which a detention warrant must be sought, failing which you are released (art. 200-2(5)).',
          },
          {
            when: '6 months',
            what: 'Of failed service after indictment — the point from which a first-instance trial can proceed without the defendant, except for the gravest offences (Expedition Act art. 23).',
          },
          {
            when: 'Before the first-instance judgment',
            what: 'The last point at which a settlement can end a complaint-only or wish-dependent case (Criminal Procedure Act art. 232).',
          },
        ]}
      />
      <p className={P}>
        Start with two facts you can establish from abroad: what the complaint was, and whether
        you ever received a summons. Those two decide which of the pictures in section 4 is most
        likely yours.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'I never received a summons. Does that mean I’m not a suspect?',
            a: (
              <p>
                It means a summons did not reach you — which, for someone who left Korea, is
                the expected result rather than a finding. A complaint can be filed, a file
                opened, and a suspension entered without any of it reaching an address abroad.
                The only way to turn &ldquo;I heard nothing&rdquo; into &ldquo;there is
                nothing&rdquo; is to have counsel ask the unit that would hold the file.
              </p>
            ),
          },
          {
            q: 'Can I settle with the other side from abroad and make the case go away?',
            a: (
              <p>
                For offences prosecutable only on complaint, or not against the victim&rsquo;s
                wish — ordinary assault and threats among them — a settlement with a written
                withdrawal or non-punishment statement ends the case, and it can be negotiated
                and documented entirely from abroad through counsel. For other offences it does
                not end the case but weighs heavily on what happens to it. Either way, the
                statement is signed when the settlement money has actually been paid.
              </p>
            ),
          },
          {
            q: 'If I come back for a week, will I be allowed to leave again?',
            a: (
              <p>
                Possibly not, if the matter is live: once you are in Korea with an open
                investigation, a departure suspension can be requested on that ground, and a
                planned week can become a stay until the case is resolved. The mechanics —
                grounds, time limits, notice, objection — are the subject of the Exit Bans
                guide. Plan the trip so that outcome is survivable, or resolve as much as
                possible before it.
              </p>
            ),
          },
          {
            q: 'I’m covered by SOFA. Does any of this apply if I return on orders?',
            a: (
              <p>
                Notification and handling can differ depending on your status, including for
                SOFA personnel — which channels are involved when a person covered by SOFA
                returns with a Korean matter open is exactly what to clarify first, through the
                command&rsquo;s legal resources and Korean counsel. This guide describes the
                general Criminal Procedure Act mechanism; how it interacts with a particular
                status is case-specific.
              </p>
            ),
          },
          {
            q: 'Will a case that was still open affect my visa or a future entry?',
            a: (
              <p>
                A pending or past criminal matter can affect your stay in Korea and can be
                weighed in immigration decisions, including entry; factor it into your
                decisions from the start rather than treating the criminal file as the only
                stake. Resolving the file — by settlement, a decision not to charge, or a
                completed case — generally puts you in a clearer position than leaving it
                suspended.
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
