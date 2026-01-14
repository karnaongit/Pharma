import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Package, Star, CheckCircle, Info, ShoppingCart } from 'lucide-react'

export default function ProductShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const filters = ['All Products', 'Pharmaceutical', 'Nutraceutical', 'Wellness', 'New Arrivals']

  const products = [
    {
      id: 1,
      name: 'CardioShield Plus',
      category: 'Pharmaceutical',
      type: 'Cardiovascular',
      description: 'Advanced heart health formula with proven efficacy',
      features: ['Blood Pressure Support', 'Cholesterol Management', 'Heart Protection'],
      dosage: '10mg Tablets',
      pack: '30 Tablets',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
      gradient: 'from-red-500 to-pink-600',
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'ImmunoBoost Max',
      category: 'Nutraceutical',
      type: 'Immunity',
      description: 'Complete immunity support with vitamins & minerals',
      features: ['Vitamin C 1000mg', 'Zinc Complex', 'Herbal Extracts'],
      dosage: 'Capsules',
      pack: '60 Capsules',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=400&fit=crop',
      gradient: 'from-green-500 to-emerald-600',
      badge: 'New'
    },
    {
      id: 3,
      name: 'BioFlex Spectrum',
      category: 'Pharmaceutical',
      type: 'Antibiotic',
      description: 'Broad-spectrum antibiotic for bacterial infections',
      features: ['Fast Acting', 'WHO-GMP Certified', 'Clinical Tested'],
      dosage: '500mg Tablets',
      pack: '10 Tablets',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1587854680352-936b22b91030?w=400&h=400&fit=crop',
      gradient: 'from-blue-500 to-cyan-600',
      badge: 'Certified'
    },
    {
      id: 4,
      name: 'VitaEnergy Pro',
      category: 'Wellness',
      type: 'Energy',
      description: 'Premium energy & performance enhancement formula',
      features: ['Natural Caffeine', 'B-Complex', 'Amino Acids'],
      dosage: 'Powder',
      pack: '300g Tub',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      gradient: 'from-orange-500 to-amber-600',
      badge: 'Popular'
    },
    {
      id: 5,
      name: 'OmegaCare 3',
      category: 'Nutraceutical',
      type: 'Heart Health',
      description: 'Pure omega-3 fatty acids from deep sea fish',
      features: ['EPA 180mg', 'DHA 120mg', 'No Fishy Aftertaste'],
      dosage: 'Soft Gels',
      pack: '90 Soft Gels',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1550572017-4e3e2e331fc9?w=400&h=400&fit=crop',
      gradient: 'from-purple-500 to-purple-600',
      badge: 'Bestseller'
    },
    {
      id: 6,
      name: 'DigestEase Plus',
      category: 'Nutraceutical',
      type: 'Digestive',
      description: 'Probiotic formula for optimal digestive health',
      features: ['10 Billion CFU', 'Multi-Strain', 'Prebiotic Fiber'],
      dosage: 'Capsules',
      pack: '30 Capsules',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop',
      gradient: 'from-indigo-500 to-blue-600',
      badge: 'New'
    }
  ]

  const filteredProducts = selectedFilter === 'all' 
    ? products 
    : products.filter(p => p.category.toLowerCase() === selectedFilter.toLowerCase())

  return (
    <section ref={ref} className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 rounded-full text-sm font-semibold"
          >
            <Package size={16} />
            Featured Products
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Bestselling
            <span className="block mt-2 gradient-text">Products</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Discover our most trusted and effective healthcare solutions, 
            backed by quality certifications and positive customer experiences.
          </motion.p>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {filters.map((filter, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(filter === 'All Products' ? 'all' : filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  (selectedFilter === 'all' && filter === 'All Products') || 
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => {
            const isHovered = hoveredProduct === product.id

            return (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl -z-10"></div>

                {/* Badge */}
                {product.badge && (
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                    className={`absolute top-4 right-4 bg-gradient-to-r ${product.gradient} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10`}
                  >
                    {product.badge}
                  </motion.div>
                )}

                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-gray-50">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    isHovered ? 'from-gray-900/60' : 'from-gray-900/30'
                  } to-transparent transition-all duration-300`}></div>

                  {/* Quick Info Button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <Info size={20} className="text-gray-800" />
                  </motion.button>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(product.rating) ? 'fill-orange-400 text-orange-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                  </div>

                  {/* Product Name & Type */}
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{product.type}</p>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={isHovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mb-4"
                  >
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ x: -10, opacity: 0 }}
                          animate={isHovered ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Dosage & Pack */}
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
                    <span><strong>Dosage:</strong> {product.dosage}</span>
                    <span><strong>Pack:</strong> {product.pack}</span>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${product.gradient} text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300`}
                  >
                    <ShoppingCart size={20} />
                    Request Quote
                  </motion.button>
                </div>

                {/* Bottom Accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient} origin-left`}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Load More Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}