import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'E-Board', href: '#eboard' },
  { label: 'Contact', href: '#contact' },
]

export default function SideNav() {
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(true)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 100)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  if (!visible) return null

  return (
    <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-[100] flex-col items-start gap-2">
      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="mb-2 w-7 h-7 rounded-full border border-white/10 bg-black/60 backdrop-blur flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
        aria-label={open ? 'Hide nav' : 'Show nav'}
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open
            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />}
        </svg>
      </button>

      {/* Links */}
      <div
        className={`flex flex-col gap-3 transition-all duration-300 overflow-hidden ${
          open ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
        }`}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="flex items-center gap-3 group"
          >
            <div
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                active === l.href ? 'bg-[#fad6a5] scale-125' : 'bg-white/20 group-hover:bg-white/50'
              }`}
            />
            <span
              className={`text-xs tracking-wider transition-all duration-200 ${
                active === l.href
                  ? 'text-[#fad6a5] opacity-100'
                  : 'text-white/30 group-hover:text-white/70 opacity-0 group-hover:opacity-100'
              }`}
            >
              {l.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
