import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import SideNav from './components/SideNav'
import Events from './components/Events'
import EBoard from './components/EBoard'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [orbScreenY, setOrbScreenY] = useState(50)
  const [orbRadius, setOrbRadius] = useState(500)
  const orbDocY = useRef(window.innerHeight * 0.5)
  const targetDocY = useRef(window.innerHeight * 0.5)
  const animRef = useRef(null)
  const isSnapping = useRef(false)

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animation loop
  useEffect(() => {
    const animate = () => {
      const scrollY = window.scrollY
      const viewportH = window.innerHeight

      const screenY = orbDocY.current - scrollY
      const screenPercent = (screenY / viewportH) * 100

      if (!isSnapping.current) {
        if (screenPercent > 150 || screenPercent < -50) {
          targetDocY.current = scrollY + viewportH * 0.5
          isSnapping.current = true
          setTimeout(() => {
            isSnapping.current = false
          }, 450)
        }
      }

      orbDocY.current = orbDocY.current + (targetDocY.current - orbDocY.current) * 0.015

      const newScreenY = orbDocY.current - scrollY
      const newScreenPercent = (newScreenY / viewportH) * 100
      setOrbScreenY(newScreenPercent)

      const distOffScreen = Math.max(
        0,
        newScreenPercent < 0 ? -newScreenPercent : newScreenPercent - 100
      )
      const radius = 500 + distOffScreen * 7
      setOrbRadius(Math.min(radius, 1200))

      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  return (
    <div className="min-h-screen bg-black relative">

      {/* Side Nav */}
      <SideNav />

      {/* 1. Cursor Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px,
            rgba(120, 160, 255, 0.35),
            rgba(88, 28, 135, 0.15) 50%,
            transparent 70%)`,
          mixBlendMode: 'screen'
        }}
      />

      {/* 2. Floating Orb */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(circle ${orbRadius}px at 50% ${orbScreenY}%, 
            #02029F 0%, 
            rgba(2, 2, 159, 0.6) 30%, 
            rgba(2, 2, 159, 0.2) 60%, 
            transparent 100%)`,
        }}
      />

      {/* 3. Page Content */}
      <div className="relative z-10">
        <Navbar />
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="events"><Events /></div>
        <div id="eboard"><EBoard /></div>
        <div id="contact"><Contact /></div>
        <Footer />
      </div>
        <div className="min-h-screen bg-black relative max-w-full overflow-x-hidden"></div>
    </div>
  )
}

export default App