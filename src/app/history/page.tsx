'use client'

import GameCard from '@/components/features/GameCard'
import { Clock } from 'lucide-react'

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Clock className="text-orange-600" size={24} />
        <h1 className="text-2xl font-bold">Game History</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <GameCard
            key={i}
            title={`Recent Game ${i}`}
            imageUrl={`https://picsum.photos/400/300?random=${i + 80}`}
            category="Recently Played"
            players={Math.floor(Math.random() * 300)}
          />
        ))}
      </div>
    </div>
  )
} 