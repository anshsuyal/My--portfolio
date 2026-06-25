import { motion } from 'framer-motion'
import { FiCpu, FiDatabase, FiServer, FiTerminal, FiTool } from 'react-icons/fi'
import { skillCategories } from '../constants/site'

const iconMap: Record<string, typeof FiCpu> = {
  languages: FiTerminal,
  frontend: FiCpu,
  backend: FiServer,
  database: FiDatabase,
  tools: FiTool,
}

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-4 py-24 md:py-32 md:px-8 bg-transparent">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-start text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6366f1]"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            The Tech Stack<span className="text-[#6366f1]">.</span>
          </motion.h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, idx) => {
            const Icon = iconMap[cat.key] || FiCpu
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_1px_2px_rgba(0,0,0,0.02),0_4px_12px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:border-[#6366f1]/40"
              >
                <div className="flex items-center gap-4">
                  <div className="accent-gradient flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-[0_4px_12px_rgba(99,102,241,0.25)]">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{cat.label}</h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-white/70 transition-all hover:bg-[#6366f1] hover:text-white hover:border-[#6366f1]"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>

                {/* Hover Glow */}
                <div className="absolute -right-4 -top-4 -z-10 h-28 w-28 rounded-full bg-[#6366f1]/10 blur-3xl group-hover:bg-[#6366f1]/10 transition-all" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
