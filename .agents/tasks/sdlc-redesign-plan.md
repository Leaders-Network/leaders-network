# SDLC Page Redesign Implementation Plan

## Overview
Redesign all 5 SDLC page components to match the professional homepage/landing page design quality with consistent branding, animations, and modern UI patterns.

## Key Design Rules
- **NO react-icons imports** - Replace all with inline SVG elements (stroke, no fill, strokeWidth 1.5-1.8)
- **Orange brand colors** - Primary orange (#EA580C/#FB923C) with violet/purple accents for development theme
- **GlowCard pattern** - Mouse-following glow effects using useMotionValue + useSpring
- **Tilt effects** - 3D tilt animations with perspective: 1000 using Framer Motion
- **Orange CTAs** - bg-gradient-to-r from-orange-500 to-orange-600 with hover:from-orange-400 hover:to-orange-500
- **TypeScript safety** - Explicitly type all arrays (e.g., `useState<number[]>([0,2,4])`)
- **Consistent badges** - border border-gray-200 dark:border-white/[0.06] bg-gray-100 dark:bg-white/[0.04]
- **Gradient text** - bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent

## Implementation Plan

- [ ] 1. Redesign SDLCHeroSection with homepage-style hero pattern and custom SDLC animation visual.
      Replace react-icons imports with inline SVGs. Add Tilt wrapper for animated visual card.
      Use orange gradient CTAs and SDLC-themed development lifecycle animation.
      Files: src/components/services/sdlc/SDLCHeroSection.tsx
      Verify: `npm run build` compiles successfully without TypeScript errors.

- [ ] 2. Transform SDLCProcessSection to use GlowCard components with mouse-following glow effects.
      Remove all react-icons, replace with custom inline SVG icons. Update color scheme to orange primary.
      Add proper TypeScript array typing and improve animation sequencing.
      Files: src/components/services/sdlc/SDLCProcessSection.tsx
      Verify: `npm run build` compiles successfully and component renders with glow effects.

- [ ] 3. Redesign SDLCTechnologiesSection with animated technology cards using Tilt effects.
      Replace technology logo images with consistent SVG fallbacks. Add hover animations and glow effects.
      Update layout to match ServicesCategoriesSection card grid pattern.
      Files: src/components/services/sdlc/SDLCTechnologiesSection.tsx  
      Verify: `npm run build` compiles successfully and technology cards display properly.

- [ ] 4. Update SDLCBenefitsSection to use consistent GlowCard pattern with orange gradient icons.
      Replace react-icons with inline SVGs. Add mouse-following glow effects and improve typography.
      Use orange/violet color scheme consistent with SDLC branding.
      Files: src/components/services/sdlc/SDLCBenefitsSection.tsx
      Verify: `npm run build` compiles successfully and benefits cards have glow effects.

- [ ] 5. Modernize SDLCCaseStudiesSection with Tilt-wrapped case study cards and improved visual layout.
      Remove react-icons imports, add custom inline SVGs. Update color scheme and add orange CTAs.
      Improve image layouts and add consistent spacing/typography patterns.
      Files: src/components/services/sdlc/SDLCCaseStudiesSection.tsx
      Verify: `npm run build` compiles successfully and case study layouts are consistent.

## Design Patterns to Implement

### Tilt Wrapper (for hero visuals and cards)
```typescript
function Tilt({ children, className = '' }: { children: ReactNode; className?: string }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 18 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 18 })
  // ... mouse handlers
}
```

### GlowCard Pattern (for feature cards)
```typescript
function GlowCard({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    // Set CSS variables --x and --y for radial gradient positioning
  }
  // ... glow implementation with radial-gradient background
}
```

### Custom SVG Icons (replacing react-icons)
All icons should be inline SVG with these properties:
- viewBox="0 0 24 24"
- fill="none"
- stroke="currentColor" 
- strokeWidth="1.6"
- strokeLinecap="round"
- strokeLinejoin="round"
- className="h-6 w-6" or similar size

### Color Scheme Updates
- Primary: Orange gradients (from-orange-500 to-orange-600)
- Secondary: Violet/purple accents for development theme
- Backgrounds: bg-gray-50 dark:bg-dark-950 or dark:bg-dark-900
- Borders: border-gray-200 dark:border-white/[0.06]
- Text gradients: bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent

### Animation Patterns
- All components use `whileInView` with `viewport={{ once: true }}`
- Staggered delays for lists/grids (delay: index * 0.1)
- Hover animations with scale: 1.05
- Custom animated visuals specific to SDLC (code editor, deployment pipeline, etc.)

### TypeScript Improvements
- Replace implicit any[] with explicit types: `useState<number[]>([0,2,4])`
- Add proper typing for all state and props
- Fix array initialization patterns to avoid TypeScript errors

## Reference Files for Design Patterns
- **ServicesHeroSection.tsx** - Hero section layout, Tilt wrapper, animated visuals
- **ServicesCategoriesSection.tsx** - GlowCard implementation, mouse glow effects
- **WebDevHeroSection.tsx** - Hero section pattern, CTA buttons, stats section
- **ITConsultingHeroSection.tsx** - Custom animated visuals, 3D tilt effects
- **HeroSection.tsx** - Brand colors, button styles, typography patterns

## Verification Requirements
Each step must:
1. Compile successfully with `npm run build`
2. Have no TypeScript errors or implicit any types
3. Use only inline SVG icons (no react-icons imports)
4. Follow consistent orange/violet color scheme
5. Include proper Framer Motion animations
6. Match the professional quality of homepage components