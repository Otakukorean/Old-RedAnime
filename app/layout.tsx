
import './globals.css'
import Container from './Components/Container/Container'
import { ClerkProvider } from '@clerk/nextjs'

import { Metadata } from "next/types"


export const metadata: Metadata = {
  title: 'AnimeNinja - لمشاهدة الانمي المترجم',
  openGraph : {
    title : 'AnimeNinja - لمشاهدة الانمي المترجم' ,
    url : 'https://animeninja.org' ,
    type : 'website' ,
    locale : 'ar_AR' ,
    siteName : 'AnimeNinja' ,
    description :'AnimeNinja -  لمشاهدة الانمي المترجم وبجودة عالية' ,

  } ,
  description : 'AnimeNinja -  لمشاهدة الانمي المترجم وبجودة عالية' , 
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
      <meta name="google-site-verification" content="29AB_Yw3o1ja0-5lCHKMd594aNSlXD1MxQGSLmBeNJw" />
      
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
