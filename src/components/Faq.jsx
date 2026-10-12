import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Every answer below is taken from the client's content.
// Optional `link` renders a "see the trip" link under the answer.
const FAQS = [
  {
    question: 'Who is Urban Sherpa?',
    answer:
      'We are local travel enthusiasts based in Kathmandu. After years working with international travel companies in Nepal, we started our own company so that the people who actually run the trips, our guides and porters, are paid fairly.',
  },
  {
    question: 'Why book with Urban Sherpa?',
    answer:
      'Our guides are experienced and trained, our trips are responsibly conducted, and our prices are competitive with finely tailored itineraries. The total return of your trip reaches the workers and suppliers in the field rather than middlemen or agents.',
  },
  {
    question: 'Can I change the itinerary?',
    answer:
      'Yes. Our itineraries are flexible and tailored to you. We make informed suggestions as local experts, and we adapt to ease your discomfort while staying a friendly travel buddy throughout your trip.',
  },
  {
    question: 'What is included in a trek?',
    answer:
      'Treks include accommodation, meals, an experienced leader and porter, airport pickup and drop, national park and conservation area fees, and the trekking permit. Transport is included too: two-way transport from and to Kathmandu for Poon Hill, and the return flights between Kathmandu and Lukla for Everest Base Camp. Personal expenses, insurance, and tips for your guide and porters are not included.',
    link: { to: '/packages?category=trek', label: 'Browse treks' },
  },
  {
    question: 'What is included in a day tour or hike?',
    answer:
      'Day trips include an experienced English-speaking guide, entry fees, and a drive from the starting point to the end point. Personal expenses, food and drinks, and tips are not included.',
    link: { to: '/packages?category=sightseeing', label: 'Browse day tours' },
  },
  {
    question: 'I am short on time or worried about altitude. What do you suggest?',
    answer:
      'The Ghandruk Poon Hill trek is a popular choice for exactly this: it reaches 3,210 m, so it carries less risk of altitude sickness than longer, higher treks. There is also a fast three-day version if you want to finish as quickly as possible.',
    link: { to: '/packages/ghandruk-poon-hill-trek', label: 'See the Poon Hill trek' },
  },
  {
    question: 'Do I need to be athletic for the Everest Base Camp trek?',
    answer:
      'It is physically demanding, but you do not have to be robust, athletic or young. High-altitude trekking is mostly about being mindful of how your body reacts to the thinner air and giving it enough time to adapt. The trek takes about two weeks.',
    link: { to: '/packages/everest-base-camp-trek', label: 'See the Everest Base Camp trek' },
  },
  {
    question: 'Where does the Religious Kathmandu tour start?',
    answer:
      'You meet at the crossroad by Employee Provident Fund on Tridevi Marga, take a taxi to Pashupatinath Temple, then drive on to Bauddhanath Stupa, and finish with a drive back to Thamel.',
    link: { to: '/packages/religious-kathmandu', label: 'See the tour' },
  },
]

const Chevron = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={`h-6 w-6 shrink-0 transition-transform duration-300 sm:h-7 sm:w-7 ${
      open ? 'rotate-180' : ''
    }`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const Faq = ({
  title = 'Frequently asked questions',
  subtitle = 'Everything you need to know before you travel with us.',
  items = FAQS,
}) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <section className="bg-[#f5f2ed] px-5 py-12 font-['Work_Sans'] text-[#2c4549] sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1000px]">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-4 text-sm font-light text-[#2c4549]/70 sm:mt-5 sm:text-base">{subtitle}</p>
        </div>

        {/* Accordion */}
        <div className="mt-10 divide-y divide-[#2c4549]/15 border-y border-[#2c4549]/15 sm:mt-14 lg:mt-16">
          {items.map((item, i) => {
            const isOpen = openIndex === i
            const buttonId = `faq-button-${i}`
            const panelId = `faq-panel-${i}`

            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c4549] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f2ed] sm:py-6 sm:text-xl"
                  >
                    <span>{item.question}</span>
                    <Chevron open={isOpen} />
                  </button>
                </h3>

                {/* Smooth height animation without measuring */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[75ch] pr-10 text-base leading-relaxed text-[#2c4549]/80 sm:text-lg">
                      {item.answer}
                    </p>
                    {item.link && (
                      <Link
                        to={item.link.to}
                        tabIndex={isOpen ? 0 : -1}
                        className="mt-3 inline-block text-sm underline underline-offset-4 transition hover:opacity-70 sm:text-base"
                      >
                        {item.link.label}
                      </Link>
                    )}
                    <div className="pb-6" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq