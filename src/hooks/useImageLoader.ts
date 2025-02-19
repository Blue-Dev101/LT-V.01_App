'use client'

import { useState, useEffect } from 'react'
import { IMAGES } from '@/constants/images'

interface UseImageLoaderResult {
  isLoading: boolean
  hasError: boolean
  src: string
}

export function useImageLoader(
  imageSrc: string, 
  fallbackSrc: string = IMAGES.FALLBACK.GAME
): UseImageLoaderResult {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = imageSrc

    img.onload = () => {
      setIsLoading(false)
      setHasError(false)
    }

    img.onerror = () => {
      setIsLoading(false)
      setHasError(true)
    }

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [imageSrc])

  return {
    isLoading,
    hasError,
    src: hasError ? fallbackSrc : imageSrc
  }
} 