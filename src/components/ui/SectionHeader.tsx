'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  badge: string
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeader({ 
  badge, 
  title, 
  subtitle, 
  centered = true 
}: SectionHeaderProps) {
  return (
    <motion.div 
      className={`space-y-4 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white/90 tracking-wider uppercase"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="w-2 h-2 bg-brand-500 rounded-full" />
        {badge}
      </motion.div>
      
      <motion.h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}