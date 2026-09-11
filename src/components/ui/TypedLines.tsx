import { useEffect, useRef, useState } from 'react'

export type TypedLine = { prompt: string; output: string }

type TypedLinesProps = {
  lines: TypedLine[]
  className?: string
  startDelay?: number
  showCursorWhenDone?: boolean
}

function Caret() {
  return (
    <span
      className="ml-0.5 inline-block h-4 w-2 animate-pulse align-middle"
      style={{ backgroundColor: 'var(--color-accent)' }}
    />
  )
}

/** Types out a list of `❯ prompt` / output pairs, starting once the block scrolls into view. */
export function TypedLines({ lines, className, startDelay = 500, showCursorWhenDone = true }: TypedLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const [doneCount, setDoneCount] = useState(0)
  const [promptShown, setPromptShown] = useState('')
  const [outputShown, setOutputShown] = useState('')
  const [phase, setPhase] = useState<'prompt' | 'output' | 'done'>('prompt')

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setStarted(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { rootMargin: '-80px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let cancelled = false
    const sleep = (ms: number) => new Promise<void>((resolve) => window.setTimeout(resolve, ms))

    async function run() {
      if (reduced) {
        setDoneCount(lines.length)
        setPhase('done')
        return
      }

      await sleep(startDelay)

      for (let i = 0; i < lines.length; i++) {
        if (cancelled) return
        const line = lines[i]
        setPromptShown('')
        setOutputShown('')
        setPhase('prompt')

        for (let c = 1; c <= line.prompt.length; c++) {
          if (cancelled) return
          setPromptShown(line.prompt.slice(0, c))
          await sleep(55)
        }

        await sleep(220)
        if (cancelled) return
        setPhase('output')

        for (let c = 1; c <= line.output.length; c++) {
          if (cancelled) return
          setOutputShown(line.output.slice(0, c))
          await sleep(22)
        }

        await sleep(320)
        if (cancelled) return
        setDoneCount(i + 1)
        setPromptShown('')
        setOutputShown('')
      }

      setPhase('done')
    }

    void run()
    return () => {
      cancelled = true
    }
  }, [started, lines, startDelay])

  const current = lines[doneCount]
  const typing = phase !== 'done' && Boolean(current)

  return (
    <div ref={containerRef} className={className}>
      {lines.slice(0, doneCount).map((line, idx) => (
        <div key={`${line.prompt}-${idx}`}>
          <div style={{ color: 'var(--color-ink-faint)' }}>
            <span style={{ color: 'var(--color-accent)' }}>❯</span> {line.prompt}
          </div>
          <div className="max-w-full break-words whitespace-pre-line" style={{ color: 'var(--color-ink)' }}>
            {line.output}
          </div>
        </div>
      ))}

      {typing && current && (
        <div>
          <div style={{ color: 'var(--color-ink-faint)' }}>
            <span style={{ color: 'var(--color-accent)' }}>❯</span> {promptShown}
            {phase === 'prompt' && <Caret />}
          </div>
          {(phase === 'output' || outputShown) && (
            <div className="max-w-full break-words whitespace-pre-line" style={{ color: 'var(--color-ink)' }}>
              {outputShown}
              {phase === 'output' && <Caret />}
            </div>
          )}
        </div>
      )}

      {phase === 'done' && showCursorWhenDone && (
        <div className="flex items-center gap-2" style={{ color: 'var(--color-ink-faint)' }}>
          <span style={{ color: 'var(--color-accent)' }}>❯</span>
          <span className="inline-block h-4 w-2 animate-pulse" style={{ backgroundColor: 'var(--color-accent)' }} />
        </div>
      )}
    </div>
  )
}
