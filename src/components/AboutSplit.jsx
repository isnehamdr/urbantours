import React from 'react'

// Heading + paragraphs on one side, rounded image on the other.
const AboutSplit = ({ title, paragraphs, img, alt = '' }) => (
  <section className="bg-[#f5f2ed] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
      {/* Text Content - Always on the left/top */}
      <div className="text-center lg:text-left">
        <h2 className="font-['Playfair_Display'] text-4xl font-bold uppercase leading-[0.95] tracking-tight text-[#2c4549] sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        <div className="mt-6 space-y-5 font-['Work_Sans'] text-sm leading-relaxed text-[#2c4549]/70 sm:mt-8 sm:text-base sm:leading-relaxed mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {/* Image - Always on the right/bottom */}
      <div
        className="relative w-full overflow-hidden rounded-xl shadow-xl shadow-black/10"
        style={{ aspectRatio: '2/3', maxHeight: '600px' }}
      >
        <img src={img} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      </div>
    </div>
  </section>
)

export default AboutSplit