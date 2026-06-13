import React, { useEffect, useMemo, useRef, ReactNode, RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

// Note: Ensure 'gsap' is installed via npm/yarn. If types are missing, install @types/gsap.

gsap.registerPlugin(ScrollTrigger)

interface ScrollFloatProps {
  children: ReactNode
  scrollContainerRef?: RefObject<HTMLElement>
  containerClassName?: string
  textClassName?: string
  animationDuration?: number
  ease?: string
  scrollStart?: string
  scrollEnd?: string
  stagger?: number
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  stagger = 0.03
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null)

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : ''
    return text.split('').map((char, index) => (
      <span
        className="inline-block split-char-item"
        key={index}
        style={{ display: 'inline-block', willChange: 'opacity, transform' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }, [children])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window
    const charElements = el.querySelectorAll('.split-char-item')
    const ctaButtons = document.querySelector('.heroCtaGroup')

    // Initial hidden positioning state rules
    gsap.set(charElements, {
      opacity: 0,
      yPercent: 120,
      scaleY: 2.3,
      scaleX: 0.7,
      transformOrigin: '50% 0%'
    })

    if (ctaButtons) {
      gsap.set(ctaButtons, { opacity: 0, y: 20, pointerEvents: 'none' })
    }

    // Master ScrollTimeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        scroller,
        start: 'top top',
        end: '+=400', // Expanded layout scroll distance to make adjustments feel smooth
        scrub: 1,
        invalidateOnRefresh: true
      }
    })

    // Step A: Roll out characters sequentially
    tl.to(charElements, {
      duration: animationDuration,
      ease: ease,
      opacity: 1,
      yPercent: 0,
      scaleY: 1,
      scaleX: 1,
      stagger: stagger
    })

    // Step B: Fade buttons in smoothly (attaches to the timeline end)
    if (ctaButtons) {
      tl.to(ctaButtons, {
        opacity: 1,
        y: 0,
        pointerEvents: 'auto',
        duration: 0.4,
        ease: 'power2.out'
      }, '-=0.1') // Overlaps slightly with the final letters for a fluid transition
    }

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === document.body) trigger.kill()
      })
    }
  }, [scrollContainerRef, animationDuration, ease, stagger])

  return (
    <h2 ref={containerRef} className={`my-5 overflow-hidden ${containerClassName}`}>
      <span className={`inline-block text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] ${textClassName}`}>
        {splitText}
      </span>
    </h2>
  )
}

export default ScrollFloat