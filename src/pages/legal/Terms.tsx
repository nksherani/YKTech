import { Link } from 'react-router-dom'
import LegalPage, { type LegalSection } from '../../components/legal/LegalPage'
import { company } from '../../data/company'

const Terms = () => {
  const sections: LegalSection[] = [
    {
      id: 'agreement',
      heading: 'Agreement to These Terms',
      body: (
        <>
          <p>
            These Terms and Conditions (“Terms”) form a legally binding agreement between you and{' '}
            {company.legalName}, doing business as {company.dba} (“{company.name}”, “we”, “us”, or
            “our”) governing your access to and use of our website, applications, and related
            services (collectively, the “Services”).
          </p>
          <p>
            By accessing or using the Services, creating an account, or clicking to accept these
            Terms, you confirm that you have read, understood, and agree to be bound by these Terms
            and by our <Link to="/privacy-policy">Privacy Policy</Link>,{' '}
            <Link to="/acceptable-use">Acceptable Use Policy</Link>, and{' '}
            <Link to="/cookie-policy">Cookie Policy</Link>, each incorporated by reference. If you do
            not agree, you must not use the Services.
          </p>
        </>
      ),
    },
    {
      id: 'definitions',
      heading: 'Definitions',
      body: (
        <ul>
          <li><strong>“Account”</strong> means a registered user account for one of our Services.</li>
          <li><strong>“Content”</strong> means any text, images, audio, or other materials.</li>
          <li><strong>“User Content”</strong> means Content you submit, create, or upload.</li>
          <li><strong>“Subscription”</strong> means a paid, recurring plan for access to premium features.</li>
        </ul>
      ),
    },
    {
      id: 'eligibility',
      heading: 'Eligibility & Accounts',
      body: (
        <>
          <p>
            You must be at least the age of majority in your jurisdiction (or have the consent of a
            parent or legal guardian) to create an account or enter into these Terms. Our business
            software and website are intended for adults. Alice&rsquo;s Adventures Learner is designed
            for use by children under the supervision of a parent or guardian, and any account
            features are controlled by the supervising adult.
          </p>
          <p>You are responsible for:</p>
          <ul>
            <li>providing accurate, current, and complete information;</li>
            <li>maintaining the confidentiality of your login credentials; and</li>
            <li>all activity that occurs under your Account.</li>
          </ul>
          <p>Notify us promptly of any unauthorised use of your Account.</p>
        </>
      ),
    },
    {
      id: 'license',
      heading: 'Licence to Use the Services',
      body: (
        <>
          <p>
            Subject to your compliance with these Terms, we grant you a limited, non-exclusive,
            non-transferable, revocable licence to access and use the Services for your personal or
            internal business purposes.
          </p>
          <p>You agree not to, and not to permit others to:</p>
          <ul>
            <li>copy, modify, distribute, sell, or lease any part of the Services;</li>
            <li>reverse engineer or attempt to extract source code, except as permitted by law;</li>
            <li>circumvent or disable security or access controls; or</li>
            <li>use the Services in a manner that violates the <Link to="/acceptable-use">Acceptable Use Policy</Link>.</li>
          </ul>
          <p>
            The Agency Platform is provided as software that you may self-host; your use of any
            self-hosted deployment is subject to these Terms and any applicable software licence
            provided with the product.
          </p>
        </>
      ),
    },
    {
      id: 'billing',
      heading: 'Subscriptions, Trials, Purchases & Billing',
      body: (
        <>
          <p>
            Certain features are offered on a free basis, while others require a one-time purchase or
            a recurring Subscription.
          </p>
          <ul>
            <li>
              <strong>Free trials</strong> (for example, Together&rsquo;s 21-day Pro trial)
              automatically convert to the applicable plan unless cancelled before the trial ends,
              where stated at sign-up. Trials may be limited to one per user or couple.
            </li>
            <li>
              <strong>Subscriptions</strong> renew automatically for the chosen period until
              cancelled. You can cancel at any time through the relevant app store or account
              settings; cancellation takes effect at the end of the current billing period.
            </li>
            <li>
              <strong>Payments</strong> are processed by the applicable app store (e.g., Apple App
              Store, Google Play) or payment provider, subject to their terms.
            </li>
            <li>
              <strong>Prices</strong> may change; we will give notice of changes as required by law,
              and changes will not apply retroactively to the current paid period.
            </li>
          </ul>
          <p>
            Refunds and cancellations are governed by our{' '}
            <Link to="/refund-policy">Refund &amp; Cancellation Policy</Link> and the policies of the
            relevant app store.
          </p>
        </>
      ),
    },
    {
      id: 'user-content',
      heading: 'User Content',
      body: (
        <>
          <p>
            You retain ownership of your User Content. You grant us a limited, worldwide,
            non-exclusive, royalty-free licence to host, store, process, and display your User Content
            solely as necessary to operate and provide the Services to you (for example, to sync your
            data across your devices or, where applicable, to a connected partner).
          </p>
          <p>
            You are solely responsible for your User Content and represent that you have the necessary
            rights to it and that it does not violate any law or the rights of any third party.
          </p>
        </>
      ),
    },
    {
      id: 'intellectual-property',
      heading: 'Intellectual Property',
      body: (
        <p>
          The Services, including all software, design, text, graphics, logos, and other materials
          (excluding User Content and third-party materials), are owned by or licensed to{' '}
          {company.legalName} and are protected by intellectual property laws. Public-domain source
          materials (such as the text of <em>Alice&rsquo;s Adventures in Wonderland</em> via Project
          Gutenberg) are used and acknowledged accordingly. Except for the limited licence granted
          above, no rights are transferred to you.
        </p>
      ),
    },
    {
      id: 'third-party',
      heading: 'Third-Party Services & Platforms',
      body: (
        <p>
          The Services may interoperate with third-party platforms and services (for example,
          authentication providers, app stores, cloud infrastructure, and social-media platforms such
          as Meta and X used by the Agency Platform). Your use of those third parties is governed by
          their own terms and privacy policies, and we are not responsible for them. You are
          responsible for complying with the terms of any platform you connect to the Services.
        </p>
      ),
    },
    {
      id: 'ai-features',
      heading: 'AI Features',
      body: (
        <p>
          Some Services include optional AI-assisted features that generate suggestions such as
          drafts, tones, or prompts. AI output may be inaccurate, incomplete, or inappropriate and is
          provided for your review only. You are responsible for reviewing and approving any AI output
          before relying on, sending, or publishing it. AI features are not a substitute for
          professional judgment.
        </p>
      ),
    },
    {
      id: 'no-professional-advice',
      heading: 'No Professional, Medical, or Therapeutic Advice',
      body: (
        <p>
          Our wellness-oriented products, including <em>Together — Relationship Check-In</em>, are
          tools for personal reflection and connection. They are <strong>not</strong> therapy,
          counselling, or medical, psychological, or professional advice, and they do not create a
          therapist–client or any other professional relationship. If you are experiencing a crisis or
          need professional help, please contact a qualified professional or your local emergency
          services.
        </p>
      ),
    },
    {
      id: 'privacy',
      heading: 'Privacy',
      body: (
        <p>
          Our collection and use of personal data in connection with the Services is described in our{' '}
          <Link to="/privacy-policy">Privacy Policy</Link>. By using the Services, you acknowledge that
          you have read and understood it.
        </p>
      ),
    },
    {
      id: 'disclaimers',
      heading: 'Disclaimers',
      body: (
        <p>
          THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND, WHETHER
          EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE
          UNINTERRUPTED, ERROR-FREE, OR SECURE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN
          WARRANTIES, SO SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.
        </p>
      ),
    },
    {
      id: 'liability',
      heading: 'Limitation of Liability',
      body: (
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, {company.legalName.toUpperCase()} AND ITS OFFICERS,
          DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM OR
          RELATED TO YOUR USE OF THE SERVICES. OUR TOTAL AGGREGATE LIABILITY FOR ANY CLAIM RELATING TO
          THE SERVICES WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE SERVICE IN THE
          TWELVE MONTHS BEFORE THE CLAIM, OR (B) USD $100. NOTHING IN THESE TERMS EXCLUDES OR LIMITS
          LIABILITY THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
        </p>
      ),
    },
    {
      id: 'indemnification',
      heading: 'Indemnification',
      body: (
        <p>
          You agree to indemnify and hold harmless {company.legalName} and its affiliates from and
          against any claims, liabilities, damages, losses, and expenses (including reasonable legal
          fees) arising out of or related to your User Content, your use of the Services, or your
          violation of these Terms or applicable law.
        </p>
      ),
    },
    {
      id: 'termination',
      heading: 'Term & Termination',
      body: (
        <p>
          These Terms remain in effect while you use the Services. You may stop using the Services and
          delete your Account at any time. We may suspend or terminate your access if you breach these
          Terms, if required by law, or to protect the Services or other users. Provisions that by
          their nature should survive termination (including intellectual property, disclaimers,
          limitation of liability, and indemnification) will survive.
        </p>
      ),
    },
    {
      id: 'changes',
      heading: 'Changes to the Services & Terms',
      body: (
        <p>
          We may modify the Services or these Terms from time to time. When we make material changes to
          these Terms, we will update the “Last updated” date and, where appropriate, provide
          additional notice. Your continued use of the Services after changes take effect constitutes
          acceptance of the revised Terms.
        </p>
      ),
    },
    {
      id: 'governing-law',
      heading: 'Governing Law & Dispute Resolution',
      body: (
        <p>
          These Terms are governed by the laws of the State of Texas, United States, without regard to
          its conflict-of-laws rules, except where mandatory consumer-protection laws of your country
          of residence apply. The state and federal courts located in Texas will have exclusive
          jurisdiction over any dispute, unless applicable law gives you the right to bring proceedings
          in your local courts. You agree to first attempt to resolve any dispute informally by
          contacting us.
        </p>
      ),
    },
    {
      id: 'miscellaneous',
      heading: 'Miscellaneous',
      body: (
        <ul>
          <li>
            <strong>Entire agreement.</strong> These Terms, together with the policies referenced in
            them, are the entire agreement between you and us regarding the Services.
          </li>
          <li>
            <strong>Severability.</strong> If any provision is held unenforceable, the remaining
            provisions will remain in full effect.
          </li>
          <li>
            <strong>No waiver.</strong> Our failure to enforce any right is not a waiver of that right.
          </li>
          <li>
            <strong>Assignment.</strong> You may not assign these Terms without our consent; we may
            assign them in connection with a merger, acquisition, or sale of assets.
          </li>
        </ul>
      ),
    },
    {
      id: 'contact',
      heading: 'Contact Us',
      body: (
        <p>
          Questions about these Terms? Contact us at{' '}
          <a href={`mailto:${company.legalEmail}`}>{company.legalEmail}</a> or {company.phone}, or
          write to us at {company.address.full}.
        </p>
      ),
    },
  ]

  return (
    <LegalPage
      title="Terms & Conditions"
      description="The terms that govern your use of the YK Tech Solutions website, applications, and related services."
      intro={
        <p>
          Please read these Terms carefully before using our Services. They include important
          information about your rights and obligations, as well as limitations and exclusions that
          apply to you.
        </p>
      }
      sections={sections}
    />
  )
}

export default Terms
