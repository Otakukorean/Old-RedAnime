import client from '@/app/libs/prisma/prismaDb';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { AiOutlineClockCircle , AiFillClockCircle } from 'react-icons/ai'
import { useMutation, useQueryClient } from "@tanstack/react-query"

interface PageProps {
     animeId : number;
     watchLater : {}[];
     queryKey : string
}


 
const index = (props : PageProps) => {

     // const found = prop.Likes?.find((like :any) => {
     //      return like.postId === prop.id && like.userId === user?.user?.id
     //    })
     const found = props.watchLater?.find((fav :any) => {
          return fav.animeId === props?.animeId
        })      
   
  
        const queryClient = useQueryClient()

        const { mutate } = useMutation(
          async (animeId : number) => {
            return axios.post('/api/WatchLater/Create' , {
              animeId :animeId
            })
          },
          {
            
            onSuccess: (data) => {
              queryClient.invalidateQueries([props.queryKey])
          
      
            },
            onError: (error) => {
              console.log(error)
            
          
            },
          }
        )
  return (
    <div>
     {
          found ? (
               <AiFillClockCircle  onClick={() => mutate(props?.animeId)} cursor={'pointer'} color='#fff' size={30}/>

          ) :
          <AiOutlineClockCircle  onClick={() => mutate (props?.animeId)} cursor={'pointer'} color='#fff' size={30}/>
     }

    </div>
  )
}

export default index
