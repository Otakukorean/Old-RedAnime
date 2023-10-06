"use client"
import { Container,LinetitleContainer ,Line , Jumpitle  } from '@/app/Components/AnimeJumptron/Style'
import { CardContainer } from '@/app/lib/GlobalStyle'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'
import Card from '@/app/Components/Cards/AnimeCard'
import {Helmet} from "react-helmet";

interface Props {
     params : {year : number , season : string}
}
const page = (params : Props) => {
     const {isLoading,isError,data,error,isFetchingNextPage,fetchNextPage,hasNextPage , refetch,isFetching} = useInfiniteQuery(['season'] , async({pageParam = 0}) => {
          const res= await fetch(`/api/anime/season?page=${pageParam}&year=${params.params.year}&season=${decodeURI(params.params.season)}`)
          return res.json()
        } , {
          getNextPageParam :(lastPage, pages) => lastPage.hasNextPage && lastPage.nextPage
        })
        const {ref , inView} = useInView()
        useEffect(() => {
          if(inView && hasNextPage) {
            fetchNextPage()
          }
        }, [inView])
        if(isLoading && isFetching) {
          return <span>Loading ...</span>
        }
  return (
     <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>{decodeURI(params.params.season)} {params.params.year}</title>
               
            </Helmet>
    <Container >
     <LinetitleContainer>
          <Line/>
          <Jumpitle> {decodeURI(params.params.season)} {params.params.year}</Jumpitle>
     </LinetitleContainer>

    </Container>
    {
        data && data.pages.map((page) => (
          <React.Fragment key={page.nextId ?? 'latPage'}>
                <CardContainer layout>
            {
                
                page.result?.result?.map((el : any,key : any) => (
                  <Card key={key} data={{title : el?.title,type : el?.type,id : el?.id,imageUrl:el?.imageUrl , rating:el?.rating,season:el?.season, year:el?.year,status:el?.status,description:el?.description}}/>
                ))
                
            }
            </CardContainer>
             <span ref={ref}  style={{visibility:"hidden"}}>load more</span>
       
          </React.Fragment>
        ))
      }
    </>
  )
}

export default page



