'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Tooltip } from '@/components/shared/Tooltip'

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
  autoFocus?: boolean
  className?: string
  showClearButton?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'h-9 text-sm',
  md: 'h-11',
  lg: 'h-12 text-lg'
}

export default function SearchBar({
  onSearch,
  placeholder = 'Search...',
  autoFocus = false,
  className = '',
  showClearButton = true,
  size = 'md'
}: SearchBarProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [autoFocus])

  const handleClear = () => {
    setQuery('')
    onSearch('')
    inputRef.current?.focus()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  return (
    <div className={`relative group ${className}`}>
      <Search 
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" 
        size={20} 
      />
      <input
        ref={inputRef}
        type="search"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className={`
          w-full pl-10 pr-4 bg-white border rounded-lg
          focus:outline-none focus:ring-2 focus:ring-orange-500
          placeholder:text-gray-400
          ${sizeClasses[size]}
        `}
      />
      {showClearButton && query && (
        <Tooltip content="Clear search" position="left">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            type="button"
            onClick={handleClear}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <X size={16} />
          </motion.button>
        </Tooltip>
      )}
    </div>
  )
} 