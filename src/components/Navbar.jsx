// // import React, { useState, useEffect, useRef } from 'react'
// // import { Link, useLocation } from 'react-router-dom'
// // import packageData from '../data/packageData.json'


// // const Chevron = ({ open }) => (
// //   <svg
// //     className={`h-3 w-3 transition-transform duration-300 ${
// //       open ? 'rotate-180' : ''
// //     }`}
// //     viewBox="0 0 20 20"
// //     fill="none"
// //     stroke="currentColor"
// //     strokeWidth="2"
// //     aria-hidden="true"
// //   >
// //     <path
// //       d="M5 8l5 5 5-5"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //   </svg>
// // )

// // const links = [
// //   { label: 'Packages', dropdown: true },
// //   { label: 'About us', href: '/about' },
// //   { label: 'Blog', href: '/blog' },
// // ]

// // // Pages whose background is light (#f6f3ef) and need dark navbar text.
// // const lightPages = ['/blog', '/contact']

// // const isLightRoute = (pathname) =>
// //   lightPages.some(
// //     (path) => pathname === path || pathname.startsWith(`${path}/`)
// //   )

// // // Generate dynamic menu items from packageData
// // const generatePackageMenus = () => {
// //   const packages = packageData.packages

// //   // Get unique categories
// //   const categories = [...new Set(packages.map((pkg) => pkg.category))]

// //   return categories.map((category) => {
// //     // Get first package from each category for the image
// //     const categoryPackage = packages.find((pkg) => pkg.category === category)

// //     return {
// //       title: category.charAt(0).toUpperCase() + category.slice(1),
// //       img: categoryPackage?.image || '/images/t1.jpg',
// //       href: `/packages?category=${category}`,
// //     }
// //   })
// // }



// // const menus = {
// //   Packages: generatePackageMenus(),

// // }

// // const Navbar = () => {
// //   const [open, setOpen] = useState(false)
// //   const [activeMenu, setActiveMenu] = useState(null)
// //   const [mobileSub, setMobileSub] = useState(null)
// //   const [visible, setVisible] = useState(true)
// //   const [atTop, setAtTop] = useState(true)

// //   const lastScrollY = useRef(0)
// //   const headerRef = useRef(null)

// //   const { pathname } = useLocation()
// //   const lightPage = isLightRoute(pathname)

// //   // Reset navbar state whenever the route changes.
// //   useEffect(() => {
// //     const y = window.scrollY
// //     lastScrollY.current = y
// //     setAtTop(y <= 10)
// //     setVisible(true)
// //     setActiveMenu(null)
// //     setOpen(false)
// //     setMobileSub(null)
// //   }, [pathname])

// //   // Hide navbar on scroll down and show it on scroll up.
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const currentY = window.scrollY
// //       const diff = currentY - lastScrollY.current

// //       if (Math.abs(diff) < 5) return

// //       if (currentY <= 10) {
// //         setAtTop(true)
// //         setVisible(true)
// //       } else if (diff > 0) {
// //         setAtTop(false)
// //         setVisible(false)
// //         setActiveMenu(null)
// //       } else {
// //         setAtTop(false)
// //         setVisible(true)
// //       }

// //       lastScrollY.current = currentY
// //     }

// //     window.addEventListener('scroll', handleScroll, { passive: true })

// //     return () => {
// //       window.removeEventListener('scroll', handleScroll)
// //     }
// //   }, [])

// //   // Prevent background scrolling when the mobile menu is open.
// //   useEffect(() => {
// //     document.body.style.overflow = open ? 'hidden' : ''

// //     return () => {
// //       document.body.style.overflow = ''
// //     }
// //   }, [open])

// //   // Close the mobile menu when switching to desktop.
// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth >= 1024) {
// //         setOpen(false)
// //         setMobileSub(null)
// //       }
// //     }

// //     window.addEventListener('resize', handleResize)

// //     return () => {
// //       window.removeEventListener('resize', handleResize)
// //     }
// //   }, [])

// //   // Close desktop dropdowns when clicking outside or pressing Escape.
// //   useEffect(() => {
// //     const handlePointerDown = (event) => {
// //       if (headerRef.current && !headerRef.current.contains(event.target)) {
// //         setActiveMenu(null)
// //       }
// //     }

// //     const handleKeyDown = (event) => {
// //       if (event.key === 'Escape') {
// //         setActiveMenu(null)
// //         setOpen(false)
// //         setMobileSub(null)
// //       }
// //     }

// //     document.addEventListener('pointerdown', handlePointerDown)
// //     document.addEventListener('keydown', handleKeyDown)

// //     return () => {
// //       document.removeEventListener('pointerdown', handlePointerDown)
// //       document.removeEventListener('keydown', handleKeyDown)
// //     }
// //   }, [])

// //   const showBg = !atTop || open
  
// //   const darkText = lightPage && !showBg
  
// //   const textClass = darkText ? 'text-[#2f4a4f]' : 'text-white'
// //   const hoverClass = darkText
// //     ? 'hover:text-[#2f4a4f]/70'
// //     : 'hover:text-white/70'
// //   const barClass = open ? 'bg-white' : darkText ? 'bg-[#2f4a4f]' : 'bg-white'
// //   const btnClass = darkText
// //     ? 'border-[#2f4a4f]/80 hover:bg-[#2f4a4f] hover:text-white'
// //     : 'border-white/80 hover:bg-white hover:text-[#2c4549]'

// //   const closeMobile = () => {
// //     setOpen(false)
// //     setMobileSub(null)
// //   }

// //   const toggleDesktopMenu = (label) => {
// //     setActiveMenu((previous) => (previous === label ? null : label))
// //   }

// //   const toggleMobileSubmenu = (label) => {
// //     setMobileSub((previous) => (previous === label ? null : label))
// //   }

// //   return (
// //     <>
// //       <header
// //         ref={headerRef}
// //         onPointerLeave={(event) => {
// //           if (event.pointerType === 'mouse') {
// //             setActiveMenu(null)
// //           }
// //         }}
// //         className={`fixed left-0 top-0 z-50 w-full font-['Work_Sans'] ${textClass} transition-[transform,background-color,box-shadow,color] duration-300 ${
// //           visible || open ? 'translate-y-0' : '-translate-y-full'
// //         } ${showBg ? 'bg-[#2c4549] shadow-md' : 'bg-transparent'}`}
// //       >
// //         <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
// //           {/* Logo */}
// //           <Link
// //             to="/"
// //             onClick={() => {
// //               closeMobile()
// //               setActiveMenu(null)
// //             }}
// //             className="font-['Playfair_Display'] text-2xl font-bold uppercase"
// //           >
// //             urban sherpa
// //           </Link>

// //           {/* Desktop navigation */}
// //           <div className="hidden items-center gap-6 text-base lg:flex lg:text-lg font-medium">
// //             {links.map((link) =>
// //               link.dropdown ? (
// //                 <div
// //                   key={link.label}
// //                   className="flex h-20 items-center gap-2"
// //                   onPointerEnter={(event) => {
// //                     if (event.pointerType === 'mouse') {
// //                       setActiveMenu(link.label)
// //                     }
// //                   }}
// //                 >
// //                   <Link
// //                     to={link.href}
// //                     onClick={() => setActiveMenu(null)}
// //                     className={`relative py-1 transition ${hoverClass}`}
// //                   >
// //                     {link.label}
// //                   </Link>

