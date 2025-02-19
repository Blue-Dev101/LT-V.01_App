'use client'

export default function RecentGameCardSkeleton() {
  return (
    <div className="p-2 rounded-lg animate-pulse">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-gray-200 rounded-lg flex-shrink-0" />
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
        </div>
      </div>
      <div className="h-1.5 bg-gray-200 rounded-full w-full" />
    </div>
  )
} 