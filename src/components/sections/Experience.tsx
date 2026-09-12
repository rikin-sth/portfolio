import { experience } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Tag } from '../ui/Tag'
import { ExperienceRail } from './ExperienceRail'

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32" aria-label="Experience">
      <div className="container-page">
        <SectionHeading
          label="experience"
          number="02"
          title="Experience"
          description="Building software, supporting systems, and solving problems along the way."
        />

        <ol className="relative">
          {experience.map((entry, i) => (
            <Reveal
              key={entry.id}
              as="li"
              delay={i * 0.1}
              className="relative pb-16 pl-10 last:pb-0 sm:pl-14"
            >
              <ExperienceRail entryId={entry.id} isLast={i === experience.length - 1} />

              <span
                className="absolute left-0 top-1.5 z-10 h-[9px] w-[9px] -translate-x-1/2 rounded-full ring-4"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  boxShadow: '0 0 0 4px var(--color-bg)',
                }}
                aria-hidden
              />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3
                    className="text-2xl font-semibold sm:text-3xl"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {entry.role}
                  </h3>
                  <p className="mono-tag mt-1 text-sm sm:text-base">
                    <span style={{ color: 'var(--color-accent)' }}>{entry.company}</span>
                    {entry.location && (
                      <span style={{ color: 'var(--color-data)' }}> · {entry.location}</span>
                    )}
                  </p>
                </div>
                <span
                  className="mono-tag whitespace-nowrap text-sm sm:pt-1.5"
                  style={{ color: 'var(--color-ink-faint)' }}
                >
                  {entry.start} — {entry.end}
                </span>
              </div>

              <p
                className="mt-4 max-w-2xl text-base leading-relaxed sm:text-lg"
                style={{ color: 'var(--color-ink-muted)' }}
              >
                {entry.summary}
              </p>

              <ul className="mt-5 max-w-2xl space-y-3">
                {entry.bullets.map((bullet, bi) => (
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
