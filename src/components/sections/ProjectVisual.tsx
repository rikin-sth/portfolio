import type { ProjectEntry } from '../../data/portfolio'

const patternNodes = ['State', 'Strategy', 'Factory', 'Prototype', 'Facade', 'Command', 'Observer']

function DesignPatternsVisual() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="presentation" aria-hidden>
      <defs>
        <radialGradient id="glow1" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#glow1)" />
      {/* connections */}
      <g stroke="var(--color-border-strong)" strokeWidth="1">
        <line x1="200" y1="150" x2="90" y2="70" />
        <line x1="200" y1="150" x2="200" y2="45" />
        <line x1="200" y1="150" x2="310" y2="70" />
        <line x1="200" y1="150" x2="70" y2="200" />
        <line x1="200" y1="150" x2="200" y2="255" />
        <line x1="200" y1="150" x2="330" y2="200" />
      </g>
      {/* center node */}
      <circle cx="200" cy="150" r="22" fill="var(--color-surface-2)" stroke="var(--color-accent)" strokeWidth="1.5" />
      <text x="200" y="154" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="var(--color-accent)">
        Game
      </text>
      {[
        [90, 70],
        [200, 45],
        [310, 70],
        [70, 200],
        [200, 255],
        [330, 200],
      ].map(([x, y], i) => (
        <g key={patternNodes[i]}>
          <circle cx={x} cy={y} r="30" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="1" />
          <text x={x} y={y + 4} textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="var(--color-ink-muted)">
            {patternNodes[i]}
          </text>
        </g>
      ))}
    </svg>
  )
}

function DatabaseVisual() {
  const tables = [
    { x: 20, y: 30, w: 110, h: 90, name: 'interns', rows: ['id', 'name', 'dept_id'] },
    { x: 165, y: 15, w: 110, h: 75, name: 'departments', rows: ['id', 'name'] },
    { x: 165, y: 130, w: 110, h: 90, name: 'milestones', rows: ['id', 'intern_id', 'due'] },
    { x: 305, y: 60, w: 85, h: 75, name: 'status', rows: ['id', 'label'] },
  ]
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" role="presentation" aria-hidden>
      <g stroke="var(--color-accent)" strokeWidth="1.25" strokeDasharray="4 3" opacity="0.7">
        <line x1="130" y1="70" x2="165" y2="55" />
        <line x1="220" y1="90" x2="220" y2="130" />
        <line x1="275" y1="90" x2="305" y2="90" />
      </g>
      {tables.map((t) => (
        <g key={t.name}>
          <rect x={t.x} y={t.y} width={t.w} height={t.h} rx="6" fill="var(--color-surface)" stroke="var(--color-border-strong)" />
          <rect x={t.x} y={t.y} width={t.w} height="22" rx="6" fill="var(--color-surface-2)" />
          <text x={t.x + 8} y={t.y + 15} fontSize="9" fontFamily="JetBrains Mono, monospace" fill="var(--color-ink)">
            {t.name}
          </text>
          {t.rows.map((r, i) => (
            <text
              key={r}
              x={t.x + 8}
              y={t.y + 36 + i * 15}
              fontSize="8"
              fontFamily="JetBrains Mono, monospace"
              fill="var(--color-ink-faint)"
            >
              {r}
            </text>
          ))}
        </g>
      ))}
    </svg>
  )
}

function MernVisual() {
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" role="presentation" aria-hidden>
      <rect x="20" y="20" width="360" height="220" rx="10" fill="var(--color-surface)" stroke="var(--color-border-strong)" />
      <rect x="20" y="20" width="360" height="30" rx="10" fill="var(--color-surface-2)" />
      <circle cx="38" cy="35" r="4" fill="#ff5f57" />
      <circle cx="52" cy="35" r="4" fill="#febc2e" />
      <circle cx="66" cy="35" r="4" fill="#28c840" />
      <rect x="36" y="65" width="90" height="150" rx="6" fill="var(--color-surface-2)" opacity="0.6" />
      {['Requests', 'My Team', 'Reports'].map((label, i) => (
        <text key={label} x="50" y={95 + i * 34} fontSize="9" fontFamily="JetBrains Mono, monospace" fill="var(--color-ink-muted)">
          {label}
        </text>
      ))}
      {[0, 1, 2, 3].map((row) => (
        <g key={row}>
          <rect x="145" y={70 + row * 38} width="215" height="28" rx="5" fill="var(--color-surface-2)" opacity="0.5" />
          <rect x="155" y={78 + row * 38} width="110" height="6" rx="3" fill="var(--color-ink-faint)" opacity="0.6" />
          <rect
            x="320"
            y={77 + row * 38}
            width="30"
            height="10"
            rx="5"
            fill={row % 2 === 0 ? 'var(--color-accent)' : 'var(--color-border-strong)'}
            opacity="0.8"
          />
        </g>
      ))}
    </svg>
  )
}

export function ProjectVisual({ variant }: { variant: ProjectEntry['visual'] }) {
  if (variant === 'design-patterns') return <DesignPatternsVisual />
  if (variant === 'database') return <DatabaseVisual />
  return <MernVisual />
}
