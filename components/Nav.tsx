'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm border-b border-border' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded bg-rose-gold flex items-center justify-center flex-shrink-0">
            <span className="font-display text-white text-lg font-semibold leading-none">N</span>
          </div>
          <div>
            <span className="font-display text-charcoal text-[18px] font-semibold tracking-wide">Noor Clinic</span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {['#treatments', '#results', '#faq', '#contact'].map((href, i) => {
            const labels = ['Treatments', 'Results', 'FAQ', 'Contact']
            return (
              <a
                key={href}
                href={href}
                className="text-[13px] font-medium tracking-wider text-charcoal/70 hover:text-rose-gold transition-colors uppercase"
              >
                {labels[i]}
              </a>
            )
          })}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#booking"
            className="btn-primary hidden sm:inline-flex text-[12px] py-2.5 px-6"
          >
            Book a Consultation
          </a>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1">
              <span className={`block h-px bg-charcoal transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-px bg-charcoal transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-charcoal transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-5 py-4 flex flex-col gap-4">
          {['#treatments', '#results', '#faq', '#contact'].map((href, i) => {
            const labels = ['Treatments', 'Results', 'FAQ', 'Contact']
            return (
              <a
                key={href}
                href={href}
                className="text-[13px] font-medium text-charcoal/70 uppercase tracking-wider"
                onClick={() => setMenuOpen(false)}
              >
                {labels[i]}
              </a>
            )
          })}
          <a href="#booking" className="btn-primary text-center text-[12px]" onClick={() => setMenuOpen(false)}>
            Book a Consultation
          </a>
        </div>
      )}
    </nav>
  )
}
