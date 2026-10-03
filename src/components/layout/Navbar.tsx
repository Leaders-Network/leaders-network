'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from '@/components/ui/ThemeToggle'

/* ---------------- DATA ---------------- */

type SubItem = { name: string; href: string }
type MenuItem = { name: string; href: string; children?: SubItem[] }

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/ourservices' },
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blogs' },
  { name: 'Contact', href: '/contactus' },
]

/* CHANGE THESE HREFS to your real page URLs */
const servicesMenu: MenuItem[] = [
  {
    name: 'SDLC Software Development',
    href: '/ourservices/sdlc',
    children: [
      { name: 'Web Development', href: '/ourservices/sdlc/web-development' },
      { name: 'App Development', href: '/ourservices/sdlc/app-development' },
    ],
  },
  { name: 'IT Consulting', href: '/ourservices/it-consulting' },
  { name: 'Data Analysis', href: '/ourservices/data-analysis' },
  { name: 'Social Media Advert', href: '/ourservices/social-media-advert' },
]

const servicesHrefs = [
  '/ourservices',
  ...servicesMenu.flatMap((m) => [m.href, ...(m.children?.map((c) => c.href) ?? [])]),
]

const isActive = (pathname: string, href: string) =>
  href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/')

/* ---------------- SMALL PIECES ---------------- */

function Underline() {
  return (
    <motion.span
      layoutId="nav-underline"
      className="absolute inset-x-0 -bottom-1.5 h-0.5 rounded-full bg-blue-600 dark:bg-white"
      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
    />
  )
}

