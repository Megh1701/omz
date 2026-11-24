'use client'

import ProductSection from '../../../../components/ProductSection'
import { fdProducts } from '../data'

export default function FixedDepositsSection() {
  return <ProductSection products={fdProducts} className="mt-8 sm:mt-12 md:mt-20 pb-12 sm:pb-20" />
}
