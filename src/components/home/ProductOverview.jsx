import { useState, useRef } from 'react'
import { Link } from 'react-router-dom' // React Router
import { ArrowRight, Pill, Heart, Activity, Leaf } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'Cardiovascular Medicines',
    category: 'Pharmaceutical',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop',
    shortDesc: 'Heart health & blood pressure management',
    fullDesc: 'Comprehensive range of cardiovascular medications including antihypertensives, statins, and heart failure treatments. All products are manufactured under strict quality controls.',
    features: ['Antihypertensive drugs', 'Cholesterol management', 'Heart failure medications'],
    gradient: 'from-red-500 to-pink-500'
  },
  {
    id: 2,
    name: 'Nutraceutical Supplements',
    category: 'Nutraceutical',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop',
    shortDesc: 'Nutritional wellness & immunity boosters',
    fullDesc: 'Premium quality vitamins, minerals, and herbal supplements designed to support overall health and wellness. Formulated with natural ingredients for maximum efficacy.',
    features: ['Multivitamins', 'Immunity boosters', 'Herbal supplements'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    name: 'Antibiotics & Anti-infectives',
    category: 'Pharmaceutical',
    icon: Pill,
    image: 'https://images.unsplash.com/photo-1587854680352-936b22b91030?w=600&h=400&fit=crop',
    shortDesc: 'Infection treatment & prevention',
    fullDesc: 'Wide spectrum of antibiotics and anti-infective medications for bacterial, viral, and fungal infections. WHO-GMP certified production ensuring highest safety standards.',
    features: ['Broad-spectrum antibiotics', 'Antiviral medications', 'Antifungal treatments'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 4,
    name: 'Wellness & Lifestyle',
    category: 'Wellness',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    shortDesc: 'Health supplements & lifestyle products',
    fullDesc: 'Complete range of lifestyle and wellness products including protein supplements, weight management solutions, and sports nutrition. Scientifically formulated for optimal results.',
    features: ['Protein supplements', 'Weight management', 'Sports nutrition'],
    gradient: 'from-orange-500 to-amber-500'
  }
]

export default function ProductsOverview() {
  const [hovered, setHovered] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-600 rounded-full text-sm font-semibold shadow-sm"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            Our Products
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Comprehensive Healthcare
            <span className="block mt-2 gradient-text">Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Explore our diverse range of pharmaceutical and nutraceutical products, 
            each manufactured with precision and care to meet the highest quality standards.
          </motion.p>
        </div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {products.map((p) => {
            const Icon = p.icon
            const isHovered = hovered === p.id
            return (
              <motion.div
                key={p.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl"></div>

                {/* Image */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <motion.img
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${isHovered ? 'from-gray-900/90' : 'from-gray-900/80'} to-transparent transition-all duration-300`}></div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute top-4 right-4 bg-gradient-to-br ${p.gradient} text-white p-3 rounded-full shadow-lg`}
                  >
                    <Icon size={24} />
                  </motion.div>

                  {/* Category */}
                  <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 shadow-lg"
                  >
                    {p.category}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10 bg-white">
                  <h3 className={`text-xl font-bold mb-2 transition-all duration-300 ${
                    isHovered ? 'text-transparent bg-clip-text bg-gradient-to-r ' + p.gradient : 'text-gray-900'
                  }`}>
                    {p.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{p.shortDesc}</p>

                  {/* Hover Details */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={isHovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">{p.fullDesc}</p>
                    <ul className="space-y-2 mb-4">
                      {p.features.map((f, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ x: -10, opacity: 0 }}
                          animate={isHovered ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="text-sm text-gray-600 flex items-center gap-2"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${p.gradient}`}></div>
                          {f}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Bottom Border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${p.gradient} origin-left`}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10">View All Products</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