function Chevron({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-3.5 w-3.5 ${className}`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

const panel =
  'rounded-2xl border border-gray-200/80 dark:border-white/10 bg-white/95 dark:bg-[#111112]/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl'

const itemClass = (active: boolean) =>
  `block rounded-xl px-4 py-2.5 text-sm transition-colors ${
    active 
      ? 'bg-blue-50 dark:bg-white/10 text-blue-600 dark:text-white' 
      : 'text-gray-700 dark:text-white/75 hover:bg-gray-50 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-white'
  }`

/* ---------------- DESKTOP SERVICES DROPDOWN ---------------- */

function ServicesDropdown({ pathname, active }: { pathname: string; active: boolean }) {
  const [open, setOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openMenu = () => {
    if (timer.current) clearTimeout(timer.current)
    setOpen(true)
  }
  const closeMenu = () => {
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      setOpen(false)
      setSubOpen(false)
    }, 150)
  }

  // Close on route change
  useEffect(() => {
    setOpen(false)
    setSubOpen(false)
  }, [pathname])

  // Close on outside click and Escape
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false)
        setSubOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setSubOpen(false)
      }
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div ref={wrapRef} className="relative" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`relative flex items-center gap-1 text-sm font-medium transition-colors xl:text-base ${
          active || open ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-white/80 hover:text-blue-600 dark:hover:text-white'
        }`}
      >
        Services
        <Chevron className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        {active && <Underline />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-5"
          >
            <div className={`w-72 ${panel}`} role="menu">
              <Link href="/ourservices" className={itemClass(pathname === '/ourservices')}>
                All Services
              </Link>

              {servicesMenu.map((item) => {
                if (!item.children) {
                  return (
                    <Link key={item.name} href={item.href} className={itemClass(isActive(pathname, item.href))}>
                      {item.name}
                    </Link>
                  )
                }

                const childActive = item.children.some((c) => isActive(pathname, c.href))
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setSubOpen(true)}
                    onMouseLeave={() => setSubOpen(false)}
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={`${itemClass(isActive(pathname, item.href) || childActive)} flex-1`}
                      >
                        {item.name}
                      </Link>
                      {/* Chevron button: lets touch screens open the sub menu */}
                      <button
                        type="button"
                        onClick={() => setSubOpen((s) => !s)}
                        aria-label={`Toggle ${item.name} menu`}
                        aria-expanded={subOpen}
                        className="mr-1 flex h-8 w-8 items-center justify-center rounded-full text-white/60 hover:bg-white/10 hover:text-white"
                      >
                        <Chevron className="-rotate-90" />
                      </button>
                    </div>

                    <AnimatePresence>
                      {subOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-full top-0 z-50 pl-2"
                        >
                          <div className={`w-56 ${panel}`} role="menu">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className={itemClass(isActive(pathname, child.href))}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ---------------- NAVBAR ---------------- */

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileSdlcOpen, setMobileSdlcOpen] = useState(false)

  const servicesActive = servicesHrefs.some((h) => isActive(pathname, h))

  // Close the mobile menu when the page changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

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
        <div className="mx-auto max-w-7xl rounded-3xl border border-gray-200/50 dark:border-white/[0.06] bg-white/90 dark:bg-white/[0.03] px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-6 sm:py-3">
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

            {/* Desktop links with active underline */}
            <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
              {navigation.map((item) =>
                item.name === 'Services' ? (
                  <ServicesDropdown key={item.name} pathname={pathname} active={servicesActive} />
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative text-sm font-medium transition-colors xl:text-base ${
                      isActive(pathname, item.href) ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-white/80 hover:text-blue-600 dark:hover:text-white'
                    }`}
                  >
                    {item.name}
                    {isActive(pathname, item.href) && <Underline />}
                  </Link>
                )
              )}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Hidden on mobile/tablet, shown from lg up */}
              <div className="hidden items-center gap-2 sm:gap-3 lg:flex">
                <ThemeToggle />
              </div>

              <motion.button
                onClick={() => setIsMenuOpen((o) => !o)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 dark:bg-white shadow-glow-white sm:h-10 sm:w-10 lg:hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                <div className="flex w-4 flex-col gap-1">
                  <motion.span
                    className="block h-0.5 w-full rounded-full bg-white dark:bg-black"
                    animate={isMenuOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="block h-0.5 w-full rounded-full bg-white dark:bg-black"
                    animate={isMenuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile / tablet menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-white/95 dark:bg-dark-950/95 backdrop-blur-xl"
              onClick={() => setIsMenuOpen(false)}
            />

            <div className="relative h-full overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex min-h-full flex-col items-center justify-center px-6 pb-12 pt-28 text-center"
              >
                <div className="mb-10 w-full max-w-sm space-y-2">
                  {navigation.map((item, index) => {
                    const linkClass = (active: boolean) =>
                      `flex min-h-[44px] items-center justify-center gap-2 py-3 text-3xl font-medium tracking-tight transition-colors sm:text-4xl ${
                        active ? 'text-blue-600 dark:text-white' : 'text-gray-700 dark:text-white/70 hover:text-blue-600 dark:hover:text-white'
                      }`

                    if (item.name !== 'Services') {
                      const active = isActive(pathname, item.href)
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.15 + index * 0.06 }}
                        >
                          <Link href={item.href} onClick={() => setIsMenuOpen(false)} className={linkClass(active)}>
                            <span className={active ? 'border-b-2 border-blue-600 dark:border-white pb-0.5' : ''}>{item.name}</span>
                          </Link>
                        </motion.div>
                      )
                    }

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.15 + index * 0.06 }}
                      >
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen((o) => !o)}
                          aria-expanded={mobileServicesOpen}
                          className={`${linkClass(servicesActive)} w-full`}
                        >
                          <span className={servicesActive ? 'border-b-2 border-blue-600 dark:border-white pb-0.5' : ''}>Services</span>
                          <Chevron
                            className={`h-5 w-5 transition-transform duration-200 ${
                              mobileServicesOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-1 py-2">
                                <Link
                                  href="/ourservices"
                                  onClick={() => setIsMenuOpen(false)}
                                  className="block py-2 text-lg text-gray-600 dark:text-white/70 hover:text-blue-600 dark:hover:text-white"
                                >
                                  All Services
                                </Link>

                                {servicesMenu.map((sub) => (
                                  <div key={sub.name}>
                                    {sub.children ? (
                                      <>
                                        <div className="flex items-center justify-center gap-2">
                                          <Link
                                            href={sub.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`py-2 text-lg ${
                                              isActive(pathname, sub.href)
                                                ? 'text-blue-600 dark:text-white'
                                                : 'text-gray-600 dark:text-white/70 hover:text-blue-600 dark:hover:text-white'
                                            }`}
                                          >
                                            {sub.name}
                                          </Link>
                                          <button
                                            type="button"
                                            onClick={() => setMobileSdlcOpen((o) => !o)}
                                            aria-label={`Toggle ${sub.name} menu`}
                                            aria-expanded={mobileSdlcOpen}
                                            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white"
                                          >
                                            <Chevron
                                              className={`transition-transform duration-200 ${
                                                mobileSdlcOpen ? 'rotate-180' : ''
                                              }`}
                                            />
                                          </button>
                                        </div>

                                        <AnimatePresence initial={false}>
                                          {mobileSdlcOpen && (
                                            <motion.div
                                              initial={{ height: 0, opacity: 0 }}
                                              animate={{ height: 'auto', opacity: 1 }}
                                              exit={{ height: 0, opacity: 0 }}
                                              transition={{ duration: 0.25 }}
                                              className="overflow-hidden"
                                            >
                                              {sub.children.map((child) => (
                                                <Link
                                                  key={child.name}
                                                  href={child.href}
                                                  onClick={() => setIsMenuOpen(false)}
                                                  className={`block py-1.5 text-base ${
                                                    isActive(pathname, child.href)
                                                      ? 'text-blue-600 dark:text-white'
                                                      : 'text-gray-500 dark:text-white/50 hover:text-blue-600 dark:hover:text-white'
                                                  }`}
                                                >
                                                  {child.name}
                                                </Link>
                                              ))}
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </>
                                    ) : (
                                      <Link
                                        href={sub.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block py-2 text-lg ${
                                          isActive(pathname, sub.href)
                                            ? 'text-blue-600 dark:text-white'
                                            : 'text-gray-600 dark:text-white/70 hover:text-blue-600 dark:hover:text-white'
                                        }`}
                                      >
                                        {sub.name}
                                      </Link>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="mb-6 flex justify-center"
                >
                  <ThemeToggle />
                </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="w-full max-w-[220px]"
              >
              </motion.div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}