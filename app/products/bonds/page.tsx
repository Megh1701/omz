import type { Metadata } from "next"
import { Suspense } from 'react'
import BondsSection from './components/BondsSection'

export const metadata: Metadata = {
  title: "Bonds & Debentures",
  description:
    "Invest in high-yield corporate bonds, government bonds, and sovereign securities through OMZ. Diversify your portfolio with secure fixed-income options.",
  keywords: ["government bonds India", "corporate bonds", "fixed income investments", "NCD investment", "OMZ bonds"],
  alternates: {
    canonical: "/products/bonds",
  },
  openGraph: {
    title: "Bonds & Debentures | OMZ",
    description: "Invest in secure corporate and government bonds. Diversify your portfolio with fixed-income assets.",
    url: "/products/bonds",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "OMZ Bonds & Debentures" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonds & Debentures | OMZ",
    description: "Secure fixed-income investments and top-rated corporate bonds with OMZ.",
  },
}

export default function BondsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Suspense fallback={
        <div className="flex min-h-screen items-center justify-center bg-black text-white">
          <div className="text-sm font-light tracking-widest uppercase animate-pulse">Loading Bonds...</div>
        </div>
      }>
        <BondsSection />
      </Suspense>
    </main>
  )
}
