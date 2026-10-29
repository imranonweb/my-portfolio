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
              <span>Full stack developer</span> building with MERN.
              <br />
              Exploring <em>Machine Learning</em> &amp; AI.
            </p>
          </Reveal>

          <div className="about-body">
            <Reveal as="p" delay={60}>
              I&apos;m <strong>Md. Al Imran Emon</strong>, a CSE student at{' '}
              <strong>Green University of Bangladesh</strong>, focused on{' '}
              <strong>Full Stack Web Development</strong> and <strong>Machine Learning</strong>.
            </Reveal>
            <Reveal as="p" delay={120}>
              My primary work is building end-to-end web applications with the{' '}
              <strong>MERN stack (MongoDB, Express.js, React, Node.js)</strong> and{' '}
              <strong>Next.js</strong> — crafting fast, responsive interfaces backed by clean APIs and
              relational or document databases. Alongside full-stack development, I&apos;m actively
              learning <strong>Machine Learning and AI</strong>, training predictive models and
              shipping explainable ML applications in Python.
            </Reveal>
            <Reveal as="p" delay={180}>
              My engineering work is grounded in a strong foundation in{' '}
              <strong>DSA and C++</strong> through competitive programming on Codeforces, CodeChef,
              and LeetCode. As the <strong>Programming Lead of GUCC</strong>, I enjoy shipping
              real-world products, mentoring fellow students, and growing toward my goal of becoming a{' '}
              <strong>Software Engineer specializing in scalable full-stack systems and AI-driven solutions</strong>.
            </Reveal>
            <Reveal as="p" delay={220}>
              Outside of programming, I enjoy playing and watching football, strategizing over chess matches, exploring tech articles, and mentoring fellow students in problem solving. I bring a curious, persistent, and collaborative spirit to every team and project I undertake.
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

