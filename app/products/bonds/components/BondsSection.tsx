'use client'

import ProductSection from '../../../../components/ProductSection'
import { bondsProducts } from '../data'

export default function BondsSection() {
  return <ProductSection products={bondsProducts} className="mt-8 sm:mt-12 md:mt-20 pb-12 sm:pb-20" />
}
