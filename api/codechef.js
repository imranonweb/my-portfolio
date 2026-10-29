// Vercel serverless function: CodeChef has no public API, so we read the public
// profile page on the server and return JSON. Cached at the edge for 30 minutes.
import { parseCodechef, HANDLE } from '../src/lib/platforms.js'

export default async function handler(req, res) {
  try {
    const page = await fetch(`https://www.codechef.com/users/${HANDLE}`, {
      headers: { 'user-agent': 'Mozilla/5.0' },
    })
    if (!page.ok) throw new Error(`codechef ${page.status}`)
    const data = parseCodechef(await page.text())
    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=86400')
    res.status(200).json(data)
  } catch (e) {
    res.status(502).json({ error: String(e.message || e) })
  }
}

