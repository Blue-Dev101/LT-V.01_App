'use client'

import { useEffect, useRef, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

interface SwipeState {
  startX: number
  currentX: number
  isDragging: boolean
}

export function useSwipeClose(isOpen: boolean, onClose: () => void) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [swipe, setSwipe] = useState<SwipeState>({
    startX: 0,
    currentX: 0,
    isDragging: false,
  })

  // Spring animation for smooth transitions
  const [{ x }, api] = useSpring(() => ({
    x: 0,
    config: { tension: 300, friction: 30 },
  }))

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      setSwipe({
        startX: touch.clientX,
        currentX: touch.clientX,
        isDragging: true,
      })
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!swipe.isDragging) return

      const touch = e.touches[0]
      const deltaX = Math.max(0, touch.clientX - swipe.startX)
      
      setSwipe(prev => ({
        ...prev,
        currentX: touch.clientX,
      }))

      // Animate with spring physics
      api.start({ x: deltaX, immediate: true })
    }

    const handleTouchEnd = () => {
      if (!swipe.isDragging) return

      const deltaX = swipe.currentX - swipe.startX
      const threshold = window.innerWidth * 0.3

      if (deltaX > threshold) {
        // Animate out before closing
        api.start({
          x: window.innerWidth,
          onRest: onClose,
        })
      } else {
        // Animate back to start
        api.start({ x: 0 })
      }

      setSwipe({
        startX: 0,
        currentX: 0,
        isDragging: false,
      })
    }

    container.addEventListener('touchstart', handleTouchStart)
    container.addEventListener('touchmove', handleTouchMove)
    container.addEventListener('touchend', handleTouchEnd)

    return () => {
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
    }
  }, [swipe.isDragging, onClose, api])

  return { containerRef, x }
} 