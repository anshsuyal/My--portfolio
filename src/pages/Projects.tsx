import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { Seo } from '../components/Seo'
import { ProjectCard } from '../components/projects/ProjectCard'
import { ProjectModal } from '../components/projects/ProjectModal'
import { FloatShapes } from '../components/ui/FloatShapes'
import { Particles } from '../components/ui/Particles'
import { projectsData } from '../data/projects'
import type { Project, ProjectCategory } from '../types/project'

const CATEGORIES: { label: string; value: ProjectCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Featured', value: 'featured' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Real-Time', value: 'realtime' },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Filter projects based on search query and active category
  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.stack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory =
      activeCategory === 'all'
        ? true
        : activeCategory === 'featured'
        ? project.featured
        : project.category.includes(activeCategory as Exclude<ProjectCategory, 'all'>)

    return matchesSearch && matchesCategory
  })

  return (
    <>
      <Seo 
        title="Projects | Ansh Suyal" 
        description="Explore my latest projects, including full-stack applications, real-time dashboards, and frontend UI designs."
      />
      <div className="relative min-h-screen bg-[#0a0a0f] pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        <FloatShapes />
        <Particles count={20} />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6"
            >
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">Projects</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-white/60 max-w-2xl mx-auto"
            >
              A showcase of my software engineering journey. From real-time chat applications to modern web interfaces, explore what I've been building.
            </motion.p>
          </div>

          {/* Search & Filter Section */}
          <div className="mb-12 space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      activeCategory === cat.value
                        ? 'bg-[#6366f1] text-white shadow-[0_4px_14px_rgba(99,102,241,0.25)]'
                        : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/5'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-72">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-white/40" />
                </div>
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="text-sm text-white/40 font-medium">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 text-white/40 mb-4">
                <FiSearch size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
              <p className="text-white/50">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}
