import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VibeKeypad — 6‑key DIY AI coding keypad',
  description: 'Accept, reject, ask, redo and talk — without leaving the flow. Open‑source presets. Works with Claude, Cursor, Copilot.',
  openGraph: {
    title: 'VibeKeypad — 6‑key DIY AI coding keypad',
    description: 'Build guide, presets & printable icons for Claude/Cursor/Copilot.',
    url: 'https://vibekeypad.com/',
    images: ['/og-card.jpg'],
    siteName: 'VibeKeypad',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-B881F66QFE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B881F66QFE');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}