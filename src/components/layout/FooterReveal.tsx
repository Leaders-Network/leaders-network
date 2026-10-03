'use client'

import { useEffect, useRef, useState } from 'react'
import Footer from '@/components/layout/Footer'

export default function FooterReveal() {
  const footerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  const [reveal, setReveal] = useState(true)

  useEffect(() => {
    const el = footerRef.current
    if (!el) return

    const update = () => {
      const h = el.offsetHeight
      setHeight(h)
      // Pin the footer only while it fits inside the screen.
      // If it grows taller than the screen (e.g. accordions opened on a
      // short phone), fall back to normal flow so nothing gets cut off.
      setReveal(h <= window.innerHeight)
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    window.addEventListener('resize', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div
      className="relative"
      style={reveal ? { height, clipPath: 'inset(0)' } : undefined}
    >
      <div
        ref={footerRef}
        className={reveal ? 'fixed bottom-0 left-0 w-full' : 'w-full'}
      >
        <Footer />
      </div>
    </div>
  )
}