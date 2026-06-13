import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styles from './TextPressure.module.css'

interface TextPressureProps {
  text?: string
  fontFamily?: string
  fontUrl?: string
  width?: boolean
  weight?: boolean
  italic?: boolean
  alpha?: boolean
  flex?: boolean
  stroke?: boolean
  scale?: boolean
  textColor?: string
  strokeColor?: string
  strokeWidth?: number
  className?: string
  minFontSize?: number
}

const dist = (a: { x: number; y: number }, b: { x: number; y: number }) => {
  const dx = b.x - a.x
  const dy = b.y - a.y
  return Math.sqrt(dx * dx + dy * dy)
}

const getAttr = (distance: number, maxDist: number, minVal: number, maxVal: number) => {
  const val = maxVal - Math.abs((maxVal * distance) / maxDist)
  return Math.max(minVal, val + minVal)
}

const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

const TextPressure: React.FC<TextPressureProps> = ({
  text = 'Welcome to peerpath, the only learning tool you\'ll ever need.',
  fontFamily = 'Compressa VF',
  fontUrl = 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2',
  width = true,
  weight = true,
  italic = true,
  alpha = false,
  flex = true,
  stroke = false,
  scale = false,
  textColor = '#ffffff',
  strokeColor = '#5227FF',
  strokeWidth = 2,
  className = '',
  minFontSize = 48
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const spansRef = useRef<Array<HTMLSpanElement | null>>([])
  
  const mouseRef = useRef({ x: 0, y: 0 })      
  const cursorRef = useRef({ x: 0, y: 0 })     
  const trueMouseRef = useRef({ x: 0, y: 0 })  

  // Ref states managing tracking phases
  const isIntroAnimatingRef = useRef(true)
  const introStartTimeRef = useRef<number | null>(null)
  const userHasMovedMouseRef = useRef(false)
  const isHandoffPhaseRef = useRef(false) // NEW: Flags the exact frame window when the automatic sweep ends

  const [fontSize, setFontSize] = useState(minFontSize)
  const [scaleY, setScaleY] = useState(1)
  const [lineHeight, setLineHeight] = useState(1)

  const chars = text.split('')

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      trueMouseRef.current.x = e.clientX
      trueMouseRef.current.y = e.clientY
      userHasMovedMouseRef.current = true
    }

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      trueMouseRef.current.x = touch.clientX
      trueMouseRef.current.y = touch.clientY
      userHasMovedMouseRef.current = true
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    if (containerRef.current) {
      const { left, top, height: containerH } = containerRef.current.getBoundingClientRect()
      
      mouseRef.current.x = left - 400
      mouseRef.current.y = top + containerH / 2
      
      cursorRef.current.x = mouseRef.current.x
      cursorRef.current.y = mouseRef.current.y
      
      trueMouseRef.current.x = mouseRef.current.x
      trueMouseRef.current.y = mouseRef.current.y
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  const setSize = useCallback(() => {
    if (!containerRef.current || !titleRef.current) return

    const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect()
    let newFontSize = containerW / (chars.length / 1.7)
    newFontSize = Math.max(newFontSize, minFontSize)

    setFontSize(newFontSize)
    setScaleY(1)
    setLineHeight(1)

    requestAnimationFrame(() => {
      if (!titleRef.current) return
      const textRect = titleRef.current.getBoundingClientRect()

      if (scale && textRect.height > 0) {
        const yRatio = containerH / textRect.height
        setScaleY(yRatio)
        setLineHeight(yRatio)
      }
    })
  }, [chars.length, minFontSize, scale])

  useEffect(() => {
    const debouncedSetSize = debounce(setSize, 100)
    debouncedSetSize()
    window.addEventListener('resize', debouncedSetSize)
    return () => window.removeEventListener('resize', debouncedSetSize)
  }, [setSize])

  useEffect(() => {
    let rafId = 0
    
    const animate = (timestamp: number) => {
      if (!introStartTimeRef.current) introStartTimeRef.current = timestamp
      
      if (isIntroAnimatingRef.current && containerRef.current) {
        const { left, top, width: containerW, height: containerH } = containerRef.current.getBoundingClientRect()
        const elapsed = timestamp - introStartTimeRef.current
        
        const duration = 3500 
        const progress = Math.min(elapsed / duration, 1)

        const startX = left - 400
        const endX = left + containerW + 400
        
        cursorRef.current.x = startX + (endX - startX) * progress
        cursorRef.current.y = top + containerH / 2

        if (progress >= 1) {
          isIntroAnimatingRef.current = false
          isHandoffPhaseRef.current = true // Transition to the high-speed handoff phase
        }
      } else {
        if (userHasMovedMouseRef.current) {
          cursorRef.current.x = trueMouseRef.current.x
          cursorRef.current.y = trueMouseRef.current.y
        }
      }

      // NEW: Dynamic Lerp Speed Multiplier
      // If we are in the handoff phase, check how far away the physical mouse is.
      // If it's close by, turn off the handoff state to return to normal smooth dampening.
      let currentLerpFactor = 14
      
      if (isHandoffPhaseRef.current) {
        const remainingDistance = dist(mouseRef.current, cursorRef.current)
        if (remainingDistance > 5) {
          currentLerpFactor = 4 // Significantly lower divider = ultra-fast acceleration to close the gap instantly
        } else {
          isHandoffPhaseRef.current = false // Gap closed, return to silky-smooth speed
        }
      }

      // Smooth interpolation using the dynamic speed factor
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / currentLerpFactor
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / currentLerpFactor

      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect()
        const maxDist = Math.max(titleRect.width / 2, 120)

        spansRef.current.forEach((span) => {
          if (!span) return
          const rect = span.getBoundingClientRect()
          const charCenter = {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2
          }
          const d = dist(mouseRef.current, charCenter)
          const wdth = width ? Math.floor(getAttr(d, maxDist, 5, 200)) : 100
          const wght = weight ? Math.floor(getAttr(d, maxDist, 100, 900)) : 400
          const italVal = italic ? getAttr(d, maxDist, 0, 1).toFixed(2) : '0'
          const alphaVal = alpha ? getAttr(d, maxDist, 0, 1).toFixed(2) : '1'
          const newFontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`

          if (span.style.fontVariationSettings !== newFontVariationSettings) {
            span.style.fontVariationSettings = newFontVariationSettings
          }
          if (alpha && span.style.opacity !== alphaVal) {
            span.style.opacity = alphaVal
          }
        })
      }

      rafId = window.requestAnimationFrame(animate)
    }

    rafId = window.requestAnimationFrame(animate)
    return () => window.cancelAnimationFrame(rafId)
  }, [width, weight, italic, alpha])

  const styleElement = useMemo(() => {
    return (
      <style>{`
        @font-face {
          font-family: '${fontFamily}';
          src: url('${fontUrl}');
          font-style: normal;
          font-display: swap;
        }
        .${styles.stroke} span {
          position: relative;
          color: ${textColor};
        }
        .${styles.stroke} span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: ${strokeWidth}px;
          -webkit-text-stroke-color: ${strokeColor};
        }
      `}</style>
    )
  }, [fontFamily, fontUrl, stroke, textColor, strokeColor, strokeWidth])

  return (
    <div ref={containerRef} className={styles.container}>
      {styleElement}
      <h1
        ref={titleRef}
        className={`${styles.title} ${className} ${flex ? styles.flex : ''} ${stroke ? styles.stroke : ''}`}
        style={{
          fontFamily,
          fontSize,
          lineHeight,
          transform: `scale(1, ${scaleY})`,
          transformOrigin: 'center top',
          margin: 0,
          fontWeight: 100,
          color: stroke ? undefined : textColor
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              spansRef.current[i] = el
            }}
            data-char={char}
            className={styles.char}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  )
}

export default TextPressure