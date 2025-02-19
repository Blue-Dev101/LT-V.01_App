'use client'

import { useState } from 'react'
import GameCard from '@/components/features/GameCard'
import { Sparkles, DollarSign, SlidersHorizontal } from 'lucide-react'

const JACKPOT_CATEGORIES = ['All Slots', 'Progressive', 'Fixed', 'Multi-Level']

export default function RealReels() {
  const [activeCategory, setActiveCategory] = useState('All Slots')
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="text-orange-600" size={24} />
          <h1 className="text-2xl font-bold">Real Reels</h1>
        </div>
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-gray-600 hover:text-orange-600"
        >
          <SlidersHorizontal size={20} />
          <span className="hidden md:inline">Filters</span>
        </button>
      </div>

      {/* Jackpot Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[
          { title: 'Mega Jackpot', amount: '1,234,567' },
          { title: 'Major Jackpot', amount: '234,567' },
          { title: 'Mini Jackpot', amount: '34,567' }
        ].map((jackpot) => (
          <div 
            key={jackpot.title}
            className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-4 text-white"
          >
            <h3 className="text-sm mb-1">{jackpot.title}</h3>
            <div className="flex items-center gap-1 text-xl font-bold">
              <DollarSign size={20} />
              {jackpot.amount}
            </div>
          </div>
        ))}
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {JACKPOT_CATEGORIES.map((category) => (
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

      {/* Slots Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <GameCard
            key={i}
            title={`Slot Game ${i}`}
            imageUrl={`https://picsum.photos/400/300?random=${i + 60}`}
            category="Slots"
            players={Math.floor(Math.random() * 800)}
          />
        ))}
      </div>
    </div>
  )
} 