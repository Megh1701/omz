import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { titleFont } from "./fonts";

import { Providers } from "./provider";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://omz.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "OMZ — Invest Smarter. Grow Faster.",
    template: "%s | OMZ",
  },
  description:
    "OMZ is your all-in-one financial platform offering insurance, loans, mutual funds, stock broking, and smart investment calculators. Trusted by thousands across India.",
  keywords: [
    "investment platform India",
    "mutual funds",
    "stock broking",
    "term insurance",
    "home loans",
    "personal loans",
    "SIP calculator",
    "EMI calculator",
    "wealth management",
    "OMZ finance",
  ],
  authors: [{ name: "OMZ Financial Services" }],
  creator: "OMZ",
  publisher: "OMZ Financial Services Pvt. Ltd.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "OMZ",
    title: "OMZ — Invest Smarter. Grow Faster.",
    description:
      "OMZ is your all-in-one financial platform offering insurance, loans, mutual funds, stock broking, and smart investment calculators.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OMZ — Good things come to those who invest.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OMZ — Invest Smarter. Grow Faster.",
    description:
      "Your all-in-one financial platform for insurance, loans, mutual funds, and stock broking.",
    images: ["/og-image.png"],
    creator: "@omzfinance",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${titleFont.variable} ${titleFont.className}`}
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased title bg-black`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "OMZ Financial Services",
                url: BASE_URL,
                logo: `${BASE_URL}/omzlogo.png`,
                sameAs: [],
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    contactType: "customer service",
                    availableLanguage: ["English", "Hindi"],
                    areaServed: "IN",
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "OMZ",
                url: BASE_URL,
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
                  },
                  "query-input": "required name=search_term_string",
                },
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}