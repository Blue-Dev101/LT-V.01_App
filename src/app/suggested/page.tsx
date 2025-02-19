'use client'

import { useState } from 'react'
import GameCard from '@/components/features/GameCard'
import { Sparkles, Brain, Zap, Settings } from 'lucide-react'

interface PreferenceOption {
  id: string
  label: string
  options: string[]
}

const PREFERENCES: PreferenceOption[] = [
  {
    id: 'gameStyle',
    label: 'Game Style',
    options: ['Action', 'Strategy', 'Casual', 'Adventure']
  },
  {
    id: 'difficulty',
    label: 'Difficulty',
    options: ['Easy', 'Medium', 'Hard', 'Expert']
  },
  {
    id: 'duration',
    label: 'Game Duration',
    options: ['Quick', 'Medium', 'Long']
  }
]

export default function Suggested() {
  const [showPreferences, setShowPreferences] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="text-orange-600" size={24} />
          <h1 className="text-2xl font-bold">AI Suggested Games</h1>
        </div>
        <button
          onClick={() => setShowPreferences(!showPreferences)}
          className="flex items-center gap-2 text-gray-600 hover:text-orange-600"
          aria-label="Customize preferences"
        >
          <Settings size={20} />
          <span className="hidden md:inline">Preferences</span>
        </button>
      </div>

      {showPreferences && (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Customize Your Preferences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PREFERENCES.map((pref) => (
              <div key={pref.id}>
                <label 
                  htmlFor={pref.id}
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {pref.label}
                </label>
                <select 
                  id={pref.id}
                  name={pref.id}
                  className="w-full border rounded-lg p-2"
                  aria-label={`Select ${pref.label}`}
                >
                  {pref.options.map((option) => (
                    <option key={option} value={option.toLowerCase()}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-end">
            <button className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700">
              Update Preferences
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <GameCard
            key={i}
            title={`Suggested Game ${i}`}
            imageUrl={`https://picsum.photos/400/300?random=${i + 80}`}
            category="AI Recommended"
            players={Math.floor(Math.random() * 400)}
          />
        ))}
      </div>
    </div>
  )
} 