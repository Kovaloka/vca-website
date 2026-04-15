function EBoard() {
  const board2425 = [
    {
      name: "Max Tunyan - Griffin Capital",
      role: "President & Founder, Business Administration - Finance",
      description: "Founded VCA in 2024 and led the organization through its inaugural year, establishing its mission and vision."
    },
    {
      name: "Angele Ohannessian - J.P. Morgan Private Bank",
      role: "Vice President of Education, Business Administration - Finance & Minor in Economics",
      description: "Overseeing educational initiatives and supporting student development in venture capital."
    },
    {
      name: "Oscar Silfverberg - SEB Group",
      role: "Vice President of Strategy & Coordination, Business Administration - Finance",
      description: "Assisting with strategic planning and ensuring effective coordination across VCA's initiatives."
    },
    {
      name: "Nikhil Srivastava",
      role: "Vice President of Events, Business Administration - Finance",
      description: "Planning and executing events that provide value to VCA members and the broader UCR community."
    },
    {
      name: "Nicole Bolsajian",
      role: "Vice President of Marketing, Media and Cultural Studies & Minor in Law and Society",
      description: "Overseeing marketing initiatives and supporting student development in media and cultural studies."
    },
    {
      name: "Ryan McDonald",
      role: "Vice President of Finance, Economics & Minor in Data Science",
      description: "Managing VCA's finances and supporting student development in economics and data science."
    },
    {
      name: "Jalena Dawson",
      role: "Vice President of Fundraising, Political Science",
      description: "Sourcing and allocating funds for VCA's events and programs."  
    },
    {
      name: "Garni Khanzadian",
      role: "Vice President of Administration, History & Minor in Law and Society",
      description: "Controlling VCA's administrative functions and ensuring smooth operations."
    }

  ]
  const board2526 = [
    {
      name: "Nikhil Srivastava - Bank of America",
      role: "President",
      description: "Leading VCA's vision, strategy, and partnerships across the 2025-2026 school year."
    },
    {
      name: "Nikita Swaminathan - Pepsico",
      role: "Vice President of Administration",
      description: "Overseeing VCA's administrative functions and ensuring smooth operations."
    },
    {
      name: "Pierre Boktor - Target",
      role: "Vice President of Fundraising",
      description: "Sourcing and allocating funds for VCA's events and programs."
    },
    {
      name: "Jalena Dawson",
      role: "Vice President of Marketing",
      description: "Creating workshopping events and promoting VCA's initiatives."
    },
    {
      name: "Ryan McDonald",
      role: "Vice President of Strategy Coordination",
      description: "Supporting VCA's leadership and streamlining operations."
    },
    {
      name: "Noor Chadha",
      role: "Vice President of Events",
      description: "Overseeing workshopping events and opportunities for VCA."
    },
  ]

  const board2627 = [
    {
      name: "Rishikesh Karmarkar",
      role: "President",
      description: "Leading VCA into the 2026-2027 school year with a focus on growth and new partnerships."
    },
    {
      name: "Marcus Hau",
      role: "Vice President of Strategy",
      description: "Supporting VCA's leadership and streamlining operations."
    },
    {
      name: "Khalid Kassab",
      role: "Director of Outreach & Initiative",
      description: "Creating opportunities for VCA members to engage with the broader community."
    },
    {
      name: "Purav Goslia",
      role: "Vice President of Fundraising",
      description: "Sourcing and allocating funds for VCA's events and programs."
    },
    {
      name: "Nidhi Sisodia",
      role: "Vice President of Administration",
      description: "Controlling VCA's administrative functions and ensuring smooth operations."
    },
    {
      name: "Xavier Scott",
      role: "Vice President of Marketing",
      description: "Creating workshopping events and promoting VCA's initiatives."
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
        {/* 2024-2025 Board */}
        <div className="mb-10">
            <div className="flex items-center gap-4 mb-8">
                <h3 className="text-white font-bold text-2xl">2024 — 2025</h3>
                <div className="flex-1 border-t border-gray-800" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {board2425.map((member, index) => (
                    <BoardCard key={index} member={member} />
                ))}
            </div>
        </div>

        {/* Instagram Link 24-25*/}
        <a
            href="https://www.instagram.com/p/DHPKoBbSyva/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#fad6a5] transition-colors text-sm"
        >
            View full 24-25 E-Board reveal on Instagram →
        </a>

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
        
        {/* Instagram Link 25-26*/}
        <a
            href="https://www.instagram.com/p/DPSus65DnhJ/?img_index=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#fad6a5] transition-colors text-sm"
        >
            View full 25-26 E-Board reveal on Instagram →
        </a>

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

        {/* Instagram Link 25-27 when Revealed}
        <a
            href="https://www.instagram.com/p/DPSus65DnhJ/?img_index=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#fad6a5] transition-colors text-sm"
        >
            View full E-Board reveal on Instagram →
        </a> */}

    </section>
)
}

export default EBoard