import './globals.css'
import styles from './layout.module.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Colette Szczepaniak',
  description: 'Colette Szczepaniak - doktorka nauk społecznych w dyscyplinie pedagogiki.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.layout}`}>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
