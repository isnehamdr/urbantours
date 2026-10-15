// import React from 'react'
// import { useParams } from 'react-router-dom'
// import WhatWeOffer from "../components/WhatweOffer";
// import Faq from "../components/FAQ";
// import packageData from '../data/packageData.json'

// const PackageDetailPage = () => {
//   const { slug } = useParams()
  
//   // Find the package by slug
//   const pkg = packageData.packages.find(p => p.slug === slug)
  
//   // Fallback data if package not found
//   const bgImage = pkg?.image || "/images/bg.jpg"
//   const title = pkg?.title || "Package"
//   const description = pkg?.description || "Starting from €180/night for 2 people Flight tickets are not included, and prices start from €1000 per person!"

//   const buttonClasses =
//     "inline-flex items-center justify-center rounded-lg border border-white/80 bg-[#2f4a52] px-5 py-3 text-base font-medium text-white transition-colors hover:bg-[#3a5a63] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2f4a52]";

//   if (!pkg) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <h1 className="text-2xl font-bold">Package not found</h1>
//       </div>
//     )
//   }

//   return (
//     <>
//       <section
//         className="relative isolate w-full overflow-hidden bg-cover bg-center font-['Work_Sans',sans-serif] text-white lg:min-h-[550px]"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       >
//         {/* Dark overlay */}
//         <div className="absolute inset-0 -z-10 bg-black/55" />
//         <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-transparent to-black/20" />

//         {/* Hero content */}
//         <div className="relative z-10 flex max-w-4xl flex-col px-6 pb-8 pt-24 sm:px-10 sm:pt-32 md:pt-40 lg:px-24 lg:pt-56">
//           <h1 className="max-w-[18ch] font-['Playfair_Display',serif] text-4xl font-semibold uppercase leading-[1.05] tracking-[2px] text-[#f5f1ea] sm:text-5xl md:max-w-[20ch] md:text-5xl">
//             {title}
//           </h1>

//           <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg lg:mt-6 lg:leading-8">
//             {description}
//           </p>

//           <div className="mt-8 flex flex-wrap gap-4">
//             <a href="#" className={`${buttonClasses} w-full sm:w-auto`}>
//               Plan your trip
//             </a>
//             <div className="flex items-center gap-2 text-white/80">
//               <span className="text-sm">Duration:</span>
//               <span className="font-semibold">{pkg.duration}</span>
//             </div>
//             <div className="flex items-center gap-2 text-white/80">
//               <span className="text-sm">Difficulty:</span>
//               <span className="font-semibold">{pkg.difficulty}</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Package Details Section */}
//       <section className="bg-[#f5f2ed] py-12 px-6 lg:px-10">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="font-['Playfair_Display'] text-3xl font-bold uppercase text-[#2c4549] mb-8">
//             Package Highlights
//           </h2>
//           <ul className="grid md:grid-cols-2 gap-4">
//             {pkg.highlights.map((highlight, index) => (
//               <li key={index} className="flex items-start gap-3">
//                 <svg className="w-5 h-5 text-[#2f4a52] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                 </svg>
//                 <span className="text-[#2c4549]">{highlight}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* Itinerary Section */}
//       <section className="bg-white py-12 px-6 lg:px-10">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="font-['Playfair_Display'] text-3xl font-bold uppercase text-[#2c4549] mb-8">
//             Itinerary
//           </h2>
//           <div className="space-y-4">
//             {pkg.itinerary.map((day, index) => (
//               <div key={index} className="bg-[#f5f2ed] p-6 rounded-lg">
//                 <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#2c4549]">
//                   {day}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <WhatWeOffer/>
//       <Faq/>
//     </>
//   );
// };

// export default PackageDetailPage;


import React from 'react'
import { Link, useParams } from 'react-router-dom'
import WhatWeOffer from '../components/WhatweOffer'
import Faq from '../components/FAQ'
import packageData from '../data/packageData.json'

const buttonClasses =
  'inline-flex items-center justify-center rounded-lg border border-white/80 bg-[#2f4a52] px-5 py-3 text-base font-medium text-white transition-colors hover:bg-[#3a5a63] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2f4a52]'

const CheckIcon = () => (
  <svg
    className="mt-1 h-5 w-5 flex-shrink-0 text-[#2f4a52]"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
)

const CrossIcon = () => (
  <svg
    className="mt-1 h-5 w-5 flex-shrink-0 text-[#a65a4a]"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
      clipRule="evenodd"
    />
  </svg>
)

// "Day 3-13: Trek to EBC" -> { label: "Day 3-13", text: "Trek to EBC" }
// Steps without a "Day" prefix get a step number instead.
const parseStep = (step, index) => {
  const match = step.match(/^(Day\s*[\d-]+)\s*:\s*(.*)$/i)
  if (match) return { label: match[1], text: match[2] }
  return { label: String(index + 1), text: step, numbered: true }
}

const SectionTitle = ({ children }) => (
  <h2 className="mb-8 font-['Playfair_Display'] text-3xl font-bold uppercase text-[#2c4549]">
    {children}
  </h2>
)

