function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-8 py-32">
      
      {/* Eyebrow Text */}
      <p className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase mb-4">
        University of California, Riverside
      </p>

      {/* Main Headline */}
<h1 className="text-6xl font-bold text-white mb-6 leading-tight">
  Venture Capital Association
</h1>

      {/* Subtext */}
      <p className="text-gray-400 text-lg max-w-xl mb-10">
        The Venture Capital Association (VCA) at UC Riverside is a dynamic student organization focused on educating and empowering students in venture capital, entrepreneurial finance, and the startup ecosystem. VCA provides members with valuable hands-on experience in evaluating investment opportunities, performing due diligence, and understanding the intricacies of venture capital funding.
        Through a wide range of events, including workshops, guest speaker sessions, and networking opportunities, VCA connects students with industry leaders such as venture capitalists, entrepreneurs, and investors. The organization also actively promotes entrepreneurship, offering resources and guidance for students interested in developing and launching their own business ventures.
        Whether students aim to explore careers in venture capital, start their own companies, or simply expand their knowledge of the startup world, VCA serves as a valuable platform for growth, learning, and professional development.     
        </p>

      {/* CTA Buttons */}
      <div className="flex gap-4">
        <button className="bg-[#c9a84c] text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors">
          Apply Now
        </button>
        <button className="border border-gray-500 text-white px-6 py-3 rounded-lg hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
          Learn More
        </button>
      </div>

    </section>
  )
}

export default Hero