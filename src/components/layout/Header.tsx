'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Search, Bell } from 'lucide-react'
import MobileMenu from './MobileMenu'
import NotificationBadge from '@/components/shared/NotificationBadge'
import Tooltip from '@/components/shared/Tooltip'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasNotifications] = useState(true)

  return (
    <header className="sticky top-0 z-30 w-full bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="LottoStar Games"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Tooltip content="Search games">
              <Link 
                href="/search"
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Link>
            </Tooltip>

            <Tooltip content={hasNotifications ? 'New notifications' : 'No notifications'}>
              <button
                type="button"
                className="relative text-gray-600 hover:text-orange-600 transition-colors"
              >
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
                {hasNotifications && <NotificationBadge />}
              </button>
            </Tooltip>
          </nav>

          {/* Mobile Menu Button */}
          <Tooltip content="Open menu" position="bottom">
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 -mr-2 text-gray-600 hover:text-orange-600 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </Tooltip>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </header>
  )
} 