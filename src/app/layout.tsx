import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hanaa Abdulkarim | Integrative Hypnotherapy',
  description: 'Supportive, research-based therapy grounded in both science and soul.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-serenity-off-white text-serenity-blue-dark`}>
        {children}
      </body>
    </html>
  )
} 