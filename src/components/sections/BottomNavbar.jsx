'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react'

const BottomNavbar = () => {
  const pathname = usePathname()

  const navItems = [
    { label: 'Home', icon: 'hugeicons:home-01', href: '/' },
    { label: 'Menu', icon: 'hugeicons:menu-01', href: '/categories' },
    { label: 'Orders', icon: 'hugeicons:note-01', href: '/user' },
    { label: 'Offers', icon: 'hugeicons:ticket-01', href: '/offers' },
    { label: 'Profile', icon: 'hugeicons:user-01', href: '/user' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full bg-white border-t border-slate-100 px-6 py-3 lg:hidden">
      <div className="flex items-center justify-between max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-1 transition-colors ${
                isActive ? 'text-accent' : 'text-slate-400'
              }`}
            >
              {item.label === 'Orders' ? (
                <div className="relative -top-6 bg-accent p-3 rounded-full shadow-lg shadow-accent/30 text-white">
                   <Icon icon={item.icon} className="w-6 h-6" />
                </div>
              ) : (
                <Icon icon={item.icon} className="w-6 h-6" />
              )}
              <span className={`text-[10px] font-medium ${item.label === 'Orders' ? '-mt-4' : ''}`}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default BottomNavbar
