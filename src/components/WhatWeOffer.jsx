import React from "react";

/**
 * Uses Playfair Display + Work Sans (same as the banner and FAQ).
 * Add this once to your global CSS or index.html if you haven't already:
 * @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Work+Sans:wght@300;400;500;600&display=swap');
 */

const DEFAULT_OFFERS = [
  {
    label: "Accommodation:",
    text: "Stay in two or three locations (jungle and ocean) in 4- and 5-star hotels with breakfast included.",
  },
  {
    label: "Private Transfers:",
    text: "Airport – Location 1 – Location 2 – Airport.",
  },
  {
    label: "Private Tours:",
    text: "Two full days of private tours in the jungle area.",
  },
  {
    label: "Full-Time Assistance:",
    text: "Available via WhatsApp before and throughout your trip.",
  },
];

const DEFAULT_EXCLUDED = [
  "Flight tickets",
  "Entrance fees to tourist attractions",
  "Tips, meals, shopping, etc.",
];

const WhatWeOffer = ({
  // Replace with your own image (import it or use a /public path)
  image = "/images/himalaya.jpg",
  imageAlt = "Mountain landscape in the Himalayas",
  title = "What we offer",
  offers = DEFAULT_OFFERS,
  excluded = DEFAULT_EXCLUDED,
  note = "You can also add extra activities to these packages, such as helicopter rides, paragliding, catamaran cruises, rafting, ATV tours, snorkeling, cooking classes, silver workshops, and more.",
}) => {
  return (
    <section className="w-full bg-[#f5f2ee] px-6 py-12 font-['Work_Sans',sans-serif] text-[#2f4a52] sm:px-10 sm:py-16 lg:px-16 lg:py-20 xl:px-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-24">
        {/* Text column */}
        <div className="max-w-md lg:max-w-none">
          <h2 className="font-['Playfair_Display',serif] text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl">
            {title}
          </h2>

          <dl className="mt-8 space-y-7 sm:mt-10">
            {offers.map(({ label, text }) => (
              <div key={label}>
                <dt className="font-semibold">{label}</dt>
                <dd className="mt-1 text-base font-light leading-relaxed text-[#2f4a52]/80 sm:text-lg">
                  {text}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-base font-light text-[#2f4a52]/80 sm:text-lg">
            The package does <strong className="font-semibold">not</strong>{" "}
            include:
          </p>

          <ul className="mt-3 list-disc space-y-1 pl-10 text-base font-normal text-[#2f4a52]/85 marker:text-[#2f4a52] sm:text-lg">
            {excluded.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {note && (
            <p className="mt-6 text-sm font-light italic leading-7 text-[#2f4a52]/70 sm:text-[15px]">
              {note}
            </p>
          )}
        </div>

        {/* Image column */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="aspect-[4/5] h-full w-full object-cover sm:aspect-[3/4] lg:aspect-auto lg:min-h-[640px]"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;