import { motion } from 'framer-motion'
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SITE, navLinks } from '../../constants/site'
import { scrollToId } from '../../lib/utils'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-transparent py-16 border-t border-white/5">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <span className="font-display text-2xl font-black tracking-tight text-white">
                {SITE.name}<span className="text-[#6366f1]">.</span>
              </span>
            </motion.div>
            <p className="mt-1.5 text-sm font-medium text-white/50">{SITE.role}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToId(link.id)}
                className="text-[10px] font-black uppercase tracking-widest transition-colors text-white/50 hover:text-[#6366f1]"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            {[
              { icon: FiGithub, href: SITE.social.github },
              { icon: FiLinkedin, href: SITE.social.linkedin },
              { icon: FiMail, href: `mailto:${SITE.email}` },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4 }}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all hover:scale-110 hover:border-[#6366f1]/40 hover:text-[#6366f1]"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t pt-8 md:flex-row border-white/5">
          <p className="text-[10px] font-black uppercase tracking-widest text-white/40">
            &copy; {year} {SITE.name}. All Rights Reserved.
          </p>
          
          <button
            onClick={() => scrollToId('hero')}
            className="group mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/50 transition-colors hover:text-[#6366f1] md:mt-0"
          >
            Back to top
            <div className="flex h-8 w-8 items-center justify-center rounded-xl transition-all border bg-white/5 border-white/10 text-white/60 group-hover:bg-[#6366f1] group-hover:text-white">
              <FiArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}
