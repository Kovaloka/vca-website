function Contact() {
  const links = [
    {
      label: "Email Us",
      value: "venturecapitalucr@gmail.com",
      href: "mailto:venturecapitalucr@gmail.com",
      icon: "✉️"
    },
    {
      label: "LinkedIn",
      value: "VCA on LinkedIn",
      href: "https://www.linkedin.com/company/ucrvca/posts/?feedView=all",
      icon: "💼"
    },
    {
      label: "Flare Group Chat",
      value: "Join our community",
      href: "https://flare-event.app.link/hBqt4olItXb",
      icon: "💬"
    },
    {
      label: "Analyst Program Application",
      value: "Apply to the Analyst Program",
      href: "https://forms.gle/F8zLEuVVg1pEGEtaA",
      icon: "📋"
    },
  ]

  return (
    <section className="relative z-10 max-w-5xl mx-auto px-8 py-24">

      {/* Section Label */}
      <p className="text-[#fad6a5] text-sm font-semibold tracking-widest uppercase mb-4">
        Get In Touch
      </p>

      {/* Headline */}
      <h2 className="text-4xl font-bold text-white mb-4">
        Contact Us
      </h2>
      <p className="text-gray-400 text-lg mb-12 max-w-2xl">
        Whether you're looking to join, partner, or just learn more — we'd love to hear from you.
      </p>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left — Contact Cards */}
        <div className="flex flex-col gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border border-gray-800 rounded-xl p-4 hover:border-[#fad6a5] hover:bg-white/5 transition-all duration-300"
            >
              {/* Icon */}
              <span className="text-2xl">{link.icon}</span>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  {link.label}
                </span>
                <span className="text-white text-sm group-hover:text-[#fad6a5] transition-colors">
                  {link.value}
                </span>
              </div>

              {/* Arrow */}
              <span className="ml-auto text-gray-600 group-hover:text-[#fad6a5] transition-colors">
                →
              </span>
            </a>
          ))}
        </div>

        {/* Right — Info Card */}
        <div className="border border-gray-800 rounded-xl p-8 flex flex-col gap-6 h-fit">

          {/* Meeting Info */}
          <div>
            <p className="text-[#fad6a5] text-xs font-semibold tracking-widest uppercase mb-2">
              Weekly Meetings
            </p>
            <p className="text-white font-bold text-2xl">Tuesdays</p>
            <p className="text-gray-400">7:30 PM · HUB 265</p>
          </div>

          <div className="border-t border-gray-800" />

          {/* Location */}
          <div>
            <p className="text-[#fad6a5] text-xs font-semibold tracking-widest uppercase mb-2">
              Location
            </p>
            <p className="text-white">University of California, Riverside</p>
            <p className="text-gray-400">900 University Ave, Riverside, CA 92521</p>
          </div>

          <div className="border-t border-gray-800" />

          {/* Instagram */}
          <div>
            <p className="text-[#fad6a5] text-xs font-semibold tracking-widest uppercase mb-2">
              Follow Us
            </p>
            
            <a
              href="https://www.instagram.com/vcaucr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#fad6a5] transition-colors text-sm"
            >
              @vcaucr on Instagram →
            </a>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Contact