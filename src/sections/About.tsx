import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiLayout, FiServer, FiArrowRight } from 'react-icons/fi'
import { AnimatedCounter } from '../components/ui/AnimatedCounter'
import { about } from '../constants/site'

const stats = [
  { value: 5, label: 'Projects', suffix: '+' },
  { value: 1, label: 'Year Exp', suffix: '+' },
  { value: 12, label: 'Tech Stack', suffix: '+' },
  // { value: 100, label: 'Client Satisfaction', suffix: '%' },
]

const services = [
  { title: 'MERN Stack', desc: 'Full-stack builds with React, Node.js, Express, MongoDB.', icon: FiServer },
  { title: 'UI/UX Design', desc: 'Modern, responsive interfaces with high performance.', icon: FiLayout },
  { title: 'Backend APIs', desc: 'Secure, scalable RESTful APIs with JWT auth.', icon: FiDatabase },
  { title: 'Real-Time', desc: 'Instant features with Socket.io and real-time data.', icon: FiCode },
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-24 md:py-32 md:px-8 bg-white dark:bg-transparent">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6366f1]">About Me</p>
            <h2 className="mt-4 font-display text-4xl font-black tracking-tight text-[#0a0a0a] dark:text-white md:text-5xl lg:text-6xl">
              Building products that matter<span className="text-[#6366f1]">.</span>
            </h2>
            <div className="mt-8 space-y-5 text-base md:text-lg leading-relaxed text-[#404040] dark:text-white/70">
              <p>{about.intro}</p>
              <p>{about.goals}</p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#f8f9fc] dark:bg-white/5 rounded-2xl p-5 border border-[#e5e7eb]/50 dark:border-white/5"
                >
                  <p className="font-display text-3xl font-black text-[#0a0a0a] dark:text-white">
                    <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#737373] dark:text-white/40">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.02),0_4px_12px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:border-[#6366f1]/20 hover:scale-[1.02] dark:border-white/10 dark:bg-white/5 dark:hover:border-[#6366f1]/40"
              >
                <div className="accent-gradient flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-[0_4px_12px_rgba(99,102,241,0.25)]">
                  <svc.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#0a0a0a] dark:text-white">{svc.title}</h3>
                <p className="mt-2 text-sm text-[#737373] dark:text-white/50 leading-relaxed">{svc.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#6366f1] opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <FiArrowRight />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
