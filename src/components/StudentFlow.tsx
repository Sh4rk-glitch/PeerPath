import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './StudentFlow.module.css'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    title: 'See concepts in motion',
    text: 'Short, focused animations break down complex ideas into clear, visual sequences.'
  },
  {
    title: 'Try guided practice',
    text: 'Follow along with examples that feel like peer explanations.'
  },
  {
    title: 'AI Featured Recommendations',
    text: 'Receive tailored recommendations to optimize your learning journey.'
  },
  {
    title: 'Track your progress',
    text: 'Detailed analytics show your mastery speed, precision curves, and review logs.'
  }
]

export default function StudentFlow() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const gridRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const descRef = useRef<HTMLParagraphElement | null>(null)

  useLayoutEffect(() => {
    if (!containerRef.current || !gridRef.current || !titleRef.current || !descRef.current) return

    const cards = containerRef.current.querySelectorAll(`.${styles.step}`) as unknown as HTMLElement[]
    if (!cards.length) return

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

      // --- INITIAL ANIMATION STATES ---
      // Using direct percentages prevents layout shifts against the pin-spacer wrapper
      gsap.set(`.${styles.bgExpander}`, { 
        width: '94%', 
        height: '90%', 
        borderRadius: '32px',
        xPercent: -50,
        yPercent: -50
      })
      gsap.set(`.${styles.badge}`, { opacity: 0, y: 20 })
      gsap.set(`.${styles.char}`, { opacity: 0, y: 35, display: 'inline-block' })
      gsap.set(`.${styles.word}`, { opacity: 0, y: 25, display: 'inline-block' })

      cards.forEach((card) => {
        gsap.set(card, {
          rotateX: 25,
          rotateY: -15,
          rotateZ: 4,
          scale: 0.88,
          y: 60,
          opacity: 0,
          z: -20
        })
      })

      // --- JITTER-PROOFED RIGID PINNING SYSTEM ---
      const masterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',              
          end: `+=${cards.length * 150}%`, 
          pin: true,                     
          pinSpacing: true,              
          pinType: 'transform',          
          anticipatePin: 1,              
          scrub: true,                    // FIXED: Swapped from 0.3 to true to force direct 1:1 synchronization with the trackpad
          invalidateOnRefresh: true
        }
      })

      // --- RUNWAY TIMELINE SEQUENCE ---
      masterTimeline
        // 1. Expand backdrop safely to absolute container edges
        .to(`.${styles.bgExpander}`, {
          width: '100%',
          height: '100%',
          borderRadius: '0px',
          duration: 0.8,
          ease: 'power2.out'
        })
        // 2. Bouncy typography reveal transitions
        .to(`.${styles.badge}`, { opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.5)' }, '>-0.4')
        .to(`.${styles.char}`, {
          opacity: 1,
          y: 0,
          stagger: 0.02,
          duration: 0.5,
          ease: 'back.out(1.8)'
        }, '>-0.3')
        .to(`.${styles.word}`, {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          duration: 0.5,
          ease: 'back.out(1.4)'
        }, '>-0.3')

      // 3. Sequential 3D card reveals lock down one after another
      cards.forEach((card, index) => {
        masterTimeline.to(
          card,
          {
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: 1,
            y: 0,
            opacity: 1,
            z: 0,
            ease: 'back.out(1.2)',
            duration: 1.2
          },
          index === 0 ? '+=0.3' : '>-0.2'
        )
      })

      // 4. White backdrop canvas compresses back down cleanly
      masterTimeline.to(`.${styles.bgExpander}`, {
        width: '94%',
        height: '90%',
        borderRadius: '32px',
        duration: 0.8,
        ease: 'power2.inOut'
      }, '+=0.5')

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className={styles.section} id="flow">
      {/* Absolute Backdrop Layer Canvas Component */}
      <div className={styles.bgExpander} />

      <div className={styles.container}>
        {/* TEXT ENTRIES CONTAINER LAYER */}
        <div className={styles.intro}>
          <span className={styles.badge}>Student flow</span>
          <h2 ref={titleRef} className={styles.title}>From first glance to mastery</h2>
          <p ref={descRef} className={styles.desc}>
            Peerpath helps learners move through content with clarity, confidence, and fun.
          </p>
        </div>

        {/* 3D PERSPECTIVE ANIMATED GRID VIEW */}
        <div className={styles.gridPerspectiveContext}>
          <div ref={gridRef} className={styles.grid}>
            {STEPS.map((step, index) => (
              <article key={step.title} className={styles.step}>
                <div className={styles.number}>0{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}