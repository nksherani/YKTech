export const company = {
  name: 'YK Tech Solutions',
  /** Legal entity name (Coders Ventures LLC); DBA / assumed name is `name`. */
  legalName: 'Coders Ventures LLC',
  /** Assumed name (DBA) filed with the Texas Secretary of State. */
  dba: 'YK Tech Solutions',
  /** Legal name with DBA for copyright lines and contact blocks. */
  legalNameWithDba: 'Coders Ventures LLC d/b/a YK Tech Solutions',
  shortName: 'YK Tech',
  domain: 'yk-techsolutions.com',
  website: 'https://www.yk-techsolutions.com',
  email: 'customersuccess@yk-techsolutions.com',
  privacyEmail: 'customersuccess@yk-techsolutions.com',
  legalEmail: 'customersuccess@yk-techsolutions.com',
  phone: '+1 (713) 377-1715',
  phoneHref: 'tel:+17133771715',
  address: {
    line1: '1208 New Territory Blvd',
    city: 'Sugar Land',
    state: 'Texas',
    zip: '77479',
    country: 'United States',
    full: '1208 New Territory Blvd, Sugar Land, Texas 77479, United States',
  },
} as const

/**
 * A single, human-readable "last updated" date used across all policy pages so
 * they stay consistent. Update this whenever the legal content materially changes.
 */
export const POLICY_EFFECTIVE_DATE = 'June 26, 2026'
