'use client'

import ProductSection from '../../../../components/ProductSection'
import { loanProducts } from '../loandata'

export default function LoanSection() {
  return <ProductSection products={loanProducts} className="mt-8 sm:mt-12 md:mt-20 pb-12 sm:pb-20" />
}
