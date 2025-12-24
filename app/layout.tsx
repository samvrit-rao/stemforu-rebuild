import type { Metadata } from 'next'
import { Inter, DM_Sans, Poppins, Sora } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const dmSans = DM_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-dm'
})
const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins'
})
const sora = Sora({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-sora'
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
      <body className={`${inter.variable} ${dmSans.variable} ${poppins.variable} ${sora.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
