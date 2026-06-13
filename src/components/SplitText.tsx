import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  ease?: string | ((t: number) => number)
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars'
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  threshold?: number
  rootMargin?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  textAlign?: React.CSSProperties['textAlign']
  onLetterAnimationComplete?: () => void
  playOnMount?: boolean
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  tag = 'p',
  textAlign = 'center',
  onLetterAnimationComplete
  ,
  playOnMount = false
}) => {
  const ref = useRef<HTMLElement | null>(null)
  const animationCompletedRef = useRef(false)
  const onCompleteRef = useRef(onLetterAnimationComplete)
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete
  }, [onLetterAnimationComplete])

  useEffect(() => {
    if ((document as any).fonts && (document as any).fonts.status === 'loaded') {
      setFontsLoaded(true)
    } else if ((document as any).fonts) {
      ;(document as any).fonts.ready.then(() => setFontsLoaded(true))
    } else {
      setFontsLoaded(true)
    }
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el || !text || !fontsLoaded) return
    if (animationCompletedRef.current) return

    // Create spans for chars or words
    const container = el
    const parts: string[] = splitType.includes('words') && !splitType.includes('chars') ? text.split(' ') : text.split('')
    container.innerHTML = parts
      .map((t, i) => {
        const content = t === ' ' ? '&nbsp;' : t
        return `<span class="split-char" data-index="${i}">${content}</span>`
      })
      .join('')

    const targets = Array.from(container.querySelectorAll('.split-char')) as Element[]

    const startPct = (1 - threshold) * 100
    const start = `top ${startPct}%`

    const tweenOpts: any = {
      ...to,
      duration,
      ease: ease as any,
      stagger: delay / 1000,
      onComplete: () => {
        animationCompletedRef.current = true
        onCompleteRef.current?.()
      },
      willChange: 'transform, opacity',
      force3D: true
    }

    let tween: gsap.core.Tween | null = null
    if (playOnMount) {
      tween = gsap.fromTo(targets, { ...from }, tweenOpts)
    } else {
      tween = gsap.fromTo(targets, { ...from }, { ...tweenOpts, scrollTrigger: { trigger: container, start, once: true, rootMargin } })
    }

    return () => {
      try {
        tween.kill()
      } catch (_) {}
    }
  }, [text, delay, duration, ease, splitType, JSON.stringify(from), JSON.stringify(to), threshold, rootMargin, fontsLoaded])

  const Tag = (tag || 'p') as React.ElementType
  const style: React.CSSProperties = { textAlign }
  return (
    <Tag ref={ref as any} style={style} className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}>
      {text}
    </Tag>
  )
}

export default SplitText
