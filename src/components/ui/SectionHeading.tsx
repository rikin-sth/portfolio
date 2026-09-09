import { Reveal } from './Reveal'

type SectionHeadingProps = {
  index: string
  title: string
  description?: string
  accent?: 'lime' | 'data'
}

export function SectionHeading({ index, title, description, accent = 'lime' }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl sm:mb-16">
      <div className="mb-4 flex items-center gap-3">
        <span
          className="mono-tag text-xs"
          style={{ color: accent === 'lime' ? 'var(--color-accent)' : 'var(--color-data)' }}
        >
          {index}
        </span>
        <span className="h-px flex-1 max-w-[3rem]" style={{ backgroundColor: 'var(--color-border-strong)' }} />
      </div>
      <h2 className="text-balance text-3xl font-semibold sm:text-4xl md:text-5xl" style={{ color: 'var(--color-ink)' }}>
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg" style={{ color: 'var(--color-ink-muted)' }}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
