import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaExpand,
  FaCompress,
} from 'react-icons/fa6'
import { projects } from '../data.js'
import Reveal from '../components/Reveal.jsx'
import Garland from '../components/Garland.jsx'
import ProjectImage from '../components/ProjectImage.jsx'

export default function ProjectDetail() {
  const { slug } = useParams()
  const [expanded, setExpanded] = useState(false)
  const index = projects.findIndex((x) => x.slug === slug)
  const p = projects[index]

  if (!p) {
    return (
      <section className="section detail">
        <div className="wrap not-found">
          <h1>Project not found</h1>
          <Link className="btn btn-sun" to="/#projects">
            <FaArrowLeft aria-hidden="true" /> Back to projects
          </Link>
        </div>
      </section>
    )
  }
  const next = projects[(index + 1) % projects.length]

  return (
    <article className={`detail tone-${p.tone}`}>
      <div className="wrap">
        <Link className="back" to="/#projects">
          <FaArrowLeft aria-hidden="true" /> All projects
        </Link>

        <header className="d-head">
          <h1>
            {p.name}
            <small className={/[ঀ-৿]/.test(p.native) ? 'lang-bn' : ''}>{p.native}</small>
          </h1>
          <p className="d-summary">
            <span className="d-kind">{p.kind}</span> {p.summary}
          </p>
          <div className="d-actions">
            <a className="btn btn-sun" href={p.live} target="_blank" rel="noreferrer">
              <FaArrowUpRightFromSquare aria-hidden="true" /> Live Demo
            </a>
            <a className="btn btn-line" href={p.github} target="_blank" rel="noreferrer">
              <FaGithub aria-hidden="true" /> GitHub Repository
            </a>
          </div>
        </header>

        <Reveal variant="scale" className={`browser ${expanded ? 'is-expanded' : ''}`}>
          <div className="browser-bar">
            <div className="browser-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <a
              className="browser-url"
              href={p.live}
              target="_blank"
              rel="noreferrer"
              title="Open live project"
            >
              <span>{p.live.replace(/^https?:\/\//, '')}</span>
              <FaArrowUpRightFromSquare aria-hidden="true" />
            </a>
            <button
              type="button"
              className="browser-toggle"
              onClick={() => setExpanded(!expanded)}
              aria-label={expanded ? 'Fit image to frame' : 'Show full image dimensions'}
              title={expanded ? 'Fit image to viewport' : 'Expand full height'}
            >
              {expanded ? <FaCompress aria-hidden="true" /> : <FaExpand aria-hidden="true" />}
              <span>{expanded ? 'Fit view' : 'Dynamic view'}</span>
            </button>
          </div>
          <div className="browser-stage">
            <ProjectImage src={p.image} name={p.name} eager className="case-study-img" />
          </div>
        </Reveal>

        <div className="d-grid">
          <Reveal as="section" variant="up" className="d-block">
            <h2>Problem It Solves</h2>
            <p>{p.problem}</p>
          </Reveal>

          <Reveal as="section" variant="up" delay={60} className="d-block">
            <h2>What I Built</h2>
            <p>{p.built}</p>
          </Reveal>

          <Reveal as="section" variant="up" delay={90} className="d-block d-wide">
            <h2>Architecture &amp; Overview</h2>
            <p>{p.description}</p>
          </Reveal>

          <Reveal as="section" variant="up" delay={110} className="d-block d-wide">
            <h2>Technologies Used</h2>
            <ul className="chips big">
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="section" variant="left" className="d-block">
            <h2>Technical Decisions &amp; Challenges</h2>
            <ul className="d-list">
              {p.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="section" variant="right" className="d-block">
            <h2>Planned Improvements</h2>
            <ul className="d-list">
              {p.future.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal variant="up">
          <Garland className="d-garland" />
          <Link to={`/projects/${next.slug}`} className={`next tone-${next.tone}`}>
            <span>Next project</span>
            <strong>
              {next.name} <FaArrowRight aria-hidden="true" />
            </strong>
          </Link>
        </Reveal>
      </div>
    </article>
  )
}
