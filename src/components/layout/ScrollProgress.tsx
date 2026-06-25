import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 })

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[#6366f1] via-[#818cf8] to-[#4f46e5]"
        style={{ scaleX }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-white/10"
        style={{ scaleX: 1 }}
        aria-hidden
      />
    </>
  )
}
