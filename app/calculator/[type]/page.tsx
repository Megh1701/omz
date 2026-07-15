import type { Metadata } from "next";
import FinancialCalculatorDashboard from "@/components/calculator/FinancialCalculatorDashboard";

const calculatorMeta: Record<
  string,
  { title: string; description: string }
> = {
  emi: {
    title: "EMI Calculator",
    description:
      "Calculate your home loan, personal loan, or car loan EMI instantly with OMZ. Adjust principal, rate, and tenure to find your ideal repayment plan.",
  },
  sip: {
    title: "SIP Calculator",
    description:
      "Estimate the future value of your Systematic Investment Plan with OMZ. See how monthly SIP contributions compound into wealth over time.",
  },
  lumpsum: {
    title: "Lump Sum Calculator",
    description:
      "Project the returns on a one-time lump sum investment with OMZ. Calculate maturity value based on expected rate and investment duration.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const validTabs = ["emi", "sip", "lumpsum"];
  const key = validTabs.includes(type) ? type : "emi";
  const { title, description } = calculatorMeta[key];

  return {
    title,
    description,
    alternates: { canonical: `/calculator/${key}` },
    openGraph: {
      title: `${title} | OMZ`,
      description,
      url: `/calculator/${key}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `OMZ ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | OMZ`,
      description,
    },
  };
}

export async function generateStaticParams() {
  return [{ type: "emi" }, { type: "sip" }, { type: "lumpsum" }];
}

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;

  const validTabs = ["emi", "sip", "lumpsum"];
  const selectedTab = validTabs.includes(type) ? type : "emi";

  return <FinancialCalculatorDashboard initialTab={selectedTab as "emi" | "sip" | "lumpsum"} />;
}