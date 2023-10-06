import React from 'react'

import { Metadata } from 'next/types';
import EpisodeDetails from '@/app/Components/EpisodeDetails'
interface PageProps {
  params : {epname : string , name : string}
}


export async function generateMetadata(
  { params }: PageProps,

): Promise<Metadata> {
  
 
  return {
    title: `${decodeURI(params.name) + ' ' + decodeURI(params.epname)} `,
    openGraph : {
      title : `${decodeURI(params.name) + ' ' + decodeURI(params.epname)}`,
      url : `https://redanime.net/watch/${decodeURI(params.name)}/${decodeURI(params.epname)}`,
      type : 'website' ,
      locale : 'ar_AR' ,
      siteName : 'RedAnime - لمشاهدة الانمي المترجم' ,
      description :'RedAnime - لمشاهدة الانمي المترجم' ,
  
    } ,
  }
}



const page = ({params} : PageProps) => {



 


  
  return (
    <>
    <EpisodeDetails epname={params.epname} name={params.name}/>
    </>
  )
}

export default page
