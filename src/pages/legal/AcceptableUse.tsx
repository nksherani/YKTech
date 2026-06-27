import { Link } from 'react-router-dom'
import LegalPage, { type LegalSection } from '../../components/legal/LegalPage'
import { company } from '../../data/company'

const AcceptableUse = () => {
  const sections: LegalSection[] = [
    {
      id: 'overview',
      heading: 'Overview',
      body: (
        <p>
          This Acceptable Use Policy (“AUP”) sets out the rules for using the Services provided by{' '}
          {company.legalName}. It is incorporated into and forms part of our{' '}
          <Link to="/terms">Terms &amp; Conditions</Link>. By using the Services, you agree to comply
          with this AUP. We may update it from time to time, and continued use means you accept the
          changes.
        </p>
      ),
    },
    {
      id: 'prohibited-conduct',
      heading: 'Prohibited Conduct',
      body: (
        <>
          <p>You must not use the Services to:</p>
          <ul>
            <li>violate any applicable law, regulation, or third-party right;</li>
            <li>
              post, upload, or transmit content that is unlawful, defamatory, harassing, abusive,
              hateful, threatening, or otherwise objectionable;
            </li>
            <li>
              infringe intellectual property rights, including copyright, trademark, or trade-secret
              rights;
            </li>
            <li>impersonate any person or entity or misrepresent your affiliation;</li>
            <li>collect or harvest personal data of others without a lawful basis and consent;</li>
            <li>engage in fraud, phishing, or any deceptive practice;</li>
            <li>
              transmit spam, chain letters, or other unsolicited bulk communications, or violate
              anti-spam or marketing laws; or
            </li>
            <li>exploit, harm, or attempt to harm minors in any way.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'system-integrity',
      heading: 'System Integrity & Security',
      body: (
        <>
          <p>You must not:</p>
          <ul>
            <li>introduce viruses, malware, or other harmful code;</li>
            <li>
              attempt to gain unauthorised access to the Services, other accounts, or connected
              systems;
            </li>
            <li>probe, scan, or test the vulnerability of any system or breach security measures;</li>
            <li>
              interfere with or disrupt the Services, servers, or networks, including via
              denial-of-service attacks;
            </li>
            <li>
              use automated means (bots, scrapers, crawlers) to access the Services except as
              expressly permitted; or
            </li>
            <li>
              circumvent rate limits, usage quotas, or any access or copy controls.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'platform-specific',
      heading: 'Product-Specific Rules',
      body: (
        <>
          <h3>Agency Platform & social-media automation</h3>
          <p>
            When using the Agency Platform or any feature that connects to third-party platforms (such
            as Meta, Instagram, or X), you must:
          </p>
          <ul>
            <li>comply with the terms, policies, and API rules of each connected platform;</li>
            <li>
              only manage accounts and process data for which you have proper authorisation from the
              account owner;
            </li>
            <li>
              not use automation to generate spam, fake engagement, or content that violates platform
              rules; and
            </li>
            <li>
              ensure required human review for ad-spend decisions and brand-sensitive or regulated
              content.
            </li>
          </ul>
          <h3>Together — Relationship Check-In</h3>
          <p>
            You must use Together respectfully and must not use it to harass, coerce, surveil, or
            abuse another person. Content shared between partners must comply with this AUP.
          </p>
        </>
      ),
    },
    {
      id: 'enforcement',
      heading: 'Enforcement & Reporting',
      body: (
        <>
          <p>
            We may investigate suspected violations of this AUP and may remove content, suspend, or
            terminate accounts, and take any other action we consider appropriate, including reporting
            to law-enforcement authorities. We are not obligated to monitor the Services but may do so.
          </p>
          <p>
            To report a violation of this AUP, please contact us at{' '}
            <a href={`mailto:${company.legalEmail}`}>{company.legalEmail}</a>.
          </p>
        </>
      ),
    },
  ]

  return (
    <LegalPage
      title="Acceptable Use Policy"
      description="The rules that keep our Services safe, lawful, and respectful for everyone who uses them."
      intro={
        <p>
          We want our Services to be safe and beneficial for all users. This policy describes
          activities that are not permitted when using any YK Tech Solutions product.
        </p>
      }
      sections={sections}
    />
  )
}

export default AcceptableUse
