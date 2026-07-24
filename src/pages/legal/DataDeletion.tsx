import { Link } from 'react-router-dom'
import LegalPage, { type LegalSection } from '../../components/legal/LegalPage'
import { company } from '../../data/company'

const DataDeletion = () => {
  const sections: LegalSection[] = [
    {
      id: 'overview',
      heading: 'Overview & Commitment',
      body: (
        <p>
          At {company.name}, we value your privacy and are committed to protecting your personal data. 
          In accordance with global privacy regulations (including GDPR, CCPA/CPRA, and app store requirements), 
          we provide you with clear instructions and options to request the complete deletion of your 
          personal information from our systems.
        </p>
      ),
    },
    {
      id: 'how-to-request',
      heading: 'How to Request Data Deletion',
      body: (
        <>
          <p>
            You can request the deletion of your account and all associated personal data at any time. 
            To do so, please send an email request to our customer success team:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
            <p className="font-semibold text-gray-900 mb-2">Request via Email:</p>
            <p className="text-gray-700">
              Send an email to:{' '}
              <a href={`mailto:${company.privacyEmail}`} className="text-primary-600 font-bold hover:underline">
                {company.privacyEmail}
              </a>
            </p>
            <p className="text-gray-700 mt-2">
              Subject Line: <code className="bg-gray-200 px-2 py-0.5 rounded text-sm font-mono text-gray-800">Data Deletion Request</code>
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'required-info',
      heading: 'Information to Include',
      body: (
        <>
          <p>
            To help us locate your data and process your request efficiently, please include the following details in your email:
          </p>
          <ul>
            <li>
              <strong>Application/Service Name:</strong> The specific product or application you used 
              (e.g., <em>Together — Relationship Check-In</em>, <em>Alice&rsquo;s Adventures Learner</em>, or our website/business services).
            </li>
            <li>
              <strong>Account Identifier:</strong> The email address, username, or login method (e.g., Google Sign-In, Apple Sign-In) 
              you used to register your account.
            </li>
            <li>
              <strong>Explicit Deletion Request:</strong> A clear statement indicating that you wish to have your account 
              and associated data permanently deleted.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'in-app-deletion',
      heading: 'In-App Account Deletion (Self-Service)',
      body: (
        <>
          <p>
            Where supported by the application, you can perform self-service account deletion directly within the app itself:
          </p>
          <ul>
            <li>
              <strong>Together — Relationship Check-In:</strong> Open the app, go to Settings &gt; Account, and select{' '}
              <strong>Delete Account</strong>. This will permanently remove your login record and all associated check-in details.
            </li>
            <li>
              <strong>Alice&rsquo;s Adventures Learner:</strong> This app is built to be &quot;offline-first&quot;. By default, all 
              learning progress and data are stored strictly on your local device. Simply deleting or uninstalling the app from your 
              device will delete all local progress data. If you enabled the optional cross-device backup feature, deleting your account 
              via the Parent Zone settings will remove all backup data from our cloud databases.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'timeline-and-verification',
      heading: 'Verification & Timeline',
      body: (
        <>
          <p>
            To protect your privacy and security, we must verify your identity before processing the request. 
            Typically, verifying your request from the email address associated with the account is sufficient. We may ask for 
            additional verification if necessary.
          </p>
          <p>
            Once verified:
          </p>
          <ul>
            <li>We will delete your personal data within 30 days of receiving the request.</li>
            <li>We will confirm completion of the deletion process via email.</li>
            <li>
              Please note that certain information may be retained for legal, auditing, or backup purposes 
              as permitted under applicable law, as detailed in our <Link to="/privacy-policy">Privacy Policy</Link>.
            </li>
          </ul>
        </>
      ),
    },
  ]

  return (
    <LegalPage
      title="Data Deletion Instructions"
      description="Step-by-step instructions on how to request the deletion of your account and personal data from our systems."
      intro={
        <p>
          If you no longer wish to use our Services, you have the right to request the deletion of your account and associated personal data. 
          This page explains how to initiate that request.
        </p>
      }
      sections={sections}
    />
  )
}

export default DataDeletion
