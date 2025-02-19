'use client'

import FeaturedGame from '@/components/features/FeaturedGame'
import GameCard from '@/components/features/GameCard'
import { Crown } from 'lucide-react'

export default function LottoStarPicks() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2 mb-6">
        <Crown className="text-orange-600" size={24} />
        <h1 className="text-2xl font-bold">LottoStar Picks</h1>
      </div>

      {/* Featured Games */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeaturedGame
          title="Golden Fortune"
          imageUrl="https://picsum.photos/800/600?random=1"
          description="Experience the thrill of ancient treasures and massive jackpots in this epic adventure."
          rating={4.5}
          trending={true}
        />
        <FeaturedGame
          title="Crystal Dreams"
          imageUrl="https://picsum.photos/800/600?random=2"
          description="Enter a magical world of sparkling gems and enchanted wins."
          rating={4.8}
        />
      </div>

      {/* Staff Picks */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Staff Picks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <GameCard
              key={i}
              title={`Staff Pick ${i}`}
              imageUrl={`https://picsum.photos/400/300?random=${i + 30}`}
              category="Featured"
              players={Math.floor(Math.random() * 500)}
            />
          ))}
        </div>
      </section>
    </div>
  )
} 