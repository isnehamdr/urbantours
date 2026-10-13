// import React from "react";
// import WhatWeOffer from "../components/WhatweOffer";
// import Faq from "../components/FAQ";


// const PackageDetailPage = ({
//   bgImage = "/images/bg.jpg",
//   title = "Regular Packet",
//   description = "Starting from €180/night for 2 people Flight tickets are not included, and prices start from €1000 per person!",
// }) => {
//   const buttonClasses =
//     "inline-flex items-center justify-center rounded-lg border border-white/80 bg-[#2f4a52] px-5 py-3 text-base font-medium text-white transition-colors hover:bg-[#3a5a63] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2f4a52]";

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

//           <div className="mt-8">
//             <a href="#" className={`${buttonClasses} w-full sm:w-auto`}>
//               Plan your trip
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* What we offer */}
//   <WhatWeOffer/>
//   <Faq/>
//     </>
//   );
// };

// export default PackageDetailPage;



import React from 'react'
import { useParams } from 'react-router-dom'
import WhatWeOffer from "../components/WhatweOffer";
import Faq from "../components/FAQ";
import packageData from '../data/packageData.json'

const PackageDetailPage = () => {
  const { slug } = useParams()
  
  // Find the package by slug
  const pkg = packageData.packages.find(p => p.slug === slug)
  
  // Fallback data if package not found
  const bgImage = pkg?.image || "/images/bg.jpg"
  const title = pkg?.title || "Package"
  const description = pkg?.description || "Starting from €180/night for 2 people Flight tickets are not included, and prices start from €1000 per person!"

  const buttonClasses =
    "inline-flex items-center justify-center rounded-lg border border-white/80 bg-[#2f4a52] px-5 py-3 text-base font-medium text-white transition-colors hover:bg-[#3a5a63] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2f4a52]";

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Package not found</h1>
      </div>
    )
  }

  return (
    <>
      <section
        className="relative isolate w-full overflow-hidden bg-cover bg-center font-['Work_Sans',sans-serif] text-white lg:min-h-[550px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 -z-10 bg-black/55" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-transparent to-black/20" />

        {/* Hero content */}
        <div className="relative z-10 flex max-w-4xl flex-col px-6 pb-8 pt-24 sm:px-10 sm:pt-32 md:pt-40 lg:px-24 lg:pt-56">
          <h1 className="max-w-[18ch] font-['Playfair_Display',serif] text-4xl font-semibold uppercase leading-[1.05] tracking-[2px] text-[#f5f1ea] sm:text-5xl md:max-w-[20ch] md:text-5xl">
            {title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg lg:mt-6 lg:leading-8">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#" className={`${buttonClasses} w-full sm:w-auto`}>
              Plan your trip
            </a>
            <div className="flex items-center gap-2 text-white/80">
              <span className="text-sm">Duration:</span>
              <span className="font-semibold">{pkg.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <span className="text-sm">Difficulty:</span>
              <span className="font-semibold">{pkg.difficulty}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Package Details Section */}
      <section className="bg-[#f5f2ed] py-12 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold uppercase text-[#2c4549] mb-8">
            Package Highlights
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {pkg.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2f4a52] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#2c4549]">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="bg-white py-12 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold uppercase text-[#2c4549] mb-8">
            Itinerary
          </h2>
          <div className="space-y-4">
            {pkg.itinerary.map((day, index) => (
              <div key={index} className="bg-[#f5f2ed] p-6 rounded-lg">
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#2c4549]">
                  {day}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatWeOffer/>
      <Faq/>
    </>
  );
};

export default PackageDetailPage;