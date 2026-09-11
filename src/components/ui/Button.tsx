import { type ReactNode } from 'react'
import { cn } from '../../lib/utils'

type ButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  icon?: ReactNode
  target?: string
  rel?: string
  className?: string
  ariaLabel?: string
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  icon,
  target,
  rel,
  className,
  ariaLabel,
}: ButtonProps) {
  const base =
    'group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-2'

  const styles =
    variant === 'primary'
      ? 'bg-[var(--color-data)] text-cta-ink hover:-translate-y-0.5 hover:shadow-[0_8px_28px_-6px_var(--color-data)]'
      : 'border border-[var(--color-border-strong)] text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'

  const content = (
    <>
      {children}
      {icon && <span className="transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={cn(base, styles, className)}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={cn(base, styles, className)}>
      {content}
    </button>
  )
}
