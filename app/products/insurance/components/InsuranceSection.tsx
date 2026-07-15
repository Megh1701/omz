'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  Car,
  Bike,
  ShieldCheck,
  Plane,
  Building2,
  Laptop,
  HeartHandshake,
  Truck,
  Wallet,
  Sparkles,
  FileCheck,
  Gauge,
  Flame,
  HeartPulse,
  Hammer,
  PackageCheck,
  Anchor,
  BriefcaseBusiness,
  UserRoundCheck,
  Factory,
  Boxes,
  Zap,
  GraduationCap,
  PiggyBank,
  Users,
  Target,
  Coins,
  Repeat,
  TrendingUp,
  Layers,
  HelpCircle,
  Hospital,
  Globe,
  Stethoscope,
  UserCheck,
} from 'lucide-react'
import InsuranceCategoryNav from './InsuranceCategoryNav'
import { insuranceCategories } from '../data'
import ProductSection from '../../../../components/ProductSection'

type ProductMeta = {
  features: Array<{ icon: any; text: string }>
}

const productMetaMap: Record<string, ProductMeta> = {
  'Car Insurance': {
    features: [
      { icon: Car, text: 'Complete protection for your car' },
      { icon: ShieldCheck, text: 'Coverage against damage and theft' },
      { icon: Wallet, text: 'Cashless claim support' },
    ],
  },

  'Commercial Vehicle Insurance': {
    features: [
      { icon: Truck, text: 'Protection for commercial vehicles' },
      { icon: ShieldCheck, text: 'Coverage against business risks' },
      { icon: Gauge, text: 'Smooth claims for uninterrupted operations' },
    ],
  },

  'Cyber Insurance': {
    features: [
      { icon: Laptop, text: 'Protection against cyber threats' },
      { icon: ShieldCheck, text: 'Coverage for digital risks' },
      { icon: FileCheck, text: 'Support for data breach recovery' },
    ],
  },

  'Personal Accident': {
    features: [
      { icon: HeartHandshake, text: 'Financial support during emergencies' },
      { icon: ShieldCheck, text: 'Coverage against accidental risks' },
      { icon: Sparkles, text: 'Peace of mind for every step' },
    ],
  },

  'Property Insurance': {
    features: [
      { icon: Building2, text: 'Protection for valuable property' },
      { icon: ShieldCheck, text: 'Coverage against major risks' },
      { icon: Wallet, text: 'Financial security for damages' },
    ],
  },

  'Travel Insurance': {
    features: [
      { icon: Plane, text: 'Travel with complete confidence' },
      { icon: ShieldCheck, text: 'Coverage for emergencies abroad' },
      { icon: Wallet, text: 'Protection from unexpected expenses' },
    ],
  },

  'Two Wheeler Insurance': {
    features: [
      { icon: Bike, text: 'Protection for bikes and scooters' },
      { icon: ShieldCheck, text: 'Coverage against accidents and theft' },
      { icon: Gauge, text: 'Quick claims, smoother rides' },
    ],
  },

  'Burglary Insurance': {
    features: [
      { icon: ShieldCheck, text: 'Protection against theft and break-ins' },
      { icon: BriefcaseBusiness, text: 'Covers business assets and valuables' },
      { icon: UserRoundCheck, text: 'Peace of mind for business owners' },
    ],
  },

  'Deterioration of Stocks': {
    features: [
      { icon: Boxes, text: 'Covers stock deterioration losses' },
      { icon: Factory, text: 'Ideal for industrial inventory protection' },
      { icon: ShieldCheck, text: 'Reduces operational loss risk' },
    ],
  },

  'Engineering Insurance': {
    features: [
      { icon: Hammer, text: 'Protection for machinery and equipment' },
      { icon: Factory, text: 'Covers engineering project risks' },
      { icon: ShieldCheck, text: 'Reliable cover for industrial operations' },
    ],
  },

  'Fire Insurance': {
    features: [
      { icon: Flame, text: 'Coverage against fire-related losses' },
      { icon: Factory, text: 'Protects property, stock, and machinery' },
      { icon: ShieldCheck, text: 'Strong safety net for businesses' },
    ],
  },

  'Group Health Insurance': {
    features: [
      { icon: HeartPulse, text: 'Health cover for employees' },
      { icon: UserRoundCheck, text: 'Supports employee well-being' },
      { icon: BriefcaseBusiness, text: 'Customized plans for companies' },
    ],
  },

  'Group Personal Accident Insurance': {
    features: [
      { icon: ShieldCheck, text: 'Coverage against accidental risks' },
      { icon: UserRoundCheck, text: 'Financial support for employees' },
      { icon: BriefcaseBusiness, text: 'Ideal for corporate teams' },
    ],
  },

  'Group Travel Insurance': {
    features: [
      { icon: Plane, text: 'Coverage for business travel' },
      { icon: HeartPulse, text: 'Medical emergency protection' },
      { icon: ShieldCheck, text: 'Travel with complete confidence' },
    ],
  },

  'Liability Insurance': {
    features: [
      { icon: ShieldCheck, text: 'Protection against legal liabilities' },
      { icon: BriefcaseBusiness, text: 'Covers third-party claims' },
      { icon: UserRoundCheck, text: 'Business protection made stronger' },
    ],
  },

  'Marine Insurance': {
    features: [
      { icon: Anchor, text: 'Protection for goods in transit' },
      { icon: PackageCheck, text: 'Covers cargo and shipment risks' },
      { icon: ShieldCheck, text: 'Safe movement, secure business' },
    ],
  },

  'Package Insurance': {
    features: [
      { icon: PackageCheck, text: 'Multiple covers in one policy' },
      { icon: BriefcaseBusiness, text: 'Convenient business protection' },
      { icon: ShieldCheck, text: 'Complete coverage solution' },
    ],
  },

  "Workmen's Compensation": {
    features: [
      { icon: UserRoundCheck, text: 'Employee injury protection' },
      { icon: ShieldCheck, text: 'Covers workplace accident risks' },
      { icon: BriefcaseBusiness, text: 'Essential cover for employers' },
    ],
  },
  'Child Life Insurance': {
    features: [
      { icon: GraduationCap, text: "Secure your child's education future" },
      { icon: PiggyBank, text: 'Savings-linked long-term wealth creation' },
      { icon: ShieldCheck, text: 'Life cover for financial milestones' },
    ],
  },
  'Group Term Life': {
    features: [
      { icon: Users, text: 'Affordable coverage for groups' },
      { icon: ShieldCheck, text: 'Death benefits for employees' },
      { icon: Building2, text: 'Ideal for organizations and members' },
    ],
  },
  'Guaranteed Income Plan': {
    features: [
      { icon: Wallet, text: 'Assured regular income payouts' },
      { icon: ShieldCheck, text: 'Life cover with maturity benefits' },
      { icon: Target, text: 'Fixed-term financial stability' },
    ],
  },
  'Moneyback Plan': {
    features: [
      { icon: Coins, text: 'Periodic survival payouts during term' },
      { icon: ShieldCheck, text: 'Life protection throughout policy' },
      { icon: Repeat, text: 'Regular liquidity at intervals' },
    ],
  },
  'Pension Plan': {
    features: [
      { icon: PiggyBank, text: 'Build a strong retirement corpus' },
      { icon: Wallet, text: 'Regular pension income post-retirement' },
      { icon: ShieldCheck, text: 'Financial security in golden years' },
    ],
  },
  'Saving Life Insurance': {
    features: [
      { icon: PiggyBank, text: 'Disciplined long-term savings habit' },
      { icon: ShieldCheck, text: 'Life coverage with maturity returns' },
      { icon: Sparkles, text: 'Dual benefit of savings and protection' },
    ],
  },
  'Term Life Insurance': {
    features: [
      { icon: ShieldCheck, text: 'Pure life protection at low premiums' },
      { icon: Target, text: 'High sum assured for nominees' },
      { icon: Wallet, text: 'Affordable financial security' },
    ],
  },
  'Unit Linked Plan': {
    features: [
      { icon: TrendingUp, text: 'Market-linked investment growth' },
      { icon: Layers, text: 'Equity and debt fund options' },
      { icon: ShieldCheck, text: 'Life cover with wealth creation' },
    ],
  },
  'Critical Illness Policy': {
  features: [
    { icon: HeartPulse, text: 'Lump-sum payout on major illness' },
    { icon: ShieldCheck, text: 'Coverage for cancer, stroke, heart attack' },
    { icon: Wallet, text: 'Financial support during treatment' },
  ],
},
'Family Floater Mediclaim': {
  features: [
    { icon: Users, text: 'Single policy for entire family' },
    { icon: ShieldCheck, text: 'Shared sum insured for all members' },
    { icon: Hospital, text: 'Comprehensive hospitalization coverage' },
  ],
},
'Global Healthcare Policy': {
  features: [
    { icon: Globe, text: 'Worldwide medical coverage' },
    { icon: Stethoscope, text: 'Access to international hospitals' },
    { icon: ShieldCheck, text: 'Coverage for surgeries and consultations' },
  ],
},
'Individual Mediclaim Policy': {
  features: [
    { icon: UserCheck, text: 'Personalized health coverage' },
    { icon: Hospital, text: 'Cashless hospitalization benefits' },
    { icon: Wallet, text: 'Medical expense reimbursement' },
  ],
},
'Senior Citizen Policy': {
  features: [
    { icon: HeartHandshake, text: 'Tailored for senior citizens' },
    { icon: ShieldCheck, text: 'Age-specific health benefits' },
    { icon: FileCheck, text: 'Simplified claim processes' },
  ],
},
'Top-Up Policy': {
  features: [
    { icon: Layers, text: 'Additional coverage above base policy' },
    { icon: Wallet, text: 'Affordable premium for extra protection' },
    { icon: ShieldCheck, text: 'Activates after base limit exhausted' },
  ],
},
}

const defaultFeatures = [
  { icon: ShieldCheck, text: 'Comprehensive Premium Protection' },
  { icon: Zap, text: 'Instant Setup & Claims Assistance' },
  { icon: HelpCircle, text: '24/7 Priority Advisor Cover' }
]

export default function InsuranceSection() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')
  const [activeCategory, setActiveCategory] = useState('General Insurance')

  // Sync category with URL search param
  useEffect(() => {
    if (categoryParam) {
      const decodedParam = decodeURIComponent(categoryParam)
      const validCategory = insuranceCategories.find(
        (cat) => cat.name.toLowerCase() === decodedParam.toLowerCase()
      )
      if (validCategory) {
        setActiveCategory(validCategory.name)
      }
    }
  }, [categoryParam])

  // Scroll to top when active category changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any })
  }, [activeCategory])

  const currentCategory = insuranceCategories.find(
    (item) => item.name === activeCategory
  )

  const mappedProducts = currentCategory?.products?.map((product) => ({
    ...product,
    features: productMetaMap[product.title]?.features || defaultFeatures
  })) || []

  return (
    <>
      <InsuranceCategoryNav
        categories={insuranceCategories.map((item) => item.name)}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ProductSection products={mappedProducts} className="mt-10" />
    </>
  )
}
