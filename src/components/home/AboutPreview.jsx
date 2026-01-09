import { useRef } from 'react'
import { Link } from 'react-router-dom' // React Router instead of next/link
import { CheckCircle, ArrowRight, TrendingUp } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

export default function AboutPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    'ISO 9001:2015 Certified Manufacturing',
    'State-of-the-art Production Facilities',
    'WHO-GMP Compliant Operations',
    'Experienced Research & Development Team',
    'Nationwide Distribution Network',
    'Commitment to Quality & Safety'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  }

  return (
    <section ref={ref} className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full blur-3xl opacity-30 -z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop"
                alt="Sunrise Pharma Manufacturing"
                className="w-full h-[500px] object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent group-hover:from-blue-900/40 transition-all duration-300"></div>

              {/* Decorative Element */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 right-10 w-20 h-20 border-4 border-orange-500/30 rounded-full"
              />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-2xl p-6 border-t-4 border-orange-500 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="text-orange-500" size={20} />
                <div className="text-4xl font-bold text-blue-600 gradient-text">25+</div>
              </div>
              <div className="text-gray-600 font-medium">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 rounded-full text-sm font-semibold shadow-sm"
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              About Sunrise Pharma
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Leading the Way in
              <span className="block mt-2 gradient-text">Pharmaceutical Excellence</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-600 mb-6 leading-relaxed"
            >
              Sunrise Pharma is a trusted name in the pharmaceutical industry, dedicated to 
              delivering high-quality medicines and healthcare products. With cutting-edge 
              manufacturing facilities and a commitment to innovation, we ensure every product 
              meets the highest international standards.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Our state-of-the-art facilities combine advanced technology with stringent quality 
              control measures, ensuring that every product we manufacture contributes to better 
              health outcomes for millions of people.
            </motion.p>

            {/* Highlights */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">Learn More About Us</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
