import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { type ProjectCategory, projects } from '../constants/site'
import { useTilt } from '../hooks/useTilt'

const filters: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'realtime', label: 'Real-Time' },
]

function ProjectCard({ project, index, isFeatured }: { project: (typeof projects)[number]; index: number; isFeatured?: boolean }) {
  const { ref, onMove, onLeave, rotateX, rotateY } = useTilt({ max: 8 })
  const liveIsSectionLink = project.live.startsWith('#')

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`${isFeatured ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
        className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[0_1px_2px_rgba(0,0,0,0.02),0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
      >
        <div className="relative h-full w-full overflow-hidden rounded-xl bg-white/5">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          <div className="absolute inset-x-0 bottom-0 translate-y-full p-6 transition-transform duration-500 group-hover:translate-y-0">
            <h3 className="font-display text-xl md:text-2xl font-black text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-white/70 line-clamp-2 leading-relaxed">{project.description}</p>
            
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map(s => (
                <span key={s} className="rounded-lg bg-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-md border border-white/10">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={project.live}
                target={liveIsSectionLink ? undefined : '_blank'}
                rel={liveIsSectionLink ? undefined : 'noreferrer'}
                className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-[#0a0a0a] transition-all hover:scale-105 active:scale-95"
              >
                Live <FiExternalLink size={13} />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-white/10 px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md border border-white/10 transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
              >
                Source <FiGithub size={13} />
              </a>
            </div>
          </div>

          {!isFeatured && (
            <div className="absolute left-4 top-4 rounded-lg bg-[#0a0a0a]/90 backdrop-blur-sm px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-white border border-white/20">
              {project.category}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('all')

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="projects" className="relative overflow-hidden px-4 py-24 md:py-32 md:px-8 bg-transparent">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6366f1]"
          >
            My Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Recent Work<span className="text-[#6366f1]">.</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex flex-wrap justify-center gap-2"
          >
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-xl px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${
                    filter === f.id
                    ? 'accent-gradient text-white border-transparent shadow-[0_4px_12px_rgba(99,102,241,0.25)]'
                    : 'bg-white/5 text-white/50 border-white/10 hover:border-[#6366f1]/40 hover:text-[#6366f1]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          layout
          className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} isFeatured={filter === 'all' && i === 0} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
