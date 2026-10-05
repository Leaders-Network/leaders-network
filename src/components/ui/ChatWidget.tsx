'use client'

import { useState, useEffect } from 'react'
import { X, MessageCircle, Send, ArrowLeft, Home, MessageSquare } from 'lucide-react'

interface ChatMessage {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface ChatConversation {
  id: string
  title: string
  lastMessage: string
  timestamp: string
  unread?: boolean
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [currentView, setCurrentView] = useState<'conversations' | 'chat'>('conversations')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const [conversations] = useState<ChatConversation[]>([
    {
      id: '1',
      title: 'Customer Support',
      lastMessage: '👋 Hi! How can we help?',
      timestamp: 'now',
      unread: true
    }
  ])

  // Show tooltip automatically when page loads
  useEffect(() => {
    const hasSeenTooltip = localStorage.getItem('chat-tooltip-dismissed')
    if (!hasSeenTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(true)
      }, 2000) // Show after 2 seconds
      return () => clearTimeout(timer)
    }
  }, [])

  // Auto-reply simulation
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].isUser && !isTyping) {
      setIsTyping(true)
      setTimeout(() => {
        const responses = [
          "Thanks for reaching out! We'll get back to you shortly.",
          "Hi! I'm here to help. What can I assist you with today?",
          "Let me connect you with our team. What's your question about?",
          "Great question! Our team typically responds within a few minutes.",
        ]
        const randomResponse = responses[Math.floor(Math.random() * responses.length)]
        
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          text: randomResponse,
          isUser: false,
          timestamp: new Date()
        }])
        setIsTyping(false)
      }, 2000)
    }
  }, [messages, isTyping])

  const dismissTooltip = () => {
    setShowTooltip(false)
    localStorage.setItem('chat-tooltip-dismissed', 'true')
  }

  const sendMessage = () => {
    if (!newMessage.trim()) return

    const message: ChatMessage = {
      id: Date.now().toString(),
      text: newMessage,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, message])
    setNewMessage('')
  }

  const startNewChat = () => {
    setCurrentView('chat')
    setMessages([
      {
        id: '1',
        text: '👋 Hi! How can we help?',
        isUser: false,
        timestamp: new Date()
      }
    ])
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const handleChatClick = () => {
    if (showTooltip) {
      dismissTooltip()
    }
    setIsOpen(true)
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip Popup - shows on page load */}
        {showTooltip && (
          <div className="absolute bottom-20 right-0 animate-fade-up">
            <div className="bg-orange-500 text-white px-4 py-4 rounded-lg shadow-lg relative w-20 text-center">
              <button
                onClick={dismissTooltip}
                className="absolute top-1 right-1 text-white hover:text-gray-200 w-5 h-5 flex items-center justify-center text-lg font-bold transition-colors"
              >
                ×
              </button>
              <div className="text-sm font-medium leading-tight pt-2">
                Chat<br />
                live<br />
                with<br />
                an<br />
                agent<br />
                now!
              </div>
            </div>
          </div>
        )}

        {/* Chat Bubble */}
        <button
          onClick={handleChatClick}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative"
        >
          <MessageCircle size={24} />
          {/* Notification badge */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
            1
          </div>
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white dark:bg-dark-900 rounded-2xl shadow-2xl w-80 h-96 flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700">
        
        {/* Header */}
        <div className="bg-brand-500 text-white p-4 flex items-center justify-between">
          {currentView === 'chat' ? (
            <button
              onClick={() => setCurrentView('conversations')}
              className="flex items-center space-x-2 hover:bg-brand-600 p-1 rounded"
            >
              <ArrowLeft size={16} />
              <span className="font-medium">Messages</span>
            </button>
          ) : (
            <h3 className="font-semibold flex items-center space-x-2">
              <MessageSquare size={18} />
              <span>Messages</span>
            </h3>
          )}
          
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-brand-600 p-1 rounded transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {currentView === 'conversations' ? (
            <>
              {/* New Conversation Button */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="text-sm font-medium mb-2 text-gray-900 dark:text-white">Start a new chat</div>
                <button
                  onClick={startNewChat}
                  className="w-full bg-gray-50 dark:bg-dark-800 hover:bg-gray-100 dark:hover:bg-dark-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 text-left transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">New Conversation</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">We typically reply in a few minutes</div>
                    </div>
                    <Send size={16} className="text-gray-400 group-hover:text-brand-500 transition-colors" />
                  </div>
                </button>
              </div>

              {/* Recent Conversations */}
              <div className="flex-1 p-4">
                <div className="text-sm font-medium mb-3 text-gray-900 dark:text-white">Recent</div>
                {conversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    onClick={startNewChat}
                    className="w-full text-left p-3 hover:bg-gray-50 dark:hover:bg-dark-800 rounded-lg transition-colors"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        👋
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 dark:text-white">{conversation.title}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 truncate">{conversation.lastMessage}</div>
                      </div>
                      <div className="text-xs text-gray-400 dark:text-gray-500">{conversation.timestamp}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-800">
                <div className="flex items-center justify-center space-x-4">
                  <Home size={20} className="text-gray-400" />
                  <MessageSquare size={20} className="text-brand-500" />
                </div>
                <div className="text-center mt-2">
                  <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center space-x-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Powered by tawk.to</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-2xl ${
                        message.isUser
                          ? 'bg-brand-500 text-white rounded-br-md'
                          : 'bg-gray-100 dark:bg-dark-800 text-gray-900 dark:text-white rounded-bl-md'
                      }`}
                    >
                      <div className="text-sm">{message.text}</div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 dark:bg-dark-800 px-4 py-2 rounded-2xl rounded-bl-md">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-dark-800 dark:text-white text-sm"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!newMessage.trim()}
                    className="bg-brand-500 hover:bg-brand-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}