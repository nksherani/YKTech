import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Cloud, Code, Zap, Database, LineChart } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Brain,
      title: 'Agentic AI Solutions',
      description: 'Leverage cutting-edge AI technologies to automate and optimize your business processes',
      technologies: ['OpenAI', 'Azure AI', 'MCP', 'Zapier', 'n8n'],
      industries: ['Insurance', 'Audit Firms', 'E-commerce'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Cloud,
      title: 'Cloud Services & Integration',
      description: 'Comprehensive cloud solutions to scale your infrastructure and optimize operations',
      technologies: ['Azure', 'AWS', 'Cloud Migration', 'DevOps'],
      industries: ['Enterprise', 'Startups', 'SMBs'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with modern technologies and best practices',
      technologies: ['.NET', 'Node.js', 'Python', 'React', 'Next.js'],
      industries: ['All Industries'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Microsoft Power Platform',
      description: 'Transform your business with low-code/no-code solutions and business intelligence',
      technologies: ['Power Apps', 'Power Automate', 'Dynamics 365', 'Power BI'],
      industries: ['Enterprise', 'Manufacturing', 'Retail'],
      color: 'from-orange-500 to-red-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive innovation and accelerate your digital transformation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Industries */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Industries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.industries.map((industry, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full border border-primary-200"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover effect arrow */}
                  <div className="mt-6 flex items-center text-primary-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn more
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Database className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Data-Driven</h3>
              <p className="text-primary-100">Leverage analytics and insights for informed decision-making</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Rapid Deployment</h3>
              <p className="text-primary-100">Fast implementation with minimal disruption to your operations</p>
            </div>
            <div className="text-center">
              <LineChart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Scalable Solutions</h3>
              <p className="text-primary-100">Built to grow with your business needs and demands</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

