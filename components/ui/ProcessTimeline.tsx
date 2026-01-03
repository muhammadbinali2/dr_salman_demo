'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { containerVariants, itemVariants } from '@/lib/animations'
import Container from '../layout/Container'
import { processSteps } from '@/lib/content'

export default function ProcessTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="process" className="relative py-32 lg:py-40 bg-bg">
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
          {/* Editorial header */}
          <motion.div
            variants={itemVariants}
            className="mb-20 lg:mb-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-4">
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-light leading-none mb-6 opacity-40">
                  03
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                  The Patient Journey
                </h2>
              </div>
              <div className="lg:col-span-8 lg:pl-8 border-l border-border">
                <p className="text-xl text-text-secondary leading-relaxed font-light">
                  What to expect from consultation to results
                </p>
              </div>
            </div>
          </motion.div>

          {/* Editorial timeline with vertical rules */}
          <div className="relative">
            {/* Vertical architectural line */}
            <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-px bg-border" />

            <motion.div
              variants={containerVariants}
              className="space-y-16 lg:space-y-24"
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  className="relative pl-0 lg:pl-24"
                >
                  {/* Step indicator - architectural */}
                  <div className="absolute left-0 lg:left-8 top-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-primary-medium ring-4 ring-primary-subtle">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content block - offset */}
                  <div className={`${
                    index % 2 === 0 ? 'lg:ml-0' : 'lg:ml-16'
                  }`}>
                    <div className="bg-bg-subtle border-l-4 border-primary p-8 lg:p-12 rounded-lg shadow-soft">
                      <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
                        {step.title}
                      </h3>
                      <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
