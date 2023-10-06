"use client"
import { CardContainer } from '@/app/lib/GlobalStyle'
import React, { useEffect } from 'react'
import Card from '@/app/Components/Cards/AnimeCard'
import { AddBtn ,AddBtnContainer } from '../anime-list/Styles'
import { useUser } from '@clerk/nextjs'
import ModalBtn from '@/app/Components/Modal/anime/CreateAnime/ModalBtn'
import CreateModal from '@/app/Components/Modal/anime/CreateAnime/CreateModal'
import CreateGenerModal from '@/app/Components/Modal/Gener/CreateGenerModal'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useInView } from 'react-intersection-observer'




const page = () => {
 
  const {isLoading,isError,data,error,isFetchingNextPage,fetchNextPage,hasNextPage , refetch} = useInfiniteQuery(['popular'] , async({pageParam = 0}) => {
    const res= await fetch(`/api/anime/rating?page=${pageParam}`)
    return res.json()
  } , {
    getNextPageParam :(lastPage, pages) => lastPage.hasNextPage && lastPage.nextPage
  })
  const {ref , inView} = useInView()
  
  
  const {user } = useUser()

  useEffect(() => {
    if(inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView])

  if(isLoading) {
    return <span>Loading ...</span>
  }

  return (
    <div >
      <title>الاكثر شهرة</title>
      {user?.organizationMemberships[0].role === "admin" && (
           <AddBtnContainer>
                   <ModalBtn title={<AddBtn>Add Anime</AddBtn>} ModalPage={<CreateModal refetch={refetch}/>} />
                   <ModalBtn title={<AddBtn>Add Gener</AddBtn>} ModalPage={<CreateGenerModal/>} />
           
          
           </AddBtnContainer>
      )}
   

      {
        data && data.pages.map((page) => (
          <React.Fragment key={page.nextId ?? 'latPage'}>
                <CardContainer>
            {
                
                page.result?.result?.map((el : any,key : any) => (
                  <Card key={key} data={{title : el?.anime?.title,type : el?.anime?.type,id : el?.anime?.id,imageUrl:el?.anime?.imageUrl , rating:el?.anime?.rating,season:el?.season, year:el?.year,status:el?.status,description:el?.description}}/>
                ))
                
            }
            </CardContainer>
             <span ref={ref}  style={{visibility:"hidden"}}>load more</span>
       
          </React.Fragment>
        ))
      }
      
     
      


    </div>
  )
}

export default page
