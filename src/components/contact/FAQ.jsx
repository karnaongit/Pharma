import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react'

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What are your business hours?',
      answer: 'We are open Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 9:00 AM to 2:00 PM. We are closed on Sundays and public holidays. However, our customer support email is monitored 24/7.'
    },
    {
      question: 'How can I place a bulk order?',
      answer: 'For bulk orders, please contact our sales team at sales@sunrisepharma.com or call +91 98765 43210. Our team will provide you with customized pricing, delivery timelines, and payment terms based on your requirements.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we export our products to over 50 countries worldwide. We have all necessary export licenses and comply with international pharmaceutical regulations. Contact our export department for specific country availability.'
    },
    {
      question: 'Are your products certified?',
      answer: 'All our products are ISO 9001:2015 certified and manufactured in WHO-GMP compliant facilities. We also have FDA approval for select products and maintain all necessary pharmaceutical certifications.'
    },
    {
      question: 'What is your return and refund policy?',
      answer: 'We have a strict quality assurance policy. If you receive a defective or damaged product, please contact us within 48 hours of delivery. We will arrange for a replacement or full refund as per our return policy guidelines.'
    },
    {
      question: 'How do I become a distributor?',
      answer: 'We are always looking for reliable distribution partners. Please fill out our partnership inquiry form or email us at partnership@sunrisepharma.com with your company details, distribution network, and area of interest.'
    },
    {
      question: 'Do you offer product samples?',
      answer: 'Yes, we provide samples to healthcare professionals, institutions, and potential business partners. Please contact our sales team with your requirements and credentials for sample requests.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, letters of credit (LC), and for approved customers, we offer credit terms. For retail customers, we accept all major payment methods including credit/debit cards and online payment gateways.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={ref} className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-100 to-transparent rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-600 rounded-full text-sm font-semibold"
          >
            <HelpCircle size={16} />
            Frequently Asked Questions
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Got Questions?
            <span className="block mt-2 gradient-text">We Have Answers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Find answers to common questions about our products, services, and policies. 
            Can't find what you're looking for? Contact us directly!
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-start gap-4 flex-grow">
                    <div className={`p-2 rounded-lg transition-all duration-300 ${
                      isOpen 
                        ? 'bg-gradient-to-br from-blue-500 to-indigo-600' 
                        : 'bg-gray-200 group-hover:bg-gray-300'
                    }`}>
                      <HelpCircle size={20} className={isOpen ? 'text-white' : 'text-gray-600'} />
                    </div>
                    <h3 className={`text-lg font-bold transition-colors duration-300 ${
                      isOpen ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 ${isOpen ? 'text-blue-600' : 'text-gray-400'}`}
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-20">
                        <motion.p
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ delay: 0.1 }}
                          className="text-gray-600 leading-relaxed"
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircle size={32} />
              <h3 className="text-2xl font-bold">Still Have Questions?</h3>
            </div>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our support team is always ready to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                Send a Message
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Call Us Now
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}