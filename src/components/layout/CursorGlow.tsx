import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export function CursorGlow() {
  const desktop = useMediaQuery('(min-width: 1024px)')
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  
  const springConfig = { stiffness: 300, damping: 30, mass: 0.5 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!desktop) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      
      const target = e.target as HTMLElement
      setIsHovering(
        !!target.closest('button') || 
        !!target.closest('a') || 
        !!target.closest('.interactive')
      )
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [desktop, mouseX, mouseY])

  if (!desktop) return null

  return (
    <>
      {/* Large Spotlight Background Effect */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[1] opacity-30"
        style={{
          background: `radial-gradient(800px circle at ${mouseX}px ${mouseY}px, var(--spotlight-color), transparent 80%)`
        }}
      />

      {/* Cursor Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100]"
        style={{ x, y }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 4 : 1,
            backgroundColor: isHovering ? 'rgba(99, 102, 241, 1)' : 'rgba(99, 102, 241, 0.8)',
          }}
          className="flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-full w-2.5 h-2.5 bg-[#6366f1]"
        >
          {isHovering && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[2px] font-black uppercase text-white"
            >
              View
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Outer Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99]"
        style={{ x, y }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 0.5 : 1,
            opacity: isHovering ? 0.3 : 0.5,
          }}
          className="w-10 h-10 -translate-x-1/2 -translate-y-1/2 border border-[#6366f1]/30 rounded-full"
        />
      </motion.div>
    </>
  )
}
