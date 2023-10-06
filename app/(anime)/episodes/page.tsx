"use client"
import { Container,LinetitleContainer ,Line , Jumpitle  } from '@/app/Components/AnimeJumptron/Style'
import { CardContainer } from '@/app/lib/GlobalStyle'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'
import Card from '@/app/Components/Cards/EpisodeCard/index'

const page = () => {
     const {isLoading,isError,data,error,isFetchingNextPage,fetchNextPage,hasNextPage , refetch,isFetching} = useInfiniteQuery(['episodes'] , async({pageParam = 0}) => {
          const res= await fetch(`/api/Episodes/Get?page=${pageParam}`)
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
     <title>الحلقات</title>
    <Container >
     <LinetitleContainer>
          <Line/>
          <Jumpitle>الحلقات</Jumpitle>
     </LinetitleContainer>

    </Container>
    <CardContainer>
   
        <>
               {
        data && data.pages.map((page) => (
          <React.Fragment key={page.nextId ?? 'latPage'}>
            {
                page.result?.result?.map((el : any,key : any) => (
                  <Card key={key} epname={el?.EpName} epNumber={el?.EpNumber} AnimeName={el?.anime?.title} animeId={el?.anime?.id} imageSrc={el?.anime?.imageUrl}/>
                ))
                
            }
             <span ref={ref}  style={{visibility:"hidden"}}>load more</span>
       
          </React.Fragment>
        ))
      }
            </>
    </CardContainer>
    <span ref={ref}  style={{visibility:"hidden"}}>load more</span>
    </>
  )
}

export default page
