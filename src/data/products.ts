import { BookOpen, HeartHandshake, Megaphone, type LucideIcon } from 'lucide-react'

export interface ProductFeature {
  title: string
  description: string
}

export interface Product {
  slug: string
  name: string
  tagline: string
  category: string
  icon: LucideIcon
  gradient: string
  accent: string
  summary: string
  platforms: string[]
  audience: string
  pricing: string
  highlights: ProductFeature[]
  compliance: string[]
}

export const products: Product[] = [
  {
    slug: 'alice-adventures-learner',
    name: "Alice's Adventures Learner",
    tagline: 'Where reading becomes an adventure',
    category: 'Children & Education',
    icon: BookOpen,
    gradient: 'from-fuchsia-500 to-purple-600',
    accent: 'text-fuchsia-600',
    summary:
      "An immersive, offline-first literacy app for children ages 5–10 built around Lewis Carroll's Alice's Adventures in Wonderland. It blends vocabulary, phonics and creative play so children experience learning as collecting magic words alongside Alice — guided gently by the White Rabbit.",
    platforms: ['Android', 'iOS'],
    audience: 'Children ages 5–10, parents and primary-school teachers',
    pricing: 'Free tier + one-time premium unlock (~$4.99). No ads, no subscriptions.',
    highlights: [
      {
        title: 'Wonderland Vocabulary Flashcards',
        description:
          'Every age-appropriate word becomes a collectible card with whimsical art, text-to-speech audio, phonics breakdown and a sentence from the book — mastered through gentle spaced repetition.',
      },
      {
        title: 'Interactive Read-Aloud Story Mode',
        description:
          'The full Alice story across 12 narrated chapters. Tap any word to hear it and open its flashcard, with "Read to Me" and "I\'ll Read" modes.',
      },
      {
        title: 'Six Playful Mini-Games',
        description:
          'Spell the Rabbit Hole, Tea-Party Letters, Sound Pool of Tears and more — each reinforcing phonics, listening and recall without ever feeling like a test.',
      },
      {
        title: 'Parent Zone & Creative Play',
        description:
          'A gated dashboard for parents, plus Paint the Rose drawing, colouring pages and a calming Bedtime audiobook mode for the child.',
      },
    ],
    compliance: [
      'COPPA-compliant — no personal data from under-13s without verifiable parental consent',
      'GDPR-Kids — no profiling, no third-party child-tracking SDKs',
      'Google Play "Designed for Families" — no ads in the child area',
      'Offline-first — progress stays on device unless a parent opts into sync',
    ],
  },
  {
    slug: 'together-relationship-checkin',
    name: 'Together — Relationship Check-In',
    tagline: 'A calm, private rhythm for couples',
    category: 'Health & Wellness',
    icon: HeartHandshake,
    gradient: 'from-rose-500 to-pink-600',
    accent: 'text-rose-600',
    summary:
      'A calm, ad-free couples wellness app built around a weekly rhythm: short check-ins, private reflection, appreciation exchanges, connection bids and structured repair tools after hard moments. Private by design — individual responses are never shared, only aggregated "pulse" data.',
    platforms: ['Android', 'iOS'],
    audience: 'Couples, or solo users exploring before a partner joins',
    pricing:
      'Free tier · 21-day Pro trial · Pro $8.99/couple/month ($79.99/yr) · AI tier $14.99/couple/month (planned)',
    highlights: [
      {
        title: 'Weekly Check-In & Shared Pulse',
        description:
          'A 90-second weekly check-in surfaces how both partners feel. Individual answers stay private; only an aggregated connection pulse is shared when both partners complete it.',
      },
      {
        title: 'Structured Repair Kit',
        description:
          'Three guided modes — Solo reflection, Async Together, and a real-time Conflict Copilot — to de-escalate and reconnect after difficult moments.',
      },
      {
        title: 'Private Journal & Appreciation Bank',
        description:
          'Truly private journaling (never shared) plus weekly gratitude deposits that are revealed only when both partners participate.',
      },
      {
        title: 'Relationship Vitals & Life Seasons',
        description:
          'A private, non-gamified trends dashboard, with season-aware prompts that adapt to whether you are newlyweds, new parents, in a rough patch and more.',
      },
    ],
    compliance: [
      'Privacy-by-design data model — sensitive responses are uid-scoped',
      'GDPR & CCPA/CPRA data rights — access, export and deletion',
      'In-app account and data deletion controls',
      'Encrypted in transit and at rest via Google Firebase',
    ],
  },
  {
    slug: 'agency-platform',
    name: 'Agency Platform',
    tagline: 'AI-operated social media management for agencies',
    category: 'Business & Marketing SaaS',
    icon: Megaphone,
    gradient: 'from-sky-500 to-blue-600',
    accent: 'text-sky-600',
    summary:
      'A self-hosted, multi-tenant platform that lets an agency manage social presence, content, paid ads and customer messaging for multiple clients from one interface. AI agents handle the repetitive work while humans keep control of anything brand-sensitive or involving ad spend.',
    platforms: ['Web (self-hosted, Docker)'],
    audience: 'Agencies and operators managing multiple client accounts',
    pricing: 'Local-first, self-hosted licence (bring your own API keys)',
    highlights: [
      {
        title: 'Multi-Platform Publishing',
        description:
          'Connect Facebook, Instagram, X and more. Compose, schedule and publish platform-specific posts, reels, stories, carousels and threads from one calendar.',
      },
      {
        title: 'Unified Inbox',
        description:
          'Every DM, comment and message request from all connected accounts in a single view, with AI-drafted replies and human approval where it matters.',
      },
      {
        title: 'AI Agents with Guardrails',
        description:
          'LangGraph-powered Content, Engagement, Strategy and Optimization agents, with a brand-safety Guardrails layer and configurable autonomy per client.',
      },
      {
        title: 'Campaigns, Approvals & Reporting',
        description:
          'Campaign management with human-in-the-loop approval queues for ad spend, plus per-client analytics and automated reporting.',
      },
    ],
    compliance: [
      'Multi-tenant isolation — each client\'s data is fully separated',
      'Human-in-the-loop approval for ad spend and brand-sensitive content',
      'GDPR controller/processor model for client and end-user data',
      'Operates on platform APIs under Meta, X and other platform terms',
    ],
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
