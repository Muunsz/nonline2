import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'nonLine - Streaming Film dan Serial Terbaik',
  description: 'Tonton film dan serial favorit Anda di nonLine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className="container mx-auto px-4 py-8 pt-24">
              <Suspense fallback={<div>Loading...</div>}>
                {children}
              </Suspense>
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

