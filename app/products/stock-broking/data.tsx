import {
  FileCheck,
  ShieldCheck,
  Wallet,
  TrendingUp,
  LineChart,
  Gauge,
  Sparkles,
  Target,
  Rocket,
  Briefcase,
  BarChart3,
  Zap,
} from 'lucide-react'

export interface StockBrokingFeature {
  icon: React.ComponentType<{ className?: string }>
  text: string
}

export interface StockBrokingProduct {
  title: string
  description: string
  src: string
  features: StockBrokingFeature[]
}

export const stockBrokingProducts: StockBrokingProduct[] = [
  {
    title: 'Demat Account',
    description:
      'Open a Demat account to hold your shares, bonds, and securities in electronic form, enabling safe, paperless, and seamless trading in the stock market.',
    src: '/demat account pic.png',
    features: [
      { icon: ShieldCheck, text: 'Secure electronic holding of securities' },
      { icon: FileCheck, text: 'Paperless and hassle-free transactions' },
      { icon: Wallet, text: 'Easy access to all your investments' },
    ],
  },
  {
    title: 'Equity Trading',
    description:
      'Buy and sell shares of listed companies on stock exchanges to build wealth through capital appreciation and dividends with real-time market access.',
    src: '/equity trading pic.png',
    features: [
      { icon: TrendingUp, text: 'Wealth creation through capital growth' },
      { icon: LineChart, text: 'Real-time market access and execution' },
      { icon: BarChart3, text: 'Diversified portfolio across sectors' },
    ],
  },
  {
    title: 'IPO (Initial Public Offering)',
    description:
      'Invest in companies at their market debut by subscribing to Initial Public Offerings, offering early entry opportunities and potential listing gains.',
    src: '/ipo pic.png',
    features: [
      { icon: Rocket, text: 'Early entry into promising companies' },
      { icon: Sparkles, text: 'Potential for listing day gains' },
      { icon: Target, text: 'Access to fresh market opportunities' },
    ],
  },
]