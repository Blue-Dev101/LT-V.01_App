'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCcw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <AlertTriangle className="mx-auto text-orange-600" size={48} />
        <h2 className="text-xl font-semibold text-gray-900">Something went wrong!</h2>
        <p className="text-gray-600">We apologize for the inconvenience</p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors"
        >
          <RefreshCcw size={20} />
          <span>Try again</span>
        </button>
      </div>
    </div>
  )
} 