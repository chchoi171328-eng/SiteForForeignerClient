// Guide body: Getting Your Housing Deposit Back
// Authored via the english-guide-writer skill workflow (guide-production Phase 1, #1).
// Statute references verified against elaw.klri.re.kr / law.go.kr — see REVIEW-GUIDES.md.

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

export default function GettingYourHousingDepositBack() {
  return (
    <>
      <Image
        src="/assets/guides/deposit-back-hero.jpg"
        alt="Moving boxes stacked in an empty Korean apartment — the point where getting your housing deposit back becomes urgent"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            Your deposit becomes due when the lease <strong>ends properly</strong> — and under
            Korean law the lease may have renewed itself if nobody gave notice in time.
          </li>
          <li>
            <strong>Do not move out or transfer your registration</strong> before the deposit is
            secured. Staying registered in the unit is what protects your priority.
          </li>
          <li>
            If you must move first, complete a{' '}
            <strong>
              <Term ko="임차권등기명령">lease registration order</Term>
            </strong>{' '}
            before vacating — it preserves your rights after you leave.
          </li>
          <li>
            The sequence that works: written demand → lease registration order (if moving) →{' '}
            <strong>payment order or lawsuit</strong>. After a complaint is served, statutory
            interest of <strong>12% per year</strong> runs on the unpaid deposit.
          </li>
          <li>
            Foreign tenants get the same core protections — your{' '}
            <strong>foreigner registration and place-of-sojourn report</strong> count in place of
            Korean resident registration.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        You handed over a large deposit when you signed your lease — often tens of millions of won —
        and now the lease is ending and the landlord has gone quiet, or says the money will come
        &ldquo;when the next tenant moves in.&rdquo; Getting your housing deposit back in Korea is
        one of the most common legal problems foreign residents face, and it is very winnable: the
        law is firmly on the tenant&rsquo;s side.
      </p>
      <p className={P}>
        The key statute is the <strong>Housing Lease Protection Act</strong>{' '}
        <span lang="ko">(주택임대차보호법)</span>, which overrides anything less favorable written
        in your contract. It decides when your lease actually ends, what keeps your deposit
        protected, and what tools you have when a landlord won&rsquo;t pay.
      </p>
      <p className={P}>
        What matters most is the <em>order</em> in which you act. Several protections disappear the
        day you move out or transfer your registration — so this guide walks through the sequence
        step by step.
      </p>

      <GuideToc
        items={[
          { href: '#lease-ended', label: '1. First: has your lease actually ended?' },
          { href: '#dont-move-out', label: "2. Don't move out yet — why staying protects you" },
          { href: '#lease-registration-order', label: '3. The lease registration order (임차권등기명령)' },
          { href: '#certified-mail', label: '4. The demand letter: certified content mail (내용증명)' },
          { href: '#payment-order-or-lawsuit', label: '5. Payment order or lawsuit' },
          { href: '#common-mistakes', label: '6. Common mistakes that cost tenants money' },
          { href: '#what-to-prepare', label: '7. What to prepare' },
        ]}
      />

      <h2 id="lease-ended" className={H2}>
        1. First: has your lease actually ended?
      </h2>
      <p className={P}>
        A landlord owes you the deposit when the lease terminates. That sounds obvious, but Korean
        leases renew themselves automatically if neither side speaks up in time — what tenants call{' '}
        <Term ko="묵시적 갱신">implied renewal</Term>. If your lease quietly renewed, the deposit is
        not yet due, and a demand letter or lawsuit is premature.
      </p>
      <div className="my-6 overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full min-w-[560px] border-collapse">
          <thead className="bg-slate-50 border-b border-gray-200">
            <tr>
              <th className={TH}>Situation</th>
              <th className={TH}>What the law says</th>
              <th className={TH}>Basis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className={TD}>You want to leave at the end of the term</td>
              <td className={TD}>
                Tell the landlord you are not renewing <strong>no later than 2 months before</strong>{' '}
                the lease expires. Miss the window and the lease renews on the same terms.
              </td>
              <td className={TD}>Housing Lease Protection Act art. 6</td>
            </tr>
            <tr>
              <td className={TD}>The landlord wants you out at the end of the term</td>
              <td className={TD}>
                The landlord must give notice <strong>6 to 2 months before</strong> expiry;
                otherwise the lease renews automatically.
              </td>
              <td className={TD}>Housing Lease Protection Act art. 6</td>
            </tr>
            <tr>
              <td className={TD}>The lease already renewed itself</td>
              <td className={TD}>
                You may terminate at any time; termination takes effect{' '}
                <strong>3 months after the landlord receives your notice</strong>.
              </td>
              <td className={TD}>Housing Lease Protection Act art. 6-2</td>
            </tr>
            <tr>
              <td className={TD}>You asked to renew and the landlord refused</td>
              <td className={TD}>
                A tenant may demand renewal once (2 more years), 6 to 2 months before expiry; the
                landlord can refuse only on listed grounds, such as moving in personally.
              </td>
              <td className={TD}>Housing Lease Protection Act art. 6-3</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={P}>
        Send any notice in a form you can prove — certified content mail (covered below), or at
        minimum a text message the landlord answered. Save the reply. The date the landlord{' '}
        <em>received</em> notice is what counts.
      </p>

      <h2 id="dont-move-out" className={H2}>
        2. Don&rsquo;t move out yet — why staying protects you
      </h2>
      <p className={P}>
        Two protections make Korean tenants unusually secure, and both depend on you staying put.
        First, <Term ko="대항력">opposing power</Term>: once you have moved in and completed
        residence registration, your lease binds third parties — including anyone who buys the
        building — from the following day (Housing Lease Protection Act art. 3). Second,{' '}
        <Term ko="우선변제권">priority repayment</Term>: with a{' '}
        <Term ko="확정일자">fixed-date stamp</Term> on your contract, you are paid from auction
        proceeds ahead of later creditors if the property is ever foreclosed (art. 3-2).
      </p>
      <p className={P}>
        Both rights assume you still occupy the unit and remain registered there. Move out, ship
        your belongings, and register elsewhere — and you can lose your place in line at exactly the
        moment you need it. The law also deems the lease relationship to <em>continue</em> until the
        deposit is actually repaid, even after the term expires (art. 4(2)), so remaining in the
        unit while you press the claim is legally sound.
      </p>
      <Callout variant="warning" title="Do not hand back the keys first">
        Returning the keys, moving your belongings out, or transferring your registration before the
        deposit is secured can forfeit your opposing power and priority — the two strongest cards
        you hold. Secure a lease registration order first if you must move.
      </Callout>

      <h2 id="lease-registration-order" className={H2}>
        3. The lease registration order <span lang="ko">(임차권등기명령)</span>
      </h2>
      <p className={P}>
        Real life often won&rsquo;t let you stay — a new job, a housing allowance deadline, a flight
        home. The law&rsquo;s answer is the{' '}
        <Term ko="임차권등기명령">lease registration order</Term>: a court order that records your
        lease and deposit claim directly on the property&rsquo;s register. Once the registration is
        completed, you keep your opposing power and priority repayment right{' '}
        <strong>even after you move out and deregister</strong> (Housing Lease Protection Act art.
        3-3).
      </p>
      <p className={P}>
        You can apply once the lease has ended and the deposit remains unpaid. The application goes
        to the district court (or its branch) for the area where the house is located, with your
        lease contract, proof of the lease ending, and registration history. Since a 2023 amendment
        to art. 3-3, the registration can be completed <strong>without waiting for the order to be
        served on the landlord</strong> — which matters when a landlord is avoiding mail or cannot
        be reached.
      </p>
      <p className={P}>
        The court process is document-based, and tenants do file it themselves; the forms are
        standardized. The practical difficulty is usually not the form but timing and proof —
        confirming the lease ended cleanly and the registration is completed before you vacate. A
        registered lease claim also signals to the landlord, and to the next tenant&rsquo;s bank,
        that the property carries an unpaid deposit — which itself creates real pressure to pay.
        The full procedure — documents, filing, costs, and what to verify before moving — is
        covered step by step in{' '}
        <Link
          href="/guides/real-estate-lease-disputes/lease-registration-order"
          className="text-navy-900 underline decoration-gold-400 underline-offset-2 hover:text-gold-600"
        >
          Lease Registration Order (임차권등기명령)
        </Link>
        .
      </p>

      <h2 id="certified-mail" className={H2}>
        4. The demand letter: certified content mail <span lang="ko">(내용증명)</span>
      </h2>
      <p className={P}>
        <Term ko="내용증명">Certified content mail</Term> is a postal service where the post office
        keeps an official copy of your letter, proving exactly what you wrote and when it was sent.
        It is not a court filing and it does not legally force anyone to pay — but it is the
        standard opening move in a Korean deposit dispute.
      </p>
      <figure className="my-6">
        <Image
          src="/assets/guides/deposit-back-demand-letter.jpg"
          alt="Preparing a certified content mail (내용증명) demand letter for a housing deposit claim in Korea"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          Certified content mail costs a few thousand won at any post office — the post office keeps
          an official copy, so the landlord can never deny what was demanded and when.
        </Caption>
      </figure>
      <p className={P}>
        A good demand letter states the lease dates, the notice you gave, the amount owed, a payment
        deadline, and your bank account — and says plainly what comes next: a lease registration
        order, statutory interest, and a lawsuit whose costs the landlord may bear. Many disputes
        end here, because it shows the landlord you know the sequence and are already walking it.
        The letter&rsquo;s legal effects, drafting, and follow-up rules are covered in full in{' '}
        <Link href="/guides/civil-litigation/certified-content-mail" className={LINK}>
          Certified Content Mail (내용증명)
        </Link>
        .
      </p>

      <h2 id="payment-order-or-lawsuit" className={H2}>
        5. Payment order or lawsuit
      </h2>
      <p className={P}>If the deadline passes without payment, the path runs through court:</p>
      <GuideFlow
        steps={[
          {
            title: 'Confirm the lease ended and your notice is provable',
            body: 'Check the table in section 1. If the lease renewed itself, terminate first (effective 3 months after notice).',
          },
          {
            title: 'Send certified content mail',
            body: 'A dated, provable demand with a deadline. Often enough by itself.',
          },
          {
            title: 'Secure a lease registration order — only if you need to move',
            body: 'File before vacating; confirm the registration appears on the property register before you hand back the keys.',
          },
          {
            title: 'File a payment order (지급명령) or a deposit-return lawsuit',
            body: 'Payment order: fast and cheap if the landlord stays silent. Lawsuit: slower but ends in a judgment even if the landlord fights.',
          },
          {
            title: 'Enforce',
            body: "A final payment order or judgment lets you seize the landlord's property — the unit itself, bank accounts, or other assets.",
          },
        ]}
      />
      <p className={P}>
        A <Term ko="지급명령">payment order</Term> is a summary procedure under the Civil Procedure
        Act (arts. 462–474): the court issues an order on your documents alone, without a hearing.
        If the landlord does not object within <strong>2 weeks of service</strong>, the order
        becomes final with the same force as a judgment. If the landlord objects, the case simply
        converts to an ordinary lawsuit — you lose a few weeks, not your claim. The procedure,
        its costs, and when to skip it are covered in full in{' '}
        <Link href="/guides/civil-litigation/payment-orders" className={LINK}>
          Payment Orders (지급명령)
        </Link>
        .
      </p>
      <p className={P}>
        In a lawsuit, the economics favor you. While you still occupy the unit, interest generally
        does not run, because the deposit and the hand-over of the unit are treated as owed
        simultaneously. But once you have vacated (with a lease registration order in place) the
        unpaid deposit carries statutory interest — 5% per year under the Civil Act (art. 379), and{' '}
        <strong>12% per year</strong> from the day after the complaint is served, under the Act on
        Special Cases Concerning Expedition, etc. of Legal Proceedings (art. 3). Claims of ₩30
        million or less qualify for the simplified small-claims track (Trial of Small Claims Act
        art. 2), though most housing deposits exceed it.
      </p>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes that cost tenants money
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Moving out before the lease registration order is completed.</strong> Filing is
          not enough — the registration must actually appear on the register before you vacate.
        </li>
        <li>
          <strong>Missing the 2-month notice window</strong> and assuming the lease ended anyway.
          If it renewed, your deposit is not yet due.
        </li>
        <li>
          <strong>Accepting &ldquo;I&rsquo;ll pay when the next tenant comes in.&rdquo;</strong>{' '}
          That is a cash-flow plan, not a legal condition. Your claim is due when the lease ends.
        </li>
        <li>
          <strong>Stopping rent payments as self-help.</strong> Deposit and rent are separate
          obligations; unpaid rent is simply deducted from the deposit at the end, and withholding
          it mid-lease can create separate disputes.
        </li>
        <li>
          <strong>Signing anything at move-out without reading it.</strong> A &ldquo;settlement of
          accounts&rdquo; paper can waive more than you think. Have it checked first.
        </li>
      </ul>

      <h2 id="what-to-prepare" className={H2}>
        7. What to prepare
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>The lease contract — ideally with the fixed-date stamp page</li>
        <li>Proof the deposit was paid (bank transfer records)</li>
        <li>Your notice and the landlord&rsquo;s replies (texts, certified mail receipts)</li>
        <li>
          The property register <span lang="ko">(등기부등본)</span> — anyone can pull it online; it
          shows mortgages and who actually owns the unit
        </li>
        <li>Your foreigner registration card and, after any move, your place-of-sojourn records</li>
      </ul>

      <GuideDeadlines
        items={[
          {
            when: '2 months before expiry',
            what: 'Last day to tell the landlord you are not renewing — after this, the lease renews on the same terms (art. 6).',
          },
          {
            when: '3 months after notice',
            what: 'When termination of an implied-renewed lease takes effect, counted from the day the landlord receives it (art. 6-2).',
          },
          {
            when: 'Before you vacate',
            what: 'The lease registration order must be completed on the register — not merely filed (art. 3-3).',
          },
          {
            when: '2 weeks from service',
            what: "The landlord's window to object to a payment order; silence makes it final (Civil Procedure Act art. 470).",
          },
          {
            when: '10 years',
            what: 'Outer limit to sue on a deposit claim (Civil Act art. 162) — though waiting helps no one.',
          },
        ]}
      />
      <p className={P}>
        Start by checking two dates: when your lease term ends, and when the landlord received your
        notice. Everything else in this guide hangs on those two.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'Do foreign tenants get the same protection as Korean tenants?',
            a: (
              <p>
                For the core protections, yes. The Immigration Act (art. 88-3) provides that your
                foreigner registration and place-of-sojourn reporting stand in for the resident
                registration the Housing Lease Protection Act requires — so a registered foreign
                tenant with a fixed-date stamp holds the same opposing power and priority as a
                Korean tenant. What changes in practice is proof: keep your registration records
                from each address.
              </p>
            ),
          },
          {
            q: 'My deposit is protected by guarantee insurance (전세보증보험). Does this guide still apply?',
            a: (
              <p>
                If you bought deposit guarantee insurance, your first call is the guarantor (for
                example HUG), and their claim process has its own notice requirements and deadlines
                — check your policy early, because some steps, like the lease registration order,
                are also conditions for paying out. The sequence in this guide still matters for
                everything the insurance does not cover.
              </p>
            ),
          },
          {
            q: 'The unit is mortgaged. Should I be worried?',
            a: (
              <p>
                Check the property register. If the mortgage was recorded <em>before</em> you moved
                in and got your fixed-date stamp, the bank is ahead of you in any auction — which is
                exactly when acting early matters. If your registration and fixed date came first,
                you rank ahead of later creditors. This single fact often decides how aggressive
                your strategy should be.
              </p>
            ),
          },
          {
            q: "I've already left Korea. Is the deposit lost?",
            a: (
              <p>
                No — the claim survives your departure, and a lawsuit can be run through a
                Korean attorney under a power of attorney without you returning. What weakens
                abroad is leverage: if you deregistered and vacated without a lease registration
                order, priority may be an issue, so have the property register and your dates
                reviewed before deciding how to proceed.
              </p>
            ),
          },
          {
            q: 'Can I claim interest on top of the deposit?',
            a: (
              <p>
                Once you have properly vacated and the landlord is in delay, yes — 5% per year as
                civil statutory interest, rising to 12% per year from the day after a court
                complaint is served. On a large deposit this adds up quickly, and landlords know
                it: quoting the 12% figure in your demand letter is often persuasive by itself.
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
