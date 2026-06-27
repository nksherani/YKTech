import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../data/company'
import { products } from '../data/products'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const company_links = [
    { name: 'About Us', to: '/#about' },
    { name: 'Services', to: '/#services' },
    { name: 'Products', to: '/products' },
    { name: 'Contact', to: '/#contact' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', to: '/privacy-policy' },
    { name: 'Terms & Conditions', to: '/terms' },
    { name: 'Cookie Policy', to: '/cookie-policy' },
    { name: 'Acceptable Use Policy', to: '/acceptable-use' },
    { name: "Children's Privacy", to: '/childrens-privacy' },
    { name: 'Refund & Cancellation', to: '/refund-policy' },
  ]

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Github, href: '#', label: 'GitHub' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-4">YK Tech Solutions</h3>
            <p className="mb-4 text-gray-400 max-w-sm">
              Empowering businesses and families through cutting-edge, responsible technology —
              from agentic AI to thoughtfully designed consumer apps.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-primary-400" />
                <span className="text-sm">{company.address.full}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0 text-primary-400" />
                <a href={company.phoneHref} className="text-sm hover:text-primary-400 transition-colors">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0 text-primary-400" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm hover:text-primary-400 transition-colors break-all"
                >
                  {company.email}
                </a>
              </li>
            </ul>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    to={`/products#${product.slug}`}
                    className="hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company_links.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} {company.legalName}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link to="/privacy-policy" className="hover:text-primary-400 transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-primary-400 transition-colors">
                Terms
              </Link>
              <Link to="/cookie-policy" className="hover:text-primary-400 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
