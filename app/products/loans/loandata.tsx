import {
  Zap,
  ShieldCheck,
  Clock,
  Briefcase,
  Percent,
  GraduationCap,
  Key,
  Car,
  Wallet,
  FileCheck,
  Plane,
  TrendingUp,
  Building2,
  Gauge,
  Sparkles,
  HeartHandshake,
} from 'lucide-react'

export interface LoanFeature {
  icon: React.ComponentType<{ className?: string }>
  text: string
}

export interface LoanProduct {
  title: string
  description: string
  src: string
  features: LoanFeature[]
}

export const loanProducts: LoanProduct[] = [
  {
    title: 'Home Loan',
    description:
      'Fulfill your dream of owning a home with our flexible home loan options, offering attractive interest rates, low processing fees, and longer tenures.',
    src: '/loans/home loan pic.png',
    features: [
      { icon: Percent, text: 'Interest rates that feel like home' },
      { icon: ShieldCheck, text: 'Total peace of mind' },
      { icon: Clock, text: 'Long tenures, lighter EMIs' },
    ],
  },
  {
    title: 'Business Loan',
    description:
      'Power your business expansion, purchase machinery, or manage working capital with our collateral-free business loans designed for enterprise growth.',
    src: '/loans/business loan pic.png',
    features: [
      { icon: Briefcase, text: 'Collateral-free capital for bold ideas' },
      { icon: FileCheck, text: 'Paperless approvals, faster decisions' },
      { icon: TrendingUp, text: 'Repayment that grows with you' },
    ],
  },
  {
    title: 'Personal Loan',
    description:
      'Get quick access to funds for medical emergencies, travel, weddings, or any personal expenses with our fast and collateral-free personal loans.',
    src: '/loans/personal loan pic.png',
    features: [
      { icon: Zap, text: 'Instant approvals, lightning disbursals' },
      { icon: Wallet, text: 'Transparent pricing, no surprises' },
      { icon: Sparkles, text: 'Funds for every life moment' },
    ],
  },
  {
    title: 'Education Loan',
    description:
      'Empower your academic journey and secure admission to premier institutions in India and abroad with our comprehensive student education loans.',
    src: '/loans/education loan pic.png',
    features: [
      { icon: GraduationCap, text: 'Fueling ambitions, funding futures' },
      { icon: Plane, text: 'Study anywhere, in India or abroad' },
      { icon: Clock, text: 'Easy repay process' },
    ],
  },
  {
    title: 'Mortgage Loan',
    description:
      'Unlock the hidden value of your residential or commercial property to fund business expansion, debt consolidation, or high-value personal needs.',
    src: '/loans/mortgage loan pic.png',
    features: [
      { icon: Building2, text: 'Unlock the true value of your property' },
      { icon: Percent, text: 'Lower rates, bigger possibilities' },
      { icon: Key, text: 'One loan, endless purposes' },
    ],
  },
  {
    title: 'Vehicle Loan',
    description:
      'Drive home your dream car or two-wheeler with our quick vehicle loans, featuring low down payments, instant processing, and customizable EMI structures.',
    src: '/loans/vehicle loan pic.png',
    features: [
      { icon: Car, text: 'Drive home your dream, faster' },
      { icon: Gauge, text: 'Instant eligibility, smooth ride ahead' },
      { icon: HeartHandshake, text: 'EMIs tailored to your journey' },
    ],
  },
]