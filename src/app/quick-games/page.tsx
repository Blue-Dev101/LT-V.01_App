'use client'

import QuickPlayCard from '@/components/features/QuickPlayCard'
import { Lightning, Clock } from 'lucide-react'

export default function QuickGames() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Lightning className="text-orange-600" size={24} />
          <h1 className="text-2xl font-bold">Quick Games</h1>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <Clock size={16} />
          <span className="text-sm">Fast-paced games under 5 minutes</span>
        </div>
      </div>

      {/* Quick Games Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <QuickPlayCard
            key={i}
            title={`Quick Game ${i}`}
            imageUrl={`https://picsum.photos/300/200?random=${i + 50}`}
            duration="2 min"
            minBet={1}
            maxWin={i * 100}
          />
        ))}
      </div>
    </div>
  )
} 