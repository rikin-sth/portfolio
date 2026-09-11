import { MotionConfig } from 'framer-motion'
import { Nav } from './components/Nav'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Work } from './components/sections/Work'
import { Research } from './components/sections/Research'
import { Skills } from './components/sections/Skills'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2 focus:text-sm"
        style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-ink)' }}
      >
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Research />
        <Skills />
        <Contact />
      </main>
    </MotionConfig>
  )
}

export default App
