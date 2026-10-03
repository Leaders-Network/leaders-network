'use client'

import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  glow = false 
}: CardProps) {
  return (
    <motion.div
      className={`
        bg-dark-900 border border-white/10 rounded-3xl p-6 backdrop-blur-sm
        ${hover ? 'hover:-translate-y-1 hover:border-white/20' : ''}
        ${glow ? 'shadow-glow-brand' : 'shadow-soft'}
        transition-all duration-300
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}