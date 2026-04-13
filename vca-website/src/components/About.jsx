function About() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-8 py-24">

      {/* Section Label */}
      <p className="text-[#fad6a5] text-sm font-semibold tracking-widest uppercase mb-4">
        Who We Are
      </p>

      {/* Headline */}
      <h2 className="text-4xl font-bold text-white mb-6">
        Where Finance Meets Ambition
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-lg max-w-2xl mb-12 leading-relaxed">
        The Venture Capitalist Association at UC Riverside brings together students 
        passionate about finance, entrepreneurship, and career development. 
        All majors are welcome — no experience required.
      </p>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="border border-gray-800 rounded-xl p-6 hover:border-[#fad6a5] transition-colors">
          <p className="text-[#fad6a5] text-3xl font-bold mb-2">Weekly</p>
          <p className="text-gray-400 text-sm">Meetings every Tuesday at 7:30 PM</p>
        </div>

        <div className="border border-gray-800 rounded-xl p-6 hover:border-[#fad6a5] transition-colors">
          <p className="text-[#fad6a5] text-3xl font-bold mb-2">All Majors</p>
          <p className="text-gray-400 text-sm">VCA serves as a valuable platform for all majors, whether students wish to simply expand their knowledge of the startup world, start their own companies, or explore careers in venture capital</p>
        </div>

        <div className="border border-gray-800 rounded-xl p-6 hover:border-[#fad6a5] transition-colors">
          <p className="text-[#fad6a5] text-3xl font-bold mb-2">3 Pillars</p>
          <p className="text-gray-400 text-sm">Finance · Entrepreneurship · Career Guidance</p>
        </div>

      </div>
    </section>
  )
}

export default About