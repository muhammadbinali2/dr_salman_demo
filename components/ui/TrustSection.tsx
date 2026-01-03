'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { containerVariants, itemVariants } from '@/lib/animations'
import Container from '../layout/Container'
import { trustStats } from '@/lib/content'

export default function TrustSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="trust" className="relative py-32 lg:py-40 bg-bg-alt">
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
          {/* Editorial pull quote style */}
          <motion.div
            variants={itemVariants}
            className="mb-20 lg:mb-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-4">
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-light leading-none mb-6 opacity-40">
                  04
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                  Trust & Results
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Large editorial stat block */}
          <motion.div
            variants={itemVariants}
            className="bg-bg border-2 border-primary p-12 lg:p-16 rounded-lg shadow-primary-medium mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-7xl md:text-8xl lg:text-9xl font-bold text-primary leading-none mb-4"
                >
                  {trustStats.reviews}
                </motion.div>
                <div className="text-xl font-semibold text-text-primary mb-4 uppercase tracking-wider">
                  {trustStats.reviewsText}
                </div>
              </div>
              <div className="lg:col-span-7 lg:pl-8 border-l border-border">
                <p className="text-xl text-text-secondary leading-relaxed font-light">
                  {trustStats.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Editorial text blocks */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-text-secondary leading-relaxed"
            >
              We maintain the highest standards in all procedures, completed at prescribed protocols with customer satisfaction as our priority. Our results speak through the transformations we've achieved for patients across Pakistan and internationally.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-text-secondary leading-relaxed"
            >
              All procedures are performed with meticulous attention to detail, using proven techniques and maintaining strict safety protocols. We believe in transparent communication and realistic expectations, ensuring every patient is well-informed throughout their journey.
            </motion.p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
