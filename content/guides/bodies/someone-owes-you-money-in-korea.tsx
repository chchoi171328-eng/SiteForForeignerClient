// Guide body: Someone Owes You Money in Korea
// Authored via the english-guide-writer skill workflow (guide-production Phase 3, #24).
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
const LINK = 'text-navy-900 underline decoration-gold-400 underline-offset-2 hover:text-gold-600'

export default function SomeoneOwesYouMoneyInKorea() {
  return (
    <>
      <Image
        src="/assets/guides/owed-money-hero.jpg"
        alt="An open blank ledger and a pen on a desk — recovering a debt in Korea runs from demand letter to court title to enforcement"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            Debt recovery in Korea is a <strong>sequence, not a single lawsuit</strong>: prove the
            debt, get a court title, find the assets, then seize them. Each step has its own tool.
          </li>
          <li>
            Two questions come before everything: is the claim still <strong>within its
            limitation period</strong>, and does the debtor <strong>have anything to take</strong>?
          </li>
          <li>
            Once you hold a final judgment or payment order, the court can force the debtor to{' '}
            <strong>disclose assets under oath</strong> — lying is a crime, and refusing can mean
            detention (Civil Execution Act arts. 61, 68).
          </li>
          <li>
            The court can also <strong>search banks and registries directly</strong> (art. 74) and
            put a non-paying debtor on the <strong>defaulters&rsquo; list</strong>, which follows
            their credit (art. 70).
          </li>
          <li>
            Unpaid money is normally a <strong>civil matter</strong> — the criminal fraud route
            exists only where there was deception from the start, and misusing it creates
            problems of its own.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        A friend borrowed for a &ldquo;temporary&rdquo; emergency two years ago. A business
        partner took your share and went quiet. A customer received the goods and stopped
        answering. The Korean legal system has a well-worn road for all of these — but it is a
        road with stages, and people lose money not because the tools are missing but because
        they start at the wrong stage or stop halfway.
      </p>
      <p className={P}>
        The framework is the <strong>Civil Execution Act</strong>{' '}
        <span lang="ko">(민사집행법)</span> working together with the civil-procedure tools this
        site&rsquo;s litigation guides cover: the demand letter, the payment order, the lawsuit.
        What this guide adds is the map that connects them — and the part most people have never
        heard of: how to make a debtor who says &ldquo;I have nothing&rdquo; prove it under oath.
      </p>

      <GuideToc
        items={[
          { href: '#two-questions', label: '1. The two questions that come first' },
          { href: '#the-map', label: '2. The recovery map' },
          { href: '#getting-a-title', label: '3. Getting your court title' },
          { href: '#finding-assets', label: '4. Finding the assets: disclosure, inquiry, the defaulters’ list' },
          { href: '#fraud-question', label: '5. "Isn’t this fraud?" — the criminal question' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="two-questions" className={H2}>
        1. The two questions that come first
      </h2>
      <p className={P}>
        <strong>Is the claim alive?</strong> Every debt expires — 10 years for an ordinary
        private loan, 5 where the deal was commercial, 3 for wages and many working debts. If
        time has passed, start with{' '}
        <Link href="/guides/civil-litigation/statutes-of-limitations" className={LINK}>
          Statutes of Limitations
        </Link>{' '}
        before spending anything: the clock decides how urgent the rest of this guide is, and a
        debtor&rsquo;s partial payment or written acknowledgment can restart it.
      </p>
      <p className={P}>
        <strong>Can they pay?</strong> A judgment against someone with no seizable assets
        collects nothing by itself. Before committing to the road, be honest about what you know:
        a salary, a business that still trades, a jeonse deposit, a car, real estate. You do not
        need to know everything — section 4 is about making the court find out — but if the
        answer is clearly &ldquo;nothing, and no prospects,&rdquo; the economics in{' '}
        <Link href="/guides/civil-litigation/what-litigation-costs" className={LINK}>
          What Litigation Costs
        </Link>{' '}
        deserve a hard look first.
      </p>
      <p className={P}>
        Alongside both questions, gather the record: the loan agreement or IOU if one exists, but
        also bank transfer records, KakaoTalk and text messages, invoices, delivery records.
        Korean money cases are decided on documents, and an informal debt with a clean transfer
        trail is far stronger than people fear.
      </p>

      <h2 id="the-map" className={H2}>
        2. The recovery map
      </h2>
      <GuideFlow
        steps={[
          {
            title: 'Demand, on the record',
            body: 'A certified content mail letter stating the debt, a deadline, and what follows. Many debts are paid at this step — and the letter holds the limitation clock for 6 months while you prepare the next one.',
          },
          {
            title: 'Freeze first if assets may vanish',
            body: 'Where the debtor could sell or move assets once warned, a provisional attachment (가압류) can freeze property before or alongside the main case. Where that risk is real, this step comes before the demand letter, not after.',
          },
          {
            title: 'Get a court title',
            body: 'A finalized payment order for debts the debtor does not seriously dispute; the small-claims track up to ₩30,000,000; an ordinary lawsuit where the debt is contested. This is the document everything after depends on.',
          },
          {
            title: 'Make the assets visible',
            body: "Court-ordered asset disclosure under oath, direct inquiries to banks and registries, and the defaulters' list — the machinery of section 4.",
          },
          {
            title: 'Enforce',
            body: 'Seize what the search found: bank accounts, wages, deposits, vehicles, real estate. Enforcement is its own procedure with its own costs, and a title is good for 10 years — patience is a strategy.',
          },
        ]}
      />
      <p className={P}>
        Not every case walks every step. An employer who owes wages answers to the labour
        office&rsquo;s separate machinery first — see{' '}
        <Link href="/guides/labor-employment/unpaid-wages-labor-office-vs-lawsuit" className={LINK}>
          Unpaid Wages
        </Link>
        . A debtor with a salary and a reputation often pays at the demand or title stage. The
        sequence exists for the debtor who does not.
      </p>

      <h2 id="getting-a-title" className={H2}>
        3. Getting your court title
      </h2>
      <p className={P}>
        The title stage is covered in depth elsewhere on this site, so here is only the choice.
        For a documented debt the debtor does not seriously contest, the{' '}
        <Link href="/guides/civil-litigation/payment-orders" className={LINK}>
          payment order
        </Link>{' '}
        is the default: a tenth of the lawsuit&rsquo;s filing fee, no hearing, and judgment force
        if the debtor stays silent for 2 weeks. For a contested debt, the lawsuit — small-claims
        track up to ₩30,000,000 — is the honest route, because a contested payment order just
        detours into one anyway.
      </p>
      <p className={P}>
        One planning point: the title stage is also where the{' '}
        <Link href="/guides/civil-litigation/certified-content-mail" className={LINK}>
          demand letter&rsquo;s
        </Link>{' '}
        6-month window matters. If the letter was doing the work of holding the limitation clock,
        the filing must land inside that window or the protection is lost.
      </p>

      <h2 id="finding-assets" className={H2}>
        4. Finding the assets: disclosure, inquiry, the defaulters&rsquo; list
      </h2>
      <p className={P}>
        This is the stage foreigners rarely know exists — and the reason &ldquo;I have no
        money&rdquo; is not the end of the conversation. Once you hold a title good for money
        enforcement, three court tools open up.
      </p>
      <p className={P}>
        <strong>Asset disclosure</strong> <Term ko="재산명시">(jaesan myeongsi)</Term>. On your
        application, the court orders the debtor to appear and submit a sworn list of their
        assets (Civil Execution Act art. 61). The oath has teeth: failing to appear, refusing to
        submit the list, or refusing the oath can be punished with{' '}
        <strong>detention of up to 20 days</strong>, and submitting a false list is a crime
        carrying up to <strong>3 years&rsquo; imprisonment</strong> or a fine (art. 68). Many
        debtors who shrugged at the judgment become cooperative when the summons arrives.
      </p>
      <figure className="my-6">
        <Image
          src="/assets/guides/owed-money-search.jpg"
          alt="A magnifying glass resting on blank documents — Korean courts can search a debtor's bank accounts and registered property on the creditor's application"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          After the disclosure step, the court itself can query banks, insurers, and registries
          for assets in the debtor&rsquo;s name — you do not have to find them alone.
        </Caption>
      </figure>
      <p className={P}>
        <strong>Property inquiry</strong> <Term ko="재산조회">(jaesan johoe)</Term>. Where
        disclosure fails or the list looks thin, the creditor who ran the disclosure procedure
        can ask the court to query financial institutions and public registries directly — banks,
        insurers, securities firms, the real-estate and vehicle registers — for assets held in
        the debtor&rsquo;s name (art. 74). Institutions cannot refuse without just cause. This is
        how hidden accounts surface.
      </p>
      <p className={P}>
        <strong>The defaulters&rsquo; list</strong>{' '}
        <Term ko="채무불이행자명부">(chaemu burihaengja myeongbu)</Term>. If the debtor still has
        not paid <strong>6 months after the title became final</strong>, you can apply to have
        them entered on the court&rsquo;s defaulters&rsquo; register (art. 70), which feeds into
        credit information systems. It collects nothing directly — but for a debtor who wants
        loans, cards, or a normal financial life, it is steady pressure that costs you little.
      </p>

      <h2 id="fraud-question" className={H2}>
        5. &ldquo;Isn&rsquo;t this fraud?&rdquo; — the criminal question
      </h2>
      <p className={P}>
        Almost everyone who is owed money asks it. The honest answer: borrowing money and then
        failing to repay is, by itself, a civil matter. Fraud <span lang="ko">(사기)</span> under
        the Criminal Act (art. 347) turns on <strong>deception at the time of the deal</strong> —
        a debtor who never intended or never had the means to repay, and concealed it. A debtor
        whose circumstances genuinely collapsed afterwards has broken a promise, not the criminal
        law.
      </p>
      <p className={P}>
        Where the facts do point to deception from the start — invented investments, borrowed
        &ldquo;bridge money&rdquo; against assets that never existed, the same money borrowed
        from several people with the same story — a criminal complaint can run alongside the
        civil claim, and the pressure of an investigation often produces repayment settlements.
        Whether your facts cross that line is precisely the judgment to have assessed before
        filing anything.
      </p>
      <Callout variant="warning" title="Don't wield a criminal complaint as a threat">
        Telling a debtor &ldquo;pay or I&rsquo;ll report you for fraud&rdquo; feels like leverage,
        but demands framed as threats can create separate legal problems for you — and a
        complaint filed only to pressure payment tends to collapse, taking your credibility with
        it. Decide the criminal question on the facts, with advice, and keep the two tracks
        clean.
      </Callout>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Waiting politely while the clock runs.</strong> Years of &ldquo;next
          month&rdquo; promises spend the limitation period. Sympathy and a filed payment order
          can coexist.
        </li>
        <li>
          <strong>Restructuring with nothing in writing.</strong> If you agree to installments or
          a delay, put the debt&rsquo;s full amount and the new schedule in a signed document —
          it is evidence, and it restarts the limitation clock as an acknowledgment.
        </li>
        <li>
          <strong>Suing first, thinking about assets never.</strong> The title is the middle of
          the road, not the end. Budget from the start for the disclosure and enforcement stages,
          or the judgment becomes a certificate of being right.
        </li>
        <li>
          <strong>Warning a flight-risk debtor.</strong> A demand letter tells the debtor to move
          assets exactly as clearly as it tells them to pay. Where that risk is real, freezing
          comes first.
        </li>
        <li>
          <strong>Outsourcing to whoever promises the most.</strong> Debt collection in Korea is
          regulated; only licensed credit-information companies may run collection as a business,
          and aggressive freelance &ldquo;collectors&rdquo; can turn your lawful claim into their
          unlawful conduct. For the court road, the sequence in this guide is the lawful
          machinery.
        </li>
      </ul>

      <GuideDeadlines
        items={[
          {
            when: '10 / 5 / 3 years',
            what: 'The limitation period of the underlying debt — ordinary, commercial, or wage-type. Check it before anything else, and remember acknowledgment restarts it.',
          },
          {
            when: '6 months',
            what: 'After a demand letter that held the limitation clock — file within this window or the protection lapses (Civil Act art. 174).',
          },
          {
            when: '6 months',
            what: 'After your title becomes final without payment — the point from which the debtor can be entered on the defaulters’ list (Civil Execution Act art. 70).',
          },
          {
            when: '10 years',
            what: 'The life of a claim confirmed by judgment or finalized payment order — the window in which disclosure, inquiry, and enforcement can wait for the debtor to acquire something worth taking.',
          },
        ]}
      />
      <p className={P}>
        Start with the record you already hold — the transfers, the messages, the dates — and the
        two questions of section 1. Everything else on the map follows from them.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'There was no contract — just bank transfers and KakaoTalk messages. Do I have a case?',
            a: (
              <p>
                Very possibly. A loan does not need a formal contract to exist; transfer records
                showing money moving to the debtor, plus messages in which the debt is discussed
                or repayment promised, are the everyday evidence these cases run on. What matters
                is that the record shows a loan rather than a gift — repayment talk, even casual,
                does exactly that. Preserve the originals and have the set assessed.
              </p>
            ),
          },
          {
            q: 'The debtor moved back to their home country. Is the money gone?',
            a: (
              <p>
                Not automatically. Your claim&rsquo;s clock keeps running, so the first move is
                still to secure a Korean title before the limitation period ends — the case can
                proceed even with the debtor abroad. That title reaches any assets still in Korea
                (accounts, deposits, property) for 10 years, and can support enforcement efforts
                abroad, though cross-border collection is slower and costlier. Whether it is
                worth pursuing depends on the amount and the destination country.
              </p>
            ),
          },
          {
            q: 'The debt is only a few million won. Is any of this worth it?',
            a: (
              <p>
                The system is priced for exactly this case: a payment order costs a tenth of a
                lawsuit&rsquo;s stamp fee, the small-claims track keeps procedure light, and a
                finalized order then waits 10 years for the debtor&rsquo;s circumstances to
                improve. What deserves caution is spending on the later, costlier stages —
                inquiry, enforcement — without weighing them against the amount, which is a
                conversation to have before starting, not after.
              </p>
            ),
          },
          {
            q: 'Should I just hire a debt-collection agency instead?',
            a: (
              <p>
                Licensed credit-information companies lawfully perform collection work such as
                contacting debtors and urging payment, and for some commercial debts that is a
                reasonable first try. What they cannot do is litigate: titles, asset disclosure,
                inquiry, and seizure run through the courts. Many creditors use both in sequence
                — and should avoid anyone unlicensed promising recovery through
                &ldquo;pressure.&rdquo;
              </p>
            ),
          },
          {
            q: 'The debtor is a company that shut its doors. Who do I even pursue?',
            a: (
              <p>
                A closed shopfront is not a dissolved company — the legal entity, and your claim
                against it, can outlive the business, and enforcement can reach assets the
                company still owns. Reaching the owner personally is harder: a corporation&rsquo;s
                debts are normally its own, and exceptions are fact-specific. Collecting from
                closed businesses has enough of its own terrain that it deserves a proper
                assessment of the company&rsquo;s form and remaining assets.
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
