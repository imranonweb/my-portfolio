import { skills } from '../data.js'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'

const SEGMENTS = [1, 2, 3, 4, 5]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SectionHead
          title="Engineering"
          accent="skills"
          sub="Professionally graded by depth of production and contest use: Core (daily driver, 5/5), Production (shipped in live apps, 4/5), and Working (applied in coursework and prototypes, 3/5)."
        />
        <div className="plates">
          {skills.map((g, gi) => (
            <Reveal
              key={g.category}
              variant={gi % 2 ? 'right' : 'left'}
              delay={gi * 70}
              className={`plate-card tone-${g.tone}`}
            >
              <div className="plate-head">
                <h3>{g.category}</h3>
                <span className="plate-count">{g.items.length} skills</span>
              </div>
              <ul className="skill-ledger">
                {g.items.map(({ name, icon: Icon, color, grade, level, evidence }, i) => (
                  <li key={name} className="skill-row" style={{ '--c': color, '--i': i }}>
                    <div className="skill-main">
                      <Icon className="skill-ico" aria-hidden="true" />
                      <div className="skill-copy">
                        <span className="skill-name">{name}</span>
                        <span className="skill-ev">{evidence}</span>
                      </div>
                    </div>
                    <div className="skill-grade" aria-label={`${grade} proficiency, ${level} of 5`}>
                      <span className={`grade-tag grade-${grade.toLowerCase()}`}>{grade}</span>
                      <span className="grade-bars" aria-hidden="true">
                        {SEGMENTS.map((n) => (
                          <i key={n} className={n <= level ? 'on' : ''} />
                        ))}
                      </span>
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
