"use client"

import { useState, useMemo } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { normalFont, titleFont } from "@/app/fonts"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { Calculator, TrendingUp, Wallet, Sparkles } from "lucide-react"


const COLORS = {
  gold: "#D4AF37",
  goldLight: "#F4D77B",
  goldDark: "#AA8C2C",
  silver: "#C0C0C0",
  silverLight: "#E8E8E8",
  silverDark: "#8A8A8A",
  black: "#0A0A0A",
  charcoal: "#1A1A1A",
}

function formatCurrency(value: number): string {
  return `₹${value.toLocaleString("en-IN")}`
}
function formatCompact(value: number): string {
  if (value >= 10000000) {
    return `₹${(value / 10000000).toFixed(2)} Cr`
  } else if (value >= 100000) {
    return `₹${(value / 100000).toFixed(2)} L`
  }
  return `₹${value.toLocaleString("en-IN")}`
}
function calculateEMI(principal: number, rate: number, tenure: number) {
  const monthlyRate = rate / 12 / 100
  const months = tenure * 12
  if (monthlyRate === 0) {
    return principal / months
  }
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1)
  return emi
}

function calculateSIP(
  monthly: number,
  rate: number,
  years: number
): { invested: number; returns: number; total: number } {
  const monthlyRate = rate / 12 / 100
  const months = years * 12
  const invested = monthly * months
  const futureValue =
    monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)
  return {
    invested,
    returns: futureValue - invested,
    total: futureValue,
  }
}

function calculateLumpsum(
  principal: number,
  rate: number,
  years: number
): { capital: number; growth: number; total: number } {
  const futureValue = principal * Math.pow(1 + rate / 100, years)
  return {
    capital: principal,
    growth: futureValue - principal,
    total: futureValue,
  }
}

