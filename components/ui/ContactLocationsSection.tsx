'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { containerVariants, itemVariants } from '@/lib/animations'
import Container from '../layout/Container'
import { contactInfo, clinicLocations } from '@/lib/content'

export default function ContactLocationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! Your message has been sent.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-32 lg:py-40 bg-bg">
      {/* Architectural divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          {/* Editorial header */}
          <motion.div
            variants={itemVariants}
            className="mb-20 lg:mb-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-4">
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-light leading-none mb-6 opacity-40">
                  07
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-6">
                  Contact Us
                </h2>
                <p className="text-xl text-text-secondary leading-relaxed font-light">
                  Ready for transformation? Get in touch with us today.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Asymmetric two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact Info - left column, offset */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 lg:pr-8"
            >
              <div className="sticky top-32 space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-8">Contact Information</h3>
                  <div className="space-y-8">
                    <div>
                      <div className="text-sm text-primary font-medium mb-2 uppercase tracking-wider">
                        Phone
                      </div>
                      <a href={`tel:${contactInfo.phone}`} className="text-2xl text-text-primary hover:text-primary transition-colors font-light">
                        {contactInfo.phone}
                      </a>
                    </div>
                    <div>
                      <div className="text-sm text-primary font-medium mb-2 uppercase tracking-wider">
                        Email
                      </div>
                      <a href={`mailto:${contactInfo.email}`} className="text-xl text-text-primary hover:text-primary transition-colors font-light break-all">
                        {contactInfo.email}
                      </a>
                    </div>
                    <div>
                      <div className="text-sm text-primary font-medium mb-4 uppercase tracking-wider">
                        Clinic Locations
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {clinicLocations.map((location, index) => (
                          <span
                            key={index}
                            className="px-6 py-3 bg-bg-subtle border border-border rounded-lg text-text-primary font-medium"
                          >
                            {location.city}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form - right column, wider */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7"
            >
              <div className="bg-bg-subtle border border-border rounded-lg p-8 lg:p-12 shadow-soft">
                <h3 className="text-2xl font-bold text-text-primary mb-8">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-3 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-5 py-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-bg text-text-primary text-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-3 uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-5 py-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-bg text-text-primary text-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-3 uppercase tracking-wider">
                      Your Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full px-5 py-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-bg text-text-primary text-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-3 uppercase tracking-wider">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="w-full px-5 py-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-vertical bg-bg text-text-primary text-lg"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full px-8 py-5 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors shadow-primary-medium"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
