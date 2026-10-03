'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function ContactCTASection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail('')

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 sm:py-28 md:px-8 transition-colors duration-300"
    >
      {/* Soft neutral glow behind the content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.02),_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05),_transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            className="mb-6 inline-flex items-center rounded-full border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-gray-700 dark:text-white/90 sm:text-sm transition-colors duration-300"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.div>

          {/* Headline: all white, two lines kept */}
          <motion.h2
            className="mb-6 text-4xl font-semibold leading-[1.1] tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Transform
            <br />
            Your Digital Future?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Let&apos;s build something extraordinary together. Get in touch and let&apos;s discuss how we can accelerate your technology goals.
          </motion.p>

          {/* Pill email field with the button inside it */}
          <motion.form
            onSubmit={handleSubmit}
            className="mx-auto max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.04] p-2 shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)] transition-all focus-within:border-blue-300 dark:focus-within:border-white/25 duration-300">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={isSubmitting || isSubmitted}
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/40 outline-none disabled:opacity-50 sm:px-5 sm:text-base transition-colors duration-300"
              />

              <motion.button
                type="submit"
                disabled={!email || isSubmitting || isSubmitted}
                className="flex min-h-[44px] min-w-[110px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-white px-5 text-sm font-semibold text-white dark:text-black shadow-lg dark:shadow-glow-white transition-all disabled:cursor-not-allowed disabled:opacity-60 sm:min-w-[130px] sm:px-6 duration-200"
                whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.03 }}
                whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.97 }}
              >
                {isSubmitting ? (
                  <motion.span
                    className="block h-4 w-4 rounded-full border-2 border-black/20 border-t-black"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                ) : isSubmitted ? (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-1"
                  >
                    ✓ Sent
                  </motion.span>
                ) : (
                  'Start Project'
                )}
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}