// //                   <button
// //                     type="button"
// //                     aria-label={`Toggle ${link.label} dropdown`}
// //                     aria-haspopup="true"
// //                     aria-expanded={activeMenu === link.label}
// //                     onClick={() => toggleDesktopMenu(link.label)}
// //                     className="flex items-center justify-center py-2"
// //                   >
// //                     <Chevron open={activeMenu === link.label} />
// //                   </button>
// //                 </div>
// //               ) : (
// //                 <Link
// //                   key={link.label}
// //                   to={link.href}
// //                   onPointerEnter={(event) => {
// //                     if (event.pointerType === 'mouse') {
// //                       setActiveMenu(null)
// //                     }
// //                   }}
// //                   className={`transition ${hoverClass}`}
// //                 >
// //                   {link.label}
// //                 </Link>
// //               )
// //             )}

// //             {/* Plan Trip */}
// //             <Link
// //               to="/contact"
// //               onPointerEnter={(event) => {
// //                 if (event.pointerType === 'mouse') {
// //                   setActiveMenu(null)
// //                 }
// //               }}
// //               className={`ml-2 rounded-md border px-5 py-2.5 transition ${btnClass}`}
// //             >
// //               Plan Trip
// //             </Link>
// //           </div>

// //           {/* Mobile hamburger button */}
// //           <button
// //             type="button"
// //             className="relative z-10 flex h-10 w-10 items-center justify-center lg:hidden"
// //             onClick={() => (open ? closeMobile() : setOpen(true))}
// //             aria-label={open ? 'Close menu' : 'Open menu'}
// //             aria-expanded={open}
// //           >
// //             <span className="relative block h-4 w-6">
// //               <span
// //                 className={`absolute left-0 h-0.5 w-full rounded ${barClass} transition-all duration-300 ${
// //                   open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
// //                 }`}
// //               />

// //               <span
// //                 className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded ${barClass} transition-all duration-300 ${
// //                   open ? 'opacity-0' : 'opacity-100'
// //                 }`}
// //               />

// //               <span
// //                 className={`absolute left-0 h-0.5 w-full rounded ${barClass} transition-all duration-300 ${
// //                   open
// //                     ? 'top-1/2 -translate-y-1/2 -rotate-45'
// //                     : 'top-full -translate-y-full'
// //                 }`}
// //               />
// //             </span>
// //           </button>
// //         </nav>

// //         {/* Desktop dropdown panels */}
// //         <div className="hidden lg:block">
// //           {Object.entries(menus).map(([label, items]) => {
// //             const isActive = activeMenu === label

// //             return (
// //               <div
// //                 key={label}
// //                 aria-hidden={!isActive}
// //                 className={`absolute left-0 top-full w-full bg-[#f5f2ed] shadow-xl ${
// //                   isActive
// //                     ? 'visible z-10 translate-y-0 opacity-100 transition-all duration-300 ease-out'
// //                     : activeMenu
// //                       ? 'pointer-events-none invisible z-0 translate-y-0 opacity-100 transition-[visibility] delay-300'
// //                       : 'pointer-events-none invisible z-0 -translate-y-2 opacity-0 transition-all duration-300 ease-out'
// //                 }`}
// //               >
// //                 <div className="mx-auto grid max-w-[1200px] grid-cols-3 gap-4 px-6 py-8 xl:gap-10 xl:px-10 xl:py-10">
// //                   {items.map((item) => (
// //                     <Link
// //                       key={item.title}
// //                       to={item.href}
// //                       onClick={() => setActiveMenu(null)}
// //                       tabIndex={isActive ? 0 : -1}
// //                       className="group relative block aspect-square overflow-hidden rounded-md shadow-lg shadow-black/10"
// //                     >
// //                       <img
// //                         src={item.img}
// //                         alt={item.title}
// //                         className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
// //                       />

// //                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />

// //                       <h4 className="absolute bottom-0 left-0 w-2/3 p-5 font-['Playfair_Display'] text-xl font-medium leading-tight text-[#f5f1ea] xl:p-7 xl:text-4xl">
// //                         {item.title}
// //                       </h4>
// //                     </Link>
// //                   ))}
// //                 </div>
// //               </div>
// //             )
// //           })}
// //         </div>
// //       </header>

// //       {/* Full-screen mobile navigation */}
// //       <div
// //         aria-hidden={!open}
// //         className={`fixed inset-0 z-40 overflow-y-auto bg-[#2c4549] pt-24 font-['Work_Sans'] text-white transition-[clip-path,visibility] duration-500 ease-in-out lg:hidden ${
// //           open
// //             ? 'visible [clip-path:inset(0_0_0_0)]'
// //             : 'invisible [clip-path:inset(0_0_100%_0)]'
// //         }`}
// //       >
// //         <div className="px-6 pb-12">
// //           {links.map((link, index) => {
// //             const subOpen = mobileSub === link.label

// //             return (
// //               <div
// //                 key={link.label}
// //                 style={{
// //                   transitionDelay: open ? `${150 + index * 70}ms` : '0ms',
// //                 }}
// //                 className={`border-b border-white/10 transition-all duration-500 ${
// //                   open
// //                     ? 'translate-y-0 opacity-100'
// //                     : 'translate-y-4 opacity-0'
// //                 }`}
// //               >
// //                 {link.dropdown ? (
// //                   <>
// //                     <div className="flex items-center justify-between gap-3">
// //                       <Link
// //                         to={link.href}
// //                         onClick={closeMobile}
// //                         className="flex-1 py-4 font-['Playfair_Display'] text-2xl sm:text-3xl"
// //                       >
// //                         {link.label}
// //                       </Link>

// //                       <button
// //                         type="button"
// //                         onClick={() => toggleMobileSubmenu(link.label)}
// //                         aria-label={`Toggle ${link.label} submenu`}
// //                         aria-expanded={subOpen}
// //                         className="flex items-center justify-center p-3"
// //                       >
// //                         <Chevron open={subOpen} />
// //                       </button>
// //                     </div>

// //                     <div
// //                       className={`grid transition-all duration-500 ease-in-out ${
// //                         subOpen
// //                           ? 'grid-rows-[1fr] opacity-100'
// //                           : 'grid-rows-[0fr] opacity-0'
// //                       }`}
// //                     >
// //                       <div className="overflow-hidden">
// //                         <div className="grid grid-cols-1 gap-3 pb-5 sm:grid-cols-3">
// //                           {menus[link.label].map((item) => (
// //                             <Link
// //                               key={item.title}
// //                               to={item.href}
// //                               onClick={closeMobile}
// //                               tabIndex={subOpen ? 0 : -1}
// //                               className="group relative block h-28 overflow-hidden rounded-md sm:h-44"
// //                             >
// //                               <img
// //                                 src={item.img}
// //                                 alt={item.title}
// //                                 className="absolute inset-0 h-full w-full object-cover"
// //                               />

