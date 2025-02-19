'use client'

import { forwardRef } from 'react'
import type { LucideIcon } from 'lucide-react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: LucideIcon
  error?: string
  hint?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  icon: Icon,
  error,
  hint,
  id,
  className = '',
  ...props
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={id}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
            size={20} 
          />
        )}
        <input
          ref={ref}
          id={id}
          className={`
            w-full px-4 py-2 border rounded-lg
            ${Icon ? 'pl-10' : ''}
            ${error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-orange-500'}
            focus:outline-none focus:ring-2
            disabled:opacity-50 disabled:cursor-not-allowed
            ${className}
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${id}-error` : hint ? `${id}-hint` : undefined
          }
          {...props}
        />
      </div>
      {(error || hint) && (
        <p
          id={`${id}-${error ? 'error' : 'hint'}`}
          className={`text-sm ${
            error ? 'text-red-600' : 'text-gray-500'
          }`}
        >
          {error || hint}
        </p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input 