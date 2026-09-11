import type { ReactNode } from 'react'

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span
      className="mono-tag inline-flex items-center rounded-sm border px-2.5 py-1 text-[0.7rem]"
      style={{
        borderColor: 'var(--color-accent)',
        color: 'var(--color-ink-muted)',
        backgroundColor: 'var(--color-surface-2)',
      }}
    >
      {children}
    </span>
  )
}
