import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import snapshot from '../snapshot.json'
import { fetchCodeforces, fetchCodechef, fetchLeetCode } from '../lib/platforms.js'

const KEY = 'portfolio-stats-v2'
const TTL = 30 * 60 * 1000
const sources = { codeforces: fetchCodeforces, codechef: fetchCodechef, leetcode: fetchLeetCode }

const StatsContext = createContext(null)

function initial() {
  let cache = {}
  try {
    cache = JSON.parse(localStorage.getItem(KEY) || '{}')
  } catch {
    /* ignore */
  }
  const snapAt = Date.parse(snapshot.generatedAt)
  const out = {}
  for (const k of Object.keys(sources)) {
    const c = cache[k]
    if (c && Date.now() - c.at < TTL) out[k] = { data: c.data, status: 'live', at: c.at }
    else out[k] = { data: c?.data ?? snapshot[k], status: 'syncing', at: c?.at ?? snapAt, fromSnapshot: !c }
  }
  return out
}

export function StatsProvider({ children }) {
  const [state, setState] = useState(initial)

  useEffect(() => {
    let alive = true
    for (const [key, load] of Object.entries(sources)) {
      if (state[key].status === 'live') continue
      load()
        .then((data) => {
          if (!alive) return
          const at = Date.now()
          setState((s) => ({ ...s, [key]: { data, status: 'live', at } }))
          try {
            const cache = JSON.parse(localStorage.getItem(KEY) || '{}')
            cache[key] = { data, at }
            localStorage.setItem(KEY, JSON.stringify(cache))
          } catch {
            /* storage unavailable */
          }
        })
        .catch(() => {
          if (!alive) return
          setState((s) => ({ ...s, [key]: { ...s[key], status: 'snapshot' } }))
        })
    }
    return () => {
      alive = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value = useMemo(() => ({ stats: state, generatedAt: snapshot.generatedAt }), [state])
  return <StatsContext.Provider value={value}>{children}</StatsContext.Provider>
}

export function useStats() {
  return useContext(StatsContext)
}

