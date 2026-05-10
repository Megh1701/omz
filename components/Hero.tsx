"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const particles = Array.from({ length: 100 }).map(() => {
  const r = Math.random();

  return {
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,

    // ⭐ realistic star sizes
    size: r > 0.9 ? 3 : r > 0.7 ? 2 : 1,

    duration: 2 + Math.random() * 3,
  };
});
export default function Hero() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Ultra-fine grain overlay for texture */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='fineNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' seed='1'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23fineNoise)' opacity='0.03'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Star field - distributed throughout */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            initial={{ opacity: p.size > 1 ? 0.6 : 0.3 }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              top: `${p.y}%`,
              left: `${p.x}%`,
              filter: "blur(0.3px)",
              willChange:"transform"
            }}
          />
        ))}
      </div>


      

      {/* Main content - centered */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl space-y-6"
        >
          

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl lg:text-5xl font-light leading-tight tracking-tight text-white text-balance"
            style={{
              willChange: "transform",
              textShadow:
                "0 0 60px rgba(30, 58, 138, 0.38), 0 0 30px rgba(91, 163, 235, 0.2)",
            }}
          >
            Finacial Freedom Starts Here With India's Premier{" "}
            <span
              className="italic font-light"
              style={{
                willChange: "transform",
                background:
                  "linear-gradient(135deg, rgba(91, 163, 235, 0.96), rgba(30, 58, 138, 0.93))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >Wealth & Insurance Experts
            </span>
            .
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
}
