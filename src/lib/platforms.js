/**
 * Coding-platform data sources. Pure ES module: runs in the browser (live ratings)
 * and in Node (scripts/update-snapshot.mjs, api/codechef.js).
 */

export const HANDLE = 'imranonweb'

const CF_TIERS = [
  { min: 0, name: 'Newbie', color: '#a3a3a3' },
  { min: 1200, name: 'Pupil', color: '#3ccf5a' },
  { min: 1400, name: 'Specialist', color: '#2ad4c4' },
  { min: 1600, name: 'Expert', color: '#7c9bff' },
  { min: 1900, name: 'Candidate Master', color: '#d27cff' },
  { min: 2100, name: 'Master', color: '#ffa534' },
  { min: 2400, name: 'Grandmaster', color: '#ff5a5a' },
]
const CC_TIERS = [
  { min: 0, name: '1★', color: '#a3a3a3' },
  { min: 1400, name: '2★', color: '#3ccf5a' },
  { min: 1600, name: '3★', color: '#7c9bff' },
  { min: 1800, name: '4★', color: '#d27cff' },
  { min: 2000, name: '5★', color: '#ffd23f' },
  { min: 2200, name: '6★', color: '#ff9a3c' },
  { min: 2500, name: '7★', color: '#ff5a5a' },
]

export function nextTier(tiers, rating) {
  return tiers.find((t) => t.min > rating) || null
}
export const TIERS = { codeforces: CF_TIERS, codechef: CC_TIERS }

async function getJson(url, { timeout = 9000 } = {}) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), timeout)
  try {
    const res = await fetch(url, { signal: ctrl.signal })
    if (!res.ok) throw new Error(`${res.status} ${url}`)
    return await res.json()
  } finally {
    clearTimeout(timer)
  }
}

/* ───────────── Codeforces (public API, CORS-enabled) ───────────── */
export async function fetchCodeforces(handle = HANDLE) {
  const base = 'https://codeforces.com/api'
  const info = await getJson(`${base}/user.info?handles=${handle}`)
  if (info.status !== 'OK' || !info.result?.length) throw new Error('codeforces api')
  const u = info.result[0]
  const title = (u.rank || 'unrated').replace(/\b\w/g, (c) => c.toUpperCase())
  return {
    rating: u.rating ?? 0,
    peak: u.maxRating ?? u.rating ?? 0,
    title,
    peakTitle: (u.maxRank || '').replace(/\b\w/g, (c) => c.toUpperCase()),
  }
}

/* ───────────── LeetCode (community API, CORS-enabled) ───────────── */
export async function fetchLeetCode(handle = HANDLE) {
  const base = 'https://alfa-leetcode-api.onrender.com'
  const contest = await getJson(`${base}/${handle}/contest`, { timeout: 15000 })
  const history = (contest.contestParticipation || [])
    .filter((c) => c.attended)
    .map((c) => ({
      t: c.contest.startTime * 1000,
      rating: Math.round(c.rating),
    }))
  const rating = Math.round(contest.contestRating || 0)
  return {
    rating,
    peak: history.length ? Math.max(...history.map((h) => h.rating)) : rating,
    title: contest.contestTopPercentage ? `Top ${Number(contest.contestTopPercentage).toFixed(0)}%` : 'Rated',
    contests: contest.contestAttend ?? history.length,
  }
}

/* ───────────── CodeChef (no API: parse the public profile page) ───────────── */
function matchJsonArray(html, anchor) {
  const start = html.indexOf(anchor)
  if (start < 0) return null
  const open = html.indexOf('[', start)
  let depth = 0
  for (let i = open; i < html.length; i++) {
    if (html[i] === '[') depth++
    else if (html[i] === ']' && --depth === 0) {
      try {
        return JSON.parse(html.slice(open, i + 1))
      } catch {
        return null
      }
    }
  }
  return null
}

export function parseCodechef(html) {
  const num = (re) => {
    const m = html.match(re)
    return m ? Number(m[1]) : null
  }
  const rating = num(/<div class="rating-number">\s*(\d+)/)
  if (rating == null) throw new Error('codechef: rating not found')
  const stars = (html.match(/<div class="rating-star">([\s\S]*?)<\/div>/)?.[1].match(/&#9733;/g) || []).length
  const rawHistory = matchJsonArray(html, '"date_versus_rating"') || []
  const history = rawHistory.map((r, i) => ({
    t: Date.UTC(+r.getyear, +r.getmonth - 1, +r.getday),
    rating: +r.rating,
    prev: i ? +rawHistory[i - 1].rating : null,
    name: r.name,
    rank: +r.rank,
  }))
  return {
    rating,
    peak: num(/\(Highest Rating (\d+)\)/) ?? rating,
    title: stars ? `${stars}★` : 'Unrated',
    division: num(/<div>\(Div (\d)\)<\/div>/),
    contests: num(/No\. of Contests Participated:\s*<b>(\d+)/) ?? history.length,
    solved: num(/Total Problems Solved:\s*(\d+)/),
    globalRank: num(/<strong>\s*(\d+)\s*<\/strong>\s*<\/a>\s*Global Rank/),
    countryRank: num(/<strong>\s*(\d+)\s*<\/strong>\s*<\/a>\s*Country Rank/),
    history,
  }
}

/** Browser path: serverless route first, then a CORS proxy. */
export async function fetchCodechef(handle = HANDLE) {
  try {
    const data = await getJson('/api/codechef')
    if (data && typeof data.rating === 'number') return data
  } catch {
    /* no serverless route on this host */
  }
  const url = `https://www.codechef.com/users/${handle}`
  const res = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`, {
    signal: AbortSignal.timeout(12000),
  })
  if (!res.ok) throw new Error('codechef proxy')
  return parseCodechef(await res.text())
}

