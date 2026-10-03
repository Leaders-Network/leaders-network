'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function CTAButton({ 
  href, 
  children, 
  variant = 'primary', 
  size = 'md',
  className = ''
}: CTAButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
  
  const variants = {
    primary: "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-glow-orange hover:shadow-xl hover:from-orange-400 hover:to-orange-500",
    secondary: "border border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50"
  }
  
  const sizes = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base", 
    lg: "px-10 py-5 text-lg"
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link 
        href={href}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  )
}