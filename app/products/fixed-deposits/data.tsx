import {
  Building2,
  TrendingUp,
  Wallet,
  HeartHandshake,
  ShieldCheck,
  Repeat,
  PiggyBank,
  Sparkles,
  FileCheck,
  Landmark,
} from 'lucide-react'
export interface FDFeature {
  icon: React.ComponentType<{ className?: string }>
  text: string
}

export interface FDProduct {
  title: string
  description: string
  src: string
  features: FDFeature[]
}

export const fdProducts: FDProduct[] = [
  {
    title: 'Corporate FD',
    description:
      'Fixed deposits issued by reputed corporations offering higher interest rates than traditional bank FDs with assured returns.',
    src: '/fd/corporate fd.png',
    features: [
      { icon: Building2, text: 'Higher interest than bank FDs' },
      { icon: TrendingUp, text: 'Issued by trusted corporations' },
      { icon: Wallet, text: 'Attractive returns on deposits' },
    ],


  },
  {
    title: 'Senior Citizen FD',
    description:
      'Specially designed fixed deposit for senior citizens offering higher interest rates and reliable retirement income.',
    src: '/fd/senior citizen fd pic.png',
    features: [
      { icon: HeartHandshake, text: 'Higher interest rates for seniors' },
      { icon: ShieldCheck, text: 'Safe and assured returns' },
      { icon: Wallet, text: 'Reliable retirement income source' },
    ],

  },
  {
    title: 'Non Cumulative FD',
    description:
      'Fixed deposit offering regular interest payouts at chosen intervals, ideal for those seeking steady income flow.',
    src: '/fd/non cumulative fd.png',
    features: [
      { icon: Repeat, text: 'Regular interest payouts' },
      { icon: Wallet, text: 'Steady income stream from deposits' },
      { icon: ShieldCheck, text: 'Ideal for periodic cash flow needs' },
    ],

  },
  {
    title: 'Cumulative FD',
    description:
      'Fixed deposit where interest is compounded and paid as a lump sum at maturity for maximum wealth accumulation.',
    src: '/fd/cumulative fd.png',
    features: [
      { icon: TrendingUp, text: 'Interest compounded over tenure' },
      { icon: PiggyBank, text: 'Lump-sum payout at maturity' },
      { icon: Sparkles, text: 'Maximizes long-term wealth growth' },
    ],

  },
  {
    title: 'Tax Saving FD',
    description:
      'Five-year lock-in fixed deposit eligible for tax deduction under Section 80C with guaranteed maturity returns.',
    src: '/fd/tax saving fd.png',
    features: [
      { icon: FileCheck, text: 'Tax deduction under Section 80C' },
      { icon: PiggyBank, text: '5-year lock-in with assured returns' },
      { icon: ShieldCheck, text: 'Dual benefit of savings and tax relief' },
    ],

  },
  {
    title: 'Standard FD',
    description:
      'Traditional fixed deposit with guaranteed returns and flexible tenure options for safe and assured wealth growth.',
    src: '/fd/standard fd pic.png',
    features: [
      { icon: Landmark, text: 'Guaranteed fixed returns over tenure' },
      { icon: ShieldCheck, text: 'Capital safety with assured growth' },
      { icon: Wallet, text: 'Flexible tenure options available' },
    ],

  },
]
