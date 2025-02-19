'use client'

import { type ReactNode, type KeyboardEvent } from 'react'

import { useState } from 'react'
import { 
  X, Home, Search, User, LogIn, Clock, Star, 
  Settings, Moon, Sun, Bell, ChevronRight 
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ToggleSwitch from '@/components/shared/ToggleSwitch'
import ProgressBar from '@/components/shared/ProgressBar'
import MenuItem from '@/components/layout/MenuItem'
import RecentGameCard from '@/components/features/RecentGameCard'
import type { LucideIcon } from 'lucide-react'
import Button from '@/components/shared/Button'
import AuthDialog from '@/components/auth/AuthDialog'
import SearchBar from '@/components/shared/SearchBar'
import Tooltip from '@/components/shared/Tooltip'

interface MenuContentProps {
  onClose: () => void
  pathname: string
}

interface MenuItem {
  href: string
  label: string
  icon?: LucideIcon
  notifications?: number
  isNew?: boolean
}

const menuItems: MenuItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/popular-games', label: 'Popular Games', notifications: 3 },
  { href: '/lottostar-picks', label: 'LottoStar Picks', isNew: true },
  { href: '/just-for-you', label: 'Just For You' },
  { href: '/real-reels', label: 'Real Reels' },
  { href: '/live-games', label: 'Live Games', notifications: 1 },
  { href: '/suggested', label: 'Suggested' },
  { href: '/arcade-games', label: 'Arcade Games' },
  { href: '/quick-games', label: 'Quick Games' },
]

interface RecentGame {
  id: number
  name: string
  image: string
  lastPlayed: string
  progress?: number
  favorite?: boolean
}

const recentGames: RecentGame[] = [
  { 
    id: 1, 
    name: 'Golden Fortune', 
    image: 'https://picsum.photos/100/100?random=1', 
    lastPlayed: '2h ago',
    progress: 75,
    favorite: true
  },
  { 
    id: 2, 
    name: 'Crystal Dreams', 
    image: 'https://picsum.photos/100/100?random=2', 
    lastPlayed: '5h ago',
    progress: 30
  },
]

export default function MenuContent({ onClose, pathname }: MenuContentProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [showPreferences, setShowPreferences] = useState(false)
  const [authDialog, setAuthDialog] = useState<'login' | 'register' | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    // TODO: Implement search logic
  }

  return (
    <>
      <div 
        className="flex flex-col h-full"
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-label="Menu"
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button 
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b">
          <SearchBar
            onSearch={handleSearch}
            placeholder="Search games..."
            autoFocus
            size="lg"
          />
        </div>

        {/* User Preferences */}
        <div className="p-4 border-b">
          <button
            type="button"
            onClick={() => setShowPreferences(!showPreferences)}
            className="flex items-center justify-between w-full text-gray-600 hover:text-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-lg p-2"
            aria-expanded="false"
          >
            <div className="flex items-center gap-2">
              <Settings size={20} />
              <span>Preferences</span>
            </div>
            <ChevronRight
              size={20}
              className={`transform transition-transform ${showPreferences ? 'rotate-90' : ''}`}
            />
          </button>

          {showPreferences && (
            <div className="mt-3 space-y-3">
              <ToggleSwitch
                checked={isDarkMode}
                onChange={setIsDarkMode}
                label="Dark Mode"
                icon={isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
                description="Switch between light and dark theme"
              />
              <ToggleSwitch
                checked={notifications}
                onChange={setNotifications}
                label="Notifications"
                icon={<Bell size={16} />}
                description="Receive game updates and promotions"
              />
            </div>
          )}
        </div>

        {/* Recently Played with Progress Bars */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between text-gray-600 mb-3">
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span className="text-sm font-medium">Recently Played</span>
            </div>
            <Link 
              href="/history"
              className="text-xs text-orange-600 hover:text-orange-700"
              onClick={onClose}
            >
              View All
            </Link>
          </div>
          <div className="space-y-3">
            {recentGames.map((game) => (
              <RecentGameCard
                key={game.id}
                {...game}
                onClose={onClose}
              />
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-2" role="navigation">
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                {...item}
                isActive={pathname === item.href}
                onClose={onClose}
                role="menuitem"
              />
            ))}
          </div>
        </nav>

        {/* Auth Buttons */}
        <div className="p-4 border-t bg-white">
          <div className="space-y-2">
            <Button
              variant="outline"
              icon={LogIn}
              fullWidth
              onClick={() => setAuthDialog('login')}
            >
              Login
            </Button>
            <Button
              icon={User}
              fullWidth
              onClick={() => setAuthDialog('register')}
            >
              Register
            </Button>
          </div>
        </div>
      </div>

      <AuthDialog
        isOpen={authDialog !== null}
        onClose={() => setAuthDialog(null)}
        defaultView={authDialog || 'login'}
      />
    </>
  )
} 