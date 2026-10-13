'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface WhatsAppWidgetProps {
  phoneNumber: string // WhatsApp number in international format (e.g., "2347087013213")
  message?: string // Default message
}

export default function WhatsAppWidget({ 
  phoneNumber, 
  message = "Hello! I'd like to know more about your services." 
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Welcome Message - hidden on mobile, visible on larger screens */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="hidden md:block mb-4 mr-4 max-w-xs"
          >
            <div className="relative rounded-2xl bg-white dark:bg-dark-900 border border-gray-200 dark:border-white/10 p-4 shadow-lg">
              {/* Speech bubble tail */}
              <div className="absolute -bottom-2 right-8 h-4 w-4 rotate-45 transform bg-white dark:bg-dark-900 border-r border-b border-gray-200 dark:border-white/10"></div>
              
              <div className="flex items-start space-x-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-500/20">
                  <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.687z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Leaders Network</p>
                  <p className="mt-1 text-xs text-gray-600 dark:text-white/70">
                    👋 Hi there! Need help with your project? Chat with us on WhatsApp. We'll get back to you quickly!
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => setShowWelcome(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:text-white/50 dark:hover:text-white/70"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button with permanent label */}
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        {/* Chat with us label - hidden on mobile, visible on larger screens */}
        <motion.div
          className="hidden md:block rounded-full bg-white dark:bg-dark-900 border border-gray-200 dark:border-white/10 px-4 py-2 shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-sm font-medium text-gray-700 dark:text-white whitespace-nowrap">
            💬 Chat with us
          </span>
        </motion.div>

        <motion.button
          onClick={handleWhatsAppClick}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-dark-950 transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulse effect */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
          
          {/* WhatsApp Icon */}
          <svg 
            className="relative h-8 w-8 text-white transition-transform group-hover:scale-110" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.687z"/>
          </svg>
        </motion.button>
      </motion.div>
    </div>
  )
}