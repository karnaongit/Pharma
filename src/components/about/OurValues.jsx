import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Heart, Lightbulb, Users, Leaf, Award } from 'lucide-react'

export default function OurValues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'Uncompromising commitment to the highest quality standards in every product we manufacture.',
      gradient: 'from-blue-500 to-blue-600',
      color: 'blue'
    },
    {
      icon: Heart,
      title: 'Patient-Centric',
      description: 'Every decision we make is guided by the wellbeing and health outcomes of the patients we serve.',
      gradient: 'from-red-500 to-pink-600',
      color: 'red'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly pushing boundaries through research and development to bring breakthrough solutions.',
      gradient: 'from-yellow-500 to-orange-600',
      color: 'orange'
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'Building trust through transparent practices, ethical conduct, and accountability in all we do.',
      gradient: 'from-purple-500 to-purple-600',
      color: 'purple'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to environmentally responsible manufacturing and sustainable business practices.',
      gradient: 'from-green-500 to-emerald-600',
      color: 'green'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for excellence in every aspect, from manufacturing to customer service and beyond.',
      gradient: 'from-indigo-500 to-blue-600',
      color: 'indigo'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section ref={ref} className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 rounded-full text-sm font-semibold"
          >
            <Heart size={16} className="animate-pulse" />
            Our Core Values
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Principles That
            <span className="block mt-2 gradient-text">Guide Our Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Our values are the foundation of everything we do, shaping our culture and 
            driving our commitment to excellence in pharmaceutical manufacturing.
          </motion.p>
        </div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl -z-10"></div>

                {/* Animated Background Blob */}
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${value.gradient} opacity-5 rounded-full blur-2xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative mb-6"
                >
                  <div className={`bg-gradient-to-br ${value.gradient} w-16 h-16 rounded-xl flex items-center justify-center text-white shadow-lg`}>
                    <Icon size={32} />
                  </div>
                  {/* Pulsing Ring */}
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-xl`}
                  ></motion.div>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Bottom Accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} origin-left`}
                ></motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto border-l-4 border-blue-500">
            <p className="text-2xl font-semibold text-gray-800 mb-3 italic">
              "Our values aren't just words on a wall—they're the compass that guides every decision we make."
            </p>
            <p className="text-gray-600">— Sunrise Pharma Leadership Team</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}