// //                               <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/20" />

// //                               <span className="absolute bottom-0 left-0 p-4 font-['Playfair_Display'] text-xl leading-tight text-[#f5f1ea]">
// //                                 {item.title}
// //                               </span>
// //                             </Link>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </>
// //                 ) : (
// //                   <Link
// //                     to={link.href}
// //                     onClick={closeMobile}
// //                     className="block py-4 font-['Playfair_Display'] text-2xl sm:text-3xl"
// //                   >
// //                     {link.label}
// //                   </Link>
// //                 )}
// //               </div>
// //             )
// //           })}

// //           {/* Mobile Plan Trip button */}
// //           <Link
// //             to="/contact"
// //             onClick={closeMobile}
// //             style={{
// //               transitionDelay: open ? `${150 + links.length * 70}ms` : '0ms',
// //             }}
// //             className={`mt-8 block rounded-md border border-white/80 px-5 py-3.5 text-center transition-all duration-500 hover:bg-white hover:text-[#2c4549] ${
// //               open
// //                 ? 'translate-y-0 opacity-100'
// //                 : 'translate-y-4 opacity-0'
// //             }`}
// //           >
// //             Plan Trip
// //           </Link>
// //         </div>
// //       </div>
// //     </>
// //   )
// // }

// // export default Navbar


// import React, { useState, useEffect, useRef } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import packageData from '../data/packageData.json'

// const Chevron = ({ open }) => (
//   <svg
//     className={`h-3 w-3 transition-transform duration-300 ${
//       open ? 'rotate-180' : ''
//     }`}
//     viewBox="0 0 20 20"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     aria-hidden="true"
//   >
//     <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// )

// const links = [
//   { label: 'Packages', dropdown: true, href: '/packages' },
//   { label: 'About us', href: '/about' },
//   { label: 'Blog', href: '/blog' },
// ]

// // Pages whose background is light (#f6f3ef) and need dark navbar text.
// const lightPages = ['/blog', '/contact']

// const isLightRoute = (pathname) =>
//   lightPages.some(
//     (path) => pathname === path || pathname.startsWith(`${path}/`)
//   )

// // Menu items come from packageData.categories
// // (Sightseeing, Hikes, Treks, Tours, Tailored Trips).
// const generatePackageMenus = () =>
//   packageData.categories.map((cat) => ({
//     title: cat.title,
//     img: cat.image,
//     href: `/packages?category=${cat.slug}`,
//   }))

// const menus = {
//   Packages: generatePackageMenus(),
// }

// const Navbar = () => {
//   const [open, setOpen] = useState(false)
//   const [activeMenu, setActiveMenu] = useState(null)
//   const [mobileSub, setMobileSub] = useState(null)
//   const [visible, setVisible] = useState(true)
//   const [atTop, setAtTop] = useState(true)

//   const lastScrollY = useRef(0)
//   const headerRef = useRef(null)

//   const { pathname } = useLocation()
//   const lightPage = isLightRoute(pathname)

//   // Reset navbar state whenever the route changes.
//   useEffect(() => {
//     const y = window.scrollY
//     lastScrollY.current = y
//     setAtTop(y <= 10)
//     setVisible(true)
//     setActiveMenu(null)
//     setOpen(false)
//     setMobileSub(null)
//   }, [pathname])

//   // Hide navbar on scroll down and show it on scroll up.
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY
//       const diff = currentY - lastScrollY.current

//       if (Math.abs(diff) < 5) return

//       if (currentY <= 10) {
//         setAtTop(true)
//         setVisible(true)
//       } else if (diff > 0) {
//         setAtTop(false)
//         setVisible(false)
//         setActiveMenu(null)
//       } else {
//         setAtTop(false)
//         setVisible(true)
//       }

//       lastScrollY.current = currentY
//     }

//     window.addEventListener('scroll', handleScroll, { passive: true })

//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [])

//   // Prevent background scrolling when the mobile menu is open.
//   useEffect(() => {
//     document.body.style.overflow = open ? 'hidden' : ''

//     return () => {
//       document.body.style.overflow = ''
//     }
//   }, [open])

//   // Close the mobile menu when switching to desktop.
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setOpen(false)
//         setMobileSub(null)
//       }
//     }

//     window.addEventListener('resize', handleResize)

//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }
//   }, [])

//   // Close desktop dropdowns when clicking outside or pressing Escape.
//   useEffect(() => {
//     const handlePointerDown = (event) => {
//       if (headerRef.current && !headerRef.current.contains(event.target)) {
//         setActiveMenu(null)
//       }
//     }

//     const handleKeyDown = (event) => {
//       if (event.key === 'Escape') {
//         setActiveMenu(null)
//         setOpen(false)
//         setMobileSub(null)
//       }
//     }

//     document.addEventListener('pointerdown', handlePointerDown)
//     document.addEventListener('keydown', handleKeyDown)

//     return () => {
//       document.removeEventListener('pointerdown', handlePointerDown)
//       document.removeEventListener('keydown', handleKeyDown)
//     }
//   }, [])

//   const showBg = !atTop || open

//   const darkText = lightPage && !showBg

//   const textClass = darkText ? 'text-[#2f4a4f]' : 'text-white'
//   const hoverClass = darkText
//     ? 'hover:text-[#2f4a4f]/70'
//     : 'hover:text-white/70'
//   const barClass = open ? 'bg-white' : darkText ? 'bg-[#2f4a4f]' : 'bg-white'
//   const btnClass = darkText
//     ? 'border-[#2f4a4f]/80 hover:bg-[#2f4a4f] hover:text-white'
//     : 'border-white/80 hover:bg-white hover:text-[#2c4549]'

//   const closeMobile = () => {
//     setOpen(false)
//     setMobileSub(null)
//   }

//   const toggleDesktopMenu = (label) => {
//     setActiveMenu((previous) => (previous === label ? null : label))
//   }

//   const toggleMobileSubmenu = (label) => {
//     setMobileSub((previous) => (previous === label ? null : label))
//   }

//   return (
//     <>
//       <header
//         ref={headerRef}
//         onPointerLeave={(event) => {
//           if (event.pointerType === 'mouse') {
//             setActiveMenu(null)
//           }
//         }}
//         className={`fixed left-0 top-0 z-50 w-full font-['Work_Sans'] ${textClass} transition-[transform,background-color,box-shadow,color] duration-300 ${
//           visible || open ? 'translate-y-0' : '-translate-y-full'
//         } ${showBg ? 'bg-[#2c4549] shadow-md' : 'bg-transparent'}`}
//       >
//         <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
//           {/* Logo */}
//           <Link
//             to="/"
//             onClick={() => {
//               closeMobile()
//               setActiveMenu(null)
//             }}
//             className="font-['Playfair_Display'] text-2xl font-bold uppercase"
//           >
//             urban sherpa
//           </Link>

