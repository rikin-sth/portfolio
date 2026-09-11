import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, BehanceIcon } from '../ui/BrandIcons'
import { TypedLines } from '../ui/TypedLines'
import { personal } from '../../data/portfolio'
import { Button } from '../ui/Button'
import { scrollToSection } from '../../lib/utils'

const terminalLines = [
  { prompt: 'who am i', output: 'Rikin Bahadur Shrestha' },
  { prompt: 'education', output: 'Bachelor of Science in Computer Information Technology' },
  { prompt: 'role', output: 'Full-Stack Software Engineer' },
  { prompt: 'availability', output: 'Open to work' },
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
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.25, 1, 0.5, 1] }}
            className="text-balance text-[2.6rem] font-semibold leading-[1.05] sm:text-6xl md:text-7xl"
            style={{ color: 'var(--color-ink)' }}
          >
            Rikin
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
            {personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.25, 1, 0.5, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button onClick={() => scrollToSection('projects')} icon={<ArrowUpRight size={16} />}>
              View projects
            </Button>
            <Button
              href={`${import.meta.env.BASE_URL}${personal.resumeUrl}`}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
            >
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
                href={personal.behance}
                target="_blank"
                rel="noreferrer"
                aria-label="Behance profile"
                className="text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                <BehanceIcon size={19} />
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
          transition={{ duration: 0.6, delay: 0.28, ease: [0.25, 1, 0.5, 1] }}
          className="relative min-w-0 rounded-lg border shadow-2xl"
          style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border-strong)' }}
          role="img"
          aria-label="Terminal-style summary of identity, education, role, and availability"
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
          <TypedLines
            lines={terminalLines}
            className="mono-tag max-w-full space-y-3 overflow-hidden px-5 py-6 text-[0.8rem] leading-relaxed sm:min-h-[17.5rem] sm:text-sm"
          />
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        aria-label="Scroll to About Me section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        style={{ color: 'var(--color-ink-faint)' }}
      >
        <span className="mono-tag text-[0.65rem]">scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  )
}
