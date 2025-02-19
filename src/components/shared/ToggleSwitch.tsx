'use client'
'use client'
import type { ReactNode } from 'react'
import { Switch } from '@headlessui/react'
import Tooltip from '@/components/shared/Tooltip'

interface ToggleSwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: ReactNode
  description?: string
  icon?: ReactNode
  disabled?: boolean
}

export default function ToggleSwitch({
  checked,
  onChange,
  label,
  description,
  icon,
  disabled = false
}: ToggleSwitchProps) {
  return (
    <Switch.Group>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <div>
            <Switch.Label className="text-sm font-medium text-gray-900">
              {label}
            </Switch.Label>
            {description && (
              <Switch.Description className="text-sm text-gray-500">
                {description}
              </Switch.Description>
            )}
          </div>
        </div>
        <Tooltip 
          content={`Click to ${checked ? 'disable' : 'enable'} ${typeof label === 'string' ? label.toLowerCase() : ''}`}
          position="left"
        >
          <Switch
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className={`
              relative inline-flex h-6 w-11 items-center rounded-full
              transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
              ${checked ? 'bg-orange-600' : 'bg-gray-200'}
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <span
              className={`
                inline-block h-4 w-4 rounded-full bg-white transition-transform
                ${checked ? 'translate-x-6' : 'translate-x-1'}
              `}
            />
          </Switch>
        </Tooltip>
      </div>
    </Switch.Group>
  )
} 