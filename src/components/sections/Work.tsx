import { projects } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { ProjectDeck } from './ProjectDeck'

export function Work() {
  return (
    <section id="projects" className="py-24 sm:py-32" aria-label="Projects">
      <div className="container-page">
        <SectionHeading
          label="projects"
          number="03"
          title="Projects"
          description="Ideas I've turned into working software."
        />

        <Reveal y={24}>
          <ProjectDeck projects={projects} />
        </Reveal>
      </div>
    </section>
  )
}
