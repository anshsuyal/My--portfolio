import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { CursorGlow } from './CursorGlow'
import { Footer } from './Footer'
import { LoadingScreen } from './LoadingScreen'
import { Navbar } from './Navbar'
import { ScrollProgress } from './ScrollProgress'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LenisInstance = any

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
}

export function AppLayout() {
  const location = useLocation()
  const reduced = useReducedMotion()
  const lenisRef = useRef<LenisInstance | null>(null)

  useEffect(() => {
    if (reduced) return

    const initLenis = async () => {
      const Lenis = (await import('lenis')).default
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1 - Math.pow(1 - t, 3)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      })

      lenisRef.current = lenis

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }

    initLenis()

    return () => {
      lenisRef.current?.destroy()
    }
  }, [reduced])

  useEffect(() => {
    if (!reduced && lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    }
  }, [location.pathname, reduced])

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[120] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2.5 focus:text-[#0a0a0a] focus:shadow-[0_4px_12px_rgba(0,0,0,0.1)] focus:outline-[#6366f1]"
      >
        Skip to content
      </a>
      <Navbar />
      <motion.main
        id="main"
        key={location.pathname}
        initial={reduced ? false : pageTransition.initial}
        animate={reduced ? { opacity: 1, y: 0 } : pageTransition.animate}
        transition={pageTransition.transition}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </>
  )
}
