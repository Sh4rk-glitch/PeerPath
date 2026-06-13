import React, { useEffect, useRef } from 'react'

type AnimationType = 'fade-up' | 'slide-in-left' | 'slide-in-right' | 'zoom-in'

type Props = {
  children: React.ReactNode
  animation?: AnimationType
}

export default function AnimatedWrapper({ children, animation = 'fade-up' }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    el.classList.add('reveal', `animate-${animation}`)
    observer.observe(el)

    return () => observer.disconnect()
  }, [animation])

  return (
    <div ref={ref}>
      {children}
    </div>
  )
}
