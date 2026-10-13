// import React, { useState } from 'react'
// import { Link, useSearchParams } from 'react-router-dom'
// import destinationData from '../data/destinationData.json'

// const DestinationsList = () => {
//   const [active, setActive] = useState(null)
//   const [searchParams] = useSearchParams()
//   const categoryFilter = searchParams.get('category')
  
//   const anyActive = active !== null

//   // Filter destinations by category if provided
//   const filteredDestinations = categoryFilter
//     ? destinationData.destinations.filter(dest => dest.category === categoryFilter)
//     : destinationData.destinations

//   // Use all destinations or first 6 if no filter
//   const destinations = filteredDestinations.slice(0, 6).map(dest => ({
//     title: dest.title,
//     img: dest.image,
//     desc: dest.description,
//     link: `/destinations/${dest.slug}`,
//     category: dest.category,
//   }))

//   return (
//     <section className="bg-[#f5f2ed] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
//       {/* Heading */}
//       <div className="mx-auto max-w-3xl text-center">
//         <h2 className="font-['Playfair_Display'] text-3xl font-bold uppercase leading-tight text-[#2c4549] sm:text-4xl lg:text-5xl">
//           {categoryFilter 
//             ? `${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)} Destinations`
//             : 'Explore Nepal\'s Destinations'}
//         </h2>
//         <p className="mx-auto mt-4 max-w-xl font-['Work_Sans'] text-xs text-[#2c4549]/60 sm:text-sm">
//           Discover the beauty and diversity of Nepal, from majestic mountains to lush jungles and ancient cultural sites.
//         </p>
//       </div>

//       {/* Cards */}
//       <div
//         onPointerLeave={(e) => e.pointerType === 'mouse' && setActive(null)}
//         className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 sm:mt-14 lg:h-[520px] lg:flex-row lg:gap-5 px-0 sm:px-4 lg:px-0"
//       >
//         {destinations.map((dest, i) => {
//           const isActive = active === i

//           return (
//             <div
//               key={dest.title}
//               tabIndex={0}
//               onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(i)}
//               onPointerUp={(e) =>
//                 e.pointerType !== 'mouse' && setActive((prev) => (prev === i ? null : i))
//               }
//               onFocus={() => setActive(i)}
//               onBlur={() => setActive(null)}
//               className={`relative cursor-pointer overflow-hidden rounded-md outline-none
//                 transition-all duration-700 ease-in-out lg:h-full
//                 ${
//                   isActive
//                     ? 'h-[460px] sm:h-[480px] lg:flex-[1.4]'
//                     : anyActive
//                     ? 'h-[200px] sm:h-[220px] lg:flex-1'
//                     : 'h-[300px] sm:h-[340px] lg:flex-1'
//                 }`}
//             >
//               <img
//                 src={dest.img}
//                 alt={dest.title}
//                 className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${
//                   isActive ? 'scale-105' : 'scale-100'
//                 }`}
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />
//               <div
//                 className={`absolute inset-0 bg-black/40 transition-opacity duration-700 ${
//                   isActive ? 'opacity-100' : 'opacity-0'
//                 }`}
//               />

//               <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
//                 <h3 className="font-['Playfair_Display'] text-2xl font-medium uppercase leading-tight text-[#f5f1ea] sm:text-3xl xl:text-4xl">
//                   {dest.title}
//                 </h3>

//                 <div
//                   className={`grid transition-all duration-700 ease-in-out ${
//                     isActive ? 'mt-4 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'
//                   }`}
//                 >
//                   <div className="overflow-hidden">
//                     <p className="max-w-md font-['Work_Sans'] text-sm leading-relaxed text-[#f5f1ea]/90 sm:text-base">
//                       {dest.desc}
//                     </p>

//                     <Link
//                       to={dest.link}
//                       tabIndex={isActive ? 0 : -1}
//                       onPointerUp={(e) => e.stopPropagation()}
//                       className="mt-3 inline-flex items-center gap-2 font-['Work_Sans'] text-sm text-[#f5f1ea] underline underline-offset-4 hover:opacity-80"
//                     >
//                       Explore destination
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         className="h-4 w-4"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                       </svg>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </section>
//   )
// }

