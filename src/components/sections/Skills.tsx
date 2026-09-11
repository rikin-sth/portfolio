import { BrainCircuit, Code2, Database, Languages as LanguagesIcon, Layers } from 'lucide-react'
import { skills, spokenLanguages } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const groupIcons: Record<string, typeof Code2> = {
  'Programming Languages': Code2,
  'Frontend & Backend': Layers,
  'Databases & Cloud': Database,
  'Machine Learning & Data': BrainCircuit,
}

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32" aria-label="Skills">
      <div className="container-page">
        <SectionHeading
          label="skills"
          number="05"
          title="The stack, grouped by what it's for."
          description="Technologies I reach for day to day, plus the languages I speak outside of code."
        />

        <div>
          <Reveal>
            <h3 className="mb-6 text-2xl font-semibold sm:text-3xl" style={{ color: 'var(--color-ink)' }}>
              Tech Stack
            </h3>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {skills.groups.map((group, i) => {
              const Icon = groupIcons[group.title] ?? Code2
              return (
                <Reveal key={group.title} delay={i * 0.06} className="h-full">
                  <div
                    className="group h-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:shadow-[0_16px_36px_-16px_var(--color-accent-line)]"
                  >
                    <div className="mb-4 flex items-center gap-2.5">
                      <span
                        className="flex h-8 w-8 flex-none items-center justify-center rounded-md transition-colors duration-300 group-hover:bg-[var(--color-accent-soft)]"
                        style={{ backgroundColor: 'var(--color-surface-2)', color: 'var(--color-accent)' }}
                      >
                        <Icon size={16} />
                      </span>
                      <h3
                        className="mono-tag text-xs uppercase tracking-wide"
                        style={{ color: 'var(--color-ink)' }}
                      >
                        {group.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-[var(--color-border-strong)] px-2.5 py-1 text-xs text-[var(--color-ink-muted)] transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="mb-6 text-2xl font-semibold sm:text-3xl" style={{ color: 'var(--color-ink)' }}>
              Languages
            </h3>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {spokenLanguages.map((lang) => (
                <div
                  key={lang}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-[var(--color-accent)] bg-[var(--color-surface)] px-4 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-accent-soft)]"
                >
                  <LanguagesIcon
                    size={14}
                    style={{ color: 'var(--color-accent)' }}
                    className="transition-transform duration-200 group-hover:scale-110"
                  />
                  <span className="text-sm" style={{ color: 'var(--color-ink)' }}>
                    {lang}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
