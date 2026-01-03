'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { containerVariants, itemVariants } from '@/lib/animations'
import Container from '../layout/Container'
import { credentials } from '@/lib/content'
import Image from 'next/image'

export default function CredentialsBlock() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-32 lg:py-40 bg-bg">
      {/* Architectural divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Editorial pull quote style header with image */}
          <motion.div
            variants={itemVariants}
            className="mb-20 lg:mb-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-4">
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-light leading-none mb-6 opacity-40">
                  01
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-8">
                  About Dr Salman
                </h2>
                
                {/* Dr Salman's Portrait */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="relative aspect-[3/4] max-w-xs rounded-lg overflow-hidden border-2 border-primary shadow-primary-large"
                >
                  <Image
                    src={credentials.image}
                    alt="Dr Salman - Top Rated Plastic Surgeon"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </motion.div>
              </div>
              
              <div className="lg:col-span-8 lg:pl-8 border-l border-border">
                <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-8 font-light">
                  Dr Salman is a pioneer of Unshaved Hair Transplant, offering utmost satisfaction with guaranteed results while using advanced hair transplant techniques such as FUE, DHI, and Sapphire FUE.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  With years of experience and a commitment to excellence, Dr Salman Aesthetics has established itself as a leading destination for cosmetic and plastic surgery in Pakistan. Our state-of-the-art facilities and personalized approach ensure that every patient receives the highest quality care.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Asymmetric credentials grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {[
              { title: credentials.title, delay: 0 },
              { title: credentials.pioneer, delay: 0.1 },
              { title: credentials.certified, delay: 0.2 },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                className={`bg-bg-subtle p-8 lg:p-10 rounded-lg border border-border shadow-soft hover:shadow-primary-medium transition-all ${
                  index === 1 ? 'lg:-mt-8 lg:mb-8' : ''
                }`}
                whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(13, 148, 136, 0.15)' }}
                transition={{ delay: item.delay }}
              >
                <div className="text-4xl font-bold text-primary-light mb-4 opacity-60">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-text-primary font-medium leading-relaxed text-lg">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
