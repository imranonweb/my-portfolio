import { useInView, useCountUp } from '../hooks/motion.js'
import { useStats } from '../hooks/useStats.jsx'
import { platforms } from '../data.js'
import { TIERS, nextTier } from '../lib/platforms.js'
import { SiCodeforces, SiCodechef, SiLeetcode } from 'react-icons/si'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

const icons = { codeforces: SiCodeforces, codechef: SiCodechef, leetcode: SiLeetcode }
const fmt = (n) => (n == null ? '—' : new Intl.NumberFormat('en-US').format(n))

export function lastDelta(history = []) {
  if (!history.length) return null
  const last = history[history.length - 1]
  const prev = last.prev ?? history[history.length - 2]?.rating
  return prev == null ? null : last.rating - prev
}

export function tierColor(key, data, fallback) {
  const tiers = TIERS[key]
  if (!tiers) return fallback
  return [...tiers].reverse().find((t) => data.rating >= t.min)?.color ?? fallback
}

function syncLabel(stats, generatedAt) {
  const all = Object.values(stats)
  if (all.every((s) => s.status === 'live')) return { tone: 'live', text: 'Live' }
  if (all.some((s) => s.status === 'syncing')) return { tone: 'sync', text: 'Syncing…' }
  const d = new Date(generatedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
  return { tone: 'snap', text: `Saved ${d}` }
}

function Row({ p, entry, seen, index }) {
  const data = entry.data
  const Icon = icons[p.key]
  const rating = useCountUp(data.rating, seen, 1500)
  const delta = lastDelta(data.history)
  const tiers = TIERS[p.key]
  const next = tiers ? nextTier(tiers, data.rating) : null
  const color = tierColor(p.key, data, p.color)

  let standing = data.title
  let note = next ? `${next.min - data.rating} to ${next.name}` : null
  if (p.key === 'codechef') {
    standing = `${data.title}${data.division ? ` · Div ${data.division}` : ''}`
    note = data.countryRank ? `#${fmt(data.countryRank)} in Bangladesh` : note
  }
  if (p.key === 'leetcode') note = data.breakdown ? `${data.breakdown.easy}E · ${data.breakdown.medium}M · ${data.breakdown.hard}H` : null

  return (
    <div role="row" className="st-row" style={{ '--c': p.color, '--i': index }}>
      <div role="cell" className="st-plat">
        <span className="st-icon" aria-hidden="true"><Icon /></span>
        <a href={p.url} target="_blank" rel="noreferrer">
          {p.name} <FaArrowUpRightFromSquare aria-hidden="true" />
        </a>
      </div>
      <div role="cell" className="st-rating" data-label="Rating">
        <strong style={{ color }}>{rating || '—'}</strong>
        {delta != null && delta !== 0 && (
          <em className={delta > 0 ? 'up' : 'down'} title="Change in the latest contest">
            {delta > 0 ? '▲' : '▼'} {Math.abs(delta)}
          </em>
        )}
      </div>
      <div role="cell" data-label="Peak">{fmt(data.peak)}</div>
      <div role="cell" className="st-standing" data-label="Standing">
        <span><i style={{ background: color }} />{standing}</span>
        {note && <small>{note}</small>}
      </div>
      <div role="cell" data-label="Contests">{fmt(data.contests)}</div>
      <div role="cell" data-label="Solved">{fmt(data.solved)}</div>
    </div>
  )
}

export default function Standings() {
  const { stats, generatedAt } = useStats()
  const [ref, seen] = useInView({ threshold: 0.1 })
  const sync = syncLabel(stats, generatedAt)

  return (
    <div className={`wrap standings ${seen ? 'in' : ''}`} ref={ref}>
      <div className="st-head">
        <h2>Live contest standings</h2>
        <p className={`sync sync-${sync.tone}`}><i />{sync.text}</p>
      </div>
      <div role="table" aria-label="Competitive programming ratings" className="st-table">
        <div role="row" className="st-row st-cols">
          <div role="columnheader">Platform</div>
          <div role="columnheader">Rating</div>
          <div role="columnheader">Peak</div>
          <div role="columnheader">Standing</div>
          <div role="columnheader">Contests</div>
          <div role="columnheader">Solved</div>
        </div>
        {platforms.map((p, i) => (
          <Row key={p.key} p={p} entry={stats[p.key]} seen={seen} index={i} />
        ))}
      </div>
    </div>
  )
}

