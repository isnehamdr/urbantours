import React from 'react'

const tours = [
  { title: 'Himalayan Treks', img: '/image/trek.jpg' },
  { title: 'Jungle Safaris', img: '/image/jungle.jpg' },
  { title: 'Heritage Tours', img: '/image/heritage.jpg' },
]

const Tours = () => {
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
      <div className="mx-auto mt-10 grid max-w-[1400px] grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {tours.map((tour) => (
          <a
            key={tour.title}
            href="#"
            className="group relative block h-[380px] overflow-hidden rounded-md sm:h-[460px] lg:h-[460px]"
          >
            {/* Image */}
            <img
              src={tour.img}
              alt={tour.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />

            {/* Title */}
            <h3 className="absolute bottom-0 left-0 p-5 font-['Playfair_Display'] text-3xl font-medium uppercase leading-none text-[#f5f1ea] sm:p-6 lg:text-4xl">
              {tour.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Tours