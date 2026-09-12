import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import type { ProjectEntry } from '../../data/portfolio'
import { GithubIcon } from '../ui/BrandIcons'
import { Tag } from '../ui/Tag'
import { cn } from '../../lib/utils'

const EASE = [0.25, 1, 0.5, 1] as const
const FLIP_MS = 800
const MOVE_MS = 800

type Slot = 'center' | 'left' | 'right' | 'hidden'

function getSlot(index: number, activeIndex: number, count: number): Slot {
  if (count === 0) return 'hidden'
  const relative = (index - activeIndex + count) % count
  if (relative === 0) return 'center'
  if (relative === 1) return 'right'
  if (relative === count - 1) return 'left'
  return 'hidden'
}

type Pose = {
  x: number
  y: number
  rotate: number
  scale: number
  zIndex: number
  opacity: number
}

/** Pyramid layout: main on top; side backs sit below-left / below-right (not tucked behind) */
const slotPose: Record<Slot, Pose> = {
  center: { x: 0, y: -135, rotate: 0, scale: 1.03, zIndex: 30, opacity: 1 },
  left: { x: -240, y: 210, rotate: -30, scale: 0.69, zIndex: 10, opacity: 1 },
  right: { x: 240, y: 210, rotate: 30, scale: 0.69, zIndex: 10, opacity: 1 },
  hidden: { x: 0, y: 255, rotate: 0, scale: 0.55, zIndex: 1, opacity: 0 },
}

const slotPoseMobile: Record<Slot, Pose> = {
  center: { x: 0, y: -104, rotate: 0, scale: 1, zIndex: 30, opacity: 1 },
  left: { x: -135, y: 175, rotate: -24, scale: 0.65, zIndex: 10, opacity: 1 },
  right: { x: 135, y: 175, rotate: 24, scale: 0.65, zIndex: 10, opacity: 1 },
  hidden: { x: 0, y: 205, rotate: 0, scale: 0.5, zIndex: 1, opacity: 0 },
}

