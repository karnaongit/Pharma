import { motion } from 'framer-motion'
import { Pill, Heart, Leaf, Activity, Search, ArrowRight } from 'lucide-react'

export default function ProductsHero() {
  const stats = [
    { icon: Pill, value: '100+', label: 'Products', color: 'blue' },
    { icon: Heart, value: '50+', label: 'Countries', color: 'red' },
    { icon: Leaf, value: '25+', label: 'Categories', color: 'green' },
    { icon: Activity, value: '100%', label: 'Quality Tested', color: 'orange' },
  ]

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-600">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Content */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white/30"
          >
            <Pill size={16} className="animate-pulse" />
            Our Product Range
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Premium Healthcare
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">
              Products & Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Discover our comprehensive range of pharmaceutical medicines, nutraceuticals, 
            and wellness products - all manufactured with precision and certified to international standards.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search products by name or category..."
                className="w-full px-6 py-4 pl-14 rounded-full bg-white/95 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-orange-500/50 transition-all shadow-2xl"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg"
              >
                Search
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/15 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 hover:bg-white/25 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-${stat.color}-500 w-16 h-16 rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}
                >
                  <Icon size={32} />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                  className="text-4xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex flex-col items-center gap-2 text-white/80"
          >
            <span className="text-sm font-medium">Explore Our Products</span>
            <ArrowRight className="rotate-90" size={24} />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}