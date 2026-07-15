
import { Suspense } from 'react'
import StockbrockingSection from './components/StockbrockingSection'


export default function StockbrockingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Suspense fallback={
        <div className="flex min-h-screen items-center justify-center bg-black text-white">
          <div className="text-sm font-light tracking-widest uppercase animate-pulse">Loading Stock Broking...</div>
        </div>
      }>
        <StockbrockingSection />
      </Suspense>
    </main>
  )
}
