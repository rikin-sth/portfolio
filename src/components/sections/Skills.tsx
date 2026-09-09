import { skills } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32" aria-label="Skills">
      <div className="container-page">
        <SectionHeading index="05 · Skills" title="The stack, grouped by what it's for." />

        <div className="grid gap-px overflow-hidden rounded-lg border sm:grid-cols-2" style={{ borderColor: 'var(--color-border)' }}>
          {skills.groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="p-7 sm:p-8" style={{ backgroundColor: 'var(--color-surface)' }}>
                <h3 className="mono-tag text-xs uppercase" style={{ color: 'var(--color-accent)' }}>
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border px-3 py-1.5 text-sm"
                      style={{ borderColor: 'var(--color-border-strong)', color: 'var(--color-ink)' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
