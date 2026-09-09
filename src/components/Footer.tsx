import { personal } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="border-t py-8" style={{ borderColor: 'var(--color-border)' }}>
      <div className="container-page flex flex-col items-center justify-between gap-3 text-xs sm:flex-row" style={{ color: 'var(--color-ink-faint)' }}>
        <p className="mono-tag">© {new Date().getFullYear()} {personal.name}</p>
        <p className="mono-tag">Built with React, Tailwind CSS & Framer Motion</p>
      </div>
    </footer>
  )
}
