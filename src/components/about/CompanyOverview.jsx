import { motion } from 'framer-motion'
import { Building2, Users, Globe, Award, TrendingUp, Target } from 'lucide-react'

export default function CompanyOverview() {
  const stats = [
    { icon: Building2, value: '25+', label: 'Years in Business', gradient: 'from-blue-500 to-blue-600' },
    { icon: Users, value: '500+', label: 'Team Members', gradient: 'from-green-500 to-green-600' },
    { icon: Globe, value: '50+', label: 'Countries Served', gradient: 'from-orange-500 to-orange-600' },
    { icon: Award, value: '100+', label: 'Products', gradient: 'from-purple-500 to-purple-600' },
  ]

  const achievements = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver high-quality pharmaceutical products that improve lives and promote wellness across communities.',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Our Vision',
      description: 'To be a globally recognized pharmaceutical company known for innovation, quality, and commitment to healthcare excellence.',
      color: 'orange'
    }
  ]

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white/20"
          >
            <Building2 size={16} />
            About Sunrise Pharma
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Building a Healthier
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Tomorrow Together
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            Since 1999, Sunrise Pharma has been at the forefront of pharmaceutical innovation, 
            delivering quality healthcare solutions that make a difference in millions of lives.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-gradient-to-br ${stat.gradient} w-16 h-16 rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}
                >
                  <Icon size={32} />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, type: 'spring' }}
                  className="text-4xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`bg-${item.color}-500 p-3 rounded-xl shadow-lg flex-shrink-0`}
                  >
                    <Icon size={28} className="text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-blue-100 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}