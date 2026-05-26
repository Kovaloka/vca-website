const contactLinks = [
  {
    label: 'Email',
    value: 'venturecapitalucr@gmail.com',
    href: 'mailto:venturecapitalucr@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'VCA at UCR',
    href: 'https://www.linkedin.com/company/ucrvca/posts/?feedView=all',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@VCAUCR',
    href: 'https://www.instagram.com/vcaucr',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Flare Group Chat',
    value: 'Join on Flare',
    href: 'https://flare-event.app.link/hBqt4olItXb',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    label: 'Analyst Program Application',
    value: 'Apply via Google Forms',
    href: 'https://forms.gle/F8zLEuVVg1pEGEtaA',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-3 pb-3 md:px-4 md:pb-4">
      <div className="rounded-3xl bg-[#000000] px-8 md:px-12 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-[#fad6a5] text-xs tracking-[0.25em] uppercase mb-4 font-medium">
              Get Involved
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Join VCA
            </h2>
            <p className="text-white/50 text-base leading-relaxed">
              All majors welcome — no finance background required.
              Reach out or apply below.
            </p>
          </div>

          {/* Contact card */}
          <div className="max-w-2xl mx-auto rounded-2xl border border-white/10 bg-[#0f1a2e] overflow-hidden hover:border-[#fad6a5]/30 transition-all duration-300">
            <div className="p-8 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#fad6a5]" />
                <span className="text-white/60 text-sm">Riverside, CA · Fall Quarter is TBD</span>
              </div>
            </div>

            <div className="divide-y divide-white/5">
              {contactLinks.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={c.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="flex items-center gap-5 px-8 py-5 group hover:bg-white/5 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(250,214,165,0.08)] transition-all duration-200"
                >
                  <span className="text-white/40 group-hover:text-[#fad6a5] transition-colors duration-200 shrink-0">
                    {c.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-white/30 text-xs tracking-widest uppercase mb-0.5">{c.label}</p>
                    <p className="text-white/80 text-sm group-hover:text-white transition-colors truncate">{c.value}</p>
                  </div>
                  <svg className="w-4 h-4 text-white/20 group-hover:text-[#fad6a5] ml-auto shrink-0 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            <div className="px-8 py-6 border-t border-white/5 bg-[#1a2b4a]/40">
              <a
                href="https://forms.gle/F8zLEuVVg1pEGEtaA"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3.5 bg-[#fad6a5] text-black font-semibold text-sm rounded-full hover:bg-white transition-colors duration-200"
              >
                Apply to the Analyst Program
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
