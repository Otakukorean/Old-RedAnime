"use client"
import React from 'react'

import AnimedDetails from '@/app/Components/AnimeDetails'

interface PageProps {
  params : {name : string}
}




const page = ({params} : PageProps) => {





  return (
    <>
        <title>{decodeURI(params.name)+ ' مترجم '}</title>
    
    <div>

          <AnimedDetails name={params.name} /> 
    </div>
    </>
  )
}

export default page
