'use client'

import { useState } from 'react'
import SearchBar from '@/components/features/SearchBar'
import GameCard from '@/components/features/GameCard'
import { useSearchParams } from 'next/navigation'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Search Games</h1>
      <SearchBar />
      
      {query && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Placeholder search results */}
          {[1, 2, 3, 4].map((i) => (
            <GameCard
              key={i}
              title={`Search Result ${i}`}
              imageUrl={`https://picsum.photos/400/300?random=${i + 90}`}
              category="Search Result"
              players={Math.floor(Math.random() * 200)}
            />
          ))}
        </div>
      )}
    </div>
  )
} 