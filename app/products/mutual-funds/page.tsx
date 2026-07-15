import type { Metadata } from "next";
import { Suspense } from 'react'
import MutualFundsSection from './components/MutualFundsSection'

export const metadata: Metadata = {
  title: "Mutual Funds",
  description:
    "Invest in top-performing mutual funds in India through OMZ. SIP, lump-sum, ELSS, debt funds — curated for every risk appetite.",
  keywords: ["mutual funds India", "SIP investment", "ELSS tax saving", "best mutual funds", "OMZ mutual funds"],
  alternates: {
    canonical: "/products/mutual-funds",
  },
  openGraph: {
    title: "Mutual Funds | OMZ",
    description: "Start SIP or lump-sum investing in top mutual funds. Tax-saving ELSS, debt, and equity funds available.",
    url: "/products/mutual-funds",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "OMZ Mutual Funds" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mutual Funds | OMZ",
    description: "Invest in top-rated mutual funds with OMZ. SIP starts at just ₹500.",
  },
};


export default function MutualFundsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Suspense fallback={
        <div className="flex min-h-screen items-center justify-center bg-black text-white">
          <div className="text-sm font-light tracking-widest uppercase animate-pulse">Loading Mutual Funds...</div>
        </div>
      }>
        <MutualFundsSection />
      </Suspense>
    </main>
  )
}
