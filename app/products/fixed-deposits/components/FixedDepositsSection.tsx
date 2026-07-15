'use client'

import ProductSection from '../../../../components/ProductSection'
import { fdProducts } from '../data'

export default function FixedDepositsSection() {
  return <ProductSection products={fdProducts} className="mt-20" />
}
