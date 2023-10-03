import './globals.css'
import type { Metadata } from 'next'
import Container from './Components/Container/Container'
import { ClerkProvider } from '@clerk/nextjs'


export const metadata: Metadata = {
  title: {
    default : 'RedAnime - لمشاهدة الانمي المترجم' ,
    template : ''
  }
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
<meta name="google-site-verification" content="cCFaxN7XCQaR-OIDvWqDoS0VZQbA7xXNYWxxfD_sxGw" />
      </head>

      <body >
        <Container>
        {children}
        </Container>
      
        </body>
    </html>
    </ClerkProvider>
  )
}
