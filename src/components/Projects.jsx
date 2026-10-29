import { Link } from 'react-router-dom'
import { FaArrowRight, FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'
import { projects } from '../data.js'
import { useTilt } from '../hooks/motion.js'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import ProjectImage from './ProjectImage.jsx'

function Card({ p, index }) {
  const tilt = useTilt(6)
  return (
    <Reveal variant={index === 1 ? 'up' : index === 0 ? 'left' : 'right'} delay={index * 90} className="pcard-wrap">
      <article
        className={`pcard tone-${p.tone}`}
        ref={tilt.ref}
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
      >
        <Link to={`/projects/${p.slug}`} className="pcard-shot" aria-label={`${p.name} details`} tabIndex={-1}>
          <ProjectImage src={p.image} name={p.name} />
          <span className="pcard-kind">{p.kind}</span>
        </Link>
        <div className="pcard-body">
          <h3>
            {p.name}
            <small className={p.native.match(/[ঀ-৿]/) ? 'lang-bn' : ''}>{p.native}</small>
          </h3>
          <p>{p.summary}</p>
          <ul className="chips">
            {p.stack.slice(0, 4).map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="pcard-actions">
            <Link className="btn btn-sun" to={`/projects/${p.slug}`}>
              View details <FaArrowRight aria-hidden="true" />
            </Link>
            <a className="icon-btn" href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.name} live site`} title="Live site">
              <FaArrowUpRightFromSquare aria-hidden="true" />
            </a>
            <a className="icon-btn" href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.name} repository`} title="GitHub repository">
              <FaGithub aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section section-raised">
      <div className="wrap">
        <SectionHead
          title="Selected"
          accent="projects"
          sub="Three things I built end to end. Each opens a detail page with the stack, the live site, the client repository, what went wrong and what comes next."
        />
        <div className="pgrid">
          {projects.map((p, i) => (
            <Card key={p.slug} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

