'use client'

import { useState } from 'react'
import Image from 'next/image'
import { IoHeart, IoChatbubblesOutline, IoFlag, IoEllipsisVertical, IoCreateOutline, IoTrash, IoShield } from 'react-icons/io5'
import CommentForm from './CommentForm'
import type { Comment, User } from '@/types/blog'

interface CommentItemProps {
  comment: Comment
  currentUser?: User
  allComments: Comment[]
  onLike: () => void
  onReply: (content: string) => void
  depth?: number
  maxDepth?: number
}

export default function CommentItem({
  comment,
  currentUser,
  allComments,
  onLike,
  onReply,
  depth = 0,
  maxDepth = 3
}: CommentItemProps) {
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [showReplies, setShowReplies] = useState(true)
  const [showMenu, setShowMenu] = useState(false)

  const isLiked = currentUser ? comment.likedBy.includes(currentUser.id) : false
  const isAuthor = currentUser?.id === comment.author.id
  const canReply = depth < maxDepth

  // Get direct replies to this comment
  const replies = allComments.filter(c => c.parentId === comment.id)

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (diffInSeconds < 60) return 'just now'
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    })
  }

  return (
    <div className={`${depth > 0 ? 'ml-8 md:ml-12' : ''}`}>
      <div className="flex space-x-3">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <Image
            src={comment.author.avatar}
            alt={comment.author.name}
            width={40}
            height={40}
            className="rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700"
          />
          {comment.author.verified && (
            <div className="relative -mt-2 ml-7">
              <div className="flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full">
                <IoShield size={12} className="text-white" />
              </div>
            </div>
          )}
        </div>

        {/* Comment Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                {comment.author.name}
              </h4>
              {comment.author.role && (
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {comment.author.role}
                </span>
              )}
              {comment.author.company && (
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  at {comment.author.company}
                </span>
              )}
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {formatTimeAgo(comment.createdAt)}
              </span>
              {comment.edited && (
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  (edited)
                </span>
              )}
            </div>

            {/* Menu */}
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <IoEllipsisVertical size={16} className="text-gray-400" />
              </button>

              {showMenu && (
                <div className="absolute right-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10">
                  {isAuthor ? (
                    <>
                      <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center space-x-2">
                        <IoCreateOutline size={14} />
                        <span>Edit comment</span>
                      </button>
                      <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center space-x-2">
                        <IoTrash size={14} />
                        <span>Delete comment</span>
                      </button>
                    </>
                  ) : (
                    <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center space-x-2">
                      <IoFlag size={14} />
                      <span>Report comment</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Comment Text */}
          <div className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {comment.content}
          </div>

          {/* Actions */}
          <div className="mt-3 flex items-center space-x-4">
            <button
              onClick={onLike}
              className={`flex items-center space-x-1 text-xs transition-colors ${
                isLiked
                  ? 'text-red-600 dark:text-red-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400'
              }`}
            >
              <IoHeart
                size={14}
                className={`${isLiked ? 'fill-current' : ''} transition-transform hover:scale-110`}
              />
              <span>{comment.likes}</span>
            </button>

            {canReply && (
              <button
                onClick={() => setShowReplyForm(!showReplyForm)}
                className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <IoChatbubblesOutline size={14} />
                <span>Reply</span>
              </button>
            )}

            {replies.length > 0 && (
              <button
                onClick={() => setShowReplies(!showReplies)}
                className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {showReplies ? 'Hide' : 'Show'} {replies.length} {replies.length === 1 ? 'reply' : 'replies'}
              </button>
            )}
          </div>

          {/* Reply Form */}
          {showReplyForm && (
            <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
              <CommentForm
                currentUser={currentUser}
                onSubmit={(content) => {
                  onReply(content)
                  setShowReplyForm(false)
                }}
                onCancel={() => setShowReplyForm(false)}
                placeholder={`Reply to ${comment.author.name}...`}
                isReply={true}
              />
            </div>
          )}

          {/* Replies */}
          {showReplies && replies.length > 0 && (
            <div className="mt-4 space-y-4">
              {replies.map((reply) => (
                <CommentItem
                  key={reply.id}
                  comment={reply}
                  currentUser={currentUser}
                  allComments={allComments}
                  onLike={() => {/* Handle reply like */}}
                  onReply={() => {/* Handle reply to reply */}}
                  depth={depth + 1}
                  maxDepth={maxDepth}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Click outside to close menu */}
      {showMenu && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setShowMenu(false)}
        />
      )}
    </div>
  )
}