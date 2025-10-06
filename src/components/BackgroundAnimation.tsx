'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  hue: number
}

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let scene = 0
    let sceneTransition = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    // Scene configurations (studio, stage, home, busking)
    const scenes = [
      { hues: [200, 180, 220], particleCount: 50 }, // Studio - blues
      { hues: [300, 280, 320], particleCount: 60 }, // Stage - purples
      { hues: [60, 40, 80], particleCount: 45 },    // Home - yellows
      { hues: [160, 140, 180], particleCount: 55 }, // Busking - teals
    ]

    const createParticle = (sceneIndex: number): Particle => {
      const sceneConfig = scenes[sceneIndex]
      const hue = sceneConfig.hues[Math.floor(Math.random() * sceneConfig.hues.length)]

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: 0,
        maxLife: 200 + Math.random() * 200,
        hue,
      }
    }

    const initParticles = (sceneIndex: number) => {
      const count = scenes[sceneIndex].particleCount
      particles = Array.from({ length: count }, () => createParticle(sceneIndex))
    }

    initParticles(0)

    // Musical note curves
    const drawMusicalTrail = (
      x: number,
      y: number,
      life: number,
      maxLife: number,
      hue: number
    ) => {
      const progress = life / maxLife
      const alpha = Math.sin(progress * Math.PI) * 0.15
      const size = 2 + Math.sin(progress * Math.PI) * 3

      // Create flowing curves
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${hue}, 70%, 60%, ${alpha})`
      ctx.fill()

      // Trail effect
      if (life > 10) {
        ctx.beginPath()
        ctx.moveTo(x, y)
        const trailLength = 20
        for (let i = 1; i <= trailLength; i++) {
          const trailProgress = i / trailLength
          const trailAlpha = alpha * (1 - trailProgress) * 0.5
          ctx.lineTo(x - trailProgress * 10, y - trailProgress * 5)
          ctx.strokeStyle = `hsla(${hue}, 70%, 60%, ${trailAlpha})`
          ctx.lineWidth = size * (1 - trailProgress)
          ctx.stroke()
        }
      }
    }

    const animate = () => {
      // Fade effect instead of clear for trails
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update scene transition
      sceneTransition++
      if (sceneTransition > 500) { // Change scene every ~8 seconds at 60fps
        scene = (scene + 1) % scenes.length
        sceneTransition = 0
        // Gradually introduce new particles
        const newParticles = Array.from({ length: 10 }, () => createParticle(scene))
        particles.push(...newParticles)
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.life++
        particle.x += particle.vx
        particle.y += particle.vy

        // Add subtle sine wave motion (like musical notes)
        particle.y += Math.sin(particle.life * 0.02) * 0.1

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        if (particle.life < particle.maxLife) {
          drawMusicalTrail(
            particle.x,
            particle.y,
            particle.life,
            particle.maxLife,
            particle.hue
          )
        }
      })

      // Remove dead particles and maintain count
      particles = particles.filter((p) => p.life < p.maxLife)
      while (particles.length < scenes[scene].particleCount) {
        particles.push(createParticle(scene))
      }

      // Draw connecting lines between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const alpha = (1 - distance / 150) * 0.05
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `hsla(${p1.hue}, 70%, 60%, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  )
}