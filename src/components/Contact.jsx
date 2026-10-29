import { useState } from 'react'
import { FaEnvelope, FaWhatsapp, FaPhone, FaCopy, FaCheck, FaFileLines } from 'react-icons/fa6'
import { profile } from '../data.js'
import { useMagnetic } from '../hooks/motion.js'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import SocialLinks from './SocialLinks.jsx'
import Garland from './Garland.jsx'

export default function Contact() {
  const [copied, setCopied] = useState(null)
  const mail = useMagnetic(0.2)
  const phone = useMagnetic(0.2)

  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(key)
      setTimeout(() => setCopied(null), 2200)
    } catch {
      // fallback
    }
  }

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <SectionHead
          title="Let's"
          accent="talk"
          sub="Internships, full-time engineering roles, a hard problem or just a hello. Reach me directly via email, phone, or WhatsApp."
        />
        <Reveal variant="scale" className="contact-board">
          <Garland className="cb-garland" animated />
          <div className="cb-inner">
            <div className="cb-channels">
              <div className="cb-channel">
                <span className="cb-channel-label">Email</span>
                <div className="cb-channel-row">
                  <FaEnvelope aria-hidden="true" className="cb-icon" />
                  <a ref={mail} href={`mailto:${profile.email}`} className="cb-address">
                    {profile.email}
                  </a>
                  <button
                    type="button"
                    className="cb-copy-btn"
                    onClick={() => copy(profile.email, 'email')}
                    aria-label="Copy email address"
                    title="Copy email"
                  >
                    {copied === 'email' ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
                    <span className="cb-copy-text">{copied === 'email' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div className="cb-channel">
                <span className="cb-channel-label">Phone & WhatsApp</span>
                <div className="cb-channel-row">
                  <FaPhone aria-hidden="true" className="cb-icon" />
                  <a ref={phone} href={`tel:${profile.phone}`} className="cb-address">
                    {profile.phone}
                  </a>
                  <button
                    type="button"
                    className="cb-copy-btn"
                    onClick={() => copy(profile.phone, 'phone')}
                    aria-label="Copy phone number"
                    title="Copy phone"
                  >
                    {copied === 'phone' ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
                    <span className="cb-copy-text">{copied === 'phone' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="cb-actions">
              <a className="btn btn-sun" href={`mailto:${profile.email}`}>
                <FaEnvelope aria-hidden="true" /> Send an email
              </a>
              <a className="btn btn-wa" href={profile.whatsapp} target="_blank" rel="noreferrer">
                <FaWhatsapp aria-hidden="true" /> WhatsApp
              </a>
              <a className="btn btn-line" href={`tel:${profile.phone}`}>
                <FaPhone aria-hidden="true" /> Call directly
              </a>
              <a className="btn btn-line" href={profile.resume} target="_blank" rel="noreferrer">
                <FaFileLines aria-hidden="true" /> View Resume
              </a>
            </div>

            <SocialLinks labels className="contact-socials" />
          </div>
          <Garland className="cb-garland" animated />
        </Reveal>
      </div>
    </section>
  )
}
