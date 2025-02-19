'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'
import ProgressBar from '@/components/shared/ProgressBar'
import { useImageLoader } from '@/hooks/useImageLoader'
import { RecentGameCardSkeleton } from './loading'

interface RecentGameProps {
  id: number
  name: string
  image: string
  lastPlayed: string
  progress?: number
  favorite?: boolean
  onClose: () => void
}

export default function RecentGameCard(props: RecentGameProps) {
  const { id, name, image, lastPlayed, progress, favorite, onClose } = props
  const { isLoading, src } = useImageLoader(image)

  if (isLoading) {
    return <RecentGameCardSkeleton />
  }

  return (
    <Link
      href={`/game/${id}`}
      onClick={onClose}
      className="block p-2 rounded-lg hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
      aria-label={`Play ${name}, last played ${lastPlayed}${progress ? `, ${progress}% complete` : ''}`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="relative flex-shrink-0">
          <Image
            src={src}
            alt=""
            width={40}
            height={40}
            className="rounded-lg"
            aria-hidden="true"
          />
          {favorite && (
            <Star
              size={16}
              className="absolute -top-1 -right-1 text-yellow-400 fill-current"
              aria-label="Favorite game"
              role="img"
            />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{name}</p>
          <p className="text-xs text-gray-500">{lastPlayed}</p>
        </div>
      </div>
      {progress !== undefined && (
        <ProgressBar
          value={progress}
          label={`${name} progress`}
          size="sm"
          aria-hidden="true"
        />
      )}
    </Link>
  )
}

export { RecentGameCardSkeleton } 