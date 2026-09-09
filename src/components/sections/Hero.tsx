import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { personal } from '../../data/portfolio'
import { Button } from '../ui/Button'
import { scrollToSection } from '../../lib/utils'

const terminalLines = [
  { prompt: 'whoami', output: 'Rikin Bahadur Shrestha' },
  { prompt: 'role', output: 'Full-Stack Software Engineer' },
  { prompt: 'currently', output: 'App Developer Intern @ Projxon' },
  { prompt: 'research', output: 'Co-author, IEEE ICECET 2026' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] items-center overflow-hidden pt-28 pb-16 sm:pt-32"
      aria-label="Introduction"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_70%)]" />
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ backgroundColor: 'var(--color-accent-soft)' }}
      />

      <div className="container-page relative grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mono-tag mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs"
            style={{ borderColor: 'var(--color-border-strong)', color: 'var(--color-ink-muted)' }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
            </span>
            {personal.workAuth} · {personal.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.25, 1, 0.5, 1] }}
            className="text-balance text-[2.6rem] font-semibold leading-[1.05] sm:text-6xl md:text-7xl"
            style={{ color: 'var(--color-ink)' }}
          >
            Rikin Bahadur
            <br />
            <span style={{ color: 'var(--color-accent)' }}>Shrestha.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            className="mt-6 max-w-xl text-balance text-lg sm:text-xl"
            style={{ color: 'var(--color-ink-muted)' }}
          >
            I build full-stack platforms end-to-end at{' '}
            <span style={{ color: 'var(--color-ink)' }}>Projxon</span>, backed by a research background in applied
            machine learning — a co-authored paper accepted at{' '}
            <span style={{ color: 'var(--color-ink)' }}>IEEE ICECET 2026</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button onClick={() => scrollToSection('work')} icon={<ArrowUpRight size={16} />}>
              View selected work
            </Button>
            <Button href={personal.resumeUrl} target="_blank" rel="noreferrer" variant="ghost">
              View résumé
            </Button>
            <div className="ml-1 flex items-center gap-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                <GithubIcon size={19} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                <LinkedinIcon size={19} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Send email"
                className="text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                <Mail size={19} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="relative rounded-lg border shadow-2xl"
          style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border-strong)' }}
          role="img"
          aria-label="Terminal-style summary of Rikin's identity and current role"
        >
          <div
            className="flex items-center gap-2 rounded-t-lg border-b px-4 py-3"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <span className="h-3 w-3 rounded-full" style={{ backgroundColor: '#ff5f57' }} />
            <span className="h-3 w-3 rounded-full" style={{ backgroundColor: '#febc2e' }} />
            <span className="h-3 w-3 rounded-full" style={{ backgroundColor: '#28c840' }} />
            <span className="mono-tag ml-3 text-xs" style={{ color: 'var(--color-ink-faint)' }}>
              ~/rikin — zsh
            </span>
          </div>
          <div className="mono-tag space-y-3 px-5 py-6 text-sm leading-relaxed sm:text-[0.95rem]">
            {terminalLines.map((line, i) => (
              <motion.div
                key={line.prompt}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
              >
                <div style={{ color: 'var(--color-ink-faint)' }}>
                  <span style={{ color: 'var(--color-accent)' }}>❯</span> {line.prompt}
                </div>
                <div style={{ color: 'var(--color-ink)' }}>{line.output}</div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + terminalLines.length * 0.15 }}
              className="flex items-center gap-2"
              style={{ color: 'var(--color-ink-faint)' }}
            >
              <span style={{ color: 'var(--color-accent)' }}>❯</span>
              <span className="inline-block h-4 w-2 animate-pulse" style={{ backgroundColor: 'var(--color-accent)' }} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        style={{ color: 'var(--color-ink-faint)' }}
      >
        <span className="mono-tag text-[0.65rem]">scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  )
}
