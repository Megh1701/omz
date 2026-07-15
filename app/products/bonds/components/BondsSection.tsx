'use client'

import ProductSection from '../../../../components/ProductSection'
import { bondsProducts } from '../data'

export default function BondsSection() {
  return <ProductSection products={bondsProducts} className="mt-20" />
}
