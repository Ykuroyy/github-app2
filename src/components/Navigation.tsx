'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Menu, X } from 'lucide-react'

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'what-is-github', label: 'GitHubとは' },
    { id: 'engineer-usage', label: 'エンジニアの使い方' },
    { id: 'non-engineer-usage', label: '非エンジニアの活用' },
    { id: 'interactive-demo', label: 'デモ' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Github size={28} className={isScrolled ? 'text-github-dark' : 'text-white'} />
            <span className={`font-bold text-xl ${isScrolled ? 'text-github-dark' : 'text-white'}`}>
              GitHub Learning
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id)
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`font-medium transition-colors ${
                  activeSection === item.id
                    ? isScrolled
                      ? 'text-github-info'
                      : 'text-github-success'
                    : isScrolled
                    ? 'text-gray-600 hover:text-github-info'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-github-dark' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-github-dark' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id)
                  setIsMobileMenuOpen(false)
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-github-info text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}