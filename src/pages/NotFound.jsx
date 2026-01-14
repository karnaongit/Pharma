import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search, Pill, Heart, FileQuestion } from 'lucide-react'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 - Page Not Found | Sunrise Pharma'
  }, [])

  const quickLinks = [
    { icon: Home, label: 'Home', path: '/', color: 'blue' },
    { icon: Pill, label: 'Products', path: '/products', color: 'green' },
    { icon: Heart, label: 'About Us', path: '/about', color: 'orange' },
    { icon: Search, label: 'Contact', path: '/contact', color: 'purple' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Animated 404 Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full blur-2xl opacity-20"
            />
            <div className="relative bg-white rounded-full p-8 shadow-2xl">
              <FileQuestion size={80} className="text-orange-500" />
            </div>
          </div>
        </motion.div>

        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <h1 className="text-9xl md:text-[12rem] font-bold">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
              404
            </span>
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for seems to have taken a different prescription. 
            Don't worry, we'll help you find your way back to health... er, home!
          </p>
        </motion.div>

        {/* Fun Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-12 bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl p-6 max-w-2xl mx-auto border-l-4 border-orange-500"
        >
          <p className="text-gray-700 font-medium">
            💊 <span className="font-bold">Diagnosis:</span> Page Not Found
            <br />
            🩺 <span className="font-bold">Treatment:</span> Navigate using the links below
            <br />
            ✨ <span className="font-bold">Prognosis:</span> Full recovery guaranteed!
          </p>
        </motion.div>

        {/* Quick Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Quick Navigation</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.path}
                    className={`block bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-${link.color}-500`}
                  >
                    <div className={`bg-gradient-to-br from-${link.color}-500 to-${link.color}-600 w-12 h-12 rounded-lg flex items-center justify-center text-white mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} />
                    </div>
                    <p className="font-semibold text-gray-800 group-hover:text-${link.color}-600 transition-colors">
                      {link.label}
                    </p>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Main CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Home size={20} />
              Back to Home
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </Link>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-orange-500"
            >
              <Search size={20} />
              Contact Support
            </motion.button>
          </Link>
        </motion.div>

        {/* Search Suggestion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-12 text-gray-500 text-sm"
        >
          <p>
            Looking for something specific?{' '}
            <Link to="/contact" className="text-blue-600 hover:text-blue-700 font-semibold underline">
              Get in touch
            </Link>{' '}
            with our team.
          </p>
        </motion.div>

        {/* Fun Animation Pills */}
        <div className="absolute top-20 left-10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20" />
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
          <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}>
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20" />
        </div>
      </div>
    </div>
  )
}