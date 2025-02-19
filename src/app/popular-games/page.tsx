'use client'

import { useState } from 'react'
import GameCard from '@/components/features/GameCard'
import { Filter } from 'lucide-react'

const CATEGORIES = ['All', 'Slots', 'Table Games', 'Live Casino', 'Instant Win']

export default function PopularGames() {
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Popular Games</h1>
        <button className="flex items-center gap-2 text-gray-600 hover:text-orange-600">
          <Filter size={20} />
          Filters
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              activeCategory === category
                ? 'bg-orange-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <GameCard
            key={i}
            title={`Popular Game ${i}`}
            imageUrl={`https://picsum.photos/400/300?random=${i}`}
            category="Slots"
            players={Math.floor(Math.random() * 1000)}
          />
        ))}
      </div>
    </div>
  )
} 