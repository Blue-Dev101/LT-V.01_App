'use client'

import { useState } from 'react'
import GameCard from '../../components/features/GameCard'
import { Gamepad2, Trophy } from 'lucide-react'

const DIFFICULTY_LEVELS = ['All Levels', 'Casual', 'Medium', 'Expert']

export default function ArcadeGames() {
  const [activeDifficulty, setActiveDifficulty] = useState('All Levels')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Gamepad2 className="text-orange-600" size={24} />
          <h1 className="text-2xl font-bold">Arcade Games</h1>
        </div>
        <div className="flex items-center gap-2 text-yellow-600">
          <Trophy size={20} />
          <span className="text-sm font-medium">Leaderboard</span>
        </div>
      </div>

      {/* Difficulty Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {DIFFICULTY_LEVELS.map((level) => (
          <button
            key={level}
            onClick={() => setActiveDifficulty(level)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              activeDifficulty === level
                ? 'bg-orange-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <GameCard
            key={i}
            title={`Arcade Game ${i}`}
            imageUrl={`https://picsum.photos/400/300?random=${i + 40}`}
            category="Arcade"
            players={Math.floor(Math.random() * 300)}
          />
        ))}
      </div>
    </div>
  )
} 
