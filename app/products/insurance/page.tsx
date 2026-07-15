import type { Metadata } from "next";
import { Suspense } from 'react'
import InsuranceSection from './components/InsuranceSection'

export const metadata: Metadata = {
  title: "Insurance Plans",
  description:
    "Compare and buy the best insurance plans in India — term life, health, motor, and more. Get instant quotes and expert guidance from OMZ.",
  keywords: ["term insurance", "health insurance", "motor insurance", "life insurance India", "OMZ insurance"],
  alternates: {
    canonical: "/products/insurance",
  },
  openGraph: {
    title: "Insurance Plans | OMZ",
    description: "Compare term life, health, and motor insurance. Buy online with OMZ in minutes.",
    url: "/products/insurance",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "OMZ Insurance Plans" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Plans | OMZ",
    description: "Compare and buy the best insurance plans in India with OMZ.",
  },
};


export default function InsurancePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Suspense fallback={
        <div className="flex min-h-screen items-center justify-center bg-black text-white">
          <div className="text-sm font-light tracking-widest uppercase animate-pulse">Loading Insurance...</div>
        </div>
      }>
        <InsuranceSection />
      </Suspense>
    </main>
  )
}