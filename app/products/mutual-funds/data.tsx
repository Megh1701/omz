import {
  TrendingUp,
  ArrowDownToLine,
  Coins,
  Briefcase,
  Layers,
  ArrowLeftRight,
  Building,
  ShieldCheck,
  Wallet,
  Sparkles,
  FileCheck,
  Gauge,
  Target,
  PiggyBank,
  LineChart,
  Repeat,
} from 'lucide-react'

export interface MutualFundFeature {
  icon: React.ComponentType<{ className?: string }>
  text: string
}

export interface MutualFundProduct {
  title: string
  description: string
  src: string
  features: MutualFundFeature[]
}

export const mutualFundProducts: MutualFundProduct[] = [
  {
    title: 'SIP (Systematic Investment Plan)',
    description:
      'Invest a fixed amount regularly in mutual funds to build long-term wealth through the power of compounding and rupee cost averaging.',
    src: '/mutualfunds/sip pic.png',
    features: [
      { icon: TrendingUp, text: 'Disciplined wealth creation over time' },
      { icon: PiggyBank, text: 'Start with small, regular investments' },
      { icon: Sparkles, text: 'Benefit from rupee cost averaging' },
    ],
  },
  {
    title: 'SWP (Systematic Withdrawal Plan)',
    description:
      'Withdraw a fixed amount regularly from your mutual fund investments to create a steady income stream while your capital stays invested.',
    src: '/mutualfunds/swp pic.png',
    features: [
      { icon: ArrowDownToLine, text: 'Regular income from investments' },
      { icon: Wallet, text: 'Ideal for retirement planning' },
      { icon: ShieldCheck, text: 'Tax-efficient withdrawals' },
    ],
  },
  {
    title: 'Lumpsum Investment',
    description:
      'Invest a large amount in mutual funds at once to maximize growth potential when markets are favorable or surplus funds are available.',
    src: '/mutualfunds/lumpsum.png',
    features: [
      { icon: Coins, text: 'One-time investment for higher growth' },
      { icon: TrendingUp, text: 'Capture market opportunities' },
      { icon: Target, text: 'Ideal for surplus funds' },
    ],
  },
  {
    title: 'PMS (Portfolio Management Services)',
    description:
      'Get professionally managed, customized investment portfolios designed by expert managers to meet your specific financial goals and risk profile.',
    src: '/mutualfunds/pmf.png',
    features: [
      { icon: Briefcase, text: 'Personalized portfolio management' },
      { icon: LineChart, text: 'Expert-managed strategies' },
      { icon: FileCheck, text: 'Transparent reporting and control' },
    ],
  },
  {
    title: 'SIF (Specialized Investment Fund)',
    description:
      'Access a new category of investment products offering sophisticated strategies between mutual funds and PMS for higher growth potential.',
    src: '/mutualfunds/sif.png',
    features: [
      { icon: Layers, text: 'Advanced investment strategies' },
      { icon: Gauge, text: 'Higher growth opportunities' },
      { icon: ShieldCheck, text: 'Regulated and structured products' },
    ],
  },
  {
    title: 'STP (Systematic Transfer Plan)',
    description:
      'Transfer a fixed amount regularly from one mutual fund to another to balance risk and returns while gradually entering equity markets.',
    src: '/mutualfunds/stp.png',
    features: [
      { icon: ArrowLeftRight, text: 'Smooth transition between funds' },
      { icon: Repeat, text: 'Balanced risk management' },
      { icon: TrendingUp, text: 'Optimized market entry strategy' },
    ],
  },
  {
    title: 'AIF (Alternative Investment Fund)',
    description:
      'Invest in privately pooled funds across private equity, hedge funds, real estate, and structured products for sophisticated investors seeking diversification.',
    src: '/mutualfunds/aif.png',
    features: [
      { icon: Building, text: 'Access to alternative asset classes' },
      { icon: Briefcase, text: 'Diversification beyond traditional funds' },
      { icon: Sparkles, text: 'Exclusive investment opportunities' },
    ],
  },
]