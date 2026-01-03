'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageGalleryProps {
  images: string[]
  alt: string
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  if (!images || images.length === 0) return null

  return (
    <div className="space-y-6">
      {/* Main Featured Image */}
      <motion.div
        className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border-2 border-border shadow-large bg-bg-subtle"
        layoutId={`gallery-main-${selectedIndex}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={images[selectedIndex]}
              alt={`${alt} - Image ${selectedIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority={selectedIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Thumbnail Grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all ${
                selectedIndex === index
                  ? 'border-primary shadow-primary-medium'
                  : 'border-border hover:border-primary-light shadow-soft hover:shadow-medium'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={image}
                alt={`${alt} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 300px"
              />
              {selectedIndex === index && (
                <motion.div
                  layoutId="gallery-indicator"
                  className="absolute inset-0 border-4 border-primary pointer-events-none"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      )}

      {/* Image Counter */}
      <div className="text-center text-sm text-text-tertiary">
        {selectedIndex + 1} / {images.length}
      </div>
    </div>
  )
}