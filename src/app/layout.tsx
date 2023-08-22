'use client'

import { globalStyles } from '@/styles/gobal'
import { getCssText } from '@ignite-ui/react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

globalStyles()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
