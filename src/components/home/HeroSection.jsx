import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Award, Shield, Users, Sparkles } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: 'Quality Pharmaceutical Solutions',
    subtitle: 'ISO Certified Manufacturing Excellence',
    description: 'Leading provider of high-quality medicines and healthcare products',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&h=600&fit=crop',
    cta: 'Explore Products',
    link: '/products'
  },
  {
    id: 2,
    title: 'State-of-the-Art Manufacturing',
    subtitle: 'Advanced Production Facilities',
    description: 'Modern infrastructure ensuring the highest quality standards',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop',
    cta: 'Learn More',
    link: '/about'
  },
  {
    id: 3,
    title: 'Nutraceutical Excellence',
    subtitle: 'Wellness & Healthcare Products',
    description: 'Comprehensive range of nutritional supplements and wellness solutions',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=1200&h=600&fit=crop',
    cta: 'View Products',
    link: '/products'
  },
  {
    id: 4,
    title: 'Trusted Healthcare Partner',
    subtitle: 'Nationwide Distribution Network',
    description: 'Delivering quality healthcare products across India',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop',
    cta: 'Contact Us',
    link: '/contact'
  }
]

import { motion, AnimatePresence } from 'framer-motion'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-[blob_7s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-[blob_7s_ease-in-out_infinite] animation-delay-2000ms"></div>
      </div>

      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/85 to-transparent"></div>
          </div>

          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-2xl text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-orange-500/90 backdrop-blur-sm rounded-full text-sm font-semibold"
                >
                  <Sparkles size={16} className="animate-pulse" />
                  {slides[currentSlide].subtitle}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl md:text-2xl mb-8 text-gray-100"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex gap-4 flex-wrap"
                >
                  <a
                    href={slides[currentSlide].link}
                    className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden"
                  >
                    <span className="relative z-10">{slides[currentSlide].cta}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </a>
                  <a
                    href="/contact"
                    className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border-2 border-white/30 hover:border-white/50 hover:scale-105"
                  >
                    Get Quote
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full border border-white/30"
      >
        <ChevronLeft size={24} />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full border border-white/30"
      >
        <ChevronRight size={24} />
      </motion.button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-orange-500 w-8 shadow-lg shadow-orange-500/50'
                : 'bg-white/50 hover:bg-white/80 w-3'
            }`}
          />
        ))}
      </div>

      {/* Feature Badges */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-gray-900/95 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Award, title: 'ISO Certified', desc: 'Quality Assured', color: 'orange-500' },
              { icon: Shield, title: '100% Safe', desc: 'Tested Products', color: 'green-500' },
              { icon: Users, title: 'Expert Team', desc: '24/7 Support', color: 'blue-500' }
            ].map((badge, idx) => {
              const Icon = badge.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 text-white bg-white/5 backdrop-blur-sm rounded-lg p-3 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`bg-${badge.color} p-2 rounded-lg shadow-lg`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">{badge.title}</div>
                    <div className="text-sm text-gray-300">{badge.desc}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
