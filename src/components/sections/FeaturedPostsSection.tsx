'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '@/types/blog'
import { useState } from 'react'
import { getImageFallback, getAuthorFallback } from '@/lib/image-utils'

interface FeaturedPostsSectionProps {
  posts: BlogPost[]
}

function FeaturedPostCard({ post, index }: { post: BlogPost; index: number }) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/[0.05] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_25px_70px_rgba(0,0,0,0.6)] ${
        index === 0 ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <Link href={`/blogs/${post.slug}`} className="block">
        {/* Featured Image */}
        <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[2/1] md:aspect-[2/1]' : 'aspect-[3/2]'}`}>
          {!imageError ? (
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <Image
              src={getImageFallback(post.category.id)}
              alt={post.title}
              fill
              sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute left-4 top-4">
            <span 
              className="inline-flex rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg"
              style={{ backgroundColor: post.category.color }}
            >
              {post.category.name}
            </span>
          </div>

          {/* Featured Badge */}
          {post.featured && (
            <div className="absolute right-4 top-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`p-6 ${index === 0 ? 'md:p-8' : ''}`}>
          {/* Meta Info */}
          <div className="mb-3 flex items-center gap-4 text-xs text-gray-500 dark:text-white/50">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 overflow-hidden rounded-full bg-gray-200 dark:bg-white/20">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={24}
                  height={24}
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
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>

          {/* Title */}
          <h3 className={`mb-3 font-semibold leading-tight tracking-tight text-gray-900 dark:text-white transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 ${
            index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}>
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className={`text-gray-600 dark:text-white/70 ${index === 0 ? 'text-base leading-relaxed' : 'text-sm leading-relaxed'}`}>
            {post.excerpt}
          </p>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 dark:bg-white/10 px-2 py-1 text-xs text-gray-600 dark:text-white/60"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  )
}

export default function FeaturedPostsSection({ posts }: FeaturedPostsSectionProps) {
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
            Featured Articles
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
          >
            Latest Insights & Innovations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
          >
            Discover the latest trends, best practices, and thought leadership from our experts in technology, business transformation, and innovation.
          </motion.p>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid gap-8 md:grid-cols-3 md:grid-rows-2">
          {posts.map((post, index) => (
            <FeaturedPostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}