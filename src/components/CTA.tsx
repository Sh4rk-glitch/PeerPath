import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './CTA.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const descRef = useRef<HTMLParagraphElement | null>(null)
  const buttonRef = useRef<HTMLAnchorElement | null>(null)
  const badgeRef = useRef<HTMLSpanElement | null>(null)

  useLayoutEffect(() => {
    if (!containerRef.current || !titleRef.current || !descRef.current || !buttonRef.current || !badgeRef.current) return

    const ctx = gsap.context(() => {
      // --- CHARACTER/WORD WRAPPING PASS ---
      const titleText = titleRef.current!.innerText
      titleRef.current!.innerHTML = titleText
        .split(' ')
        .map(word => {
          const charsHtml = word
            .split('')
            .map(char => `<span class="${styles.char}">${char}</span>`)
            .join('')
          return `<span class="${styles.wordBlock}">${charsHtml}</span>`
        })
        .join(' ')

      const descText = descRef.current!.innerText
      descRef.current!.innerHTML = descText
        .split(' ')
        .map(word => `<span class="${styles.word}">${word}</span>`)
        .join(' ')

      // --- INITIAL PROPERTY STATES ---
      gsap.set(badgeRef.current, { opacity: 0, y: 20 })
      gsap.set(`.${styles.char}`, { opacity: 0, y: 30, display: 'inline-block' })
      gsap.set(`.${styles.word}`, { opacity: 0, y: 20, display: 'inline-block' })
      gsap.set(buttonRef.current, { opacity: 0, y: 25 })

      // --- TEXT ANCHORED REVEAL TIMELINE ---
      const ctaTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',      // FIXED: Starts exactly when the section top reaches the middle of your screen
          end: 'bottom center',     // Animates through until the bottom reaches the middle
          scrub: 1,                 // FIXED: Adds a 1-second smooth interpolation lag for fluid trackpad tracking
          invalidateOnRefresh: true
        }
      })

      ctaTimeline
        // 1. Pop upper badge subhead context block
        .to(badgeRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.2)' })
        // 2. Explode title letters out sequentially with clean overshoot dynamics
        .to(`.${styles.char}`, {
          opacity: 1,
          y: 0,
          stagger: 0.012,
          duration: 0.5,
          ease: 'back.out(1.5)'
        }, '>-0.2')
        // 3. Roll descriptive helper words in smoothly
        .to(`.${styles.word}`, {
          opacity: 1,
          y: 0,
          stagger: 0.015,
          duration: 0.4,
          ease: 'power2.out'
        }, '>-0.3')
        // 4. Reveal primary execution action call link container block
        .to(buttonRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'back.out(1.2)'
        }, '>-0.2')

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className={styles.section}>
      <div className={styles.inner}>
        <span ref={badgeRef} className={styles.badge}>Ready for a better way to learn?</span>
        <h2 ref={titleRef}>Sign in to unlock animated lessons and join the Peerpath community.</h2>
        <p ref={descRef}>
          Get instant access to a learning experience built around motion, peer examples, and clear concept paths.
        </p>
        <a ref={buttonRef} className={styles.primaryButton} href="#signin">
          Request a sign-in link
        </a>
      </div>
    </section>
  )
}