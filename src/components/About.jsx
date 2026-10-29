import { currently } from '../data.js'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionHead title="About" accent="me" />
        <div className="about-grid">
          <Reveal variant="left" className="about-statement">
            <p>
              Competitive programmer first.
              <br />
              <span>Full stack developer</span> by practice.
            </p>
          </Reveal>

          <div className="about-body">
            <Reveal as="p" delay={60}>
              I&apos;m <strong>Md. Al Imran Emon</strong>, a CSE student at{' '}
              <strong>Green University of Bangladesh</strong>, known in the tech community as{' '}
              <strong>imranonweb</strong>.
            </Reveal>
            <Reveal as="p" delay={120}>
              I&apos;m passionate about <strong>competitive programming</strong>, with a strong foundation
              in <strong>DSA and C++</strong>, actively solving problems on Codeforces and CodeChef.
              Currently, I&apos;m learning <strong>MERN stack development</strong> through Programming Hero
              while exploring <strong>AI/ML, machine learning research, and backend engineering</strong>.
            </Reveal>
            <Reveal as="p" delay={180}>
              As the <strong>Programming Lead of GUCC</strong>, I enjoy building real-world projects,
              solving problems, and continuously growing toward my goal of becoming a{' '}
              <strong>Software Engineer specializing in scalable systems and AI-driven solutions</strong>.
            </Reveal>
            <Reveal as="p" delay={220}>
              Outside of programming, I enjoy playing and watching football, strategizing over chess matches, exploring tech articles, and mentoring fellow students in competitive programming. I bring a curious, persistent, and collaborative spirit to every team and project I undertake.
            </Reveal>

            <ul className="now">
              {currently.map((c, i) => (
                <Reveal as="li" key={c.label} variant="pop" delay={240 + i * 90}>
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

