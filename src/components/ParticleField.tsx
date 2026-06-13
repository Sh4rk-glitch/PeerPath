import React, { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
}

const createParticle = (width: number, height: number): Particle => {
  const speed = 0.2 + Math.random() * 0.4
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * speed,
    vy: (Math.random() - 0.5) * speed,
    radius: 0.8 + Math.random() * 1.4,
    alpha: 0.12 + Math.random() * 0.18
  }
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (!particlesRef.current.length) {
        particlesRef.current = Array.from({ length: 110 }, () => createParticle(rect.width, rect.height))
      }
    }

    const updateAndDraw = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)
      ctx.fillStyle = 'rgba(255,255,255,0.18)'
      ctx.strokeStyle = 'rgba(255,255,255,0.08)'
      ctx.lineWidth = 1

      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < -20) particle.x = rect.width + 20
        if (particle.x > rect.width + 20) particle.x = -20
        if (particle.y < -20) particle.y = rect.height + 20
        if (particle.y > rect.height + 20) particle.y = -20

        ctx.globalAlpha = particle.alpha
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      particlesRef.current.forEach((particle, index) => {
        for (let j = index + 1; j < particlesRef.current.length; j += 1) {
          const other = particlesRef.current[j]
          const dx = other.x - particle.x
          const dy = other.y - particle.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 110) {
            ctx.globalAlpha = 0.04
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        }
      })

      rafRef.current = window.requestAnimationFrame(updateAndDraw)
    }

    resizeCanvas()
    updateAndDraw()

    window.addEventListener('resize', resizeCanvas)
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
}
