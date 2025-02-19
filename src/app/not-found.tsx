import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-orange-600">404</h1>
        <p className="text-xl text-gray-600">Page not found</p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700"
        >
          <Home size={20} />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  )
} 