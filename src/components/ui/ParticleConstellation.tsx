'use client'

import { useEffect, useRef } from 'react'

/* ------------------------------------------------------------------ */
/*  Tuning                                                             */
/* ------------------------------------------------------------------ */

// Brand orange leads; the rest are the "spark" colours from the Dala palette.
const PALETTE = [
  { color: '#f97316', weight: 38 }, // brand orange
  { color: '#ffb829', weight: 20 }, // amber spark
  { color: '#8052ff', weight: 14 }, // violet
  { color: '#1fb59a', weight: 10 }, // teal
  { color: '#ec4899', weight: 10 }, // magenta
  { color: '#3b82f6', weight: 8 }, //  blue
]

const CORE_DESKTOP = 2600 // triangles that form the brain
const CORE_MOBILE = 1400
const AMBIENT_DESKTOP = 110 // dim triangles scattered around it
const AMBIENT_MOBILE = 50
const MOUSE_RADIUS = 110 // px: how close the cursor pushes particles
const MOUSE_FORCE = 70 // px: how far they get pushed

const ASPECT = 0.85 // brain height / width

/* ------------------------------------------------------------------ */
/*  Brain silhouette: draw blobs to a tiny canvas, sample filled pixels */
/* ------------------------------------------------------------------ */

function buildBrainPoints(count: number) {
  const W = 240
  const H = Math.round(W * ASPECT)
  const c = document.createElement('canvas')
  c.width = W
  c.height = H
  const g = c.getContext('2d')!
  g.fillStyle = '#fff'

  const blob = (cx: number, cy: number, rx: number, ry: number, rot = 0) => {
    g.beginPath()
    g.ellipse(cx * W, cy * H, rx * W, ry * H, rot, 0, Math.PI * 2)
    g.fill()
  }

  blob(0.5, 0.4, 0.43, 0.34) //          cerebrum
  blob(0.3, 0.52, 0.2, 0.2) //           frontal lobe
  blob(0.46, 0.66, 0.26, 0.13, -0.08) // temporal lobe
  blob(0.76, 0.7, 0.14, 0.11) //         cerebellum
  g.beginPath() //                       brain stem
  g.moveTo(0.58 * W, 0.66 * H)
  g.lineTo(0.66 * W, 0.66 * H)
  g.lineTo(0.64 * W, 0.97 * H)
  g.lineTo(0.57 * W, 0.97 * H)
  g.fill()

  const data = g.getImageData(0, 0, W, H).data
  const filled: number[] = []
  for (let i = 0; i < W * H; i++) if (data[i * 4 + 3] > 128) filled.push(i)

  const pts: { u: number; v: number }[] = []
  let attempts = 0
  while (pts.length < count && attempts < count * 8) {
    attempts++
    const idx = filled[(Math.random() * filled.length) | 0]
    const u = ((idx % W) + Math.random()) / W
    const v = (Math.floor(idx / W) + Math.random()) / H

    // Wavy fissure lines: skip points near the zero-crossings so the
    // cloud reads as folds (gyri) instead of a flat blob.
    const f =
      Math.sin(u * 34 + Math.sin(v * 19) * 2.4) *
      Math.sin(v * 28 + Math.cos(u * 15) * 2.1)
    if (Math.abs(f) < 0.12) continue

    pts.push({ u, v })
  }
  return pts
}

