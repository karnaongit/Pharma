import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Award, FileCheck, Globe, CheckCircle, Star } from 'lucide-react'

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const certifications = [
    {
      icon: Award,
      title: 'ISO 9001:2015',
      description: 'Quality Management System Certification',
      issuedBy: 'International Organization for Standardization',
      year: '2015',
      gradient: 'from-blue-500 to-blue-600',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'WHO-GMP',
      description: 'Good Manufacturing Practice Certification',
      issuedBy: 'World Health Organization',
      year: '2010',
      gradient: 'from-green-500 to-green-600',
      color: 'green'
    },
    {
      icon: FileCheck,
      title: 'FDA Approved',
      description: 'Food and Drug Administration Approval',
      issuedBy: 'US Food & Drug Administration',
      year: '2018',
      gradient: 'from-orange-500 to-orange-600',
      color: 'orange'
    },
    {
      icon: Globe,
      title: 'Export License',
      description: 'International Pharmaceutical Export Authorization',
      issuedBy: 'Government of India',
      year: '2012',
      gradient: 'from-purple-500 to-purple-600',
      color: 'purple'
    },
    {
      icon: CheckCircle,
      title: 'ISO 14001:2015',
      description: 'Environmental Management System',
      issuedBy: 'International Organization for Standardization',
      year: '2019',
      gradient: 'from-emerald-500 to-emerald-600',
      color: 'emerald'
    },
    {
      icon: Star,
      title: 'CE Marking',
      description: 'European Conformity Certification',
      issuedBy: 'European Union',
      year: '2020',
      gradient: 'from-indigo-500 to-indigo-600',
      color: 'indigo'
    }
  ]

  const qualityStandards = [
    'cGMP Compliant Manufacturing',
    'WHO Pre-qualification',
    'ICH Guidelines Adherence',
    'USFDA Guidelines',
    'TGA Approved',
    'Health Canada Licensed'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
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
            Certifications & Accreditations
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Recognized for
            <span className="block mt-2 gradient-text">Quality & Excellence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Our commitment to quality is validated by prestigious certifications from 
            international regulatory bodies and quality management organizations.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`}
                ></motion.div>

                {/* Icon with Badge */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`bg-gradient-to-br ${cert.gradient} w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-lg relative`}
                  >
                    <Icon size={36} />
                    {/* Pulsing Ring */}
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} rounded-2xl`}
                    ></motion.div>
                  </motion.div>
                  
                  {/* Year Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                    className="absolute -top-2 -right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                  >
                    {cert.year}
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300">
                  {cert.title}
                </h3>
                <p className="text-gray-700 font-medium mb-3">
                  {cert.description}
                </p>
                <p className="text-sm text-gray-500">
                  Issued by: <span className="font-semibold">{cert.issuedBy}</span>
                </p>

                {/* Bottom Border Animation */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.gradient} origin-left`}
                ></motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Quality Standards Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
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
            ></motion.div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-10">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Additional Quality Standards
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-xl text-blue-100"
              >
                We adhere to multiple international quality and regulatory frameworks
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qualityStandards.map((standard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-green-500 p-2 rounded-lg flex-shrink-0"
                  >
                    <CheckCircle size={20} />
                  </motion.div>
                  <span className="font-medium">{standard}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Want to learn more about our quality standards and certifications?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Download Quality Documentation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}