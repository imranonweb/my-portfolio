import { createElement } from 'react'
import { useInView } from '../hooks/motion.js'

/**
 * Scroll-triggered entrance. Content is visible without JS; the hidden start
 * state only applies under `.js` (see base.css). Variants differ on purpose.
 */
export default function Reveal({ as = 'div', variant = 'up', delay = 0, className = '', style, children, ...rest }) {
  const [ref, seen] = useInView({ threshold: 0.15, rootMargin: '0px 0px -6% 0px' })
  return createElement(
    as,
    {
      ref,
      className: `rv rv-${variant} ${seen ? 'in' : ''} ${className}`.trim(),
      style: { ...style, '--d': `${delay}ms` },
      ...rest,
    },
    children,
  )
}

