import type { Metadata } from 'next'
import { Inter, IBM_Plex_Sans, Space_Grotesk, Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const ibmPlex = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm'
})
const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-space'
})
const outfit = Outfit({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-outfit'
})

export const metadata: Metadata = {
  title: 'STEMForU - STEM Excellence for Tomorrow',
  description: 'Inspire and empower elementary and middle school students, especially those from underrepresented communities, by providing them with a platform to ignite and nurture a strong interest in STEM.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlex.variable} ${spaceGrotesk.variable} ${outfit.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