function pickBucket() {
  const total = PALETTE.reduce((s, p) => s + p.weight, 0)
  let r = Math.random() * total
  for (let i = 0; i < PALETTE.length; i++) {
    r -= PALETTE[i].weight
    if (r <= 0) return i
  }
  return 0
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

type Particle = {
  u: number
  v: number
  x: number
  y: number
  hx: number
  hy: number
  size: number
  rot: number
  spin: number
  phase: number
  speed: number
  drift: number
  delay: number
  bucket: number
  amb: boolean
}

export default function ParticleConstellation({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 767px)').matches

    let w = 0
    let h = 0
    let S = 0
    let ox = 0
    let oy = 0
    const mouse = { x: 0, y: 0, active: false }
    let parts: Particle[] = []
    let raf = 0
    let visible = true
    let start = performance.now()

    const place = (p: Particle) => {
      if (p.amb) {
        p.hx = p.u * w
        p.hy = p.v * h
      } else {
        p.hx = ox + p.u * S
        p.hy = oy + p.v * S * ASPECT
      }
    }

    const layout = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = rect.width
      h = rect.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      S = Math.min(w, h / ASPECT) * 0.96
      ox = (w - S) / 2
      oy = (h - S * ASPECT) / 2
      parts.forEach(place)
    }

    const init = () => {
      const core = buildBrainPoints(isMobile ? CORE_MOBILE : CORE_DESKTOP)
      const ambientCount = isMobile ? AMBIENT_MOBILE : AMBIENT_DESKTOP

      parts = [
        ...core.map((pt) => ({ ...pt, amb: false })),
        ...Array.from({ length: ambientCount }, () => ({
          u: Math.random(),
          v: Math.random(),
          amb: true,
        })),
      ].map((b) => ({
        u: b.u,
        v: b.v,
        amb: b.amb,
        x: Math.random() * w, // start scattered, then converge
        y: Math.random() * h,
        hx: 0,
        hy: 0,
        size: b.amb ? 3 + Math.random() * 4 : 2.5 + Math.random() * 3.5,
        rot: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.012,
        phase: Math.random() * Math.PI * 2,
        speed: 0.6 + Math.random() * 0.9,
        drift: b.amb ? 14 : 2 + Math.random() * 4,
        delay: Math.random() * 900,
        bucket: pickBucket(),
        amb: b.amb,
      }))
      parts.forEach(place)
    }

    const draw = (t: number, animate: boolean) => {
      ctx.clearRect(0, 0, w, h)
      const paths = Array.from({ length: PALETTE.length * 2 }, () => new Path2D())
      const elapsed = t - start

      for (const p of parts) {
        let tx = p.hx
        let ty = p.hy

        if (animate) {
          tx += Math.sin(t * 0.0005 * p.speed + p.phase) * p.drift
          ty += Math.cos(t * 0.0004 * p.speed + p.phase * 1.3) * p.drift

          if (mouse.active && !p.amb) {
            const dx = tx - mouse.x
            const dy = ty - mouse.y
            const d = Math.hypot(dx, dy)
            if (d < MOUSE_RADIUS && d > 0.01) {
              const f = Math.pow(1 - d / MOUSE_RADIUS, 2) * MOUSE_FORCE
              tx += (dx / d) * f
              ty += (dy / d) * f
            }
          }

          if (elapsed > p.delay) {
            p.x += (tx - p.x) * 0.045
            p.y += (ty - p.y) * 0.045
          }
          p.rot += p.spin
        } else {
          p.x = tx
          p.y = ty
        }

        const path = paths[p.bucket + (p.amb ? PALETTE.length : 0)]
        for (let k = 0; k < 3; k++) {
          const a = p.rot + (k * Math.PI * 2) / 3
          const px = p.x + Math.cos(a) * p.size
          const py = p.y + Math.sin(a) * p.size
          if (k === 0) path.moveTo(px, py)
          else path.lineTo(px, py)
        }
        path.closePath()
      }

      ctx.lineWidth = 1
      for (let i = 0; i < paths.length; i++) {
        const amb = i >= PALETTE.length
        ctx.globalAlpha = amb ? 0.3 : 0.95
        ctx.strokeStyle = PALETTE[i % PALETTE.length].color
        ctx.stroke(paths[i])
      }
      ctx.globalAlpha = 1
    }

    const loop = (t: number) => {
      if (!visible) {
        raf = 0
        return
      }
      draw(t, true)
      raf = requestAnimationFrame(loop)
    }

    layout()
    init()

    if (reduceMotion) {
      draw(0, false)
    } else {
      start = performance.now()
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
      mouse.active = true
    }
    const onLeave = () => {
      mouse.active = false
    }
    const ro = new ResizeObserver(() => {
      layout()
      if (reduceMotion) draw(0, false)
    })
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible && !raf && !reduceMotion) raf = requestAnimationFrame(loop)
    })

    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerleave', onLeave)
    ro.observe(canvas)
    io.observe(canvas)

    return () => {
      cancelAnimationFrame(raf)
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerleave', onLeave)
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className={`block h-full w-full ${className}`} />
}