


import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import packageData from '../data/packageData.json'

const Chevron = ({ open }) => (
  <svg
    className={`h-3 w-3 transition-transform duration-300 ${
      open ? 'rotate-180' : ''
    }`}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path
      d="M5 8l5 5 5-5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const links = [
  { label: 'Packages', dropdown: true, href: '/packages' },
  { label: 'Destinations', dropdown: true, href: '/destinations' },
  { label: 'About us', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

// Generate dynamic menu items from packageData
const generatePackageMenus = () => {
  const packages = packageData.packages
  
  // Get unique categories
  const categories = [...new Set(packages.map(pkg => pkg.category))]
  
  return categories.map(category => {
    // Get first package from each category for the image
    const categoryPackage = packages.find(pkg => pkg.category === category)
    
    return {
      title: category.charAt(0).toUpperCase() + category.slice(1),
      img: categoryPackage?.image || '/images/t1.jpg',
      href: `/packages?category=${category}`,
    }
  })
}

const menus = {
  Packages: generatePackageMenus(),
  Destinations: [
    {
      title: 'Pokhara',
      img: '/images/t2.jpg',
      href: '/destinations/pokhara',
    },
    {
      title: 'Chitwan',
      img: '/images/banner.jpg',
      href: '/destinations/chitwan',
    },
    {
      title: 'Kathmandu',
      img: '/images/t3.jpg',
      href: '/destinations/kathmandu',
    },
  ],
}

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileSub, setMobileSub] = useState(null)
  const [visible, setVisible] = useState(true)
  const [atTop, setAtTop] = useState(true)

  const lastScrollY = useRef(0)
  const headerRef = useRef(null)

  // Hide navbar on scroll down and show it on scroll up.
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

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Prevent background scrolling when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close the mobile menu when switching to desktop.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false)
        setMobileSub(null)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Close desktop dropdowns when clicking outside or pressing Escape.
  useEffect(() => {
    const handlePointerDown = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setActiveMenu(null)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveMenu(null)
        setOpen(false)
        setMobileSub(null)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const showBg = !atTop || open

  const closeMobile = () => {
    setOpen(false)
    setMobileSub(null)
  }

  const toggleDesktopMenu = (label) => {
    setActiveMenu((previous) =>
      previous === label ? null : label
    )
  }

  const toggleMobileSubmenu = (label) => {
    setMobileSub((previous) =>
      previous === label ? null : label
    )
  }

  return (
    <>
      <header
        ref={headerRef}
        onPointerLeave={(event) => {
          if (event.pointerType === 'mouse') {
            setActiveMenu(null)
          }
        }}
        className={`fixed left-0 top-0 z-50 w-full font-['Work_Sans'] text-white transition-[transform,background-color,box-shadow] duration-300 ${
          visible || open ? 'translate-y-0' : '-translate-y-full'
        } ${
          showBg ? 'bg-[#2c4549] shadow-md' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              closeMobile()
              setActiveMenu(null)
            }}
            className="font-['Playfair_Display'] text-2xl font-bold uppercase"
          >
            urban sherpa
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-6 text-base lg:flex">
            {links.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="flex h-20 items-center gap-2"
                  onPointerEnter={(event) => {
                    if (event.pointerType === 'mouse') {
                      setActiveMenu(link.label)
                    }
                  }}
                >
                  {/* Clicking the label navigates to the page. */}
                  <Link
                    to={link.href}
                    onClick={() => setActiveMenu(null)}
                    className="relative py-1 transition hover:text-white/70"
                  >
                    {link.label}
                  </Link>

                  {/* Clicking the arrow opens or closes the dropdown. */}
                  <button
                    type="button"
                    aria-label={`Toggle ${link.label} dropdown`}
                    aria-haspopup="true"
                    aria-expanded={activeMenu === link.label}
                    onClick={() => toggleDesktopMenu(link.label)}
                    className="flex items-center justify-center py-2"
                  >
                    <Chevron open={activeMenu === link.label} />
                  </button>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onPointerEnter={(event) => {
                    if (event.pointerType === 'mouse') {
                      setActiveMenu(null)
                    }
                  }}
                  className="transition hover:text-white/70"
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Plan Trip */}
            <Link
              to="/#contact"
              onPointerEnter={(event) => {
                if (event.pointerType === 'mouse') {
                  setActiveMenu(null)
                }
              }}
              className="ml-2 rounded-md border border-white/80 px-5 py-2.5 transition hover:bg-white hover:text-[#2c4549]"
            >
              Plan Trip
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="relative z-10 flex h-10 w-10 items-center justify-center lg:hidden"
            onClick={() => (open ? closeMobile() : setOpen(true))}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 h-0.5 w-full rounded bg-white transition-all duration-300 ${
                  open
                    ? 'top-1/2 -translate-y-1/2 rotate-45'
                    : 'top-0'
                }`}
              />

              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded bg-white transition-all duration-300 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />

              <span
                className={`absolute left-0 h-0.5 w-full rounded bg-white transition-all duration-300 ${
                  open
                    ? 'top-1/2 -translate-y-1/2 -rotate-45'
                    : 'top-full -translate-y-full'
                }`}
              />
            </span>
          </button>
        </nav>

        {/* Desktop dropdown panels */}
        <div className="hidden lg:block">
          {Object.entries(menus).map(([label, items]) => {
            const isActive = activeMenu === label

            return (
              <div
                key={label}
                aria-hidden={!isActive}
                className={`absolute left-0 top-full w-full bg-[#f5f2ed] shadow-xl ${
                  isActive
                    ? 'visible z-10 translate-y-0 opacity-100 transition-all duration-300 ease-out'
                    : activeMenu
                      ? 'pointer-events-none invisible z-0 translate-y-0 opacity-100 transition-[visibility] delay-300'
                      : 'pointer-events-none invisible z-0 -translate-y-2 opacity-0 transition-all duration-300 ease-out'
                }`}
              >
                <div className="mx-auto grid max-w-[1200px] grid-cols-3 gap-4 px-6 py-8 xl:gap-10 xl:px-10 xl:py-10">
                  {items.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={() => setActiveMenu(null)}
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
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </header>

      {/* Full-screen mobile navigation */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 overflow-y-auto bg-[#2c4549] pt-24 font-['Work_Sans'] text-white transition-[clip-path,visibility] duration-500 ease-in-out lg:hidden ${
          open
            ? 'visible [clip-path:inset(0_0_0_0)]'
            : 'invisible [clip-path:inset(0_0_100%_0)]'
        }`}
      >
        <div className="px-6 pb-12">
          {links.map((link, index) => {
            const subOpen = mobileSub === link.label

            return (
              <div
                key={link.label}
                style={{
                  transitionDelay: open
                    ? `${150 + index * 70}ms`
                    : '0ms',
                }}
                className={`border-b border-white/10 transition-all duration-500 ${
                  open
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
              >
                {link.dropdown ? (
                  <>
                    {/* Label navigates; arrow toggles the accordion. */}
                    <div className="flex items-center justify-between gap-3">
                      <Link
                        to={link.href}
                        onClick={closeMobile}
                        className="flex-1 py-4 font-['Playfair_Display'] text-2xl sm:text-3xl"
                      >
                        {link.label}
                      </Link>

                      <button
                        type="button"
                        onClick={() =>
                          toggleMobileSubmenu(link.label)
                        }
                        aria-label={`Toggle ${link.label} submenu`}
                        aria-expanded={subOpen}
                        className="flex items-center justify-center p-3"
                      >
                        <Chevron open={subOpen} />
                      </button>
                    </div>

                    {/* Smooth mobile accordion */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        subOpen
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="grid grid-cols-1 gap-3 pb-5 sm:grid-cols-3">
                          {menus[link.label].map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
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
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    onClick={closeMobile}
                    className="block py-4 font-['Playfair_Display'] text-2xl sm:text-3xl"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            )
          })}

          {/* Mobile Plan Trip button */}
          <Link
            to="/#contact"
            onClick={closeMobile}
            style={{
              transitionDelay: open
                ? `${150 + links.length * 70}ms`
                : '0ms',
            }}
            className={`mt-8 block rounded-md border border-white/80 px-5 py-3.5 text-center transition-all duration-500 hover:bg-white hover:text-[#2c4549] ${
              open
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            Plan Trip
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar