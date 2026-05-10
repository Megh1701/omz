"use client"

import { useRef, useState, useEffect } from "react"
import { normalFont } from "@/app/fonts"
import { Shield, TrendingUp, Landmark, LineChart, FileText, PiggyBank } from "lucide-react"
const services = [
  {
    id: "insurance",
    title: "Insurance",
    description: "Protect what matters most with comprehensive coverage solutions.",
    icon: Shield,
    href: "/services/insurance",
    highlight: "Family Protection",
    highlightLabel: "Secure Tomorrow",
  },
  {
    id: "mutual-funds",
    title: "Mutual Funds",
    description: "Expert-managed portfolios for long-term wealth creation.",
    icon: TrendingUp,
    href: "/services/mutual-funds",
    highlight: "Goal-based Investing",
    highlightLabel: "Wealth Planning",
  },
  {
    id: "loans",
    title: "Loans",
    description: "Flexible financing with competitive rates for every need.",
    icon: Landmark,
    href: "/services/loans",
    highlight: "Quick Assistance",
    highlightLabel: "Hassle-free Process",
  },
  {
    id: "stock-broking",
    title: "Stock Broking",
    description: "Real-time trading with advanced market analytics.",
    icon: LineChart,
    href: "/services/stock-broking",
    highlight: "Smart Trading",
    highlightLabel: "Informed Decisions",
  },
  {
    id: "bonds",
    title: "Bonds",
    description: "Secure fixed-income for capital preservation.",
    icon: FileText,
    href: "/services/bonds",
    highlight: "Stable Income",
    highlightLabel: "Low Volatility",
  },
  {
    id: "fixed-deposits",
    title: "Fixed Deposits",
    description: "Guaranteed returns with flexible tenure options.",
    icon: PiggyBank,
    href: "/services/fixed-deposits",
    highlight: "Safe Returns",
    highlightLabel: "Capital Protection",
  },
]
function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const Icon = service.icon

  return (
    <a
      ref={cardRef}
      href={service.href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-white/30 hover:bg-white/[0.04]"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      aria-label={`Learn more about our ${service.title} services`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
            : "none",
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`
            : "none",
          WebkitMaskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
        aria-hidden="true"
      />

      <div className="relative p-6 sm:p-8">
        <div className="relative mb-8">
          <div className="relative flex h-14 w-14 items-center justify-center">
         
            <div className="absolute inset-0 rounded-xl bg-foreground/5 transition-transform duration-700 group-hover:scale-110" />
            <div 
              className="absolute inset-0 rounded-xl bg-foreground/5 opacity-0 transition-all duration-700 group-hover:scale-125 group-hover:opacity-100"
              style={{ transitionDelay: "100ms" }}
            />
            <Icon 
              className="relative z-10 h-7 w-7 text-foreground transition-transform duration-500 group-hover:scale-110" 
              strokeWidth={1.5}
              aria-hidden="true" 
            />
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-medium title tracking-tight text-foreground transition-colors duration-300">
            {service.title}
          </h3>
          <p className={`${normalFont.className} text-sm leading-relaxed text-muted-foreground`}>
            {service.description}
          </p>
        </div>

        <div className="mt-6 flex items-end justify-between">
          <div className="translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <p className={`${normalFont.className} text-xl font-semibold tabular-nums tracking-tight text-foreground`}>
              {service.highlight}
            </p>
            <p className={`${normalFont.className} text-xs text-muted-foreground`}>{service.highlightLabel}</p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-secondary/30 transition-all duration-500 group-hover:border-foreground/20 group-hover:bg-foreground group-hover:text-background">
            <svg
              className="h-4 w-4 -translate-x-0.5 translate-y-0.5 rotate-45 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  )
}

// function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
//   const [count, setCount] = useState(0)
//   const ref = useRef<HTMLSpanElement>(null)
//   const [hasAnimated, setHasAnimated] = useState(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && !hasAnimated) {
//           setHasAnimated(true)
//           const duration = 2000
//           const steps = 60
//           const increment = value / steps
//           let current = 0
//           const timer = setInterval(() => {
//             current += increment
//             if (current >= value) {
//               setCount(value)
//               clearInterval(timer)
//             } else {
//               setCount(Math.floor(current))
//             }
//           }, duration / steps)
//         }
//       },
//       { threshold: 0.5 }
//     )

//     if (ref.current) observer.observe(ref.current)
//     return () => observer.disconnect()
//   }, [value, hasAnimated])

//   return (
//     <span ref={ref} className="tabular-nums">
//       {count.toLocaleString()}{suffix}
//     </span>
//   )
// }

export default function ServicesSection() {
  return (
    <section 
      id="services" 
      aria-labelledby="services-heading"
      className="relative min-h-screen overflow-hidden py-24 md:py-32 bg-black"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] animate-pulse rounded-full bg-gradient-to-br from-white/[0.02] to-transparent blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-tl from-white/[0.02] to-transparent blur-3xl" style={{ animationDelay: "1s" }} />
      </div>

      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
     
        <header className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/30 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Trusted by 50,000+ investors
          </div>
          
          <h2 
            id="services-heading"
            className="text-balance text-4xl font-light tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Build wealth with
            <span className="relative mx-3 inline-block">
              <span className="relative z-10">confidence</span>
              <span className="absolute -inset-1 -skew-y-1 bg-gradient-to-r from-foreground/10 to-transparent" aria-hidden="true" />
            </span>
          </h2>
          
          <p className={`${normalFont.className} mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg`}>
            Comprehensive financial solutions designed to secure your future and maximize your investment potential.
          </p>
        </header>

        {/* <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-8 border-y border-border/30 py-8 sm:gap-16">
          <div className="text-center">
            <p className="text-3xl font-semibold text-foreground sm:text-4xl">
              <AnimatedCounter value={50000} suffix="+" />
            </p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-semibold text-foreground sm:text-4xl">
              ₹<AnimatedCounter value={2500} />Cr
            </p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">Assets Managed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-semibold text-foreground sm:text-4xl">
              <AnimatedCounter value={15} />+
            </p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">Years Experience</p>
          </div>
        </div> */}

        <div 
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6"
          role="list"
          aria-label="Financial services offered"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "Financial Services",
              "description": "Comprehensive wealth management and financial solutions including insurance, mutual funds, loans, stock broking, bonds, and fixed deposits.",
              "serviceType": services.map(s => s.title),
              "areaServed": { "@type": "Country", "name": "India" },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Financial Services Catalog",
                "itemListElement": services.map((service, index) => ({
                  "@type": "Offer",
                  "position": index + 1,
                  "itemOffered": {
                    "@type": "Service",
                    "name": service.title,
                    "description": service.description
                  }
                }))
              }
            })
          }}
        />
      </div>
    </section>
  )
}
