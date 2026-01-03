import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr Salman Aesthetics - Top Rated Plastic & Cosmetic Surgeon in Pakistan',
  description: 'Promoting Medical Tourism in Pakistan by offering Dr Salman\'s Signature Hairline and Body Contouring. Get luxury healthcare under one roof.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}

