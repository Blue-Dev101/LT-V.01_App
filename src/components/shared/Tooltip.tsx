'use client'

import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  position?: 'top' | 'right' | 'bottom' | 'left'
  delay?: number
  className?: string
}

const positionClasses = {
  top: '-top-2 left-1/2 -translate-x-1/2 -translate-y-full',
  right: 'top-1/2 -right-2 translate-x-full -translate-y-1/2',
  bottom: '-bottom-2 left-1/2 -translate-x-1/2 translate-y-full',
  left: 'top-1/2 -left-2 -translate-x-full -translate-y-1/2'
}

const arrowClasses = {
  top: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45',
  right: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45',
  bottom: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45',
  left: 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rotate-45'
}

export default function Tooltip({
  content,
  children,
  position = 'top',
  delay = 300,
  className = ''
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true)
    }, delay)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsVisible(false)
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className={`
              absolute z-50 px-2 py-1 text-sm text-white bg-gray-900 
              rounded shadow-lg whitespace-nowrap pointer-events-none
              ${positionClasses[position]} ${className}
            `}
          >
            {content}
            <div 
              className={`
                absolute w-2 h-2 bg-gray-900
                ${arrowClasses[position]}
              `} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 