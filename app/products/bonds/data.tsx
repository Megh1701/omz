import {
  Landmark,
  ShieldCheck,
  Wallet,
  Building2,
  TrendingUp,
  FileCheck,
} from 'lucide-react'

export interface BondsFeature {
  icon: React.ComponentType<{ className?: string }>
  text: string
}

export interface BondsProduct {
  title: string
  description: string
  src: string
  features: BondsFeature[]
}

export const bondsProducts: BondsProduct[] = [
  {
    title: 'Government Bonds',
    description:
      'Sovereign-backed debt instruments offering stable returns and capital safety with regular interest payouts over fixed tenures.',
    src: '/bonds/government bonds.png',
    features: [
      { icon: Landmark, text: 'Backed by sovereign guarantee' },
      { icon: ShieldCheck, text: 'Low-risk, stable returns' },
      { icon: Wallet, text: 'Regular interest income' },
    ],
  },
  {
    title: 'Corporate Bonds',
    description:
      'Debt securities issued by companies offering higher yields than government bonds with fixed interest income and defined maturity periods.',
    src: '/bonds/corporate bonds pic.png',
    features: [
      { icon: Building2, text: 'Issued by trusted corporations' },
      { icon: TrendingUp, text: 'Higher yields than government bonds' },
      { icon: FileCheck, text: 'Fixed-income with defined maturity' },
    ],
  },
]