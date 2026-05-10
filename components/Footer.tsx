"use client"
import Image from "next/image"
import logo from "../public/omzlogo.png"
import { useEffect, useState, useRef } from "react"
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

const dynamicWords = ["Growth", "Security","Protection", "Wealth", "Future"]

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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4">
           
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-zinc-400/10 blur-xl" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-700/50 bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-lg shadow-zinc-900/50">
                 <Image src={logo} alt="OMZ Logo" className="rounded-2xl" width={60} height={10} />
                 </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-semibold tracking-wide text-zinc-100 sm:text-3xl "   style={{ fontFamily: "var(--font-title)" }}>Om Money Zone</span>
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
                      className={`block h-full rounded-full bg-gradient-to-r from-zinc-700 via-zinc-400 to-zinc-700 transition-all duration-500 ease-out ${
                        animationPhase !== "visible" ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
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
        
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Company Info & Address */}
          <div className="group space-y-5">
            <h3 className="relative inline-block text-sm font-semibold uppercase tracking-widest text-zinc-100">
              Company
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-zinc-400 to-transparent transition-all duration-300 group-hover:w-full" />
            </h3>
            <div className="space-y-4 text-sm">
              <div className="group/item flex items-start gap-3 transition-all duration-300 hover:translate-x-1">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-zinc-600 transition-colors duration-300 group-hover/item:text-zinc-400" />
                <address className="not-italic leading-relaxed text-zinc-500 transition-colors duration-300 group-hover/item:text-zinc-400">
                  123 Financial District
                  <br />
                  Suite 456, Gift City<br />
                  Gujarat, India
                </address>
              </div>
              <a
                href="mailto:contact@financeflow.com"
                className="group/item flex items-center gap-3 transition-all duration-300 hover:translate-x-1"
              >
                <Mail className="h-4 w-4 shrink-0 text-zinc-600 transition-colors duration-300 group-hover/item:text-zinc-400" />
                <span className="text-zinc-500 transition-colors duration-300 group-hover/item:text-zinc-300">
                  contact@financeflow.com
                </span>
              </a>
              <a
                href="tel:+919999999999"
                className="group/item flex items-center gap-3 transition-all duration-300 hover:translate-x-1"
              >
                <Phone className="h-4 w-4 shrink-0 text-zinc-600 transition-colors duration-300 group-hover/item:text-zinc-400" />
                <span className="text-zinc-500 transition-colors duration-300 group-hover/item:text-zinc-300">
                  +91 99999 99999
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="group space-y-5">
            <h3 className="relative inline-block text-sm font-semibold uppercase tracking-widest text-zinc-100">
              Quick Links
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-zinc-400 to-transparent transition-all duration-300 group-hover:w-full" />
            </h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group/link relative inline-flex items-center text-zinc-500 transition-all duration-300 hover:translate-x-2 hover:text-zinc-300"
                  >
                    <span className="absolute -left-4 h-px w-0 bg-zinc-500 transition-all duration-300 group-hover/link:w-2" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="group space-y-5">
            <h3 className="relative inline-block text-sm font-semibold uppercase tracking-widest text-zinc-100">
              Legal
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-zinc-400 to-transparent transition-all duration-300 group-hover:w-full" />
            </h3>
            <ul className="space-y-3 text-sm">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group/link relative inline-flex items-center text-zinc-500 transition-all duration-300 hover:translate-x-2 hover:text-zinc-300"
                  >
                    <span className="absolute -left-4 h-px w-0 bg-zinc-500 transition-all duration-300 group-hover/link:w-2" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Back to Top */}
          <div className="group space-y-5">
            <h3 className="relative inline-block text-sm font-semibold uppercase tracking-widest text-zinc-100">
              Connect
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-zinc-400 to-transparent transition-all duration-300 group-hover:w-full" />
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group/social relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-500 transition-all duration-300 hover:border-zinc-500 hover:text-zinc-200 hover:shadow-[0_0_20px_rgba(161,161,170,0.15)]"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="absolute inset-0 scale-0 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-800 transition-transform duration-300 group-hover/social:scale-100" />
                  <social.icon className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/social:scale-110" />
                </a>
              ))}
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              type="button"
              className="group/btn relative mt-6 flex items-center gap-2 overflow-hidden rounded-full border border-zinc-800 bg-zinc-900/50 px-5 py-2.5 text-sm text-zinc-500 transition-all duration-300 hover:border-zinc-500 hover:text-zinc-200 hover:shadow-[0_0_25px_rgba(161,161,170,0.1)]"
            >
              <span className="absolute inset-0 -translate-y-full bg-gradient-to-b from-zinc-700 to-zinc-800 transition-transform duration-300 group-hover/btn:translate-y-0" />
              <ArrowUp className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-1" />
              <span className="relative z-10">Back to Top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright */}
      <div className="relative border-t border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm">
        {/* Top glow accent */}
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-zinc-500/30 to-transparent" />
        <div className="absolute inset-x-0 -top-4 h-8 bg-gradient-to-t from-zinc-900/50 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <p className="text-sm text-zinc-500">
                © {new Date().getFullYear()} FinanceFlow. All rights reserved.
              </p>
              <p className="flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-600 sm:justify-start">
                <span>Registered in India</span>
                <span className="h-1 w-1 rounded-full bg-zinc-700" />
                <span>CIN: U12345MH2024PTC123456</span>
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="group/badge flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-500 transition-all duration-300 hover:border-zinc-600 hover:text-zinc-400 hover:shadow-[0_0_15px_rgba(161,161,170,0.1)]">
                <Shield className="h-3 w-3" />
                <span>256-bit Encryption</span>
              </div>
              <div className="hidden h-4 w-px bg-zinc-800 sm:block" />
              <span className="hidden text-xs text-zinc-600 sm:inline">SEBI Registered</span>
            </div>
          </div>
        </div>
        
        {/* Bottom accent glow line */}
        <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-600/40 to-transparent" />
      </div>
    </footer>
  )
}
