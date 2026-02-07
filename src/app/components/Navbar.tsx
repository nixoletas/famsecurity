'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navbarRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Sobre nós' },
    { href: '/contact', label: 'Contato' },
  ]

  return (
    <nav
      ref={navbarRef}
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-white/70 backdrop-blur-sm'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logotipo-1.png"
              alt="FAM Security"
              width={110}
              height={52}
              className="hover:opacity-80 transition-opacity"
              priority
            />
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5511989184515"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Fale Conosco
              </a>
            </li>
          </ul>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-accent transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-border',
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://api.whatsapp.com/send?phone=5511989184515"
            className="block px-3 py-2 rounded-md text-sm font-medium text-primary hover:bg-accent transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </nav>
  )
}
