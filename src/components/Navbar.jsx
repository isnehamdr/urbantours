import React, { useState, useEffect, useRef } from 'react'

const Chevron = () => (
  <svg className="h-3 w-3" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const links = [
  { label: 'Packages', dropdown: true },
  { label: 'Destinations', dropdown: true },
  { label: 'Special Offers' },
  { label: 'About us' },
  { label: 'Blog' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [atTop, setAtTop] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const diff = currentY - lastScrollY.current

      // Ignore tiny movements to avoid flicker
      if (Math.abs(diff) < 5) return

      if (currentY <= 10) {
        // At the very top: transparent and visible
        setAtTop(true)
        setVisible(true)
      } else if (diff > 0) {
        // Scrolling down: hide
        setAtTop(false)
        setVisible(false)
        setOpen(false)
      } else {
        // Scrolling up: show with background
        setAtTop(false)
        setVisible(true)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showBg = !atTop || open

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full font-['Work_Sans'] text-white transition-all duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${showBg ? 'bg-[#2c4549] shadow-md' : 'bg-transparent'}`}
    >
      <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="/" className="font-['Playfair_Display'] text-2xl font-bold uppercase ">
          urban sherpa 
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 text-md md:flex font-['Work_Sans']">
          {links.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-2 transition hover:text-white/70"
            >
              {link.label}
              {link.dropdown && <Chevron />}
            </a>
          ))}
          <a
            href="#"
            className="ml-2 rounded-md border border-white/80 px-5 py-2.5 transition hover:bg-white hover:text-[#2c4549]"
          >
            Plan Trip
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-4 border-t border-white/10 px-6 pb-6 pt-4 text-sm md:hidden">
          {links.map((link) => (
            <a key={link.label} href="#" className="flex items-center justify-between">
              {link.label}
              {link.dropdown && <Chevron />}
            </a>
          ))}
          <a href="#" className="mt-2 rounded-md border border-white/80 px-5 py-2.5 text-center">
            Plan Trip
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar