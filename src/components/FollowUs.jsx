import React from 'react'

const posts = [
  { img: '/images/insta1.jpg', alt: 'Nepali food bowl', href: 'https://instagram.com/yourpage' },
  { img: '/images/insta2.jpg', alt: 'Himalayan mountain view', href: 'https://instagram.com/yourpage' },
  { img: '/images/insta3.jpg', alt: 'Lake with boats in Pokhara', href: 'https://instagram.com/yourpage' },
]

const FollowUs = () => {
  return (
    <section className="bg-[#f5f2ed] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      {/* Heading */}
      <h2 className="mx-auto max-w-4xl text-center font-['Playfair_Display'] text-2xl font-normal uppercase leading-tight text-[#2c4549] sm:text-4xl lg:text-5xl">
        Follow our journey on Instagram
      </h2>

      {/* Images */}
      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-2 lg:mt-14">
        {posts.map((post) => (
          <a
            key={post.img}
            href={post.href}
            target="_blank"
            rel="noreferrer"
            className="group block aspect-square overflow-hidden rounded-md"
          >
            <img
              src={post.img}
              alt={post.alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </a>
        ))}
      </div>
    </section>
  )
}

export default FollowUs