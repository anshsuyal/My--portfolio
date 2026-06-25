import { motion } from 'framer-motion'
import { FiAward, FiBriefcase, FiCheckCircle } from 'react-icons/fi'
import { certifications, experience } from '../constants/site'

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden px-4 py-24 md:py-32 md:px-8 bg-transparent">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6366f1]"
          >
            My Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Experience & Learning<span className="text-[#6366f1]">.</span>
          </motion.h2>
        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-10">
            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="accent-gradient flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-[0_4px_12px_rgba(99,102,241,0.25)] transition-transform group-hover:scale-110">
                    <FiBriefcase size={20} />
                  </div>
                  {i !== experience.length - 1 && (
                    <div className="mt-4 w-0.5 flex-1 rounded-full bg-white/10" />
                  )}
                </div>
                
                <div className="pb-10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#6366f1]">{item.period}</span>
                  <h3 className="mt-2 text-xl md:text-2xl font-black text-white">{item.org}</h3>
                  <p className="mt-1 text-base font-bold text-white/60">{item.title}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/50">{item.description}</p>
                  
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {item.achievements.map((a, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + i * 0.2 }}
                        className="flex items-start gap-2.5 text-sm font-medium text-white/60"
                      >
                        <FiCheckCircle className="mt-0.5 shrink-0 text-[#6366f1]" size={16} />
                        {a}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_1px_2px_rgba(0,0,0,0.02),0_4px_12px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-4">
                <div className="accent-gradient flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-[0_4px_12px_rgba(99,102,241,0.25)]">
                  <FiAward size={18} />
                </div>
                <h3 className="text-lg font-bold text-white">Certifications</h3>
              </div>
              
              <div className="mt-8 space-y-4">
                {certifications.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex flex-col items-start gap-1 rounded-xl border border-white/5 bg-white/[0.03] p-5 transition-all hover:border-white/10"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#6366f1]">{c.year}</span>
                    <h4 className="mt-1 text-sm font-black text-white">{c.name}</h4>
                    <p className="text-xs font-bold text-white/40">{c.issuer}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-xl bg-[#6366f1]/10 p-6 text-center">
                <p className="text-sm font-medium text-white/60 italic">
                  &ldquo;Ready to bring these skills and experiences to your next big project.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
