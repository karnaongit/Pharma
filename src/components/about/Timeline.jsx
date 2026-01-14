import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Rocket, Building, Globe, Award, TrendingUp } from 'lucide-react'

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const milestones = [
    {
      year: '2019',
      icon: Rocket,
      title: 'Foundation',
      description: 'Sunrise Pharma was established with a vision to revolutionize pharmaceutical manufacturing in India.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      year: '2022',
      icon: Building,
      title: 'First Manufacturing Unit',
      description: 'Opened our state-of-the-art manufacturing facility with WHO-GMP certification.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      year: '2023',
      icon: Globe,
      title: 'International Expansion',
      description: 'Began exporting to international markets, reaching over 20 countries.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      year: '2024',
      icon: Award,
      title: 'ISO Certification',
      description: 'Achieved ISO 9001:2015 certification for quality management excellence.',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      year: '2025',
      icon: TrendingUp,
      title: 'Product Portfolio Expansion',
      description: 'Expanded to nutraceuticals and wellness products, reaching 100+ SKUs.',
      gradient: 'from-pink-500 to-red-600'
    },
    {
      year: '2026',
      icon: Calendar,
      title: 'Innovation Hub',
      description: 'Launched dedicated R&D facility for developing next-generation healthcare solutions.',
      gradient: 'from-indigo-500 to-blue-600'
    }
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-600 rounded-full text-sm font-semibold"
          >
            <Calendar size={16} />
            Our Journey
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            25 Years of
            <span className="block mt-2 gradient-text">Excellence & Innovation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            From humble beginnings to becoming a trusted name in pharmaceuticals, 
            our journey has been marked by milestones that reflect our commitment to excellence.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 opacity-20"></div>

          {/* Milestones */}
          <div className="space-y-12 md:space-y-24">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`w-full md:w-5/12 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                      isEven ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`bg-gradient-to-br ${milestone.gradient} w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg`}
                      >
                        <Icon size={24} />
                      </motion.div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.15, type: 'spring' }}
                        className={`text-3xl font-bold bg-gradient-to-r ${milestone.gradient} bg-clip-text text-transparent`}
                      >
                        {milestone.year}
                      </motion.div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </motion.div>

                  {/* Center Icon (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, rotate: 0 }}
                      animate={isInView ? { scale: 1, rotate: 360 } : {}}
                      transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
                      className={`bg-gradient-to-br ${milestone.gradient} w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-white`}
                    >
                      <Icon size={28} />
                      {/* Pulsing Ring */}
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        className={`absolute inset-0 bg-gradient-to-br ${milestone.gradient} rounded-full`}
                      ></motion.div>
                    </motion.div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">The Journey Continues</h3>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              With unwavering commitment to innovation and quality, we're shaping the future of healthcare.
            </p>
            <motion.div
              className="text-6xl font-bold"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              2026 & Beyond
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}