import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useScrollVars } from './hooks/motion.js'
import { StatsProvider } from './hooks/useStats.jsx'
import Preloader from './components/Preloader.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // wait a frame so the target section has mounted after a route change
      const id = hash.slice(1)
      const go = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      const t = setTimeout(go, pathname === '/' ? 0 : 60)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  useScrollVars()
  const { pathname } = useLocation()
  return (
    <StatsProvider>
      <Preloader />
      <ScrollManager />
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main" key={pathname.startsWith('/projects') ? pathname : 'home'} className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </StatsProvider>
  )
}
