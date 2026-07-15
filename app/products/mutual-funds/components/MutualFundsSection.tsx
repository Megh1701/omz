'use client'

import ProductSection from '../../../../components/ProductSection'
import { mutualFundProducts } from '../data'

export default function MutualFundsSection() {
  return <ProductSection products={mutualFundProducts} className="mt-20" />
}
