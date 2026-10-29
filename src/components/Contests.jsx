import { platforms, profile } from '../data.js'
import { useStats } from '../hooks/useStats.jsx'
import { TIERS } from '../lib/platforms.js'
import { SiCodeforces, SiCodechef, SiLeetcode } from 'react-icons/si'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'

const icons = { codeforces: SiCodeforces, codechef: SiCodechef, leetcode: SiLeetcode }
const fmt = (n) => (n == null ? '—' : new Intl.NumberFormat('en-US').format(n))

function tierColor(key, data, fallback) {
  const tiers = TIERS[key]
  if (!tiers) return fallback
  return [...tiers].reverse().find((t) => data.rating >= t.min)?.color ?? fallback
}

function formatSourceStatus(entry, generatedAt) {
  if (entry.status === 'live') {
    return { tone: 'live', label: 'Live rating' }
  }
  if (entry.status === 'syncing') {
    return { tone: 'sync', label: 'Checking API…' }
  }
  const ts = entry.at || Date.parse(generatedAt)
  const dateStr = ts
    ? new Date(ts).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    : 'saved'
  if (entry.status === 'cached') {
    return { tone: 'cached', label: `Cached (${dateStr})` }
  }
  return { tone: 'snap', label: `Last updated ${dateStr}` }
}

export default function Contests() {
  const { stats, generatedAt } = useStats()

  return (
    <section id="contests" className="section">
      <div id="cp" className="wrap">
        <SectionHead
          title="Competitive"
          accent="programming"
          sub="A problem-solving foundation I continue to value — keeping algorithmic thinking, C++ fluency, and edge-case discipline sharp."
        />

        <div className="cp-grid">
          {platforms.map((p, i) => {
            const entry = stats[p.key]
            const data = entry.data
            const Icon = icons[p.key]
            const color = tierColor(p.key, data, p.color)
            const source = formatSourceStatus(entry, generatedAt)
            const standing =
              p.key === 'codechef' && data.division
                ? `${data.title} · Div ${data.division}`
                : data.title

            return (
              <Reveal
                key={p.key}
                variant="up"
                delay={i * 60}
                className="cp-card"
                style={{ '--c': p.color }}
              >
                <div className="cp-card-top">
                  <div className="cp-plat">
                    <span className="st-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <div>
                      <h3>{p.name}</h3>
                      <span className="cp-handle">@{profile.handle}</span>
                    </div>
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="cp-link"
                    aria-label={`${p.name} profile for ${profile.handle}`}
                  >
                    Profile <FaArrowUpRightFromSquare aria-hidden="true" />
                  </a>
                </div>

                <div className="cp-metrics">
                  <div className="cp-rating-block">
                    <span className="cp-label">Current Rating</span>
                    <strong className="cp-rating" style={{ color }}>
                      {fmt(data.rating)}
                    </strong>
                  </div>
                  <div className="cp-meta-block">
                    <span className="cp-standing">
                      <i style={{ background: color }} aria-hidden="true" />
                      {standing}
                    </span>
                    {data.peak != null && (
                      <span className="cp-peak">Peak: {fmt(data.peak)}</span>
                    )}
                  </div>
                </div>

                <div className="cp-foot">
                  <span className={`cp-status cp-status-${source.tone}`}>
                    <i aria-hidden="true" />
                    {source.label}
                  </span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
