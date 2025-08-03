//components\Navbar.tsx
"use client"

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { label: 'About', path: '/about' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Industries', path: '/industries' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Compliance', path: '/compliance' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[var(--color-secondary)] shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        <Link href="/" className="text-lg font-bold text-[var(--color-primary)]">Cignum Solutions</Link>
        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`block h-1 w-6 bg-[var(--color-primary)] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-1 w-6 bg-[var(--color-primary)] rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-1 w-6 bg-[var(--color-primary)] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.path}
                className="text-sm hover:text-[var(--color-primary)] transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://cignumsolutions.tech/login"
              className="text-sm px-4 py-2 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded font-semibold hover:bg-[var(--color-primary-dark)] transition"
            >
              Member Login
            </a>
          </li>
        </ul>
        {/* Mobile nav */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-[var(--color-secondary)] shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-50">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.path}
                  className="block px-4 py-2 text-sm hover:text-[var(--color-primary)] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://cignumsolutions.tech/login"
                className="block px-4 py-2 text-sm bg-[var(--color-primary)] text-[var(--color-secondary)] rounded font-semibold hover:bg-[var(--color-primary-dark)] transition"
                onClick={() => setMenuOpen(false)}
              >
                Member Login
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}
