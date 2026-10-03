'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface BlogHeroSectionProps {
  title: string
  subtitle: string
  pillBadge: string
  onSearch?: (searchTerm: string) => void
}

export default function BlogHeroSection({
  title,
  subtitle,
  pillBadge,
  onSearch
}: BlogHeroSectionProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(searchTerm)
  }

  return (
    <section className="relative overflow-hidden bg-white dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(59,130,246,0.05),_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_center,_rgba(59,130,246,0.1),_transparent_50%)]" />
      
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center rounded-full border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04] px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-white/90 transition-colors duration-300"
        >
          {pillBadge}
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 text-4xl font-semibold leading-[1.05] tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl transition-colors duration-300"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-white/75 sm:text-lg transition-colors duration-300"
        >
          {subtitle}
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto max-w-lg"
        >
          <form onSubmit={handleSearch} className="relative">
            <div className="relative overflow-hidden rounded-full border border-gray-200 dark:border-white/20 bg-white dark:bg-white/[0.05] shadow-lg backdrop-blur-sm transition-all duration-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
              <input
                type="text"
                placeholder="Search articles, technologies, insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent px-6 py-4 pr-14 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 outline-none"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                aria-label="Search"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>
        </motion.div>

        {/* Popular Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="text-sm text-gray-500 dark:text-white/50">Popular:</span>
          {['Digital Transformation', 'Cloud Solutions', 'Enterprise Software', 'AI & ML', 'Fintech'].map((tag, index) => (
            <motion.button
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-gray-200 dark:border-white/20 bg-gray-50 dark:bg-white/[0.02] px-3 py-1 text-xs font-medium text-gray-600 dark:text-white/70 transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => onSearch?.(tag)}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}