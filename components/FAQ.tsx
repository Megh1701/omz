"use client";

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { normalFont } from "@/app/fonts";
interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="py-2 border-b border-neutral-800/60">
      <button
        type="button"
        className="w-full py-2.5 text-left cursor-pointer flex items-center select-none group"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 12 }}
          className="shrink-0"
        >
          <ChevronRight className="h-4 w-4 text-neutral-400 group-hover:text-white transition-colors" />
        </motion.div>

        <div className={`${normalFont.className} ml-3 font-medium text-base sm:text-lg text-white group-hover:text-neutral-200 transition-colors`}>
          {title}
        </div>
      </button>

      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)", height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.9,
          filter: isOpen ? "blur(0px)" : "blur(8px)",
          height: isOpen ? "auto" : 0,
        }}
        transition={{
          duration: 0.4,
          ease: isOpen ? [0.25, 1, 0.5, 1] : [0.3, 0, 0.3, 1],
        }}
        className="overflow-hidden"
      >
        <motion.div
          className={`${normalFont.className} pl-7 pr-2 pb-3 text-sm sm:text-base leading-relaxed select-none text-neutral-400 cursor-pointer`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

// ✅ FAQ DATA OBJECT
const faqData = [
  {
    title: "What types of insurance do you offer?",
    description:
      "We provide life, health, motor, and general insurance solutions tailored to your personal and family needs.",
  },
  {
    title: "What is SIP and how does it work?",
    description:
      "SIP (Systematic Investment Plan) lets you invest a fixed amount regularly in mutual funds, helping you build long-term wealth through compounding.",
  },
  {
    title: "Can I invest in SIP and buy insurance together?",
    description:
      "Yes. Insurance secures your financial risks, while SIPs grow your wealth. Both work best when planned together.",
  },
  {
    title: "What loan options are available?",
    description:
      "We help with personal loans, home loans, education loans, and business loans at competitive interest rates.",
  },
  {
    title: "How do I choose the right plan for me?",
    description:
      "Our financial advisors assess your goals, income, and risk profile to recommend the most suitable insurance, SIP, or loan plan.",
  },
];

export default function Faq() {
  return (
    <section className="w-full min-h-[70vh] flex items-center bg-black text-white py-16 sm:py-20 md:py-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
        <div className="flex w-full lg:w-3/5 flex-col h-auto">
          {faqData.map((item, index) => (
            <AccordionItem key={index} title={item.title}>
              {item.description}
            </AccordionItem>
          ))}
        </div>
        <h2
          className="text-3xl sm:text-5xl lg:text-6xl text-center lg:text-left w-full lg:w-2/5 font-light"
          style={{ fontFamily: "var(--font-title)" }}
        >
          Frequently Asked <br className="hidden sm:inline" />Questions
        </h2>
      </div>
    </section>
  );
}
