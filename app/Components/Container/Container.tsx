'use client'
import React, { ReactNode, useState } from 'react'
import Navbar from '../Headers/Navbar'
import Sidebar from '../Headers/Siderbar/Sidebar'
import StyledComponentsRegistry from '../../lib/registry'
interface Props  {
     children? : ReactNode    
}
import  { SkeletonTheme } from 'react-loading-skeleton';

import { MantineProvider } from '@mantine/core';
import { QueryClient , QueryClientProvider } from '@tanstack/react-query'
import { ModalsProvider } from '@mantine/modals';
const queryClient = new QueryClient()
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet'

const Container = (props : Props) => {
  const [active,setActive] = useState<boolean>(false)
  return (
    <>
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

            <QueryClientProvider client={queryClient}>
    <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      /** Put your mantine theme override here */
      colorScheme: 'dark',
      colors : {
        dark : [
          "#101317"
        ]
      },
      fontFamily:"Cairo"
    }}
    >
      <ModalsProvider >
    <StyledComponentsRegistry>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Navbar active={active} setActive={setActive} />
      <ToastContainer style={{zIndex:100000}} />
      <Sidebar active={active}>
     {props.children}
     </Sidebar>
     </SkeletonTheme>
    </StyledComponentsRegistry>
    </ModalsProvider>
    </MantineProvider>
    </QueryClientProvider>
    </>

  )
}

export default Container
