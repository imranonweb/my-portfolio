import { useEffect } from 'react'

/** Marks the document ready immediately on mount so entrance motion runs without blocking initial paint. */
export default function Preloader() {
  useEffect(() => {
    document.documentElement.dataset.ready = '1'
  }, [])
  return null
}
