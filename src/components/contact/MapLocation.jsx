import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Navigation, Building2, Car } from 'lucide-react'

export default function MapLocation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const locations = [
    {
      title: 'Corporate Office',
      address: '123 Pharma Street, Medical District, Mumbai, Maharashtra 400001',
      icon: Building2,
      type: 'Headquarters'
    },
    {
      title: 'Manufacturing Unit',
      address: '456 Industrial Area, Pune, Maharashtra 411001',
      icon: Building2,
      type: 'Production Facility'
    },
    {
      title: 'Research Center',
      address: '789 Innovation Park, Bangalore, Karnataka 560001',
      icon: Building2,
      type: 'R&D Facility'
    }
  ]

  const directions = [
    { icon: Car, text: 'By Car: Take Western Express Highway, Exit at Medical District' },
    { icon: Navigation, text: 'By Metro: Nearest station is Medical District Metro (500m walk)' },
    { icon: MapPin, text: 'Landmark: Next to Central Hospital, opposite City Medical College' }
  ]

  return (
    <section ref={ref} id="map" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 rounded-full text-sm font-semibold"
          >
            <MapPin size={16} />
            Our Locations
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Visit Us at
            <span className="block mt-2 gradient-text">Our Facilities</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We have state-of-the-art facilities across India. Visit us to experience 
            our commitment to quality and innovation firsthand.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-[500px] relative group">
              {/* Placeholder Map - Replace with actual Google Maps embed */}
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.71637344589844!3d19.08219783840898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>

              {/* Overlay Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Sunrise Pharma Headquarters</h4>
                    <p className="text-sm text-gray-600">Mumbai, Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Locations List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {locations.map((location, index) => {
              const Icon = location.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-lg flex-shrink-0">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-gray-900">{location.title}</h4>
                        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full font-semibold">
                          {location.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{location.address}</p>
                      <button className="mt-3 text-sm text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1">
                        <Navigation size={14} />
                        Get Directions
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Directions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to Reach Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {directions.map((direction, index) => {
              const Icon = direction.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-lg flex-shrink-0">
                      <Icon size={20} className="text-white" />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{direction.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}