// Guide body: Reading a Korean Lease Before Signing
// Authored via the english-guide-writer skill workflow (guide-production Phase 2, #17).
// Statute references verified against casenote.kr / law.go.kr / easylaw.go.kr — see REVIEW-GUIDES.md.

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

export default function ReadingAKoreanLeaseBeforeSigning() {
  return (
    <>
      <Image
        src="/assets/guides/reading-lease-hero.jpg"
        alt="A lease contract folder, magnifying glass and pen on a desk — reading a Korean lease before signing is where deposits are actually protected"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            Read the <strong>property register before the contract</strong> — the owner&rsquo;s
            name, the mortgages, and any trust registration decide more than the lease text does.
          </li>
          <li>
            The pre-printed pages are the safe part. Disputes are decided in the{' '}
            <strong>special clauses</strong> <span lang="ko">(특약)</span> — the handwritten
            section most people skim.
          </li>
          <li>
            Since 2023 the landlord must <strong>show you their tax-payment certificates and the
            building&rsquo;s existing tenancy picture</strong> before you sign. Refusal is an
            answer in itself.
          </li>
          <li>
            The licensed agent owes you a signed{' '}
            <strong>confirmation-and-explanation document</strong> and carries mandatory
            liability coverage — collect both, don&rsquo;t just trust the office plaque.
          </li>
          <li>
            Terms that undercut your statutory tenant protections are{' '}
            <strong>void by law</strong> — but the cheap version of that fight is refusing to
            sign them.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        Reading a Korean lease contract before signing is the cheapest legal work you will ever
        do: every deposit-recovery tool in this cluster — the priority rules, the registration
        order, the lawsuit — exists to fix problems that a careful hour at the signing table
        usually prevents. For a foreign tenant the hour matters double, because the contract is
        in Korean and the riskiest lines are the ones added by hand.
      </p>
      <p className={P}>
        This guide walks the reading order that works: register first, contract second, special
        clauses word by word, then the landlord&rsquo;s finances and the agent&rsquo;s paperwork.
        It pairs with{' '}
        <Link href="/guides/real-estate-lease-disputes/jeonse-explained" className={LINK}>
          Jeonse, Explained
        </Link>
        , which covers why the deposit needs this care in the first place.
      </p>

      <GuideToc
        items={[
          { href: '#register-first', label: '1. Start with the register, not the contract' },
          { href: '#section-by-section', label: '2. The contract, section by section' },
          { href: '#special-clauses', label: '3. Special clauses (특약): where disputes are decided' },
          { href: '#landlord-finances', label: "4. The landlord's finances: rights you now have" },
          { href: '#the-agent', label: "5. The agent's duties — and their insurance" },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="register-first" className={H2}>
        1. Start with the register, not the contract
      </h2>
      <p className={P}>
        Pull the <Term ko="등기부등본">property register extract</Term> yourself, dated the day
        you read it — online, for under ₩1,000. Three checks carry most of the weight: the{' '}
        <strong>current owner&rsquo;s name</strong> (the person your contract and your transfers
        must match), the <strong>mortgages and their amounts</strong> (senior debt that outranks
        your deposit at any auction — the arithmetic is in the jeonse guide), and{' '}
        <strong>any entry you don&rsquo;t understand</strong>, which is a question for a
        professional, not a shrug.
      </p>
      <Callout variant="warning" title="The trust-registration red flag">
        If the register shows the property held in trust <span lang="ko">(신탁)</span>, the
        &ldquo;owner&rdquo; you are talking to may have no power to lease it — valid leases on
        trust property typically need the trustee&rsquo;s consent under the trust agreement, and
        deposits paid to the wrong party of a trust structure are a recurring fraud pattern.
        Do not sign on a trust-registered property until the trust documents and required
        consents have been checked by someone qualified.
      </Callout>

      <h2 id="section-by-section" className={H2}>
        2. The contract, section by section
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>The parties.</strong> The landlord on the contract must be the owner on the
          register. If someone signs &ldquo;for&rdquo; the owner, demand the power of attorney
          with the owner&rsquo;s seal certificate — and even then, the deposit goes only to the{' '}
          <strong>owner&rsquo;s own account</strong>. Spouses, children, and property managers
          collecting deposits informally is where recovery cases begin.
        </li>
        <li>
          <strong>The property.</strong> Address, building, and unit number exactly as the
          register writes them — a lease on &ldquo;the second floor room&rdquo; of a house with
          three of them protects less than you hope.
        </li>
        <li>
          <strong>Money and dates.</strong> Deposit, rent, payment day, handover date — and
          remember the statutory floor: a term under two years counts as two if you want it to
          (Housing Lease Protection Act art. 4).
        </li>
        <li>
          <strong>Condition.</strong> What exists, what works, what the landlord will fix before
          handover — written, because section 3 is where you will put it.
        </li>
      </ul>

      <p className={P}>
        And one meta-rule for the whole document: no blanks. Every empty field — a missing
        handover date, an unstated payment account, an unfilled condition box — is a decision
        someone else gets to make later. Fill them, strike them through, or ask why they are
        empty.
      </p>

      <h2 id="special-clauses" className={H2}>
        3. Special clauses <span lang="ko">(특약)</span>: where disputes are decided
      </h2>
      <figure className="my-6">
        <Image
          src="/assets/guides/reading-lease-clauses.jpg"
          alt="A pen hovering over the special-clause section of a Korean lease contract"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          The special-clause box is the only part of the lease written for your specific deal —
          which is exactly why it deserves the slowest reading.
        </Caption>
      </figure>
      <p className={P}>
        The printed form is largely settled ground; the handwritten special-clause box is the
        actual negotiation. Clauses worth asking for, in plain versions your agent can phrase
        properly:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>No new borrowing on the property</strong> between contract and move-in — and
          where senior mortgages exist, repayment or reduction from your deposit at handover.
        </li>
        <li>
          <strong>Deposit-return mechanics</strong> — returned on the lease&rsquo;s end date
          against handover, not &ldquo;when the next tenant is found.&rdquo;
        </li>
        <li>
          <strong>Cooperation with deposit-guarantee insurance</strong> — the landlord&rsquo;s
          consent and paperwork for HUG-type coverage, priced while you can still walk away.
        </li>
        <li>
          <strong>Repairs split sensibly</strong> — structure, boiler, and plumbing to the
          landlord; consumables to you; a number above which repairs need the landlord&rsquo;s
          sign-off.
        </li>
        <li>
          <strong>An exit clause</strong> for job relocation or visa change — notice period and
          fee stated, so leaving early is arithmetic instead of war.
        </li>
      </ul>
      <p className={P}>
        Read the other direction too. Clauses shifting all repairs to you, waiving renewal
        rights, or letting the landlord repay the deposit &ldquo;when re-let&rdquo; deserve
        pushback — and here the law backs you: terms contrary to the Act that disadvantage the
        tenant are simply <strong>void</strong> (art. 10, a one-way mandatory rule). But void is
        a defense you litigate later; the better version is a line through the clause today.
      </p>

      <h2 id="landlord-finances" className={H2}>
        4. The landlord&rsquo;s finances: rights you now have
      </h2>
      <p className={P}>
        Since a 2023 amendment, the landlord must, at contract time,{' '}
        <strong>present the building&rsquo;s existing tenancy information</strong> — fixed dates,
        deposits, rents already recorded against the property — and{' '}
        <strong>tax-payment certificates</strong> for national and local taxes (art. 3-7). In
        place of the certificates, the landlord can consent to your inspecting their tax arrears
        directly. Unpaid taxes matter because the tax office can outrank your deposit at auction;
        other tenants&rsquo; senior deposits matter for the same reason.
      </p>
      <p className={P}>
        Use the rule as a filter, not a formality. A landlord who produces the documents without
        drama is telling you something; one who bristles at a statutory request is telling you
        something louder. Add what you learn to the arithmetic from the register — total senior
        claims against realistic value — before any money moves.
      </p>

      <h2 id="the-agent" className={H2}>
        5. The agent&rsquo;s duties — and their insurance
      </h2>
      <p className={P}>
        A licensed agent <span lang="ko">(공인중개사)</span> owes you accurate explanation of the
        property before the deal completes, <strong>with the underlying documents shown</strong>
        — the register, the land records — and must deliver a signed{' '}
        <Term ko="확인·설명서">confirmation-and-explanation document</Term> recording what was
        explained (Licensed Real Estate Agents Act art. 25). Agents also carry mandatory
        liability coverage for negligent handling, and must give you the certificate of it at
        closing (art. 30). Keep both papers with the contract; they are your route to
        compensation if the explanation turns out wrong.
      </p>
      <p className={P}>
        Two practical corollaries. First, an unlicensed &ldquo;consultant&rdquo; or a deal done
        without any agent removes this entire safety layer — fine between trusted parties,
        reckless with a stranger. Second, the explanation will be in Korean: bring your own
        language support for the hour that matters, and do not treat a smile and
        &ldquo;standard contract&rdquo; as a translation.
      </p>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Wiring a holding deposit before terms exist.</strong> The{' '}
          <Term ko="가계약금">pre-contract deposit</Term> culture moves fast; send nothing until
          the key terms — price, dates, refund conditions — are in writing, even as messages.
        </li>
        <li>
          <strong>Signing on the first visit.</strong> A day&rsquo;s gap for the register, the
          tax certificates, and a translation costs nothing; every fraud pattern in this cluster
          relies on urgency.
        </li>
        <li>
          <strong>Leaving the special-clause box blank</strong> — or full of the landlord&rsquo;s
          clauses and none of yours.
        </li>
        <li>
          <strong>Checking the register once.</strong> Pull it again on the contract day and the
          final-payment day — the dangerous mortgage is the one registered between your visits.
        </li>
        <li>
          <strong>Stopping at the signature.</strong> The contract protects nothing until the
          move-in steps — handover, address registration, fixed-date stamp — are done, same day
          (the sequence lives in{' '}
          <Link href="/guides/real-estate-lease-disputes/jeonse-explained" className={LINK}>
            Jeonse, Explained
          </Link>
          ).
        </li>
      </ul>

      <GuideDeadlines
        items={[
          {
            when: 'Before signing',
            what: 'Same-day register extract read and understood; the landlord’s art. 3-7 documents (tenancy picture + tax certificates) presented; translation arranged.',
          },
          {
            when: 'At signing',
            what: 'Owner-account payment only; the agent’s confirmation-and-explanation document and liability-coverage certificate in your folder with the contract.',
          },
          {
            when: 'Move-in day',
            what: 'Handover, address registration (15 days for the foreigner report), and the fixed-date stamp — the trio that turns the paper into protection.',
          },
        ]}
      />
      <p className={P}>
        Start with the register extract tonight — before any viewing appointment, before any
        holding deposit. Everything else in this guide reads differently once you know what is
        recorded against the property.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'The agent gave me an English translation. Which version counts?',
            a: (
              <p>
                Treat the Korean text as the one that governs — it is what a Korean court will
                read, and translations are rarely made part of the contract. That makes the
                translation a comprehension tool, not a safety net: have the Korean special
                clauses read to you line by line, and if a promise matters, confirm it exists in
                the Korean text rather than in the English summary.
              </p>
            ),
          },
          {
            q: 'Can I actually negotiate clauses as a foreigner, or is the form the form?',
            a: (
              <p>
                The printed form is standard; the special-clause box is negotiated in every deal,
                and landlords expect requests there. Your leverage is ordinary market leverage —
                the deposit you bring and your willingness to walk — not nationality. Agents
                draft the Korean phrasing; your job is knowing which five clauses to ask for,
                which is exactly what section 3 is.
              </p>
            ),
          },
          {
            q: 'Is a holding deposit (가계약금) refundable if I change my mind?',
            a: (
              <p>
                It depends entirely on what was agreed when it was sent — which is the problem,
                because it is usually sent before anything was agreed in writing. Practice varies
                from full refund to full forfeit depending on how far terms had crystallized. The
                protective habit: before transferring anything, get a message stating the amount,
                what it holds, and the refund conditions. Ambiguity favors whoever holds the
                money.
              </p>
            ),
          },
          {
            q: 'The agent never gave me a confirmation-and-explanation document. Does it matter?',
            a: (
              <p>
                Yes — issuing it is a statutory duty, not a courtesy, and skipping it is a
                compliance violation on the agent&rsquo;s side. Ask for it plainly; a competent
                office produces it as routine. If an explanation later proves wrong or the
                document never appears, that paper trail — or its absence — is central to
                claiming against the agent&rsquo;s mandatory liability coverage.
              </p>
            ),
          },
          {
            q: 'Should I pay a lawyer to review a lease before signing?',
            a: (
              <p>
                For an ordinary wolse with a small deposit, the checks in this guide plus a
                careful agent are usually proportionate. For a jeonse deposit measured in
                hundreds of millions of won, a trust-registered property, a landlord resisting
                the art. 3-7 documents, or special clauses you cannot confidently read — the
                review costs a fraction of a percent of what it protects. Scale the caution to
                the deposit, not to the paperwork&rsquo;s apparent simplicity.
              </p>
            ),
          },
        ]}
      />

      <p className={P + ' mt-8'}>
        The lease you sign well is the dispute you never read about — but if the deposit is
        already in trouble, start with{' '}
        <Link href="/guides/real-estate-lease-disputes/getting-your-housing-deposit-back" className={LINK}>
          Getting Your Housing Deposit Back
        </Link>
        , and when the lease ends, walk the{' '}
        <Link href="/guides/real-estate-lease-disputes/move-out-checklist-and-deadlines" className={LINK}>
          Move-Out Checklist
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
