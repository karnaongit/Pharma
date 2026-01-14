import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: [
        '123 Pharma Street, Medical District',
        'Mumbai, Maharashtra 400001',
        'India'
      ],
      gradient: 'from-blue-500 to-blue-600',
      action: { label: 'Get Directions', link: '#map' }
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        'Main: +91 98765 43210',
        'Support: +91 98765 43211',
        'Toll Free: 1800-123-4567'
      ],
      gradient: 'from-green-500 to-green-600',
      action: { label: 'Call Now', link: 'tel:+919876543210' }
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'General: info@sunrisepharma.com',
        'Sales: sales@sunrisepharma.com',
        'Support: support@sunrisepharma.com'
      ],
      gradient: 'from-orange-500 to-orange-600',
      action: { label: 'Send Email', link: 'mailto:info@sunrisepharma.com' }
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed'
      ],
      gradient: 'from-purple-500 to-purple-600',
      action: null
    }
  ]

  const socialMedia = [
    { icon: Facebook, name: 'Facebook', link: '#', color: 'hover:bg-blue-600' },
    { icon: Twitter, name: 'Twitter', link: '#', color: 'hover:bg-sky-500' },
    { icon: Linkedin, name: 'LinkedIn', link: '#', color: 'hover:bg-blue-700' },
    { icon: Instagram, name: 'Instagram', link: '#', color: 'hover:bg-pink-600' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      {/* Contact Details Cards */}
      {contactDetails.map((detail, index) => {
        const Icon = detail.icon
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ x: 10, scale: 1.02 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start gap-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`bg-gradient-to-br ${detail.gradient} p-3 rounded-lg flex-shrink-0 shadow-lg`}
              >
                <Icon size={28} className="text-white" />
              </motion.div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{detail.title}</h3>
                <ul className="space-y-2">
                  {detail.details.map((item, idx) => (
                    <li key={idx} className="text-gray-600 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
                
                {detail.action && (
                  <motion.a
                    href={detail.action.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-block mt-4 bg-gradient-to-r ${detail.gradient} text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    {detail.action.label}
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        )
      })}

      {/* Social Media */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 shadow-xl"
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Connect With Us</h3>
        <div className="flex justify-center gap-4">
          {socialMedia.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={index}
                href={social.link}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`bg-white/10 backdrop-blur-sm ${social.color} p-4 rounded-xl text-white transition-all duration-300 group`}
                aria-label={social.name}
              >
                <Icon size={24} />
              </motion.a>
            )
          })}
        </div>
        <p className="text-center text-gray-400 mt-6 text-sm">
          Follow us for updates, health tips, and latest product launches
        </p>
      </motion.div>

      {/* Quick Response Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-3 rounded-lg">
            <Clock size={32} />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-1">Quick Response Guarantee</h4>
            <p className="text-orange-100">
              We typically respond to all inquiries within 2 hours during business hours.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Emergency Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-red-500"
      >
        <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-2">
          <Phone className="text-red-500" size={20} />
          Emergency Hotline
        </h4>
        <p className="text-gray-700 mb-3">
          For urgent medical product inquiries or emergencies:
        </p>
        <a 
          href="tel:18001234567"
          className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors"
        >
          1800-123-4567
        </a>
        <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
      </motion.div>
    </motion.div>
  )
}