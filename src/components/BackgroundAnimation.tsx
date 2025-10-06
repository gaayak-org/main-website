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
  targetHue: number
  size: number
  angle: number
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
    let sceneProgress = 0
    const SCENE_DURATION = 600 // ~10 seconds at 60fps

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    // Scene configurations - more subtle colors
    const scenes = [
      {
        name: 'studio',
        hues: [210, 220, 200], // Soft blues
        particleCount: 45,
        speed: 0.3,
        pattern: 'wave'
      },
      {
        name: 'stage',
        hues: [280, 290, 270], // Muted purples
        particleCount: 55,
        speed: 0.5,
        pattern: 'circular'
      },
      {
        name: 'home',
        hues: [45, 50, 40], // Soft gold
        particleCount: 40,
        speed: 0.25,
        pattern: 'horizontal'
      },
      {
        name: 'busking',
        hues: [170, 180, 160], // Muted teals
        particleCount: 50,
        speed: 0.4,
        pattern: 'spiral'
      },
    ]

    const lerp = (start: number, end: number, t: number) => {
      return start + (end - start) * t
    }

    const createParticle = (sceneIndex: number): Particle => {
      const sceneConfig = scenes[sceneIndex]
      const hue = sceneConfig.hues[Math.floor(Math.random() * sceneConfig.hues.length)]

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * sceneConfig.speed,
        vy: (Math.random() - 0.5) * sceneConfig.speed,
        life: 0,
        maxLife: 300 + Math.random() * 300,
        hue,
        targetHue: hue,
        size: 1.5 + Math.random() * 2,
        angle: Math.random() * Math.PI * 2,
      }
    }

    const initParticles = (sceneIndex: number) => {
      const count = scenes[sceneIndex].particleCount
      particles = Array.from({ length: count }, () => createParticle(sceneIndex))
    }

    initParticles(0)

    const updateParticleMotion = (particle: Particle, sceneConfig: typeof scenes[0]) => {
      const time = Date.now() * 0.0001

      switch (sceneConfig.pattern) {
        case 'wave':
          particle.vy += Math.sin(particle.x * 0.01 + time) * 0.02
          break
        case 'circular':
          particle.angle += 0.005
          particle.vx = Math.cos(particle.angle) * sceneConfig.speed
          particle.vy = Math.sin(particle.angle) * sceneConfig.speed
          break
        case 'horizontal':
          particle.vx = sceneConfig.speed * 0.8
          particle.vy = Math.sin(time + particle.x * 0.01) * 0.1
          break
        case 'spiral':
          particle.angle += 0.01
          const radius = Math.sqrt(particle.x * particle.x + particle.y * particle.y)
          particle.vx += Math.cos(particle.angle) * 0.02
          particle.vy += Math.sin(particle.angle) * 0.02
          break
      }
    }

    const drawMusicalTrail = (
      x: number,
      y: number,
      life: number,
      maxLife: number,
      hue: number,
      size: number
    ) => {
      const progress = life / maxLife
      const alpha = Math.sin(progress * Math.PI) * 0.08 // More subtle

      // Main particle
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${hue}, 45%, 55%, ${alpha})` // Reduced saturation & brightness
      ctx.fill()

      // Subtle glow
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3)
      gradient.addColorStop(0, `hsla(${hue}, 45%, 55%, ${alpha * 0.3})`)
      gradient.addColorStop(1, `hsla(${hue}, 45%, 55%, 0)`)
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(x, y, size * 3, 0, Math.PI * 2)
      ctx.fill()
    }

    const animate = () => {
      // Fade effect for trails
      ctx.fillStyle = 'rgba(10, 10, 10, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update scene progress
      sceneProgress++
      const transitionStart = SCENE_DURATION - 120 // Start transition 2s before end

      if (sceneProgress > SCENE_DURATION) {
        scene = (scene + 1) % scenes.length
        sceneProgress = 0
        console.log(`Transitioning to scene: ${scenes[scene].name}`)
      }

      const currentScene = scenes[scene]
      const nextScene = scenes[(scene + 1) % scenes.length]

      // Calculate transition progress
      let transitionProgress = 0
      if (sceneProgress > transitionStart) {
        transitionProgress = (sceneProgress - transitionStart) / 120
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.life++

        // Smooth color transition
        if (transitionProgress > 0) {
          const nextHue = nextScene.hues[Math.floor(Math.random() * nextScene.hues.length)]
          particle.targetHue = lerp(particle.hue, nextHue, transitionProgress * 0.1)
          particle.hue = particle.targetHue
        }

        // Apply scene-specific motion
        updateParticleMotion(particle, currentScene)

        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < -50) particle.x = canvas.width + 50
        if (particle.x > canvas.width + 50) particle.x = -50
        if (particle.y < -50) particle.y = canvas.height + 50
        if (particle.y > canvas.height + 50) particle.y = -50

        if (particle.life < particle.maxLife) {
          drawMusicalTrail(
            particle.x,
            particle.y,
            particle.life,
            particle.maxLife,
            particle.hue,
            particle.size
          )
        }
      })

      // Remove dead particles and maintain count
      particles = particles.filter((p) => p.life < p.maxLife)
      const targetCount = lerp(currentScene.particleCount, nextScene.particleCount, transitionProgress)

      while (particles.length < targetCount) {
        particles.push(createParticle(scene))
      }

      // Draw connecting lines between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1, i + 4).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const alpha = (1 - distance / 120) * 0.03
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `hsla(${p1.hue}, 45%, 55%, ${alpha})`
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