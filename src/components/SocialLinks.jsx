import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { SiCodeforces, SiCodechef, SiLeetcode } from 'react-icons/si'
import { socials } from '../data.js'

const icons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  codeforces: SiCodeforces,
  codechef: SiCodechef,
  leetcode: SiLeetcode,
}

export default function SocialLinks({ labels = false, className = '' }) {
  return (
    <ul className={`socials ${labels ? 'with-labels' : ''} ${className}`.trim()}>
      {socials.map((s, i) => {
        const Icon = icons[s.icon]
        return (
          <li key={s.name} style={{ '--i': i }}>
            <a href={s.url} target="_blank" rel="noreferrer" aria-label={s.name} title={s.name}>
              <Icon aria-hidden="true" />
              {labels && <span>{s.name}</span>}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

