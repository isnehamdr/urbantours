import React from 'react'

const pkg = {
  title: 'Adventure Tour of Nepal 2027',
  img: '/images/himalaya.jpg',
  locations: [
    {
      name: 'Pokhara (Lakes & Mountain Views)',
      date: 'March 5-9, 2027 (4 nights)',
    },
    {
      name: 'Chitwan (Jungle Paradise)',
      date: 'March 9-12, 2027 (3 nights)',
    },
  ],
  services: [
    "7 nights' accommodation with breakfast",
    'Private transfers: Airport - Pokhara - Chitwan - Airport',
    'Guided jungle safari in Chitwan',
  ],
  price: '$1800',
  note: 'Note: Price is for 2 people and excludes flights.',
}

const Package = () => {
  return (
    <section className="bg-[#f5f2ed] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-24">
        {/* Content */}
        <div className="text-[#2c4549]">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            {pkg.title}
          </h2>

          <div className="mt-6 font-['Work_Sans'] text-sm sm:mt-8 sm:text-base">
            {/* Locations */}
            <h3 className="font-semibold">Locations &amp; Dates:</h3>
            <ul className="mt-3 list-disc space-y-2 pl-8 marker:text-[#2c4549]">
              {pkg.locations.map((loc) => (
                <li key={loc.name}>
                  <p className="font-semibold">{loc.name}</p>
                  <p>
                    <span className="italic">Date:</span> {loc.date}
                  </p>
                </li>
              ))}
            </ul>

            {/* Services */}
            <h3 className="mt-6 font-semibold">Included Services:</h3>
            <ul className="mt-3 list-disc space-y-1 pl-8 marker:text-[#2c4549]">
              {pkg.services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            {/* Price */}
            <p className="mt-6">
              <span className="font-semibold">Total Price:</span>{' '}
              <span className="text-[#2c4549]/70">{pkg.price}</span>
            </p>
            <p className="mt-1 italic text-[#2c4549]/70">{pkg.note}</p>
          </div>

          <a
            href="/about"
            className="mt-8 inline-block rounded-lg border border-[#2c4549] px-8 py-3.5 font-['Work_Sans'] text-sm text-[#2c4549] shadow-md shadow-black/5 transition-colors duration-300 hover:bg-[#2c4549] hover:text-[#f5f2ed] sm:mt-10 sm:text-base"
          >
            Read more
          </a>
        </div>

        {/* Image */}
       {/* Image */}
<div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:aspect-[16/10] lg:aspect-auto lg:min-h-[520px]">
  <img
    src={pkg.img}
    alt={pkg.title}
    className="absolute inset-0 h-full w-full object-cover"
  />
</div>
      </div>
    </section>
  )
}

export default Package