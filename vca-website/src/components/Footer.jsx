function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-gray-800 mt-12">
      <div className="max-w-5xl mx-auto px-8 py-12">

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-white font-bold text-xl">
                Venture Capital Association
              </p>
              <p className="text-[#fad6a5] text-xs font-bold">@UCR</p>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Finance · Entrepreneurship · Career Guidance.
              All majors welcome at UC Riverside.
            </p>
            <p className="text-gray-600 text-xs">
              Meetings Tuesday at 7:30 PM
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <p className="text-[#fad6a5] text-xs font-semibold tracking-widest uppercase mb-2">
              Quick Links
            </p>
            <a href="#home" className="text-gray-500 hover:text-[#fad6a5] transition-colors text-sm">Home</a>
            <a href="#about" className="text-gray-500 hover:text-[#fad6a5] transition-colors text-sm">About</a>
            <a href="#events" className="text-gray-500 hover:text-[#fad6a5] transition-colors text-sm">Events</a>
            <a href="#eboard" className="text-gray-500 hover:text-[#fad6a5] transition-colors text-sm">E-Board</a>
            <a href="#contact" className="text-gray-500 hover:text-[#fad6a5] transition-colors text-sm">Contact</a>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-3">
            <p className="text-[#fad6a5] text-xs font-semibold tracking-widest uppercase mb-2">
              Connect
            </p>
            <a
              href="mailto:venturecapitalucr@gmail.com"
              className="text-gray-500 hover:text-[#fad6a5] transition-colors text-sm"
            >
              venturecapitalucr@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/company/ucrvca/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#fad6a5] transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/vcaucr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#fad6a5] transition-colors text-sm"
            >
              Instagram @vcaucr
            </a>
            <a
              href="https://flare-event.app.link/hBqt4olItXb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#fad6a5] transition-colors text-sm"
            >
              Flare Group Chat
            </a>
            <a
              href="https://forms.gle/F8zLEuVVg1pEGEtaA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#fad6a5] transition-colors text-sm"
            >
              Analyst Program Application
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-6" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {currentYear} Venture Capital Association at UC Riverside. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Built by VCA UCR
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer