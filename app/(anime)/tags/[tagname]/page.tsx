"use client"
import React, { useEffect } from 'react'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useInView } from 'react-intersection-observer'
import Card from '@/app/Components/Cards/AnimeCard'
import { CardContainer } from '@/app/lib/GlobalStyle'
import { Container,LinetitleContainer ,Line , Jumpitle  } from '@/app/Components/AnimeJumptron/Style'

interface PageProps {
     params : {tagname : string}
}

const page = (props : PageProps) => {
     const {isLoading,isError,data,error,isFetchingNextPage,fetchNextPage,hasNextPage , refetch} = useInfiniteQuery(['filters'] , async({pageParam = 0}) => {
          const res= await fetch(`/api/anime/filter?page=${pageParam}&tagname=${decodeURI(props.params.tagname)}`)
          
      
          
          return res.json()
        } , {
          getNextPageParam: (lastPage, pages) => lastPage.hasNextPage && lastPage.nextPage
          ,
        })
        const {ref , inView} = useInView()
        
        
      
        useEffect(() => {
          if(inView && hasNextPage) {
            fetchNextPage()
          }
        }, [inView])
  return (
    <div>
      <title>{decodeURI(props.params.tagname)}</title>
         <Container >
     <LinetitleContainer>
          <Line/>
          <Jumpitle>{decodeURI(props.params.tagname)}</Jumpitle>
     </LinetitleContainer>

    </Container>

            <CardContainer layout>
        {
      
            <>
               {
        data && data.pages.map((page) => (
          <React.Fragment key={page.nextId ?? 'latPage'}>
            {
                page.result?.result?.map((el : any,key : any) => (
                  <Card key={key} data={{title : el.title,type : el.type,id : el.id,imageUrl:el.imageUrl , rating:el.rating,season:el?.season, year:el?.year,isLoading:isLoading,status:el?.status,description:el?.description}}/>
                ))
                
            }
       
          </React.Fragment>
        ))
      }
            </>
     
        }
 
   
      
         
      

     
      

      </CardContainer>
      <span ref={ref}  style={{visibility:"hidden"}}>load more</span>
    </div>
  )
}

export default page
