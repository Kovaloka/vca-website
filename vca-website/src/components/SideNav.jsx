import { useState, useEffect } from 'react'

function SideNav() {
  const [visible, setVisible] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true)
      } else {
        setVisible(false)
        setHidden(false) // reset hide when back at top
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex items-center transition-all duration-500"
      style={{
        transform: `translateY(-50%) translateX(${visible && !hidden ? '0px' : '-100%'})`,
        transition: 'transform 0.5s ease-in-out'
      }}
    >
      {/* Side Nav Panel */}
      <div className="bg-black/60 backdrop-blur-md border border-gray-800 rounded-r-2xl py-6 px-4 flex flex-col gap-6">

        {/* Links */}
        <a href="#home" className="text-gray-400 hover:text-[#fad6a5] transition-colors text-sm">
          Home
        </a>
        <a href="#about" className="text-gray-400 hover:text-[#fad6a5] transition-colors text-sm">
          About
        </a>
        <a href="#events" className="text-gray-400 hover:text-[#fad6a5] transition-colors text-sm">
          Events
        </a>
        <a href="#eboard" className="text-gray-400 hover:text-[#fad6a5] transition-colors text-sm">
          E-Board
        </a>
        <a href="#contact" className="text-gray-400 hover:text-[#fad6a5] transition-colors text-sm">
          Contact
        </a>

        {/* Divider */}
        <div className="border-t border-gray-800 w-full" />

        {/* Hide Button */}
        <button
          onClick={() => setHidden(true)}
          className="text-gray-600 hover:text-red-400 transition-colors text-xs"
        >
          Hide
        </button>

      </div>

      {/* Show Tab — visible when hidden */}
      {hidden && (
        <button
          onClick={() => setHidden(false)}
          className="bg-black/60 backdrop-blur-md border border-gray-800 border-l-0 rounded-r-xl px-2 py-4 text-gray-400 hover:text-[#fad6a5] transition-colors text-xs writing-mode-vertical"
          style={{ writingMode: 'vertical-rl' }}
        >
          Menu
        </button>
      )}

    </div>
  )
}

export default SideNav