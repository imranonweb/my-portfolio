import { Link } from 'react-router-dom'
import { FaArrowRight, FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'
import { projects } from '../data.js'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import ProjectImage from './ProjectImage.jsx'

function Card({ p, index }) {
  return (
    <Reveal variant="up" delay={index * 70} className="pcard-wrap">
      <article className={`pcard tone-${p.tone}`}>
        <Link to={`/projects/${p.slug}`} className="pcard-shot" aria-label={`${p.name} case study`} tabIndex={-1}>
          <ProjectImage src={p.image} name={p.name} />
          <span className="pcard-kind">{p.kind}</span>
        </Link>
        <div className="pcard-body">
          <h3>
            {p.name}
            <small className={/[ঀ-৿]/.test(p.native) ? 'lang-bn' : ''}>{p.native}</small>
          </h3>
          <p className="pcard-summary">{p.summary}</p>
          <dl className="pcard-meta">
            <div>
              <dt>What I built</dt>
              <dd>{p.built}</dd>
            </div>
            <div>
              <dt>Key engineering highlight</dt>
              <dd>{p.challenges[0]}</dd>
            </div>
          </dl>
          <ul className="chips" aria-label="Technologies used">
            {p.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="pcard-actions">
            <Link className="btn btn-sun" to={`/projects/${p.slug}`}>
              Case Study <FaArrowRight aria-hidden="true" />
            </Link>
            <a
              className="btn btn-line pcard-link"
              href={p.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${p.name} live demo`}
            >
              Live <FaArrowUpRightFromSquare aria-hidden="true" />
            </a>
            <a
              className="icon-btn"
              href={p.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${p.name} GitHub repository`}
              title="GitHub repository"
            >
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
          sub="Full-stack web applications and applied machine-learning work — each with a live deployment, public source code, and an engineering breakdown."
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
