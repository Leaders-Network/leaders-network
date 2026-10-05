'use client'

import { useState, useEffect } from 'react'
import { IoCheckmarkCircle, IoHeart, IoChatbubblesOutline, IoClose } from 'react-icons/io5'

interface CommentNotificationProps {
  type: 'like' | 'comment' | 'reply'
  message: string
  isVisible: boolean
  onClose: () => void
  autoHide?: boolean
  duration?: number
}

export default function CommentNotification({
  type,
  message,
  isVisible,
  onClose,
  autoHide = true,
  duration = 3000
}: CommentNotificationProps) {
  useEffect(() => {
    if (isVisible && autoHide) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      
      return () => clearTimeout(timer)
    }
  }, [isVisible, autoHide, duration, onClose])

  const getIcon = () => {
    switch (type) {
      case 'like':
        return <IoHeart className="w-5 h-5 text-red-500" />
      case 'comment':
        return <IoChatbubblesOutline className="w-5 h-5 text-blue-500" />
      case 'reply':
        return <IoChatbubblesOutline className="w-5 h-5 text-green-500" />
      default:
        return <IoCheckmarkCircle className="w-5 h-5 text-green-500" />
    }
  }

  const getBgColor = () => {
    switch (type) {
      case 'like':
        return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
      case 'comment':
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
      case 'reply':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
      default:
        return 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
      <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg border shadow-lg ${getBgColor()} max-w-sm`}>
        {getIcon()}
        <p className="text-sm font-medium text-gray-900 dark:text-white flex-1">
          {message}
        </p>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <IoClose className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}