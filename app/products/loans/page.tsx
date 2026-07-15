import type { Metadata } from "next";
import LoanSection from './components/LoanSection'

export const metadata: Metadata = {
  title: "Loans",
  description:
    "Apply for home loans, personal loans, business loans, and more through OMZ. Competitive interest rates, fast approval, and minimal documentation.",
  keywords: ["home loan India", "personal loan", "business loan", "loan EMI", "OMZ loans"],
  alternates: {
    canonical: "/products/loans",
  },
  openGraph: {
    title: "Loans | OMZ",
    description: "Apply for home, personal, or business loans with low rates and fast approval.",
    url: "/products/loans",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "OMZ Loans" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loans | OMZ",
    description: "Fast loan approvals with competitive interest rates from OMZ.",
  },
};


export default function LoansPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <LoanSection />
    </main>
  )
}
