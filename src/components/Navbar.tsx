'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Services', href: '/ourservices' },
  { name: 'Work', href: '/pages/case-studies' },
  { name: 'Team', href: '/about' },
  { name: 'Contact', href: '/contactus' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isMenuOpen])

  return (
    <>
      <motion.nav
        className="fixed inset-x-3 top-3 z-50 sm:inset-x-6 sm:top-4 lg:inset-x-8"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-6 sm:py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Leaders Network"
                width={120}
                height={40}
                className="h-7 w-auto sm:h-8 lg:h-9"
                priority
              />
            </Link>

            {/* Your desktop links, kept */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/contactus"
                className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black shadow-glow-white transition-transform duration-200 hover:scale-105 sm:px-6 sm:py-2.5 sm:text-sm"
              >
                <span className="hidden sm:inline">Start Project</span>
                <span className="sm:hidden">Start</span>
              </Link>

              {/* Round white menu button, as in the design. Add "lg:hidden" if you don't want it on desktop */}
              <motion.button
                onClick={() => setIsMenuOpen((o) => !o)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-glow-white sm:h-10 sm:w-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                <div className="flex w-4 flex-col gap-1">
                  <motion.span
                    className="block h-0.5 w-full rounded-full bg-black"
                    animate={isMenuOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="block h-0.5 w-full rounded-full bg-black"
                    animate={isMenuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40"
          >
            <div
              className="absolute inset-0 bg-dark-950/95 backdrop-blur-xl"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
            >
              <div className="mb-12 space-y-6 sm:space-y-8">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex min-h-[44px] items-center justify-center py-4 text-3xl font-medium tracking-tight text-white/80 transition-colors hover:text-white sm:text-4xl md:text-5xl"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Link
                  href="/contactus"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-block min-h-[44px] w-full max-w-xs rounded-full bg-white px-8 py-4 text-lg font-semibold text-black shadow-glow-white transition-transform hover:scale-105"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}