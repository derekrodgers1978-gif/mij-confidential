'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { href: '#episodes', label: 'Episodes' },
    { href: '#listen', label: 'Listen' },
    { href: '#book', label: 'Book' },
    { href: '#merch', label: 'Merch' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            MIJ Confidential
            <span>Japanese Guitar Stories</span>
          </Link>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#subscribe" className="nav-cta">Subscribe</a>
            </li>
          </ul>

          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div
        className={`mobile-nav-overlay${mobileOpen ? ' open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        <button
          className="mobile-nav-close"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >×</button>
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMobileOpen(false)}
          >{l.label}</a>
        ))}
        <a href="#subscribe" onClick={() => setMobileOpen(false)} style={{ color: 'var(--gold)', marginTop: '1rem' }}>
          Subscribe
        </a>
      </div>
    </>
  )
}
