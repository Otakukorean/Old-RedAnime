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

    const signal= useSignal({
      id : 0 ,
      ServerName : "" ,
      ServerUrl : ""
    })

  // useEffect(() => {
  
  // },[isLoading , isFetching])
  effect(() => {
    if(!isLoading && !isFetching) {

      signal.value = {
    
        id : data?.episode?.Servers[0].id ,
        ServerName : data?.episode?.Servers[0]?.ServerName ,
        ServerUrl :data?.episode?.Servers[0]?.ServerUrl
      }
    }
  })
  if(isFetching && isLoading) {
    return <span>Loading ...</span>
  }

  const changeServer = (el : any) => {
    batch(() => {
      signal.value = {
        id: el.id ,ServerName : el.ServerName ,ServerUrl:el.ServerUrl
      }
    })
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
                   <ServerButton onClick={() => changeServer(el)} $isActive={el?.id == signal.value.id} >{el?.ServerName}</ServerButton>
          ))}


        </ServersButtonsContainer>
      </VideoServersContainer>
      <VideoWatchContainer>
        <VidoeContainer>
      <iframe width="960" height="720" src={signal.value.ServerUrl}  allowFullScreen={true} />
     </VidoeContainer>
      <NextPrevContainer>
      {data?.NextEpisode ? (
        <Link href={`/watch/${data?.episode?.anime?.title}/${data?.NextEpisode?.EpName}`} passHref legacyBehavior>
          <a href={`/watch/${data?.episode?.anime?.title}/${data?.NextEpisode?.EpName}`}>
              <NextPrevButton $isprev={false}>التالي</NextPrevButton>
              </a>
        </Link>
      ) : null}
      {
        !data?.PrevEpisode  ? null : (
          <Link href={`/watch/${data?.episode?.anime?.title}/${data?.PrevEpisode?.EpName}`} passHref legacyBehavior>
            <a href={`/watch/${data?.episode?.anime?.title}/${data?.PrevEpisode?.EpName}`}>
          <NextPrevButton $isprev>السابق</NextPrevButton>
          </a>
      </Link>
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
