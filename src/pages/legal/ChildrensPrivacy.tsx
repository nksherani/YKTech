import { Link } from 'react-router-dom'
import LegalPage, { type LegalSection } from '../../components/legal/LegalPage'
import { company } from '../../data/company'

const ChildrensPrivacy = () => {
  const sections: LegalSection[] = [
    {
      id: 'introduction',
      heading: 'Introduction',
      body: (
        <>
          <p>
            This Children&rsquo;s Privacy Notice explains how {company.legalName}, doing business as{' '}
            {company.dba}, approaches the
            privacy of children who use <em>Alice&rsquo;s Adventures Learner</em>, our educational
            literacy app for children ages 5–10. It supplements our general{' '}
            <Link to="/privacy-policy">Privacy Policy</Link> and is designed to comply with the U.S.
            Children&rsquo;s Online Privacy Protection Act (“COPPA”), the GDPR provisions concerning
            children (“GDPR-Kids”), and the Google Play “Designed for Families” requirements.
          </p>
          <p>
            We have built Alice&rsquo;s Adventures Learner to be <strong>privacy-protective by
            default</strong>. The guiding principle is simple: a child should be able to learn and
            play without us collecting their personal data.
          </p>
        </>
      ),
    },
    {
      id: 'what-we-collect',
      heading: 'Information We Do and Do Not Collect From Children',
      body: (
        <>
          <p>
            <strong>By default, the app is offline-first.</strong> A child&rsquo;s learning progress,
            collected words (the “Deck of Wonders”), drawings, and game results are stored{' '}
            <strong>only on the device</strong> and are not transmitted to us.
          </p>
          <p>We do not:</p>
          <ul>
            <li>require a child to provide personal information to use the app;</li>
            <li>ask children for names, email addresses, phone numbers, or precise location;</li>
            <li>build profiles of children or track them across apps or websites;</li>
            <li>show behavioural or targeted advertising to children;</li>
            <li>include third-party advertising or analytics SDKs in the child area; or</li>
            <li>include external links or purchase interfaces in the child area.</li>
          </ul>
          <p>
            If a parent chooses to enable optional features such as cross-device sync or multiple
            child profiles, limited information (such as an account identifier and learning progress)
            may be stored in our cloud services solely to provide that feature — and only after
            verifiable parental consent (see below).
          </p>
        </>
      ),
    },
    {
      id: 'parental-consent',
      heading: 'Verifiable Parental Consent',
      body: (
        <>
          <p>
            Optional features that involve collecting any personal data are gated behind a
            parent-controlled “Parent Zone,” which is protected by a simple adult-verification step. We
            obtain verifiable parental consent before any personal data of a child leaves the device
            for these optional features.
          </p>
          <p>
            We will not condition a child&rsquo;s participation in an activity on the disclosure of
            more personal information than is reasonably necessary.
          </p>
        </>
      ),
    },
    {
      id: 'parental-rights',
      heading: 'Parental Rights & Controls',
      body: (
        <>
          <p>As a parent or guardian, you have the right to:</p>
          <ul>
            <li>review the personal information (if any) we have collected from your child;</li>
            <li>request that we delete your child&rsquo;s personal information;</li>
            <li>
              refuse to permit further collection or use of your child&rsquo;s information; and
            </li>
            <li>revoke any consent you previously provided.</li>
          </ul>
          <p>
            Because data is stored on-device by default, you can remove most data simply by clearing
            the app data or uninstalling the app. For any data held in optional cloud features, contact
            us using the details below and we will act on your request promptly.
          </p>
          <p>
            The Parent Zone also provides controls such as screen-time limits, audio settings, a
            dyslexia-friendly font, and per-child profiles.
          </p>
        </>
      ),
    },
    {
      id: 'no-advertising',
      heading: 'No Advertising or Third-Party Tracking',
      body: (
        <p>
          The app contains no advertising and no third-party tracking technologies in the child
          experience. Any in-app purchase option (for the one-time premium unlock) is presented only
          within the Parent Zone, never to the child, who instead sees a friendly “ask a grown-up”
          screen.
        </p>
      ),
    },
    {
      id: 'security',
      heading: 'Data Security',
      body: (
        <p>
          We use reasonable administrative, technical, and physical safeguards to protect any
          information processed through optional cloud features, including encryption in transit and at
          rest where supported. Because the default experience keeps data on the device, the most
          sensitive information typically never leaves your child&rsquo;s device.
        </p>
      ),
    },
    {
      id: 'content',
      heading: 'Educational Content & Sources',
      body: (
        <p>
          The story content is based on Lewis Carroll&rsquo;s <em>Alice&rsquo;s Adventures in
          Wonderland</em>, which is in the public domain and sourced from Project Gutenberg. We
          acknowledge this source within the app. Vocabulary, phonics, and comprehension activities are
          curated to be age-appropriate and aligned with common literacy standards.
        </p>
      ),
    },
    {
      id: 'gdpr-kids',
      heading: 'Children in the EEA & UK (GDPR-Kids)',
      body: (
        <p>
          For children in the European Economic Area and the United Kingdom, we do not profile
          children or use their data for marketing. Where any processing of a child&rsquo;s personal
          data occurs in connection with optional features, we rely on consent given or authorised by
          the holder of parental responsibility, consistent with Article 8 of the GDPR and applicable
          national age thresholds.
        </p>
      ),
    },
    {
      id: 'changes',
      heading: 'Changes to This Notice',
      body: (
        <p>
          We may update this Children&rsquo;s Privacy Notice from time to time. If we make material
          changes that affect the information we collect from children, we will provide notice and,
          where required, obtain renewed parental consent.
        </p>
      ),
    },
    {
      id: 'contact',
      heading: 'Contact Us',
      body: (
        <>
          <p>
            If you are a parent or guardian and have questions or requests regarding your child&rsquo;s
            privacy, please contact us at:
          </p>
          <address className="not-italic">
            {company.legalNameWithDba}
            <br />
            {company.address.full}
            <br />
            Email: <a href={`mailto:${company.privacyEmail}`}>{company.privacyEmail}</a>
            <br />
            Phone: <a href={company.phoneHref}>{company.phone}</a>
          </address>
        </>
      ),
    },
  ]

  return (
    <LegalPage
      title="Children's Privacy Notice"
      description="How we protect the privacy of children who use Alice's Adventures Learner — in line with COPPA, GDPR-Kids, and Google Play's Designed for Families requirements."
      intro={
        <p>
          Children deserve special protection online. This notice explains, in plain language, how our
          children&rsquo;s app is designed to keep kids&rsquo; data safe and to put parents in control.
        </p>
      }
      sections={sections}
    />
  )
}

export default ChildrensPrivacy
