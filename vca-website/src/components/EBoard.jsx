function EBoard() {
  const board2526 = [
    {
      name: "Nikhil Srivastava",
      role: "President",
      description: "Leading VCA's vision, strategy, and partnerships across the 2025-2026 school year."
    },
    {
      name: "Ryan McDonald",
      role: "Treasurer",
      description: "Managing VCA's finances, budgeting, and funding for events and programs."
    },
    {
      name: "Garni Khanzadian",
      role: "Secretary",
      description: "Overseeing meeting coordination, attendance tracking, and member communications."
    },
  ]

  const board2627 = [
    {
      name: "Rishikesh Karmarkar",
      role: "President",
      description: "Leading VCA into the 2026-2027 school year with a focus on growth and new partnerships."
    },
    {
      name: "Marcus",
      role: "Vice President",
      description: "Supporting VCA's leadership and initiatives for the 2026-2027 school year."
    },
    {
      name: "Khalid",
      role: "Vice President",
      description: "Supporting VCA's leadership and initiatives for the 2026-2027 school year."
    },
    {
      name: "Purav",
      role: "Vice President",
      description: "Supporting VCA's leadership and initiatives for the 2026-2027 school year."
    },
    {
      name: "Nidhi",
      role: "Vice President",
      description: "Supporting VCA's leadership and initiatives for the 2026-2027 school year."
    },
    {
      name: "Xavier",
      role: "Vice President",
      description: "Supporting VCA's leadership and initiatives for the 2026-2027 school year."
    },
  ]

  const BoardCard = ({ member }) => (
    <div className="group border border-gray-800 rounded-xl p-6 hover:border-[#fad6a5] transition-all duration-300 hover:bg-white/5 flex flex-col gap-3">
      <span className="text-xs font-bold text-[#fad6a5] bg-[#fad6a5]/10 border border-[#fad6a5]/20 px-3 py-1 rounded-full w-fit">
        {member.role}
      </span>
      <h3 className="text-white font-bold text-xl group-hover:text-[#fad6a5] transition-colors">
        {member.name}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {member.description}
      </p>
    </div>
  )

return (
    <section className="relative z-10 max-w-5xl mx-auto px-8 py-24">

        {/* Section Label */}
        <p className="text-[#fad6a5] text-sm font-semibold tracking-widest uppercase mb-4">
            Meet The Team
        </p>

        {/* Headline */}
        <h2 className="text-4xl font-bold text-white mb-4">
            Executive Board
        </h2>
        <p className="text-gray-400 text-lg mb-16 max-w-2xl">
            The leadership teams driving VCA's mission at UC Riverside.
        </p>

        {/* 2025-2026 Board */}
        <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
                <h3 className="text-white font-bold text-2xl">2025 — 2026</h3>
                <div className="flex-1 border-t border-gray-800" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {board2526.map((member, index) => (
                    <BoardCard key={index} member={member} />
                ))}
            </div>
        </div>

        {/* 2026-2027 Board */}
        <div className="mb-10">
            <div className="flex items-center gap-4 mb-8">
                <h3 className="text-white font-bold text-2xl">2026 — 2027</h3>
                <div className="flex-1 border-t border-gray-800" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {board2627.map((member, index) => (
                    <BoardCard key={index} member={member} />
                ))}
            </div>
        </div>

        {/* Instagram Link */}
        <a
            href="https://www.instagram.com/p/DPSus65DnhJ/?img_index=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#fad6a5] transition-colors text-sm"
        >
            View full E-Board reveal on Instagram →
        </a>

    </section>
)
}

export default EBoard