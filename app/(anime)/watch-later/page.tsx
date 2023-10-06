"use client"
import { Container,LinetitleContainer ,Line , Jumpitle  } from '@/app/Components/AnimeJumptron/Style'
import { CardContainer } from '@/app/lib/GlobalStyle'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'
import Card from '@/app/Components/Cards/AnimeCard'

import { useUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

// (p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0);

const page = () => {
     const {isLoading,isError,data,error,isFetchingNextPage,fetchNextPage,hasNextPage , refetch,isFetching} = useInfiniteQuery(['watchLater'] , async({pageParam = 0}) => {
          const res= await fetch(`/api/WatchLater/Get?page=${pageParam}`)
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
        const {isSignedIn} = useUser()
        if(!isSignedIn) {
          redirect('/sign-in')
          }
        if(isLoading && isFetching) {
          return <span>Loading ...</span>
        }
        
  return (
     <>
     <title>المشاهدة لاحقا</title>
    <Container >
     <LinetitleContainer>
          <Line/>
          <Jumpitle>المشاهدة لاحقا</Jumpitle>
     </LinetitleContainer>

    </Container>
    {
        data && data.pages.map((page) => (
          <React.Fragment key={page.nextId ?? 'latPage'}>
                <CardContainer>
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
