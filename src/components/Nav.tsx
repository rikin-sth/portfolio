import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'
import { nav, personal } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { cn, scrollToSection } from '../lib/utils'

const sectionIds = nav.map((item) => item.id)

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNavClick = (id: string) => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'backdrop-blur-md' : '',
      )}
      style={{
        backgroundColor: scrolled ? 'rgba(10,10,11,0.75)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      }}
    >
      <nav className="container-page flex h-[76px] items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('home')
          }}
          className="mono-tag flex items-center gap-2 text-sm font-medium"
          aria-label="Rikin Bahadur Shrestha — home"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-sm text-xs font-bold"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-ink)' }}
          >
            RS
          </span>
          <span className="hidden sm:inline" style={{ color: 'var(--color-ink)' }}>
            rikin.dev
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.id)
                }}
                className="relative rounded-full px-4 py-2 text-sm transition-colors"
                style={{ color: activeId === item.id ? 'var(--color-ink)' : 'var(--color-ink-muted)' }}
                aria-current={activeId === item.id ? 'true' : undefined}
              >
                {item.label}
                {activeId === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full"
                    style={{ backgroundColor: 'var(--color-surface-2)', border: '1px solid var(--color-border-strong)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="mono-tag inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            style={{ borderColor: 'var(--color-border-strong)', color: 'var(--color-ink)' }}
          >
            <FileText size={14} />
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden lg:hidden"
            style={{ backgroundColor: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.id)
                    }}
                    className="block rounded-md px-3 py-3 text-base"
                    style={{ color: activeId === item.id ? 'var(--color-accent)' : 'var(--color-ink)' }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex items-center gap-4 px-3">
                <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                  <GithubIcon size={20} />
                </a>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mono-tag ml-auto inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs"
                  style={{ borderColor: 'var(--color-border-strong)' }}
                >
                  <FileText size={14} />
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
