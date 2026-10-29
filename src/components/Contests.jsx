import { useState } from 'react'
import { platforms } from '../data.js'
import { useStats } from '../hooks/useStats.jsx'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import RatingChart from './RatingChart.jsx'
import { tierColor } from './Standings.jsx'

const fmt = (n) => (n == null ? '—' : new Intl.NumberFormat('en-US').format(n))

function Recent({ history, color }) {
  const list = [...history].sort((a, b) => b.t - a.t).slice(0, 5)
  return (
    <ol className="recent" style={{ '--c': color }}>
      {list.map((h, i) => {
        const prev = h.prev ?? history[history.findIndex((x) => x.t === h.t) - 1]?.rating
        const d = prev == null ? null : h.rating - prev
        return (
          <li key={h.t} style={{ '--i': i }}>
            <span className="r-name">{h.name}</span>
            <span className="r-rank">rank {fmt(h.rank)}</span>
            <b>{h.rating}</b>
            {d != null && d !== 0 && <em className={d > 0 ? 'up' : 'down'}>{d > 0 ? '+' : '−'}{Math.abs(d)}</em>}
          </li>
        )
      })}
    </ol>
  )
}

export default function Contests() {
  const { stats } = useStats()
  const [key, setKey] = useState('codeforces')
  const p = platforms.find((x) => x.key === key)
  const data = stats[key].data
  const color = tierColor(key, data, p.color)

  return (
    <section id="contests" className="section section-raised">
      <div className="wrap">
        <SectionHead
          title="Contest"
          accent="history"
          sub="Every rated contest from the platforms themselves, not a screenshot. Hover or use the arrow keys to read a contest."
        />
        <Reveal variant="up" className="contest-panel">
          <div className="tabs" role="tablist" aria-label="Platform">
            {platforms.map((x) => (
              <button
                key={x.key}
                role="tab"
                aria-selected={key === x.key}
                className={key === x.key ? 'on' : ''}
                style={{ '--c': x.color }}
                onClick={() => setKey(x.key)}
              >
                {x.name}
              </button>
            ))}
          </div>
          <div className="contest-body">
            <RatingChart key={key} platform={{ ...p, color }} data={data} />
            <aside>
              <h3>Recent contests</h3>
              <Recent key={key} history={data.history || []} color={color} />
              <a className="profile-link" href={p.url} target="_blank" rel="noreferrer">
                Open {p.name} profile →
              </a>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

