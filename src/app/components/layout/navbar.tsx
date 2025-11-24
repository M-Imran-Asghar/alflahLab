// src/app/components/layout/navbar.tsx
'use client'

import { useState } from 'react'
import { logout } from '../lib/auth'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    await logout()
    router.push('/login')
  }

  const navigationTabs = [
    { name: 'Patient Registration', href: '/dashboard/registration', key: 'registration', icon: '👤' },
    { name: 'Patient Record', href: '/dashboard/records', key: 'records', icon: '📋' },
    { name: 'Patient Summary', href: '/dashboard/summary', key: 'summary', icon: '📊' },
    { name: 'Report Verification', href: '/dashboard/verification', key: 'verification', icon: '✅' },
  ]

  const isActiveTab = (tabKey: string) => {
    return pathname?.includes(tabKey)
  }

  const handleNavigation = (href: string) => {
    router.push(href)
  }

  return (
    <nav className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 text-white shadow-2xl fixed w-full top-0 z-50 border-b-4 border-blue-400">
      {/* Top Bar - Collection Center Info */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-4 py-3 text-sm border-b border-blue-600">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-semibold text-blue-100">
              Collection Center/References: <span className="text-white font-bold">Al Falah Lab Layyah-03</span>
            </span>
          </div>
          <div className="flex space-x-6">
            <button 
              className="group relative hover:text-blue-200 transition-all duration-300 transform hover:scale-105 px-3 py-1 rounded-lg hover:bg-blue-700/50"
              title="Check Inbox"
            >
              <span className="flex items-center space-x-2">
                <span className="text-lg">📨</span>
                <span className="group-hover:underline">Inbox</span>
              </span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-bounce"></span>
            </button>
            
            <button 
              className="hover:text-blue-200 transition-all duration-300 transform hover:scale-105 px-3 py-1 rounded-lg hover:bg-blue-700/50"
              title="Change Password"
            >
              <span className="flex items-center space-x-2">
                <span className="text-lg">🔒</span>
                <span className="hover:underline">Change Password</span>
              </span>
            </button>
            
            <button 
              onClick={handleLogout}
              disabled={isLoggingOut}
              className={`relative group hover:text-red-200 transition-all duration-300 transform hover:scale-105 px-3 py-1 rounded-lg ${
                isLoggingOut ? 'bg-red-700/50 cursor-not-allowed' : 'hover:bg-red-600/50'
              }`}
              title="Logout"
            >
              <span className="flex items-center space-x-2">
                <span className="text-lg">{isLoggingOut ? '⏳' : '🚪'}</span>
                <span className="group-hover:underline">
                  {isLoggingOut ? 'Logging Out...' : 'LogOut'}
                </span>
              </span>
              {!isLoggingOut && (
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="bg-gradient-to-r from-blue-600/90 to-blue-700/90 px-4 py-4 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-white to-blue-200 rounded-full flex items-center justify-center shadow-lg border-2 border-white/50">
              <span className="text-blue-800 font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Welcome back, Alfalah Lab
              </h1>
             
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Tabs */}
      <div className="bg-blue-800/95 px-4 py-2 backdrop-blur-sm border-t border-blue-600/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex space-x-1">
            {navigationTabs.map((tab, index) => (
              <div key={tab.key} className="flex items-center relative group">
                {index > 0 && (
                  <span className="text-blue-400/60 mx-2 text-lg font-light transition-all duration-300 group-hover:text-blue-300">
                    ⚬
                  </span>
                )}
                <button
                  onClick={() => handleNavigation(tab.href)}
                  className={`relative px-8 py-4 rounded-t-xl font-semibold transition-all duration-300 transform min-w-[180px] group cursor-pointer overflow-hidden ${
                    isActiveTab(tab.key)
                      ? 'bg-gradient-to-b from-white to-blue-50 text-blue-800 shadow-2xl border-t-2 border-x-2 border-blue-200 scale-105 -translate-y-1'
                      : 'bg-gradient-to-b from-blue-700 to-blue-600 text-white hover:from-blue-600 hover:to-blue-500 hover:scale-105 hover:-translate-y-1 shadow-lg'
                  }`}
                >
                  {/* Hover effect layer */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ${
                    isActiveTab(tab.key) ? 'bg-white/10' : ''
                  }`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center space-y-2">
                    <span className="text-xl transition-transform duration-300 group-hover:scale-110">
                      {tab.icon}
                    </span>
                    <span className="text-sm font-medium transition-all duration-300 group-hover:tracking-wide">
                      {tab.name}
                    </span>
                  </div>

                  {/* Active indicator */}
                  {isActiveTab(tab.key) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg animate-pulse"></div>
                  )}
                </button>

                {/* Tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 whitespace-nowrap">
                  {tab.name}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress bar for logout */}
      {isLoggingOut && (
        <div className="w-full bg-blue-900 h-1">
          <div className="bg-red-500 h-full animate-pulse transition-all duration-1000"></div>
        </div>
      )}
    </nav>
  )
}