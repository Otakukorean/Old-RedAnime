import React from 'react'
import AnimeCard from '../Cards/AnimeCard'
import {CardContainer,Container,Line,Jumpitle,LinetitleContainer} from '../AnimeJumptron/Style'
import { Swiper, SwiperSlide } from 'swiper/react';
import EpisodeCard from '../Cards/EpisodeCard'
// Import Swiper styles
import 'swiper/css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface PageProps {
   title : string; 
  
}

  const getAllRecent = async () => {
    const result = await axios.get('/api/anime/recent')

    
    return result.data
  }
const index = (props : PageProps) => {
    const {data} = useQuery({queryFn :() => getAllRecent() , queryKey:['latest']});
     const breakpoints = {

          320: {
            slidesPerView: 1.9,
            spaceBetween: 20
          },
    
      360 : {
            slidesPerView:1.5,
        spaceBetween: 20
      },
          480: {
            slidesPerView: 3,
            spaceBetween: 30
          },
    
          640: {
            slidesPerView: 5,
            spaceBetween: 40
          } ,
          1000 : {
            slidesPerView: 5,
            spaceBetween: 40
          } ,
          1300 : {
            slidesPerView: 6,
            spaceBetween: 40
          }
        }
  return (
     <Container>
   
  
          {
            data?.result?.result?.length && (
              <>
                          <LinetitleContainer>
                   <Line></Line>
                   <Jumpitle> {props.title} </Jumpitle>
              </LinetitleContainer>
        <Swiper breakpoints={breakpoints} >
    
                <React.Fragment>
                  {
                      data?.result?.result?.map((el : any,key : any) => (
                        <SwiperSlide>
                          {
                        
                            <AnimeCard data={{title : el.title , imageUrl : el.imageUrl ,rating : el.rating , id : el.id ,type:el.type,status :el?.status,description : el?.description , season : el?.season,year : el?.year}} />
              
                          }
                        </SwiperSlide>
                      ))
                      
                  }
             
                </React.Fragment>
         
          

    
    
    
        </Swiper>
        </>
  )
     
          
}
         

     

    </Container>
  )
}

export default index
