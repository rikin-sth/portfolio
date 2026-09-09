import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '../ui/BrandIcons'
import { projects } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Tag } from '../ui/Tag'
import { ProjectVisual } from './ProjectVisual'
import { cn } from '../../lib/utils'

export function Work() {
  return (
    <section id="work" className="py-24 sm:py-32" aria-label="Selected work">
      <div className="container-page">
        <SectionHeading
          index="04 · Selected Work"
          title="Projects worth a second look."
          description="Independent builds spanning game architecture, database design, and full-stack workflow tools."
        />

        <div className="space-y-20 sm:space-y-28">
          {projects.map((project, i) => {
            const reversed = i % 2 === 1
            return (
              <article key={project.id} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <Reveal
                  className={cn('order-1', reversed ? 'lg:order-2' : 'lg:order-1')}
                  y={24}
                >
                  <div
                    className="aspect-[4/3] overflow-hidden rounded-lg border p-4 sm:p-6"
                    style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
                  >
                    <ProjectVisual variant={project.visual} />
                  </div>
                </Reveal>

                <Reveal
                  className={cn('order-2', reversed ? 'lg:order-1' : 'lg:order-2')}
                  delay={0.08}
                >
                  <span className="mono-tag text-xs" style={{ color: 'var(--color-ink-faint)' }}>
                    {project.date}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold sm:text-3xl" style={{ color: 'var(--color-ink)' }}>
                    {project.title}
                  </h3>
                  <p className="mt-3 text-balance text-base sm:text-lg" style={{ color: 'var(--color-ink-muted)' }}>
                    {project.tagline}
                  </p>

                  <div className="mt-4">
                    <span className="mono-tag text-xs uppercase" style={{ color: 'var(--color-ink-faint)' }}>
                      Role
                    </span>
                    <p className="mt-1 text-sm sm:text-base" style={{ color: 'var(--color-ink-muted)' }}>
                      {project.role}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {project.bullets.map((bullet, bi) => (
                      <li
                        key={bi}
                        className="flex gap-3 text-sm leading-relaxed sm:text-base"
                        style={{ color: 'var(--color-ink-muted)' }}
                      >
                        <span
                          className="mt-2 h-1 w-1 flex-none rounded-full"
                          style={{ backgroundColor: 'var(--color-accent)' }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>

                  {(project.github || project.demo) && (
                    <div className="mt-6 flex flex-wrap gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[var(--color-accent)]"
                        >
                          <GithubIcon size={16} /> Repository
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[var(--color-accent)]"
                        >
                          <ExternalLink size={16} /> Live demo
                        </a>
                      )}
                    </div>
                  )}
                </Reveal>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
