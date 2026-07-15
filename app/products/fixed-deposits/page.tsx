import type { Metadata } from "next"
import { Suspense } from 'react'
import FixedDepositsSection from './components/FixedDepositsSection'


export default function FixedDepositsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Suspense fallback={
        <div className="flex min-h-screen items-center justify-center bg-black text-white">
          <div className="text-sm font-light tracking-widest uppercase animate-pulse">Loading Fixed Deposits...</div>
        </div>
      }>
        <FixedDepositsSection />
      </Suspense>
    </main>
  )
}
