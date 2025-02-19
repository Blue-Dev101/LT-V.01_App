'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, X, Clock, TrendingUp } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const RECENT_SEARCHES_KEY = 'recent_searches'
const MAX_RECENT_SEARCHES = 5
const TRENDING_SEARCHES = ['Slots', 'Blackjack', 'Roulette', 'Poker']

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem(RECENT_SEARCHES_KEY)
    if (saved) {
      setRecentSearches(JSON.parse(saved))
    }

    // Close suggestions on click outside
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => 
        prev < TRENDING_SEARCHES.length - 1 ? prev + 1 : prev
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => prev > -1 ? prev - 1 : prev)
    } else if (e.key === 'Enter' && selectedIndex > -1) {
      e.preventDefault()
      handleSearch(TRENDING_SEARCHES[selectedIndex])
    }
  }

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setShowSuggestions(false)
      setQuery('')
    }
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem(RECENT_SEARCHES_KEY)
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search games..."
          className="w-full px-4 py-2 pl-10 pr-8 rounded-full border focus:outline-none focus:border-orange-500"
          aria-label="Search games"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {showSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border overflow-hidden">
          <div className="p-3 border-b">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <TrendingUp size={16} />
              <span>Trending Searches</span>
            </div>
            <div className="space-y-1">
              {TRENDING_SEARCHES.map((term, index) => (
                <button
                  key={term}
                  onClick={() => handleSearch(term)}
                  className={`w-full text-left px-3 py-1.5 rounded ${
                    index === selectedIndex
                      ? 'bg-orange-50 text-orange-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <div className="p-3">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>Recent Searches</span>
                </div>
                <button
                  onClick={clearRecentSearches}
                  className="text-xs text-orange-600 hover:text-orange-700"
                >
                  Clear All
                </button>
              </div>
              <div className="space-y-2">
                {recentSearches.map((term) => (
                  <Link
                    key={term}
                    href={`/search?q=${encodeURIComponent(term)}`}
                    className="block px-3 py-1.5 hover:bg-gray-50 rounded"
                  >
                    {term}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
} 