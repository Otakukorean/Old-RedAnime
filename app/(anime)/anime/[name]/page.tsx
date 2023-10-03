import React from 'react'

import AnimedDetails from '@/app/Components/AnimeDetails'
import type { Metadata } from 'next';

interface PageProps {
  params : {name : string}
}

export async function generateMetadata({params} : PageProps) : Promise<Metadata> {
  return {
       title  : `${decodeURI(params.name) + ' انمي'}`
  }
}



const page = ({params} : PageProps) => {





  return (
    <>
    
    <div>

          <AnimedDetails name={params.name} /> 
    </div>
    </>
  )
}

export default page
