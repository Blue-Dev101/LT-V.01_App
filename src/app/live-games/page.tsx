'use client'

import GameCard from '@/components/features/GameCard'
import { Users } from 'lucide-react'

export default function LiveGames() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Live Games</h1>
          <p className="text-gray-600 flex items-center gap-2">
            <Users size={20} />
            <span>1,234 players online</span>
          </p>
        </div>
      </div>

      {/* Live Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <GameCard
            key={i}
            title={`Live Table ${i}`}
            imageUrl={`https://picsum.photos/400/300?random=${i + 20}`}
            category="Live Casino"
            players={Math.floor(Math.random() * 100)}
            isLive={true}
          />
        ))}
      </div>
    </div>
  )
} 