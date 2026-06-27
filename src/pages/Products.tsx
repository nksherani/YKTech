import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { products } from '../data/products'

const Products = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 pt-32 pb-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Sparkles className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-white text-sm font-medium">Our Products</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Software people love to use
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            From children's literacy to couples' wellness to AI-operated marketing for agencies — every
            YK Tech product is built privacy-first, accessible, and genuinely useful.
          </motion.p>
        </div>
      </section>

      {/* Product sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {products.map((product, index) => {
          const Icon = product.icon
          const reverse = index % 2 === 1
          return (
            <motion.section
              key={product.slug}
              id={product.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="scroll-mt-28"
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                {/* Summary card */}
                <div>
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${product.gradient} mb-6 shadow-lg`}>
                    <Icon className="w-9 h-9 text-white" />
                  </div>
                  <span className={`block text-sm font-semibold uppercase tracking-wide ${product.accent} mb-2`}>
                    {product.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{product.name}</h2>
                  <p className="text-lg text-gray-500 italic mb-6">{product.tagline}</p>
                  <p className="text-gray-600 leading-relaxed mb-8">{product.summary}</p>

                  <dl className="space-y-4">
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <dt className="text-sm font-semibold text-gray-900">Who it's for</dt>
                        <dd className="text-gray-600 text-sm">{product.audience}</dd>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Sparkles className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <dt className="text-sm font-semibold text-gray-900">Availability & pricing</dt>
                        <dd className="text-gray-600 text-sm">{product.pricing}</dd>
                      </div>
                    </div>
                  </dl>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {product.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-5">
                  {product.highlights.map((feature) => (
                    <div
                      key={feature.title}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                    >
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance bar */}
              <div className="mt-10 rounded-2xl bg-gray-50 border border-gray-100 p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-green-600 mr-2" />
                  <h3 className="text-base font-semibold text-gray-900">Privacy & compliance commitments</h3>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {product.compliance.map((item) => (
                    <li key={item} className="flex items-start text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>
          )
        })}
      </div>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a product idea of your own?</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            We design, build and ship software end-to-end — from concept and compliance to launch and beyond.
            Tell us what you want to create.
          </p>
          <Link
            to="/#contact"
            className="group inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 shadow-xl hover:scale-105"
          >
            Start a conversation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
