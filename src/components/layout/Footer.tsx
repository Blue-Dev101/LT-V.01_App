'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react'

const SOCIAL_LINKS = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

const QUICK_LINKS = [
  { label: 'Popular Games', href: '/popular-games' },
  { label: 'Live Games', href: '/live-games' },
  { label: 'Arcade Games', href: '/arcade-games' },
  { label: 'Just For You', href: '/just-for-you' },
  { label: 'LottoStar Picks', href: '/lottostar-picks' },
]

const SUPPORT_LINKS = [
  { label: 'Help Center', href: '/help' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Responsible Gaming', href: '/responsible-gaming' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">About LottoStar</h3>
            <p className="text-sm text-gray-400">
              Your premier destination for online gaming entertainment. Experience the thrill of gaming with our wide selection of games.
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-2">
              {SUPPORT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Mail size={16} className="text-gray-400" />
                <a href="mailto:support@lottostar.com" className="text-gray-400 hover:text-white transition-colors">
                  support@lottostar.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={16} className="text-gray-400" />
                <a href="tel:1-800-LOTTOSTAR" className="text-gray-400 hover:text-white transition-colors">
                  1-800-LOTTOSTAR
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} LottoStar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 