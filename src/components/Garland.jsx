import { useId } from 'react'

/** Painted border band: marigold diamonds, teal beads, vermilion petals. */
export default function Garland({ className = '', animated = false }) {
  const id = useId().replace(/:/g, '')
  return (
    <div className={`garland-wrap ${className}`.trim()} aria-hidden="true">
      <svg className={`garland ${animated ? 'garland-run' : ''}`} height="22">
        <defs>
          <pattern id={id} width="64" height="22" patternUnits="userSpaceOnUse">
            <path d="M16 11 L24 3 L32 11 L24 19 Z" fill="var(--marigold)" />
            <circle cx="24" cy="11" r="2.2" fill="var(--ink)" />
            <circle cx="40" cy="11" r="3" fill="var(--teal)" />
            <path d="M52 11 q6 -9 12 0 q-6 9 -12 0z" fill="var(--vermilion)" />
            <path d="M0 11 q6 -9 12 0 q-6 9 -12 0z" fill="var(--vermilion)" />
          </pattern>
        </defs>
        <rect width="100%" height="22" fill={`url(#${id})`} />
      </svg>
    </div>
  )
}
