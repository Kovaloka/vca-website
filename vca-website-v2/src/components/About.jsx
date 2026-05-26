import vcaLogo from '../assets/vca-logo.png'

const stats = [
  {
    label: 'Weekly',
    value: 'Tuesdays',
    sub: 'Fall Quarter is TBD',
  },
  {
    label: 'All Majors',
    value: 'Finance, CS, Bio',
    sub: 'Everyone belongs here',
  },
  {
    label: '3 Pillars',
    value: 'Finance',
    sub: 'Entrepreneurship · Career Guidance',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-white scroll-mt-20 px-8 md:px-12 lg:px-16 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: text + stats */}
          <div>
            <span className="inline-flex items-center bg-[#000000] text-[#fad6a5] text-xs tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8 font-medium">
              Who We Are
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6 leading-tight">
              Where Finance<br />Meets Ambition
            </h2>

            <p className="text-black/55 text-base leading-relaxed mb-12">
              The Venture Capital Association at UC Riverside brings together students passionate
              about finance, entrepreneurship, and career development. All majors are welcome —
              no experience required.
            </p>

            {/* Stats strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-black/10 rounded-2xl overflow-hidden border border-black/20">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#0f1a2e] px-6 py-8">
                  <p className="text-[#fad6a5] text-xs tracking-[0.2em] uppercase mb-3 font-medium">
                    {s.label}
                  </p>
                  <p className="text-white text-xl font-bold mb-1">{s.value}</p>
                  <p className="text-white/40 text-sm">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image card */}
          <div className="rounded-2xl overflow-hidden border border-black/20 bg-[#0f1a2e] hover:border-[#fad6a5]/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(250,214,165,0.12)] transition-all duration-300">
            <div className="aspect-[4/3] w-full bg-white flex items-center justify-center">
              <img
                src={vcaLogo}
                alt="VCA at UCR"
                className="w-4/5 h-4/5 object-contain"
              />
            </div>
            <div className="px-8 py-5 border-t border-white/5">
              <p className="text-white/40 text-sm">
                Venture Capital Association — UC Riverside · Finance · Entrepreneurship · Career Guidance
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
