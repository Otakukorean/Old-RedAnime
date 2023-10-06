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
