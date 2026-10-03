'use client'

import { useState } from 'react'
import CommentsSection from './CommentsSection'
import CommentNotification from './CommentNotification'
import type { BlogPost, PostEngagement, User, Comment } from '@/types/blog'

interface BlogPostClientProps {
  post: BlogPost
  initialEngagement: PostEngagement
  currentUser?: User
}

interface NotificationState {
  isVisible: boolean
  type: 'like' | 'comment' | 'reply'
  message: string
}

export default function BlogPostClient({
  post,
  initialEngagement,
  currentUser
}: BlogPostClientProps) {
  const [engagement, setEngagement] = useState<PostEngagement>(initialEngagement)
  const [notification, setNotification] = useState<NotificationState>({
    isVisible: false,
    type: 'like',
    message: ''
  })

  const showNotification = (type: 'like' | 'comment' | 'reply', message: string) => {
    setNotification({
      isVisible: true,
      type,
      message
    })
  }

  const hideNotification = () => {
    setNotification(prev => ({ ...prev, isVisible: false }))
  }

  const handleLikePost = async () => {
    if (!currentUser) return
    
    const isLiked = engagement.likedBy.includes(currentUser.id)
    
    setEngagement(prev => ({
      ...prev,
      likes: isLiked ? prev.likes - 1 : prev.likes + 1,
      likedBy: isLiked 
        ? prev.likedBy.filter(id => id !== currentUser.id)
        : [...prev.likedBy, currentUser.id]
    }))

    showNotification(
      'like', 
      isLiked ? 'Removed like from post' : 'Liked this post!'
    )
  }

  const handleCommentAdd = async (content: string, parentId?: string) => {
    if (!currentUser) return

    const newComment: Comment = {
      id: `comment-${Date.now()}`,
      content,
      author: currentUser,
      createdAt: new Date().toISOString(),
      likes: 0,
      likedBy: [],
      replies: [],
      parentId,
      postId: post.slug
    }

    setEngagement(prev => ({
      ...prev,
      comments: [...prev.comments, newComment],
    }))

    showNotification(
      parentId ? 'reply' : 'comment',
      parentId ? 'Reply posted successfully!' : 'Comment posted successfully!'
    )
  }

  const handleCommentLike = async (commentId: string) => {
    if (!currentUser) return

    let wasLiked = false
    setEngagement(prev => ({
      ...prev,
      comments: prev.comments.map(comment => {
        if (comment.id === commentId) {
          const isLiked = comment.likedBy.includes(currentUser.id)
          wasLiked = isLiked
          return {
            ...comment,
            likes: isLiked ? comment.likes - 1 : comment.likes + 1,
            likedBy: isLiked 
              ? comment.likedBy.filter(id => id !== currentUser.id)
              : [...comment.likedBy, currentUser.id]
          }
        }
        return comment
      })
    }))

    showNotification(
      'like',
      wasLiked ? 'Removed like from comment' : 'Liked comment!'
    )
  }

  const handleCommentReply = async (commentId: string, content: string) => {
    await handleCommentAdd(content, commentId)
  }

  return (
    <>
      <CommentsSection
        post={post}
        engagement={engagement}
        currentUser={currentUser}
        onLikePost={handleLikePost}
        onCommentAdd={handleCommentAdd}
        onCommentLike={handleCommentLike}
        onCommentReply={handleCommentReply}
      />
      
      <CommentNotification
        type={notification.type}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />
    </>
  )
}