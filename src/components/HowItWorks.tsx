import React, { useLayoutEffect, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from './SplitText'
import styles from './HowItWorks.module.css'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    phase: '01 // Method Pass',
    description:
      'Peerpath combines short animations with peer-style explanations and low-pressure checks.'
  },
  {
    phase: '02 // Knowledge Pass',
    description:
      'Concepts are broken into visual sequences that make complex ideas easier to understand.'
  },
  {
    phase: '03 // Confidence Pass',
    description:
      'Quick checks help students identify what they know and where they need another look.'
  }
]

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // Live Interactive Cyber Matrix Background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number; hue: number }> = []
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 9000)
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 1,
          hue: Math.random() > 0.6 ? 200 : 280
        })
      }
    }

    const drawLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]
        p1.x += p1.vx
        p1.y += p1.vy

        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1

        ctx.beginPath()
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p1.hue}, 80%, 60%, 0.3)`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `hsla(${p1.hue}, 70%, 50%, ${0.08 * (1 - dist / 130)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
      animationFrameId = requestAnimationFrame(drawLoop)
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    drawLoop()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  // Cards Scroll Timeline
  useLayoutEffect(() => {
    if (!containerRef.current) return

    const cards = containerRef.current.querySelectorAll(`.${styles['hiw-split-card']}`) as unknown as HTMLElement[]
    if (!cards.length) return

    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${cards.length * 120}%`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      })

      cards.forEach((card, i) => {
        if (i === 0) {
          gsap.set(card, { y: 0, opacity: 1, scale: 1 })
          masterTl.to(card, {
            y: -120,
            opacity: 0,
            scale: 0.95,
            ease: 'power1.inOut',
            duration: 1
          }, `+=0.5`)
        } else {
          gsap.set(card, { y: 150, opacity: 0, scale: 0.95 })

          masterTl.fromTo(
            card,
            { y: 150, opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, ease: 'power1.out', duration: 1 }
          )
          .to(card, {
            y: -120,
            opacity: 0,
            scale: 0.95,
            ease: 'power1.inOut',
            duration: 1
          }, `+=0.5`)
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className={styles['hiw-split-section']} id="how-it-works">
      {/* Dynamic SVG Smooth Wave Transition Layer */}
      <div className={styles['hiw-wave-top-divider']}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles['hiw-wave-path']}></path>
        </svg>
      </div>

      <canvas ref={canvasRef} className={styles['hiw-cyber-canvas']} />
      <div className={styles['hiw-ambient-glow-left']} />
      <div className={styles['hiw-ambient-glow-right']} />

      <div className={styles['hiw-split-grid']}>
        
        {/* LEFT COLUMN */}
        <div className={styles['hiw-split-left']}>
          <div className={styles['hiw-title-wrapper']}>
            <SplitText
              text={"Learn by seeing steps\nunfold."}
              tag="h2"
              className={styles['hiw-split-title']}
              delay={40}
              duration={0.4}
              from={{ opacity: 0, y: 15 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className={styles['hiw-split-right']}>
          <div className={styles['hiw-split-sticky-content']}>
            <span className={styles['hiw-split-label']}>How it works</span>

            <div className={styles['hiw-split-cards-container']}>
              {steps.map((step) => (
                <article key={step.phase} className={styles['hiw-split-card']}>
                  <div className={styles['hiw-split-card-glow']} />
                  <div className={styles['hiw-split-item-phase']}>{step.phase}</div>
                  <p className={styles['hiw-split-item-desc']}>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}