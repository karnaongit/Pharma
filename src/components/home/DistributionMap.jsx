import React from 'react'
import { ArrowRight, Pill, Heart, Activity, Leaf, Shield, Award, FileCheck, Globe, Users, CheckCircle2, MapPin, Truck, Package, Globe2 } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useState, useRef } from 'react'

/* ===================== Products Overview ===================== */
const products = [
  { id: 1, name: 'Cardiovascular Medicines', category: 'Pharmaceutical', icon: Heart, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop', shortDesc: 'Heart health & blood pressure management', fullDesc: 'Comprehensive range of cardiovascular medications including antihypertensives, statins, and heart failure treatments.', features: ['Antihypertensive drugs', 'Cholesterol management', 'Heart failure medications'], color: 'red', gradient: 'from-red-500 to-pink-500' },
  { id: 2, name: 'Nutraceutical Supplements', category: 'Nutraceutical', icon: Leaf, image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop', shortDesc: 'Nutritional wellness & immunity boosters', fullDesc: 'Premium quality vitamins, minerals, and herbal supplements designed to support overall health and wellness.', features: ['Multivitamins', 'Immunity boosters', 'Herbal supplements'], color: 'green', gradient: 'from-green-500 to-emerald-500' },
  { id: 3, name: 'Antibiotics & Anti-infectives', category: 'Pharmaceutical', icon: Pill, image: 'https://images.unsplash.com/photo-1587854680352-936b22b91030?w=600&h=400&fit=crop', shortDesc: 'Infection treatment & prevention', fullDesc: 'Wide spectrum of antibiotics and anti-infective medications for bacterial, viral, and fungal infections.', features: ['Broad-spectrum antibiotics', 'Antiviral medications', 'Antifungal treatments'], color: 'blue', gradient: 'from-blue-500 to-cyan-500' },
  { id: 4, name: 'Wellness & Lifestyle', category: 'Wellness', icon: Activity, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop', shortDesc: 'Health supplements & lifestyle products', fullDesc: 'Complete range of lifestyle and wellness products including protein supplements, weight management solutions, and sports nutrition.', features: ['Protein supplements', 'Weight management', 'Sports nutrition'], color: 'orange', gradient: 'from-orange-500 to-amber-500' }
]

function ProductsOverview() {
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }
  const itemVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-600 rounded-full text-sm font-semibold shadow-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            Our Products
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.6 }} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Healthcare
            <span className="block mt-2 gradient-text">Solutions</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }} className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of pharmaceutical and nutraceutical products, each manufactured with precision and care to meet the highest quality standards.
          </motion.p>
        </div>

        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map(product => {
            const Icon = product.icon
            const isHovered = hoveredProduct === product.id
            return (
              <motion.div key={product.id} variants={itemVariants} whileHover={{ y: -10, scale: 1.02 }} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer" onMouseEnter={() => setHoveredProduct(product.id)} onMouseLeave={() => setHoveredProduct(null)}>
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <motion.img whileHover={{ scale: 1.15 }} transition={{ duration: 0.4 }} src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${isHovered ? 'from-gray-900/90' : 'from-gray-900/80'} to-transparent transition-all duration-300`}></div>
                  <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }} className={`absolute top-4 right-4 bg-gradient-to-br ${product.gradient} text-white p-3 rounded-full shadow-lg`}><Icon size={24} /></motion.div>
                  <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ delay: 0.3 }} className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 shadow-lg">{product.category}</motion.div>
                </div>
                <div className="p-6 relative z-10 bg-white">
                  <h3 className={`text-xl font-bold mb-2 transition-all duration-300 ${isHovered ? 'text-transparent bg-clip-text bg-gradient-to-r ' + product.gradient : 'text-gray-900'}`}>{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.shortDesc}</p>
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={isHovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">{product.fullDesc}</p>
                    <ul className="space-y-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <motion.li key={idx} initial={{ x: -10, opacity: 0 }} animate={isHovered ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }} transition={{ delay: idx * 0.1 }} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient}`}></div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
                <motion.div initial={{ scaleX: 0 }} animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }} transition={{ duration: 0.3 }} className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient} origin-left`}></motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

/* ===================== Compliance Highlights ===================== */
const certifications = [
  { icon: Award, title: 'ISO 9001:2015', description: 'Quality Management System', gradient: 'from-blue-500 to-blue-600' },
  { icon: Shield, title: 'WHO-GMP', description: 'Good Manufacturing Practice', gradient: 'from-green-500 to-green-600' },
  { icon: FileCheck, title: 'FDA Approved', description: 'Food & Drug Administration', gradient: 'from-orange-500 to-orange-600' },
  { icon: Globe, title: 'Export Licensed', description: 'International Distribution', gradient: 'from-purple-500 to-purple-600' }
]
const commitments = [
  { title: 'Quality Assurance', description: 'Every product undergoes rigorous testing and quality control', icon: CheckCircle2, stats: '100%' },
  { title: 'Safety Standards', description: 'Adherence to international safety protocols and guidelines', icon: Shield, stats: 'WHO-GMP' },
  { title: 'Expert Team', description: 'Highly qualified professionals ensuring product excellence', icon: Users, stats: '50+' }
]
const statsCompliance = [
  { value: '25+', label: 'Years Experience', color: 'blue' },
  { value: '100%', label: 'Quality Assured', color: 'green' },
  { value: '500+', label: 'Products', color: 'orange' },
  { value: '50+', label: 'Countries', color: 'purple' }
]

function ComplianceHighlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-green-100 to-green-50 text-green-600 rounded-full text-sm font-semibold shadow-sm">
            <Shield size={16} className="animate-pulse" />
            Certifications & Compliance
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.6 }} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted Quality &<span className="block mt-2 gradient-text">Compliance Standards</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }} className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in our certifications and adherence to international quality standards.
          </motion.p>
        </div>

        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -10, scale: 1.05 }} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center overflow-hidden">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileHover={{ opacity: 0.1, scale: 1 }} transition={{ duration: 0.3 }} className={`absolute inset-0 bg-gradient-to-br ${cert.gradient}`}></motion.div>
                <div className="relative mb-6 inline-block">
                  <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }} className={`bg-gradient-to-br ${cert.gradient} p-4 rounded-2xl text-white shadow-lg relative`}>
                    <Icon size={40} />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">{cert.title}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

/* ===================== Distribution Map ===================== */
const regions = [
  { name: 'North India', cities: ['Delhi', 'Punjab', 'Haryana', 'Uttar Pradesh'], gradient: 'from-blue-500 to-blue-600', position: { top: '25%', left: '30%' } },
  { name: 'South India', cities: ['Karnataka', 'Tamil Nadu', 'Kerala', 'Andhra Pradesh'], gradient: 'from-green-500 to-green-600', position: { top: '70%', left: '35%' } },
  { name: 'East India', cities: ['West Bengal', 'Odisha', 'Bihar', 'Jharkhand'], gradient: 'from-orange-500 to-orange-600', position: { top: '45%', left: '55%' } },
  { name: 'West India', cities: ['Maharashtra', 'Gujarat', 'Rajasthan', 'Goa'], gradient: 'from-purple-500 to-purple-600', position: { top: '50%', left: '15%' } }
]
const statsDistribution = [
  { icon: Globe2, value: '28', label: 'States Covered', gradient: 'from-blue-500 to-blue-600' },
  { icon: MapPin, value: '500+', label: 'Distribution Points', gradient: 'from-green-500 to-green-600' },
  { icon: Truck, value: '1000+', label: 'Daily Deliveries', gradient: 'from-orange-500 to-orange-600' },
  { icon: Package, value: '50+', label: 'Partner Distributors', gradient: 'from-purple-500 to-purple-600' }
]

function DistributionMap() {
  const [activeRegion, setActiveRegion] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-50 text-purple-600 rounded-full text-sm font-semibold shadow-sm">
            <MapPin size={16} className="animate-bounce" />
            Distribution Network
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.6 }} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nationwide <span className="block mt-2 gradient-text">Distribution Coverage</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map + Pins */}
          <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            <div className="relative w-full h-[400px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-md">
                  <svg viewBox="0 0 200 300" className="w-full h-full">
                    <path d="M100,20 L140,40 L160,80 L170,120 L165,160 L150,200 L130,240 L110,270 L90,270 L70,240 L50,200 L35,160 L30,120 L40,80 L60,40 Z" fill="url(#gradient)" opacity="0.15"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6"/>
                        <stop offset="50%" stopColor="#8b5cf6"/>
                        <stop offset="100%" stopColor="#f97316"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  {regions.map((region, index) => {
                    const isActive = activeRegion === region.name
                    return (
                      <div key={region.name} className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" style={{ top: region.position.top, left: region.position.left }} onMouseEnter={() => setActiveRegion(region.name)} onMouseLeave={() => setActiveRegion(null)}>
                        <div className={`bg-gradient-to-br ${region.gradient} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-2xl`}>
                          <MapPin size={24} />
                        </div>
                        {isActive && (
                          <div className="absolute left-14 top-0 bg-white rounded-xl shadow-2xl p-4 min-w-[200px] border-2 border-gray-100">
                            <h4 className={`font-bold mb-2 bg-gradient-to-r ${region.gradient} bg-clip-text text-transparent`}>{region.name}</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {region.cities.map((city, idx) => <li key={idx} className="flex items-center gap-2"><div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${region.gradient}`}></div>{city}</li>)}
                            </ul>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {statsDistribution.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center justify-center">
                  <div className={`bg-gradient-to-br ${stat.gradient} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}><Icon size={24}/></div>
                  <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>{stat.value}</div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


