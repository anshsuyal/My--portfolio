import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { FiCheckCircle, FiExternalLink, FiGithub, FiX } from 'react-icons/fi'
import type { Project } from '../../types/project'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0a0a0f] border border-white/10 rounded-3xl overflow-hidden shadow-2xl pointer-events-auto"
            >
              {/* Header with Hero Image */}
              <div className="relative h-48 sm:h-64 shrink-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all hover:bg-black/60 hover:scale-110 active:scale-95"
                >
                  <FiX size={20} />
                </button>

                {/* Title & Category */}
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    {project.category.map((cat) => (
                      <span
                        key={cat}
                        className="rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white border border-white/10"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* Left Column (Main Info) */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Description */}
                    <section>
                      <h3 className="text-xl font-bold text-white mb-3">Overview</h3>
                      <p className="text-white/70 leading-relaxed text-base">
                        {project.fullDescription}
                      </p>
                    </section>

                    {/* Features */}
                    <section>
                      <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-white/70">
                            <FiCheckCircle className="mt-1 text-[#6366f1] shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    {/* Challenges & Solutions */}
                    {project.challenges && project.solutions && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <section className="bg-white/5 rounded-2xl p-5 border border-white/5">
                          <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-500" />
                            Challenges
                          </h3>
                          <ul className="space-y-2">
                            {project.challenges.map((challenge, i) => (
                              <li key={i} className="text-white/60 text-sm leading-relaxed">
                                • {challenge}
                              </li>
                            ))}
                          </ul>
                        </section>
                        <section className="bg-[#6366f1]/10 rounded-2xl p-5 border border-[#6366f1]/20">
                          <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#6366f1]" />
                            Solutions
                          </h3>
                          <ul className="space-y-2">
                            {project.solutions.map((solution, i) => (
                              <li key={i} className="text-white/70 text-sm leading-relaxed">
                                • {solution}
                              </li>
                            ))}
                          </ul>
                        </section>
                      </div>
                    )}
                  </div>

                  {/* Right Column (Sidebar Info) */}
                  <div className="space-y-8">
                    {/* Actions */}
                    <div className="flex flex-col gap-3">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#6366f1] px-5 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#4f46e5] shadow-[0_4px_14px_rgba(99,102,241,0.25)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.4)]"
                        >
                          <FiExternalLink className="text-lg" />
                          View Live Project
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-5 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/20"
                        >
                          <FiGithub className="text-lg" />
                          Source Code
                        </a>
                      )}
                    </div>

                    {/* Tech Stack */}
                    <section>
                      <h3 className="text-lg font-bold text-white mb-4">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-sm font-medium text-white/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </section>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
