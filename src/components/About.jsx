import { currently } from '../data.js'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'

export default function About() {
  return (
    <section id="about" className="section section-raised">
      <div className="wrap">
        <SectionHead title="About" accent="me" />
        <div className="about-grid">
          <Reveal variant="left" className="about-statement">
            <p>
              <span>Software development</span> first.
              <br />
              Growing in <em>Machine Learning</em>, grounded in algorithms.
            </p>
          </Reveal>

          <div className="about-body">
            <Reveal as="p" delay={60}>
              I&apos;m a fourth-year Computer Science &amp; Engineering student at{' '}
              <strong>Green University of Bangladesh</strong>. My core interest is building
              end-to-end web software that solves practical problems—designing responsive
              interfaces, structuring clean backend APIs, and enforcing reliable database access
              controls.
            </Reveal>
            <Reveal as="p" delay={120}>
              Alongside full-stack development, I&apos;m building a specialization in{' '}
              <strong>machine learning</strong> through university coursework and applied projects,
              with a focus on model evaluation and explainable AI. Years of{' '}
              <strong>competitive programming</strong> shaped how I approach engineering: breaking
              down unfamiliar problems, reasoning carefully about edge cases, and writing deliberate
              code.
            </Reveal>

            <ul className="now">
              {currently.map((c, i) => (
                <Reveal as="li" key={c.label} variant="up" delay={160 + i * 60}>
                  <b>{c.label}</b>
                  <span>{c.text}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
