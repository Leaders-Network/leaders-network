'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "Leaders Network completely transformed our digital infrastructure. Their expertise in enterprise solutions helped us modernize our operations and improve efficiency by 60%. The team's professionalism and technical depth exceeded our expectations.",
    author: "Dr. Adebayo Ogundimu",
    role: "CTO, First Bank Nigeria",
    avatar: "/images/placeholder-avatar-1.jpg"
  },
  {
    quote: "The staff recruitment services provided by Leaders Network helped us build a world-class technology team. Their understanding of both local and international talent markets is unmatched in the industry.",
    author: "Sarah Chen",
    role: "HR Director, MTN Nigeria",
    avatar: "/images/placeholder-avatar-2.jpg"
  },
  {
    quote: "From concept to deployment, Leaders Network delivered our government portal system ahead of schedule. The solution now serves over 500,000 citizens daily with 99.9% uptime.",
    author: "Engr. Mohammed Yusuf",
    role: "Director, Lagos State ICT",
    avatar: "/images/placeholder-avatar-3.jpg"
  }
]

const clientAvatars = [
  "/images/placeholder-avatar-1.jpg",
  "/images/placeholder-avatar-2.jpg",
  "/images/placeholder-avatar-3.jpg",
  "/images/placeholder-avatar-4.jpg",
  "/images/placeholder-avatar-5.jpg",
  "/images/placeholder-avatar-6.jpg"
]

function Star({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.53L12 17.5l-5.87 3.07 1.12-6.53L2.5 9.41l6.56-.95L12 2.5z" />
    </svg>
  )
}

function Avatar({ src, fallback, className }: { src: string; fallback: string; className: string }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`relative overflow-hidden rounded-full bg-gradient-to-br from-gray-200/80 to-gray-300/40 dark:from-white/25 dark:to-white/5 ${className}`}>
      {failed ? (
        <span className="flex h-full w-full items-center justify-center text-xs font-semibold text-gray-700 dark:text-white">
          {fallback}
        </span>
      ) : (
        <Image src={src} alt="" fill sizes="80px" className="object-cover" onError={() => setFailed(true)} />
      )}
    </div>
  )
}

export default function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="relative flex min-h-[80vh] scroll-mt-28 items-center overflow-hidden bg-gray-50 dark:bg-dark-950 px-4 py-20 sm:px-6 md:px-8 transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.02),_transparent_65%)] dark:bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.04),_transparent_65%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Stars: solid light grey */}
          <div className="mb-8 flex justify-center gap-2 text-yellow-400 dark:text-[#c9c9c9]">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: -10, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 200 }}
              >
                <Star />
              </motion.span>
            ))}
          </div>

          {/* Quote: large, bold, tight, centred */}
          <motion.blockquote
            className="mx-auto text-[1.65rem] font-semibold leading-[1.2] tracking-[-0.02em] text-gray-900 dark:text-[#f0f0f0] sm:text-4xl md:text-[2.6rem] transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            &quot;{testimonials[0].quote}&quot;
          </motion.blockquote>

          {/* Attribution: small, one line */}
          <motion.p
            className="mt-10 text-sm text-gray-600 dark:text-white/85 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            — {testimonials[0].author}, {testimonials[0].role}
          </motion.p>

          {/* Tightly overlapping round photos */}
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex -space-x-3">
              {clientAvatars.map((avatar, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  style={{ zIndex: index }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.12, zIndex: 20, transition: { duration: 0.2 } }}
                >
                  <Avatar
                    src={avatar}
                    fallback={String.fromCharCode(65 + index)}
                    className="h-14 w-14 border-2 border-white dark:border-[#1a1a1a] shadow-[0_6px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.5)] sm:h-[68px] sm:w-[68px]"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Your "Trusted by" text, kept but quiet so it doesn't compete */}
          <p className="mt-5 text-xs text-gray-500 dark:text-white/50 transition-colors duration-300">
            Trusted by 500+ Companies · Across Nigeria, Africa &amp; Beyond
          </p>
        </motion.div>

        {/* Your other two testimonials */}
        <div className="mx-auto mt-20 grid max-w-4xl gap-6 md:grid-cols-2">
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="rounded-3xl border border-gray-200 dark:border-white/[0.06] bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.015] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-gray-300 dark:hover:border-white/15 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex gap-1 text-yellow-400 dark:text-[#c9c9c9]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mb-6 text-sm leading-relaxed text-gray-700 dark:text-white/90 transition-colors duration-300">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="flex items-center gap-3">
                <Avatar
                  src={testimonial.avatar}
                  fallback={testimonial.author.charAt(0)}
                  className="h-10 w-10 border border-gray-200 dark:border-white/10"
                />
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white transition-colors duration-300">{testimonial.author}</div>
                  <div className="text-xs text-gray-500 dark:text-white/60 transition-colors duration-300">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}