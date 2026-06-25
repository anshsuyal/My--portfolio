import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import type { Project } from '../../types/project'

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {project.featured && (
          <div className="absolute top-4 left-4 z-20 rounded-full bg-[#6366f1]/90 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
            Featured
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#6366f1] transition-colors">
          {project.title}
        </h3>
        <p className="text-white/60 text-sm mb-4 line-clamp-2 flex-grow">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-white/5 px-2.5 py-1 text-xs font-medium text-white/70 border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="rounded-lg bg-white/5 px-2.5 py-1 text-xs font-medium text-white/40 border border-white/5">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-auto">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub className="text-lg" />
              Code
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#6366f1] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#4f46e5] shadow-[0_4px_14px_rgba(99,102,241,0.25)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.4)]"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink className="text-lg" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
