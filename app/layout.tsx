// layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
// import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cignum Solutions',
  description: 'Borderless financial solutions for remittance, crypto, and merchants.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[var(--color-bg)] text-[var(--color-text)]`}>
        <Header />
        <main className="min-h-screen px-4 md:px-10 lg:px-20 pt-6 pb-10">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
