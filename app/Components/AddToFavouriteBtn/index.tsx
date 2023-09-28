import client from '@/app/libs/prisma/prismaDb';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { AiOutlineHeart , AiFillHeart } from 'react-icons/ai'
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
      return axios.post('/api/favourite/Create' , {
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
               <AiFillHeart title='مضاف الى قائمة المفضلة'  onClick={() => mutate(props?.animeId)} cursor={'pointer'} color='#FB2576' size={30}/>

          ) :
          <AiOutlineHeart title='اضافة الى قائمة المفضلة' onClick={() => mutate(props?.animeId)} cursor={'pointer'} color='#FB2576' size={30}/>
     }

    </div>
  )
}

export default index
