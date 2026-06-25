import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setVisible(false), 500)
          return 100
        }
        return prev + 1
      })
    }, 15)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030712]"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex items-center gap-2">
                <span className="font-display text-8xl font-black tracking-tighter text-white md:text-[12rem]">
                  {progress}
                </span>
                <span className="text-4xl font-black text-[#6366f1]">%</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.6em] text-white/40">
                Initializing Experience
              </p>
            </motion.div>

            <div className="absolute -bottom-24 h-1 w-64 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="accent-gradient h-full w-full rounded-full"
                initial={{ x: '-100%' }}
                animate={{ x: `${progress - 100}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-12 text-[8px] font-black uppercase tracking-widest text-white/30"
          >
            Portfolio &copy; 2026
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
