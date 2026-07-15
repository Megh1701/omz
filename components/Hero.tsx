"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

interface Star {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export default function Hero() {
  const [stars, setStars] = useState<Star[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Generate stable star coordinates on mount to prevent SSR/CSR hydration mismatch
    const generatedStars = Array.from({ length: 90 }).map(() => {
      const r = Math.random();
      return {
        x: Math.random() * 100,
        y: Math.random() * 65, // Keep stars in the upper sky area (above the horizon curve)
        size: r > 0.93 ? 2.0 : r > 0.7 ? 1.3 : 0.8,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 5,
      };
    });
    setStars(generatedStars);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#030303] py-20 select-none">
      {/* CSS Twinkling Animation Injection */}
      <style>{`
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.15; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .star-particle {
          animation: starTwinkle var(--twinkle-duration, 4s) ease-in-out infinite;
          animation-delay: var(--twinkle-delay, 0s);
        }
      `}</style>

      {/* Fine grain overlay for premium analog texture */}
      <div
        className="absolute inset-0 pointer-events-none z-30 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='fineNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' seed='1'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23fineNoise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Content (Tagline only, no other text or inputs) */}
      <div className="relative z-20 w-full max-w-5xl px-6 text-center flex flex-col items-center pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium leading-[1.1] tracking-[-0.04em] text-[rgb(240,240,240)] max-w-4xl text-balance"
        >
          Good things come to those{" "}
          <span className={`${instrumentSerif.className} font-normal italic pr-1`}>
            who{" "}
            <span
              className="bg-gradient-to-b from-[#ffffff] via-[#e2e8f0] via-[#94a3b8] to-[#475569] bg-clip-text text-transparent font-medium"
              style={{ filter: "drop-shadow(0 0 12px rgba(255,255,255,0.35)) drop-shadow(0 0 2px rgba(255,255,255,0.7))" }}
            >
              invest.
            </span>
          </span>
        </motion.h1>
      </div>

      {/* Twinkling Star Field in the Background (sharp, clean stars in the sky) */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-60">
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute star-particle bg-white rounded-full"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                top: `${star.y}%`,
                left: `${star.x}%`,
                filter: star.size > 1.5 ? "blur(0.3px)" : "none",
                // Pass variables to CSS animation
                "--twinkle-duration": `${star.duration}s`,
                "--twinkle-delay": `${star.delay}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      )}

      {/* Horizon & Space Background Container */}
      <div className="absolute bottom-0 left-0 w-full h-[400px] pointer-events-none z-10">

        {/* Horizon SVG with flush light atmospheric glows and planet body */}
        <svg
          viewBox="0 0 1400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-[400px] left-0 z-10"
          preserveAspectRatio="none"
          style={{ overflow: "visible" }}
        >
          <defs>
            {/* Radial gradient for dark purple atmospheric glow blob with lighter tone-changing animations */}
            <radialGradient id="purpleBlobGrad" cx="50%" cy="50%" r="50%">
              <motion.stop
                offset="0%"
                animate={{
                  stopColor: ["#d8b4fe", "#c7d2fe", "#f3e8ff", "#d8b4fe"],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                stopOpacity="0.8"
              />
              <motion.stop
                offset="35%"
                animate={{
                  stopColor: ["#c084fc", "#a5b4fc", "#e9d5ff", "#c084fc"],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                stopOpacity="0.45"
              />
              <motion.stop
                offset="70%"
                animate={{
                  stopColor: ["#a78bfa", "#818cf8", "#d8b4fe", "#a78bfa"],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                stopOpacity="0.25"
              />
              <stop offset="100%" stopColor="#030303" stopOpacity="0" />
            </radialGradient>

            {/* Radial gradient for light green atmospheric glow blob - soft mint, very faint green */}
            <radialGradient id="emeraldBlobGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.22" />
              <stop offset="45%" stopColor="#6ee7b7" stopOpacity="0.08" />
              <stop offset="75%" stopColor="#34d399" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0" />
            </radialGradient>

            {/* Horizontal gradient for white focal rim */}
            <linearGradient id="whiteRimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="20%" stopColor="#ffffff" stopOpacity="0.15" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="60%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="80%" stopColor="#ffffff" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Radial fade mask: bright at center-horizon, fades left, right and upward */}
            <radialGradient id="blobCenterFadeMask" cx="700" cy="320" r="750" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="30%" stopColor="white" stopOpacity="0.9" />
              <stop offset="55%" stopColor="white" stopOpacity="0.55" />
              <stop offset="75%" stopColor="white" stopOpacity="0.18" />
              <stop offset="90%" stopColor="white" stopOpacity="0.03" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="blobCenterFade">
              <rect x="-400" y="-200" width="2200" height="800" fill="url(#blobCenterFadeMask)" />
            </mask>

            {/* Blur filters for atmospheric scattering effects */}
            <filter id="blurAtmosphereHeavy" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="55" />
            </filter>
            <filter id="blurAtmosphereMedium" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="28" />
            </filter>
            <filter id="blurAtmosphereSoft" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
            <filter id="blurAtmosphereRim" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" />
            </filter>
          </defs>

          {/* BACKGROUND GLOW BLOBS — masked with radial center fade: bright at horizon center, fades left/right/up */}
          <g mask="url(#blobCenterFade)">
            {/* Light Green Atmospheric Glow - extremely faint, centered at 700 with random drift */}
            <motion.ellipse
              fill="url(#emeraldBlobGrad)"
              filter="url(#blurAtmosphereHeavy)"
              style={{ mixBlendMode: "screen" }}
              initial={{ cx: 700, cy: 168, rx: 620, ry: 290, opacity: 0.22 }}
              animate={{
                cx: [700, 640, 750, 680, 720, 700],
                cy: [168, 173, 163, 171, 165, 168],
                rx: [620, 680, 590, 650, 620],
                ry: [290, 320, 270, 305, 290],
                opacity: [0.22, 0.35, 0.28, 0.22]
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Dark Purple Atmospheric Glow - vibrant, centered at 700 with independent random drift */}
            <motion.ellipse
              fill="url(#purpleBlobGrad)"
              filter="url(#blurAtmosphereHeavy)"
              style={{ mixBlendMode: "screen" }}
              initial={{ cx: 700, cy: 172, rx: 820, ry: 370, opacity: 0.85 }}
              animate={{
                cx: [700, 760, 650, 720, 670, 700],
                cy: [172, 167, 176, 169, 173, 172],
                rx: [820, 760, 880, 800, 820],
                ry: [370, 340, 400, 360, 370],
                opacity: [0.85, 0.95, 0.90, 0.85]
              }}
              transition={{
                duration: 27,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </g>

          {/* TAPERED WHITE RIMS (CREATING THE THICK WHITE LIGHT REFRACTION CUT-OFF AT THE EDGE) */}
          {/* Layer 5: Wide White Horizon Glow (Tapered shape) */}
          <path
            d="M 0 320 Q 700 48 1400 320 Q 700 86 0 320 Z"
            fill="url(#whiteRimGrad)"
            filter="url(#blurAtmosphereMedium)"
            opacity="0.45"
          />

          {/* Layer 6: Soft White Rim Glow (Thicker tapered shape) */}
          <path
            d="M 0 320 Q 700 58 1400 320 Q 700 84 0 320 Z"
            fill="url(#whiteRimGrad)"
            filter="url(#blurAtmosphereSoft)"
            opacity="0.75"
          />

          {/* Layer 7: Sharp White Rim Core (Clearly visible thick white horizon line) */}
          <path
            d="M 0 320 Q 700 68 1400 320 Q 700 82 0 320 Z"
            fill="url(#whiteRimGrad)"
            filter="url(#blurAtmosphereRim)"
            opacity="0.92"
          />

          {/* Layer 8: Brightest Core Line (Crisp boundary edge) */}
          <path
            d="M 0 320 Q 700 74 1400 320 Q 700 80.5 0 320 Z"
            fill="url(#whiteRimGrad)"
            opacity="0.95"
          />

          {/* Layer 9: Solid Dark Planet Body (Lower Half)
              Placed last to overlay/mask the bottom half of the glowing strokes & ellipses,
              ensuring the glow starts perfectly dense at the horizon rim and
              fades only upwards into the sky. Below the curve remains plain black. */}
          <path
            d="M 0 320 Q 700 80 1400 320 L 1400 400 L 0 400 Z"
            fill="#030303"
          />
        </svg>
      </div>
    </section>
  );
}
