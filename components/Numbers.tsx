"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { normalFont } from "@/app/fonts";

const DIGITS = Array.from({ length: 10 }, (_, i) => i);

function Digit({ value, delay = 0 }: { value: number; delay?: number }) {
  const totalRoll = 10 * 6 + value; // extra smooth long roll
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div
      ref={ref}
      className="relative h-10 
        w-[1.8ch] sm:w-[1.8ch] md:w-[2ch] xl:w-[2.2ch] 
        overflow-hidden"
    >
      <motion.div
        initial={{ y: 0 }}
        animate={isInView ? { y: -totalRoll * 40 } : { y: 0 }}
        transition={{
          duration: 3.2,
          delay,
          ease: [0.16, 1, 0.3, 1], // ultra smooth
        }}
        className="absolute top-0 left-0 w-full"
      >
        {Array.from({ length: totalRoll + 1 }).map((_, i) => (
          <div
            style={{ fontFamily: "var(--font-title)" }}
            key={i}
            className="h-10 flex items-center justify-center 
              text-3xl md:text-4xl font-semibold text-zinc-200"
          >
            {DIGITS[i % 10]}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ---------- ODOMETER ---------- */
function Odometer({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const chars = value.toLocaleString("en-IN").split("");

  if (!mounted) {
    return (
      <div className="flex items-end justify-center">
        <span
          style={{ fontFamily: "var(--font-title)" }}
          className="text-3xl md:text-4xl font-semibold text-zinc-200"
        >
          {value.toLocaleString("en-IN")}
        </span>
        {suffix && (
          <span className="ml-1 text-lg md:text-xl font-medium text-zinc-400">
            {suffix}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-end justify-center">
      {chars.map((char, idx) =>
        isNaN(Number(char)) ? (
          <span
            key={idx}
            className="w-[0.6ch] text-3xl md:text-4xl font-semibold 
              text-zinc-200 text-center"
          >
            {char}
          </span>
        ) : (
          <Digit key={idx} value={Number(char)} delay={idx * 0.08} />
        )
      )}

      {suffix && (
        <span className="ml-1 text-lg md:text-xl font-medium text-zinc-400">
          {suffix}
        </span>
      )}
    </div>
  );
}

/* ---------- MAIN SECTION ---------- */
export default function Numbers() {
  const stats = [
    { label: "Happy Clients", value: 2700 },
    { label: "Asset Under Management", value: 120, suffix: "₹ Cr" },
    { label: "Live SIP's", value: 420 },
    { label: "Years of Experience", value: 18, suffix: "+" },
  ];

  return (
    <section className="w-full py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-center text-4xl font-semibold mb-16 text-zinc-200"
          style={{ fontFamily: "var(--font-title)" }}
        >
          Our Numbers Says It All
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-14">
          {stats.map((item, idx) => (
            <div key={idx} className="text-center ">
              <Odometer value={item.value} suffix={item.suffix} />
              <p className={`${normalFont.className} mt-4 text-sm text-zinc-300`}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
