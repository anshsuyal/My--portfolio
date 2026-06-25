import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'ghost'

type ButtonProps = HTMLMotionProps<'button'> & {
  variant?: Variant
  children: ReactNode
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-black uppercase tracking-wider transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1] disabled:pointer-events-none disabled:opacity-50'

const styles: Record<Variant, string> = {
  primary:
    'accent-gradient text-white shadow-[0_4px_14px_rgba(99,102,241,0.25)] hover:shadow-[0_8px_24px_rgba(99,102,241,0.35)] hover:scale-[1.02]',
    'bg-white/5 border border-white/10 text-white/60 hover:border-[#6366f1]/40 hover:text-[#6366f1] hover:bg-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.02),0_4px_12px_rgba(0,0,0,0.04)]',
}

export function GlowButton({ variant = 'primary', className = '', children, ...rest }: ButtonProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  )
}

type LinkProps = HTMLMotionProps<'a'> & {
  variant?: Variant
  children: ReactNode
}

export function GlowLink({ variant = 'ghost', className = '', children, ...rest }: LinkProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </motion.a>
  )
}
