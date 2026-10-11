import React, { useState } from 'react'

const content = {
  title: 'Why travel to Nepal?',
  desc: "Nepal combines breathtaking Himalayan peaks, lush jungles, and a vibrant cultural heritage, making it a must-visit destination. Whether you're trekking to base camp, exploring ancient temples, relaxing at a lakeside retreat, or enjoying the lively streets of Kathmandu, Nepal offers something for every traveler. With its stunning landscapes and warm hospitality, the Land of the Himalayas promises an unforgettable experience.",
  poster: '/images/bg.jpg',
  video: '/videos/hero2.mp4',
}

const Whychose = () => {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="bg-[#f5f2ed] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Top: heading + text */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold uppercase leading-tight text-[#2c4549] sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>

          <div>
            <p className="font-['Work_Sans'] text-xs leading-relaxed text-[#2c4549]/60 sm:text-sm">
              {content.desc}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-md border border-[#2c4549] bg-[#2c4549] px-5 py-2.5 font-['Work_Sans'] text-xs font-medium text-white transition-colors duration-300 hover:bg-transparent hover:text-[#2c4549] sm:text-sm"
              >
                Packages
              </a>
              <a
                href="#"
                className="rounded-md border border-[#2c4549]/60 px-5 py-2.5 font-['Work_Sans'] text-xs text-[#2c4549] shadow-md shadow-black/5 transition-colors duration-300 hover:bg-[#2c4549] hover:text-white sm:text-sm"
              >
                About us
              </a>
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-md sm:mt-10 sm:aspect-[16/9] lg:mt-12 lg:aspect-[16/8]">
          {playing ? (
            <video
              src={content.video}
              poster={content.poster}
              className="absolute inset-0 h-full w-full object-contain"
              controls
              autoPlay
              playsInline
            />
          ) : (
            <>
              <img
                src={content.poster}
                alt={content.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />

              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Play video"
                className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f5f1ea] text-[#1c1c1c] shadow-lg transition-transform duration-300 hover:scale-110 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-0.5 h-5 w-5 sm:h-6 sm:w-6"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Whychose