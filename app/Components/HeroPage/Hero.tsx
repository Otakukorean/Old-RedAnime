"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import {HeroContainer} from './Style'
 import AnimeDetails from './AnimedDetils'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getAllPinned = async () => {
  const result = await axios.get('/api/anime/getPinned')
  return result.data
}


const Hero = () => {
  const {data ,isError , isFetching , isLoading} = useQuery({queryFn : () => getAllPinned() , queryKey:['pinned']})
  
  return (
    <Swiper
    
    slidesPerView={1}
    autoHeight
    dir="ltr"
    >
      {
        data?.result?.result?.map((el : any) => (
          <SwiperSlide>
          <HeroContainer 
         layout 
        style={{'background' : `linear-gradient(rgba(19, 20, 21, 0.1), rgba(19, 20, 21,1)),url(${el?.backdropImage}) center center/cover  `,width:"100vw",height:"95vh"}}>
         <AnimeDetails imageUrl={el?.imageUrl} description={el?.description} rating={el?.rating} title={el?.title} type={el?.type}  />
        </HeroContainer>
          </SwiperSlide>
        ))
      }


  
   
  
     

    </Swiper>
  )
}

export default Hero
