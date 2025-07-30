"use client"

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[var(--color-secondary)] shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[var(--color-primary)]">Cignum Solutions</Link>
        <ul className="flex space-x-6">
          {['About','Solutions','Industries','How It Works','Compliance','Blog','Contact'].map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase().replace(/\s/g,'-')}`}
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://cignumsolutions.tech/login"
              className="px-4 py-2 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded font-semibold hover:bg-[var(--color-primary-dark)] transition"
            >
              Member Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
