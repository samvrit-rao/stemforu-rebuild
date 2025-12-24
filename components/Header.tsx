'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <header className="glass-effect sticky top-0 z-50 shadow-lg backdrop-blur-xl">
      <nav className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-3xl font-black text-teal-600 font-logo tracking-tight">
              STEMForU
            </span>
          </Link>

          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-700 font-semibold hover:text-primary-600 transition-all px-3 py-2 rounded-lg hover:bg-primary-50 font-heading">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 font-semibold hover:text-primary-600 transition-all px-3 py-2 rounded-lg hover:bg-primary-50 font-heading">
              About
            </Link>
            <Link href="/mission" className="text-gray-700 font-semibold hover:text-primary-600 transition-all px-3 py-2 rounded-lg hover:bg-primary-50 font-heading">
              Mission
            </Link>

            {/* Dropdown for Blogs/News/Resources */}
            <div className="relative group">
              <button
                className="text-gray-700 font-semibold hover:text-primary-600 transition-all px-3 py-2 rounded-lg hover:bg-primary-50 font-heading flex items-center gap-1"
                onMouseEnter={() => setIsDropdownOpen(true)}
              >
                Content
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link href="/blogs" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-heading">
                    Blogs
                  </Link>
                  <Link href="/news" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-heading">
                    News
                  </Link>
                  <Link href="/resources" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-heading">
                    Resources
                  </Link>
                </div>
              )}
            </div>

            <Link href="/summer-camp" className="bg-teal-600 text-white px-4 py-2 font-semibold hover:bg-teal-700 transition-colors font-heading">
              Summer Camp
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700 hover:text-primary-600 transition-colors">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
