'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { containerVariants, itemVariants } from '@/lib/animations'
import Container from '../layout/Container'
import { services } from '@/lib/content'
import Link from 'next/link'
import Image from 'next/image'

export default function ServicesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative py-32 lg:py-40 bg-bg-alt">
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
          {/* Editorial header with oversized number */}
          <motion.div
            variants={itemVariants}
            className="mb-20 lg:mb-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-light leading-none mb-6 opacity-40">
                  02
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
                  Our Services
                </h2>
                <p className="text-xl text-text-secondary leading-relaxed font-light">
                  Advanced techniques for natural, guaranteed results
                </p>
              </div>
            </div>
          </motion.div>

          {/* Staggered, overlapping service cards */}
          <div className="space-y-6 lg:space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                custom={index}
                className={`relative ${
                  index % 2 === 0 
                    ? 'lg:ml-0 lg:mr-8' 
                    : 'lg:ml-8 lg:mr-0'
                }`}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/services/${service.slug}`}>
                  <motion.div
                    className="bg-bg border border-border rounded-lg overflow-hidden shadow-soft hover:shadow-primary-medium transition-all group cursor-pointer"
                    whileHover={{ y: -8, boxShadow: '0 16px 40px rgba(13, 148, 136, 0.12)' }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
                      {/* Featured Image */}
                      {service.featuredImage && (
                        <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px]">
                          <Image
                            src={service.featuredImage}
                            alt={service.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 500px"
                          />
                          {/* <div className="absolute inset-0 bg-gradient-to-r from-bg/90 to-transparent lg:bg-gradient-to-r lg:from-bg/95 lg:via-bg/80 lg:to-transparent" /> */}
                        </div>
                      )}
                      
                      {/* Content */}
                      <div className={`${service.featuredImage ? 'lg:col-span-7' : 'lg:col-span-10 lg:col-start-2'} p-8 lg:p-10 relative`}>
                        {/* Service number - oversized */}
                        <div className="text-5xl md:text-6xl font-bold text-primary-light opacity-60 leading-none mb-6">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-text-secondary leading-relaxed mb-6 text-lg">
                          {service.description}
                        </p>
                        {service.techniques && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {service.techniques.slice(0, 3).map((technique, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-bg-subtle border border-border rounded text-xs text-text-secondary"
                              >
                                {technique}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="flex items-center justify-between mt-6">
                          <span className="text-primary font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                            Learn More
                            <span className="inline-block">→</span>
                          </span>
                          {service.images && service.images.length > 1 && (
                            <span className="text-xs text-text-tertiary">
                              {service.images.length} Photos
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
