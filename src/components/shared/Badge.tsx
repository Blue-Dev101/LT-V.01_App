'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md'
  icon?: LucideIcon
  animate?: boolean
  pulse?: boolean
}

const variantClasses = {
  default: 'bg-gray-100 text-gray-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
  info: 'bg-blue-100 text-blue-800'
}

const sizeClasses = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-1'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(({
  children,
  className = '',
  variant = 'default',
  size = 'sm',
  icon: Icon,
  animate = false,
  pulse = false,
  ...props
}, ref) => {
  const Component = animate ? motion.span : 'span'

  return (
    <Component
      ref={ref}
      className={`
        inline-flex items-center gap-1 font-medium rounded-full
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${pulse ? 'animate-pulse' : ''}
        ${className}
      `}
      {...(animate && {
        initial: { scale: 0 },
        animate: { scale: 1 },
        exit: { scale: 0 }
      })}
      {...props}
    >
      {Icon && <Icon size={size === 'sm' ? 12 : 14} />}
      {children}
    </Component>
  )
})

Badge.displayName = 'Badge'

export default Badge 