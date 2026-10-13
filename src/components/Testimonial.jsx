import React, { useState } from 'react'

const testimonials = [
  {
    img: '/images/f1.jpg',
    rating: 5,
    text: [
      "Our trek through the Annapurna region was beyond anything we imagined. Every detail was handled for us, so all we had to do was enjoy the mountain views and the warm hospitality along the way.",
      "The guides knew every trail and every story. We left with unforgettable memories and already want to come back for another adventure.",
    ],
    name: 'Jack & Amy',
  },
  {
    img: '/images/f2.jpg',
    rating: 5,
    text: [
      "From the temples of Kathmandu to the jungles of Chitwan, the whole trip felt effortless. The itinerary was perfectly balanced between adventure and relaxation.",
      "Friendly people, beautiful places and amazing food. We couldn't have asked for a better way to see Nepal.",
    ],
    name: 'Sara & Tom',
  },
  {
    img: '/images/f3.jpg',
    rating: 5,
    text: [
      "Pokhara's lakes and sunrise views were the highlight of our honeymoon. Everything ran smoothly and the team answered every message within minutes.",
      "Highly recommended for anyone who wants an authentic and well-organized trip.",
    ],
    name: 'Lena & Mark',
  },
]

const Star = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
    <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7.3L12 17.8 5.7 21.5l1.7-7.3L2 9.5l7.1-.6L12 2z" />
  </svg>
)

const Arrow = ({ direction = 'right' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    {direction === 'right' ? (
      <path d="M5 12h14M13 6l6 6-6 6" />
    ) : (
      <path d="M19 12H5M11 6l-6 6 6 6" />
    )}
  </svg>
)

const Testimonial = () => {
  const [active, setActive] = useState(0)
  const total = testimonials.length

  const prev = () => setActive((i) => (i - 1 + total) % total)
  const next = () => setActive((i) => (i + 1) % total)

  return (
    <section className="bg-[#f5f2ed] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Slides: all stacked in one grid cell so height stays stable */}
        <div className="grid">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              aria-hidden={active !== i}
              className={`col-start-1 row-start-1 grid grid-cols-1 items-center gap-8 transition-opacity duration-700 ease-in-out lg:grid-cols-2 lg:gap-20 ${
                active === i ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-md">
                <img
                  src={t.img}
                  alt={t.name}
                  className="aspect-[4/3] w-full object-cover sm:aspect-[16/10] lg:aspect-square"
                />
              </div>

              {/* Content */}
              <div className="font-['Work_Sans'] lg:max-w-2xl">
                <div className="flex gap-1 text-[#e8b9a8]" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} />
                  ))}
                </div>

                <div className="mt-6 space-y-6 text-xs leading-relaxed text-[#2c4549]/60 sm:mt-8 sm:text-lg">
                  {t.text.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>

                <p className="mt-6 text-xs font-medium text-[#2c4549] sm:text-lg">{t.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between sm:mt-10 lg:mt-12">
          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                  active === i ? 'bg-[#1c1c1c]' : 'bg-[#2c4549]/30 hover:bg-[#2c4549]/60'
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2c4549] text-[#f5f1ea] transition-opacity duration-300 hover:opacity-80 sm:h-10 sm:w-10"
            >
              <Arrow direction="left" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2c4549] text-[#f5f1ea] transition-opacity duration-300 hover:opacity-80 sm:h-10 sm:w-10"
            >
              <Arrow direction="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial