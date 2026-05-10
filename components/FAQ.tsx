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
    <div className="py-2">
      <button
        type="button"
       className="w-full py-2 text-left cursor-pointer flex items-center select-none"
           onClick={() => setIsOpen((prev) => !prev)}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 12 }}
        >
          <ChevronRight className="h-4 w-4" />
        </motion.div>

        <div className={`${normalFont.className} ml-2 font-bold text-white `}>{title}</div>
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
          duration: 0.5,
          ease: isOpen ? [0.25, 1, 0.5, 1] : [0.3, 0, 0.3, 1],
        }}
        className="overflow-hidden"
      >
        <motion.div className={`${normalFont.className} pl-6 pr-2 select-none text-neutral-400 cursor-pointer`}  onClick={() => setIsOpen((prev) => !prev)}>
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
    <div className="w-full h-screen flex items-center justify-evenly bg-black text-white">
    

      <div className="flex w-1/2 flex-col h-auto text-xl pl-[10%]">
        {faqData.map((item, index) => (
          <AccordionItem key={index} title={item.title}>
            {item.description}
          </AccordionItem>
        ))}
      </div>
        <h1 className="text-6xl items-start flex w-1/2 pl-[15%]" 
          style={{ fontFamily: "var(--font-title)" }}>
        Frequently Asked <br />Questions
      </h1>
    </div>
  );
}
