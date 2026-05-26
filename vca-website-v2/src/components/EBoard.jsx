const board2425 = [
  {
    name: 'Max Tunyan',
    company: 'Griffin Capital',
    role: 'President & Founder',
    major: 'Business Administration — Finance',
    desc: 'Founded VCA in 2024 and led the organization through its inaugural year, establishing its mission and vision.',
  },
  {
    name: 'Angele Ohannessian',
    company: 'J.P. Morgan Private Bank',
    role: 'VP of Education',
    major: 'Business Administration — Finance & Minor in Economics',
    desc: 'Overseeing educational initiatives and supporting student development in venture capital.',
  },
  {
    name: 'Oscar Silfverberg',
    company: 'SEB Group',
    role: 'VP of Strategy & Coordination',
    major: 'Business Administration — Finance',
    desc: 'Assisting with strategic planning and ensuring effective coordination across VCA\'s initiatives.',
  },
  {
    name: 'Nikhil Srivastava',
    role: 'VP of Events',
    major: 'Business Administration — Finance',
    desc: 'Planning and executing events that provide value to VCA members and the broader UCR community.',
  },
  {
    name: 'Nicole Bolsajian',
    role: 'VP of Marketing',
    major: 'Media and Cultural Studies & Minor in Law and Society',
    desc: 'Overseeing marketing initiatives and supporting student development in media and cultural studies.',
  },
  {
    name: 'Ryan McDonald',
    role: 'VP of Finance',
    major: 'Economics & Minor in Data Science',
    desc: 'Managing VCA\'s finances and supporting student development in economics and data science.',
  },
  {
    name: 'Jalena Dawson',
    role: 'VP of Fundraising',
    major: 'Political Science',
    desc: 'Sourcing and allocating funds for VCA\'s events and programs.',
  },
  {
    name: 'Garni Khanzadian',
    role: 'VP of Administration',
    major: 'History & Minor in Law and Society',
    desc: 'Controlling VCA\'s administrative functions and ensuring smooth operations.',
  },
]

const board2526 = [
  {
    name: 'Nikhil Srivastava',
    company: 'Bank of America',
    role: 'President',
    desc: 'Leading VCA\'s vision, strategy, and partnerships across the 2025-2026 school year.',
  },
  {
    name: 'Nikita Swaminathan',
    company: 'PepsiCo',
    role: 'VP of Administration',
    desc: 'Overseeing VCA\'s administrative functions and ensuring smooth operations.',
  },
  {
    name: 'Pierre Boktor',
    company: 'Target',
    role: 'VP of Fundraising',
    desc: 'Sourcing and allocating funds for VCA\'s events and programs.',
  },
  {
    name: 'Jalena Dawson',
    role: 'VP of Marketing',
    desc: 'Creating workshopping events and promoting VCA\'s initiatives.',
  },
  {
    name: 'Ryan McDonald',
    role: 'VP of Strategy & Coordination',
    desc: 'Supporting VCA\'s leadership and streamlining operations.',
  },
  {
    name: 'Noor Chadha',
    role: 'VP of Events',
    desc: 'Overseeing workshopping events and opportunities for VCA.',
  },
]

const board2627 = [
  {
    name: 'Rishikesh Karmarkar',
    role: 'President',
    desc: 'Leading VCA into the 2026-2027 school year with a focus on growth and new partnerships.',
  },
  {
    name: 'Marcus Hau',
    role: 'VP of Strategy',
    desc: 'Supporting VCA\'s leadership and streamlining operations.',
  },
  {
    name: 'Khalid Kassab',
    role: 'Director of Outreach & Initiative',
    desc: 'Creating opportunities for VCA members to engage with the broader community.',
  },
  {
    name: 'Purav Goslia',
    role: 'VP of Fundraising',
    desc: 'Sourcing and allocating funds for VCA\'s events and programs.',
  },
  {
    name: 'Nidhi Sisodia',
    role: 'VP of Administration',
    desc: 'Controlling VCA\'s administrative functions and ensuring smooth operations.',
  },
  {
    name: 'Xavier Scott',
    role: 'VP of Marketing',
    desc: 'Creating workshopping events and promoting VCA\'s initiatives.',
  },
]

function BoardCard({ member }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#0f1a2e] p-6 hover:border-[#fad6a5]/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(250,214,165,0.12)] transition-all duration-300 flex flex-col gap-3">
      <span className="inline-flex text-xs font-medium text-[#fad6a5] bg-[#fad6a5]/10 border border-[#fad6a5]/20 px-3 py-1 rounded-full w-fit tracking-wide">
        {member.role}
      </span>
      <div>
        <h3 className="text-white font-bold text-lg leading-snug">{member.name}</h3>
        {member.company && (
          <p className="text-white/35 text-xs mt-1 tracking-wide">{member.company}</p>
        )}
      </div>
      {member.major && (
        <p className="text-white/25 text-xs italic leading-relaxed">{member.major}</p>
      )}
      <p className="text-white/45 text-sm leading-relaxed">{member.desc}</p>
    </div>
  )
}

function YearDivider({ year, tag }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h3 className="text-white font-bold text-2xl shrink-0">{year}</h3>
      <div className="flex-1 h-px bg-white/10" />
      {tag && (
        <span className="text-[#fad6a5] text-xs tracking-widest uppercase font-medium shrink-0">{tag}</span>
      )}
    </div>
  )
}

function InstagramLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-6 text-white/30 hover:text-[#fad6a5] transition-colors text-sm"
    >
      {label} →
    </a>
  )
}

export default function EBoard() {
  return (
    <section id="eboard" className="bg-white px-3 pb-3 md:px-4 md:pb-4">
      <div className="rounded-3xl bg-[#000000] px-8 md:px-12 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-16">
            <p className="text-[#fad6a5] text-xs tracking-[0.25em] uppercase mb-4 font-medium">
              Meet The Team
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Executive Board
            </h2>
            <p className="text-white/40 text-base max-w-2xl">
              The leadership teams driving VCA's mission at UC Riverside.
            </p>
          </div>

          {/* 2024-2025 — Founders */}
          <div className="mb-4">
            <YearDivider year="2024 — 2025" tag="Founders" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {board2425.map((m) => (
                <BoardCard key={m.name} member={m} />
              ))}
            </div>
          </div>
          <InstagramLink
            href="https://www.instagram.com/p/DHPKoBbSyva/"
            label="View full 24-25 E-Board reveal on Instagram"
          />

          {/* Divider */}
          <div className="my-14 h-px bg-white/5" />

          {/* 2025-2026 */}
          <div className="mb-4">
            <YearDivider year="2025 — 2026" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {board2526.map((m) => (
                <BoardCard key={m.name} member={m} />
              ))}
            </div>
          </div>
          <InstagramLink
            href="https://www.instagram.com/p/DPSus65DnhJ/?img_index=1"
            label="View full 25-26 E-Board reveal on Instagram"
          />

          {/* Divider */}
          <div className="my-14 h-px bg-white/5" />

          {/* 2026-2027 */}
          <div>
            <YearDivider year="2026 — 2027" tag="Incoming" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {board2627.map((m) => (
                <BoardCard key={m.name} member={m} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
