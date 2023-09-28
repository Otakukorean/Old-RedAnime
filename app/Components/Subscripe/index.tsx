import client from '@/app/libs/prisma/prismaDb';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { AiOutlineBell , AiFillBell } from 'react-icons/ai'
import { useMutation, useQueryClient } from "@tanstack/react-query"

interface PageProps {
     animeId : number;
     favourite : {}[];
     queryKey : string
}


 
const index = (props : PageProps) => {
  const found = props.favourite?.find((fav :any) => {
    return fav.animeId === props?.animeId
  })
      


        const queryClient = useQueryClient()

  const { mutate } = useMutation(
    async (animeId : number) => {
      return axios.post('/api/subscripe/Create' , {
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
               <AiFillBell title='مشترك'  onClick={() => mutate(props?.animeId)} cursor={'pointer'} color='#fff' size={30}/>

          ) :
          <AiOutlineBell title='اشتراك' onClick={() => mutate(props?.animeId)} cursor={'pointer'} color='#fff' size={30}/>
     }

    </div>
  )
}

export default index
