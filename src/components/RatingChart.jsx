import { useMemo, useRef, useState } from 'react'
import { TIERS, nextTier } from '../lib/platforms.js'
import { useInView } from '../hooks/motion.js'

const W = 900
const H = 340
const M = { l: 54, r: 26, t: 22, b: 40 }
const fmtDate = (t, long) =>
  new Date(t).toLocaleDateString('en-GB', long ? { day: 'numeric', month: 'short', year: 'numeric' } : { month: 'short', year: '2-digit' })

export default function RatingChart({ platform, data }) {
  const history = useMemo(() => [...(data.history || [])].sort((a, b) => a.t - b.t), [data])
  const [ref, seen] = useInView({ threshold: 0.25 })
  const [hover, setHover] = useState(null)
  const svgRef = useRef(null)
  const active = hover ?? history.length - 1

  const model = useMemo(() => {
    if (!history.length) return null
    const ratings = history.map((h) => h.rating)
    const minR = Math.min(...ratings)
    const maxR = Math.max(...ratings)
    const tiers = TIERS[platform.key]
    const next = tiers ? nextTier(tiers, data.rating) : null
    const topWanted = next && next.min - maxR <= 450 ? next.min : maxR
    const lo = Math.floor((minR - 90) / 100) * 100
    const hi = Math.ceil((topWanted + 70) / 100) * 100
    const t0 = history[0].t
    const t1 = history[history.length - 1].t
    const pad = history.length === 1 ? 30 * 864e5 : Math.max((t1 - t0) * 0.05, 5 * 864e5)
    const x = (t) => M.l + ((t - (t0 - pad)) / (t1 - t0 + pad * 2)) * (W - M.l - M.r)
    const y = (r) => H - M.b - ((r - lo) / (hi - lo)) * (H - M.t - M.b)
    const pts = history.map((h) => ({ ...h, cx: x(h.t), cy: y(h.rating) }))
    const step = hi - lo > 700 ? 200 : 100
    const grid = []
    for (let v = lo; v <= hi; v += step) grid.push(v)
    const ticks = Array.from({ length: 5 }, (_, i) => t0 - pad + ((t1 - t0 + pad * 2) * i) / 4)
    const line = pts.map((p, i) => `${i ? 'L' : 'M'}${p.cx.toFixed(1)} ${p.cy.toFixed(1)}`).join(' ')
    const area = `${line} L${pts[pts.length - 1].cx.toFixed(1)} ${H - M.b} L${pts[0].cx.toFixed(1)} ${H - M.b} Z`
    return { pts, grid, ticks, line, area, y, x, next: next && next.min <= hi ? next : null }
  }, [history, platform.key, data.rating])

  if (!model) {
    return <p className="chart-empty">No rated contests yet.</p>
  }

  const onMove = (e) => {
    const box = svgRef.current.getBoundingClientRect()
    const vx = ((e.clientX - box.left) / box.width) * W
    let best = 0
    model.pts.forEach((p, i) => {
      if (Math.abs(p.cx - vx) < Math.abs(model.pts[best].cx - vx)) best = i
    })
    setHover(best)
  }
  const onKey = (e) => {
    if (e.key === 'ArrowLeft') setHover(Math.max(0, active - 1))
    if (e.key === 'ArrowRight') setHover(Math.min(model.pts.length - 1, active + 1))
  }

  const cur = model.pts[active]
  const prevR = cur.prev ?? model.pts[active - 1]?.rating
  const delta = prevR == null ? null : cur.rating - prevR

  return (
    <figure className={`chart ${seen ? 'in' : ''}`} ref={ref} style={{ '--c': platform.color }}>
      <figcaption className="readout" aria-live="polite">
        <span className="ro-name">{cur.name}</span>
        <span className="ro-meta">
          <b>{cur.rating}</b>
          {delta != null && delta !== 0 && (
            <em className={delta > 0 ? 'up' : 'down'}>
              {delta > 0 ? '▲' : '▼'} {Math.abs(delta)}
            </em>
          )}
          <span>rank {new Intl.NumberFormat('en-US').format(cur.rank)}</span>
          <span>{fmtDate(cur.t, true)}</span>
        </span>
      </figcaption>

      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`${platform.name} rating history across ${history.length} contests, from ${history[0].rating} to ${data.rating}`}
        tabIndex={0}
        onPointerMove={onMove}
        onPointerLeave={() => setHover(null)}
        onKeyDown={onKey}
        onBlur={() => setHover(null)}
      >
        <defs>
          <linearGradient id={`fill-${platform.key}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={platform.color} stopOpacity="0.38" />
            <stop offset="1" stopColor={platform.color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {model.grid.map((v) => (
          <g key={v}>
            <line x1={M.l} x2={W - M.r} y1={model.y(v)} y2={model.y(v)} className="grid" />
            <text x={M.l - 10} y={model.y(v) + 4} textAnchor="end" className="axis">{v}</text>
          </g>
        ))}
        {model.ticks.map((t, i) => (
          <text key={i} x={model.x(t)} y={H - 12} textAnchor="middle" className="axis">{fmtDate(t)}</text>
        ))}

        {model.next && (
          <g className="goal">
            <line x1={M.l} x2={W - M.r} y1={model.y(model.next.min)} y2={model.y(model.next.min)} />
            <text x={W - M.r} y={model.y(model.next.min) - 8} textAnchor="end">
              next tier · {model.next.name} {model.next.min}
            </text>
          </g>
        )}

        <path d={model.area} className="area" fill={`url(#fill-${platform.key})`} />
        <line x1={cur.cx} x2={cur.cx} y1={M.t} y2={H - M.b} className="guide" />
        <path d={model.line} className="stroke" pathLength="1" />

        {model.pts.map((p, i) => (
          <circle
            key={p.t}
            cx={p.cx}
            cy={p.cy}
            r={i === active ? 7 : 4.2}
            className={`dot ${i === active ? 'on' : ''}`}
            style={{ '--i': i }}
          />
        ))}
      </svg>
      <table className="sr-only">
        <caption>{platform.name} contest history</caption>
        <thead><tr><th>Contest</th><th>Rating</th><th>Rank</th></tr></thead>
        <tbody>
          {history.map((h) => (
            <tr key={h.t}><td>{h.name}</td><td>{h.rating}</td><td>{h.rank}</td></tr>
          ))}
        </tbody>
      </table>
    </figure>
  )
}

