'use client'

import { motion } from 'framer-motion'
import { normalFont } from '@/app/fonts'
interface Props {
  categories: string[]
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export default function InsuranceCategoryNav({
  categories,
  activeCategory,
  setActiveCategory,
}: Props) {
  return (
    <section className="w-full mt-10 overflow-x-auto">
      <div className=" flex min-w-max items-center justify-center gap-4">
        {categories.map((category) => {
          const isActive = activeCategory === category

          return (
            <button
              key={category}
              
              onClick={() => setActiveCategory(category)}
              className="relative cursor-pointer  "
            >
              {isActive && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full  bg-white"
                  transition={{
                    type: 'spring',
                    bounce: 0.2,
                    duration: 0.5,
                  }}
                />
              )}

              <span
                className={`
                  relative z-10 block rounded-full
                  px-4 py-1.5 text-xs sm:text-sm
                  font-medium tracking-tight
                  transition-colors duration-300
             
                  ${
                    isActive
                      ? 'text-black'
                      : 'text-white/70 hover:text-white'
                  }
                `}
              >
                {category}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}