//           {/* Desktop navigation */}
//           <div className="hidden items-center gap-6 text-base font-medium lg:flex lg:text-lg">
//             {links.map((link) =>
//               link.dropdown ? (
//                 <div
//                   key={link.label}
//                   className="flex h-20 items-center gap-2"
//                   onPointerEnter={(event) => {
//                     if (event.pointerType === 'mouse') {
//                       setActiveMenu(link.label)
//                     }
//                   }}
//                 >
//                   <Link
//                     to={link.href}
//                     onClick={() => setActiveMenu(null)}
//                     className={`relative py-1 transition ${hoverClass}`}
//                   >
//                     {link.label}
//                   </Link>

//                   <button
//                     type="button"
//                     aria-label={`Toggle ${link.label} dropdown`}
//                     aria-haspopup="true"
//                     aria-expanded={activeMenu === link.label}
//                     onClick={() => toggleDesktopMenu(link.label)}
//                     className="flex items-center justify-center py-2"
//                   >
//                     <Chevron open={activeMenu === link.label} />
//                   </button>
//                 </div>
//               ) : (
//                 <Link
//                   key={link.label}
//                   to={link.href}
//                   onPointerEnter={(event) => {
//                     if (event.pointerType === 'mouse') {
//                       setActiveMenu(null)
//                     }
//                   }}
//                   className={`transition ${hoverClass}`}
//                 >
//                   {link.label}
//                 </Link>
//               )
//             )}

//             {/* Plan Trip */}
//             <Link
//               to="/contact"
//               onPointerEnter={(event) => {
//                 if (event.pointerType === 'mouse') {
//                   setActiveMenu(null)
//                 }
//               }}
//               className={`ml-2 rounded-md border px-5 py-2.5 transition ${btnClass}`}
//             >
//               Plan Trip
//             </Link>
//           </div>

//           {/* Mobile hamburger button */}
//           <button
//             type="button"
//             className="relative z-10 flex h-10 w-10 items-center justify-center lg:hidden"
//             onClick={() => (open ? closeMobile() : setOpen(true))}
//             aria-label={open ? 'Close menu' : 'Open menu'}
//             aria-expanded={open}
//           >
//             <span className="relative block h-4 w-6">
//               <span
//                 className={`absolute left-0 h-0.5 w-full rounded ${barClass} transition-all duration-300 ${
//                   open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
//                 }`}
//               />

//               <span
//                 className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded ${barClass} transition-all duration-300 ${
//                   open ? 'opacity-0' : 'opacity-100'
//                 }`}
//               />

//               <span
//                 className={`absolute left-0 h-0.5 w-full rounded ${barClass} transition-all duration-300 ${
//                   open
//                     ? 'top-1/2 -translate-y-1/2 -rotate-45'
//                     : 'top-full -translate-y-full'
//                 }`}
//               />
//             </span>
//           </button>
//         </nav>

//         {/* Desktop dropdown panels */}
//         <div className="hidden lg:block">
//           {Object.entries(menus).map(([label, items]) => {
//             const isActive = activeMenu === label

//             return (
//               <div
//                 key={label}
//                 aria-hidden={!isActive}
//                 className={`absolute left-0 top-full w-full bg-[#f5f2ed] shadow-xl ${
//                   isActive
//                     ? 'visible z-10 translate-y-0 opacity-100 transition-all duration-300 ease-out'
//                     : activeMenu
//                       ? 'pointer-events-none invisible z-0 translate-y-0 opacity-100 transition-[visibility] delay-300'
//                       : 'pointer-events-none invisible z-0 -translate-y-2 opacity-0 transition-all duration-300 ease-out'
//                 }`}
//               >
//                 {/* 5 categories: five columns, portrait cards */}
//                 <div className="mx-auto grid max-w-[1200px] grid-cols-5 gap-4 px-6 py-8 xl:gap-6 xl:px-10 xl:py-10">
//                   {items.map((item) => (
//                     <Link
//                       key={item.title}
//                       to={item.href}
//                       onClick={() => setActiveMenu(null)}
//                       tabIndex={isActive ? 0 : -1}
//                       className="group relative block aspect-[3/4] overflow-hidden rounded-md shadow-lg shadow-black/10"
//                     >
//                       <img
//                         src={item.img}
//                         alt={item.title}
//                         className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                       />

//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />

//                       <h4 className="absolute bottom-0 left-0 w-full p-4 font-['Playfair_Display'] text-xl font-medium leading-tight text-[#f5f1ea] xl:p-5 xl:text-2xl">
//                         {item.title}
//                       </h4>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </header>

//       {/* Full-screen mobile navigation */}
//       <div
//         aria-hidden={!open}
//         className={`fixed inset-0 z-40 overflow-y-auto bg-[#2c4549] pt-24 font-['Work_Sans'] text-white transition-[clip-path,visibility] duration-500 ease-in-out lg:hidden ${
//           open
//             ? 'visible [clip-path:inset(0_0_0_0)]'
//             : 'invisible [clip-path:inset(0_0_100%_0)]'
//         }`}
//       >
//         <div className="px-6 pb-12">
//           {links.map((link, index) => {
//             const subOpen = mobileSub === link.label

//             return (
//               <div
//                 key={link.label}
//                 style={{
//                   transitionDelay: open ? `${150 + index * 70}ms` : '0ms',
//                 }}
//                 className={`border-b border-white/10 transition-all duration-500 ${
//                   open
//                     ? 'translate-y-0 opacity-100'
//                     : 'translate-y-4 opacity-0'
//                 }`}
//               >
//                 {link.dropdown ? (
//                   <>
//                     <div className="flex items-center justify-between gap-3">
//                       <Link
//                         to={link.href}
//                         onClick={closeMobile}
//                         className="flex-1 py-4 font-['Playfair_Display'] text-2xl sm:text-3xl"
//                       >
//                         {link.label}
//                       </Link>

//                       <button
//                         type="button"
//                         onClick={() => toggleMobileSubmenu(link.label)}
//                         aria-label={`Toggle ${link.label} submenu`}
//                         aria-expanded={subOpen}
//                         className="flex items-center justify-center p-3"
//                       >
//                         <Chevron open={subOpen} />
//                       </button>
//                     </div>

//                     <div
//                       className={`grid transition-all duration-500 ease-in-out ${
//                         subOpen
//                           ? 'grid-rows-[1fr] opacity-100'
//                           : 'grid-rows-[0fr] opacity-0'
//                       }`}
//                     >
//                       <div className="overflow-hidden">
//                         <div className="grid grid-cols-2 gap-3 pb-5 sm:grid-cols-3">
//                           {menus[link.label].map((item) => (
//                             <Link
//                               key={item.title}
//                               to={item.href}
//                               onClick={closeMobile}
//                               tabIndex={subOpen ? 0 : -1}
//                               className="group relative block h-28 overflow-hidden rounded-md sm:h-44"
//                             >
//                               <img
//                                 src={item.img}
//                                 alt={item.title}
//                                 className="absolute inset-0 h-full w-full object-cover"
//                               />

//                               <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/20" />

//                               <span className="absolute bottom-0 left-0 p-4 font-['Playfair_Display'] text-xl leading-tight text-[#f5f1ea]">
//                                 {item.title}
//                               </span>
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   <Link
//                     to={link.href}
//                     onClick={closeMobile}
//                     className="block py-4 font-['Playfair_Display'] text-2xl sm:text-3xl"
//                   >
//                     {link.label}
//                   </Link>
//                 )}
//               </div>
//             )
//           })}

