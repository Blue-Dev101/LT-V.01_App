'use client'

import Skeleton from '@/components/shared/Skeleton'

export default function MenuSkeleton() {
  return (
    <div className="space-y-8">
      {/* Header Skeleton */}
      <div className="flex items-center gap-2">
        <Skeleton variant="circular" width={24} height={24} />
        <Skeleton width={192} height={32} />
      </div>

      {/* Featured Games Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div key={i} className="space-y-4">
            <Skeleton variant="rectangular" className="aspect-video" />
            <div className="space-y-2 px-4">
              <Skeleton width={160} height={24} />
              <Skeleton width={120} height={16} />
            </div>
          </div>
        ))}
      </div>

      {/* Game Cards Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-3">
            <Skeleton variant="rectangular" className="aspect-video" />
            <div className="space-y-2 px-4">
              <Skeleton width={140} height={20} />
              <Skeleton width={100} height={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 