import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, FileText } from 'lucide-react'
import { POLICY_EFFECTIVE_DATE } from '../../data/company'

export interface LegalSection {
  id: string
  heading: string
  body: ReactNode
}

interface LegalPageProps {
  title: string
  description: string
  sections: LegalSection[]
  intro?: ReactNode
  effectiveDate?: string
}

const LegalPage = ({
  title,
  description,
  sections,
  intro,
  effectiveDate = POLICY_EFFECTIVE_DATE,
}: LegalPageProps) => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 pt-32 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -right-32 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center text-primary-200 text-sm font-medium mb-4"
          >
            <FileText className="w-4 h-4 mr-2" />
            Legal
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-primary-100 max-w-3xl"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center mt-6 text-sm text-primary-200 bg-white/10 border border-white/20 rounded-full px-4 py-2"
          >
            <CalendarDays className="w-4 h-4 mr-2" />
            Last updated: {effectiveDate}
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-12">
          {/* Table of contents */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                On this page
              </p>
              <ul className="space-y-2 border-l border-gray-200">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block pl-4 -ml-px border-l-2 border-transparent text-sm text-gray-500 hover:text-primary-600 hover:border-primary-500 transition-colors"
                    >
                      {index + 1}. {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <article className="prose prose-slate max-w-none prose-headings:scroll-mt-28 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-table:text-sm">
            {intro && <div className="not-prose mb-8 text-gray-600 leading-relaxed">{intro}</div>}
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2>
                  {index + 1}. {section.heading}
                </h2>
                {section.body}
              </section>
            ))}
          </article>
        </div>
      </div>
    </div>
  )
}

export default LegalPage
