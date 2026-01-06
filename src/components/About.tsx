import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Award, Rocket } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Target,
      title: 'Innovation-Driven',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We work closely with you to understand your unique needs and challenges.',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in software development, security, and project delivery.',
    },
    {
      icon: Rocket,
      title: 'Rapid Results',
      description: 'Agile methodologies and efficient processes ensure quick turnaround without compromising quality.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About YK Tech Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in digital transformation and technology excellence
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Empowering Businesses Through Technology
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed text-center">
            At YK Tech Solutions, we believe in the transformative power of technology. Our team of expert developers, AI specialists, and cloud architects work together to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed text-center">
            We specialize in emerging technologies like Agentic AI and combine them with proven platforms and frameworks to create robust, scalable, and intelligent solutions. Whether you're looking to automate complex business processes, migrate to the cloud, or build custom applications, we have the expertise to make it happen.
          </p>
          <p className="text-gray-600 leading-relaxed text-center">
            Our commitment to excellence, innovation, and customer satisfaction has made us a preferred technology partner for businesses across insurance, audit, e-commerce, and various other industries.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default About

