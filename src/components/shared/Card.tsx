'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'hover' | 'interactive'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  shadow?: 'none' | 'sm' | 'md'
  border?: boolean
  animate?: boolean
}

const paddingClasses = {
  none: 'p-0',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6'
}

const shadowClasses = {
  none: '',
  sm: 'shadow-sm',
  md: 'shadow'
}

const variantClasses = {
  default: 'bg-white',
  hover: 'bg-white hover:shadow-md transition-shadow',
  interactive: 'bg-white hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer'
}

const Card = forwardRef<HTMLDivElement, CardProps>(({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  shadow = 'sm',
  border = true,
  animate = false,
  ...props
}, ref) => {
  const Component = animate ? motion.div : 'div'

  return (
    <Component
      ref={ref}
      className={`
        rounded-lg overflow-hidden
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${shadowClasses[shadow]}
        ${border ? 'border' : ''}
        ${className}
      `}
      {...(animate && {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 }
      })}
      {...props}
    >
      {children}
    </Component>
  )
})

Card.displayName = 'Card'

export default Card 