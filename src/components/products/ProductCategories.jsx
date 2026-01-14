import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Pill, Leaf, Activity, Zap, Shield } from 'lucide-react'

export default function ProductCategories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState(0)

  const categories = [
    {
      icon: Heart,
      title: 'Cardiovascular',
      description: 'Heart health & blood pressure management',
      products: ['Antihypertensives', 'Statins', 'ACE Inhibitors', 'Beta Blockers'],
      gradient: 'from-red-500 to-pink-600',
      color: 'red',
      count: '25+'
    },
    {
      icon: Pill,
      title: 'Antibiotics',
      description: 'Infection treatment & prevention',
      products: ['Broad Spectrum', 'Penicillins', 'Cephalosporins', 'Quinolones'],
      gradient: 'from-blue-500 to-cyan-600',
      color: 'blue',
      count: '30+'
    },
    {
      icon: Leaf,
      title: 'Nutraceuticals',
      description: 'Nutritional supplements & wellness',
      products: ['Multivitamins', 'Omega-3', 'Probiotics', 'Minerals'],
      gradient: 'from-green-500 to-emerald-600',
      color: 'green',
      count: '20+'
    },
    {
      icon: Activity,
      title: 'Lifestyle & Wellness',
      description: 'Daily health & fitness support',
      products: ['Protein Supplements', 'Weight Management', 'Energy Boosters', 'Sports Nutrition'],
      gradient: 'from-orange-500 to-amber-600',
      color: 'orange',
      count: '15+'
    },
    {
      icon: Zap,
      title: 'Specialty Medicines',
      description: 'Advanced therapeutic solutions',
      products: ['Oncology', 'Diabetes Care', 'Respiratory', 'Pain Management'],
      gradient: 'from-purple-500 to-purple-600',
      color: 'purple',
      count: '18+'
    },
    {
      icon: Shield,
      title: 'Immunity Boosters',
      description: 'Strengthen natural defenses',
      products: ['Vitamin C', 'Zinc', 'Herbal Extracts', 'Immune Complex'],
      gradient: 'from-indigo-500 to-blue-600',
      color: 'indigo',
      count: '12+'
    }
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 rounded-full text-sm font-semibold"
          >
            <Pill size={16} />
            Product Categories
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Browse by
            <span className="block mt-2 gradient-text">Category</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Explore our diverse range of healthcare products organized by therapeutic area. 
            Each category is carefully curated to meet specific health needs.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            const isActive = activeCategory === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onMouseEnter={() => setActiveCategory(index)}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl -z-10"></div>

                {/* Background Glow */}
                <motion.div
                  animate={isActive ? { scale: 1.2, opacity: 0.1 } : { scale: 1, opacity: 0.05 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.gradient} rounded-full blur-2xl`}
                />

                {/* Count Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                  className={`absolute top-4 right-4 bg-gradient-to-r ${category.gradient} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}
                >
                  {category.count}
                </motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative mb-6"
                >
                  <div className={`bg-gradient-to-br ${category.gradient} w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    <Icon size={40} />
                  </div>
                  {/* Pulsing Ring */}
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl`}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Products List */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={isActive ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Popular Products:</p>
                    <ul className="space-y-2">
                      {category.products.map((product, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ x: -10, opacity: 0 }}
                          animate={isActive ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
                          {product}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* View All Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-6 w-full bg-gradient-to-r ${category.gradient} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                >
                  View All Products
                </motion.button>

                {/* Bottom Accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} origin-left`}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Can't Find What You're Looking For?</h3>
            <p className="text-gray-600 mb-6">
              Our product catalog is constantly expanding. Contact us for custom formulations or specific requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Request Custom Product
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}