//           {/* Mobile Plan Trip button */}
//           <Link
//             to="/contact"
//             onClick={closeMobile}
//             style={{
//               transitionDelay: open ? `${150 + links.length * 70}ms` : '0ms',
//             }}
//             className={`mt-8 block rounded-md border border-white/80 px-5 py-3.5 text-center transition-all duration-500 hover:bg-white hover:text-[#2c4549] ${
//               open
//                 ? 'translate-y-0 opacity-100'
//                 : 'translate-y-4 opacity-0'
//             }`}
//           >
//             Plan Trip
//           </Link>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Navbar



// import React, { useState, useEffect, useRef } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import packageData from '../data/packageData.json'

// const Chevron = ({ open }) => (
//   <svg
//     className={`h-3 w-3 transition-transform duration-300 ${
//       open ? 'rotate-180' : ''
//     }`}
//     viewBox="0 0 20 20"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     aria-hidden="true"
//   >
//     <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// )

// const links = [
//   { label: 'Packages', dropdown: true, href: '/packages' },
//   { label: 'About us', href: '/about' },
//   { label: 'Blog', href: '/blog' },
// ]

// // Pages whose background is light (#f6f3ef) and need dark navbar text.
// const lightPages = ['/blog', '/contact']

// const isLightRoute = (pathname) =>
//   lightPages.some(
//     (path) => pathname === path || pathname.startsWith(`${path}/`)
//   )

// // Set to false to hide packages that are still "draft" (title only) from the menu.
// const SHOW_DRAFTS = true

// // Each category column lists its packages; every package links to its
// // detail page, which matches <Route path="/packages/:slug" />.
// const generatePackageMenus = () =>
//   packageData.categories.map((cat) => ({
//     title: cat.title,
//     img: cat.image,
//     href: `/packages?category=${cat.slug}`,
//     packages: packageData.packages
//       .filter(
//         (pkg) =>
//           pkg.category === cat.slug && (SHOW_DRAFTS || pkg.status !== 'draft')
//       )
//       .map((pkg) => ({
//         title: pkg.title,
//         href: `/packages/${pkg.slug}`,
//         soon: pkg.status === 'draft',
//       })),
//   }))

// const menus = {
//   Packages: generatePackageMenus(),
// }

// // Delay before a hover-opened dropdown closes, so the cursor can travel
// // from the nav link down into the panel without it disappearing.
// const CLOSE_DELAY = 200

// const Navbar = () => {
//   const [open, setOpen] = useState(false)
//   const [activeMenu, setActiveMenu] = useState(null)
//   const [mobileSub, setMobileSub] = useState(null)
//   const [visible, setVisible] = useState(true)
//   const [atTop, setAtTop] = useState(true)

//   const lastScrollY = useRef(0)
//   const headerRef = useRef(null)
//   const closeTimer = useRef(null)
//   const activeMenuRef = useRef(null)

//   const { pathname } = useLocation()
//   const lightPage = isLightRoute(pathname)

//   // Keep a ref copy so the scroll listener can read the current menu state.
//   useEffect(() => {
//     activeMenuRef.current = activeMenu
//   }, [activeMenu])

//   const cancelClose = () => {
//     if (closeTimer.current) {
//       clearTimeout(closeTimer.current)
//       closeTimer.current = null
//     }
//   }

//   const scheduleClose = () => {
//     cancelClose()
//     closeTimer.current = setTimeout(() => setActiveMenu(null), CLOSE_DELAY)
//   }

//   const openMenu = (label) => {
//     cancelClose()
//     setActiveMenu(label)
//   }

//   const closeMenu = () => {
//     cancelClose()
//     setActiveMenu(null)
//   }

//   // Clear any pending timer on unmount.
//   useEffect(() => cancelClose, [])

//   // Reset navbar state whenever the route changes.
//   useEffect(() => {
//     const y = window.scrollY
//     lastScrollY.current = y
//     setAtTop(y <= 10)
//     setVisible(true)
//     closeMenu()
//     setOpen(false)
//     setMobileSub(null)
//   }, [pathname])

//   // Hide navbar on scroll down and show it on scroll up.
//   // While a dropdown is open the navbar stays visible and the dropdown stays open.
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY
//       const diff = currentY - lastScrollY.current

//       if (Math.abs(diff) < 5) return

//       if (currentY <= 10) {
//         setAtTop(true)
//         setVisible(true)
//       } else if (diff > 0) {
//         setAtTop(false)
//         if (!activeMenuRef.current) {
//           setVisible(false)
//         }
//       } else {
//         setAtTop(false)
//         setVisible(true)
//       }

//       lastScrollY.current = currentY
//     }

//     window.addEventListener('scroll', handleScroll, { passive: true })

//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [])

//   // Prevent background scrolling when the mobile menu is open.
//   useEffect(() => {
//     document.body.style.overflow = open ? 'hidden' : ''

//     return () => {
//       document.body.style.overflow = ''
//     }
//   }, [open])

//   // Close the mobile menu when switching to desktop.
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setOpen(false)
//         setMobileSub(null)
//       }
//     }

//     window.addEventListener('resize', handleResize)

//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }
//   }, [])

//   // Close desktop dropdowns when clicking outside or pressing Escape.
//   useEffect(() => {
//     const handlePointerDown = (event) => {
//       if (headerRef.current && !headerRef.current.contains(event.target)) {
//         closeMenu()
//       }
//     }

//     const handleKeyDown = (event) => {
//       if (event.key === 'Escape') {
//         closeMenu()
//         setOpen(false)
//         setMobileSub(null)
//       }
//     }

//     document.addEventListener('pointerdown', handlePointerDown)
//     document.addEventListener('keydown', handleKeyDown)

//     return () => {
//       document.removeEventListener('pointerdown', handlePointerDown)
//       document.removeEventListener('keydown', handleKeyDown)
//     }
//   }, [])

//   // Keep the solid background while a dropdown is open so the panel
//   // never floats under a transparent bar.
//   const showBg = !atTop || open || Boolean(activeMenu)

//   const darkText = lightPage && !showBg

//   const textClass = darkText ? 'text-[#2f4a4f]' : 'text-white'
//   const hoverClass = darkText
//     ? 'hover:text-[#2f4a4f]/70'
//     : 'hover:text-white/70'
//   const barClass = open ? 'bg-white' : darkText ? 'bg-[#2f4a4f]' : 'bg-white'
//   const btnClass = darkText
//     ? 'border-[#2f4a4f]/80 hover:bg-[#2f4a4f] hover:text-white'
//     : 'border-white/80 hover:bg-white hover:text-[#2c4549]'

//   const closeMobile = () => {
//     setOpen(false)
//     setMobileSub(null)
//   }

//   // Click toggles: open if closed, close if open.
//   const toggleDesktopMenu = (label) => {
//     cancelClose()
//     setActiveMenu((previous) => (previous === label ? null : label))
//   }

//   const toggleMobileSubmenu = (label) => {
//     setMobileSub((previous) => (previous === label ? null : label))
//   }