function DonutChart({
  data,
  colors,
}: {
  data: { name: string; value: number }[]
  colors: string[]
}) {
  const total = data.reduce((acc, item) => acc + item.value, 0)

  return (
    <div className="relative h-[280px] w-full">

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute h-48 w-48 rounded-full opacity-40 blur-[50px]"
          style={{ background: `radial-gradient(circle, ${COLORS.gold}50 0%, transparent 70%)` }}
        />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <defs>
            <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={COLORS.goldLight} />
              <stop offset="50%" stopColor={COLORS.gold} />
              <stop offset="100%" stopColor={COLORS.goldDark} />
            </linearGradient>
            <linearGradient id="silverGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={COLORS.silverLight} />
              <stop offset="50%" stopColor={COLORS.silver} />
              <stop offset="100%" stopColor={COLORS.silverDark} />
            </linearGradient>
          </defs>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={3}
            dataKey="value"
            animationBegin={0}
            animationDuration={1000}
            animationEasing="ease-out"
            strokeWidth={0}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === 1 ? "url(#goldGradient)" : "url(#silverGradient)"}
                style={{
                  filter: `drop-shadow(0 0 12px ${colors[index]}60)`,
                }}
              />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload
                const percentage = ((data.value / total) * 100).toFixed(1)
                return (
                  <div
                    className="rounded-xl border border-[#D4AF37]/30 bg-[#141414]/95 px-4 py-3 backdrop-blur-xl"
                    style={{ boxShadow: `0 0 30px ${COLORS.gold}15, 0 8px 32px rgba(0,0,0,0.5)` }}
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-[#8A8A8A]">{data.name}</p>
                    <p className="mt-1 text-lg font-bold text-[#E8E8E8]">
                      {formatCurrency(data.value)}
                    </p>
                    <p className="text-sm font-semibold" style={{ color: COLORS.gold }}>{percentage}%</p>
                  </div>
                )
              }
              return null
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A]">Total Value</p>
        <p
          className="mt-1 text-2xl font-bold"
          style={{
            background: `linear-gradient(135deg, ${COLORS.goldLight} 0%, ${COLORS.gold} 50%, ${COLORS.goldDark} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: `drop-shadow(0 0 15px ${COLORS.gold}40)`,
          }}
        >
          {formatCompact(total)}
        </p>
      </div>
    </div>
  )
}

function ChartLegend({
  items,
  colors,
}: {
  items: { name: string; value: number }[]
  colors: string[]
}) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => (
        <div
          key={item.name}
          className="group flex cursor-pointer items-center justify-between rounded-lg px-4 py-2.5 transition-all duration-300 hover:bg-[#1A1A1A]"
        >
          <div className="flex items-center gap-3">
            <div
              className="h-2.5 w-2.5 rounded-full transition-all duration-300 group-hover:scale-150"
              style={{
                background: index === 1
                  ? `linear-gradient(135deg, ${COLORS.goldLight}, ${COLORS.gold})`
                  : `linear-gradient(135deg, ${COLORS.silverLight}, ${COLORS.silver})`,
                boxShadow: `0 0 12px ${colors[index]}70`,
              }}
            />
            <span className="text-sm font-medium text-[#8A8A8A] transition-colors duration-300 group-hover:text-[#C0C0C0]">
              {item.name}
            </span>
          </div>
          <span
            className="text-sm font-bold transition-all duration-300"
            style={{ color: colors[index-1] }}
          >
            {formatCurrency(item.value)}
          </span>
        </div>
      ))}
    </div>
  )
}

function CalculatorInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  suffix,
  prefix,
}: {
  label: string
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step: number
  suffix?: string
  prefix?: string
}) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium tracking-wide text-[#C0C0C0]">{label}</Label>
        <div
          className={`relative flex items-center gap-1.5 overflow-hidden rounded-lg border bg-[#141414] px-2 py-2 transition-all duration-300 ${isFocused
            ? 'border-[#D4AF37]/50'
            : 'border-[#2A2A2A] hover:border-[#D4AF37]/25'
            }`}
          style={isFocused ? {
            boxShadow: `0 0 20px ${COLORS.gold}15, 0 0 40px ${COLORS.gold}08`,
          } : {}}
        >
          {prefix && <span className="text-sm font-medium" style={{ color: COLORS.gold }}>{prefix}</span>}
          <Input
            type="number"
            value={value}
            onChange={(e) => {
              const val = parseFloat(e.target.value)
              if (!isNaN(val)) {
                onChange(Math.min(max, Math.max(min, val)))
              }
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="h-auto w-20 border-0 bg-transparent p-0 text-right text-sm font-bold text-[#E8E8E8] shadow-none focus-visible:ring-0"
          />
          {suffix && <span className="text-sm font-medium text-[#8A8A8A]">{suffix}</span>}
        </div>
      </div>
      <div className="relative px-1">
        <Slider
          value={[value]}
          onValueChange={(val) => onChange(val[0])}
          min={min}
          max={max}
          step={step}
          className="[&_[data-slot=slider-range]]:bg-gradient-to-r [&_[data-slot=slider-range]]:from-[#AA8C2C] [&_[data-slot=slider-range]]:via-[#D4AF37] [&_[data-slot=slider-range]]:to-[#F4D77B] [&_[data-slot=slider-range]]:shadow-[0_0_10px_rgba(212,175,55,0.5)] [&_[data-slot=slider-thumb]]:h-4 [&_[data-slot=slider-thumb]]:w-4 [&_[data-slot=slider-thumb]]:border-2 [&_[data-slot=slider-thumb]]:border-[#D4AF37] [&_[data-slot=slider-thumb]]:bg-[#ffffff] [&_[data-slot=slider-thumb]]:shadow-[0_0_15px_rgba(212,175,55,0.6)] [&_[data-slot=slider-thumb]]:transition-all [&_[data-slot=slider-thumb]]:duration-200 [&_[data-slot=slider-thumb]]:hover:scale-125 [&_[data-slot=slider-thumb]]:hover:shadow-[0_0_25px_rgba(212,175,55,0.8)] [&_[data-slot=slider-track]]:h-1.5 [&_[data-slot=slider-track]]:bg-[#1A1A1A]"
        />
      </div>
    </div>
  )
}

function ResultCard({
  label,
  value,
  highlight,
  isGold,
}: {
  label: string
  value: string
  highlight?: boolean
  isGold?: boolean
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border p-4 transition-all duration-500 hover:scale-[1.02] ${highlight
        ? "border-[#D4AF37]/40 bg-gradient-to-br from-[#D4AF37]/10 via-[#1A1A1A] to-[#C0C0C0]/5"
        : "border-[#2A2A2A] bg-[#141414] hover:border-[#D4AF37]/20"
        }`}
      style={highlight ? {
        boxShadow: `0 0 40px ${COLORS.gold}10, 0 0 60px ${COLORS.gold}05`,
      } : {}}
    >
      {highlight && (
        <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#D4AF37]/15 blur-2xl transition-all duration-500 group-hover:bg-[#D4AF37]/25" />
      )}
      <p className="relative text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8A8A8A]">
        {label}
      </p>
      <p
        className="relative mt-1.5 text-lg font-bold"
        style={highlight ? {
          background: `linear-gradient(135deg, ${COLORS.goldLight} 0%, ${COLORS.gold} 50%, ${COLORS.silver} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: `drop-shadow(0 0 10px ${COLORS.gold}30)`,
        } : {
          color: isGold ? COLORS.gold : COLORS.silver,
        }}
      >
        {value}
      </p>
    </div>
  )
}

function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(2500000)
  const [interestRate, setInterestRate] = useState(8.5)
  const [tenure, setTenure] = useState(20)

  const results = useMemo(() => {
    const emi = calculateEMI(loanAmount, interestRate, tenure)
    const totalPayment = emi * tenure * 12
    const totalInterest = totalPayment - loanAmount
    return {
      emi,
      totalPayment,
      totalInterest,
      principal: loanAmount,
    }
  }, [loanAmount, interestRate, tenure])

const chartData = [
  { name: "Principal Amount ", value: results.principal  },
  { name: "Total Interest",value: results.totalInterest },
]

const chartColors = [COLORS.gold, COLORS.silver]

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-6">
        <div className="space-y-5">
          <CalculatorInput
            label="Loan Amount"
            value={loanAmount}
            onChange={setLoanAmount}
            min={100000}
            max={50000000}
            step={100000}
            prefix="₹"
          />
          <CalculatorInput
            label="Interest Rate (Annual)"
            value={interestRate}
            onChange={setInterestRate}
            min={1}
            max={20}
            step={0.1}
            suffix="%"
          />
          <CalculatorInput
            label="Loan Tenure"
            value={tenure}
            onChange={setTenure}
            min={1}
            max={30}
            step={1}
            suffix="Years"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <ResultCard label="Monthly EMI" value={formatCurrency(results.emi)} highlight />
          <ResultCard label="Total Payment" value={formatCurrency(results.totalPayment)} />
          <ResultCard label="Principal" value={formatCurrency(results.principal)} isGold />
          <ResultCard label="Total Interest" value={formatCurrency(results.totalInterest)} />
        </div>
      </div>

      <div
        className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#2A2A2A] bg-gradient-to-br from-[#141414] via-[#0F0F0F] to-[#141414] p-6"
        style={{ boxShadow: `inset 0 0 60px ${COLORS.gold}03` }}
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#D4AF37]/5 blur-[60px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#C0C0C0]/5 blur-[60px]" />

        <h3 className="relative mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8A8A8A]">
          Payment Breakdown
        </h3>
        <DonutChart data={chartData} colors={chartColors} />
        <div className="relative mt-2 w-full max-w-xs">
          <ChartLegend items={chartData} colors={chartColors} />
          <div className="mt-3 border-t border-[#2A2A2A] pt-3 text-center">
            <p className="text-xs uppercase tracking-wider text-[#8A8A8A]">
              Total Value
            </p>
            <p
              className="mt-1 text-lg font-bold"
              style={{ color: COLORS.gold }}
            >
              {formatCurrency(results.totalPayment)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(25000)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [timePeriod, setTimePeriod] = useState(15)

  const results = useMemo(() => {
    return calculateSIP(monthlyInvestment, expectedReturn, timePeriod)
  }, [monthlyInvestment, expectedReturn, timePeriod])

  const chartData = [
    { name: "Invested Amount", value: results.invested },
    { name: "Estimated Returns", value: results.returns },
  ]

  const chartColors = [COLORS.gold, COLORS.silver]

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-6">
        <div className="space-y-5">
          <CalculatorInput
            label="Monthly Investment"
            value={monthlyInvestment}
            onChange={setMonthlyInvestment}
            min={500}
            max={1000000}
            step={500}
            prefix="₹"
          />
          <CalculatorInput
            label="Expected Return Rate"
            value={expectedReturn}
            onChange={setExpectedReturn}
            min={1}
            max={30}
            step={0.5}
            suffix="%"
          />
          <CalculatorInput
            label="Time Period"
            value={timePeriod}
            onChange={setTimePeriod}
            min={1}
            max={40}
            step={1}
            suffix="Years"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <ResultCard label="Total Value" value={formatCurrency(results.total)} highlight />
          <ResultCard label="Invested Amount" value={formatCurrency(results.invested)} isGold />
          <ResultCard label="Est. Returns" value={formatCurrency(results.returns)} />
          <ResultCard label="Wealth Gain" value={`${((results.returns / results.invested) * 100).toFixed(1)}%`} />
        </div>
      </div>

      <div
        className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#2A2A2A] bg-gradient-to-br from-[#141414] via-[#0F0F0F] to-[#141414] p-6"
        style={{ boxShadow: `inset 0 0 60px ${COLORS.gold}03` }}
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#D4AF37]/5 blur-[60px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#C0C0C0]/5 blur-[60px]" />

        <h3 className="relative mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8A8A8A]">
          Investment Breakdown
        </h3>
        <DonutChart data={chartData} colors={chartColors} />
        <div className="relative mt-2 w-full max-w-xs">
          <ChartLegend items={chartData} colors={chartColors} />
          <div className="mt-3 border-t border-[#2A2A2A] pt-3 text-center">
            <p className="text-xs uppercase tracking-wider text-[#8A8A8A]">
              Total Value
            </p>
            <p
              className="mt-1 text-lg font-bold"
              style={{ color: COLORS.gold }}
            >
              {formatCurrency(results.total)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function LumpsumCalculator() {
  const [investmentAmount, setInvestmentAmount] = useState(1000000)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [timePeriod, setTimePeriod] = useState(10)

  const results = useMemo(() => {
    return calculateLumpsum(investmentAmount, expectedReturn, timePeriod)
  }, [investmentAmount, expectedReturn, timePeriod])

  const chartData = [
    { name: "Initial Capital", value: results.capital },
    { name: "Estimated Growth", value: results.growth },
  ]

  const chartColors = [COLORS.gold, COLORS.silver]

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-6">
        <div className="space-y-5">
          <CalculatorInput
            label="Investment Amount"
            value={investmentAmount}
            onChange={setInvestmentAmount}
            min={10000}
            max={100000000}
            step={10000}
            prefix="₹"
          />
          <CalculatorInput
            label="Expected Return Rate"
            value={expectedReturn}
            onChange={setExpectedReturn}
            min={1}
            max={30}
            step={0.5}
            suffix="%"
          />
          <CalculatorInput
            label="Time Period"
            value={timePeriod}
            onChange={setTimePeriod}
            min={1}
            max={40}
            step={1}
            suffix="Years"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <ResultCard label="Total Value" value={formatCurrency(results.total)} highlight />
          <ResultCard label="Initial Capital" value={formatCurrency(results.capital)} isGold />
          <ResultCard label="Est. Growth" value={formatCurrency(results.growth)} />
          <ResultCard label="Returns" value={`${((results.growth / results.capital) * 100).toFixed(1)}%`} />
        </div>
      </div>

      <div
        className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#2A2A2A] bg-gradient-to-br from-[#141414] via-[#0F0F0F] to-[#141414] p-6"
        style={{ boxShadow: `inset 0 0 60px ${COLORS.gold}03` }}
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#D4AF37]/5 blur-[60px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#C0C0C0]/5 blur-[60px]" />

        <h3 className="relative mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8A8A8A]">
          Growth Breakdown
        </h3>
        <DonutChart data={chartData} colors={chartColors} />
        <div className="relative mt-2 w-full max-w-xs">
          <ChartLegend items={chartData} colors={chartColors} />
          <div className="mt-3 border-t border-[#2A2A2A] pt-3 text-center">
            <p className="text-xs uppercase tracking-wider text-[#8A8A8A]">
              Total Value
            </p>
            <p
              className="mt-1 text-lg font-bold"
              style={{ color: COLORS.gold }}
            >
              {formatCurrency(results.total)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FinancialCalculatorDashboard({
  initialTab = "emi",
}: {
  initialTab?: "emi" | "sip" | "lumpsum"
}) {
  return (
    <main className={`${normalFont.className} relative min-h-screen overflow-hidden bg-[#0A0A0A]`}>
      <div className="pointer-events-none fixed inset-0">
        <div
          className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full opacity-30 blur-[120px]"
          style={{ background: `radial-gradient(circle, ${COLORS.gold}40 0%, transparent 70%)` }}
        />
        <div
          className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
          style={{ background: `radial-gradient(circle, ${COLORS.silver}30 0%, transparent 70%)` }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[100px]"
          style={{ background: `radial-gradient(circle, ${COLORS.gold}30 0%, transparent 70%)` }}
        />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(${COLORS.gold}40 1px, transparent 1px), linear-gradient(90deg, ${COLORS.gold}40 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1
            className={`${titleFont.className} text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl`}
            style={{
              background: `linear-gradient(135deg, ${COLORS.silverLight} 0%, ${COLORS.gold} 35%, ${COLORS.goldLight} 50%, ${COLORS.silver} 75%, ${COLORS.silverLight} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: `drop-shadow(0 0 25px ${COLORS.gold}20)`,
            }}
          >
            Financial Calculator
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-sm text-[#8A8A8A] sm:text-base font-sant">
            Professional tools for EMI, SIP & Lumpsum investment planning.
            Make informed financial decisions with real-time calculations.
          </p>
        </header>

        <div
          className="relative overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#0F0F0F]/90 p-5 backdrop-blur-xl sm:p-6 lg:p-8"
          style={{
            boxShadow: `0 0 60px ${COLORS.gold}05, 0 0 100px ${COLORS.black}, 0 20px 40px rgba(0, 0, 0, 0.5)`,
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${COLORS.gold}08 0%, transparent 50%, ${COLORS.silver}05 100%)`,
            }}
          />

          <Tabs defaultValue="emi" className="relative w-full">
            <TabsList
              className="mx-auto mb-8 grid w-full max-w-md grid-cols-3 gap-1.5 rounded-xl bg-[#1A1A1A] p-1.5"
              style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.4)' }}
            >
              <TabsTrigger
                value="emi"
                className="gap-1.5 cursor-pointer rounded-lg text-sm font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#AA8C2C] data-[state=active]:via-[#D4AF37] data-[state=active]:to-[#F4D77B] data-[state=active]:text-[#0A0A0A] data-[state=active]:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                <Calculator className="h-3.5 w-3.5" />
                <span>EMI</span>
              </TabsTrigger>
              <TabsTrigger
                value="sip"
                className="gap-1.5 cursor-pointer  rounded-lg text-sm font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#AA8C2C] data-[state=active]:via-[#D4AF37] data-[state=active]:to-[#F4D77B] data-[state=active]:text-[#0A0A0A] data-[state=active]:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                <TrendingUp className="h-3.5  w-3.5" />
                <span>SIP</span>
              </TabsTrigger>
              <TabsTrigger
                value="lumpsum"
                className="gap-1.5 cursor-pointer  rounded-lg text-sm font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#AA8C2C] data-[state=active]:via-[#D4AF37] data-[state=active]:to-[#F4D77B] data-[state=active]:text-[#0A0A0A] data-[state=active]:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                <Wallet className="h-3.5 w-3.5" />
                <span>Lumpsum</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="emi" className="mt-0 animate-in fade-in-50 duration-300">
              <EMICalculator />
            </TabsContent>

            <TabsContent value="sip" className="mt-0 animate-in fade-in-50 duration-300">
              <SIPCalculator />
            </TabsContent>

            <TabsContent value="lumpsum" className="mt-0 animate-in fade-in-50 duration-300">
              <LumpsumCalculator />
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer Disclaimer */}
        <footer className="mt-8 text-center">
          <p className="text-xs text-[#5A5A5A]">
            Calculations are for illustrative purposes only. Actual results may vary based on market conditions.
            Please consult a financial advisor before making investment decisions.
          </p>
        </footer>
      </div>
    </main>
  )
}
