function Navbar() {
  return (
    <div className="relative">
      <nav className="relative flex items-center justify-between px-8 py-4">
        
        {/* Logo */}
        <div className="text-xl font-bold text-white">
          Venture Capitalist Association <span className="text-[#fad6a5] text-xs font-bold">@UCR</span>
        </div>

        {/* Nav Links */}
        <ul className="flex gap-6 text-gray-300">
          <li>
            <a href="#home" className="hover:text-[#fad6a5] transition-colors">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#fad6a5] transition-colors">About</a>
          </li>
          <li>
            <a href="#events" className="hover:text-[#fad6a5] transition-colors">Events</a>
          </li>
          <li>
            <a href="#eboard" className="hover:text-[#fad6a5] transition-colors">E-Board</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#fad6a5] transition-colors">Contact</a>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="bg-[#fad6a5] text-[#1a2b4a] font-bold px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors">
          Apply Now
        </button>

      </nav>
    </div>
  )
}

export default Navbar