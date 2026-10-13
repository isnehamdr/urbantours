import React from "react";

const posts = [
  {
    id: 1,
    image: "/images/insta1.jpg",
    title: "Top Cafes in Bali for Coffee Lovers and Foodies",
    excerpt:
      "Discover Bali's top cafes for coffee and brunch. From Ubud to Canggu, explore the best spots for great coffee, smoothie bowls, and Instagram-worthy vibes.",
    author: "Anna",
    date: "November 18, 2024",
    readTime: "3 min",
  },
  {
    id: 2,
    image: "/images/insta2.jpg",
    title: "Best Local Foods to Try in Bali",
    excerpt:
      "Explore Bali's best local dishes, from babi guling to date fish. Discover authentic Balinese flavors and where to find the island's most delicious meals.",
    author: "John",
    date: "November 18, 2024",
    readTime: "3 min",
  },
  {
    id: 3,
    image: "/images/insta3.jpg",
    title: "Top 5 Bali Waterfalls for Adventure Lovers",
    excerpt:
      "Dive into Bali's natural wonders with these top 5 waterfalls. Perfect for hiking, swimming, and capturing Instagram-worthy moments in the wild.",
    author: "Anna",
    date: "November 18, 2024",
    readTime: "3 min",
  },
  {
    id: 4,
    image: "/images/t1.jpg",
    title: "Ultimate Guide to Bali's Hidden Beaches",
    excerpt:
      "Explore Bali's hidden beaches with pristine sands, crystal waters, and serene vibes. Find secluded gems perfect for relaxation and surfing adventures.",
    author: "Kevin",
    date: "November 18, 2024",
    readTime: "1 min",
  },
  {
    id: 5,
    image: "/images/t2.jpg",
    title: "Best Places to Visit in Uluwatu",
    excerpt:
      "Discover the best places to visit in Uluwatu, Bali, from stunning beaches and iconic temples to trendy cafes and secret sunset spots.",
    author: "John",
    date: "November 18, 2024",
    readTime: "3 min",
  },
];

const BlogPage = () => {
  return (
    <section className="bg-[#f6f3ef] px-5 py-14 sm:px-8 md:py-20 lg:px-10 lg:pt-36">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-14">
          <h2
            className="text-3xl font-bold uppercase tracking-wide text-[#2f4a4f] md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Latest Posts
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[11px] text-gray-500 lg:text-lg font-light">
            Read about the latest tips and news on Bali
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {posts.map((post) => (
            <article key={post.id} className="group flex cursor-pointer flex-col">
              <div className="overflow-hidden rounded-md shadow-md">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-40 lg:h-64"
                />
              </div>

              <h3
                className="mt-4 text-base font-medium  text-[#5b5b5b] md:text-3xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {post.title}
              </h3>

              <p className="mt-2 text-[11px] font-normal text-gray-500 md:text-[16px]">
                {post.excerpt}
              </p>

              <div className="mt-4 text-[10px] sm:text-[16px] text-gray-700">
                <p className="font-medium">{post.author}</p>
                <p className="mt-0 font-medium">
                  {post.date} <span className="mx-1">•</span> {post.readTime}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;