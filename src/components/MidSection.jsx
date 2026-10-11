import React, { useEffect, useRef } from 'react'

const TEXT = 'Adventures of a lifetime'
const COPIES = 5

const MidSection = () => {
  const sectionRef = useRef(null)
  const topRef = useRef(null)
  const bottomRef = useRef(null)
  const unitRef = useRef(null) // one copy of the text (used to measure the loop width)

  useEffect(() => {
    const section = sectionRef.current
    const top = topRef.current
    const bottom = bottomRef.current
    const unit = unitRef.current
    if (!section || !top || !bottom || !unit) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = null

    const update = () => {
      raf = null
      const w = unit.offsetWidth // width of one repeated copy
      if (!w || reduceMotion) return

      const rect = section.getBoundingClientRect()
      const travelled = window.innerHeight - rect.top // px scrolled since section entered
      const speed = window.innerWidth < 640 ? 0.6 : 0.9

      // wrap the offset to one copy width => seamless infinite loop
      const offset = (((travelled * speed) % w) + w) % w

      top.style.transform = `translate3d(${-offset}px, 0, 0)` // moves left
      bottom.style.transform = `translate3d(${offset - w}px, 0, 0)` // moves right
    }

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update)
    }

    update()
    document.fonts?.ready.then(update) // re-measure once Playfair Display has loaded
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf !== null) cancelAnimationFrame(raf)
    }
  }, [])

  const line = (ref, withUnitRef) => (
    <div
      ref={ref}
      aria-hidden="true"
      className="flex w-max select-none whitespace-nowrap will-change-transform"
    >
      {Array.from({ length: COPIES }).map((_, i) => (
        <span
          key={i}
          ref={withUnitRef && i === 0 ? unitRef : null}
          className="pr-[0.3em]"
        >
          {TEXT}
        </span>
      ))}
    </div>
  )

  return (
    <section ref={sectionRef} className="bg-[#f5f2ed] py-8 sm:py-10 lg:py-12">
      <div className="relative h-[420px] w-full overflow-hidden sm:h-[340px] lg:h-[660px]">
        {/* Background image */}
        <img
          src="/images/bg.jpg"
          alt="image of a mountain landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Accessible heading (the animated lines are decorative) */}
        <h2 className="sr-only">{TEXT}</h2>

        {/* Animated text */}
        <div className="absolute inset-0 flex flex-col justify-center overflow-hidden font-['Playfair_Display'] text-[2.75rem] font-bold leading-[1.05] text-[#f5f1ea] sm:text-7xl xl:text-[8.0rem]">
          {line(topRef, true)}
          {line(bottomRef, false)}
        </div>
      </div>
    </section>
  )
}

export default MidSection