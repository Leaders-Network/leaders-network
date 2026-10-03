'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BlogCategory } from '@/types/blog'

interface BlogCategoriesSectionProps {
  categories: BlogCategory[]
  onCategorySelect?: (category: BlogCategory) => void
}

function CategoryCard({ category, index, onSelect }: { 
  category: BlogCategory
  index: number
  onSelect?: (category: BlogCategory) => void 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative cursor-pointer"
      onClick={() => onSelect?.(category)}
    >
      <div className="overflow-hidden rounded-3xl border border-gray-200 dark:border-white/[0.05] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_25px_70px_rgba(0,0,0,0.6)] hover:-translate-y-1">
        
        {/* Category Icon/Color */}
        <div className="mb-6 flex items-center gap-4">
          <div 
            className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg"
            style={{ backgroundColor: category.color }}
          >
            <div className="text-white font-semibold text-lg">
              {category.name.charAt(0)}
            </div>
          </div>
          <div className="rounded-full bg-gray-100 dark:bg-white/10 px-3 py-1 text-sm font-medium text-gray-600 dark:text-white/70">
            {category.postCount} {category.postCount === 1 ? 'article' : 'articles'}
          </div>
        </div>

        {/* Category Name */}
        <h3 className="mb-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {category.name}
        </h3>

        {/* Category Description */}
        <p className="text-sm leading-relaxed text-gray-600 dark:text-white/70">
          {category.description}
        </p>

        {/* Hover Arrow */}
        <div className="mt-6 flex items-center text-sm font-medium text-gray-500 dark:text-white/50 transition-all duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          <span>Explore articles</span>
          <motion.svg 
            className="ml-2 h-4 w-4"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </motion.svg>
        </div>

        {/* Subtle background pattern */}
        <div 
          className="absolute right-0 top-0 h-20 w-20 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
          style={{ 
            background: `radial-gradient(circle, ${category.color}40 0%, transparent 70%)`,
            clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)'
          }} 
        />
      </div>
    </motion.div>
  )
}

export default function BlogCategoriesSection({ categories, onCategorySelect }: BlogCategoriesSectionProps) {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center rounded-full border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04] px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-white/90 transition-colors duration-300"
          >
            Categories
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Explore by Topic
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Dive deep into specific areas of expertise with our curated content collections covering technology, business, and industry insights.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category, index) => (
            <CategoryCard 
              key={category.id} 
              category={category} 
              index={index}
              onSelect={onCategorySelect}
            />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/blogs/categories"
            className="group inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/20 bg-white dark:bg-white/[0.05] px-6 py-3 text-sm font-medium text-gray-900 dark:text-white transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <span>View all categories</span>
            <motion.svg 
              className="h-4 w-4"
              initial={{ x: 0 }}
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}