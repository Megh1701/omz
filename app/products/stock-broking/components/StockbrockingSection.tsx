'use client'

import ProductSection from '../../../../components/ProductSection'
import { stockBrokingProducts } from '../data'

export default function StockbrockingSection() {
  return <ProductSection products={stockBrokingProducts} className="mt-20" />
}
