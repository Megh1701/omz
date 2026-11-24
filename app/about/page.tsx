import type { Metadata } from "next"
import Footer from "@/components/Footer"
import AboutContent from "./AboutContent"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Overa Wealth Insurance Marketing LLP — a financial services firm providing Insurance, Mutual Funds, Loans, Bonds, Fixed Deposits, and Investment Products. Founded by Om Patel.",
  keywords: [
    "Overa Wealth",
    "Om Patel",
    "wealth management India",
    "insurance advisory",
    "financial services",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Overa Wealth",
    description:
      "Overa Wealth Insurance Marketing LLP — Insure. Invest. Grow.",
    url: "/about",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">
      <AboutContent />
      <Footer />
    </main>
  )
}