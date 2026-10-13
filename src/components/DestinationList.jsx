import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import destinationData from '../data/destinationData.json'

const DestinationsList = () => {
  const [active, setActive] = useState(null)
  const [searchParams] = useSearchParams()
  const categoryFilter = searchParams.get('category')
  
  const anyActive = active !== null

  // Filter destinations by category if provided
  const filteredDestinations = categoryFilter
    ? destinationData.destinations.filter(dest => dest.category === categoryFilter)
    : destinationData.destinations

  // Use all destinations or first 6 if no filter
  const destinations = filteredDestinations.slice(0, 6).map(dest => ({
    title: dest.title,
    img: dest.image,
    desc: dest.description,
    link: `/destinations/${dest.slug}`,
    category: dest.category,
  }))

  return (
    <section className="bg-[#f5f2ed] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-['Playfair_Display'] text-3xl font-bold uppercase leading-tight text-[#2c4549] sm:text-4xl lg:text-5xl">
          {categoryFilter 
            ? `${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)} Destinations`
            : 'Explore Nepal\'s Destinations'}
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-['Work_Sans'] text-xs text-[#2c4549]/60 sm:text-sm">
          Discover the beauty and diversity of Nepal, from majestic mountains to lush jungles and ancient cultural sites.
        </p>
      </div>

      {/* Cards */}
      <div
        onPointerLeave={(e) => e.pointerType === 'mouse' && setActive(null)}
        className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 sm:mt-14 lg:h-[520px] lg:flex-row lg:gap-5 px-0 sm:px-4 lg:px-0"
      >
        {destinations.map((dest, i) => {
          const isActive = active === i

          return (
            <div
              key={dest.title}
              tabIndex={0}
              onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(i)}
              onPointerUp={(e) =>
                e.pointerType !== 'mouse' && setActive((prev) => (prev === i ? null : i))
              }
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
              <img
                src={dest.img}
                alt={dest.title}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />
              <div
                className={`absolute inset-0 bg-black/40 transition-opacity duration-700 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
              />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                <h3 className="font-['Playfair_Display'] text-2xl font-medium uppercase leading-tight text-[#f5f1ea] sm:text-3xl xl:text-4xl">
                  {dest.title}
                </h3>

                <div
                  className={`grid transition-all duration-700 ease-in-out ${
                    isActive ? 'mt-4 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-md font-['Work_Sans'] text-sm leading-relaxed text-[#f5f1ea]/90 sm:text-base">
                      {dest.desc}
                    </p>

                    <Link
                      to={dest.link}
                      tabIndex={isActive ? 0 : -1}
                      onPointerUp={(e) => e.stopPropagation()}
                      className="mt-3 inline-flex items-center gap-2 font-['Work_Sans'] text-sm text-[#f5f1ea] underline underline-offset-4 hover:opacity-80"
                    >
                      Explore destination
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
                    </Link>
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

export default DestinationsList