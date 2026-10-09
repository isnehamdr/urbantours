import React from 'react'

const tours = ['Pokhara Tours', 'Chitwan Tours', 'Poon Hill Trek', 'Everest Base Camp']

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-black pt-16 text-[#f5f1ea]">
      {/* Marquee animation */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .marquee:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background video (full view) */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Headline block */}
      <div className="relative z-10 flex flex-1 items-center px-6 lg:px-[10%]">
        <div className="mx-auto w-full max-w-5xl">
          <p className="font-['Work_Sans'] text-[11px] uppercase tracking-[-1px] text-white/80 sm:text-[16px]">
            Discover the world
          </p>
          <h1 className="font-['Playfair_Display'] text-6xl font-semibold uppercase leading-none sm:text-8xl lg:text-[120px]">
            Explore Nepal
          </h1>
          <p className="mt-2 text-right font-['Work_Sans'] text-[11px] uppercase tracking-[1px] text-white/80 sm:text-[16px]">
            The true beauty of Nepal
          </p>
        </div>
      </div>

      {/* Bottom scrolling tour links */}
    
<div className="marquee relative z-10 overflow-hidden pb-6 font-['Playfair_Display'] text-sm sm:text-lg">
  <ul className="animate-marquee flex w-max items-center">
    {[...tours, ...tours].map((tour, i) => (
      <li key={i} className="w-[50vw] text-center sm:w-[35vw]">
        <a href="#" className="whitespace-nowrap transition hover:opacity-70">
          {tour}
        </a>
      </li>
    ))}
  </ul>
</div>
    </section>
  )
}

export default Hero