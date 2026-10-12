import React from 'react'

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Tours', href: '#' },
  { label: 'Packages', href: '#' },
  { label: 'About us', href: '#' },
  { label: 'Contact', href: '#' },
]

const tourLinks = [
  { label: 'Himalayan Treks', href: '#' },
  { label: 'Jungle Safaris', href: '#' },
  { label: 'Heritage Tours', href: '#' },
]

const socials = [
  { name: 'Instagram', href: 'https://instagram.com/yourpage' },
  { name: 'Facebook', href: 'https://facebook.com/yourpage' },
  { name: 'YouTube', href: 'https://youtube.com/@yourchannel' },
]

const crafted = {
  name: 'S.A.I.T Solution Nepal',
  href: 'https://sait.com.np/',
}

const ArrowUpRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
  >
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
)

// Link with a thin animated underline
const FooterLink = ({ href, external, children }) => (
  <a
    href={href}
    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    className="group relative inline-flex items-center gap-1.5"
  >
    {children}
    {external && <ArrowUpRight />}
    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[#f5f1ea] transition-transform duration-300 ease-out group-hover:scale-x-100" />
  </a>
)

const ColumnTitle = ({ children }) => (
  <h4 className="font-['Work_Sans'] text-[14px] font-medium uppercase tracking-[0.2em] text-[#f5f1ea]">
    {children}
  </h4>
)

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#2c4549] text-[#f5f1ea]">
      {/* Soft glow accent */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#e8b9a8]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pt-24">
        {/* Top: CTA + links */}
        <div className="grid grid-cols-1 gap-14 xl:grid-cols-2 xl:gap-16">
          {/* CTA */}
          <div className=" max-w-2xl">
            <p className="font-['Work_Sans'] text-[11px] font-medium uppercase tracking-[0.2em] text-[#f5f1ea]/60">
              Let&apos;s travel together
            </p>
            <h2 className="mt-5 font-['Playfair_Display'] text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-6xl">
              Your next adventure starts here.
            </h2>

            <a
              href="#"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#f5f1ea] py-2 pl-6 pr-2 font-['Work_Sans'] text-sm font-medium text-[#2c4549] transition-colors duration-300 sm:mt-10"
            >
              Plan your trip
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2c4549] text-[#f5f1ea] transition-transform duration-300 group-hover:rotate-45">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 font-['Work_Sans'] text-sm text-[#f5f1ea]/80 md:grid-cols-[1fr_1fr_1.6fr_1fr] md:gap-x-8 xl:gap-x-6">
            <div className="min-w-0">
              <ColumnTitle>Explore</ColumnTitle>
              <ul className="mt-5 space-y-3">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <FooterLink href={l.href}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <ColumnTitle>Tours</ColumnTitle>
              <ul className="mt-5 space-y-3">
                {tourLinks.map((l) => (
                  <li key={l.label}>
                    <FooterLink href={l.href}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact: full row on mobile so email never gets crushed */}
            <div className="col-span-2 min-w-0 md:col-span-1">
              <ColumnTitle>Contact</ColumnTitle>
              <ul className="mt-5 space-y-3">
                <li>
                  <FooterLink href="mailto:info@nepaltravel.com">
                    info@nepaltravel.com
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="https://wa.me/9779812345678" external>
                    +977 9812 345678
                  </FooterLink>
                </li>
                <li className="text-[#f5f1ea]/60">Thamel, Kathmandu 44600, Nepal</li>
              </ul>
            </div>

            <div className="min-w-0">
              <ColumnTitle>Follow</ColumnTitle>
              <ul className="mt-5 space-y-3">
                {socials.map((s) => (
                  <li key={s.name}>
                    <FooterLink href={s.href} external>
                      {s.name}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <p
            aria-hidden="true"
            className="select-none whitespace-nowrap text-center font-['Playfair_Display'] text-[11.5vw] font-bold uppercase leading-[0.85] tracking-tight text-[#f5f1ea]/10 transition-colors duration-700 hover:text-[#f5f1ea]"
          >
            Urban Sherpa
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-4 border-t border-[#f5f1ea]/15 py-6 text-center font-['Work_Sans'] text-xs text-[#f5f1ea]/60 sm:text-sm lg:grid lg:grid-cols-3 lg:gap-6 lg:text-left">
          {/* Copyright + legal */}
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-5 lg:items-center">
            <p>© {new Date().getFullYear()} Urban Sherpa</p>
            <div className="flex gap-5">
              <FooterLink href="#">Privacy</FooterLink>
              <FooterLink href="#">Terms</FooterLink>
            </div>
          </div>

          {/* Crafted by */}
          <p className="lg:text-center">
            Crafted by{' '}
            <a
              href={crafted.href}
              target="_blank"
              rel="noreferrer"
              className="text-[#f5f1ea] underline decoration-[#f5f1ea]/30 underline-offset-4 transition-colors duration-300"
            >
              {crafted.name}
            </a>
          </p>

          {/* Back to top */}
          <div className="flex justify-center lg:justify-end">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="group flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#f5f1ea]/25 bg-[#f5f1ea] text-[#2c4549] transition-colors duration-300 hover:border-[#e8b9a8]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
              >
                <path d="M12 19V5M6 11l6-6 6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer