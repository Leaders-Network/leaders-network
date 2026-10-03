'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BlogPost, BlogFilters } from '@/types/blog'
import { getImageFallback, getAuthorFallback } from '@/lib/image-utils'

interface RecentPostsSectionProps {
  posts: BlogPost[]
  totalPosts?: number
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-3xl border border-gray-200 dark:border-white/[0.05] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_25px_70px_rgba(0,0,0,0.6)]"
    >
      <Link href={`/blogs/${post.slug}`} className="block">
        {/* Featured Image */}
        <div className="relative aspect-[3/2] overflow-hidden">
          {!imageError ? (
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <Image
              src={getImageFallback(post.category.id)}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          
          {/* Category Badge */}
          <div className="absolute left-3 top-3">
            <span 
              className="inline-flex rounded-full px-2.5 py-1 text-xs font-semibold text-white shadow-md"
              style={{ backgroundColor: post.category.color }}
            >
              {post.category.name}
            </span>
          </div>

          {/* Read Time */}
          <div className="absolute right-3 top-3">
            <div className="flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readTime}min
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta Info */}
          <div className="mb-3 flex items-center gap-3 text-xs text-gray-500 dark:text-white/50">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 overflow-hidden rounded-full bg-gray-200 dark:bg-white/20">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={20}
                  height={20}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = getAuthorFallback(post.author.id)
                  }}
                />
              </div>
              <span className="font-medium">{post.author.name}</span>
            </div>
            <span>•</span>
            <time>{new Date(post.publishedDate).toLocaleDateString()}</time>
          </div>

          {/* Title */}
          <h3 className="mb-3 text-lg font-semibold leading-tight tracking-tight text-gray-900 dark:text-white transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-white/70 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 dark:bg-white/10 px-2 py-1 text-xs text-gray-600 dark:text-white/60"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

function FilterBar({ filters, onFiltersChange }: {
  filters: BlogFilters
  onFiltersChange: (filters: BlogFilters) => void
}) {
  const categories = ['All', 'Technology', 'Business', 'Innovation', 'Cloud', 'AI & ML']
  const sortOptions = [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'trending', label: 'Trending' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 flex flex-wrap items-center justify-between gap-4"
    >
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFiltersChange({ ...filters, category: category.toLowerCase() })}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              filters.category === category.toLowerCase() || (filters.category === 'all' && category === 'All')
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                : 'border border-gray-200 dark:border-white/20 bg-white dark:bg-white/[0.05] text-gray-600 dark:text-white/70 hover:border-blue-300 dark:hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-500/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-500 dark:text-white/50">Sort by:</span>
        <select
          value={filters.sortBy}
          onChange={(e) => onFiltersChange({ ...filters, sortBy: e.target.value as any })}
          className="rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-white/[0.05] px-3 py-2 text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </motion.div>
  )
}

export default function RecentPostsSection({ posts, totalPosts = 0 }: RecentPostsSectionProps) {
  const [filters, setFilters] = useState<BlogFilters>({
    category: 'all',
    searchTerm: '',
    sortBy: 'latest'
  })

  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-24 md:px-8 transition-colors duration-300">
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
            Recent Articles
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Latest Publications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Stay updated with our latest articles, tutorials, and industry insights from the Leaders Network team.
          </motion.p>
        </div>

        {/* Filters */}
        <FilterBar filters={filters} onFiltersChange={setFilters} />

        {/* Posts Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Load More / Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="mb-6 text-sm text-gray-500 dark:text-white/50">
            Showing {posts.length} of {totalPosts} articles
          </div>
          <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:scale-105 hover:from-blue-400 hover:to-blue-500 hover:shadow-xl hover:shadow-blue-500/30">
            Load More Articles
          </button>
        </motion.div>
      </div>
    </section>
  )
}