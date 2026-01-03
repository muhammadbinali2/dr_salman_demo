import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp } from '@/lib/animations'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
  variant?: 'default' | 'alt'
}

export default function Section({ children, id, className = '', variant = 'default' }: SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const bgClass = variant === 'alt' ? 'bg-bg-alt' : 'bg-bg'

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-28 lg:py-32 ${bgClass} ${className}`}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeInUp}
      >
        {children}
      </motion.div>
    </section>
  )
}


