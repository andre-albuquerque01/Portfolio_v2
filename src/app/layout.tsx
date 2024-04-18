import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { fontBody } from '../fonts/fonts'

const inter = Inter({ subsets: ['latin'] })

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
        className={`bg-zinc-800 antialiased ${inter.className} ${fontBody.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
