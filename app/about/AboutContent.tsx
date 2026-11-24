"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Instrument_Serif } from "next/font/google"

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
})

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

const services = [
  {
    num: "01",
    title: "Insurance",
    text: "Solutions designed to protect individuals, families, assets, health, and businesses against financial uncertainty.",
  },
  {
    num: "02",
    title: "Mutual Funds",
    text: "Investment solutions for different goals, time horizons, and risk profiles, including SIPs and other investment approaches.",
  },
  {
    num: "03",
    title: "Loans",
    text: "Financing solutions for personal, housing, business, vehicle, and other eligible requirements.",
  },
  {
    num: "04",
    title: "Bonds",
    text: "Fixed-income investment opportunities for investors seeking diversification and potential regular income.",
  },
  {
    num: "05",
    title: "Fixed Deposits",
    text: "Deposit solutions for investors looking for stability, predictable returns, and capital preservation.",
  },
  {
    num: "06",
    title: "Investment Solutions",
    text: "Access to selected market-linked and wealth-building opportunities based on individual financial requirements.",
  },
]

export default function AboutContent() {
  return (
    <div className="relative">
      {/* Noise overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.012] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* ═══════════════════════════ HERO ═══════════════════════════ */}
      <section className="relative flex min-h-[70vh] sm:min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-24 sm:pt-32 pb-14 sm:pb-20">
        {/* Subtle ambient light */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] bg-zinc-500/[0.04] rounded-full blur-[150px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center max-w-3xl"
        >
          <p className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] text-zinc-500 mb-6 sm:mb-8">
            Overa Wealth Insurance Marketing LLP
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-zinc-100 leading-[1.1]">
            Insure.{" "}
            <span className={`${serif.className} text-zinc-300`}>Invest.</span>{" "}
            Grow.
          </h1>
          <div className="mx-auto mt-6 sm:mt-8 h-px w-16 bg-zinc-700" />
          <p className="mt-6 sm:mt-8 text-base sm:text-lg font-light leading-relaxed text-zinc-400 max-w-2xl mx-auto px-2">
            We believe financial well-being begins with the right protection,
            thoughtful planning, and disciplined investing.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════ INTRO ═══════════════════════════ */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-14 sm:py-20 lg:py-24 lg:px-8">
        <div className="grid gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-4"
          >
            <motion.p variants={fadeUp} custom={0} className="text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-600 lg:sticky lg:top-32">
              Who we are
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-8 space-y-6"
          >
            <motion.p variants={fadeUp} custom={0} className="text-lg sm:text-xl font-light leading-relaxed text-zinc-200">
              Overa Wealth was created with a vision to bring essential financial
              solutions together under one trusted platform.
            </motion.p>
            <motion.p variants={fadeUp} custom={1} className="text-sm sm:text-base font-light leading-relaxed text-zinc-400">
              Financial planning can often feel complicated because different
              needs—protection, investment, borrowing, income generation, and
              wealth creation—are handled separately. We aim to make that journey
              simpler by helping clients understand their options and access
              suitable financial products through a more structured and
              convenient experience.
            </motion.p>
            <motion.p variants={fadeUp} custom={2} className="text-sm sm:text-base font-light leading-relaxed text-zinc-400">
              Whether a client is looking to protect their family, begin
              investing, plan for important life goals, explore financing
              options, or build long-term wealth, our goal is to support them at
              every stage of their financial journey.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6"><div className="h-px bg-zinc-800/60" /></div>

      {/* ═══════════════════════════ APPROACH ═══════════════════════════ */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-14 sm:py-20 lg:py-24 lg:px-8">
        <div className="grid gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-4"
          >
            <motion.p variants={fadeUp} custom={0} className="text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-600 lg:sticky lg:top-32">
              Our approach
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-8 space-y-6"
          >
            <motion.p variants={fadeUp} custom={0} className="text-lg sm:text-xl font-light leading-relaxed text-zinc-200">
              Understand the client first. Recommend solutions based on their needs. Build long-term relationships founded on trust, transparency, and service.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6"><div className="h-px bg-zinc-800/60" /></div>

      {/* ═══════════════════════════ PHILOSOPHY ═══════════════════════════ */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-14 sm:py-20 lg:py-24 lg:px-8">
        <div className="grid gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-4"
          >
            <motion.p variants={fadeUp} custom={0} className="text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-600 lg:sticky lg:top-32">
              Our philosophy
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-8 space-y-8 sm:space-y-12"
          >
            {[
              {
                word: "Insure",
                desc: "Strong financial planning begins with protection. We help clients evaluate insurance solutions designed to protect what they have worked hard to build.",
              },
              {
                word: "Invest",
                desc: "Investing should have a purpose. We encourage goal-oriented investing based on factors such as financial objectives, investment horizon, liquidity requirements, and risk appetite.",
              },
              {
                word: "Grow",
                desc: "We aim to build relationships that extend beyond individual transactions. As our clients’ financial needs evolve, we strive to continue supporting their journey toward long-term financial growth.",
              },
            ].map((item, i) => (
              <motion.div key={item.word} variants={fadeUp} custom={i} className="group">
                <h3 className={`${serif.className} text-2xl sm:text-3xl md:text-4xl text-zinc-200 mb-2 sm:mb-3`}>
                  {item.word}
                </h3>
                <p className="text-sm sm:text-base font-light leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6"><div className="h-px bg-zinc-800/60" /></div>

      {/* ═══════════════════════════ SERVICES ═══════════════════════════ */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-14 sm:py-20 lg:py-24 lg:px-8">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-600 mb-10 sm:mb-16"
        >
          What we do
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="space-y-0"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              custom={i}
              className="group flex flex-col sm:grid sm:grid-cols-12 gap-2 sm:gap-4 border-t border-zinc-800/60 py-6 sm:py-8 first:border-t-0 items-baseline"
            >
              <div className="flex items-center gap-3 sm:col-span-4 lg:col-span-4">
                <span className="text-xs font-medium text-zinc-600 tabular-nums">
                  {s.num}
                </span>
                <h3 className="text-base font-medium text-zinc-200 group-hover:text-white transition-colors duration-300">
                  {s.title}
                </h3>
              </div>
              <p className="sm:col-span-8 lg:col-span-8 text-sm font-light leading-relaxed text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300 pl-6 sm:pl-0">
                {s.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6"><div className="h-px bg-zinc-800/60" /></div>

      {/* ═══════════════════════════ VISION & MISSION ═══════════════════════════ */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-14 sm:py-20 lg:py-24 lg:px-8">
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-4"
          >
            <motion.p variants={fadeUp} custom={0} className="text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-600 lg:sticky lg:top-32">
              Vision &amp; Mission
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-8 space-y-12 sm:space-y-16"
          >
            <motion.div variants={fadeUp} custom={0}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-3 sm:mb-4">
                Vision
              </h3>
              <p className="text-base sm:text-lg font-light leading-relaxed text-zinc-200">
                To become a trusted financial-services partner for individuals,
                families, and businesses by delivering accessible, transparent,
                and dependable financial solutions.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} custom={1}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-3 sm:mb-4">
                Mission
              </h3>
              <p className="text-sm sm:text-base font-light leading-relaxed text-zinc-400 mb-4 sm:mb-6">
                Our mission is to simplify financial decision-making by helping clients:
              </p>
              <ul className="space-y-3">
                {[
                  "Protect themselves against financial risks",
                  "Invest with greater clarity",
                  "Access appropriate financial solutions",
                  "Plan confidently for important life goals",
                  "Work toward sustainable long-term wealth creation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 sm:gap-4 text-xs sm:text-sm font-light text-zinc-300">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-zinc-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6"><div className="h-px bg-zinc-800/60" /></div>

      {/* ═══════════════════════════ CONFIDENCE ═══════════════════════════ */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-14 sm:py-20 lg:py-24 lg:px-8">
        <div className="grid gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-4"
          >
            <motion.p variants={fadeUp} custom={0} className="text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-600 lg:sticky lg:top-32">
              Building confidence
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-8 space-y-6"
          >
            <motion.p variants={fadeUp} custom={0} className="text-lg sm:text-xl font-light leading-relaxed text-zinc-200">
              Financial success is not created through a single product or
              investment. It is built through informed decisions made
              consistently over time.
            </motion.p>
            <motion.p variants={fadeUp} custom={1} className="text-sm sm:text-base font-light leading-relaxed text-zinc-400">
              At Overa Wealth, we aspire to be more than a financial-services
              provider. We aim to become a dependable partner throughout our
              clients&apos; financial journeys—from their first insurance policy
              or investment to increasingly sophisticated financial needs as
              their wealth grows.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6"><div className="h-px bg-zinc-800/60" /></div>

      {/* ═══════════════════════════ FOUNDER ═══════════════════════════ */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24 lg:py-28 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-10 sm:gap-16 lg:grid-cols-12 items-start"
        >
          {/* Photo */}
          <motion.div variants={fadeUp} custom={0} className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-xl border border-white/5">
              <Image
                src="/om-patel.png"
                alt="Om Patel — Managing Director, Overa Wealth"
                fill
                className="object-cover object-center grayscale"
                sizes="(max-width: 768px) 100vw, 380px"
                priority
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div variants={fadeUp} custom={1} className="lg:col-span-7 lg:pt-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-600 mb-4 sm:mb-6">
              Managing Director
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-100 mb-2">
              Om Patel
            </h2>
            <p className="text-xs sm:text-sm font-light text-zinc-500 mb-6 sm:mb-10">
              Overa Wealth Insurance Marketing LLP
            </p>

            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base font-light leading-[1.8] text-zinc-400">
              <p>
                As the Managing Director of Overa Wealth, Om Patel is focused on
                building the company with a strong foundation of trust,
                transparency, and long-term relationships.
              </p>
              <p>
                He is closely involved in the company&apos;s growth, business
                strategy, and client relationships, with the aim of making
                financial services simple and easy to understand.
              </p>
              <p>
                His approach is straightforward—understand what the client needs,
                provide the right guidance, and maintain a relationship that
                continues beyond a single transaction.
              </p>
              <p>
                At Overa Wealth, he believes that good financial decisions come
                from proper planning, discipline, and trust.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 sm:mt-12 border-l-2 border-zinc-700 pl-4 sm:pl-6">
              <p className={`${serif.className} text-lg sm:text-xl text-zinc-300 leading-relaxed`}>
                &ldquo;Our goal is to grow with our clients and support them at every
                stage of their financial journey.&rdquo;
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