//   return (
//     <>
//       <header
//         ref={headerRef}
//         onPointerEnter={(event) => {
//           // Cursor is back over the navbar or the dropdown: stay open.
//           if (event.pointerType === 'mouse') cancelClose()
//         }}
//         onPointerLeave={(event) => {
//           if (event.pointerType === 'mouse') scheduleClose()
//         }}
//         className={`fixed left-0 top-0 z-50 w-full font-['Work_Sans'] ${textClass} transition-[transform,background-color,box-shadow,color] duration-300 ${
//           visible || open || activeMenu ? 'translate-y-0' : '-translate-y-full'
//         } ${showBg ? 'bg-[#2c4549] shadow-md' : 'bg-transparent'}`}
//       >
//         <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
//           {/* Logo */}
//           <Link
//             to="/"
//             onClick={() => {
//               closeMobile()
//               closeMenu()
//             }}
//             className="font-['Playfair_Display'] text-2xl font-bold uppercase"
//           >
//             urban sherpa
//           </Link>

//           {/* Desktop navigation */}
//           <div className="hidden items-center gap-6 text-base font-medium lg:flex lg:text-lg">
//             {links.map((link) =>
//               link.dropdown ? (
//                 <div
//                   key={link.label}
//                   className="flex h-20 items-center gap-2"
//                   onPointerEnter={(event) => {
//                     // Hover opens the dropdown (mouse only; touch uses the chevron).
//                     if (event.pointerType === 'mouse') openMenu(link.label)
//                   }}
//                 >
//                   <Link
//                     to={link.href}
//                     onClick={closeMenu}
//                     className={`relative py-1 transition ${hoverClass}`}
//                   >
//                     {link.label}
//                   </Link>

//                   <button
//                     type="button"
//                     aria-label={`Toggle ${link.label} dropdown`}
//                     aria-haspopup="true"
//                     aria-expanded={activeMenu === link.label}
//                     onClick={() => toggleDesktopMenu(link.label)}
//                     className="flex items-center justify-center py-2"
//                   >
//                     <Chevron open={activeMenu === link.label} />
//                   </button>
//                 </div>
//               ) : (
//                 <Link
//                   key={link.label}
//                   to={link.href}
//                   onPointerEnter={(event) => {
//                     if (event.pointerType === 'mouse') closeMenu()
//                   }}
//                   className={`transition ${hoverClass}`}
//                 >
//                   {link.label}
//                 </Link>
//               )
//             )}

//             {/* Plan Trip */}
//             <Link
//               to="/contact"
//               onPointerEnter={(event) => {
//                 if (event.pointerType === 'mouse') closeMenu()
//               }}
//               className={`ml-2 rounded-md border px-5 py-2.5 transition ${btnClass}`}
//             >
//               Plan Trip
//             </Link>
//           </div>

//           {/* Mobile hamburger button */}
//           <button
//             type="button"
//             className="relative z-10 flex h-10 w-10 items-center justify-center lg:hidden"
//             onClick={() => (open ? closeMobile() : setOpen(true))}
//             aria-label={open ? 'Close menu' : 'Open menu'}
//             aria-expanded={open}
//           >
//             <span className="relative block h-4 w-6">
//               <span
//                 className={`absolute left-0 h-0.5 w-full rounded ${barClass} transition-all duration-300 ${
//                   open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
//                 }`}
//               />

//               <span
//                 className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded ${barClass} transition-all duration-300 ${
//                   open ? 'opacity-0' : 'opacity-100'
//                 }`}
//               />

//               <span
//                 className={`absolute left-0 h-0.5 w-full rounded ${barClass} transition-all duration-300 ${
//                   open
//                     ? 'top-1/2 -translate-y-1/2 -rotate-45'
//                     : 'top-full -translate-y-full'
//                 }`}
//               />
//             </span>
//           </button>
//         </nav>

//         {/* Desktop dropdown panels */}
//         <div className="hidden lg:block">
//           {Object.entries(menus).map(([label, items]) => {
//             const isActive = activeMenu === label

//             return (
//               <div
//                 key={label}
//                 aria-hidden={!isActive}
//                 className={`absolute left-0 top-full max-h-[calc(100vh-5rem)] w-full overflow-y-auto bg-[#f5f2ed] text-[#2c4549] shadow-xl ${
//                   isActive
//                     ? 'visible z-10 translate-y-0 opacity-100 transition-all duration-300 ease-out'
//                     : activeMenu
//                       ? 'pointer-events-none invisible z-0 translate-y-0 opacity-100 transition-[visibility] delay-300'
//                       : 'pointer-events-none invisible z-0 -translate-y-2 opacity-0 transition-all duration-300 ease-out'
//                 }`}
//               >
//                 {/* One column per category: image heading + its packages */}
//                 <div className="mx-auto grid max-w-[1300px] grid-cols-5 gap-4 px-6 py-8 xl:gap-8 xl:px-10 xl:py-10">
//                   {items.map((item) => (
//                     <div key={item.title} className="min-w-0">
//                       <Link
//                         to={item.href}
//                         onClick={closeMenu}
//                         tabIndex={isActive ? 0 : -1}
//                         className="group relative block aspect-[4/3] overflow-hidden rounded-md shadow-lg shadow-black/10"
//                       >
//                         <img
//                           src={item.img}
//                           alt={item.title}
//                           className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                         />

//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />

//                         <h4 className="absolute bottom-0 left-0 w-full p-4 font-['Playfair_Display'] text-xl font-medium leading-tight text-[#f5f1ea] xl:text-2xl">
//                           {item.title}
//                         </h4>
//                       </Link>

//                       <ul className="mt-4 space-y-2">
//                         {item.packages.map((pkg) => (
//                           <li key={pkg.href}>
//                             <Link
//                               to={pkg.href}
//                               onClick={closeMenu}
//                               tabIndex={isActive ? 0 : -1}
//                               className="flex items-start justify-between gap-2 text-sm leading-snug transition hover:text-[#2c4549]/60 hover:underline xl:text-base"
//                             >
//                               <span>{pkg.title}</span>
//                               {pkg.soon && (
//                                 <span className="mt-0.5 flex-shrink-0 rounded-full bg-[#2c4549]/10 px-2 py-0.5 text-[10px] uppercase tracking-wide">
//                                   Soon
//                                 </span>
//                               )}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </header>

//       {/* Full-screen mobile navigation */}
//       <div
//         aria-hidden={!open}
//         className={`fixed inset-0 z-40 overflow-y-auto bg-[#2c4549] pt-24 font-['Work_Sans'] text-white transition-[clip-path,visibility] duration-500 ease-in-out lg:hidden ${
//           open
//             ? 'visible [clip-path:inset(0_0_0_0)]'
//             : 'invisible [clip-path:inset(0_0_100%_0)]'
//         }`}
//       >
//         <div className="px-6 pb-12">
//           {links.map((link, index) => {
//             const subOpen = mobileSub === link.label

