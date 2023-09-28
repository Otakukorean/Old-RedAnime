"use client"
import { Container,LinetitleContainer ,Line , Jumpitle  } from '@/app/Components/AnimeJumptron/Style'
import { CardContainer } from '@/app/lib/GlobalStyle'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'
import Card from '@/app/Components/Cards/EpisodeCard/index'

const page = () => {
     const {isLoading,isError,data,error,isFetchingNextPage,fetchNextPage,hasNextPage , refetch,isFetching} = useInfiniteQuery(['animes'] , async({pageParam = 0}) => {
          const res= await fetch(`/api/history/Get?page=${pageParam}`)
          return res.json()
        } , {
          getNextPageParam : (lastPage, pages) => lastPage.hasNextPage && lastPage.nextPage
        })
        const {ref , inView} = useInView()
        useEffect(() => {
          if(inView && hasNextPage) {
            fetchNextPage()
          }
        }, [inView])

        if(isLoading || isFetching) {
          return <span>Loading ...</span>
        }
  return (
     <>
     <title>سجل المشاهدة</title>
    <Container >
     <LinetitleContainer>
          <Line/>
          <Jumpitle>سجل المشاهدة</Jumpitle>
     </LinetitleContainer>

    </Container>
    <CardContainer>
    {
        data && data.pages.map((page) => (
          <React.Fragment key={page.nextId ?? 'latPage'}>
            {
                page.result?.result?.map((el : any,key : any) => (
                  <Card key={key} epname={el?.episode?.EpName} epNumber={el?.episode?.EpNumber} AnimeName={el?.episode?.anime?.title} animeId={el?.episode?.anime?.id} imageSrc={el?.episode?.anime?.imageUrl} showanimeName  />
                ))
                
            }
       
          </React.Fragment>
        ))
      }
    </CardContainer>
    <span ref={ref}  style={{visibility:"hidden"}}>load more</span>
    </>
  )
}

export default page
