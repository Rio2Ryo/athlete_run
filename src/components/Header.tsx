'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadWhitepaper = () => {
    const link = document.createElement('a')
    if (language === 'JP') {
      link.href = '/wh_en.pdf'
      link.download = 'MOTHER_VEGETABLES_Whitepaper_EN.pdf'
    } else {
      link.href = '/wh_en.pdf'
      link.download = 'MOTHER_VEGETABLES_Whitepaper_EN.pdf'
    }
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleMenuClick = (url: string) => {
    setIsMenuOpen(false)
    window.location.href = url
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-green-500/20" style={{ zIndex: 1100 }}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo-uCgt3dQ.png"
              alt="MOTHER VEGETABLE"
              width={100}
              height={100}
            />
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => window.location.href = 'https://mothervegetable.com/'}
              className="px-3 md:px-4 py-2 text-sm text-[#4ade80] hover:text-green-600 transition-all duration-300"
            >
              Food
            </button>
            <button
              onClick={() => window.location.href = 'https://mothervegetable.com/'}
              className="px-3 md:px-4 py-2 text-sm text-[#4ade80] hover:text-green-600 transition-all duration-300"
            >
              Cosmetic
            </button>
            <button
              onClick={() => window.location.href = 'https://mothervegetable.com/'}
              className="px-3 md:px-4 py-2 text-sm text-[#4ade80] hover:text-green-600 transition-all duration-300"
            >
              Products
            </button>

            <div className="flex items-center border border-gray-600 rounded-md overflow-hidden">
              <button
                onClick={() => setLanguage('EN')}
                className={`px-3 py-1.5 text-sm transition-all duration-300 ${
                  language === 'EN'
                    ? 'bg-[#4ade80] text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('JP')}
                className={`px-3 py-1.5 text-sm transition-all duration-300 ${
                  language === 'JP'
                    ? 'bg-[#4ade80] text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                JP
              </button>
            </div>
          </nav>

          {/* Mobile: Language Button + Hamburger */}
          <div className="flex md:hidden items-center space-x-2">
            <div className="flex items-center border border-gray-600 rounded-md overflow-hidden">
              <button
                onClick={() => setLanguage('EN')}
                className={`px-2 py-1.5 text-xs transition-all duration-300 ${
                  language === 'EN'
                    ? 'bg-[#4ade80] text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('JP')}
                className={`px-2 py-1.5 text-xs transition-all duration-300 ${
                  language === 'JP'
                    ? 'bg-[#4ade80] text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                JP
              </button>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#4ade80] hover:text-green-600 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 9999 }}
      >
        {/* Background overlay - click to close */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={() => setIsMenuOpen(false)}
        />
        {/* Slide-in menu from right */}
        <div
          className={`absolute top-0 right-0 h-full w-[80%] border-l-2 border-[#4ade80] transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ backgroundColor: '#000000' }}
        >
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-[#4ade80] hover:text-green-600 transition-all duration-300"
              aria-label="Close menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Menu items */}
          <nav className="px-4 pt-8">
            <button
              onClick={() => handleMenuClick('https://mothervegetable.com/')}
              className="block w-full text-left px-4 py-4 text-white hover:text-gray-300 transition-all duration-300 border-b border-gray-700"
            >
              Food
            </button>
            <button
              onClick={() => handleMenuClick('https://mothervegetable.com/')}
              className="block w-full text-left px-4 py-4 text-white hover:text-gray-300 transition-all duration-300 border-b border-gray-700"
            >
              Cosmetic
            </button>
            <button
              onClick={() => handleMenuClick('https://mothervegetable.com/')}
              className="block w-full text-left px-4 py-4 text-white hover:text-gray-300 transition-all duration-300 border-b border-gray-700"
            >
              Products
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

