import type { Metadata } from 'next'
import './globals.css'
import { fontBody, fontJersey } from './fonts'
import { Header } from '@/components/header'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: 'André',
  description: 'Desmonstrar minhas habilidades',
  authors: {
    name: 'André Albuquerque',
    url: 'https://ae.dev.br/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`bg-zinc-800 antialiased scroll-smooth ${fontBody.className} ${fontJersey.variable}`}
      >
        <SpeedInsights />
        <Header />
        {children}
      </body>
    </html>
  )
}
