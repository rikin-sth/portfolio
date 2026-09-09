import { experience } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Tag } from '../ui/Tag'

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32" aria-label="Experience">
      <div className="container-page">
        <SectionHeading
          index="02 · Experience"
          title="Where the work happened."
          description="Two roles, two very different problems — shipping product features on a small team, and running ML experiments on real-world data."
        />

        <ol className="relative border-l" style={{ borderColor: 'var(--color-border)' }}>
          {experience.map((entry, i) => (
            <Reveal key={entry.id} as="li" delay={i * 0.1} className="relative pb-16 pl-8 last:pb-0 sm:pl-12">
              <span
                className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full ring-4"
                style={{ backgroundColor: 'var(--color-accent)', boxShadow: '0 0 0 4px var(--color-bg)' }}
                aria-hidden
              />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-2xl font-semibold sm:text-3xl" style={{ color: 'var(--color-ink)' }}>
                  {entry.role}
                  <span style={{ color: 'var(--color-ink-faint)' }}> · {entry.company}</span>
                </h3>
                <span className="mono-tag whitespace-nowrap text-sm" style={{ color: 'var(--color-ink-faint)' }}>
                  {entry.start} — {entry.end}
                </span>
              </div>

              <p className="mt-4 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: 'var(--color-ink-muted)' }}>
                {entry.summary}
              </p>

              <ul className="mt-5 max-w-2xl space-y-3">
                {entry.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex gap-3 text-sm leading-relaxed sm:text-base" style={{ color: 'var(--color-ink-muted)' }}>
                    <span className="mt-2 h-1 w-1 flex-none rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {entry.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
