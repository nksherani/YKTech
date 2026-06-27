import { Link } from 'react-router-dom'
import { Home as HomeIcon } from 'lucide-react'

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 px-4">
      <div className="text-center text-white max-w-lg">
        <p className="text-7xl font-bold mb-4">404</p>
        <h1 className="text-3xl font-bold mb-4">Page not found</h1>
        <p className="text-primary-100 mb-8">
          The page you are looking for may have been moved or no longer exists.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 shadow-xl"
        >
          <HomeIcon className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
