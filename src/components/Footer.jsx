import React, { useState, useEffect, useRef } from 'react'

const Chevron = ({ open }) => (
  <svg
    className={`h-3 w-3 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const links = [
  { label: 'Packages', dropdown: true },
  { label: 'Destinations', dropdown: true },
  { label: 'About us' },
  { label: 'Blog' },
]

// Dropdown content (keyed by link label)
const menus = {
  Packages: [
    { title: 'Regular Package', img: '/image/package-1.jpg', href: '#' },
    { title: 'Premium Package', img: '/image/package-2.jpg', href: '#' },
    { title: 'Event Package', img: '/image/package-3.jpg', href: '#' },
  ],
  Destinations: [
    { title: 'Pokhara', img: '/image/destination-1.jpg', href: '#' },
    { title: 'Chitwan', img: '/image/destination-2.jpg', href: '#' },
    { title: 'Kathmandu', img: '/image/destination-3.jpg', href: '#' },
  ],
}

const Navbar = () => {
  const [open, setOpen] = useState(false) // mobile full-screen menu
  const [activeMenu, setActiveMenu] = useState(null) // desktop dropdown
  const [mobileSub, setMobileSub] = useState(null) // mobile accordion
  const [visible, setVisible] = useState(true)
  const [atTop, setAtTop] = useState(true)
  const lastScrollY = useRef(0)
  const headerRef = useRef(null)

  // Hide on scroll down / show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const diff = currentY - lastScrollY.current

      if (Math.abs(diff) < 5) return

      if (currentY <= 10) {
        setAtTop(true)
        setVisible(true)
      } else if (diff > 0) {
        setAtTop(false)
        setVisible(false)
        setActiveMenu(null)
      } else {
        setAtTop(false)
        setVisible(true)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close mobile menu when resizing up to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false)
        setMobileSub(null)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Click outside / Escape closes menus
  useEffect(() => {
    const onPointerDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setActiveMenu(null)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setActiveMenu(null)
        setOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  // Navbar stays transparent when a desktop dropdown is open
  const showBg = !atTop || open

  const closeMobile = () => {
    setOpen(false)
    setMobileSub(null)
  }

  return (
    <>
      <header
        ref={headerRef}
        onPointerLeave={(e) => e.pointerType === 'mouse' && setActiveMenu(null)}
        className={`fixed left-0 top-0 z-50 w-full font-['Work_Sans'] text-white transition-[transform,background-color,box-shadow] duration-300 ${
          visible || open ? 'translate-y-0' : '-translate-y-full'
        } ${showBg ? 'bg-[#2c4549] shadow-md' : 'bg-transparent'}`}
      >
        <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <a href="/" className="font-['Playfair_Display'] text-2xl font-bold uppercase">
            urban sherpa
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 text-base lg:flex">
            {links.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="flex h-20 items-center"
                  onPointerEnter={(e) => e.pointerType === 'mouse' && setActiveMenu(link.label)}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={activeMenu === link.label}
                    // touch devices: tap toggles
                    onPointerUp={(e) =>
                      e.pointerType !== 'mouse' &&
                      setActiveMenu((prev) => (prev === link.label ? null : link.label))
                    }
                    // keyboard (Enter / Space) toggles
                    onClick={(e) =>
                      e.detail === 0 &&
                      setActiveMenu((prev) => (prev === link.label ? null : link.label))
                    }
                    className="relative flex items-center gap-2 py-1"
                  >
                    {link.label}
                    <Chevron open={activeMenu === link.label} />
                    {/* Underline indicator */}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-white transition-transform duration-300 ${
                        activeMenu === link.label ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </button>
                </div>
              ) : (
                <a
                  key={link.label}
                  href="#"
                  className="transition hover:text-white/70"
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="#"
              className="ml-2 rounded-md border border-white/80 px-5 py-2.5 transition hover:bg-white hover:text-[#2c4549]"
            >
              Plan Trip
            </a>
          </div>

          {/* Mobile toggle (morphing hamburger -> X) */}
          <button
            type="button"
            className="relative z-10 flex h-10 w-10 items-center justify-center lg:hidden"
            onClick={() => (open ? closeMobile() : setOpen(true))}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 h-0.5 w-full rounded bg-white transition-all duration-300 ${
                  open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded bg-white transition-all duration-300 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-full rounded bg-white transition-all duration-300 ${
                  open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'top-full -translate-y-full'
                }`}
              />
            </span>
          </button>
        </nav>

        {/* Desktop dropdown panels (full width, under the navbar) */}
        <div className="hidden lg:block">
          {Object.entries(menus).map(([label, items]) => {
            const isActive = activeMenu === label
            return (
              <div
                key={label}
                aria-hidden={!isActive}
                className={`absolute left-0 top-full w-full bg-[#f5f2ed] shadow-xl transition-all duration-300 ease-out ${
                  isActive
                    ? 'visible translate-y-0 opacity-100'
                    : 'pointer-events-none invisible -translate-y-2 opacity-0'
                }`}
              >
                <div className="mx-auto grid max-w-[1200px] grid-cols-3 gap-4 px-6 py-8 xl:gap-10 xl:px-10 xl:py-10">
                  {items.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      tabIndex={isActive ? 0 : -1}
                      className="group relative block aspect-square overflow-hidden rounded-md shadow-lg shadow-black/10"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />
                      <h4 className="absolute bottom-0 left-0 w-2/3 p-5 font-['Playfair_Display'] text-xl font-medium leading-tight text-[#f5f1ea] xl:p-7 xl:text-4xl">
                        {item.title}
                      </h4>
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </header>

      {/* Mobile full-screen menu (outside the header so it can cover the whole viewport) */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 overflow-y-auto bg-[#2c4549] pt-24 font-['Work_Sans'] text-white transition-[clip-path,visibility] duration-500 ease-in-out lg:hidden ${
          open ? 'visible [clip-path:inset(0_0_0_0)]' : 'invisible [clip-path:inset(0_0_100%_0)]'
        }`}
      >
        <div className="px-6 pb-12">
          {links.map((link, i) => {
            const subOpen = mobileSub === link.label
            return (
              <div
                key={link.label}
                style={{ transitionDelay: open ? `${150 + i * 70}ms` : '0ms' }}
                className={`border-b border-white/10 transition-all duration-500 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                {link.dropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setMobileSub(subOpen ? null : link.label)}
                      aria-expanded={subOpen}
                      className="flex w-full items-center justify-between py-4 font-['Playfair_Display'] text-2xl sm:text-3xl"
                    >
                      {link.label}
                      <Chevron open={subOpen} />
                    </button>

                    {/* Smooth accordion (grid-rows trick) */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        subOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="grid grid-cols-1 gap-3 pb-5 sm:grid-cols-3">
                          {menus[link.label].map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              onClick={closeMobile}
                              tabIndex={subOpen ? 0 : -1}
                              className="group relative block h-28 overflow-hidden rounded-md sm:h-44"
                            >
                              <img
                                src={item.img}
                                alt={item.title}
                                className="absolute inset-0 h-full w-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/20" />
                              <span className="absolute bottom-0 left-0 p-4 font-['Playfair_Display'] text-xl leading-tight text-[#f5f1ea]">
                                {item.title}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href="#"
                    onClick={closeMobile}
                    className="block py-4 font-['Playfair_Display'] text-2xl sm:text-3xl"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            )
          })}

          <a
            href="#"
            onClick={closeMobile}
            style={{ transitionDelay: open ? `${150 + links.length * 70}ms` : '0ms' }}
            className={`mt-8 block rounded-md border border-white/80 px-5 py-3.5 text-center transition-all duration-500 hover:bg-white hover:text-[#2c4549] ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Plan Trip
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar