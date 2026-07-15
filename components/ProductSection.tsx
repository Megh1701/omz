'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { normalFont } from '../app/fonts'

export type ProductFeature = {
  icon: any
  text: string
}

export type ProductItem = {
  title: string
  description: string
  src: string
  features: ProductFeature[]
}

interface ProductSectionProps {
  products: ProductItem[]
  className?: string
}

export default function ProductSection({ products, className = '' }: ProductSectionProps) {
  return (
    <section className={`relative mx-auto max-w-6xl px-4 bg-black ${className}`}>
      {/* Top Border */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{
          duration: 1.2,
          ease: 'easeInOut',
        }}
        className="
        absolute left-0 top-0 z-20 h-[1px] bg-white/15
      "
      />
      {/* Bottom Border */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{
          duration: 1.2,
          ease: 'easeInOut',
        }}
        className="
        absolute left-0 bottom-0 z-20 mb-[-1px] h-[1px] bg-white/15
      "
      />
      {/* Left Border */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{
          duration: 1.2,
          delay: 0.3,
          ease: 'easeInOut',
        }}
        className="
        absolute left-0 top-0 z-20 w-[1px]  bg-white/15
      "
      />
      {/* Right Border */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{
          duration: 1.2,
          delay: 0.3,
          ease: 'easeInOut',
        }}
        className="
        absolute right-0 top-0 z-20 w-[1px]  bg-white/15
      "
      />

      <div className="relative z-10">
        <div className="relative mt-2">
          {products.map((product, index) => {
            const isReverse = index % 2 !== 0

            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative mb-8
                  flex flex-col
                  lg:flex-row
                  items-center
                "
              >
                {/* Image Column */}
                <div
                  className={`
                    relative flex items-center justify-center
                    lg:w-[35%]
                    ${isReverse ? 'lg:order-2' : 'lg:order-1'}
                    px-4 py-4 lg:px-6 lg:py-6
                  `}
                >
                  <div
                    className="
                      group relative w-full
                      overflow-hidden rounded-lg
                      border border-white/8
                      bg-gradient-to-br from-white/3 via-white/1 to-transparent
                      transition-all duration-700
                      hover:border-white/15
                    "
                  >
                    {/* Soft metallic overlay */}
                    <div
                      className="
                        absolute inset-0 opacity-0
                        transition-opacity duration-700
                        group-hover:opacity-100
                        pointer-events-none
                      "
                    >
                      <div
                        className="
                          absolute inset-0
                          bg-gradient-to-br
                          from-white/5 via-transparent to-white/2
                        "
                      />
                      <div
                        className="
                          absolute top-0 left-0 right-0 h-px
                          bg-gradient-to-r
                          from-transparent via-white/10 to-transparent
                        "
                      />
                    </div>

                    {/* Image Container */}
                    <div
                      className="
                        relative aspect-square lg:aspect-[4/3]
                        w-full overflow-hidden
                        bg-black
                      "
                    >
                      <Image
                        src={product.src}
                        alt={product.title}
                        fill
                        priority={index === 0}
                        className="
                          object-contain object-center
                          transition-all duration-[1600ms] ease-out
                          scale-[1.02]
                          group-hover:scale-105
                          group-hover:rotate-[0.5deg]
                        "
                      />
                      {/* Luxury gradient overlays */}
                      <div
                        className="
                          absolute inset-0
                          bg-gradient-to-t
                          from-black/40 via-transparent to-transparent
                          pointer-events-none
                        "
                      />
                      <div
                        className="
                          absolute inset-0
                          bg-gradient-to-br
                          from-white/[0.06] via-transparent to-transparent
                          opacity-0 transition-opacity duration-700
                          group-hover:opacity-100
                          pointer-events-none
                        "
                      />
                      {/* Metallic reflection sweep */}
                      <div
                        className="
                          absolute inset-y-0 -left-1/2 w-1/2
                          rotate-12
                          bg-gradient-to-r
                          from-transparent via-white/[0.08] to-transparent
                          opacity-0
                          transition-all duration-1000
                          group-hover:left-[120%]
                          group-hover:opacity-100
                          pointer-events-none
                        "
                      />
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`
                    relative flex flex-col justify-center
                    lg:w-[65%]
                    ${isReverse ? 'lg:order-1' : 'lg:order-2'}
                    px-4 py-4 lg:px-6 lg:py-6
                  `}
                >
                  <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="
                      text-xl sm:text-2xl lg:text-3xl
                      font-light tracking-tight
                      text-white
                      mb-2 max-w-lg
                      text-balance leading-tight
                    "
                  >
                    {product.title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className={`
                      text-sm
                      leading-relaxed text-white/55
                      max-w-lg mb-3
                      font-light
                      ${normalFont.className}
                    `}
                  >
                    {product.description}
                  </motion.p>

                  {/* Features */}
                  <div className="flex flex-col gap-2 mb-4 max-w-lg">
                    {product.features?.map((feature, idx) => {
                      const Icon = feature.icon
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + idx * 0.1, duration: 0.5 }}
                          className="flex items-center gap-3 text-white/75 group/item cursor-default"
                        >
                          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/[0.03] border border-white/10 text-white/80 transition-all duration-300 group-hover/item:border-white/25 group-hover/item:bg-white/[0.06] group-hover/item:text-white">
                            <Icon className="h-3.5 w-3.5" />
                          </div>
                          <span className={`text-xs sm:text-sm font-light tracking-wide transition-colors duration-300 group-hover/item:text-white/95 ${normalFont.className}`}>
                            {feature.text}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 max-w-lg z-10">
                    <Link
                      href="/contact"
                      className="
                        group relative flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white text-xs font-semibold tracking-wider uppercase text-black bg-white transition-all duration-500 hover:bg-white/90 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] cursor-pointer
                      "
                    >
                      Inquire Now
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Bottom Divider */}
                <div className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent col-span-full" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
