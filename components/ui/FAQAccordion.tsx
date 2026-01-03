'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { containerVariants, itemVariants } from '@/lib/animations'
import Container from '../layout/Container'
import { faqs } from '@/lib/content'

export default function FAQAccordion() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-32 lg:py-40 bg-bg-alt">
      {/* Architectural divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto"
        >
          {/* Editorial header */}
          <motion.div
            variants={itemVariants}
            className="mb-20 lg:mb-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-4">
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-light leading-none mb-6 opacity-40">
                  06
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                  Frequently Asked Questions
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Editorial FAQ list with vertical rule */}
          <div className="relative">
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-border" />
            
            <motion.div
              variants={containerVariants}
              className="space-y-4 lg:pl-12"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  className="bg-bg border-l-4 border-transparent hover:border-primary rounded-lg overflow-hidden shadow-soft transition-all"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-start justify-between hover:bg-bg-subtle transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset group"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <div className="flex-1 pr-8">
                      <div className="text-sm text-primary font-medium mb-2 uppercase tracking-wider">
                        Question {String(index + 1).padStart(2, '0')}
                      </div>
                      <span className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 text-text-secondary text-2xl"
                    >
                      ▼
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6 text-lg text-text-secondary leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
