/**
 * Refreshes src/snapshot.json (the offline fallback for the live ratings).
 * Runs automatically before `npm run build`. Never fails the build: if a platform
 * is unreachable, its previous snapshot is kept.
 */
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { fetchCodeforces, fetchLeetCode, parseCodechef, HANDLE } from '../src/lib/platforms.js'

const file = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'snapshot.json')

let snap = {}
try {
  snap = JSON.parse(await readFile(file, 'utf8'))
} catch {
  /* first run */
}

async function codechef() {
  const res = await fetch(`https://www.codechef.com/users/${HANDLE}`, {
    headers: { 'user-agent': 'Mozilla/5.0' },
    signal: AbortSignal.timeout(25000),
  })
  if (!res.ok) throw new Error(String(res.status))
  return parseCodechef(await res.text())
}

const jobs = { codeforces: fetchCodeforces, leetcode: fetchLeetCode, codechef }
for (const [key, run] of Object.entries(jobs)) {
  try {
    snap[key] = await run(HANDLE)
    console.log(`snapshot: ${key} ok (rating ${snap[key].rating})`)
  } catch (e) {
    console.warn(`snapshot: ${key} kept previous (${e.message})`)
  }
}
snap.generatedAt = new Date().toISOString()
await writeFile(file, JSON.stringify(snap, null, 2) + '\n')
process.exit(0)

