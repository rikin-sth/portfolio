import { Reveal } from './Reveal'
import { cn } from '../../lib/utils'

type SectionHeadingProps = {
  label: string
  number: string
  title?: string
  description?: string
  accent?: 'lime' | 'data'
  align?: 'left' | 'center'
}

export function SectionHeading({
  label,
  number,
  title,
  description,
  accent = 'lime',
  align = 'left',
}: SectionHeadingProps) {
  const accentColor = accent === 'lime' ? 'var(--color-accent)' : 'var(--color-data)'

  const labelText = (
    <span className="mono-tag shrink-0 text-xs" style={{ color: accentColor }}>
      &gt; {number}. {label}
    </span>
  )

  return (
    <Reveal className={cn('mb-12 sm:mb-16', align === 'center' ? 'mx-auto max-w-3xl' : 'max-w-3xl')}>
      <div className={cn('mb-4 flex items-center gap-3', align === 'center' && 'justify-center')}>
        {title ? labelText : <h2 className="m-0">{labelText}</h2>}
        <span
          className={cn('h-px', align === 'center' ? 'w-16' : 'flex-1 max-w-[12rem]')}
          style={{ backgroundColor: 'var(--color-border-strong)' }}
        />
      </div>
      {title && (
        <h2
          className={cn(
            'text-balance font-semibold',
            align === 'center'
              ? 'text-4xl leading-tight sm:text-5xl md:text-6xl'
              : 'text-3xl sm:text-4xl md:text-5xl',
          )}
          style={{ color: 'var(--color-ink)' }}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={cn('mt-4 text-base sm:text-lg', align === 'center' && 'mx-auto max-w-xl')}
          style={{ color: 'var(--color-ink-muted)' }}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
