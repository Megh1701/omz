'use client'

import ProductSection from '../../../../components/ProductSection'
import { stockBrokingProducts } from '../data'

export default function StockbrockingSection() {
  return <ProductSection products={stockBrokingProducts} className="mt-8 sm:mt-12 md:mt-20 pb-12 sm:pb-20" />
}
