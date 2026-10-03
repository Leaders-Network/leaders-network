'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ParticleConstellation from '../ui/ParticleConstellation'

// Project cards data for infinite scroll
const leftColumnProjects = [
  {
    id: 1,
    title: "Latest Shot",
    projectName: "Enterprise Dashboard",
    image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1790355509/analytics-on-display-stockcake_nzpyen.jpg"
  },
  {
    id: 2,
    title: "Latest Shot", 
    projectName: "Banking Platform",
    image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1790355115/hire_y78jar.webp"
  },
  {
    id: 3,
    title: "Latest Shot",
    projectName: "Analytics Suite", 
    image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1790355394/Analytics-footfall-UI-Macbook-_pofflp.webp"
  },
  {
    id: 4,
    title: "Latest Shot",
    projectName: "Mobile App",
    image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1790355394/809a3ec9730cc3e650de40d95e201a74_qro9xu.webp"
  }
]

const rightColumnProjects = [
  {
    id: 5,
    title: "Insurace",
    projectName: "Builders Liability",
    image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1790355642/Screenshot_2026-09-25_180020_lvyj7p.png"
  },
  {
    id: 6,
    title: "Latest Shot",
    projectName: "Fintech App",
    image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1790356439/fintech_qfvoou.webp"
  },
  {
    id: 7,
    title: "Glad Faith Website",
    projectName: "Glad Web Site",
    image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1790359962/Screenshot_2026-09-25_180322_ghni75.png"
  },
    {
    id: 8,
    title: "Latest Shot",
    projectName: "Government Portal",
    image: "https://res.cloudinary.com/yaovkmpi/image/upload/v1790354947/images_2_blq6er.jpg"
  },
]

// True only below the md breakpoint (768px), so desktop never mounts the
// canvas and mobile never renders the project columns' work.
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return isMobile
}



/* Per-image tuning, keyed by project id. Bigger zoom crops more of the edges.
   position picks which part of the image stays visible. */
const DEFAULT_ZOOM = 1.12
const imageTuning: Record<number, { zoom?: number; position?: string }> = {
  5: { zoom: 1.3, position: 'center top' }, // Builders Liability screenshot with the phone frame
}

function ProjectCard({ project }: { project: typeof leftColumnProjects[0] }) {
  const tune = imageTuning[project.id] ?? {}
  const zoom = tune.zoom ?? DEFAULT_ZOOM

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border-[6px] border-gray-200/50 dark:border-white/[0.06] bg-gray-100 dark:bg-dark-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-gray-300/70 dark:hover:border-white/15 hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
      {/* Zoom layer: scaled from the centre, clipped by the card */}
      <div className="absolute inset-0" style={{ transform: `scale(${zoom})` }}>
        <Image
          src={project.image}
          alt={project.projectName}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          className="object-cover"
          style={{ objectPosition: tune.position ?? 'center' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 dark:from-black/50 via-transparent to-transparent" />
      <div className="absolute left-3 top-3 z-10 md:left-4 md:top-4">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-white/90">
          {project.title}
        </p>
        <h3 className="text-lg font-bold text-white md:text-xl">
          {project.projectName}
        </h3>
      </div>
    </div>
  )
}

function Column({
  projects,
  keyPrefix,
  className,
}: {
  projects: typeof leftColumnProjects
  keyPrefix: string
  className: string
}) {
  const list = 'space-y-3 pb-3 sm:space-y-4 sm:pb-4 md:space-y-6 md:pb-6'
  return (
    <div className={`relative flex-1 overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-white/100 dark:from-dark-950/100 via-white/80 dark:via-dark-950/80 to-white/0 dark:to-dark-950/0 md:h-24" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-white/100 dark:from-dark-950/100 via-white/80 dark:via-dark-950/80 to-white/0 dark:to-dark-950/0 md:h-24" />
      <div className={keyPrefix === 'left' ? 'animate-scroll-up' : 'animate-scroll-down'}>
        {[1, 2].map((copy) => (
          <div key={copy} className={list}>
            {projects.map((p) => (
              <ProjectCard key={`${keyPrefix}-${copy}-${p.id}`} project={p} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HeroSection() {
  const isMobile = useIsMobile()

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-black pb-12 pt-28 transition-colors duration-300 sm:pt-32 md:bg-white md:dark:bg-dark-950">
      <div className="absolute inset-0 hidden bg-[radial-gradient(ellipse_at_top_left,_rgba(0,0,0,0.03),_transparent_55%)] md:block dark:bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.06),_transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid items-center justify-items-center gap-10 sm:gap-12 md:grid-cols-2 md:justify-items-stretch lg:gap-16">
          {/* Left content */}
          <div className="mx-auto w-full max-w-xl space-y-6 text-center sm:space-y-8 lg:mx-0 lg:max-w-none lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl md:text-gray-900 md:dark:text-white xl:text-7xl">
                We Build
                <br />
                Digital
                <br />
                Experiences
              </h1>
            </motion.div>

            <motion.p
              className="mx-auto max-w-md text-base leading-relaxed text-white/85 sm:max-w-lg sm:text-lg md:text-gray-600 md:dark:text-white/75 lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your business with cutting-edge technology solutions.
              We craft innovative software that converts visitors into customers
              and drives measurable results.
            </motion.p>

            <motion.div
              className="flex flex-row justify-center gap-2 sm:gap-3 md:gap-4 lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/contactus"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 px-4 py-3 text-xs font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 sm:flex-none sm:px-8 sm:py-4 sm:text-sm md:text-base"
              >
                Start Project
              </Link>
              <Link
                href="/ourservices"
                className="inline-flex flex-1 items-center justify-center rounded-full border border-white/30 bg-white/10 px-4 py-3 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white/20 sm:flex-none sm:px-8 sm:py-4 sm:text-sm md:border-gray-200 md:bg-gray-100 md:text-base md:text-gray-900 md:backdrop-blur-none md:hover:border-gray-300 md:hover:bg-gray-200 md:dark:border-white/20 md:dark:bg-white/[0.08] md:dark:text-white md:dark:hover:border-white/30 md:dark:hover:bg-white/15"
              >
                View Work
              </Link>
            </motion.div>
          </div>

          {/* Mobile: particle constellation under the text (mounted only below md) */}
          {isMobile && (
            <div className="relative h-[340px] w-full sm:h-[420px]">
              <ParticleConstellation />
            </div>
          )}

          {/* Desktop: project images (unchanged), shown from md up */}
          <div className="relative mx-auto hidden h-[460px] w-full max-w-xl md:block md:h-[540px] lg:mx-0 lg:h-[min(640px,72svh)] lg:max-w-none">
            <div className="flex h-full gap-3 sm:gap-4 md:gap-6">
              <Column projects={leftColumnProjects} keyPrefix="left" className="" />
              <Column projects={rightColumnProjects} keyPrefix="right" className="mt-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}