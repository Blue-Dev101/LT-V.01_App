'use client'

import { useEffect } from 'react'
import { AlertCircle } from 'lucide-react'

export default function SearchError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <AlertCircle className="text-red-500 w-12 h-12 mb-4" />
      <h2 className="text-xl font-semibold mb-2">Something went wrong!</h2>
      <p className="text-gray-600 mb-4">
        {error.message || 'An error occurred while searching for games.'}
      </p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700"
      >
        Try again
      </button>
    </div>
  )
} 