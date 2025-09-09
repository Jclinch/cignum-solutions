// layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Navbar'
import Footer from '@/components/Footer'
import 'react-tooltip/dist/react-tooltip.css';
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cignum Solutions',
  description: 'Borderless financial solutions for remittance, crypto, and merchants.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-[var(--color-text)] bg-gray-900`}>
        <Header />
        <main className="min-h-screen">
          {children}
        <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  )
}
