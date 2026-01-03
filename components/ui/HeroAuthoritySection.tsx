'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import Container from '../layout/Container'

export default function HeroAuthoritySection() {
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
    <section id="home" className="relative min-h-screen flex items-center bg-bg-alt overflow-hidden">
      {/* Vertical rule line - architectural element */}
      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-px bg-border hidden md:block" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center py-32 lg:py-40">
          {/* Left column - oversized typography */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 lg:pr-16"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-8"
            >
              <span className="text-sm font-medium text-primary tracking-wider uppercase">
                Top Rated Plastic & Cosmetic Surgeon
              </span>
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-text-primary mb-8 leading-[0.9] tracking-tight"
            >
              Dr Salman
              <br />
              <span className="text-primary">Aesthetics</span>
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="max-w-xl"
            >
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-12 font-light">
                Promoting Medical Tourism in Pakistan by offering Dr Salman's Signature Hairline and Body Contouring. Get luxury healthcare under one roof.
              </p>
            </motion.div>
          </motion.div>

          {/* Right column - offset CTA and stats */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="lg:col-span-5 lg:pl-8"
          >
            <div className="sticky top-32 space-y-8">
              <motion.a
                href="#consultation"
                onClick={(e) => handleSmoothScroll(e, '#consultation')}
                className="block px-10 py-6 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all shadow-primary-large group"
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Consultation
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.a>

              {/* Editorial stat block */}
              <div className="pt-8 border-t border-border">
                <div className="text-5xl font-bold text-primary mb-2">1,300+</div>
                <div className="text-sm text-text-secondary uppercase tracking-wider">Trustpilot Reviews</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Floating decorative element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-20 right-8 md:right-16 w-32 h-32 bg-primary-subtle rounded-full blur-3xl opacity-30"
      />
    </section>
  )
}
