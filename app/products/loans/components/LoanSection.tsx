'use client'

import ProductSection from '../../../../components/ProductSection'
import { loanProducts } from '../loandata'

export default function LoanSection() {
  return <ProductSection products={loanProducts} className="mt-20" />
}
