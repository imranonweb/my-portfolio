import Reveal from './Reveal.jsx'
import Garland from './Garland.jsx'

export default function SectionHead({ title, accent, sub, align = 'left' }) {
  return (
    <header className={`sec-head ${align === 'center' ? 'center' : ''}`}>
      <Reveal as="h2" variant="wipe">
        {title} {accent && <span>{accent}</span>}
      </Reveal>
      <Reveal variant="up" delay={120}>
        <Garland className="sec-garland" />
      </Reveal>
      {sub && (
        <Reveal as="p" variant="up" delay={200} className="sec-sub">
          {sub}
        </Reveal>
      )}
    </header>
  )
}