// export default DestinationsList


import React, { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import destinationData from '../data/destinationData.json'

const DestinationsList = () => {
  const [active, setActive] = useState(null)
  const [searchParams] = useSearchParams()
  const categoryFilter = searchParams.get('category')
  const scrollContainerRef = useRef(null)
  
  const anyActive = active !== null

  // Filter destinations by category if provided
  const filteredDestinations = categoryFilter
    ? destinationData.destinations.filter(dest => dest.category === categoryFilter)
    : destinationData.destinations

  // Split into initial (first 3) and remaining destinations
  const initialDestinations = filteredDestinations.slice(0, 3).map(dest => ({
    title: dest.title,
    img: dest.image,
    desc: dest.description,
    link: `/destinations/${dest.slug}`,
    category: dest.category,
  }))

  const remainingDestinations = filteredDestinations.slice(3).map(dest => ({
    title: dest.title,
    img: dest.image,
    desc: dest.description,
    link: `/destinations/${dest.slug}`,
    category: dest.category,
  }))

  // Auto-scroll functionality for remaining destinations
  useEffect(() => {
    if (remainingDestinations.length <= 3 || !scrollContainerRef.current) return

    const container = scrollContainerRef.current
    let scrollInterval
    let currentIndex = 0

    const scrollToNext = () => {
      if (!container) return
      
      const cardWidth = container.querySelector('.destination-card')?.offsetWidth || 0
      const gap = 20 // gap between cards
      
      currentIndex++
      
      if (currentIndex >= remainingDestinations.length - 2) {
        currentIndex = 0
        container.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        const scrollPosition = currentIndex * (cardWidth + gap)
        container.scrollTo({ left: scrollPosition, behavior: 'smooth' })
      }
    }

    // Start auto-scroll after 3 seconds
    const startAutoScroll = () => {
      scrollInterval = setInterval(scrollToNext, 4000)
    }

    const timeoutId = setTimeout(startAutoScroll, 3000)

    // Pause on hover
    const handleMouseEnter = () => {
      clearInterval(scrollInterval)
    }

    const handleMouseLeave = () => {
      startAutoScroll()
    }

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(scrollInterval)
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [remainingDestinations.length])

  const DestinationCard = ({ dest, i, isInitial = false }) => {
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
        className={`destination-card relative cursor-pointer overflow-hidden rounded-md outline-none
          transition-all duration-700 ease-in-out lg:h-full flex-shrink-0
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
  }

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

      {/* Initial 3 Cards - Static Display */}
      {initialDestinations.length > 0 && (
        <div
          onPointerLeave={(e) => e.pointerType === 'mouse' && setActive(null)}
          className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 sm:mt-14 lg:h-[520px] lg:flex-row lg:gap-5 px-0 sm:px-4 lg:px-0"
        >
          {initialDestinations.map((dest, i) => (
            <DestinationCard key={dest.title} dest={dest} i={i} isInitial={true} />
          ))}
        </div>
      )}

      {/* Remaining Cards - Auto Scrolling */}
      {remainingDestinations.length > 0 && (
        <div className="mt-10">
          <h3 className="font-['Playfair_Display'] text-2xl font-bold uppercase text-[#2c4549] mb-6 text-center sm:text-3xl">
            More Destinations
          </h3>
          
          <div
            ref={scrollContainerRef}
            onPointerLeave={(e) => e.pointerType === 'mouse' && setActive(null)}
            className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {remainingDestinations.map((dest, i) => (
              <div 
                key={dest.title} 
                className="snap-start flex-shrink-0 w-[300px] sm:w-[350px] lg:w-[400px]"
              >
                <DestinationCard dest={dest} i={i + 3} />
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          {remainingDestinations.length > 3 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: Math.ceil(remainingDestinations.length / 3) }).map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-[#2c4549]/30"
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Add custom CSS to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

export default DestinationsList