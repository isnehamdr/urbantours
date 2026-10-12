import React from 'react'

// Heading + paragraphs centered, then rounded image below
const AboutSplit2 = ({ title, paragraphs, img, alt = '' }) => (
  <section className="bg-[#f5f2ed] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
    <div className="">
      {/* Centered text content */}
      <div className="text-center ">
        <h2 className="font-['Playfair_Display'] mx-auto max-w-3xl text-4xl font-bold uppercase leading-[0.95] tracking-tight text-[#2c4549] sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        <div className="mt-6 space-y-5 font-['Work_Sans'] text-sm leading-relaxed text-[#2c4549]/70 sm:mt-8 sm:text-base sm:leading-relaxed mx-auto max-w-7xl">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {/* Image below */}
      <div
        className="relative mt-10 w-full overflow-hidden rounded-xl shadow-xl shadow-black/10  mx-auto max-w-7xl"
        style={{ aspectRatio: '16/9', maxHeight: '600px' }} // Changed aspect ratio to 16/9 for better landscape fit
      >
        <img 
          src={img} 
          alt={alt} 
          loading="lazy" 
          className="absolute inset-0 h-full w-full object-cover" // Changed to object-cover to fill the width/height
        />
      </div>
    </div>
  </section>
)

export default AboutSplit2