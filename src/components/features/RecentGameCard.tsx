'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Star } from 'lucide-react'
import ProgressBar from '@/components/shared/ProgressBar'
import Card from '@/components/shared/Card'
import Tooltip from '@/components/shared/Tooltip'

interface RecentGameCardProps {
  id: number
  name: string
  image: string
  lastPlayed: string
  progress?: number
  favorite?: boolean
  onClose?: () => void
}

export default function RecentGameCard({
  id,
  name,
  image,
  lastPlayed,
  progress = 0,
  favorite = false,
  onClose
}: RecentGameCardProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Link
      href={`/game/${id}`}
      onClick={onClose}
    >
      <Card
        variant="hover"
        padding="sm"
        className="group"
      >
        <div className="flex gap-3">
          <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={image}
              alt={name}
              fill
              className={`object-cover transition-opacity duration-300 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoadingComplete={() => setIsLoading(false)}
            />
            {isLoading && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <h3 className="font-medium text-gray-900 truncate group-hover:text-orange-600 transition-colors">
                  {name}
                </h3>
                <Tooltip content={`Last played ${lastPlayed}`}>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock size={14} />
                    <span>{lastPlayed}</span>
                  </div>
                </Tooltip>
              </div>
              {favorite && (
                <Tooltip content="Favorite game">
                  <Star 
                    size={16} 
                    className="text-yellow-400 flex-shrink-0" 
                    fill="currentColor" 
                  />
                </Tooltip>
              )}
            </div>

            {/* Progress Bar */}
            {progress > 0 && (
              <div className="mt-2">
                <Tooltip content={`Game progress: ${progress}% complete`}>
                  <div>
                    <ProgressBar
                      value={progress}
                      size="sm"
                      showLabel={false}
                      color={favorite ? 'bg-yellow-400' : 'bg-orange-600'}
                    />
                  </div>
                </Tooltip>
              </div>
            )}
          </div>
        </div>
      </Card>
    </Link>
  )
} 