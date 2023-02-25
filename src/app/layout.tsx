import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  openGraph: {
    title: 'RealGPT: Real Language Model for Real Dialogue (real)',
    description: 'At RIT (Real Intelligent Technology), we have developed a model called RealGPT which interacts with the user in a real way (real). The real format makes it so RealGPT can answer follow-up questions, and can admit that its real. RealGPT is a child of FakeGPT.',
    url: 'https://real-gpt.metamethods.studio/',
    siteName: 'RealGPT',
    images: [
      {
        url: 'https://cdn.discordapp.com/attachments/639848186374127649/1078944363423485963/realgpt.png',
        width: 800,
        height: 800,
      }
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en"
      className='bg-zinc-800 text-white font-montserrat'
    >
      <body>{children}</body>
    </html>
  )
}
