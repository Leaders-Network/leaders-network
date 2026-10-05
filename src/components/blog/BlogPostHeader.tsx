'use client'

import Image from 'next/image'
import Link from 'next/link'
import { IoTime, IoCalendar, IoEye, IoHeart, IoArrowBack } from 'react-icons/io5'
import type { BlogPost } from '@/types/blog'

interface BlogPostHeaderProps {
  post: BlogPost
}

export default function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <header className="space-y-6">
      {/* Back to Blog */}
      <IoLink 
        href="/blogs"
        className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
      >
        <IoArrowBack size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      {/* Category Badge */}
      <div>
        <IoLink
          href={`/blogs/category/${post.category.slug}`}
          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors"
          style={{ 
            backgroundColor: `${post.category.color}20`,
            color: post.category.color
          }}
        >
          {post.category.name}
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
        {post.title}
      </h1>

      {/* Excerpt */}
      <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
        {post.excerpt}
      </p>

      {/* Meta Information */}
      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <IoCalendar size={16} />
          <time dateTime={post.publishedDate}>
            {new Date(post.publishedDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>

        <div className="flex items-center gap-2">
          <IoTime size={16} />
          <span>{post.readTime} min read</span>
        </div>

        {post.views && (
          <div className="flex items-center gap-2">
            <IoEye size={16} />
            <span>{post.views.toLocaleString()} views</span>
          </div>
        )}

        {post.likes && (
          <div className="flex items-center gap-2">
            <IoHeart size={16} />
            <span>{post.likes} likes</span>
          </div>
        )}
      </div>

      {/* Author */}
      <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
        <Image
          src={post.author.avatar}
          alt={post.author.name}
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {post.author.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {post.author.role}
          </p>
          {post.author.bio && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {post.author.bio}
            </p>
          )}
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>
    </header>
  )
}