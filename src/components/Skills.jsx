import { skills } from '../data.js'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SectionHead
          title="Technical"
          accent="skills"
          sub="Focused on the tools and foundations demonstrated across my shipped web applications, machine-learning pipeline, and university coursework."
        />
        <div className="plates plates-three">
          {skills.map((g, gi) => (
            <Reveal
              key={g.category}
              variant="up"
              delay={gi * 60}
              className={`plate-card tone-${g.tone}`}
            >
              <div className="plate-head">
                <div>
                  <h3>{g.category}</h3>
                  {g.subtitle && <p className="plate-sub">{g.subtitle}</p>}
                </div>
              </div>
              <ul className="skill-ledger">
                {g.items.map(({ name, icon: Icon, color, tag, note }, i) => (
                  <li key={name} className="skill-row" style={{ '--c': color, '--i': i }}>
                    <div className="skill-main">
                      <Icon className="skill-ico" aria-hidden="true" />
                      <div className="skill-copy">
                        <div className="skill-title-line">
                          <span className="skill-name">{name}</span>
                          {tag && (
                            <span
                              className={`skill-badge ${
                                tag === 'Exploring' ? 'skill-badge-muted' : 'skill-badge-solid'
                              }`}
                            >
                              {tag}
                            </span>
                          )}
                        </div>
                        <span className="skill-ev">{note}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
