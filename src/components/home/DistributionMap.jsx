import { MapPin, Truck, Package, Globe2 } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const regions = [
  { 
    name: 'North India', 
    cities: ['Delhi', 'Punjab', 'Haryana', 'Uttar Pradesh'],
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    position: { top: '25%', left: '30%' }
  },
  { 
    name: 'South India', 
    cities: ['Karnataka', 'Tamil Nadu', 'Kerala', 'Andhra Pradesh'],
    color: 'green',
    gradient: 'from-green-500 to-green-600',
    position: { top: '70%', left: '35%' }
  },
  { 
    name: 'East India', 
    cities: ['West Bengal', 'Odisha', 'Bihar', 'Jharkhand'],
    color: 'orange',
    gradient: 'from-orange-500 to-orange-600',
    position: { top: '45%', left: '55%' }
  },
  { 
    name: 'West India', 
    cities: ['Maharashtra', 'Gujarat', 'Rajasthan', 'Goa'],
    color: 'purple',
    gradient: 'from-purple-500 to-purple-600',
    position: { top: '50%', left: '15%' }
  }
];

const stats = [
  {
    icon: Globe2,
    value: '28',
    label: 'States Covered',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: MapPin,
    value: '500+',
    label: 'Distribution Points',
    gradient: 'from-green-500 to-green-600'
  },
  {
    icon: Truck,
    value: '1000+',
    label: 'Daily Deliveries',
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    icon: Package,
    value: '50+',
    label: 'Partner Distributors',
    gradient: 'from-purple-500 to-purple-600'
  }
];

export default function DistributionMap() {
  const [activeRegion, setActiveRegion] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-50 text-purple-600 rounded-full text-sm font-semibold shadow-sm"
          >
            <MapPin size={16} className="animate-bounce" />
            Distribution Network
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Nationwide
            <span className="block mt-2 gradient-text">Distribution Coverage</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Our extensive distribution network ensures that quality healthcare products 
            reach every corner of India, making healthcare accessible to all.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Map Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-purple-200/20 to-orange-200/20 blur-3xl"
            ></motion.div>

            <div className="relative w-full h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-md">
                  <motion.svg
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 0.15, scale: 1 } : {}}
                    transition={{ duration: 1 }}
                    viewBox="0 0 200 300"
                    className="w-full h-full"
                  >
                    <motion.path
                      d="M100,20 L140,40 L160,80 L170,120 L165,160 L150,200 L130,240 L110,270 L90,270 L70,240 L50,200 L35,160 L30,120 L40,80 L60,40 Z"
                      fill="url(#gradient)"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#f97316" />
                      </linearGradient>
                    </defs>
                  </motion.svg>

                  {/* Region Markers */}
                  {regions.map((region, index) => {
                    const isActive = activeRegion === region.name;

                    return (
                      <motion.div
                        key={region.name}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.15, type: "spring" }}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                        style={{ top: region.position.top, left: region.position.left }}
                        onMouseEnter={() => setActiveRegion(region.name)}
                        onMouseLeave={() => setActiveRegion(null)}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                          className={`absolute inset-0 bg-gradient-to-br ${region.gradient} rounded-full`}
                        ></motion.div>
                        
                        <motion.div
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.4 }}
                          className={`relative bg-gradient-to-br ${region.gradient} w-12 h-12 rounded-full shadow-2xl ${
                            isActive ? 'shadow-orange-500/50' : ''
                          } flex items-center justify-center text-white z-10`}
                        >
                          <MapPin size={24} />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20, scale: 0.8 }}
                          animate={isActive ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -20, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                          className="absolute left-14 top-0 bg-white rounded-xl shadow-2xl p-4 min-w-[200px] border-2 border-gray-100"
                        >
                          <h4 className={`font-bold mb-2 bg-gradient-to-r ${region.gradient} bg-clip-text text-transparent`}>
                            {region.name}
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {region.cities.map((city, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-2"
                              >
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${region.gradient}`}></div>
                                {city}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-2 h-2 bg-green-500 rounded-full"
                  ></motion.div>
                  <span className="text-sm font-semibold text-gray-700">Live Network</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Distribution Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Comprehensive Distribution Infrastructure
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              With strategically located distribution centers across India, we ensure 
              timely delivery of pharmaceutical products to hospitals, pharmacies, and 
              healthcare facilities nationwide.
            </motion.p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`bg-gradient-to-br ${stat.gradient} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 shadow-lg`}
                    >
                      <Icon size={24} />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                      className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-600 text-sm font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-500 shadow-lg"
            >
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Truck className="text-orange-500" size={20} />
                Distribution Advantages
              </h4>
              <ul className="space-y-2 text-gray-700">
                {['Temperature-controlled logistics', '24/7 order tracking system', 'Express delivery options', 'Regional distribution hubs'].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1 + idx * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl overflow-hidden"
        >
          <motion.div
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-50"
            style={{ backgroundSize: '200% 200%' }}
          ></motion.div>

          <div className="relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Become a Distribution Partner
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Join our growing network of distributors and help us deliver quality 
              healthcare products to more people across India.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Partner With Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
