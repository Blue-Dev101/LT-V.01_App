'use client'

import Tooltip from '@/components/shared/Tooltip'

interface ProgressBarProps {
  value: number
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  label?: string
  color?: string
}

export default function ProgressBar({
  value,
  size = 'md',
  showLabel = true,
  label,
  color = 'bg-orange-600'
}: ProgressBarProps) {
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  }

  return (
    <Tooltip content={`${value}% complete`}>
      <div className="w-full">
        <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${sizeClasses[size]}`}>
          <div
            className={`${color} transition-all duration-500 ease-out rounded-full ${sizeClasses[size]}`}
            style={{ width: `${value}%` }}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={label}
          />
        </div>
        {showLabel && (
          <span className="text-sm text-gray-600 mt-1">
            {value}%
          </span>
        )}
      </div>
    </Tooltip>
  )
} 