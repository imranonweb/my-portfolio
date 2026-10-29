/** Rickshaw wheel: rim, tyre, 20 spokes, hub. Inherits colour from `currentColor`. */
export default function Wheel({ size = 40, className = '', spin = false }) {
  const spokes = Array.from({ length: 20 }, (_, i) => (i * 360) / 20)
  return (
    <svg
      className={`${className} ${spin ? 'wheel-spin' : ''}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="46" strokeWidth="5" />
      <circle cx="50" cy="50" r="38" strokeWidth="1.6" strokeDasharray="2 4" />
      <g strokeWidth="1.4">
        {spokes.map((a) => (
          <line key={a} x1="50" y1="50" x2="50" y2="12" transform={`rotate(${a} 50 50)`} />
        ))}
      </g>
      <circle cx="50" cy="50" r="7" fill="currentColor" stroke="none" />
      <circle cx="50" cy="50" r="2.4" fill="var(--ink, #0e0b15)" stroke="none" />
    </svg>
  )
}

