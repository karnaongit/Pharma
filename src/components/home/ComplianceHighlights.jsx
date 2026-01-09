import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Award, FileCheck, Globe, Users, CheckCircle2 } from "lucide-react"

export default function ComplianceHighlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    { icon: Award, title: "ISO 9001:2015", description: "Quality Management System", gradient: "from-blue-500 to-blue-600" },
    { icon: Shield, title: "WHO-GMP", description: "Good Manufacturing Practice", gradient: "from-green-500 to-green-600" },
    { icon: FileCheck, title: "FDA Approved", description: "Food & Drug Administration", gradient: "from-orange-500 to-orange-600" },
    { icon: Globe, title: "Export Licensed", description: "International Distribution", gradient: "from-purple-500 to-purple-600" }
  ]

  const commitments = [
    { title: "Quality Assurance", description: "Every product undergoes rigorous testing and quality control", icon: CheckCircle2, stats: "100%" },
    { title: "Safety Standards", description: "Adherence to international safety protocols and guidelines", icon: Shield, stats: "WHO-GMP" },
    { title: "Expert Team", description: "Highly qualified professionals ensuring product excellence", icon: Users, stats: "50+" }
  ]

  const stats = [
    { value: "25+", label: "Years Experience", color: "blue" },
    { value: "100%", label: "Quality Assured", color: "green" },
    { value: "500+", label: "Products", color: "orange" },
    { value: "50+", label: "Countries", color: "purple" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-green-100 to-green-50 text-green-600 rounded-full text-sm font-semibold shadow-sm"
          >
            <Shield size={16} className="animate-pulse" />
            Certifications & Compliance
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Trusted Quality & <span className="block mt-2 gradient-text">Compliance Standards</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Our commitment to excellence is reflected in our certifications and adherence to international quality standards, ensuring the highest level of safety and efficacy.
          </motion.p>
        </div>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {certifications.map((cert, i) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 0.1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${cert.gradient}`}
                ></motion.div>

                <div className="relative mb-6 inline-block">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`bg-gradient-to-br ${cert.gradient} p-4 rounded-2xl text-white shadow-lg relative`}
                  >
                    <Icon size={40} />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} rounded-2xl`}
                    />
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                  {cert.title}
                </h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>

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

        {/* Commitments */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden mb-16"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center md:text-left"
                >
                  <div className="flex justify-center md:justify-start items-center gap-4 mb-4">
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                      <Icon size={32} className="text-orange-400" />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                      className="text-4xl font-bold text-orange-400"
                    >
                      {c.stats}
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{c.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={i} variants={itemVariants} whileHover={{ scale: 1.1, y: -5 }} className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.9 + i * 0.1, type: "spring", stiffness: 200 }}
                className={`text-4xl font-bold text-${s.color}-600 mb-2`}
              >
                {s.value}
              </motion.div>
              <div className="text-gray-600 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
