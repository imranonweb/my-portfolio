import { FaGraduationCap, FaPeopleGroup } from 'react-icons/fa6'
import { education, experience } from '../data.js'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import Wheel from './Wheel.jsx'

function Route({ children }) {
  return (
    <div className="route">
      <span className="route-line" aria-hidden="true" />
      {children}
    </div>
  )
}

export default function Journey() {
  return (
    <>
      <section id="education" className="section">
        <div className="wrap">
          <SectionHead title="Educational" accent="qualification" />
          <Route>
            {education.map((e, i) => (
              <Reveal key={e.school} variant="left" delay={i * 120} className="stop">
                <Wheel size={30} className="stop-wheel" />
                <div className="stop-card">
                  <FaGraduationCap className="stop-icon" aria-hidden="true" />
                  <div className="stop-text">
                    <h3>{e.school}</h3>
                    <p className="stop-sub">{e.degree}</p>
                    <p className="stop-meta">{e.meta}</p>
                  </div>
                  <div className="stamp" aria-label={`${e.stamp.label} ${e.stamp.value}`}>
                    <small>{e.stamp.label}</small>
                    <b>{e.stamp.value}</b>
                  </div>
                </div>
              </Reveal>
            ))}
          </Route>
        </div>
      </section>

      <section id="experience" className="section section-raised">
        <div className="wrap">
          <SectionHead title="Hands-on" accent="experience" />
          <Route>
            {experience.map((x) => (
              <Reveal key={x.role} variant="right" className="stop">
                <Wheel size={30} className="stop-wheel" />
                <div className="stop-card">
                  <FaPeopleGroup className="stop-icon" aria-hidden="true" />
                  <div className="stop-text">
                    <h3>{x.role}</h3>
                    <p className="stop-sub">{x.org}</p>
                    <p className="stop-meta">{x.meta}</p>
                    <ul>
                      {x.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </Route>
        </div>
      </section>
    </>
  )
}

