'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface NotificationBadgeProps {
  count?: number
  pulse?: boolean
  color?: 'red' | 'orange' | 'green'
  size?: 'sm' | 'md'
}

const colorClasses = {
  red: 'bg-red-600',
  orange: 'bg-orange-600',
  green: 'bg-green-600'
}

const sizeClasses = {
  sm: 'h-2 w-2',
  md: 'h-5 w-5 text-xs'
}

export default function NotificationBadge({ 
  count, 
  pulse = false,
  color = 'orange',
  size = 'sm'
}: NotificationBadgeProps) {
  return (
    <AnimatePresence>
      {(count !== undefined ? count > 0 : true) && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className={`absolute -top-1 -right-1 flex items-center justify-center rounded-full text-white
            ${colorClasses[color]} ${sizeClasses[size]}
            ${pulse ? 'animate-pulse' : ''}
          `}
        >
          {count !== undefined && count > 0 && size === 'md' && count}
        </motion.span>
      )}
    </AnimatePresence>
  )
} 