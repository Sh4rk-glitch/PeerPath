import React, { useEffect, useRef } from 'react'

type Props = {
  children: React.ReactNode
  speed?: number
  axis?: 'x' | 'y'
  className?: string
}

export default function Parallax({ children, speed = 0.14, axis = 'y', className = '' }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const frame = useRef<number | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const update = () => {
      frame.current = null
      const rect = node.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height)
      const offset = Math.max(-1, Math.min(1, (progress - 0.5) * 2)) * speed * 100
      const transform = axis === 'x' ? `translateX(${offset}px)` : `translateY(${offset}px)`
      node.style.transform = transform
    }

    const onScroll = () => {
      if (frame.current === null) {
        frame.current = window.requestAnimationFrame(update)
      }
    }

    node.style.willChange = 'transform'
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    onScroll()

    return () => {
      if (frame.current) window.cancelAnimationFrame(frame.current)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [speed, axis])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
