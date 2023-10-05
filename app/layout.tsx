import './globals.css'
import type { Metadata } from 'next'
import Container from './Components/Container/Container'
import { ClerkProvider } from '@clerk/nextjs'
import { Helmet } from 'react-helmet'




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
      <Helmet>
                <meta charSet="utf-8" />
                <title>RedAnime - لمشاهدة الانمي المترجم</title>
                <meta name="description" content="RedAnime - لمشاهدة الانمي المترجم اون لاين"/>
                <meta property="og:locale" content="ar_AR"/>
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content="RedAnime"></meta>
                <meta property="og:description" content="RedAnime - لمشاهدة الانمي المترجم اون لاين"/>
                <meta property="og:url" content="https://redanime.net"></meta>
                <meta property="og:site_name" content="RedAnime"/>
                <meta name="keywords" content="انمي,ملخص انمي,انمي جديد,ملخصات انمي,تلخيص انمي,بتاع انمي,انمي حب,افلام انمي,مسلسلات انمي,انمي اكشن,انمي رومانسي,انمي في السريع,تلخيصات انمي,ملخص فيلم انمي,ملخص انمي كامل,انمي دراما,انمي مدرسي,بتاع انمي طوكيو غول,انميات اكشن,انمي كامل,ملخصات انميات,انمي رومنسي,بتاع انمي هجوم العمالقه,قصة انمي,انميات حب,انميات رومانسيه,انمي بينو,مضحك انمي,افضل انمي,انميات,انمي ناروتو,ملخص فلم انمي,انمي قديم,انمي هجوم العمالقة,ملخص انمي جديد"></meta>
            </Helmet>
        <Container>
        {children}
        </Container>
      
        </body>
    </html>
    </ClerkProvider>
  )
}
