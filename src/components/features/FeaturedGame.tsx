'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, TrendingUp } from 'lucide-react'
import Card from '@/components/shared/Card'
import Badge from '@/components/shared/Badge'
import Tooltip from '@/components/shared/Tooltip'

interface FeaturedGameProps {
  title: string
  imageUrl: string
  description: string
  rating: number
  trending?: boolean
}

export default function FeaturedGame({ title, imageUrl, description, rating, trending }: FeaturedGameProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Card
      variant="interactive"
      padding="none"
      border={false}
      className="bg-gray-900"
    >
      <div className="aspect-video relative">
        <Image
          src={imageUrl}
          alt={title}
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
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      
      <div className="absolute bottom-0 p-6 space-y-2">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          {trending && (
            <Tooltip content="Currently trending" position="right">
              <Badge
                variant="warning"
                icon={TrendingUp}
                className="text-orange-600 bg-orange-100"
              >
                Trending
              </Badge>
            </Tooltip>
          )}
        </div>
        
        <p className="text-gray-200 line-clamp-2">{description}</p>
        
        <Tooltip content={`Rating: ${rating.toFixed(1)} / 5`}>
          <div className="flex items-center gap-1 text-yellow-400">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </Tooltip>
      </div>
    </Card>
  )
} 