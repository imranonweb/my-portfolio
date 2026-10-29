import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaXmark } from 'react-icons/fa6'
import { navLinks, profile } from '../data.js'
import Lights from './Lights.jsx'
import Wheel from './Wheel.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // highlight the section currently under the header
  useEffect(() => {
    if (!onHome) return setActive('')
    const targets = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [onHome])

  const close = () => setOpen(false)

  return (
    <>
      <div className="road" aria-hidden="true">
        <div className="road-fill" />
        <Wheel size={22} className="road-wheel" />
      </div>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="bar">
          <Link to="/" className="brand" onClick={close} aria-label={`${profile.name}, home`}>
            <img src={profile.photo} alt="" width="38" height="38" />
            <span className="brand-code">&lt;<span>{profile.handle}</span> /&gt;</span>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((l) => (
              <Link key={l.id} to={`/#${l.id}`} className={active === l.id ? 'is-active' : ''}>
                {l.label}
              </Link>
            ))}
          </nav>

          <a className="nav-resume" href={profile.resume} target="_blank" rel="noreferrer">
            Resume
          </a>

          <button
            className="burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaXmark /> : <><i /><i /><i /></>}
          </button>
        </div>
        <Lights />
      </header>

      <div id="mobile-menu" className={`sheet ${open ? 'open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {navLinks.map((l, i) => (
            <Link key={l.id} to={`/#${l.id}`} onClick={close} style={{ '--i': i }} tabIndex={open ? 0 : -1}>
              {l.label}
            </Link>
          ))}
          <a href={profile.resume} target="_blank" rel="noreferrer" className="sheet-cta" style={{ '--i': navLinks.length }} tabIndex={open ? 0 : -1}>
            View Resume
          </a>
        </nav>
      </div>
    </>
  )
}

