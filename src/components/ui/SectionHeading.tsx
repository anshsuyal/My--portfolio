import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center' }: SectionHeadingProps) {
  const reduced = useReducedMotion()
  const isCenter = align === 'center'

  return (
    <div className={`mb-10 max-w-3xl md:mb-14 ${isCenter ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <motion.p
          className="mb-3 inline-block text-[10px] font-black uppercase tracking-[0.28em] text-[#6366f1]"
          initial={reduced ? false : { opacity: 0, y: 8 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.4 }}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
        initial={reduced ? false : { opacity: 0, y: 16 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg ${isCenter ? '' : ''}`}
          initial={reduced ? false : { opacity: 0, y: 10 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ delay: 0.08, duration: 0.45 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
