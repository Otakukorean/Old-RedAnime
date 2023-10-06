"use client"
import { Container,LinetitleContainer ,Line , Jumpitle  } from '@/app/Components/AnimeJumptron/Style'
import { CardContainer } from '@/app/lib/GlobalStyle'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'
import Card from '@/app/Components/Cards/EpisodeCard/index'
import { useUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import axios from 'axios'

const page = () => {
     const {isLoading,isError,data,error,isFetchingNextPage,fetchNextPage,hasNextPage , refetch,isFetching} = useInfiniteQuery(['history'] , async({pageParam = 0}) => {
          const res= await axios.get(`https://redanime.net/api/history/Get?page=${pageParam}`)
          return res.data
        } , {
          getNextPageParam : (lastPage, pages) => lastPage.hasNextPage && lastPage.nextPage
        })
        const {ref , inView} = useInView()
        useEffect(() => {
          if(inView && hasNextPage) {
            fetchNextPage()
          }
        },[inView])
        const {isSignedIn} = useUser()
        if(!isSignedIn) {
          redirect('/sign-in')
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
  
    {
        data && data.pages.map((page) => (
          <React.Fragment key={page.nextId ?? 'latPage'}>
              <CardContainer>
            {
                page.result?.result?.map((el : any,key : any) => (

                  <Card key={key} epname={el?.episode?.EpName} epNumber={el?.episode?.EpNumber} AnimeName={el?.episode?.anime?.title} animeId={el?.episode?.anime?.id} imageSrc={el?.episode?.anime?.imageUrl} showanimeName  />
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
