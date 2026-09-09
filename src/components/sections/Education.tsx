import { GraduationCap } from 'lucide-react'
import { certifications, education, publications } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32" aria-label="Education">
      <div className="container-page">
        <SectionHeading index="06 · Education" title="Foundations." />

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div
              className="flex flex-col gap-5 rounded-lg border p-7 sm:flex-row sm:items-start sm:p-8"
              style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
            >
              <div
                className="flex h-11 w-11 flex-none items-center justify-center rounded-md"
                style={{ backgroundColor: 'var(--color-accent-soft)', color: 'var(--color-accent)' }}
              >
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold sm:text-2xl" style={{ color: 'var(--color-ink)' }}>
                  {education.school}
                </h3>
                <p className="mt-1" style={{ color: 'var(--color-ink-muted)' }}>
                  {education.degree} · {education.certificate}
                </p>
                <p className="mono-tag mt-2 text-xs" style={{ color: 'var(--color-ink-faint)' }}>
                  {education.start} — {education.end}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-md border px-2.5 py-1 text-xs"
                      style={{ borderColor: 'var(--color-border-strong)', color: 'var(--color-ink-muted)' }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-4">
            <div>
              <h4 className="mono-tag text-xs uppercase" style={{ color: 'var(--color-ink-faint)' }}>
                Certifications
              </h4>
              <ul className="mt-3 space-y-2">
                {certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="flex items-center justify-between rounded-md border px-4 py-3 text-sm"
                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-ink)' }}
                  >
                    <span>{cert.name}</span>
                    <span className="mono-tag text-xs" style={{ color: 'var(--color-ink-faint)' }}>
                      {cert.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mono-tag text-xs uppercase" style={{ color: 'var(--color-ink-faint)' }}>
                Publications
              </h4>
              <ul className="mt-3 space-y-2">
                {publications.map((pub) => (
                  <li
                    key={pub.title}
                    className="rounded-md border px-4 py-3 text-sm leading-relaxed"
                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-ink-muted)' }}
                  >
                    {pub.title}
                    <span className="mono-tag mt-1 block text-xs" style={{ color: 'var(--color-data)' }}>
                      {pub.venue}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
