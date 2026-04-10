function Events() {
  const events = [
    {
      title: "BlackRock X VCA",
      description: "An exclusive guest speaker event with BlackRock's Vice President, Mike Strug. Students gained insights into asset management, career paths, and the world of institutional investing.",
      tags: ["Guest Speaker", "Finance"],
      link: "https://www.instagram.com/p/DTrgxJKkdQQ/",
      partner: "BlackRock"
    },
    {
      title: "Wells Fargo & KPMG X VCA",
      description: "A dual-company networking event connecting VCA members with professionals from Wells Fargo and KPMG, covering banking, consulting, and career development.",
      tags: ["Networking", "Banking", "Consulting"],
      link: "https://www.instagram.com/p/DIept8lzUeN/",
      partner: "Wells Fargo & KPMG"
    },
    {
      title: "From Wall Street to the Ivy Leagues",
      description: "A panel discussion featuring professionals who made the leap from high finance to top academic institutions, sharing advice on career pivots and graduate school.",
      tags: ["Panel", "Career"],
      link: "https://www.instagram.com/p/DGi9T9PyH9A/",
      partner: null
    },
    {
      title: "Alumni Guest Speaker Panel",
      description: "VCA alumni returned to share their journeys through venture capital, private equity, and startups — offering real-world perspective to current members.",
      tags: ["Alumni", "Panel"],
      link: "https://www.instagram.com/p/DTDpk0Bj7eB/",
      partner: null
    },
    {
      title: "2025-2026 Executive Board Reveal",
      description: "Meet the new executive board leading VCA through the 2025-2026 school year, including roles in marketing, administration, events, and outreach.",
      tags: ["Announcement", "E-Board"],
      link: "https://www.instagram.com/p/DPSus65DnhJ/?img_index=1",
      partner: null
    },
  ]

  return (
    <section id="events" className="relative z-10 max-w-5xl mx-auto px-8 py-24">

      {/* Section Label */}
      <p className="text-[#fad6a5] text-sm font-semibold tracking-widest uppercase mb-4">
        What We've Done
      </p>

      {/* Headline */}
      <h2 className="text-4xl font-bold text-white mb-4">
        Events & Partnerships
      </h2>
      <p className="text-gray-400 text-lg mb-12 max-w-2xl">
        From Wall Street executives to Ivy League alumni — VCA brings the finance world directly to UCR.
      </p>

    {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <a
            key={index}
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-gray-800 rounded-xl p-6 hover:border-[#fad6a5] transition-all duration-300 hover:bg-white/5 flex flex-col gap-4"
            >
            {/* Partner Badge */}
            {event.partner && (
              <span className="text-xs font-bold text-[#fad6a5] bg-[#fad6a5]/10 border border-[#fad6a5]/20 px-3 py-1 rounded-full w-fit">
                {event.partner}
              </span>
            )}

            {/* Title */}
            <h3 className="text-white font-bold text-xl group-hover:text-[#fad6a5] transition-colors">
              {event.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {event.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {event.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs text-gray-500 border border-gray-700 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View on Instagram */}
            <p className="text-xs text-gray-600 group-hover:text-[#fad6a5] transition-colors mt-1">
              View on Instagram →
            </p>

          </a>
        ))}
      </div>

    </section>
  )
}

export default Events