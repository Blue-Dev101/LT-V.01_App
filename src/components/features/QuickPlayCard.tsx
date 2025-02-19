'use client'

import Image from 'next/image'
import { Clock, Coins, Play } from 'lucide-react'

interface QuickPlayCardProps {
  title: string
  imageUrl: string
  duration: string
  minBet: number
  maxWin: number
}

export default function QuickPlayCard({ title, imageUrl, duration, minBet, maxWin }: QuickPlayCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-32">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-2 left-2 flex items-center gap-1 text-white text-sm">
          <Clock size={14} />
          <span>{duration}</span>
        </div>
      </div>
      <div className="p-3">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold">{title}</h3>
          <button 
            className="bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700"
            aria-label={`Play ${title}`}
          >
            <Play size={16} />
          </button>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Coins size={14} />
            <span>Min: ${minBet}</span>
          </div>
          <div>Max Win: ${maxWin}</div>
        </div>
      </div>
    </div>
  )
} 