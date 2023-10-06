
import './globals.css'
import Container from './Components/Container/Container'
import { ClerkProvider } from '@clerk/nextjs'

import { Metadata } from "next/types"


export const metadata: Metadata = {
  title: 'RedAnime - لمشاهدة الانمي المترجم',
  openGraph : {
    title : 'RedAnime - لمشاهدة الانمي المترجم' ,
    url : 'https://redanime.net' ,
    type : 'website' ,
    locale : 'ar_AR' ,
    siteName : 'RedAnime - لمشاهدة الانمي المترجم' ,
    description :'RedAnime - لمشاهدة الانمي المترجم' ,

  } ,
  description : 'RedAnime - لمشاهدة الانمي المترجم اون لاين' , 
  keywords : "انمي,ملخص انمي,انمي جديد,ملخصات انمي,تلخيص انمي,بتاع انمي,انمي حب,افلام انمي,مسلسلات انمي,انمي اكشن,انمي رومانسي,انمي في السريع,تلخيصات انمي,ملخص فيلم انمي,ملخص انمي كامل,انمي دراما,انمي مدرسي,بتاع انمي طوكيو غول,انميات اكشن,انمي كامل,ملخصات انميات,انمي رومنسي,بتاع انمي هجوم العمالقه,قصة انمي,انميات حب,انميات رومانسيه,انمي بينو,مضحك انمي,افضل انمي,انميات,انمي ناروتو,ملخص فلم انمي,انمي قديم,انمي هجوم العمالقة,ملخص انمي جديد"
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
