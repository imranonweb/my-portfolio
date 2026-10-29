import { useEffect, useState } from 'react'
import { FaDownload, FaArrowDown, FaFileLines } from 'react-icons/fa6'
import { profile, roles } from '../data.js'
import { prefersReducedMotion } from '../hooks/motion.js'
import SocialLinks from './SocialLinks.jsx'
import Wheel from './Wheel.jsx'

function Rotator() {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (prefersReducedMotion()) return
    const t = setInterval(() => setI((n) => (n + 1) % roles.length), 2800)
    return () => clearInterval(t)
  }, [])
  return (
    <p className="rotator" aria-live="off">
      <span className="rot-static">Building </span>
      <span className="rot-slot">
        <span key={i} className="rot-word">{roles[i]}</span>
      </span>
    </p>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 aria-label={profile.name}>
            {['Md. Al', 'Imran', 'Emon'].map((w, i) => (
              <span className="hw" key={w} aria-hidden="true">
                <span style={{ '--i': i }}>{w}</span>
              </span>
            ))}
          </h1>
          <p className="designation">{profile.headline}</p>
          <Rotator />
          <p className="lead">
            CSE student at Green University of Bangladesh 3building
            full-stack web applications with React, Next.js, Node.js, and SQL/NoSQL databases,
            alongside applied machine-learning projects and a problem-solving foundation in
            competitive programming.
          </p>
          <div className="cta-row">
            <a className="btn btn-sun" href="#projects">
              View Projects <FaArrowDown aria-hidden="true" />
            </a>
            <a className="btn btn-line" href={profile.resume} target="_blank" rel="noreferrer">
              <FaFileLines aria-hidden="true" /> Resume
            </a>
            <a
              className="btn btn-text"
              href={profile.resumeDownload}
              target="_blank"
              rel="noreferrer"
              aria-label="Download resume PDF"
            >
              <FaDownload aria-hidden="true" /> Download PDF
            </a>
          </div>
          <SocialLinks className="hero-socials" />
        </div>

        <div className="plate" aria-hidden="false">
          <Wheel size={500} className="plate-wheel" />
          <div className="plate-back pb-1" />
          <div className="plate-back pb-2" />
          <figure className="arch">
            <img
              src={profile.photo}
              alt={`${profile.name}, ${profile.designation}`}
              width="900"
              height="1203"
              fetchPriority="high"
            />
          </figure>
          <span className="sticker st-1">Full-Stack</span>
          <span className="sticker st-2">Applied ML</span>
          <span className="sticker st-3">DSA · C++</span>
          <p className="ribbon lang-bn" lang="bn">{profile.bangla}</p>
          <p className="status"><i /> Open to opportunities</p>
        </div>
      </div>
    </section>
  )
}
