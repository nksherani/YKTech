import { Link } from 'react-router-dom'
import LegalPage, { type LegalSection } from '../../components/legal/LegalPage'
import { company } from '../../data/company'

const CookiePolicy = () => {
  const sections: LegalSection[] = [
    {
      id: 'what-are-cookies',
      heading: 'What Are Cookies?',
      body: (
        <>
          <p>
            Cookies are small text files placed on your device when you visit a website. They are
            widely used to make websites work, to improve efficiency, and to provide reporting
            information. This Cookie Policy explains how {company.legalName}, doing business as{' '}
            {company.dba}, uses cookies and similar
            technologies (such as local storage, pixels, and SDKs) on our website and in our
            applications.
          </p>
          <p>
            This policy should be read together with our{' '}
            <Link to="/privacy-policy">Privacy Policy</Link>.
          </p>
        </>
      ),
    },
    {
      id: 'types',
      heading: 'Types of Cookies We Use',
      body: (
        <>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Purpose</th>
                <th>Consent required?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Strictly necessary</strong></td>
                <td>
                  Enable core functionality such as security, network management, navigation, and
                  remembering your cookie preferences. The website cannot function properly without
                  these.
                </td>
                <td>No (exempt)</td>
              </tr>
              <tr>
                <td><strong>Functional</strong></td>
                <td>Remember your choices and preferences to provide a more personalised experience.</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td><strong>Analytics / performance</strong></td>
                <td>
                  Help us understand how visitors interact with our website so we can measure and
                  improve performance, on an aggregated basis.
                </td>
                <td>Yes</td>
              </tr>
              <tr>
                <td><strong>Marketing</strong></td>
                <td>
                  Used only if and when we run advertising campaigns; we do not currently use
                  cross-context behavioural advertising cookies.
                </td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
          <p>
            Our consumer apps are designed to minimise tracking. In particular, Alice&rsquo;s
            Adventures Learner does <strong>not</strong> use advertising or third-party tracking
            technologies in the child area.
          </p>
        </>
      ),
    },
    {
      id: 'first-third-party',
      heading: 'First-Party & Third-Party Cookies',
      body: (
        <p>
          “First-party” cookies are set by us. “Third-party” cookies are set by our service providers
          (for example, analytics or infrastructure providers) when you use our Services. Third-party
          providers process information according to their own privacy policies. We only allow
          non-essential third-party technologies where you have given consent, where required.
        </p>
      ),
    },
    {
      id: 'managing',
      heading: 'How to Manage Your Cookie Preferences',
      body: (
        <>
          <p>You can control and manage cookies in several ways:</p>
          <ul>
            <li>
              <strong>Consent banner</strong> — where applicable, you can accept or reject
              non-essential cookies, and change your choice at any time.
            </li>
            <li>
              <strong>Browser settings</strong> — most browsers let you block or delete cookies and
              control whether they are accepted. Please note that blocking strictly necessary cookies
              may affect how the website functions.
            </li>
            <li>
              <strong>Device settings</strong> — mobile devices provide controls for advertising
              identifiers and tracking permissions.
            </li>
          </ul>
          <p>
            For more information about cookies, including how to see what cookies have been set, visit{' '}
            <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">
              allaboutcookies.org
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: 'changes',
      heading: 'Changes to This Cookie Policy',
      body: (
        <p>
          We may update this Cookie Policy to reflect changes in the technologies we use or for other
          operational, legal, or regulatory reasons. The “Last updated” date above indicates when this
          policy was last revised.
        </p>
      ),
    },
    {
      id: 'contact',
      heading: 'Contact Us',
      body: (
        <p>
          If you have questions about our use of cookies, contact us at{' '}
          <a href={`mailto:${company.privacyEmail}`}>{company.privacyEmail}</a>.
        </p>
      ),
    },
  ]

  return (
    <LegalPage
      title="Cookie Policy"
      description="How YK Tech Solutions uses cookies and similar technologies, and how you can manage your preferences."
      intro={
        <p>
          We believe in transparency about the technologies we use. This policy explains what cookies
          are, how and why we use them, and the choices available to you.
        </p>
      }
      sections={sections}
    />
  )
}

export default CookiePolicy
