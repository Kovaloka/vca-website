import { useState, useEffect } from 'react'

const slides = [
  {
    number: '01',
    title: 'The Simple Definition',
    body: "'Venture capital turns ideas and basic research into products and services that have transformed the world. Building high growth companies from the ground up. Venture-backed companies accounted for some of the largest publicly traded companies by market capitalization: Microsoft ($780B), Apple ($746B), Amazon ($737B), Alphabet ($727B), and Facebook ($374B).' - National Venture Capital Association",
  },
  {
    number: '02',
    title: 'How It Works',
    body: [
      "As companies get larger and more successful, they'll raise money in consecutve stages called ",
      <em key="rounds">rounds</em>,
      ": There are typically five rounds: Pre-Seed, Seed, Series A,B,C, and IPO."
    ],
  },
  {
    number: '03',
    title: 'The Five Rounds',
    body: [
      <em key="Pre-Seed">Pre-Seed</em>,
      " turns the plan into a functional prototype. The Founders, friends, family, and 'Angel Investors' (Wealthy individuals betting on the startup) will often be the primary investors at this stage.",
      <em key="Seed funding">Seed funding</em>,
      " proves the plan works and is profitable. At this point, early-stage VC firms and larger Angel Investors start to take notice and invest in the startup.",
      <em key="Series A">Series A</em>, 
      " launces a repeatable blueprint that consistently generates money.",
      <em key="Series B">Series B</em>,
      " takes that blueprint and rapidly scales it, often hiring salespeople and expanding to new cities.",
      <em key="Series C"></em>,
      "is when the business becomes a market leader, they may buy out smaller businesses, invent brand new products, or move overseas for larger scaling. At this point, you've probably seen their products in your house or a friend's house. Eventually, a company may go", 
      <em key="public (IPO)">public (IPO)</em>,
      "it becomes a public company like many you see today (Apple, Netflix, etc.). This is when VC Investors sell their piece of ownership in the company, cashing in often millions or billions in the process."
    ],
  },
  {
    number: '04',
    title: "Who's Involved",
    body: [
      "Three key players make VC work: the ",
    <em key="Founders">Founders</em>,
    ", they build the product, hire the team, run the daily operations, and sell the service that the venture capitalists invest in; the ",
    <em key="Venture Capitalists">Venture Capitalist</em>,
    ", the professionals who invest and manage the fund. They'll scout startups, negotiate the deals, provide mentorship, and sit on the board of director's for the company; last but not least, the ",
    <em key="limited partners">limited partners</em>,
    " (LPs). They are the quiet giants who truly provide the money. These are typically pension funds, universities, and ultra-wealthy individuals who invest personal or large sums of cash directly into the VC firm, trusting the Venture Capitalists to grow it for them.",
    ],
  },
  {
    number: '05',
    title: 'Why It Matters',
    body: "VC-backed companies have created millions of jobs, transformed global infrastructure, and reshaped entire industries under their watch. Industry giants like Apple. Google, Uber, Airbnb, or even SpaceX would never grown to their scale without the eye of Venture Capital. Understanding how capital flows through the modern ecosystem of today is one of the most valuable skills you can build regardless of your career goals. Whether you want to work in finance or business, start your own company one day, or evenjust understand how the modern economy works, Venture Capital is there to work for you, not against you.",
  },
  {
    number: '06',
    title: 'The VCA Connection',
    body: [
      "That's exactly what VCA at UCR is here for. Through VCA, you'll get direct experience in: ",
      <em key="speaker events">speaker events</em>,
      " - get a chance to hear from real Venture Capitalists and see how they grew from it; ",
      <em key="networking">networking</em>,
      " - connect with peers and industry giants like members from BlackRock, WallStreet, and many more! You'll also gain immense ",
      <em key="hands-on learning">hands-on learning</em>,
      " through pitch competitions, stock pitches, workshops, and team projects that you'll present to the board of VCA! We give every student areal introduction to the world of venture capital and finance, regardless of major.",
    ],
  },
]

const stages = ['Pre-Seed', 'Seed', 'Series A', 'Series B', 'Series C', 'IPO']
const players = ['Founders', 'Venture Capitalists', 'Limited Partners (LPs)']

export default function WhatIsVC() {
  const [isOpen, setIsOpen] = useState(false)
  const [slide, setSlide] = useState(0)

  const open = () => { setSlide(0); setIsOpen(true) }
  const close = () => setIsOpen(false)

  // Keyboard navigation: ESC closes, arrow keys change slides
  useEffect(() => {
    const handleKey = (e) => {
      if (!isOpen) return
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') setSlide(s => Math.min(s + 1, slides.length - 1))
      if (e.key === 'ArrowLeft') setSlide(s => Math.max(s - 1, 0))
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen])

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* ── Section ── */}
      <section id="what-is-vc" className="bg-white scroll-mt-20 px-8 md:px-12 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: heading + CTA */}
            <div>
              <span className="inline-flex items-center bg-[#000000] text-[#fad6a5] text-xs tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8 font-medium">
                VC 101
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6 leading-tight">
                What is<br />Venture Capital?
              </h2>
              <p className="text-black/55 text-base leading-relaxed mb-10">
                New to finance? Start here. Five slides covering everything from the basics of VC to how funding works — and why it matters to you.
              </p>
              <button
                onClick={open}
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#000000] text-[#fad6a5] rounded-full text-sm font-medium tracking-wide hover:bg-[#fad6a5] hover:text-black transition-all duration-200 cursor-pointer"
              >
                Start Learning →
              </button>
            </div>

            {/* Right: visual preview */}
            <div className="flex flex-col gap-4">
              {/* Funding stages */}
              <div className="rounded-2xl border border-black/20 bg-[#0f1a2e] p-6 hover:border-[#fad6a5]/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(250,214,165,0.12)] transition-all duration-300">
                <p className="text-[#fad6a5] text-xs tracking-[0.2em] uppercase mb-4 font-medium">Funding Journey</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {stages.map((stage, i) => (
                    <div key={stage} className="flex items-center gap-2">
                      <span className="text-white text-sm font-medium">{stage}</span>
                      {i < stages.length - 1 && <span className="text-white/20 text-xs">→</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key players */}
              <div className="grid grid-cols-3 gap-4">
                {players.map((player) => (
                  <div
                    key={player}
                    className="rounded-2xl border border-black/20 bg-[#0f1a2e] p-5 hover:border-[#fad6a5]/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(250,214,165,0.12)] transition-all duration-300"
                  >
                    <p className="text-white/35 text-xs mb-2 uppercase tracking-wide">Key Player</p>
                    <p className="text-white text-sm font-semibold leading-snug">{player}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Backdrop ── always rendered, fades in/out via opacity */}
      <div
        onClick={close}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* ── Drawer ── always rendered, slides in/out via translateX */}
      <div
        className={`fixed right-0 top-0 h-full w-full md:w-[520px] bg-[#0f1a2e] z-50 flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
          <div>
            <p className="text-[#fad6a5] text-xs tracking-[0.2em] uppercase font-medium mb-1">VC 101</p>
            <p className="text-white font-bold text-lg">What is Venture Capital?</p>
          </div>
          <button
            onClick={close}
            className="text-white/40 hover:text-white transition-colors text-3xl leading-none cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* Slide content */}
        <div className="flex-1 px-8 py-10 overflow-y-auto">
          <p className="text-[#fad6a5]/50 text-xs tracking-[0.3em] uppercase mb-4 font-medium">
            {slides[slide].number} / {String(slides.length).padStart(2, '0')}
          </p>
          <h3 className="text-white text-3xl font-bold mb-6 leading-tight">
            {slides[slide].title}
          </h3>
          <p className="text-white/60 text-base leading-relaxed">
            {slides[slide].body}
          </p>
        </div>

        {/* Navigation footer */}
        <div className="px-8 py-6 border-t border-white/10">
          {/* Progress dots */}
          <div className="flex gap-2 mb-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                  i === slide ? 'w-8 bg-[#fad6a5]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
          {/* Prev / Next */}
          <div className="flex gap-3">
            <button
              onClick={() => setSlide(s => Math.max(s - 1, 0))}
              disabled={slide === 0}
              className="flex-1 py-3 rounded-full border border-white/20 text-white/60 text-sm hover:border-white/40 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
            >
              ← Prev
            </button>
            <button
              onClick={() => slide === slides.length - 1 ? close() : setSlide(s => s + 1)}
              className="flex-1 py-3 rounded-full bg-[#fad6a5] text-black text-sm font-medium hover:bg-[#fad6a5]/90 transition-all duration-200 cursor-pointer"
            >
              {slide === slides.length - 1 ? 'Done ✓' : 'Next →'}
            </button>
          </div>
          <p className="text-white/20 text-xs mt-4 text-center">ESC to close · ← → arrow keys to navigate</p>
        </div>
      </div>
    </>
  )
}