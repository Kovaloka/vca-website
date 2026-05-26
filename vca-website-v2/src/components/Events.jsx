import blackrockImg from '../assets/blackrock.jpg'
import wellsFargoImg from '../assets/wells-fargo-kpmg.jpg'
import wallStreetImg from '../assets/wall-street-ivy.jpg'
import alumniPanelImg from '../assets/alumni-panel.jpg'
import eboardRevealImg from '../assets/eboard-group.jpg'

const events = [
  {
    title: 'BlackRock X VCA',
    tags: ['Guest Speaker', 'Finance'],
    partner: 'BlackRock',
    href: 'https://www.instagram.com/p/DTrgxJKkdQQ/',
    img: blackrockImg,
    desc: 'An exclusive guest speaker session with professionals from BlackRock, exploring careers in asset management and investment strategy.',
  },
  {
    title: 'Wells Fargo & KPMG X VCA',
    tags: ['Networking', 'Banking', 'Consulting'],
    partner: 'Wells Fargo & KPMG',
    href: 'https://www.instagram.com/p/DIept8lzUeN/',
    img: wellsFargoImg,
    desc: 'A joint networking event with recruiters and professionals from Wells Fargo and KPMG — banking, consulting, and beyond.',
  },
  {
    title: 'From Wall Street to the Ivy Leagues',
    tags: ['Panel', 'Career'],
    href: 'https://www.instagram.com/p/DGi9T9PyH9A/',
    img: wallStreetImg,
    desc: 'A panel discussion on navigating the path from undergraduate to elite finance programs and top-tier institutions.',
  },
  {
    title: 'Alumni Guest Speaker Panel',
    tags: ['Alumni', 'Panel'],
    href: 'https://www.instagram.com/p/DTDpk0Bj7eB/',
    img: alumniPanelImg,
    desc: "Hear from VCA UCR alumni who've gone on to careers in venture capital, private equity, and investment banking.",
  },
  {
    title: '2025-2026 Executive Board Reveal',
    tags: ['Announcement', 'E-Board'],
    href: 'https://www.instagram.com/p/DPSus65DnhJ/?img_index=1',
    img: eboardRevealImg,
    desc: 'Announcing the new executive board for the 2025-2026 academic year — meet the team leading VCA UCR forward.',
  },
]

export default function Events() {
  return (
    <section id="events" className="bg-white scroll-mt-20 px-8 md:px-12 lg:px-16 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="inline-flex items-center bg-[#000000] text-[#fad6a5] text-xs tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8 font-medium">
            What We've Done
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] leading-tight">
            Events &amp; Highlights
          </h2>
        </div>

        {/* First two events — large 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {events.slice(0, 2).map((e) => (
            <EventCard key={e.title} event={e} large />
          ))}
        </div>

        {/* Remaining events — 3-col */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.slice(2).map((e) => (
            <EventCard key={e.title} event={e} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EventCard({ event, large }) {
  return (
    <a
      href={event.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl overflow-hidden border border-black/20 bg-[#0f1a2e] hover:border-[#fad6a5]/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(250,214,165,0.12)] transition-all duration-300"
    >
      <div className={`w-full overflow-hidden ${large ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        <img
          src={event.img}
          alt={event.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {event.tags.map((t) => (
            <span
              key={t}
              className="text-[#fad6a5] text-xs tracking-widest uppercase font-medium"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className={`text-white font-bold leading-snug mb-3 ${large ? 'text-2xl' : 'text-lg'}`}>
          {event.title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed">{event.desc}</p>
        <p className="mt-4 text-[#fad6a5]/60 text-xs tracking-widest uppercase group-hover:text-[#fad6a5] transition-colors">
          View on Instagram →
        </p>
      </div>
    </a>
  )
}
