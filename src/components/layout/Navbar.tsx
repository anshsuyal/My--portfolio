import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { SITE, navLinks } from '../../constants/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { scrollToId } from '../../lib/utils'
import { MagneticButton } from '../ui/MagneticButton'

const ids = navLinks.map((l) => l.id)

export function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle cross-page navigation and scrolling
  const handleNavigation = (id: string) => {
    if (id === 'projects') {
      navigate('/projects')
      return
    }

    if (location.pathname !== '/') {
      navigate(`/#${id}`)
      // Short delay to allow route transition before scrolling
      setTimeout(() => scrollToId(id), 100)
    } else {
      scrollToId(id)
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-[100] flex justify-center p-4 md:p-6 pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`flex items-center gap-2 rounded-2xl border px-3 py-2 md:px-5 md:py-2.5 backdrop-blur-2xl transition-all duration-500 pointer-events-auto ${
          scrolled
            ? 'glass-strong border-white/5 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_4px_12px_rgba(0,0,0,0.3),0_12px_32px_rgba(0,0,0,0.3)]'
            : 'border-transparent bg-transparent'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 pr-3 md:pr-4 border-r border-white/10">
          <button
            onClick={() => handleNavigation('hero')}
            className="group flex items-center gap-1.5 transition-transform hover:scale-105"
          >
            <div className="w-8 h-8 rounded-xl accent-gradient flex items-center justify-center text-white font-black text-sm shadow-[0_4px_12px_rgba(99,102,241,0.3)]">
              {SITE.name[0]}
            </div>
            <span className="font-display font-black tracking-tighter text-white hidden sm:block">
              {SITE.name.split(' ')[0]}<span className="text-[#6366f1]">.</span>
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-0.5 px-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigation(link.id)}
              className={`relative px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-colors rounded-xl ${
                  active === link.id
                    ? 'text-[#6366f1]'
                    : 'text-white/50 hover:text-white'
              }`}
            >
              {active === link.id && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 z-0 rounded-xl bg-[#6366f1]/8"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-3 pl-3 md:pl-4 border-l border-white/10">
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 md:hidden items-center justify-center rounded-xl transition-all hover:scale-110 active:scale-95 bg-white/5 text-white/60 hover:bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            aria-label="Menu"
          >
            {open ? <FiX size={16} /> : <FiMenu size={16} />}
          </button>

          <MagneticButton className="hidden md:block">
            <a
              href={`mailto:${SITE.email}`}
              className="block px-6 py-2.5 accent-gradient text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-[0_4px_14px_rgba(99,102,241,0.25)] transition-all hover:shadow-[0_8px_24px_rgba(99,102,241,0.35)] hover:scale-105 active:scale-95"
            >
              Hire Me
            </a>
          </MagneticButton>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/5 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm p-8 border-l md:hidden bg-[#0a0a0f] border-white/5"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="font-display font-black text-2xl tracking-tighter text-white">
                  MENU<span className="text-[#6366f1]">.</span>
                </span>
                <button onClick={() => setOpen(false)} className="text-white/70">
                  <FiX size={28} />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * i }}
                    onClick={() => {
                      handleNavigation(link.id)
                      setOpen(false)
                    }}
                    className={`text-left text-4xl font-display font-black tracking-tighter transition-all hover:pl-4 ${
                      active === link.id ? 'text-[#6366f1]' : 'text-white/50 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="h-px w-full bg-white/10 mb-8" />
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">
                  &copy; 2026 {SITE.name.toUpperCase()}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
