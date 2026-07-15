"use client"
import Image from "next/image"
import logo from "../public/overa.png"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
  MapPin,
  Mail,
  Phone,
  Shield,
} from "lucide-react"

const dynamicWords = ["Growth", "Security", "Protection", "Wealth", "Future"]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Disclaimer", href: "#" },
]

const quickLinks = [
  { label: "About Us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Careers", href: "#" },
]

export default function Footer() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animationPhase, setAnimationPhase] = useState<"visible" | "exiting" | "entering">("visible")
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!footerRef.current) return
      const rect = footerRef.current.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      footerRef.current.style.setProperty("--mouse-x", `${x}px`)
      footerRef.current.style.setProperty("--mouse-y", `${y}px`)
    }

    const element = footerRef.current
    if (element) {
      element.addEventListener("mousemove", handleMouseMove)
    }
    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      // Start exit animation
      setAnimationPhase("exiting")

      // After exit completes, change word and start enter animation
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % dynamicWords.length)
        setAnimationPhase("entering")

        // After enter completes, set to visible
        setTimeout(() => {
          setAnimationPhase("visible")
        }, 500)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const getAnimationClasses = () => {
    switch (animationPhase) {
      case "exiting":
        // Exit to bottom
        return "translate-y-full opacity-0 blur-sm scale-90"
      case "entering":
        // Enter from top (start position then animate to center)
        return "-translate-y-full opacity-0 blur-sm scale-90"
      case "visible":
      default:
        return "translate-y-0 opacity-100 blur-0 scale-100"
    }
  }

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-zinc-950 text-zinc-300"
    >
      {/* Interactive spotlight following the cursor (CSS Variables GPU-Accelerated) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 opacity-60"
        style={{
          background: "radial-gradient(700px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(200,200,200,0.03), transparent 50%)",
        }}
      />

      {/* Top Glowing Silver Line */}
      <div className="absolute left-0 right-0 top-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-100/50 to-transparent blur-sm" />
        <div className="absolute -top-2 left-1/2 h-6 w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-400/20 to-transparent blur-xl" />
      </div>

      {/* Ambient Glow Orbs */}
      <div className="pointer-events-none absolute left-1/4 top-20 h-80 w-80 -translate-x-1/2">
        <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-b from-zinc-500/15 to-transparent blur-3xl" style={{ animationDuration: '4s' }} />
      </div>
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-64 w-64 translate-x-1/2">
        <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-t from-zinc-400/10 to-transparent blur-3xl" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>
      <div className="pointer-events-none absolute bottom-32 left-1/2 h-96 w-96 -translate-x-1/2">
        <div className="absolute inset-0 animate-pulse rounded-full bg-zinc-500/5 blur-3xl" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      {/* Company Name Section */}
      {/* <div className="relative border-b border-zinc-800/30 py-10">
      <div className="relative border-b border-zinc-800/30 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4">
           
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-zinc-400/10 blur-xl" />
              <div className="relative flex h-14 px-4 items-center justify-center rounded-xl border border-zinc-700/50 bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-lg shadow-zinc-900/50">
                  <Image src={logo} alt="Overa Logo" className="h-10 w-auto object-contain" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-semibold tracking-wide text-zinc-100 sm:text-3xl "   style={{ fontFamily: "var(--font-title)" }}>Overa</span>
              <span className="text-[10px]  text-zinc-600 uppercase">Wealth Management</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-200/50 to-transparent" />
      </div> */}

      {/* Dynamic Tagline Section */}
      <div className="relative border-b border-zinc-800/30">
        {/* Inner ambient glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-zinc-900/50 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative">
              {/* Spotlight glow behind text */}
              <div className="absolute -inset-x-20 -inset-y-10 -z-10">
                <div className="absolute left-1/2 top-1/2 h-48 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-500/10 blur-3xl" />
              </div>

              <h2 style={{ fontFamily: "var(--font-title)" }} className="text-4xl font-extralight tracking-tight text-zinc-100 sm:text-5xl md:text-6xl lg:text-7xl" >
                <span className="relative inline-block">
                  Empowering
                </span>

                {/* Dynamic Word Container - TOP to BOTTOM animation */}
                <span className="relative ml-2 inline-flex h-[1.2em] w-[180px] items-center justify-start overflow-hidden align-bottom sm:ml-4 sm:w-[240px] md:w-[300px] lg:w-[360px]">
                  {/* Single word with phase-based animation */}
                  <span
                    className={`absolute inset-0 flex items-end justify-start font-medium transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${getAnimationClasses()}`}
                  >
                    <span className="pr-2  bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                      {dynamicWords[currentIndex]}
                    </span>
                  </span>

                  {/* Animated underline */}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full overflow-hidden rounded-full">
                    <span
                      className={`block h-full rounded-full bg-gradient-to-r from-zinc-700 via-zinc-400 to-zinc-700 transition-all duration-500 ease-out ${animationPhase !== "visible" ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                        }`}
                    />
                  </span>
                </span>
              </h2>
            </div>

            <p className="mt-6 max-w-xl text-sm font-light tracking-wide text-zinc-500 sm:mt-8 sm:text-base">
              Building a stronger financial future, one step at a time.
            </p>
          </div>
        </div>

        {/* Section bottom glow */}
        <div className="absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-600/40 to-transparent" />
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Floating silver glow accent */}
        <div className="pointer-events-none absolute right-10 top-10 h-32 w-32 rounded-full bg-zinc-400/5 blur-3xl" />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:divide-x lg:divide-zinc-900/40">
          {/* Column 1: Company Profile */}
          <div className="space-y-6 lg:pr-8 group/col1">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image src={logo} alt="Overa Logo" className="h-10 w-auto object-contain" priority />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wide text-zinc-100" style={{ fontFamily: "var(--font-title)" }}>Overa</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Wealth & Advisory</span>
              </div>
            </div>
            <p className="text-sm text-zinc-500 font-light leading-relaxed">
              Bespoke financial, loan, and insurance structures engineered for enduring success.
            </p>
            <div className="space-y-3 pt-2">
              <a
                href="mailto:contact@overa.in"
                className="group/item flex items-center gap-3 text-sm transition-all duration-300 hover:translate-x-1"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Mail className="h-4 w-4 shrink-0 text-zinc-600 transition-colors duration-300 group-hover/item:text-zinc-400" />
                </motion.div>
                <span className="text-zinc-500 transition-colors duration-300 group-hover/item:text-white">
                  contact@overa.in
                </span>
              </a>
              <a
                href="tel:+919999999999"
                className="group/item flex items-center gap-3 text-sm transition-all duration-300 hover:translate-x-1"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Phone className="h-4 w-4 shrink-0 text-zinc-600 transition-colors duration-300 group-hover/item:text-zinc-400" />
                </motion.div>
                <span className="text-zinc-500 transition-colors duration-300 group-hover/item:text-white">
                  +91 99999 99999
                </span>
              </a>
            </div>
          </div>

          {/* Column 2: Our Offices */}
          <div className="group space-y-6 lg:pl-8 lg:pr-4">
            <h3 className="relative inline-block text-xs font-semibold uppercase tracking-[0.2em] text-zinc-100">
              Our Offices
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-zinc-300 to-transparent transition-all duration-500 group-hover:w-8" />
            </h3>
            <div className="space-y-6">
              {/* Kalol HQ */}
              <a
                href="https://maps.google.com/?q=126/127,+City+Mall-1,+Kalol,+Gandhinagar"
                target="_blank"
                rel="noopener noreferrer"
                className="group/item flex items-start gap-3 transition-all duration-300 block"
              >
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 350, damping: 8 }}
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-zinc-600 transition-colors duration-300 group-hover/item:text-zinc-300" />
                </motion.div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 group-hover/item:text-white transition-colors duration-300">Kalol Office (HQ)</span>
                    <span className="text-[9px] text-zinc-600 opacity-0 transition-opacity duration-300 group-hover/item:opacity-100 font-light lowercase">(map)</span>
                  </div>
                  <address className="not-italic text-sm text-zinc-500 transition-colors duration-300 group-hover/item:text-zinc-300 leading-relaxed">
                    126/127, City Mall-1,
                    <br />
                    Kalol, Gandhinagar
                  </address>
                </div>
              </a>
              {/* Ahmedabad Office */}
              <a
                href="https://maps.google.com/?q=Vaishnodevi+Circle,+Ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
                className="group/item flex items-start gap-3 transition-all duration-300 block"
              >
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 350, damping: 8 }}
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-zinc-600 transition-colors duration-300 group-hover/item:text-zinc-300" />
                </motion.div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 group-hover/item:text-white transition-colors duration-300">Ahmedabad Office</span>
                    <span className="text-[9px] text-zinc-600 opacity-0 transition-opacity duration-300 group-hover/item:opacity-100 font-light lowercase">(map)</span>
                  </div>
                  <address className="not-italic text-sm text-zinc-500 transition-colors duration-300 group-hover/item:text-zinc-300 leading-relaxed">
                    Vaishnodevi Circle,
                    <br />
                    Ahmedabad, Gujarat
                  </address>
                </div>
              </a>
            </div>
          </div>

          {/* Column 3: Offerings / Products */}
          <div className="group space-y-6 lg:pl-8 lg:pr-4">
            <h3 className="relative inline-block text-xs font-semibold uppercase tracking-[0.2em] text-zinc-100">
              Our Products
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-zinc-300 to-transparent transition-ease duration-200 group-hover:w-8" />
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Mutual Funds", href: "/products/mutual-funds" },
                { label: "Loans", href: "/products/loans" },
                { label: "Bonds", href: "/products/bonds" },
                { label: "Fixed Deposits", href: "/products/fixed-deposits" },
                { label: "Stock Broking", href: "/products/stock-broking" },
                { label: "Insurance Advisory", href: "/products/insurance" },
              ].map((link) => (
                <li key={link.label} className="relative overflow-visible">
                  <a
                    href={link.href}
                    className="group/link relative inline-flex items-center text-zinc-200 transition-all duration-300 hover:text-white"
                  >
                    <span className="absolute -left-3.5 h-1 w-1 rounded-full bg-zinc-200 opacity-0 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0.5" />
                    <span className="transition-transform duration-300 group-hover/link:translate-x-2 block">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Navigation & Connect */}
          <div className="group space-y-6 lg:pl-8">
            <div className="space-y-6">
              <h3 className="relative inline-block text-xs font-semibold uppercase tracking-[0.2em] text-zinc-100">
                Company Links
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-zinc-300 to-transparent transition-all duration-500 group-hover:w-8" />
              </h3>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Calculators", href: "/calculator/emi" },
                  { label: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <li key={link.label} className="relative overflow-visible">
                    <a
                      href={link.href}
                      className="group/link relative inline-flex items-center text-zinc-500 transition-all duration-300 hover:text-white"
                    >
                      <span className="absolute -left-3.5 h-1 w-1 rounded-full bg-zinc-200 opacity-0 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0.5" />
                      <span className="transition-transform duration-300 group-hover/link:translate-x-2 block">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/social relative flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-500 transition-all duration-300 hover:border-zinc-500 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.06)] cursor-pointer"
                    style={{ transitionDelay: `${index * 15}ms` }}
                  >
                    <social.icon className="h-3.5 w-3.5 transition-transform duration-300 group-hover/social:scale-105" />
                  </motion.a>
                ))}
              </div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                type="button"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group/btn relative flex items-center gap-2 overflow-hidden rounded-full border border-zinc-800 bg-zinc-900/30 px-4 py-2 text-xs text-zinc-400 transition-all duration-300 hover:border-zinc-500 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] cursor-pointer"
              >
                <ArrowUp className="h-3.5 w-3.5 transition-transform duration-500 ease-out group-hover/btn:-translate-y-0.5" />
                <span>Back to Top</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright & Legal */}
      <div className="relative border-t border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm">
        {/* Top glow accent */}
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-zinc-500/30 to-transparent" />
        <div className="absolute inset-x-0 -top-4 h-8 bg-gradient-to-t from-zinc-900/50 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <p className="text-xs text-zinc-500">
                © {new Date().getFullYear()} Overa. All rights reserved.
              </p>
              <p className="flex flex-wrap items-center justify-center gap-2 text-[10px] text-zinc-600 sm:justify-start">
                <span>Registered in India</span>
                <span className="h-1 w-1 rounded-full bg-zinc-800" />
            
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-500">
              {legalLinks.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-zinc-300 transition-colors">
                  {link.label}
                </a>
              ))}
              <div className="group/badge flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-[10px] text-zinc-500 transition-all duration-300 hover:border-zinc-700 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <Shield className="h-3 w-3" />
                <span>256-bit Encryption</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent glow line */}
        <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-600/40 to-transparent" />
      </div>
    </footer>
  )
}
