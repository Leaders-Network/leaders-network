'use client'

import { MessageCircle, Users, TrendingUp } from 'lucide-react'

interface CommentStatsProps {
  totalComments: number
  totalReplies: number
  activeUsers?: number
  engagementRate?: number
}

export default function CommentStats({
  totalComments,
  totalReplies,
  activeUsers = 0,
  engagementRate = 0
}: CommentStatsProps) {
  const totalConversations = totalComments + totalReplies

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">

      {/* Engagement Tips */}
      {totalComments === 0 && (
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-200 mb-1">
                Start the conversation
              </h4>
              <p className="text-xs text-blue-700 dark:text-blue-300">
                Share your thoughts, ask questions, or provide insights to engage with the community and get the discussion started.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}