//             return (
//               <div
//                 key={link.label}
//                 style={{
//                   transitionDelay: open ? `${150 + index * 70}ms` : '0ms',
//                 }}
//                 className={`border-b border-white/10 transition-all duration-500 ${
//                   open
//                     ? 'translate-y-0 opacity-100'
//                     : 'translate-y-4 opacity-0'
//                 }`}
//               >
//                 {link.dropdown ? (
//                   <>
//                     <div className="flex items-center justify-between gap-3">
//                       <Link
//                         to={link.href}
//                         onClick={closeMobile}
//                         className="flex-1 py-4 font-['Playfair_Display'] text-2xl sm:text-3xl"
//                       >
//                         {link.label}
//                       </Link>

//                       <button
//                         type="button"
//                         onClick={() => toggleMobileSubmenu(link.label)}
//                         aria-label={`Toggle ${link.label} submenu`}
//                         aria-expanded={subOpen}
//                         className="flex items-center justify-center p-3"
//                       >
//                         <Chevron open={subOpen} />
//                       </button>
//                     </div>

//                     <div
//                       className={`grid transition-all duration-500 ease-in-out ${
//                         subOpen
//                           ? 'grid-rows-[1fr] opacity-100'
//                           : 'grid-rows-[0fr] opacity-0'
//                       }`}
//                     >
//                       <div className="overflow-hidden">
//                         {/* Category headings with their package links */}
//                         <div className="space-y-6 pb-6">
//                           {menus[link.label].map((item) => (
//                             <div key={item.title}>
//                               <Link
//                                 to={item.href}
//                                 onClick={closeMobile}
//                                 tabIndex={subOpen ? 0 : -1}
//                                 className="group relative block h-24 overflow-hidden rounded-md sm:h-32"
//                               >
//                                 <img
//                                   src={item.img}
//                                   alt={item.title}
//                                   className="absolute inset-0 h-full w-full object-cover"
//                                 />

//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/20" />

//                                 <span className="absolute bottom-0 left-0 p-4 font-['Playfair_Display'] text-xl leading-tight text-[#f5f1ea]">
//                                   {item.title}
//                                 </span>
//                               </Link>

//                               <ul className="mt-3 space-y-1 pl-1">
//                                 {item.packages.map((pkg) => (
//                                   <li key={pkg.href}>
//                                     <Link
//                                       to={pkg.href}
//                                       onClick={closeMobile}
//                                       tabIndex={subOpen ? 0 : -1}
//                                       className="flex items-center justify-between gap-3 py-2 text-base text-white/85 transition hover:text-white"
//                                     >
//                                       <span>{pkg.title}</span>
//                                       {pkg.soon && (
//                                         <span className="flex-shrink-0 rounded-full bg-white/15 px-2 py-0.5 text-[10px] uppercase tracking-wide">
//                                           Soon
//                                         </span>
//                                       )}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   <Link
//                     to={link.href}
//                     onClick={closeMobile}
//                     className="block py-4 font-['Playfair_Display'] text-2xl sm:text-3xl"
//                   >
//                     {link.label}
//                   </Link>
//                 )}
//               </div>
//             )
//           })}

//           {/* Mobile Plan Trip button */}
//           <Link
//             to="/contact"
//             onClick={closeMobile}
//             style={{
//               transitionDelay: open ? `${150 + links.length * 70}ms` : '0ms',
//             }}
//             className={`mt-8 block rounded-md border border-white/80 px-5 py-3.5 text-center transition-all duration-500 hover:bg-white hover:text-[#2c4549] ${
//               open
//                 ? 'translate-y-0 opacity-100'
//                 : 'translate-y-4 opacity-0'
//             }`}
//           >
//             Plan Trip
//           </Link>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Navbar



