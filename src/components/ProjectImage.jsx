import { useState } from 'react'

/** Screenshot with a painted fallback so a missing file never leaves a hole. */
export default function ProjectImage({
  src,
  name,
  className = '',
  eager = false,
  width,
  height,
}) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className={`img-fallback ${className}`} role="img" aria-label={name}>
        <span>{name}</span>
      </div>
    )
  }
  return (
    <img
      className={className}
      src={src}
      alt={`${name} screenshot`}
      loading={eager ? 'eager' : 'lazy'}
      {...(width ? { width } : {})}
      {...(height ? { height } : {})}
      onError={() => setFailed(true)}
    />
  )
}
