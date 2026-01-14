import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Award, CheckCircle, Microscope, FileCheck, Sparkles } from 'lucide-react'

export default function QualityAssurance() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const qualitySteps = [
    {
      icon: Microscope,
      title: 'Research & Development',
      description: 'Rigorous formulation development and testing',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: FileCheck,
      title: 'Quality Testing',
      description: 'Multi-stage testing for purity and potency',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'ISO, WHO-GMP, and FDA compliance verification',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Final Inspection',
      description: 'Comprehensive quality assurance before dispatch',
      gradient: 'from-orange-500 to-orange-600'
    }
  ]

  const certifications = [
    { name: 'ISO 9001:2015', icon: Award },
    { name: 'WHO-GMP', icon: Shield },
    { name: 'FDA Approved', icon: CheckCircle },
    { name: 'CE Marking', icon: Sparkles }
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-600 rounded-full text-sm font-semibold"
          >
            <Shield size={16} className="animate-pulse" />
            Quality Assurance
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Commitment to
            <span className="block mt-2 gradient-text">Quality & Safety</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Every product undergoes stringent quality control at multiple stages, 
            ensuring the highest standards of safety, efficacy, and reliability.
          </motion.p>
        </div>

        {/* Quality Process */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualitySteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`bg-gradient-to-br ${step.gradient} w-16 h-16 rounded-xl flex items-center justify-center text-white shadow-lg mb-4`}
                  >
                    <Icon size={32} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>

                  {/* Arrow (except last) */}
                  {index < qualitySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-gray-300"
                      >
                        →
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Certifications Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="bg-gradient-to-br from-blue-600 via-purple-600 to-orange-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
            />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-10">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Internationally Certified
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-xl text-blue-100"
              >
                Our products meet global quality and safety standards
              </motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-white/15 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/25 transition-all duration-300"
                  >
                    <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h4 className="font-bold text-white">{cert.name}</h4>
                  </motion.div>
                )
              })}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-6 text-center"
            >
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Quality Tested</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Zero</div>
                <div className="text-blue-100">Compromises</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Lab Tested', icon: Microscope },
            { label: 'Certified Safe', icon: Shield },
            { label: 'Premium Quality', icon: Award },
            { label: 'Verified Products', icon: CheckCircle }
          ].map((badge, index) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <Icon size={32} className="text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-800">{badge.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}