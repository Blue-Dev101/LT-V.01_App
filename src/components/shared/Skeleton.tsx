'use client'

interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string | number
  height?: string | number
  className?: string
  animate?: boolean
}

export default function Skeleton({
  variant = 'text',
  width,
  height,
  className = '',
  animate = true
}: SkeletonProps) {
  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg'
  }

  const styles = {
    width: width || (variant === 'text' ? '100%' : undefined),
    height: height || (variant === 'text' ? '1em' : undefined)
  }

  return (
    <div
      className={`
        bg-gray-200
        ${variantClasses[variant]}
        ${animate ? 'animate-pulse' : ''}
        ${className}
      `}
      style={styles}
    />
  )
} 