import React from 'react'

const banner = {
  img: '/images/banner.jpg',
  title: ['Let us show you', 'the secrets of Nepal'],
  desc: 'From the peaks of Annapurna and the heart of Kathmandu to the serene lakes of Pokhara, every destination promises you a unique and unforgettable experience.',
  btnText: 'Destinations',
  btnLink: '#',
}

const BgBanner = () => {
  return (
    <section className="relative isolate flex min-h-[520px] w-full items-center overflow-hidden sm:min-h-[620px] lg:min-h-[620px]">
      {/* Background image */}
      <img
        src={banner.img}
        alt="banner image of a mountain landscape"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/55" />

      {/* Content */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-2">
        <div className="max-w-7xl">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold uppercase leading-[1.05] text-[#f5f1ea] sm:text-5xl ">
            {banner.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <p className="mt-5 max-w-[600px] font-['Work_Sans'] text-sm font-light leading-relaxed text-white/60 sm:mt-6 sm:text-lg">
            {banner.desc}
          </p>

          <a
            href={banner.btnLink}
            className="mt-8 inline-block rounded-md border border-[#f5f1ea]/80 bg-[#2c4549] px-6 py-3 font-['Work_Sans'] text-sm text-[#f5f1ea] transition-colors duration-300 hover:bg-[#f5f1ea] hover:text-[#2c4549] sm:mt-10 sm:px-8 sm:py-3.5 sm:text-base"
          >
            {banner.btnText}
          </a>
        </div>
      </div>
    </section>
  )
}

export default BgBanner