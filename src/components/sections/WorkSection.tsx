'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

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
    subtitle: "Social Bridge",
    image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1791149657/social-bridge_uuufz8.png",
    href: "https://socialbridge-orcin.vercel.app/",
  },
  {
    id: 3,
    title: "Builders Liability",
    subtitle: "Builders Insurance platform",
    image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1791063083/builders-liability_cu9esu.png",
    href: "https://www.ammcbuildersinsurance.com/",
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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const scrollNext = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setTimeout(() => setIsTransitioning(false), 400)
  }, [isTransitioning])

  const scrollPrev = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setTimeout(() => setIsTransitioning(false), 400)
  }, [isTransitioning])

  const goTo = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 400)
  }, [currentIndex, isTransitioning])

  // Autoplay
  useEffect(() => {
    const autoplay = setInterval(scrollNext, 4000)
    return () => clearInterval(autoplay)
  }, [scrollNext])

  const currentProject = projects[currentIndex]
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]

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

      {/* Simple, smooth carousel */}
      <div className="relative">
        {/* Main carousel container */}
        <div className="relative h-[320px] sm:h-[380px] lg:h-[460px] flex items-center justify-center px-4">
          {/* Side cards for context */}
          <div className="absolute left-0 right-0 flex items-center justify-center">
            {/* Previous card (left) */}
            <motion.div
              key={`prev-${currentIndex}`}
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={{ opacity: 0.4, x: -120, scale: 0.85 }}
              exit={{ opacity: 0, x: -200, scale: 0.7 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="absolute left-4 w-[70vw] sm:w-[280px] lg:w-[320px] aspect-[3/2] rounded-2xl overflow-hidden bg-white dark:bg-dark-900 shadow-lg cursor-pointer hidden sm:block"
              onClick={scrollPrev}
            >
              <Image
                src={prevProject.image}
                alt={prevProject.title}
                fill
                className="object-cover"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Main/Center card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="relative w-[90vw] sm:w-[450px] lg:w-[520px] aspect-[3/2] rounded-3xl overflow-hidden bg-white dark:bg-dark-900 shadow-2xl z-10"
              >
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 450px, 520px"
                />

                {/* Glass caption bar */}
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-2xl border border-white/20 dark:border-white/10 bg-white/90 dark:bg-black/40 px-4 py-3 shadow-lg dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:inset-x-5 sm:bottom-5 sm:rounded-3xl sm:px-6 sm:py-4 transition-colors duration-300">
                  <div className="min-w-0 pr-3">
                    <h3 className="truncate text-sm font-semibold leading-tight text-gray-900 dark:text-white sm:text-lg lg:text-xl transition-colors duration-300">
                      {currentProject.title}
                    </h3>
                    <p className="mt-0.5 truncate text-xs text-gray-600 dark:text-white/80 sm:text-sm transition-colors duration-300">
                      {currentProject.subtitle}
                    </p>
                  </div>

                  <Link
                    href={currentProject.href}
                    aria-label={`View ${currentProject.title} case study`}
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
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next card (right) */}
            <motion.div
              key={`next-${currentIndex}`}
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 0.4, x: 120, scale: 0.85 }}
              exit={{ opacity: 0, x: 200, scale: 0.7 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="absolute right-4 w-[70vw] sm:w-[280px] lg:w-[320px] aspect-[3/2] rounded-2xl overflow-hidden bg-white dark:bg-dark-900 shadow-lg cursor-pointer hidden sm:block"
              onClick={scrollNext}
            >
              <Image
                src={nextProject.image}
                alt={nextProject.title}
                fill
                className="object-cover"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={scrollPrev}
          disabled={isTransitioning}
          aria-label="Previous project"
          className="absolute left-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200/80 bg-white/90 text-gray-700 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:border-gray-300 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed dark:border-white/20 dark:bg-black/60 dark:text-white dark:hover:bg-black/80 sm:left-4 sm:h-11 sm:w-11 md:left-[5%] duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18L9 12L15 6" />
          </svg>
        </button>

        <button
          onClick={scrollNext}
          disabled={isTransitioning}
          aria-label="Next project"
          className="absolute right-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200/80 bg-white/90 text-gray-700 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:border-gray-300 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed dark:border-white/20 dark:bg-black/60 dark:text-white dark:hover:bg-black/80 sm:right-4 sm:h-11 sm:w-11 md:right-[5%] duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18L15 12L9 6" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="mt-8 flex justify-center gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            disabled={isTransitioning}
            aria-label={`Go to project ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ease-out disabled:cursor-not-allowed ${
              i === currentIndex
                ? 'bg-blue-600 dark:bg-white w-8'
                : 'bg-gray-300 dark:bg-white/30 hover:bg-gray-400 dark:hover:bg-white/50 w-2'
            }`}
          />
        ))}
      </div>
    </section>
  )
}