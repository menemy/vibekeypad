'use client'

import { useEffect, useState } from 'react'

export default function Navigation() {
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] backdrop-blur-xl bg-black/80 transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-center h-12">
          <nav className="flex gap-2">
            <a href="#features" className="px-4 py-1.5 rounded-full text-muted hover:text-fg text-sm transition-colors">
              Features
            </a>
            <a href="#how" className="px-4 py-1.5 rounded-full text-muted hover:text-fg text-sm transition-colors">
              How
            </a>
            <a href="#presets" className="px-4 py-1.5 rounded-full text-muted hover:text-fg text-sm transition-colors">
              Presets
            </a>
            <a href="#get" className="px-4 py-1.5 rounded-full text-muted hover:text-fg text-sm transition-colors">
              Get It
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}