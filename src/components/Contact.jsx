import { useState } from 'react'
import { FaEnvelope, FaWhatsapp, FaPhone, FaCopy, FaCheck, FaFileLines } from 'react-icons/fa6'
import { profile } from '../data.js'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import SocialLinks from './SocialLinks.jsx'
import Garland from './Garland.jsx'

export default function Contact() {
  const [copied, setCopied] = useState(null)

  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(key)
      setTimeout(() => setCopied(null), 2200)
    } catch {
      if (key === 'email') window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <SectionHead
          title="Get in"
          accent="touch"
          sub="Open to software engineering and machine-learning internships, junior developer roles, and project collaborations."
        />
        <Reveal variant="scale" className="contact-board">
          <Garland className="cb-garland" animated />
          <div className="cb-inner">
            <div className="cb-primary">
              <span className="cb-channel-label">Primary Email</span>
              <div className="cb-mail">
                <FaEnvelope aria-hidden="true" className="cb-icon" />
                <a href={`mailto:${profile.email}`} className="cb-address">
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="cb-actions">
              <a className="btn btn-sun" href={`mailto:${profile.email}`}>
                <FaEnvelope aria-hidden="true" /> Send Email
              </a>
              <button
                type="button"
                className="btn btn-line"
                onClick={() => copy(profile.email, 'email')}
                aria-live="polite"
              >
                {copied === 'email' ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
                {copied === 'email' ? 'Copied email' : 'Copy email'}
              </button>
              <a className="btn btn-wa" href={profile.whatsapp} target="_blank" rel="noreferrer">
                <FaWhatsapp aria-hidden="true" /> WhatsApp
              </a>
              <a className="btn btn-line" href={profile.resume} target="_blank" rel="noreferrer">
                <FaFileLines aria-hidden="true" /> Resume
              </a>
            </div>

            <div className="cb-secondary">
              <span className="cb-phone-note">
                <FaPhone aria-hidden="true" /> Prefer a direct call?{' '}
                <a href={`tel:${profile.phone}`} className="cb-phone-link">
                  {profile.phoneDisplay}
                </a>
              </span>
              <button
                type="button"
                className="cb-copy-inline"
                onClick={() => copy(profile.phone, 'phone')}
                aria-label="Copy phone number"
              >
                {copied === 'phone' ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
                <span>{copied === 'phone' ? 'Copied' : 'Copy number'}</span>
              </button>
            </div>

            <SocialLinks labels className="contact-socials" />
          </div>
          <Garland className="cb-garland" animated />
        </Reveal>
      </div>
    </section>
  )
}
