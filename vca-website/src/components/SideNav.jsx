function Navbar() {
  return (
    <nav className="relative px-6 py-4 w-full">

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col items-center gap-2">
        <p className="text-white font-bold text-lg text-center">
          Venture Capitalist Association{' '}
          <span className="text-[#fad6a5] text-xs font-bold">@UCR</span>
        </p>
        <ul className="flex gap-4 text-gray-300 text-sm justify-center flex-wrap">
          <li><a href="#home" className="hover:text-[#fad6a5] transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-[#fad6a5] transition-colors">About</a></li>
          <li><a href="#events" className="hover:text-[#fad6a5] transition-colors">Events</a></li>
          <li><a href="#eboard" className="hover:text-[#fad6a5] transition-colors">E-Board</a></li>
          <li><a href="#contact" className="hover:text-[#fad6a5] transition-colors">Contact</a></li>
        </ul>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between">
        <div className="text-xl font-bold text-white">
          Venture Capitalist Association{' '}
          <span className="text-[#fad6a5] text-xs font-bold">@UCR</span>
        </div>
        <ul className="flex gap-6 text-gray-300">
          <li><a href="#home" className="hover:text-[#fad6a5] transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-[#fad6a5] transition-colors">About</a></li>
          <li><a href="#events" className="hover:text-[#fad6a5] transition-colors">Events</a></li>
          <li><a href="#eboard" className="hover:text-[#fad6a5] transition-colors">E-Board</a></li>
          <li><a href="#contact" className="hover:text-[#fad6a5] transition-colors">Contact</a></li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar