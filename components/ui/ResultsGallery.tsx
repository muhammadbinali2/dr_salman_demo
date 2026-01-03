'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { containerVariants, itemVariants } from '@/lib/animations'
import Container from '../layout/Container'
import Image from 'next/image'
import { services } from '@/lib/content'

export default function ResultsGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Collect all images with their service info
  const allImages = services
    .filter(s => s.images && s.images.length > 0)
    .flatMap(service => 
      service.images!.map(image => ({
        src: image,
        category: service.slug,
        title: service.title,
      }))
    )

  const filteredImages = selectedCategory === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === selectedCategory)

  const categories = [
    { slug: 'all', label: 'All Results' },
    ...services
      .filter(s => s.images && s.images.length > 0)
      .map(s => ({ slug: s.slug, label: s.title }))
  ]

  return (
    <section id="gallery" className="relative py-32 lg:py-40 bg-bg">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="mb-20 lg:mb-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-light leading-none mb-6 opacity-40">
                  05
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
                  Our Results
                </h2>
                <p className="text-xl text-text-secondary leading-relaxed font-light">
                  Real transformations from real patients
                </p>
              </div>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="mb-12 flex flex-wrap gap-3"
          >
            {categories.map((category) => (
              <motion.button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.slug
                    ? 'bg-primary text-white shadow-primary-medium'
                    : 'bg-bg-subtle text-text-secondary border border-border hover:border-primary hover:text-primary'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Masonry Gallery Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.src}-${index}`}
                variants={itemVariants}
                custom={index}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ delay: index * 0.05 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg border-2 border-border shadow-soft hover:shadow-primary-large transition-all cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Image
                  src={image.src}
                  alt={`${image.title} result`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay with title */}
                <div className="absolute inset-0 bg-gradient-to-t from-text-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-lg">
                      {image.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No results message */}
          {filteredImages.length === 0 && (
            <motion.div
              variants={itemVariants}
              className="text-center py-20"
            >
              <p className="text-text-secondary text-lg">
                No images available for this category yet.
              </p>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}