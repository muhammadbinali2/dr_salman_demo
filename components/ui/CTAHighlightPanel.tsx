'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp } from '@/lib/animations'
import Container from '../layout/Container'

export default function CTAHighlightPanel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        const offsetTop = (element as HTMLElement).offsetTop - 80
        window.scrollTo({ top: offsetTop, behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="consultation" className="relative py-32 lg:py-40 bg-bg">
      {/* Architectural divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      
      <Container>
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto"
        >
          {/* Floating CTA panel - breaks out of container */}
          <motion.div
            className="bg-primary rounded-2xl p-12 lg:p-16 shadow-primary-large relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-8">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Virtual Consultation
                  </h2>
                  <p className="text-xl text-white/95 leading-relaxed font-light">
                    Book a virtual consultation to discuss your aesthetic goals. For hair transplant consultations, please send 5 pictures via WhatsApp: 2 from sides, 1 front, 1 top, and 1 back of the head.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:pl-8">
                  <motion.a
                    href="#contact"
                    onClick={(e) => handleSmoothScroll(e, '#contact')}
                    className="block w-full px-8 py-5 bg-white text-primary rounded-lg font-semibold text-lg text-center shadow-large hover:bg-bg-alt transition-all group"
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Appointment
                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
