'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signup } from '../lib/auth'


export default function SignupForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError('')

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
      const success = await signup(email, password, name)
      if (success) {
        router.push('/login') // Redirect to dashboard after signup
      } else {
        setError('Failed to create account')
      }
    } catch (err) {
      setError('An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
          {error}
        </div>
      )}
      
      <input
        
        name="name"
        type="text"
        required
        placeholder="Enter your full name"
        className="w-full px-3 py-2 border border-gray-300 rounded"
      />
      
      <input
       
        name="email"
        type="email"
        required
        placeholder="Enter your email"
        className="w-full px-3 py-2 border border-gray-300 rounded"
      />
      
      <input
        
        name="password"
        type="password"
        required
        placeholder="Create a password"
        className="w-full px-3 py-2 border border-gray-300 rounded"
      />

      <button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? 'Creating account...' : 'Create account'}
      </button>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <a href="/login" className="text-blue-600 hover:text-blue-500">
          Sign in
        </a>
      </p>
    </form>
  )
}