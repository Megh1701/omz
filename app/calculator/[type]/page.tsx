import FinancialCalculatorDashboard from "@/components/calculator/FinancialCalculatorDashboard";

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