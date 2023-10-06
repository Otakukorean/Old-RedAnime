"use client"
import React, { useEffect, useState } from 'react'
import { useSignal , effect ,batch} from "@preact/signals-react";
import {Container,VideoServersContainer,ServersButtonsContainer,ServerButton,VideoWatchContainer,NextPrevContainer,NextPrevButton,VidoeContainer} from './Style'
import AnimeDetails from '@/app/Components/AnimeDetails'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import {Helmet} from "react-helmet";

interface PageProps {
  params : {epname : string , name : string}
}


const getEpisodeByname = async (name : string,animename : string) => {
  const result = await axios.get(`/api/Episodes/GetByname?epname=${name}&animename=${animename}`)
  return result.data
}


const page = ({params} : PageProps) => {

  const {data ,isLoading,refetch,isFetching}  = useQuery({queryFn:() =>  getEpisodeByname(params.epname , params.name)
    ,queryKey :['episode']})

    const [Server,SetServer]= useState({
      id : 0 ,
      ServerName : "" ,
      ServerUrl : ""
    })

    if(isLoading && isFetching ) {
      return <span>Loading...</span>
    }

 


  
  return (
    <>
       <Helmet>
                <meta charSet="utf-8" />
                <title>{decodeURI(params.name) + ' ' + decodeURI(params.epname)}</title>
    <meta property="og:url" content={`https://redanime.net/watch/${decodeURI(params.name)}/${decodeURI(params.epname)}`}/>               
            </Helmet>
  
    <Container>
      <VideoServersContainer>
        <ServersButtonsContainer>
          {data?.episode?.Servers?.map((el : any) => (
                   <ServerButton onClick={() => {
                   SetServer({
                    id : el?.id ,
                    ServerName : el?.ServerName ,
                    ServerUrl : el?.ServerUrl
                   })
                   }} $isActive={el?.id == Server.id} >{el?.ServerName}</ServerButton>
          ))}


        </ServersButtonsContainer>
      </VideoServersContainer>
      <VideoWatchContainer>
        <VidoeContainer>
      <iframe width="960" height="720" src={Server.ServerUrl === "" ? data?.episode?.Servers[0]?.ServerUrl : Server.ServerUrl}  allowFullScreen={true} />
     </VidoeContainer>
      <NextPrevContainer>
      {data?.NextEpisode ? (
        <a href={`/watch/${data?.episode?.anime?.title}/${data?.NextEpisode?.EpName}`}  >

              <NextPrevButton $isprev={false}>التالي</NextPrevButton>
         
        </a>
      ) : null}
      {
        !data?.PrevEpisode  ? null : (
          <a href={`/watch/${data?.episode?.anime?.title}/${data?.PrevEpisode?.EpName}`}  >
       
          <NextPrevButton $isprev>السابق</NextPrevButton>
     
      </a>
        )
      }
      

      </NextPrevContainer>
      </VideoWatchContainer>
      
    </Container>

    <AnimeDetails epName={params.epname} name={data?.episode?.anime?.title}    /> 
    </>
  )
}

export default page
