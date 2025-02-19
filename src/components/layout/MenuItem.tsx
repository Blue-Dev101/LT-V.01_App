'use client'

import { memo } from 'react'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { Badge } from '../shared/Badge'
import Tooltip from '@/components/shared/Tooltip'

interface MenuItemProps {
  href: string
  label: string
  icon?: LucideIcon
  notifications?: number
  isNew?: boolean
  isActive: boolean
  onClose: () => void
  role?: string
}

export default memo(function MenuItem({ 
  href, 
  label, 
  icon: Icon, 
  notifications, 
  isNew, 
  isActive,
  onClose 
}: MenuItemProps) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className={`group flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
        isActive ? 'text-orange-600' : 'text-gray-600'
      }`}
      role="menuitem"
      tabIndex={0}
    >
      <div className="flex-1 flex items-center gap-2">
        {Icon && <Icon size={20} />}
        <span>{label}</span>
      </div>
      {notifications && (
        <Tooltip content={`${notifications} new updates`} position="left">
          <Badge
            variant="info"
            className="bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors"
          >
            {notifications}
          </Badge>
        </Tooltip>
      )}
      {isNew && (
        <Tooltip content="Recently added" position="left">
          <Badge
            variant="success"
            className="bg-green-100 text-green-600"
          >
            NEW
          </Badge>
        </Tooltip>
      )}
    </Link>
  )
}) 