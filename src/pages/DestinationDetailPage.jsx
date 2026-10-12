import React from "react";
import WhatWeOffer from "../components/WhatweOffer";
import Faq from "../components/FAQ";


const DestinationDetailPage = ({
  bgImage = "/images/bg.jpg",
  title = "Regular Packet",
  description = "Starting from €180/night for 2 people Flight tickets are not included, and prices start from €1000 per person!",
}) => {
  const buttonClasses =
    "inline-flex items-center justify-center rounded-lg border border-white/80 bg-[#2f4a52] px-5 py-3 text-base font-medium text-white transition-colors hover:bg-[#3a5a63] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2f4a52]";

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

          <div className="mt-8">
            <a href="#" className={`${buttonClasses} w-full sm:w-auto`}>
              Plan your trip
            </a>
          </div>
        </div>
      </section>

      {/* What we offer */}
  <WhatWeOffer/>
  <Faq/>
    </>
  );
};

export default DestinationDetailPage;