import { ArrowRight, FileText } from 'lucide-react'
import { journalPaper, research } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Research() {
  return (
    <section id="research" className="py-24 sm:py-32" aria-label="Research">
      <div className="container-page">
        <SectionHeading
          label="research"
          number="04"
          title="Applied ML, published."
          description="Gradient boosting models for cyberbullying detection culminating in a co-authored paper and a national research presentation."
        />

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="space-y-8">
            <div>
              <div className="mono-tag mb-3 text-xs" style={{ color: 'var(--color-data)' }}>
                RESEARCH PAPER
              </div>
              <h3 className="text-balance text-2xl font-semibold sm:text-3xl" style={{ color: 'var(--color-ink)' }}>
                {research.title}
              </h3>
              <p className="mt-1 text-lg" style={{ color: 'var(--color-ink-muted)' }}>
                {research.subtitle}
              </p>
              <p className="mt-1" style={{ color: 'var(--color-ink-muted)' }}>
                {research.authors} · {research.venue}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href={research.paperUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mono-tag inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition-colors hover:bg-[var(--color-data-soft)]"
                  style={{ borderColor: 'var(--color-data)', color: 'var(--color-data)' }}
                >
                  <FileText size={13} />
                  {research.venue}
                </a>
                <span className="mono-tag text-xs" style={{ color: 'var(--color-ink-faint)' }}>
                  DOI: {research.doi}
                </span>
              </div>
              <p className="mono-tag mt-2 text-xs" style={{ color: 'var(--color-ink-faint)' }}>
                Presented at {research.presentedAt}
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <h4 className="mono-tag text-xs uppercase" style={{ color: 'var(--color-ink-faint)' }}>
                  Problem
                </h4>
                <p className="mt-2 leading-relaxed" style={{ color: 'var(--color-ink-muted)' }}>
                  {research.problem}
                </p>
              </div>
              <div>
                <h4 className="mono-tag text-xs uppercase" style={{ color: 'var(--color-ink-faint)' }}>
                  Approach
                </h4>
                <p className="mt-2 leading-relaxed" style={{ color: 'var(--color-ink-muted)' }}>
                  {research.approach}
                </p>
              </div>
              <div>
                <h4 className="mono-tag text-xs uppercase" style={{ color: 'var(--color-ink-faint)' }}>
                  Outcome
                </h4>
                <p className="mt-2 leading-relaxed" style={{ color: 'var(--color-ink-muted)' }}>
                  {research.outcome}
                </p>
              </div>
            </div>

            <div>
              <h4 className="mono-tag mb-3 text-xs uppercase" style={{ color: 'var(--color-ink-faint)' }}>
                Pipeline
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                {research.pipeline.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span
                      className="mono-tag rounded-md border px-3 py-2 text-xs sm:text-sm"
                      style={{ borderColor: 'var(--color-accent)', color: 'var(--color-ink)', backgroundColor: 'var(--color-surface)' }}
                    >
                      {step}
                    </span>
                    {i < research.pipeline.length - 1 && (
                      <ArrowRight size={14} style={{ color: 'var(--color-ink-faint)' }} aria-hidden />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 border-t pt-15" style={{ borderColor: 'var(--color-border)' }}>
              <div className="mono-tag mb-2 text-xs" style={{ color: 'var(--color-data)' }}>
                JOURNAL PAPER
              </div>
              <h4 className="text-balance text-xl font-semibold sm:text-2xl" style={{ color: 'var(--color-ink)' }}>
                {journalPaper.title}
              </h4>
              <p className="mt-1" style={{ color: 'var(--color-ink-muted)' }}>
                {journalPaper.authors} · {journalPaper.venue}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href={journalPaper.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mono-tag inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition-colors hover:bg-[var(--color-data-soft)]"
                  style={{ borderColor: 'var(--color-data)', color: 'var(--color-data)' }}
                >
                  <FileText size={13} />
                  {journalPaper.venue}
                </a>
                <span className="mono-tag text-xs" style={{ color: 'var(--color-ink-faint)' }}>
                  DOI: {journalPaper.doi}
                </span>
              </div>
              <p className="mono-tag mt-2 text-xs" style={{ color: 'var(--color-ink-faint)' }}>
                Presented at {journalPaper.presentedAt}
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--color-ink-muted)' }}>
                {journalPaper.summary}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border"
              style={{ borderColor: 'var(--color-border)' }}
            >
              {research.metrics.map((metric) => (
                <div key={metric.label} className="p-6" style={{ backgroundColor: 'var(--color-surface)' }}>
                  <div className="mono-tag text-2xl font-semibold sm:text-3xl" style={{ color: 'var(--color-data)' }}>
                    {metric.value}
                  </div>
                  <div className="mt-1.5 text-xs sm:text-sm" style={{ color: 'var(--color-ink-faint)' }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {journalPaper.photo && (
              <div className="mt-40 sm:mt-135">
                <div
                  className="aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-lg border"
                  style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${journalPaper.photo}`}
                    alt="Presenting research at NCUR"
                    className="h-full w-full object-cover object-bottom"
                  />
                </div>
                <p className="mono-tag mt-2 text-xs" style={{ color: 'var(--color-ink-faint)' }}>
                </p>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
