'use client'

import { useState } from 'react'
import { IoHeart, IoChatbubblesOutline, IoShareSocial, IoFlag, IoEllipsisVertical } from 'react-icons/io5'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'
import CommentStats from './CommentStats'
import type { BlogPost, Comment, User, PostEngagement } from '@/types/blog'

interface CommentsSectionProps {
  post: BlogPost
  engagement: PostEngagement
  currentUser?: User
  onLikePost: () => void
  onCommentAdd: (content: string, parentId?: string) => void
  onCommentLike: (commentId: string) => void
  onCommentReply: (commentId: string, content: string) => void
}

export default function CommentsSection({
  post,
  engagement,
  currentUser,
  onLikePost,
  onCommentAdd,
  onCommentLike,
  onCommentReply
}: CommentsSectionProps) {
  const [showCommentForm, setShowCommentForm] = useState(false)
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'popular'>('newest')

  const isPostLiked = currentUser ? engagement.likedBy.includes(currentUser.id) : false

  const sortedComments = [...engagement.comments]
    .filter(comment => !comment.parentId) // Only top-level comments
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        case 'popular':
          return b.likes - a.likes
        default:
          return 0
      }
    })

  return (
    <section className="space-y-8">
      {/* Post Engagement Bar */}
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-6">
        <div className="flex items-center space-x-6">
          {/* Like Button */}
          <button
            onClick={onLikePost}
            className={`flex items-center space-x-2 transition-colors ${
              isPostLiked
                ? 'text-red-600 dark:text-red-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400'
            }`}
          >
            <IoHeart
              size={20}
              className={`transition-transform hover:scale-110 ${
                isPostLiked ? 'fill-current' : ''
              }`}
            />
            <span className="font-medium">{engagement.likes.toLocaleString()}</span>
          </button>

          {/* Comment Button */}
          <button
            onClick={() => setShowCommentForm(!showCommentForm)}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <IoChatbubblesOutline size={20} />
            <span className="font-medium">{engagement.commentStats.totalComments}</span>
          </button>

          {/* Share Button */}
          <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
            <IoShareSocial size={20} />
            <span className="font-medium">{engagement.shares}</span>
          </button>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          {engagement.views.toLocaleString()} views
        </div>
      </div>

      {/* Comment Form */}
      {showCommentForm && (
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-gray-50 dark:bg-gray-800">
          <CommentForm
            currentUser={currentUser}
            onSubmit={(content) => {
              onCommentAdd(content)
              setShowCommentForm(false)
            }}
            onCancel={() => setShowCommentForm(false)}
            placeholder="Share your thoughts on this article..."
          />
        </div>
      )}

      {/* Comments Stats and Sort */}
      <div className="space-y-6">
        <CommentStats
          totalComments={engagement.commentStats.totalComments}
          totalReplies={engagement.commentStats.totalReplies}
        />

        {engagement.comments.length > 0 && (
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Comments ({engagement.commentStats.totalComments})
            </h3>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="popular">Most liked</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {sortedComments.length > 0 ? (
          sortedComments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              currentUser={currentUser}
              allComments={engagement.comments}
              onLike={() => onCommentLike(comment.id)}
              onReply={(content) => onCommentReply(comment.id, content)}
              depth={0}
            />
          ))
        ) : (
          <div className="text-center py-12">
            <IoChatbubblesOutline className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No comments yet
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Be the first to share your thoughts on this article.
            </p>
            {!showCommentForm && (
              <button
                onClick={() => setShowCommentForm(true)}
                className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <IoChatbubblesOutline size={16} className="mr-2" />
                Start the discussion
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}