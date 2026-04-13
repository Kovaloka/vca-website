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
        setHidden(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Mobile — top bar */}
      <div
        className="md:hidden fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          transform: `translateY(${visible && !hidden ? '0px' : '-100%'})`,
          transition: 'transform 0.5s ease-in-out'
        }}
      >
        <div className="flex flex-col gap-1 flex-1">
          
          {/* Links */}
          <div className="flex gap-4">
            <a href="#home" className="text-gray-400 hover:text-[#fad6a5] transition-colors text-sm whitespace-nowrap">Home</a>
            <a href="#about" className="text-gray-400 hover:text-[#fad6a5] transition-colors text-sm whitespace-nowrap">About</a>
            <a href="#events" className="text-gray-400 hover:text-[#fad6a5] transition-colors text-sm whitespace-nowrap">Events</a>
          </div>

          {/* Row 2 */}
          <div className="flex gap-4">
            <a href="#eboard" className="text-gray-400 hover:text-[#fad6a5] transition-colors text-sm whitespace-nowrap">E-Board</a>
            <a href="#contact" className="text-gray-400 hover:text-[#fad6a5] transition-colors text-sm whitespace-nowrap">Contact</a>
          </div>

          {/* Hide Button */}
          <button
            onClick={() => setHidden(true)}
            className="text-gray-600 hover:text-red-400 transition-colors text-xs ml-4 shrink-0"
          >
            Hide
          </button>

        </div>

        {/* Show Tab when hidden */}
        {hidden && (
          <button
            onClick={() => setHidden(false)}
            className="absolute right-4 top-0 bg-black/70 backdrop-blur-md border border-gray-800 border-t-0 rounded-b-xl px-3 py-1 text-gray-400 hover:text-[#fad6a5] transition-colors text-xs"
          >
            Menu
          </button>
        )}
      </div>

      {/* Desktop — left side */}
      <div
        className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 items-center transition-all duration-500"
        style={{
          transform: `translateY(-50%) translateX(${visible && !hidden ? '0px' : '-100%'})`,
          transition: 'transform 0.5s ease-in-out'
        }}
      >
        <div className="bg-black/60 backdrop-blur-md border border-gray-800 rounded-r-2xl py-6 px-4 flex flex-col gap-6">
          <a href="#home" className="text-gray-400 hover:text-[#fad6a5] transition-colors text-sm">Home</a>
          <a href="#about" className="text-gray-400 hover:text-[#fad6a5] transition-colors text-sm">About</a>
          <a href="#events" className="text-gray-400 hover:text-[#fad6a5] transition-colors text-sm">Events</a>
          <a href="#eboard" className="text-gray-400 hover:text-[#fad6a5] transition-colors text-sm">E-Board</a>
          <a href="#contact" className="text-gray-400 hover:text-[#fad6a5] transition-colors text-sm">Contact</a>
          <div className="border-t border-gray-800 w-full" />
          <button
            onClick={() => setHidden(true)}
            className="text-gray-600 hover:text-red-400 transition-colors text-xs"
          >
            Hide
          </button>
        </div>

        {hidden && (
          <button
            onClick={() => setHidden(false)}
            className="bg-black/60 backdrop-blur-md border border-gray-800 border-l-0 rounded-r-xl px-2 py-4 text-gray-400 hover:text-[#fad6a5] transition-colors text-xs"
            style={{ writingMode: 'vertical-rl' }}
          >
            Menu
          </button>
        )}
      </div>
    </>
  )
}

export default SideNav