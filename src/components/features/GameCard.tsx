'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Users, Star } from 'lucide-react'
import Card from '@/components/shared/Card'
import Badge from '@/components/shared/Badge'
import Tooltip from '@/components/shared/Tooltip'

interface GameCardProps {
  title: string
  imageUrl: string
  category: string
  players: number
  isLive?: boolean
  rating?: number
}

export default function GameCard({ 
  title, 
  imageUrl, 
  category, 
  players, 
  isLive,
  rating 
}: GameCardProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      variant="interactive"
      padding="none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={`object-cover transition-all duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${isHovered ? 'scale-110' : 'scale-100'}`}
          onLoadingComplete={() => setIsLoading(false)}
        />
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        {isLive && (
          <Tooltip content="Live game in progress" position="bottom">
            <Badge
              variant="error"
              className="absolute top-2 left-2"
              pulse
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              LIVE
            </Badge>
          </Tooltip>
        )}
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{category}</span>
          <Tooltip content={`${players.toLocaleString()} active players`}>
            <div className="flex items-center gap-1">
              <Users size={16} />
              <span>{players.toLocaleString()}</span>
            </div>
          </Tooltip>
        </div>

        {rating && (
          <Tooltip content={`Rated ${rating.toFixed(1)} out of 5`}>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star size={16} fill="currentColor" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          </Tooltip>
        )}
      </div>
    </Card>
  )
} 