const PackageDetailPage = () => {
  const { slug } = useParams()

  const pkg = packageData.packages.find((p) => p.slug === slug)

  if (!pkg) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#f5f2ed] px-6 pt-20 text-center font-['Work_Sans',sans-serif]">
        <h1 className="font-['Playfair_Display'] text-3xl font-bold text-[#2c4549]">
          Package not found
        </h1>
        <Link
          to="/packages"
          className="rounded-md border border-[#2c4549] px-5 py-2.5 text-[#2c4549] transition hover:bg-[#2c4549] hover:text-white"
        >
          Browse all packages
        </Link>
      </div>
    )
  }

  const category = packageData.categories.find((c) => c.slug === pkg.category)
  const bgImage = pkg.image || '/images/bg.jpg'

  const highlights = pkg.highlights || []
  const itinerary = (pkg.itinerary || []).map(parseStep)
  const inclusions = pkg.inclusions || []
  const exclusions = pkg.exclusions || []

  const hasDetails =
    highlights.length > 0 ||
    itinerary.length > 0 ||
    inclusions.length > 0 ||
    exclusions.length > 0

  // Only show facts that actually have a value.
  const facts = [
    {
      label: 'Price',
      value: pkg.price != null ? `From $${pkg.price}` : 'On request',
    },
    pkg.duration && { label: 'Duration', value: pkg.duration },
    pkg.difficulty && { label: 'Difficulty', value: pkg.difficulty },
  ].filter(Boolean)

  return (
    <>
      {/* Hero */}
      <section
        className="relative isolate w-full overflow-hidden bg-cover bg-center font-['Work_Sans',sans-serif] text-white lg:min-h-[550px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 -z-10 bg-black/55" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-transparent to-black/20" />

        <div className="relative z-10 flex max-w-4xl flex-col px-6 pb-10 pt-24 sm:px-10 sm:pt-32 md:pt-40 lg:px-24 lg:pt-56">
          {category && (
            <nav
              aria-label="Breadcrumb"
              className="mb-4 flex flex-wrap items-center gap-2 text-sm text-white/70"
            >
              <Link to="/packages" className="transition hover:text-white">
                Packages
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                to={`/packages?category=${category.slug}`}
                className="transition hover:text-white"
              >
                {category.title}
              </Link>
            </nav>
          )}

          <h1 className="max-w-[18ch] font-['Playfair_Display',serif] text-4xl font-semibold uppercase leading-[1.05] tracking-[2px] text-[#f5f1ea] sm:text-5xl md:max-w-[20ch]">
            {pkg.title}
          </h1>

          {pkg.description && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:leading-8">
              {pkg.description}
            </p>
          )}

          {/* Quick facts */}
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs uppercase tracking-widest text-white/60">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-lg font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <Link to="/contact" className={`${buttonClasses} w-full sm:w-auto`}>
              Plan your trip
            </Link>
          </div>
        </div>
      </section>

      {/* Details not written yet (draft packages) */}
      {!hasDetails && (
        <section className="bg-[#f5f2ed] px-6 py-16 text-center font-['Work_Sans',sans-serif] lg:px-10">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold uppercase text-[#2c4549]">
              Details coming soon
            </h2>
            <p className="mt-4 text-[#2c4549]/80">
              We are putting the final touches on this package. Tell us what you
              have in mind and we will tailor it for you.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-md border border-[#2c4549] px-6 py-3 text-[#2c4549] transition hover:bg-[#2c4549] hover:text-white"
            >
              Ask about this trip
            </Link>
          </div>
        </section>
      )}

      {/* Highlights */}
      {highlights.length > 0 && (
        <section className="bg-[#f5f2ed] px-6 py-12 font-['Work_Sans',sans-serif] lg:px-10">
          <div className="mx-auto max-w-6xl">
            <SectionTitle>Package Highlights</SectionTitle>
            <ul className="grid gap-4 md:grid-cols-2">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[#2c4549]">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Itinerary */}
      {itinerary.length > 0 && (
        <section className="bg-white px-6 py-12 font-['Work_Sans',sans-serif] lg:px-10">
          <div className="mx-auto max-w-6xl">
            <SectionTitle>Itinerary</SectionTitle>
            <ol className="space-y-4">
              {itinerary.map((step, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 rounded-lg bg-[#f5f2ed] p-5 sm:gap-6 sm:p-6"
                >
                  {step.numbered ? (
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#2c4549] text-sm font-semibold text-white">
                      {step.label}
                    </span>
                  ) : (
                    <span className="w-20 flex-shrink-0 font-['Playfair_Display'] text-lg font-semibold text-[#2c4549] sm:w-24">
                      {step.label}
                    </span>
                  )}
                  <p className="pt-1 leading-relaxed text-[#2c4549] sm:pt-0">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Inclusions / Exclusions */}
      {(inclusions.length > 0 || exclusions.length > 0) && (
        <section className="bg-[#f5f2ed] px-6 py-12 font-['Work_Sans',sans-serif] lg:px-10">
          <div className="mx-auto max-w-6xl">
            <SectionTitle>Package Details</SectionTitle>
            <div className="grid gap-10 md:grid-cols-2">
              {inclusions.length > 0 && (
                <div>
                  <h3 className="mb-4 font-['Playfair_Display'] text-xl font-semibold text-[#2c4549]">
                    What is included
                  </h3>
                  <ul className="space-y-3">
                    {inclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-[#2c4549]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exclusions.length > 0 && (
                <div>
                  <h3 className="mb-4 font-['Playfair_Display'] text-xl font-semibold text-[#2c4549]">
                    What is not included
                  </h3>
                  <ul className="space-y-3">
                    {exclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CrossIcon />
                        <span className="text-[#2c4549]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <WhatWeOffer />
      <Faq />
    </>
  )
}

export default PackageDetailPage