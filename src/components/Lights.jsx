import { useId } from 'react'

/** Painted rickshaw fringe: alternating marigold, vermilion, teal, and magenta enamel pendants. */
export default function Lights() {
  const id = useId().replace(/:/g, '')
  return (
    <div className="lights" aria-hidden="true">
      <svg width="100%" height="14" preserveAspectRatio="none">
        <defs>
          <pattern id={id} width="64" height="14" patternUnits="userSpaceOnUse">
            <line x1="0" y1="1" x2="64" y2="1" stroke="rgba(247, 237, 219, 0.22)" strokeWidth="1" />
            <polygon points="8,1 13,9 8,13 3,9" fill="var(--vermilion)" />
            <polygon points="24,1 29,9 24,13 19,9" fill="var(--marigold)" />
            <polygon points="40,1 45,9 40,13 35,9" fill="var(--teal)" />
            <polygon points="56,1 61,9 56,13 51,9" fill="var(--magenta)" />
          </pattern>
        </defs>
        <rect width="100%" height="14" fill={`url(#${id})`} />
      </svg>
    </div>
  )
}
