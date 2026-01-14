import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Linkedin, Mail, Users } from 'lucide-react'

export default function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredMember, setHoveredMember] = useState(null)

  const teamMembers = [
    {
      name: 'Vanita Sharma',
      role: 'Chief Operating Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      bio: '15+ years in pharmaceutical operations and quality management',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Varun Patel',
      role: 'Head of R&D',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Leading innovation in drug formulation and development',
      gradient: 'from-green-500 to-green-600'
    },
    {
      name: 'Dr. Neha Gupta',
      role: 'Quality Assurance Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      bio: 'Ensuring world-class quality standards across all products',
      gradient: 'from-purple-500 to-purple-600'
    },
    // {
    //   name: 'Rahul Mehta',
    //   role: 'Head of Sales & Marketing',
    //   image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    //   bio: 'Driving growth and building strategic partnerships',
    //   gradient: 'from-orange-500 to-orange-600'
    // },
    // {
    //   name: 'Dr. Anjali Singh',
    //   role: 'Regulatory Affairs Manager',
    //   image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
    //   bio: 'Navigating global regulatory compliance and certifications',
    //   gradient: 'from-pink-500 to-red-600'
    // },
    // {
    //   name: 'Vikram Reddy',
    //   role: 'Supply Chain Director',
    //   image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    //   bio: 'Optimizing logistics and distribution networks',
    //   gradient: 'from-indigo-500 to-blue-600'
    // }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 rounded-full text-sm font-semibold"
          >
            <Users size={16} />
            Our Leadership Team
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Meet the People Behind
            <span className="block mt-2 gradient-text">Our Success</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Our experienced leadership team brings together decades of pharmaceutical expertise, 
            driving innovation and excellence in everything we do.
          </motion.p>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => {
            const isHovered = hoveredMember === index
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl -z-10"></div>

                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    isHovered ? 'from-gray-900/90 via-gray-900/50' : 'from-gray-900/70 via-gray-900/30'
                  } to-transparent transition-all duration-300`}></div>

                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 right-4 flex gap-2"
                  >
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full text-white transition-all duration-300"
                    >
                      <Linkedin size={18} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full text-white transition-all duration-300"
                    >
                      <Mail size={18} />
                    </motion.a>
                  </motion.div>

                  {/* Member Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <motion.h3
                      className="text-2xl font-bold mb-1"
                      animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                    >
                      {member.name}
                    </motion.h3>
                    <motion.p
                      className={`text-sm font-semibold mb-3 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent filter brightness-150`}
                    >
                      {member.role}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={isHovered ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm text-gray-200 leading-relaxed overflow-hidden"
                    >
                      {member.bio}
                    </motion.p>
                  </div>
                </div>

                {/* Bottom Accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`h-1 bg-gradient-to-r ${member.gradient} origin-left`}
                ></motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-4xl mx-auto border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Join Our Team</h3>
            <p className="text-gray-600 mb-6">
              We're always looking for talented individuals who share our passion for healthcare excellence.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Open Positions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}