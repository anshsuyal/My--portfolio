import { About } from '../sections/About'
import { Contact } from '../sections/Contact'
import { Experience } from '../sections/Experience'
import { Hero } from '../sections/Hero'
import { Projects } from '../sections/Projects'
import { Skills } from '../sections/Skills'
import { FloatShapes } from '../components/ui/FloatShapes'
import { Particles } from '../components/ui/Particles'
import { Seo } from '../components/Seo'

export function Home() {
  return (
    <>
      <Seo />
      <FloatShapes />
      <Particles count={30} />
      <Hero />
      <About />
      <div className="h-px w-full max-w-7xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <Skills />
      <div className="h-px w-full max-w-7xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <Projects />
      <div className="h-px w-full max-w-7xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <Experience />
      <div className="h-px w-full max-w-7xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <Contact />
    </>
  )
}
