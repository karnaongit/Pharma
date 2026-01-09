    import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote, Linkedin, Mail } from 'lucide-react'

export default function FounderMessage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100 to-transparent rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 rounded-full text-sm font-semibold"
          >
            <Quote size={16} />
            Message from Leadership
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            A Word from Our
            <span className="block mt-2 gradient-text">Founder & CEO</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=900&fit=crop"
                alt="Founder"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
              
              {/* Founder Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-3xl font-bold mb-2"
                >
                  Dr. Rajesh Kumar
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-xl text-orange-400 mb-4"
                >
                  Founder & CEO
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="flex gap-3"
                >
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 p-2 rounded-full transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 p-2 rounded-full transition-all duration-300"
                  >
                    <Mail size={20} />
                  </motion.a>
                </motion.div>
              </div>

              {/* Decorative Quote Icon */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 right-8 bg-orange-500 p-4 rounded-full shadow-2xl"
              >
                <Quote size={32} className="text-white" />
              </motion.div>
            </div>

            {/* Floating Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-2xl"
            >
              <div className="text-4xl font-bold mb-1">25+</div>
              <div className="text-sm">Years Leading Innovation</div>
            </motion.div>
          </motion.div>

          {/* Message Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Quote Mark */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-orange-500 opacity-20 mb-6"
            >
              <Quote size={80} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <p>
                When we founded Sunrise Pharma in 1999, we had a simple yet powerful vision: 
                to make quality healthcare accessible to everyone. Today, I'm proud to see how 
                far we've come in realizing that dream.
              </p>

              <p>
                Our journey has been marked by countless challenges, but our unwavering commitment 
                to quality, innovation, and patient care has remained constant. Every product we 
                manufacture, every decision we make, is guided by one question: "Will this improve 
                someone's life?"
              </p>

              <p>
                As we look to the future, I'm excited about the possibilities that lie ahead. 
                With cutting-edge research, sustainable practices, and a team of dedicated 
                professionals, we're not just building a company—we're building a legacy of 
                healthcare excellence.
              </p>

              <p className="font-semibold text-gray-900">
                Thank you for being part of our journey. Together, we're creating a healthier tomorrow.
              </p>
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 pt-6 border-t border-gray-200"
            >
              <div className="text-3xl font-signature text-orange-500 mb-2" style={{ fontFamily: 'cursive' }}>
                Dr. Rajesh Kumar
              </div>
              <div className="text-gray-600">Founder & Chief Executive Officer</div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-8 grid grid-cols-3 gap-4"
            >
              {[
                { value: '500+', label: 'Team Members' },
                { value: '50+', label: 'Countries' },
                { value: '100+', label: 'Products' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}