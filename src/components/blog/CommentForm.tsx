'use client'

import { useState } from 'react'
import Image from 'next/image'
import { IoSend, IoClose } from 'react-icons/io5'
import type { User } from '@/types/blog'

interface CommentFormProps {
  currentUser?: User
  onSubmit: (content: string) => void
  onCancel?: () => void
  placeholder?: string
  isReply?: boolean
}

export default function CommentForm({
  currentUser,
  onSubmit,
  onCancel,
  placeholder = 'Share your thoughts...',
  isReply = false
}: CommentFormProps) {
  const [content, setContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!content.trim() || !currentUser) return

    setIsSubmitting(true)
    
    try {
      await onSubmit(content.trim())
      setContent('')
    } catch (error) {
      console.error('Failed to submit comment:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Mock user for demo purposes
  const user = currentUser || {
    id: 'demo-user',
    name: 'Demo User',
    avatar: '/images/Picture-1.jpg',
    role: 'Visitor'
  }

  return (
    <div className="space-y-4">
      {/* User Info */}
      <div className="flex items-center space-x-3">
        <Image
          src={user.avatar}
          alt={user.name}
          width={36}
          height={36}
          className="rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700"
        />
        <div>
          <div className="font-medium text-sm text-gray-900 dark:text-white">
            {user.name}
          </div>
          {user.role && (
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {user.role}
            </div>
          )}
        </div>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={placeholder}
            rows={isReply ? 3 : 4}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            maxLength={2000}
          />
          
          {/* Character count */}
          <div className="mt-2 flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
            <span>Markdown supported</span>
            <span className={content.length > 1800 ? 'text-red-500' : ''}>
              {content.length}/2000
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
            <span>💡 Tip: Be respectful and constructive</span>
          </div>
          
          <div className="flex items-center space-x-2">
            {onCancel && (
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Cancel
              </button>
            )}
            
            <button
              type="submit"
              disabled={!content.trim() || isSubmitting}
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Posting...
                </>
              ) : (
                <>
                  <IoSend size={16} className="mr-2" />
                  {isReply ? 'Reply' : 'Comment'}
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Community Guidelines Link */}
      {!isReply && (
        <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            By commenting, you agree to our{' '}
            <button className="text-primary-600 dark:text-primary-400 hover:underline">
              Community Guidelines
            </button>
            . Be respectful and constructive in your discussions.
          </p>
        </div>
      )}
    </div>
  )
}