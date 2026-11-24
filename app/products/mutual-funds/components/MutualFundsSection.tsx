'use client'

import ProductSection from '../../../../components/ProductSection'
import { mutualFundProducts } from '../data'

export default function MutualFundsSection() {
  return <ProductSection products={mutualFundProducts} className="mt-8 sm:mt-12 md:mt-20 pb-12 sm:pb-20" />
}
