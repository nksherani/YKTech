import { Link } from 'react-router-dom'
import LegalPage, { type LegalSection } from '../../components/legal/LegalPage'
import { company } from '../../data/company'

const ContactBlock = () => (
  <address className="not-italic">
    {company.legalName}
    <br />
    {company.address.line1}
    <br />
    {company.address.city}, {company.address.state} {company.address.zip}, {company.address.country}
    <br />
    Email:{' '}
    <a href={`mailto:${company.privacyEmail}`}>{company.privacyEmail}</a>
    <br />
    Phone: <a href={company.phoneHref}>{company.phone}</a>
  </address>
)

const PrivacyPolicy = () => {
  const sections: LegalSection[] = [
    {
      id: 'introduction',
      heading: 'Introduction & Scope',
      body: (
        <>
          <p>
            {company.legalName} (“{company.name}”, “we”, “us”, or “our”) is committed to protecting
            your privacy and handling your personal data transparently and responsibly. This Privacy
            Policy explains what information we collect, why we collect it, how we use and share it,
            and the rights and choices available to you.
          </p>
          <p>This Privacy Policy applies to:</p>
          <ul>
            <li>
              Our website at <a href={company.website}>{company.domain}</a> and any associated
              marketing pages;
            </li>
            <li>
              Our consumer applications, including <em>Alice&rsquo;s Adventures Learner</em> and{' '}
              <em>Together — Relationship Check-In</em>; and
            </li>
            <li>
              Our business software, including the <em>Agency Platform</em>, and any related
              services, together the “Services”.
            </li>
          </ul>
          <p>
            Because our products serve very different audiences, Section&nbsp;6 sets out
            product-specific privacy practices that supplement this general policy. Where a
            product-specific notice conflicts with this general policy, the product-specific notice
            controls for that product.
          </p>
        </>
      ),
    },
    {
      id: 'who-we-are',
      heading: 'Who We Are (Data Controller)',
      body: (
        <>
          <p>
            For the purposes of the EU General Data Protection Regulation (“GDPR”), the UK GDPR, and
            similar laws, {company.legalName} is the “data controller” of the personal data described
            in this policy, except where we act as a “data processor” on behalf of our business
            customers (see Section&nbsp;6.3 regarding the Agency Platform).
          </p>
          <p>You can reach us, including our privacy team, at:</p>
          <ContactBlock />
        </>
      ),
    },
    {
      id: 'definitions',
      heading: 'Key Definitions',
      body: (
        <ul>
          <li>
            <strong>Personal data / personal information</strong> means any information relating to
            an identified or identifiable individual.
          </li>
          <li>
            <strong>Processing</strong> means any operation performed on personal data, such as
            collection, storage, use, disclosure, or deletion.
          </li>
          <li>
            <strong>Controller</strong> means the entity that determines the purposes and means of
            processing personal data.
          </li>
          <li>
            <strong>Processor</strong> means an entity that processes personal data on behalf of a
            controller.
          </li>
          <li>
            <strong>Special category / sensitive data</strong> means data such as health, sexual
            orientation, or data concerning children that benefits from additional protection.
          </li>
        </ul>
      ),
    },
    {
      id: 'information-we-collect',
      heading: 'Information We Collect',
      body: (
        <>
          <p>We collect the following categories of information:</p>
          <h3>a. Information you provide to us</h3>
          <ul>
            <li>
              <strong>Contact &amp; enquiry data</strong> — your name, email address, phone number,
              company name, and the contents of any message you send through our contact form or by
              email.
            </li>
            <li>
              <strong>Account data</strong> — credentials and profile information when you create an
              account in one of our applications (for example, display name and, optionally, a
              profile photo).
            </li>
            <li>
              <strong>User content</strong> — content you create within our Services, such as
              journal entries, check-in responses, lists, drafts, or media you upload.
            </li>
            <li>
              <strong>Payment data</strong> — where you purchase a subscription or in-app upgrade,
              payment is processed by the relevant app store or payment provider; we receive
              confirmation of the transaction but not your full card details.
            </li>
          </ul>
          <h3>b. Information collected automatically</h3>
          <ul>
            <li>
              <strong>Device &amp; technical data</strong> — IP address, device type, operating
              system, app version, language, and similar diagnostic information.
            </li>
            <li>
              <strong>Usage data</strong> — pages viewed, features used, and aggregate analytics that
              help us understand and improve the Services.
            </li>
            <li>
              <strong>Cookies &amp; similar technologies</strong> — see our{' '}
              <Link to="/cookie-policy">Cookie Policy</Link> for details.
            </li>
          </ul>
          <h3>c. Information from third parties</h3>
          <ul>
            <li>
              <strong>Authentication providers</strong> — if you sign in with Google, we receive
              basic profile information (such as name, email, and photo) consistent with your
              consent.
            </li>
            <li>
              <strong>Connected platforms (Agency Platform)</strong> — when our business customers
              connect social-media accounts, we process data made available by those platforms (see
              Section&nbsp;6.3).
            </li>
          </ul>
          <p>
            We do <strong>not</strong> knowingly collect personal data directly from children for
            our own purposes. See Section&nbsp;6.1 and our{' '}
            <Link to="/childrens-privacy">Children&rsquo;s Privacy Notice</Link>.
          </p>
        </>
      ),
    },
    {
      id: 'how-we-use',
      heading: 'How We Use Your Information & Legal Bases',
      body: (
        <>
          <p>
            We process personal data only where we have a valid legal basis under the GDPR/UK GDPR.
            The table below summarises our purposes and corresponding legal bases.
          </p>
          <table>
            <thead>
              <tr>
                <th>Purpose</th>
                <th>Legal basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Providing, operating, and maintaining the Services</td>
                <td>Performance of a contract</td>
              </tr>
              <tr>
                <td>Responding to enquiries and providing customer support</td>
                <td>Legitimate interests; performance of a contract</td>
              </tr>
              <tr>
                <td>Sending service and transactional communications</td>
                <td>Performance of a contract; legitimate interests</td>
              </tr>
              <tr>
                <td>Sending marketing communications (where applicable)</td>
                <td>Consent (you may withdraw at any time)</td>
              </tr>
              <tr>
                <td>Improving, securing, and analysing the Services</td>
                <td>Legitimate interests</td>
              </tr>
              <tr>
                <td>Processing payments and managing subscriptions</td>
                <td>Performance of a contract</td>
              </tr>
              <tr>
                <td>Complying with legal obligations and enforcing our terms</td>
                <td>Legal obligation; legitimate interests</td>
              </tr>
            </tbody>
          </table>
          <p>
            Where we rely on legitimate interests, we have balanced those interests against your
            rights and freedoms. You may object to such processing as described in Section&nbsp;12.
          </p>
        </>
      ),
    },
    {
      id: 'product-specific',
      heading: 'Product-Specific Privacy Practices',
      body: (
        <>
          <h3>6.1 Alice&rsquo;s Adventures Learner (children&rsquo;s app)</h3>
          <p>
            Alice&rsquo;s Adventures Learner is designed for children ages 5–10 and is built to be
            “offline-first.” By default, a child&rsquo;s learning progress, drawings, and word decks
            are stored <strong>only on the device</strong> and are not transmitted to us.
          </p>
          <ul>
            <li>We do not serve advertising and we do not use third-party trackers in the child area.</li>
            <li>
              We do not build profiles of children or use their data for behavioural advertising.
            </li>
            <li>
              Optional cross-device sync and accounts are gated behind a parent-controlled “Parent
              Zone” and require verifiable parental consent before any personal data leaves the
              device.
            </li>
            <li>
              Source story text is from Project Gutenberg (public domain) and is acknowledged in the
              app.
            </li>
          </ul>
          <p>
            For full details, see our dedicated{' '}
            <Link to="/childrens-privacy">Children&rsquo;s Privacy Notice (COPPA &amp; GDPR-Kids)</Link>.
          </p>

          <h3>6.2 Together — Relationship Check-In (couples wellness app)</h3>
          <p>
            Together processes data that may be sensitive, including reflections about your
            relationship and wellbeing. We apply a “private-by-design” model:
          </p>
          <ul>
            <li>
              <strong>Journal entries are never shared</strong> with a partner and are stored scoped
              to your account only.
            </li>
            <li>
              <strong>Individual check-in responses are not shared</strong> with a partner; only an
              aggregated “pulse” is shown when both partners complete a check-in.
            </li>
            <li>
              <strong>Appreciations</strong> are hidden until both partners participate in a weekly
              reveal; <strong>Vitals</strong> are private to each user.
            </li>
            <li>
              Data is stored using Google Firebase (Authentication, Firestore, Cloud Functions, Cloud
              Messaging) and is encrypted in transit and at rest.
            </li>
            <li>
              You can delete your data or your entire account from within the app at any time;
              account deletion removes your authentication record and associated user data.
            </li>
            <li>
              Optional AI features (where enabled) send only the minimum necessary, where possible
              anonymised, content to our AI providers to generate a suggestion; AI output is always a
              suggestion and is never sent automatically on your behalf.
            </li>
          </ul>

          <h3>6.3 Agency Platform (business software)</h3>
          <p>
            The Agency Platform is a self-hosted, multi-tenant tool used by agencies to manage social
            media on behalf of their own clients. In this context:
          </p>
          <ul>
            <li>
              The agency that deploys and operates the platform is generally the{' '}
              <strong>controller</strong> of the client and end-user data it processes; where we
              provide hosted components or support, we act as a <strong>processor</strong> on the
              agency&rsquo;s behalf, subject to a data processing agreement.
            </li>
            <li>
              The platform connects to third-party platforms (e.g., Meta/Facebook, Instagram, X) via
              official APIs and OAuth. Use of those platforms is also governed by their own terms and
              privacy policies.
            </li>
            <li>
              Each client&rsquo;s data is logically isolated in a multi-tenant data model. Customers
              may bring their own AI API keys, in which case AI processing is governed by the
              applicable AI provider&rsquo;s terms.
            </li>
            <li>
              Human-in-the-loop approval is required for ad-spend decisions and brand-sensitive or
              regulated content.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'sharing',
      heading: 'How We Share Information',
      body: (
        <>
          <p>
            We do not sell your personal data. We share personal data only in the following
            circumstances:
          </p>
          <ul>
            <li>
              <strong>Service providers / sub-processors</strong> — trusted vendors who process data
              on our behalf under contract, such as cloud hosting and database providers (e.g., Google
              Firebase / Google Cloud), analytics providers, email/communication providers, and AI
              providers. They may only use the data to provide services to us.
            </li>
            <li>
              <strong>Payment &amp; app-store providers</strong> — to process purchases and
              subscriptions.
            </li>
            <li>
              <strong>Professional advisers</strong> — lawyers, auditors, and insurers where
              necessary.
            </li>
            <li>
              <strong>Legal &amp; safety</strong> — where required by law, regulation, legal process,
              or to protect the rights, property, or safety of users or the public.
            </li>
            <li>
              <strong>Business transfers</strong> — in connection with a merger, acquisition, or sale
              of assets, subject to this Privacy Policy.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'international-transfers',
      heading: 'International Data Transfers',
      body: (
        <p>
          We are based in the United States, and our service providers may process data in the United
          States and other countries. Where we transfer personal data from the European Economic
          Area, the United Kingdom, or Switzerland to a country that has not received an adequacy
          decision, we rely on appropriate safeguards such as the European Commission&rsquo;s
          Standard Contractual Clauses (and the UK International Data Transfer Addendum), together with
          supplementary measures where needed. You may request a copy of the relevant safeguards by
          contacting us.
        </p>
      ),
    },
    {
      id: 'retention',
      heading: 'Data Retention',
      body: (
        <>
          <p>
            We keep personal data only for as long as necessary for the purposes described in this
            policy, including to provide the Services, comply with legal obligations, resolve
            disputes, and enforce our agreements. Retention periods vary by data type and context, for
            example:
          </p>
          <ul>
            <li>Contact-form enquiries: typically retained while we follow up and for a reasonable period thereafter.</li>
            <li>Account and user content: retained while your account is active.</li>
            <li>Deleted data: removed within a reasonable period after you delete your account or content, subject to backup cycles and legal retention requirements.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'security',
      heading: 'How We Protect Your Information',
      body: (
        <p>
          We implement appropriate technical and organisational measures to protect personal data,
          including encryption in transit and at rest where supported by our infrastructure, access
          controls, least-privilege principles, and secure development practices. No method of
          transmission or storage is completely secure, however, and we cannot guarantee absolute
          security. If we become aware of a personal-data breach that affects you, we will notify you
          and the relevant authorities as required by law.
        </p>
      ),
    },
    {
      id: 'your-rights',
      heading: 'Your Privacy Rights (GDPR / UK GDPR)',
      body: (
        <>
          <p>
            If you are located in the EEA, the UK, or Switzerland, you have the following rights,
            subject to certain conditions and exceptions:
          </p>
          <ul>
            <li><strong>Access</strong> — to obtain a copy of the personal data we hold about you.</li>
            <li><strong>Rectification</strong> — to correct inaccurate or incomplete data.</li>
            <li><strong>Erasure</strong> — to request deletion of your data (the “right to be forgotten”).</li>
            <li><strong>Restriction</strong> — to restrict processing in certain circumstances.</li>
            <li><strong>Portability</strong> — to receive your data in a structured, machine-readable format.</li>
            <li><strong>Objection</strong> — to object to processing based on legitimate interests or to direct marketing.</li>
            <li>
              <strong>Withdraw consent</strong> — where processing is based on consent, you may
              withdraw it at any time without affecting prior processing.
            </li>
            <li>
              <strong>Lodge a complaint</strong> — with your local data protection authority (see
              Section&nbsp;18).
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us using the details in Section&nbsp;18. We will
            respond within the timeframes required by applicable law and may need to verify your
            identity first.
          </p>
        </>
      ),
    },
    {
      id: 'us-rights',
      heading: 'U.S. State Privacy Rights (CCPA/CPRA & Others)',
      body: (
        <>
          <p>
            If you are a resident of California or another U.S. state with comprehensive privacy
            legislation, you may have rights to:
          </p>
          <ul>
            <li>Know and access the categories and specific pieces of personal information we collect;</li>
            <li>Request deletion or correction of your personal information;</li>
            <li>Opt out of the “sale” or “sharing” of personal information; and</li>
            <li>Not be discriminated against for exercising your rights.</li>
          </ul>
          <p>
            We do not sell personal information, and we do not share personal information for
            cross-context behavioural advertising. To exercise your rights, contact us using the
            details in Section&nbsp;18. You may use an authorised agent where permitted by law.
          </p>
        </>
      ),
    },
    {
      id: 'childrens-privacy',
      heading: "Children's Privacy",
      body: (
        <p>
          Our business software and our website are not directed to children. Alice&rsquo;s
          Adventures Learner is designed for children but is built to avoid collecting personal data
          from children for our own purposes; any optional account features require verifiable
          parental consent. We comply with the U.S. Children&rsquo;s Online Privacy Protection Act
          (“COPPA”) and the GDPR provisions concerning children. Please review our dedicated{' '}
          <Link to="/childrens-privacy">Children&rsquo;s Privacy Notice</Link> for full details.
        </p>
      ),
    },
    {
      id: 'automated-ai',
      heading: 'Automated Decision-Making & AI Features',
      body: (
        <p>
          Some of our Services include optional AI-assisted features (for example, suggested message
          tones, reflective prompts, or content drafts). These features generate suggestions to
          assist you; they do not make decisions that produce legal or similarly significant effects
          about you without human involvement. AI output is always presented for your review and is
          never sent or published automatically on your behalf without a human approval step.
        </p>
      ),
    },
    {
      id: 'third-party',
      heading: 'Third-Party Links & Services',
      body: (
        <p>
          Our Services may contain links to third-party websites or integrate with third-party
          platforms. We are not responsible for the privacy practices of those third parties. We
          encourage you to review their privacy policies before providing them with any personal data.
        </p>
      ),
    },
    {
      id: 'changes',
      heading: 'Changes to This Policy',
      body: (
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices,
          technology, or legal requirements. When we make material changes, we will update the “Last
          updated” date above and, where appropriate, provide additional notice. Your continued use of
          the Services after an update constitutes acceptance of the revised policy.
        </p>
      ),
    },
    {
      id: 'contact',
      heading: 'How to Contact Us',
      body: (
        <>
          <p>
            If you have questions about this Privacy Policy or wish to exercise your rights, please
            contact us at:
          </p>
          <ContactBlock />
          <p>
            If you are in the EEA, the UK, or Switzerland and believe we have not adequately addressed
            your concern, you have the right to lodge a complaint with your local supervisory
            authority.
          </p>
        </>
      ),
    },
  ]

  return (
    <LegalPage
      title="Privacy Policy"
      description="How YK Tech Solutions collects, uses, shares, and protects your personal data across our website and products, in line with the GDPR, UK GDPR, CCPA/CPRA, COPPA, and other applicable laws."
      intro={
        <p>
          Your privacy matters to us. This policy is written to be as clear as possible while meeting
          our obligations under global privacy laws. Please read it carefully, and contact us with any
          questions.
        </p>
      }
      sections={sections}
    />
  )
}

export default PrivacyPolicy
