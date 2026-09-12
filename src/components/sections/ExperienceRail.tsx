import { useId } from 'react'
import { cn } from '../../lib/utils'

type RailVariant = 'binary' | 'cable' | 'neural'

const BINARY_COLS = [
  '0100110101101001',
  '1101001010010110',
  '0011010110100101',
  '1010011010011100',
]

function BinaryRain() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-3 bottom-0 overflow-hidden" aria-hidden>
      <div className="relative mx-auto flex h-full w-5 justify-center gap-px">
        {BINARY_COLS.map((col, i) => (
          <div
            key={i}
            className="exp-binary-col mono-tag text-[7px] leading-[9px]"
            style={{
              color: 'var(--color-accent)',
              opacity: 0.35 + (i % 3) * 0.12,
              animationDelay: `${i * -0.7}s`,
              animationDuration: `${3.2 + i * 0.35}s`,
            }}
          >
            {`${col}${col}${col}${col}`.split('').map((ch, ci) => (
              <span key={ci} className="block text-center">
                {ch}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div
        className="absolute left-1/2 top-3 bottom-0 w-px -translate-x-1/2"
        style={{ backgroundColor: 'var(--color-accent-line)' }}
      />
    </div>
  )
}

/**
 * Flat RJ45 plug icon (top-down), tip at y=0 so it can seat against a timeline dot.
 * Drawn in local coords ~ width 20, height ~34 (not counting extended cable).
 */
function Rj45Plug({
  fill = 'var(--color-accent)',
}: {
  fill?: string
}) {
  return (
    <g fill={fill}>
      {/* Tip frame + contact pins */}
      <rect x="4" y="0" width="12" height="7" rx="0.6" fill="none" stroke={fill} strokeWidth="1.1" />
      {[5.4, 6.9, 8.4, 9.9, 11.4, 12.9].map((x) => (
        <rect key={x} x={x} y="1.2" width="0.95" height="4.6" rx="0.2" />
      ))}
      {/* Main body with U-notch for latch */}
      <path d="M3 7.2 h14 v9.5 H3 z M8.2 7.2 h3.6 v3.2 H8.2 z" fillRule="evenodd" />
      {/* Strain-relief ribs */}
      <rect x="4.2" y="17" width="11.6" height="2.4" rx="1.1" />
      <rect x="5" y="19.8" width="10" height="2.4" rx="1.1" />
      <rect x="5.8" y="22.6" width="8.4" height="2.4" rx="1.1" />
      {/* Cable stub leaving the boot */}
      <rect x="8.2" y="25.2" width="3.6" height="8" rx="1.2" />
    </g>
  )
}

function CableFlow() {
  const uid = useId().replace(/:/g, '')
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0 flex flex-col items-center" aria-hidden>
      {/* Top RJ45 — tip seats against the timeline dot */}
      <svg
        width="22"
        height="36"
        viewBox="0 0 20 34"
        className="relative z-[1] mt-2 shrink-0 overflow-visible"
      >
        <Rj45Plug />
      </svg>

      {/* Stretching cable between plugs */}
      <div className="relative min-h-0 w-4 flex-1 overflow-hidden">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 16 300" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`cable-sheath-${uid}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1c2d4a" />
              <stop offset="40%" stopColor="#2a3f5e" />
              <stop offset="50%" stopColor="#3d5578" />
              <stop offset="60%" stopColor="#2a3f5e" />
              <stop offset="100%" stopColor="#1c2d4a" />
            </linearGradient>
            <linearGradient id={`cable-flow-${uid}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0" />
              <stop offset="45%" stopColor="var(--color-accent)" stopOpacity="0.95" />
              <stop offset="55%" stopColor="#1e9bff" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect x="4" y="0" width="8" height="300" rx="3" fill={`url(#cable-sheath-${uid})`} />
          <rect x="5.8" y="0" width="4.4" height="300" rx="1.5" fill="#070d1a" opacity="0.9" />
          <path
            d="M6.5 0 C8.5 30, 6.5 60, 8.5 90 S6.5 150, 8.5 180 S6.5 240, 8.5 270 S6.5 295, 8 300"
            fill="none"
            stroke="#5b9fff"
            strokeWidth="0.7"
            opacity="0.45"
          />
          <path
            d="M9.5 0 C7.5 30, 9.5 60, 7.5 90 S9.5 150, 7.5 180 S9.5 240, 7.5 270 S9.5 295, 8 300"
            fill="none"
            stroke="#00d4ea"
            strokeWidth="0.7"
            opacity="0.45"
          />
          <rect
            className="exp-cable-packet"
            x="5.4"
            y="0"
            width="5.2"
            height="40"
            rx="1.6"
            fill={`url(#cable-flow-${uid})`}
          />
          <rect
            className="exp-cable-packet"
            x="5.4"
            y="0"
            width="5.2"
            height="24"
            rx="1.6"
            fill={`url(#cable-flow-${uid})`}
            style={{ animationDelay: '-1.1s', animationDuration: '2.4s' }}
          />
        </svg>
      </div>

      {/* Bottom RJ45 — tip faces the next timeline dot */}
      <svg
        width="22"
        height="36"
        viewBox="0 0 20 34"
        className="relative z-[1] mb-1 shrink-0 overflow-visible"
        style={{ transform: 'scaleY(-1)' }}
      >
        <Rj45Plug />
      </svg>
    </div>
  )
}

function NeuralPulse() {
  const nodes = [18, 52, 88, 124, 160, 196, 232, 268, 304, 340]
  return (
    <div className="pointer-events-none absolute inset-x-0 top-3 bottom-0" aria-hidden>
      <svg className="h-full w-full" viewBox="0 0 28 360" preserveAspectRatio="none">
        <line
          x1="14"
          y1="0"
          x2="14"
          y2="360"
          stroke="var(--color-data)"
          strokeWidth="1"
          strokeOpacity="0.45"
        />
        {nodes.map((y, i) => {
          const side = i % 2 === 0 ? -1 : 1
          return (
            <g key={y}>
              <path
                d={`M14 ${y} Q ${14 + side * 8} ${y + 6}, ${14 + side * 11} ${y + 14}`}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="0.8"
                opacity="0.35"
              />
              <circle
                cx={14 + side * 11}
                cy={y + 14}
                r="1.6"
                fill="var(--color-data)"
                className="exp-neural-node"
                style={{ animationDelay: `${i * 0.18}s` }}
              />
              <circle
                cx="14"
                cy={y}
                r="2.1"
                fill="var(--color-bg)"
                stroke="var(--color-accent)"
                strokeWidth="1"
                className="exp-neural-node"
                style={{ animationDelay: `${i * 0.18 + 0.05}s` }}
              />
            </g>
          )
        })}
        <circle cx="14" cy="0" r="2.4" fill="var(--color-accent)" className="exp-neural-pulse" />
      </svg>
    </div>
  )
}

const variantById: Record<string, RailVariant> = {
  projxon: 'binary',
  'classroom-support': 'cable',
  aims: 'neural',
}

export function ExperienceRail({
  entryId,
  isLast,
}: {
  entryId: string
  isLast: boolean
}) {
  const variant = variantById[entryId] ?? 'binary'

  return (
    <div
      className={cn(
        'absolute left-0 top-0 w-8 -translate-x-1/2 sm:w-9',
        isLast ? 'bottom-8' : 'bottom-0',
      )}
      aria-hidden
    >
      {variant === 'binary' && <BinaryRain />}
      {variant === 'cable' && <CableFlow />}
      {variant === 'neural' && <NeuralPulse />}
    </div>
  )
}
