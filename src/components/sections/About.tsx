import { about } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32" aria-label="About">
      <div className="container-page">
        <SectionHeading index="01 · About" title="Engineering with a research habit." />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p
                  className="text-balance text-lg leading-relaxed sm:text-xl"
                  style={{ color: i === 0 ? 'var(--color-ink)' : 'var(--color-ink-muted)' }}
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <dl
              className="grid gap-px overflow-hidden rounded-lg border sm:grid-cols-1"
              style={{ borderColor: 'var(--color-border)' }}
            >
              {about.highlights.map((h) => (
                <div key={h.label} className="p-6" style={{ backgroundColor: 'var(--color-surface)' }}>
                  <dt className="mono-tag text-xs uppercase" style={{ color: 'var(--color-ink-faint)' }}>
                    {h.label}
                  </dt>
                  <dd className="mt-2 text-base font-medium sm:text-lg" style={{ color: 'var(--color-ink)' }}>
                    {h.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
