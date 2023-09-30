
import axios from 'axios';
import React from 'react'
import { AiOutlineBell , AiFillBell } from 'react-icons/ai'
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from 'react-toastify';
import { useUser } from '@clerk/nextjs';
interface PageProps {
     animeId : number;
     favourite : {}[];
     queryKey : string
}


 
const index = (props : PageProps) => {
  const {isSignedIn} = useUser()

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
  const Submit = (animeId : number) =>{
    if(!isSignedIn) {
      toast.error( "   !  عليك تسجيل الدخول     " ,{
        theme:"dark" ,
        style: {zIndex:100000}
      })
    }
    mutate(animeId)
  }

  
  return (
    <div>
     {
          found ? (
               <AiFillBell title='مشترك'  onClick={() => Submit(props?.animeId)} cursor={'pointer'} color='#fff' size={30}/>

          ) :
          <AiOutlineBell title='اشتراك' onClick={() => Submit(props?.animeId)} cursor={'pointer'} color='#fff' size={30}/>
     }

    </div>
  )
}

export default index