import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
    <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const links = [
  { label: 'Packages', dropdown: true, href: '/packages' },
  { label: 'About us', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

// Pages whose background is light (#f6f3ef) and need dark navbar text.
const lightPages = ['/blog', '/contact']

const isLightRoute = (pathname) =>
  lightPages.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  )

// Set to false to hide packages that are still "draft" (title only) from the menu.
const SHOW_DRAFTS = true

// Each category column lists its packages; every package links to its
// detail page, which matches <Route path="/packages/:slug" />.
const generatePackageMenus = () =>
  packageData.categories.map((cat) => ({
    title: cat.title,
    img: cat.image,
    href: `/packages?category=${cat.slug}`,
    packages: packageData.packages
      .filter(
        (pkg) =>
          pkg.category === cat.slug && (SHOW_DRAFTS || pkg.status !== 'draft')
      )
      .map((pkg) => ({
        title: pkg.title,
        href: `/packages/${pkg.slug}`,
        soon: pkg.status === 'draft',
      })),
  }))

const menus = {
  Packages: generatePackageMenus(),
}

// Delay before a hover-opened dropdown closes, so the cursor can travel
// from the nav link down into the panel without it disappearing.
const CLOSE_DELAY = 200

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileSub, setMobileSub] = useState(null)
  const [visible, setVisible] = useState(true)
  const [atTop, setAtTop] = useState(true)

  const lastScrollY = useRef(0)
  const headerRef = useRef(null)
  const closeTimer = useRef(null)
  const activeMenuRef = useRef(null)
  const pinnedRef = useRef(false)

  const { pathname } = useLocation()
  const lightPage = isLightRoute(pathname)

  // Keep a ref copy so the scroll listener can read the current menu state.
  useEffect(() => {
    activeMenuRef.current = activeMenu
  }, [activeMenu])

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  // Hover-opened menus close when the cursor leaves. Once the user clicks
  // the button the menu is "pinned" and stays open until clicked again,
  // clicked outside, or a link inside it is used.
  const scheduleClose = () => {
    cancelClose()
    if (pinnedRef.current) return
    closeTimer.current = setTimeout(() => setActiveMenu(null), CLOSE_DELAY)
  }

  const openMenu = (label) => {
    cancelClose()
    setActiveMenu(label)
  }

  const closeMenu = () => {
    cancelClose()
    pinnedRef.current = false
    setActiveMenu(null)
  }

  // Used by plain nav links on hover: never closes a pinned menu.
  const hoverClose = () => {
    if (!pinnedRef.current) closeMenu()
  }

  // Clear any pending timer on unmount.
  useEffect(() => cancelClose, [])

  // Reset navbar state whenever the route changes.
  useEffect(() => {
    const y = window.scrollY
    lastScrollY.current = y
    setAtTop(y <= 10)
    setVisible(true)
    closeMenu()
    setOpen(false)
    setMobileSub(null)
  }, [pathname])

  // Hide navbar on scroll down and show it on scroll up.
  // While a dropdown is open the navbar stays visible and the dropdown stays open.
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
        if (!activeMenuRef.current) {
          setVisible(false)
        }
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
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeMenu()
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu()
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

  // Keep the solid background while a dropdown is open so the panel
  // never floats under a transparent bar.
  const showBg = !atTop || open || Boolean(activeMenu)

  const darkText = lightPage && !showBg

  const textClass = darkText ? 'text-[#2f4a4f]' : 'text-white'
  const hoverClass = darkText
    ? 'hover:text-[#2f4a4f]/70'
    : 'hover:text-white/70'
  const barClass = open ? 'bg-white' : darkText ? 'bg-[#2f4a4f]' : 'bg-white'
  const btnClass = darkText
    ? 'border-[#2f4a4f]/80 hover:bg-[#2f4a4f] hover:text-white'
    : 'border-white/80 hover:bg-white hover:text-[#2c4549]'

  const closeMobile = () => {
    setOpen(false)
    setMobileSub(null)
  }

  // Click behaviour:
  // - closed                -> open and pin
  // - open by hover         -> pin (keeps it open instead of closing it)
  // - open and pinned       -> close
  const toggleDesktopMenu = (label) => {
    cancelClose()
    if (activeMenu === label && pinnedRef.current) {
      closeMenu()
    } else {
      pinnedRef.current = true
      setActiveMenu(label)
    }
  }

  const toggleMobileSubmenu = (label) => {
    setMobileSub((previous) => (previous === label ? null : label))
  }

  return (
    <>
      <header
        ref={headerRef}
        onPointerEnter={(event) => {
          // Cursor is back over the navbar or the dropdown: stay open.
          if (event.pointerType === 'mouse') cancelClose()
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === 'mouse') scheduleClose()
        }}
        className={`fixed left-0 top-0 z-50 w-full font-['Work_Sans'] ${textClass} transition-[transform,background-color,box-shadow,color] duration-300 ${
          visible || open || activeMenu ? 'translate-y-0' : '-translate-y-full'
        } ${showBg ? 'bg-[#2c4549] shadow-md' : 'bg-transparent'}`}
      >
        <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              closeMobile()
              closeMenu()
            }}
            className="font-['Playfair_Display'] text-2xl font-bold uppercase"
          >
            urban sherpa
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-6 text-base font-medium lg:flex lg:text-lg">
            {links.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="flex h-20 items-center gap-2"
                  onPointerEnter={(event) => {
                    // Hover opens the dropdown (mouse only; touch uses the chevron).
                    if (event.pointerType === 'mouse') openMenu(link.label)
                  }}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={activeMenu === link.label}
                    onClick={() => toggleDesktopMenu(link.label)}
                    className={`relative flex items-center gap-2 py-1 transition ${hoverClass}`}
                  >
                    {link.label}
                    <Chevron open={activeMenu === link.label} />
                  </button>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onPointerEnter={(event) => {
                    if (event.pointerType === 'mouse') hoverClose()
                  }}
                  className={`transition ${hoverClass}`}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Plan Trip */}
            <Link
              to="/contact"
              onPointerEnter={(event) => {
                if (event.pointerType === 'mouse') hoverClose()
              }}
              className={`ml-2 rounded-md border px-5 py-2.5 transition ${btnClass}`}
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
                className={`absolute left-0 h-0.5 w-full rounded ${barClass} transition-all duration-300 ${
                  open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
                }`}
              />

              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded ${barClass} transition-all duration-300 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />

              <span
                className={`absolute left-0 h-0.5 w-full rounded ${barClass} transition-all duration-300 ${
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
                className={`absolute left-0 top-full max-h-[calc(100vh-5rem)] w-full overflow-y-auto bg-[#f5f2ed] text-[#2c4549] shadow-xl ${
                  isActive
                    ? 'visible z-10 translate-y-0 opacity-100 transition-all duration-300 ease-out'
                    : activeMenu
                      ? 'pointer-events-none invisible z-0 translate-y-0 opacity-100 transition-[visibility] delay-300'
                      : 'pointer-events-none invisible z-0 -translate-y-2 opacity-0 transition-all duration-300 ease-out'
                }`}
              >
                {/* One column per category: image heading + its packages */}
                <div className="mx-auto grid max-w-[1300px] grid-cols-5 gap-4 px-6 py-8 xl:gap-8 xl:px-10 xl:py-10">
                  {items.map((item) => (
                    <div key={item.title} className="min-w-0">
                      <Link
                        to={item.href}
                        onClick={closeMenu}
                        tabIndex={isActive ? 0 : -1}
                        className="group relative block aspect-[4/3] overflow-hidden rounded-md shadow-lg shadow-black/10"
                      >
                        <img
                          src={item.img}
                          alt={item.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />

                        <h4 className="absolute bottom-0 left-0 w-full p-4 font-['Playfair_Display'] text-xl font-medium leading-tight text-[#f5f1ea] xl:text-2xl">
                          {item.title}
                        </h4>
                      </Link>

                      <ul className="mt-4 space-y-2">
                        {item.packages.map((pkg) => (
                          <li key={pkg.href}>
                            <Link
                              to={pkg.href}
                              onClick={closeMenu}
                              tabIndex={isActive ? 0 : -1}
                              className="flex items-start justify-between gap-2 text-sm leading-snug transition hover:text-[#2c4549]/60 hover:underline xl:text-base"
                            >
                              <span>{pkg.title}</span>
                              {pkg.soon && (
                                <span className="mt-0.5 flex-shrink-0 rounded-full bg-[#2c4549]/10 px-2 py-0.5 text-[10px] uppercase tracking-wide">
                                  Soon
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* <div className="mx-auto flex max-w-[1300px] justify-end px-6 pb-6 xl:px-10">
                  <Link
                    to="/packages"
                    onClick={closeMenu}
                    tabIndex={isActive ? 0 : -1}
                    className="text-sm font-medium underline-offset-4 transition hover:underline xl:text-base"
                  >
                    View all packages &rarr;
                  </Link>
                </div> */}
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
                  transitionDelay: open ? `${150 + index * 70}ms` : '0ms',
                }}
                className={`border-b border-white/10 transition-all duration-500 ${
                  open
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
              >
                {link.dropdown ? (
                  <>
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
                        onClick={() => toggleMobileSubmenu(link.label)}
                        aria-label={`Toggle ${link.label} submenu`}
                        aria-expanded={subOpen}
                        className="flex items-center justify-center p-3"
                      >
                        <Chevron open={subOpen} />
                      </button>
                    </div>

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        subOpen
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        {/* Category headings with their package links */}
                        <div className="space-y-6 pb-6">
                          {menus[link.label].map((item) => (
                            <div key={item.title}>
                              <Link
                                to={item.href}
                                onClick={closeMobile}
                                tabIndex={subOpen ? 0 : -1}
                                className="group relative block h-24 overflow-hidden rounded-md sm:h-32"
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

                              <ul className="mt-3 space-y-1 pl-1">
                                {item.packages.map((pkg) => (
                                  <li key={pkg.href}>
                                    <Link
                                      to={pkg.href}
                                      onClick={closeMobile}
                                      tabIndex={subOpen ? 0 : -1}
                                      className="flex items-center justify-between gap-3 py-2 text-base text-white/85 transition hover:text-white"
                                    >
                                      <span>{pkg.title}</span>
                                      {pkg.soon && (
                                        <span className="flex-shrink-0 rounded-full bg-white/15 px-2 py-0.5 text-[10px] uppercase tracking-wide">
                                          Soon
                                        </span>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
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
            to="/contact"
            onClick={closeMobile}
            style={{
              transitionDelay: open ? `${150 + links.length * 70}ms` : '0ms',
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