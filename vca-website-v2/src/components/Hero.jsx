export default function Hero() {
  return (
    <section id="home" className="bg-white min-h-screen flex p-3 md:p-4">
      <div className="w-full rounded-3xl bg-[#000000] relative flex flex-col justify-center px-10 md:px-16 lg:px-20 py-24">
        <div className="max-w-4xl">
          <p className="text-[#fad6a5] text-sm md:text-base tracking-[0.2em] uppercase mb-6 font-medium">
            University of California, Riverside
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight mb-8">
            Venture Capital<br />
            <span className="text-white/80">Association</span>
          </h1>

          <p className="text-white/50 text-base md:text-lg max-w-xl mb-12 leading-relaxed">
            Connecting ambitious students with the world of venture capital,
            finance, and startup investing at UCR.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 bg-[#fad6a5] text-black font-semibold text-sm rounded-full hover:bg-white transition-colors duration-200"
            >
              Apply Now
            </a>
            <a
              href="#about"
              className="px-8 py-3.5 border border-white/20 text-white/80 text-sm rounded-full hover:border-[#fad6a5]/60 hover:text-white transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-10 md:left-16 lg:left-20 flex items-center gap-3 text-white/30">
          <div className="w-px h-10 bg-white/20" />
          <span className="text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </div>
    </section>
  )
}