function CardBack({ title }: { title: string }) {
  return (
    <div
      className="absolute inset-0 flex flex-col overflow-hidden rounded-xl border p-5"
      style={{
        backgroundColor: 'var(--color-surface-2)',
        borderColor: 'var(--color-border-strong)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-3 rounded-lg opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(135deg, var(--color-accent-line) 1px, transparent 1px),
            linear-gradient(45deg, var(--color-border-strong) 1px, transparent 1px)
          `,
          backgroundSize: '14px 14px',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-5 rounded-md border"
        style={{ borderColor: 'var(--color-accent-line)' }}
        aria-hidden
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-between py-2 text-center">
        <span
          className="mono-tag text-[0.65rem] uppercase tracking-widest"
          style={{ color: 'var(--color-accent)' }}
        >
          Project
        </span>
        <h3
          className="max-w-[12rem] text-balance text-lg font-semibold leading-snug sm:text-xl"
          style={{ color: 'var(--color-ink)' }}
        >
          {title}
        </h3>
        <span className="mono-tag text-[0.65rem]" style={{ color: 'var(--color-ink-faint)' }}>
          tap to open
        </span>
      </div>
    </div>
  )
}

function CardFront({ project }: { project: ProjectEntry }) {
  return (
    <div
      className="absolute inset-0 flex flex-col overflow-hidden rounded-xl border"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border-strong)',
      }}
    >
      {project.image ? (
        <div
          className="relative h-44 shrink-0 overflow-hidden sm:h-52"
          style={{ borderBottom: '1px solid var(--color-border)' }}
        >
          <img
            src={`${import.meta.env.BASE_URL}${project.image}`}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover object-top"
            style={{ transform: 'translateZ(0)' }}
            loading="eager"
            decoding="async"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-10"
            style={{
              background: 'linear-gradient(to top, var(--color-surface), transparent)',
            }}
          />
        </div>
      ) : null}

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain p-4 sm:p-5"
        style={{ touchAction: 'pan-y', WebkitOverflowScrolling: 'touch' }}
        onWheel={(e) => e.stopPropagation()}
      >
        <span className="mono-tag text-[0.65rem]" style={{ color: 'var(--color-ink-faint)' }}>
          {project.date}
        </span>
        <h3
          className="mt-1 text-xl font-semibold leading-tight sm:text-2xl"
          style={{ color: 'var(--color-ink)' }}
        >
          {project.title}
        </h3>
        <p
          className="mt-2 text-sm leading-relaxed sm:text-[0.95rem]"
          style={{ color: 'var(--color-ink-muted)' }}
        >
          {project.tagline}
        </p>

        <div className="mt-3">
          <span className="mono-tag text-[0.65rem] uppercase" style={{ color: 'var(--color-ink-faint)' }}>
            Role
          </span>
          <p className="mt-0.5 text-sm" style={{ color: 'var(--color-data)' }}>
            {project.role}
          </p>
        </div>

        <ul className="mt-3 space-y-2">
          {project.bullets.map((bullet, bi) => (
            <li
              key={bi}
              className="flex gap-2 text-xs leading-relaxed sm:text-sm"
              style={{ color: 'var(--color-ink-muted)' }}
            >
              <span
                className="mt-1.5 h-1 w-1 flex-none rounded-full"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        {(project.github || project.demo) && (
          <div className="mt-4 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[var(--color-accent)]"
                onClick={(e) => e.stopPropagation()}
              >
                <GithubIcon size={15} /> Repository
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[var(--color-accent)]"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={15} /> Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  slot,
  reduceMotion,
  isMobile,
  onSelect,
}: {
  project: ProjectEntry
  slot: Slot
  reduceMotion: boolean
  isMobile: boolean
  onSelect: () => void
}) {
  const pose = (isMobile ? slotPoseMobile : slotPose)[slot]
  const showFront = slot === 'center'
  const interactive = slot === 'left' || slot === 'right'
  // backface-visibility breaks wheel scrolling in Chrome — lift it after the flip settles
  const [scrollReady, setScrollReady] = useState(showFront)

  useEffect(() => {
    if (!showFront) {
      setScrollReady(false)
      return
    }
    if (reduceMotion) {
      setScrollReady(true)
      return
    }
    const timer = window.setTimeout(() => setScrollReady(true), FLIP_MS)
    return () => window.clearTimeout(timer)
  }, [showFront, reduceMotion])

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-[min(90vw,24.5rem)] sm:w-[26rem]"
      style={{
        height: isMobile ? '32rem' : '37.5rem',
        pointerEvents: slot === 'hidden' ? 'none' : 'auto',
      }}
      initial={false}
      animate={{
        x: pose.x,
        y: pose.y,
        rotate: pose.rotate,
        scale: pose.scale,
        zIndex: pose.zIndex,
        opacity: pose.opacity,
      }}
      transition={reduceMotion ? { duration: 0 } : { duration: MOVE_MS / 1000, ease: EASE }}
      transformTemplate={({ x, y, rotate, scale }) => {
        const tx = typeof x === 'number' ? `${x}px` : (x ?? '0px')
        const ty = typeof y === 'number' ? `${y}px` : (y ?? '0px')
        const r = typeof rotate === 'number' ? `${rotate}deg` : (rotate ?? '0deg')
        return `translate(-50%, -50%) translate3d(${tx}, ${ty}, 0) rotate(${r}) scale(${scale ?? 1})`
      }}
    >
      <div
        role={interactive ? 'button' : undefined}
        tabIndex={interactive ? 0 : undefined}
        className={cn(
          'relative h-full w-full rounded-xl text-left outline-none focus-visible:outline-2',
          interactive && 'cursor-pointer',
        )}
        style={{
          boxShadow: showFront
            ? '0 28px 56px -16px rgba(0, 212, 234, 0.32)'
            : '0 14px 28px -16px rgba(0, 0, 0, 0.7)',
          perspective: 1400,
        }}
        aria-label={
          showFront ? `${project.title} (current project)` : `Show project: ${project.title}`
        }
        onClick={() => {
          if (interactive) onSelect()
        }}
        onKeyDown={(e) => {
          if (!interactive) return
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onSelect()
          }
        }}
      >
        <motion.div
          className="relative h-full w-full"
          style={{ transformStyle: 'preserve-3d' }}
          initial={false}
          animate={{ rotateY: showFront ? 0 : 180 }}
          transition={reduceMotion ? { duration: 0 } : { duration: FLIP_MS / 1000, ease: EASE }}
        >
          <div
            className="absolute inset-0"
            style={{
              backfaceVisibility: scrollReady ? 'visible' : 'hidden',
              WebkitBackfaceVisibility: scrollReady ? 'visible' : 'hidden',
              pointerEvents: showFront ? 'auto' : 'none',
            }}
          >
            <CardFront project={project} />
          </div>
          <div
            className="absolute inset-0"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              pointerEvents: showFront ? 'none' : 'auto',
            }}
          >
            <CardBack title={project.title} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function ProjectDeck({ projects }: { projects: ProjectEntry[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const reduceMotion = useReducedMotion() ?? false
  const count = projects.length

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)')
    const sync = () => setIsMobile(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const goTo = (index: number) => {
    if (animating || count === 0) return
    const next = ((index % count) + count) % count
    if (next === activeIndex) return
    setAnimating(true)
    setActiveIndex(next)
    window.setTimeout(() => setAnimating(false), reduceMotion ? 0 : MOVE_MS)
  }

  const goNext = () => goTo(activeIndex + 1)
  const goPrev = () => goTo(activeIndex - 1)

  if (count === 0) return null

  const active = projects[activeIndex]

  return (
    <div className="relative">
      <p className="sr-only" aria-live="polite">
        Showing project {active?.title}
      </p>

      <div className="relative mx-auto h-[50rem] w-full max-w-6xl sm:h-[56rem]">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            slot={getSlot(index, activeIndex, count)}
            reduceMotion={reduceMotion}
            isMobile={isMobile}
            onSelect={() => goTo(index)}
          />
        ))}
      </div>

      <div className="mt-2 flex items-center justify-center gap-4 sm:mt-4">
        <button
          type="button"
          onClick={goPrev}
          disabled={animating}
          aria-label="Previous project"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] disabled:opacity-40"
          style={{ borderColor: 'var(--color-border-strong)', color: 'var(--color-ink)' }}
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              aria-label={`Go to ${project.title}`}
              onClick={() => goTo(index)}
              disabled={animating}
              className="h-2 rounded-full transition-all"
              style={{
                width: index === activeIndex ? '1.5rem' : '0.5rem',
                backgroundColor:
                  index === activeIndex ? 'var(--color-accent)' : 'var(--color-border-strong)',
              }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          disabled={animating}
          aria-label="Next project"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] disabled:opacity-40"
          style={{ borderColor: 'var(--color-border-strong)', color: 'var(--color-ink)' }}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
