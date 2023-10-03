"use client"
import React, { useEffect, useState } from 'react'
import {AnimeDetailsContainer,AnimeCardActionsContainer,AnimeCardContainer,AnimeHeroCardImage, ReatingAndTypeContainer, TypeIcon, RatingIcon,AnimeActionContainer,ItemsContainer,AnimeDetails,AnimeTitle,AnimeStory,AnimeSeasonandGener,SeasonButtonsContainer,SeasonButton,AdminBtns,AdminBtn} from './Style'
import { Container,LinetitleContainer ,Line , Jumpitle  } from '@/app/Components/AnimeJumptron/Style'

import { Badge} from '@mantine/core'
import EpisodeCard from '../Cards/EpisodeCard'
import { Swiper , SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { useUser } from '@clerk/nextjs'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { redirect } from 'next/navigation'

import ModalBtn from '../Modal/anime/CreateAnime/ModalBtn'
import { AddBtnContainer } from '@/app/(anime)/anime-list/Styles'
import { CreateEpisode } from '../Modal/Episode/AddEpisode/CreateEpisode'
import UpdateModal from '../Modal/anime/UpdateAnime/UpdateModal'
import AddTofavourite from '../AddToFavouriteBtn/index'
import AddToWatchLaterBtn from '../AddToWatchLaterBtn'
import Subscripe from '../Subscripe'
import { modals } from '@mantine/modals';
import Link from 'next/link'
import AnimeCard from '../Cards/AnimeCard'
import { UpdateEpisode } from '../Modal/Episode/UpdateEpisode/UpdateEpisode'
interface PageProps {
  name : string ;
  epName ?:string;
}

const GetanimeDetails = async (animename : string) => {
  const result = await axios.get(`/api/anime/getByname?name=${animename}`)
  return result.data
}

const index = (props : PageProps) => {
  const [ifSeen ,SetIfSeen] = useState([]) 
  const {data , refetch , isLoading ,isFetching , isFetched } = useQuery({queryFn : () => GetanimeDetails(props.name),queryKey :['animeDetails']})
  const AnimeModal = (animeId:number) => modals.openConfirmModal({
    title: ' هل تريد حذف الانمي ؟',
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => deleteAnime(animeId),
    styles :{'body':{background:"#101317",color:"#fff"},'header':{background:"#101317",color:"#fff"}} ,
    centered:true
  });
  const EpisodeModal = (epId:number) => modals.openConfirmModal({
    title: '  هل تريدحذف الحلقة ؟',
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => deleteEpisode(epId),
    styles :{'body':{background:"#101317",color:"#fff"},'header':{background:"#101317",color:"#fff"}} ,
    centered:true
  });

  const deleteAnime = async (animeId : number) => {
    await axios.delete(`/api/anime/Delete?animeId=${animeId}`).then((res :any) => {
     
        redirect('/')
      

    }).catch((err) => {
 
      
    })
  }
  const deleteEpisode = async (epId : number) => {
    await axios.delete(`/api/Episodes/Delete?episodeId=${epId}`).then((res :any) => {
     
      refetch()
      

    }).catch((err) => {
      
      
    })
  }

  
  const {user } = useUser()
     const breakpoints = {

          320: {
            slidesPerView: 1.9,
            spaceBetween: 20
          },
    
      360 : {
            slidesPerView: 2.3,
        spaceBetween: 30
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
            slidesPerView: 7.5,
            spaceBetween: 40
          }
        }
     const breakpoints2 = {

          320: {
            slidesPerView: 1.3,
            spaceBetween: 20
          },
    
      360 : {
            slidesPerView: 1.7,
        spaceBetween: 30
      },
          480: {
            slidesPerView: 2.3,
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
            slidesPerView: 7.5,
            spaceBetween: 40
          }
        }

    if(isLoading && isFetching && isFetched) {
      return <span>Loading ....</span>
    }
    useEffect(() => {
      const getHistory = async () => {
        await axios.get('/api/history/ByUser').then((res) => {
          SetIfSeen(res.data)
        }).catch((err) => {
          
        })
      }
      if(!isFetching && !isLoading && user ){
        getHistory()
      }
    },[isFetching , isLoading])
    
  return (
    <>

    <meta name="description" content={`جميع حلقات انمي ${data?.anime?.id} مترجمة  بجودة عالية  ${data?.anime?.id} مترجم كامل على موقع ريد انمي. `}/>
    <link rel="canonical" href={`https://redanime.net/anime/${data?.anime?.anime?.id}`}/>
    <meta property="og:locale" content="ar_AR"/>
    <meta property="og:type" content="article"/>
    <meta property="og:title" content={`جميع حلقات انمي ${data?.anime?.id} مترجمة  بجودة عالية  ${data?.anime?.id} مترجم كامل على موقع ريد انمي. `}/>
    <meta property="og:description" content={`جميع حلقات انمي ${data?.anime?.id} مترجمة  بجودة عالية  ${data?.anime?.id} مترجم كامل على موقع ريد انمي. `}/>
    <meta property="og:url" content={`https://redanime.net/anime/${data?.anime?.id}`}/>
    <meta property="og:site_name" content="RedAnime"/>
    <meta name="twitter:card" content={data?.anime?.imageUrl}/>
    <div>
      
      <AnimeDetailsContainer>
     <AnimeCardActionsContainer>
     <AnimeCardContainer>
     <AnimeHeroCardImage src={data?.anime?.imageUrl} width={380} height={560} alt='' />
     <ReatingAndTypeContainer>
          <TypeIcon>{data?.anime?.type}</TypeIcon>
          <RatingIcon>Mal {data?.anime?.rating}</RatingIcon>
     </ReatingAndTypeContainer>
     </AnimeCardContainer>
     <AnimeActionContainer>
          <ItemsContainer>
          <AddToWatchLaterBtn watchLater={data?.anime?.WatchLater} queryKey='animeDetails'  animeId={data?.anime?.id}  />
     <AddTofavourite favourite={data?.anime?.favoriteList} queryKey='animeDetails'  animeId={data?.anime?.id} />
     <Subscripe favourite={data?.anime?.Subscripe} queryKey='animeDetails'  animeId={data?.anime?.id} />
          </ItemsContainer>

     </AnimeActionContainer>
     </AnimeCardActionsContainer>
     <AnimeDetails>
     <AnimeTitle>
     الاسم : {data?.anime?.title}
     </AnimeTitle>
     <AnimeStory>
 {data?.anime?.description}
     </AnimeStory>
     <span style={{color:"#fff",fontSize:"1.25rem"}}> السنة و الموسم : <AnimeSeasonandGener href={`/animes/${data?.anime?.year}/${data?.anime?.season}`}>{data?.anime?.season} {data?.anime?.year}</AnimeSeasonandGener></span>
     <span style={{color:"#fff",fontSize:"1.25rem"}}>  التصنيف : <AnimeSeasonandGener href={'#'}>
       {data?.anime?.AnimeTags?.map((el : any) => (
         <Link href={`/tags/${el?.tag?.name}`}>
         <Badge styles={{'root' :{background : "#FB2576",color:"#fff",fontSize:"0.8rem",padding:"13px 10px"} ,'inner' :{padding:"8px 5px"}}} m={7} >{el?.tag?.name}</Badge>
         </Link>
       ))}
       </AnimeSeasonandGener></span>
     {user?.organizationMemberships[0].role === "admin"&& (
       <AddBtnContainer>
         <ModalBtn title={<AdminBtn >اضافة حلقة</AdminBtn>} ModalPage={<CreateEpisode animeId={data?.anime?.id} refetch={refetch}  />} />
         <ModalBtn title={<AdminBtn >تعديل الانمي</AdminBtn>} ModalPage={<UpdateModal id={data?.anime?.id} title={data?.anime?.title} imageUrl={data?.anime?.imageUrl} backdropImage={data?.anime?.backdropImage} description={data?.anime?.description}  rating={data?.anime?.rating} refetch={refetch} type={data?.anime?.type}  pin={data?.anime?.pin} season={data?.anime?.season} year={data?.anime?.year} secondtitle={data?.anime?.secondtitle} airday={data?.anime?.airday} status={data?.anime?.status} />} />
       <AdminBtn onClick={() => AnimeModal(data?.anime?.id)}>حذف الانمي</AdminBtn>
       </AddBtnContainer>
     )}
   
 
     </AnimeDetails>

     </AnimeDetailsContainer>

     <Container >
     <LinetitleContainer>
          <Line/>
          <Jumpitle>الحلقات</Jumpitle>
     </LinetitleContainer>

    </Container>
      
     <Swiper 
      spaceBetween={50}
      slidesPerView={6}
     breakpoints={breakpoints}
     style={{paddingRight:"30px",paddingLeft:"15px"}}
     className='my-swiper'
     dir='ltr'
     >
     
       {data?.anime?.Episodes?.map((el : any) => (
         <SwiperSlide>
         <EpisodeCard animeId={data?.anime?.id} bigCard  currentEpName={props?.epName} ifSeen={ifSeen.some((some: any) => some.epId === el.id)}   epname={el?.EpName} epNumber={el?.EpNumber} AnimeName={data?.anime?.title}  imageSrc={data?.anime?.imageUrl}/>
         {user?.organizationMemberships[0].role === "admin"&& (
           <AddBtnContainer>
                       <AdminBtn style={{width:"75px",padding:"3px",fontSize:"0.8rem"}} onClick={() => EpisodeModal(el?.id)}>حذف الحلقة</AdminBtn>
                       <ModalBtn title={<AdminBtn style={{width:"75px",padding:"3px",fontSize:"0.8rem"}} >تعديل الحلقة</AdminBtn>} ModalPage={<UpdateEpisode id={el?.id} EpName={el?.EpName} EpNumber={el?.EpNumber} animeId={el?.animeId} isfirst={el?.isfirst} islast={el?.islast} pin={el?.pin} refetch={refetch}  Servers={el?.Servers} />} />
           </AddBtnContainer>
         )}
         </SwiperSlide>
       ))}
 
      
       
          
     </Swiper>
     {
      data?.relevant && (
        <>
            <Container >
     <LinetitleContainer>
          <Line/>
          <Jumpitle>قد يعجبك</Jumpitle>
     </LinetitleContainer>

    </Container>

    <Swiper 
      spaceBetween={50}
      slidesPerView={6}
     breakpoints={breakpoints2}
     style={{paddingRight:"30px",paddingLeft:"40px"}}
     className='my-swiper'
     dir='ltr'
     >
     
          {
            data?.relevant?.map((el : any) => (
              <SwiperSlide>
                <AnimeCard data={{id:el?.id,imageUrl:el?.imageUrl,rating:el?.rating,status:el?.status,title:el?.title,type:el?.type}} />
              </SwiperSlide>
            ))
          }
 
      
       
          
     </Swiper>
        </>
      )
     }
 
</div>
    </>
  
  )
}

export default index
