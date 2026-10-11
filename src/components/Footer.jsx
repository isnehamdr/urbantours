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

const crafted = {
  name: 'S.A.I.T Solution Nepal',
  href: 'https://sait.com.np/',
}

const socials = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/yourpage',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/yourpage',
    icon: <path d="M14 8h3V4h-3a4 4 0 00-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8z" />,
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@yourchannel',
    icon: (
      <>
        <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
        <path d="M10 9.5l5 2.5-5 2.5z" />
      </>
    ),
  },
]

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="transition-opacity duration-300 hover:text-[#e8b9a8]"
  >
    {children}
  </a>
)

const Footer = () => {
  return (
    <footer className="bg-[#2c4549] px-5 pt-14 text-[#f5f1ea] sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
      <div className="mx-auto max-w-7xl">
        {/* Top */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-['Playfair_Display'] text-3xl font-bold uppercase leading-none sm:text-4xl">
              Urban Sherpa
            </h3>
            <p className="mt-4 max-w-xs font-['Work_Sans'] text-sm leading-relaxed text-[#f5f1ea]/70">
              Turn your dream vacation into reality. We take care of every detail, and you just enjoy the magic of the Himalayas.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f5f1ea]/30 text-[#f5f1ea] transition-colors duration-300 hover:border-[#e8b9a8] hover:bg-[#e8b9a8] hover:text-[#2c4549]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-['Playfair_Display'] text-xl text-[#f5f1ea] sm:text-2xl">
              Quick links
            </h4>
            <ul className="mt-4 space-y-3 font-['Work_Sans'] text-sm text-[#f5f1ea]/80">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Tours */}
          <div>
            <h4 className="font-['Playfair_Display'] text-xl text-[#f5f1ea] sm:text-2xl">
              Our tours
            </h4>
            <ul className="mt-4 space-y-3 font-['Work_Sans'] text-sm text-[#f5f1ea]/80">
              {tourLinks.map((l) => (
                <li key={l.label}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Playfair_Display'] text-xl text-[#f5f1ea] sm:text-2xl">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 font-['Work_Sans'] text-sm text-[#f5f1ea]/80">
              <li>
                <FooterLink href="mailto:info@nepaltravel.com">info@nepaltravel.com</FooterLink>
              </li>
              <li>
                <FooterLink href="https://wa.me/9779812345678">+977 9812 345678</FooterLink>
              </li>
              <li>Thamel, Kathmandu 44600, Nepal</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-[#f5f1ea]/15 py-6 text-center font-['Work_Sans'] text-xs text-[#f5f1ea]/60 sm:mt-14 sm:text-sm lg:flex-row lg:justify-between lg:gap-6">
          {/* Copyright */}
          <p className="lg:flex-1 lg:text-left">
            © {new Date().getFullYear()} Urban Sherpa. All rights reserved.
          </p>

          {/* Crafted by */}
          <p className="lg:flex-1 lg:text-center">
            Crafted by:{' '}
            <a
              href={crafted.href}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[#f5f1ea] underline underline-offset-4 transition-colors duration-300 hover:text-[#e8b9a8]"
            >
              {crafted.name}
            </a>
          </p>

          {/* Legal links */}
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <a href="#" className="transition-opacity duration-300 hover:text-[#e8b9a8]">
              Privacy Policy
            </a>
            <a href="#" className="transition-opacity duration-300 hover:text-[#e8b9a8]">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer