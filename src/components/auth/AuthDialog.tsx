'use client'

import { useState } from 'react'
import { Mail, Lock, User, ArrowRight, Google } from 'lucide-react'
import Dialog from '@/components/shared/Dialog'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import Divider from '@/components/shared/Divider'

interface AuthDialogProps {
  isOpen: boolean
  onClose: () => void
  defaultView?: 'login' | 'register'
}

export default function AuthDialog({ 
  isOpen, 
  onClose,
  defaultView = 'login' 
}: AuthDialogProps) {
  const [view, setView] = useState(defaultView)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: Implement auth logic
    setTimeout(() => {
      setIsLoading(false)
      onClose()
    }, 1000)
  }

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={view === 'login' ? 'Welcome Back' : 'Create Account'}
      size="sm"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {view === 'register' && (
          <Input
            id="name"
            label="Full Name"
            icon={User}
            placeholder="John Doe"
            required
            autoFocus
          />
        )}

        <Input
          id="email"
          type="email"
          label="Email Address"
          icon={Mail}
          placeholder="you@example.com"
          required
          autoFocus={view === 'login'}
        />

        <Input
          id="password"
          type="password"
          label="Password"
          icon={Lock}
          placeholder="••••••••"
          required
          hint={view === 'register' ? 'Must be at least 8 characters' : undefined}
        />

        <Button
          type="submit"
          fullWidth
          loading={isLoading}
          icon={ArrowRight}
          iconPosition="right"
        >
          {view === 'login' ? 'Sign In' : 'Create Account'}
        </Button>

        <Divider text="Or continue with" />

        <Button
          type="button"
          variant="outline"
          fullWidth
          icon={Google}
        >
          Google
        </Button>

        <p className="text-sm text-center text-gray-600">
          {view === 'login' ? "Don't have an account?" : "Already have an account?"}
          {' '}
          <button
            type="button"
            onClick={() => setView(view === 'login' ? 'register' : 'login')}
            className="text-orange-600 hover:text-orange-700 font-medium"
          >
            {view === 'login' ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </form>
    </Dialog>
  )
} 