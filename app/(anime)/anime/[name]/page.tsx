"use client"
import React from 'react'

import AnimedDetails from '@/app/Components/AnimeDetails'
import {Helmet} from "react-helmet";
interface PageProps {
  params : {name : string}
}





const page = ({params} : PageProps) => {





  return (
    <>
    
    <div>
    <Helmet>
                <meta charSet="utf-8" />
                <title>{decodeURI(params.name) + ' انمي'}</title>
               
            </Helmet>

          <AnimedDetails name={params.name} /> 
    </div>
    </>
  )
}

export default page
