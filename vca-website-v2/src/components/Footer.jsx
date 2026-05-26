const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'E-Board', href: '#eboard' },
  { label: 'Contact', href: '#contact' },
]

const connect = [
  { label: 'Email', href: 'mailto:venturecapitalucr@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/ucrvca/posts/?feedView=all' },
  { label: 'Instagram', href: 'https://www.instagram.com/vcaucr' },
  { label: 'Flare', href: 'https://flare-event.app.link/hBqt4olItXb' },
  { label: 'Application', href: 'https://forms.gle/F8zLEuVVg1pEGEtaA' },
]

export default function Footer() {
  return (
    <footer className="bg-white px-3 pb-3 md:px-4 md:pb-4">
    <div className="rounded-3xl bg-[#000000] border-t border-white/5 py-16 px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-[#fad6a5] font-bold text-lg mb-2">VCA UCR</p>
            <p className="text-white/30 text-sm leading-relaxed mb-4">
              Finance · Entrepreneurship · Career Guidance.<br />
              All majors welcome at UC Riverside.
            </p>
            <p className="text-white/20 text-xs">Fall Quarter is TBD</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-5 font-medium">Quick Links</p>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/30 hover:text-[#fad6a5] text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-5 font-medium">Connect</p>
            <ul className="space-y-3">
              {connect.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target={l.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={l.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="text-white/30 hover:text-[#fad6a5] text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Venture Capital Association at UC Riverside
          </p>
          <p className="text-white/10 text-xs">@VCAUCR</p>
        </div>
      </div>
    </div>
    </footer>
  )
}
