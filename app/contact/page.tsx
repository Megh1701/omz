import type { Metadata } from "next"
import { Suspense } from "react"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with OMZ (Om Money Zone) for expert wealth management, investment planning, insurance guidance, and financial advisory services.",
  keywords: ["contact OMZ", "Om Money Zone contact", "wealth advisor India", "financial advisory contact", "GIFT City wealth managers"],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | OMZ",
    description: "Connect with the wealth advisory team at OMZ to plan your financial journey.",
    url: "/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact OMZ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | OMZ",
    description: "Get in touch with OMZ for personalized wealth and investment guidance.",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Suspense fallback={
        <div className="flex min-h-screen items-center justify-center bg-black text-white">
          <div className="text-sm font-light tracking-widest uppercase animate-pulse">Loading Contact Form...</div>
        </div>
      }>
        <ContactForm />
      </Suspense>
    </main>
  )
}
