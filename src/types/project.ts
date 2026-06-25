export type ProjectCategory = 'all' | 'frontend' | 'backend' | 'fullstack' | 'realtime' | 'featured'

export interface ProjectLink {
  github?: string
  live?: string
}

export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  image: string
  images?: string[]
  stack: string[]
  features: string[]
  challenges?: string[]
  solutions?: string[]
  category: Exclude<ProjectCategory, 'all'>[]
  featured: boolean
  links: ProjectLink
}
