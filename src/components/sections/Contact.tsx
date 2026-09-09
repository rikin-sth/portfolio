import { ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { personal } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32" aria-label="Contact">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: 'var(--color-accent-soft)' }}
      />
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mono-tag text-xs" style={{ color: 'var(--color-accent)' }}>
            07 · Contact
          </span>
          <h2
            className="text-balance mt-4 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
            style={{ color: 'var(--color-ink)' }}
          >
            Let's talk about software engineering opportunities.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg" style={{ color: 'var(--color-ink-muted)' }}>
            {personal.workAuth} and {personal.location.toLowerCase()}. Reach out about full-stack roles,
            development work, or interesting technical projects.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${personal.email}`}
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-medium transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-ink)' }}
            >
              <Mail size={18} />
              {personal.email}
              <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[var(--color-accent)]"
              style={{ color: 'var(--color-ink-muted)' }}
            >
              <GithubIcon size={17} /> GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[var(--color-accent)]"
              style={{ color: 'var(--color-ink-muted)' }}
            >
              <LinkedinIcon size={17} /> LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
