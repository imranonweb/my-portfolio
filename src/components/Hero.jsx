import { useEffect, useState } from 'react'
import { FaDownload, FaArrowDown, FaFileLines } from 'react-icons/fa6'
import { profile, roles } from '../data.js'
import { prefersReducedMotion, useMagnetic } from '../hooks/motion.js'
import SocialLinks from './SocialLinks.jsx'
import Wheel from './Wheel.jsx'
import Standings from './Standings.jsx'

function Rotator() {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (prefersReducedMotion()) return
    const t = setInterval(() => setI((n) => (n + 1) % roles.length), 2600)
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
  const primary = useMagnetic(0.22)

  const glow = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--px', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--py', `${e.clientY - r.top}px`)
  }

  return (
    <section id="home" className="hero" onPointerMove={glow}>
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 aria-label={profile.name}>
            {['Md. Al', 'Imran', 'Emon'].map((w, i) => (
              <span className="hw" key={w} aria-hidden="true">
                <span style={{ '--i': i }}>{w}</span>
              </span>
            ))}
          </h1>
          <p className="designation">{profile.designation}</p>
          <Rotator />
          <p className="lead">
            CSE student and competitive programmer who ships full-stack products and keeps the
            algorithms sharp. Scroll down for my live contest ratings and the projects behind them.
          </p>
          <div className="cta-row">
            <a ref={primary} className="btn btn-sun" href={profile.resume} target="_blank" rel="noreferrer">
              <FaFileLines aria-hidden="true" /> View Resume
            </a>
            <a className="btn btn-line" href={profile.resumeDownload} target="_blank" rel="noreferrer">
              <FaDownload aria-hidden="true" /> Download
            </a>
            <a className="btn btn-text" href="#projects">
              See projects <FaArrowDown aria-hidden="true" />
            </a>
          </div>
          <SocialLinks className="hero-socials" />
        </div>

        <div className="plate" aria-hidden="false">
          <Wheel size={520} spin className="plate-wheel" />
          <div className="plate-back pb-1" />
          <div className="plate-back pb-2" />
          <figure className="arch">
            <img src={profile.photo} alt={`${profile.name}, ${profile.designation}`} width="900" height="1203" fetchPriority="high" />
          </figure>
          <span className="sticker st-1">MERN</span>
          <span className="sticker st-2">C++ · DSA</span>
          <span className="sticker st-3">AI / ML</span>
          <p className="ribbon lang-bn" lang="bn">{profile.bangla}</p>
          <p className="status"><i /> Open to work</p>
        </div>
      </div>

      <Standings />
    </section>
  )
}

