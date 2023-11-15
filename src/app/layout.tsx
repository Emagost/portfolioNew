import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'

const WorkSans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Emanuel Gomez - Portfolio',
  description: 'Emanuel Gomez - Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={WorkSans.className}>{children}</body>
    </html>
  )
}
