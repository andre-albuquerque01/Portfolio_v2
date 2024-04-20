/* eslint-disable camelcase */
import { Jersey_10, Roboto } from 'next/font/google'

export const fontBody = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const fontJersey = Jersey_10({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jersey',
})
