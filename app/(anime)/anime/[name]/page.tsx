
import React from 'react'

import AnimedDetails from '@/app/Components/AnimeDetails'
interface PageProps {
  params : {name : string}
}

import { Metadata } from "next/types"


export async function generateMetadata(
  { params }: PageProps,

): Promise<Metadata> {
  
 
  return {
    title: `${decodeURI(params.name)} انمي`,
    openGraph : {
      title : `${decodeURI(params.name)} انمي`,
      url : `https://animeninja.org/anime/${decodeURI(params.name)}`,
      type : 'website' ,
      locale : 'ar_AR' ,
      siteName : 'AnimeNinja - لمشاهدة الانمي المترجم' ,
      description :'AnimeNinja - لمشاهدة الانمي المترجم' ,
  
    } ,
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
