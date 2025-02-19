'use client'

import { useState } from 'react'
import GameCard from '@/components/features/GameCard'
import { Heart, ThumbsUp, History } from 'lucide-react'

const SECTIONS = [
  { id: 'favorites', title: 'Based on Your Favorites', icon: Heart },
  { id: 'similar', title: 'Similar to What You Like', icon: ThumbsUp },
  { id: 'history', title: 'Continue Playing', icon: History },
]

export default function JustForYou() {
  return (
    <div className="space-y-12">
      <div className="flex items-center gap-2">
        <Heart className="text-orange-600" size={24} />
        <h1 className="text-2xl font-bold">Just For You</h1>
      </div>

      {SECTIONS.map((section) => (
        <section key={section.id} className="space-y-4">
          <div className="flex items-center gap-2">
            <section.icon className="text-orange-600" size={20} />
            <h2 className="text-xl font-semibold">{section.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <GameCard
                key={i}
                title={`Recommended Game ${i}`}
                imageUrl={`https://picsum.photos/400/300?random=${i + 70}`}
                category={section.id === 'history' ? 'Recently Played' : 'Recommended'}
                players={Math.floor(Math.random() * 600)}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
} 