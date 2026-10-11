import React, { useState } from 'react'

const tours = [
  {
    title: 'Himalayan Treks',
    img: '/images/t1.jpg',
    desc: "Discover the magic of Nepal's mountains! Walk through breathtaking landscapes, charming Sherpa villages and ancient monasteries, with the world's highest peaks on the horizon.",
    price: 'Starting from $50/person.',
    link: '#',
  },
  {
    title: 'Jungle Safaris',
    img: '/images/t2.jpg',
    desc: "Explore Chitwan's lush jungle on foot, by jeep or by canoe. Spot one-horned rhinos, deer and exotic birds while you drift through untouched wilderness.",
    price: 'Starting from $40/person.',
    link: '#',
  },
  {
    title: 'Heritage Tours',
    img: '/images/t3.jpg',
    desc: "Step into centuries of history in Kathmandu Valley. Visit UNESCO-listed temples, royal squares and living traditions that shaped Nepal's culture.",
    price: 'Starting from $30/person.',
    link: '#',
  },
]

const Tours = () => {
  const [active, setActive] = useState(null)
  const anyActive = active !== null

  return (
    <section className="bg-[#f5f2ed] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-['Playfair_Display'] text-3xl font-bold uppercase leading-tight text-[#2c4549] sm:text-4xl lg:text-5xl">
          Discover the Land of the Himalayas, Nepal!
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-['Work_Sans'] text-xs text-[#2c4549]/60 sm:text-sm">
          Turn your dream vacation into reality – we'll take care of every detail,
          and you just enjoy the magic!
        </p>
      </div>

      {/* Cards */}
      <div
        onPointerLeave={(e) => e.pointerType === 'mouse' && setActive(null)}
        className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 sm:mt-14 lg:h-[520px] lg:flex-row lg:gap-5 px-0 sm:px-4 lg:px-0"
      >
        {tours.map((tour, i) => {
          const isActive = active === i

          return (
            <div
              key={tour.title}
              tabIndex={0}
              // Desktop: hover (mouse only)
              onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(i)}
              // Mobile / touch: tap to toggle
              onPointerUp={(e) =>
                e.pointerType !== 'mouse' && setActive((prev) => (prev === i ? null : i))
              }
              // Keyboard accessibility
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className={`relative cursor-pointer overflow-hidden rounded-md outline-none
                transition-all duration-700 ease-in-out lg:h-full
                ${
                  isActive
                    ? 'h-[460px] sm:h-[480px] lg:flex-[1.4]'
                    : anyActive
                    ? 'h-[200px] sm:h-[220px] lg:flex-1'
                    : 'h-[300px] sm:h-[340px] lg:flex-1'
                }`}
            >
              {/* images */}
              <img
                src={tour.img}
                alt={tour.title}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />
              <div
                className={`absolute inset-0 bg-black/40 transition-opacity duration-700 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                <h3 className="font-['Playfair_Display'] text-2xl font-medium uppercase leading-tight text-[#f5f1ea] sm:text-3xl xl:text-4xl">
                  {tour.title}
                </h3>

                {/* Details: visible only in the active (hover) state */}
                <div
                  className={`grid transition-all duration-700 ease-in-out ${
                    isActive ? 'mt-4 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-md font-['Work_Sans'] text-sm leading-relaxed text-[#f5f1ea]/90 sm:text-base">
                      {tour.desc}
                    </p>

                    <p className="mt-4 font-['Work_Sans'] text-lg font-semibold text-white sm:text-xl">
                      {tour.price}
                    </p>

                    <a
                      href={tour.link}
                      tabIndex={isActive ? 0 : -1}
                      onPointerUp={(e) => e.stopPropagation()}
                      className="mt-3 inline-flex items-center gap-2 font-['Work_Sans'] text-sm text-[#f5f1ea] underline underline-offset-4 hover:opacity-80"
                    >
                      More details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Tours