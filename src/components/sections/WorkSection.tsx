'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
// 
const projects = [
    {
    id: 1,
    title: "Resume Checker",
    subtitle: "Resume Checker Site",
    image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1791062792/resume-checker_qgw6mq.png",
    href: "https://www.leaderscvchecker.com/",
  },
  {
    id: 2,
    title: "Social Bridge",
    subtitle: "Social Bridge ",
    image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1791149657/social-bridge_uuufz8.png",
    href: "https://socialbridge-orcin.vercel.app/",
  },
  {
    id: 3,
    title: "Builders Liability",
    subtitle: " Builders Insurace platform",
    image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1791063083/builders-liability_cu9esu.png",
    href: "https://www.ammcbuildersinsurance.com/", // TODO: replace with the real project page URL
  },
  {
    id: 4,
    title: "Government Portal System",
    subtitle: "Digital government initiative", 
    image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1790355394/809a3ec9730cc3e650de40d95e201a74_qro9xu.webp",
    href: "/work/government-portal-system",
  },
  {
    id: 5,
    title: "Healthcare Management Suite",
    subtitle: "Hospital operations optimization",
    image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1790355394/Analytics-footfall-UI-Macbook-_pofflp.webp", 
    href: "/work/healthcare-management-suite",
  },
  {
    id: 6,
    title: "Smart Card Identity System", 
    subtitle: "Secure authentication platform",
    image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1790355115/hire_y78jar.webp",
    href: "/work/smart-card-identity-system",
  }
]

export default function WorkSection() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [direction, setDirection] = useState(1) // 1 = moving forward, -1 = moving backward
  const [paused, setPaused] = useState(false)
  const n = projects.length

  const scrollPrev = useCallback(() => {
    setDirection(-1)
    setSelectedIndex((prev) => (prev - 1 + n) % n)
  }, [n])

  const scrollNext = useCallback(() => {
    setDirection(1)
    setSelectedIndex((prev) => (prev + 1) % n)
  }, [n])

  const goTo = useCallback(
    (i: number) => {
      setDirection(i > selectedIndex ? 1 : -1)
      setSelectedIndex(i)
    },
    [selectedIndex]
  )

  // Autoplay, paused while the mouse is over the carousel
  useEffect(() => {
    if (paused) return
    const autoplay = setInterval(scrollNext, 6000)
    return () => clearInterval(autoplay)
  }, [scrollNext, paused])

  // Position of each card relative to the selected one. The one hidden card is
  // parked on whichever side it's about to enter from, so it only ever slides
  // one slot into view instead of jumping across the whole carousel.
  const half = Math.floor(n / 2)
  const getOffset = (i: number) => {
    let raw = ((i - selectedIndex) % n + n) % n // normalize to 0..n-1
    if (direction === 1) {
      if (raw > half) raw -= n // range: (-half, half]
    } else {
      if (raw >= half) raw -= n // range: [-half, half)
    }
    return raw
  }

  return (
    <section id="work" className="relative scroll-mt-28 bg-gray-50 dark:bg-dark-950 py-10 sm:py-24 transition-colors duration-300">
      {/* Header */}
      <div className="container mx-auto mb-12 px-4 text-center sm:px-6 md:mb-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center rounded-full border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-gray-700 dark:text-white/90 sm:text-sm transition-colors duration-300"
        >
          Our Work
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300"
        >
          Work We&apos;re Proud Of
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 dark:text-white/80 sm:text-lg transition-colors duration-300"
        >
          A selection of projects we&apos;ve crafted for clients across industries.
        </motion.p>
      </div>

      {/* Carousel: full width so the side cards run off the edges */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Cards (masked so the outer edges fade out) */}
        <div
          className="relative h-[300px] overflow-hidden sm:h-[380px] lg:h-[460px]"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          {projects.map((project, i) => {
            const offset = getOffset(i)
            const isCenter = offset === 0
            const isVisible = Math.abs(offset) <= 1

            return (
              <div
                key={project.id}
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  initial={false}
                  animate={{
                    x: `${offset * 106}%`, // % of the card's own width, so it scales on every screen
                    scale: isCenter ? 1 : 0.88,
                    opacity: !isVisible ? 0 : isCenter ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  style={{ zIndex: isCenter ? 20 : 10, willChange: 'transform, opacity' }}
                  onClick={() => !isCenter && isVisible && goTo(i)}
                  className={`relative aspect-[3/2] w-[72vw] overflow-hidden rounded-3xl bg-white dark:bg-dark-900 shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] sm:w-[500px] lg:w-[600px] transition-all duration-300 ${
                    isVisible ? 'pointer-events-auto' : ''
                  } ${!isCenter && isVisible ? 'cursor-pointer' : ''}`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 72vw, (max-width: 1024px) 500px, 600px"
                    className="object-cover"
                  />

                  {/* Glass caption bar */}
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-2xl border border-white/20 dark:border-white/10 bg-white/90 dark:bg-black/40 px-4 py-3 shadow-lg dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:inset-x-5 sm:bottom-5 sm:rounded-3xl sm:px-6 sm:py-4 transition-colors duration-300">
                    <div className="min-w-0 pr-3">
                      <h3 className="truncate text-sm font-semibold leading-tight text-gray-900 dark:text-white sm:text-lg lg:text-xl transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="mt-0.5 truncate text-xs text-gray-600 dark:text-white/80 sm:text-sm transition-colors duration-300">
                        {project.subtitle}
                      </p>
                    </div>

                    {isCenter ? (
                      <Link
                        href={project.href}
                        aria-label={`View ${project.title} case study`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-transform duration-200 hover:scale-110 dark:bg-white dark:text-black dark:shadow-glow-white sm:h-10 sm:w-10"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                        >
                          <path d="M7 17L17 7M17 7H8M17 7V16" />
                        </svg>
                      </Link>
                    ) : (
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-200/80 text-gray-600 dark:bg-white/20 dark:text-white/60 sm:h-10 sm:w-10">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                        >
                          <path d="M7 17L17 7M17 7H8M17 7V16" />
                        </svg>
                      </span>
                    )}
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* Nav buttons: hidden on mobile (dots below handle it there), shown from md up */}
        <button
          onClick={scrollPrev}
          aria-label="Previous project"
          className="absolute left-3 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-lg transition-all hover:scale-105 hover:border-gray-300 dark:border-transparent dark:bg-white dark:text-black dark:shadow-glow-white md:flex sm:left-[5%] sm:h-11 sm:w-11 duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18L9 12L15 6" />
          </svg>
        </button>

        <button
          onClick={scrollNext}
          aria-label="Next project"
          className="absolute right-3 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-lg transition-all hover:scale-105 hover:border-gray-300 dark:border-transparent dark:bg-white dark:text-black dark:shadow-glow-white md:flex sm:right-[5%] sm:h-11 sm:w-11 duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18L15 12L9 6" />
          </svg>
        </button>
      </div>
    </section>
  )
}