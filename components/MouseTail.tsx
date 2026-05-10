'use client'

import React, { useRef, useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const IMAGES = ['/r.png', '/r.png', '/r.png']
const NOTE_SIZE = 120

const DISTANCE_THRESHOLD = 80
const SPAWN_THROTTLE = 15
const MAX_PARTICLES = 8

const IDLE_DELAY = 400
const FIFO_REMOVE_INTERVAL = 150

interface Particle {
  id: number
  x: number
  y: number
  src: string
  rotate: number
  offsetX: number
  offsetY: number
  popScale: number
}

/* =========================
   MAIN COMPONENT
========================= */

export default function MouseTail() {
  const [particles, setParticles] = useState<Particle[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const lastSpawnRef = useRef(0)
  const lastPosRef = useRef<{ x: number; y: number } | null>(null)
  const particleIdRef = useRef(0)

  const idleTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const clearIntervalRef = useRef<NodeJS.Timeout | null>(null)

  /* ---------- START FIFO CLEAR ---------- */
  const startFIFOClear = useCallback(() => {
    // Don't start another interval if one is already running
    if (clearIntervalRef.current) return

    clearIntervalRef.current = setInterval(() => {
      setParticles((prev) => {
        if (prev.length === 0) {
          clearInterval(clearIntervalRef.current!)
          clearIntervalRef.current = null
          return prev
        }
        // Remove oldest particle (FIFO)
        return prev.slice(1)
      })
    }, FIFO_REMOVE_INTERVAL)
  }, [])

  /* ---------- SCHEDULE IDLE CLEAR ---------- */
  const scheduleIdleClear = useCallback(() => {
    // Clear any existing timeout
    if (idleTimeoutRef.current) {
      clearTimeout(idleTimeoutRef.current)
    }
    
    idleTimeoutRef.current = setTimeout(() => {
      startFIFOClear()
    }, IDLE_DELAY)
  }, [startFIFOClear])

  /* ---------- CANCEL CLEAR ---------- */
  const cancelClear = useCallback(() => {
    if (idleTimeoutRef.current) {
      clearTimeout(idleTimeoutRef.current)
      idleTimeoutRef.current = null
    }
    if (clearIntervalRef.current) {
      clearInterval(clearIntervalRef.current)
      clearIntervalRef.current = null
    }
  }, [])

  /* ---------- MOUSE MOVE ---------- */
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // Cancel any pending clear when mouse is moving
      cancelClear()

      const now = Date.now()
      if (now - lastSpawnRef.current < SPAWN_THROTTLE) {
        // Still schedule idle clear even if we don't spawn
        scheduleIdleClear()
        return
      }

      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return

      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      if (lastPosRef.current) {
        const dx = x - lastPosRef.current.x
        const dy = y - lastPosRef.current.y
        if (Math.sqrt(dx * dx + dy * dy) < DISTANCE_THRESHOLD) {
          scheduleIdleClear()
          return
        }
      }

      lastPosRef.current = { x, y }
      lastSpawnRef.current = now

      const particle: Particle = {
        id: particleIdRef.current++,
        x,
        y,
        src: IMAGES[Math.floor(Math.random() * IMAGES.length)],
        rotate: Math.random() * 50 - 25,
        offsetX: Math.random() * 30 - 15,
        offsetY: Math.random() * 30 - 15,
        popScale: 1.1 + Math.random() * 0.4, // Random pop size between 1.1 and 1.5
      }

      setParticles((prev) => {
        const next = [...prev, particle]
        if (next.length > MAX_PARTICLES) next.shift()
        return next
      })

      // Schedule idle clear after spawning
      scheduleIdleClear()
    },
    [cancelClear, scheduleIdleClear]
  )

  /* ---------- MOUSE LEAVE ---------- */
  const handleMouseLeave = useCallback(() => {
    lastPosRef.current = null
    // Immediately start clearing when mouse leaves
    scheduleIdleClear()
  }, [scheduleIdleClear])

  /* ---------- CLEANUP ---------- */
  useEffect(() => {
    return () => {
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current)
      if (clearIntervalRef.current) clearInterval(clearIntervalRef.current)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-screen h-screen bg-black overflow-hidden flex items-center justify-center"
    >
    
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_70%)]" />

      <AnimatePresence>
        {particles.map((p) => (
          <InferenceParticle key={p.id} particle={p} />
        ))}
      </AnimatePresence>

      {/* Centered Content with Higher Z-Index */}
      <div className="relative z-50 text-center px-6">
       <h1  style={{
  fontFamily: "var(--font-title)",
  textShadow:
    "0 0 5px rgba(255,255,255,0.4), 0 0 20px rgba(255,255,255,0.3), 0 0 30px rgba(255,255,255,0.2)",
}}
 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">
  Grow your <span className='italic' style={{
    }}>Wealth.</span> 
</h1>
        <p className="text-base  text-gray-300 mb-8 max-w-2xl mx-auto text-balance">
          we helps you to secure your financial future with insurance, loans, and investments.
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-lg cursor-pointer font-semibold hover:bg-gray-200 transition-colors">
          Contact Now
        </button>
      </div>

        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black via-black/20 to-transparent z-20 pointer-events-none" />


         <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent z-20 pointer-events-none" />

    </div>
  )
}

/* =========================
   NOTE PARTICLE - POPCORN STYLE
========================= */

interface Particle {
  id: number
  x: number
  y: number
  src: string
  rotate: number
  offsetX: number
  offsetY: number
  popScale: number
}

function InferenceParticle({ particle }: { particle: Particle }) {
  const NOTE_SIZE = 120;

  const baseX = particle.x - NOTE_SIZE / 2 + particle.offsetX;
  const baseY = particle.y - NOTE_SIZE / 2 + particle.offsetY;

  return (
    <motion.div
      initial={{
        x: baseX,
        y: baseY,
        scale: 0,
        rotate: -10,
        opacity: 0,
      }}
      animate={{
        x: baseX,
        y: baseY - 40,
        scale: particle.popScale,
        rotate: particle.rotate,
        opacity: 1,
      }}
      exit={{
        x: baseX,
        y: baseY - 80,
        scale: 0,
        opacity: 0,
        rotate: particle.rotate + 20,
      }}
      transition={{
        x: {
          type: "spring",
          stiffness: 260,
          damping: 20,
        },
        y: {
          type: "spring",
          stiffness: 220,
          damping: 18,
        },
        scale: {
          type: "spring",
          stiffness: 420,
          damping: 18,
        },
        rotate: {
          type: "spring",
          stiffness: 180,
          damping: 14,
        },
        opacity: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
      className="absolute pointer-events-none will-change-transform"
      style={{
        width: NOTE_SIZE,
        height: NOTE_SIZE,
        left: 0,
        top: 0,
      }}
    >
      <img
        src={particle.src || "/placeholder.svg"}
        draggable={false}
        className="w-full h-full object-contain rounded-full drop-shadow-[0_18px_45px_rgba(255,215,0,0.55)]"
        alt=""
      />
    </motion.div>
  );
}