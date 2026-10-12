import React from 'react'
import { Link } from 'react-router-dom'

const reasons = [
  'Experienced and trained guides',
  'Responsibly conducted trips',
  'Competitive price and finely tailored trips',
  'Flexible trip itinerary',
  'The total return of your trip reaches the workers and suppliers in the field, not middlemen or agents',
]

const AboutWhy = () => (
  <>
    <section className="bg-[#f5f2ed] px-5 py-12 text-[#2c4549] sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-20">
          <h2 className="font-['Playfair_Display'] text-3xl font-semibold uppercase leading-tight sm:text-4xl lg:text-5xl">
            Why travel with us?
          </h2>
          <p className="font-['Work_Sans'] text-sm leading-relaxed text-[#2c4549]/70 sm:text-base">
            Places and cultures in Nepal are incredible, but to make the experience heart-meltingly warm you need a
            proper company: one that gives informed suggestions as an expert, shows the rich colors of local life that
            would otherwise stay invisible, stays flexible to ease your discomfort, and is professional while still
            feeling like a travel buddy. We are that company.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-x-10 border-t border-[#2c4549]/15 sm:mt-14 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <li
              key={r}
              className="flex gap-5 border-b border-[#2c4549]/15 py-5 font-['Work_Sans'] text-sm sm:py-6 sm:text-base"
            >
              <span className="font-['Playfair_Display'] text-lg text-[#2c4549]/40">0{i + 1}</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

  
  </>
)

export default AboutWhy