import { Link } from 'react-router-dom'
import LegalPage, { type LegalSection } from '../../components/legal/LegalPage'
import { company } from '../../data/company'

const RefundPolicy = () => {
  const sections: LegalSection[] = [
    {
      id: 'overview',
      heading: 'Overview',
      body: (
        <p>
          This Refund &amp; Cancellation Policy explains how purchases, subscriptions, free trials, and
          refunds work across the {company.legalName} products. It supplements our{' '}
          <Link to="/terms">Terms &amp; Conditions</Link>. Because most purchases are made through app
          stores, the relevant store&rsquo;s policies will also apply and may take precedence for those
          transactions.
        </p>
      ),
    },
    {
      id: 'app-store',
      heading: 'Purchases Through App Stores',
      body: (
        <>
          <p>
            In-app purchases and subscriptions for our mobile apps (including Together&rsquo;s Pro plan
            and Alice&rsquo;s Adventures Learner&rsquo;s one-time premium unlock) are processed by the
            Apple App Store or Google Play. As a result:
          </p>
          <ul>
            <li>billing, renewals, and receipts are managed by the app store;</li>
            <li>
              refund requests for these purchases are handled according to the app store&rsquo;s refund
              policy and should generally be submitted directly to Apple or Google; and
            </li>
            <li>
              you can manage or cancel subscriptions at any time in your app store account settings.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'free-trials',
      heading: 'Free Trials',
      body: (
        <p>
          Where a free trial is offered (for example, Together&rsquo;s 21-day Pro trial), you will not
          be charged during the trial period. If the trial is set to convert to a paid plan, it will do
          so automatically at the end of the trial unless you cancel beforehand. Trials may be limited
          to one per user or couple and cannot be restarted. We will provide in-app reminders before a
          trial ends where stated at sign-up.
        </p>
      ),
    },
    {
      id: 'subscriptions',
      heading: 'Subscription Cancellations',
      body: (
        <>
          <p>
            You may cancel a recurring subscription at any time. When you cancel:
          </p>
          <ul>
            <li>you will continue to have access to paid features until the end of the current billing period;</li>
            <li>your plan will not renew for the next period; and</li>
            <li>
              unless required by law, partial periods are not refunded — you keep access for the period
              you have already paid for.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'one-time',
      heading: 'One-Time Purchases',
      body: (
        <p>
          One-time purchases, such as the premium unlock for Alice&rsquo;s Adventures Learner, grant
          ongoing access to the unlocked content. Refunds for one-time purchases are handled through the
          relevant app store&rsquo;s policy.
        </p>
      ),
    },
    {
      id: 'business',
      heading: 'Business & Self-Hosted Licences',
      body: (
        <p>
          For business products such as the Agency Platform, refund and cancellation terms are set out
          in the applicable order form, licence, or written agreement between you and{' '}
          {company.legalName}. If no separate agreement applies, please contact us to discuss your
          situation.
        </p>
      ),
    },
    {
      id: 'consumer-rights',
      heading: 'Statutory Consumer Rights',
      body: (
        <p>
          Nothing in this policy limits any non-waivable statutory rights you may have as a consumer,
          including any mandatory withdrawal or cancellation rights under the laws of your country of
          residence (such as EU/UK consumer-protection rules). Where such rights apply, they take
          precedence over this policy.
        </p>
      ),
    },
    {
      id: 'how-to-request',
      heading: 'How to Request Help or a Refund',
      body: (
        <p>
          For app-store purchases, please request refunds directly through Apple or Google. For any
          other questions about billing, cancellations, or refunds, contact us at{' '}
          <a href={`mailto:${company.email}`}>{company.email}</a> or {company.phone}, and we will do our
          best to help.
        </p>
      ),
    },
  ]

  return (
    <LegalPage
      title="Refund & Cancellation Policy"
      description="How purchases, subscriptions, free trials, cancellations, and refunds work across YK Tech Solutions products."
      intro={
        <p>
          We want you to feel confident about any purchase. This policy explains your options for
          managing subscriptions and requesting refunds across our products.
        </p>
      }
      sections={sections}
    />
  )
}

export default RefundPolicy
