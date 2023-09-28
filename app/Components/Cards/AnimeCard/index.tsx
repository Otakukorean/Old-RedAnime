import React from 'react'
import {AnimeCardContainer, AnimeCardImage, CardContainer, RatingIcon, ReatingAndTypeContainer, TypeIcon,AnimeTitle,SeasonGenerContainer,Season_Gener , StatusIcon} from '../Style'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useMediaQuery } from '@mantine/hooks';
import { CardContainer as Container } from '@/app/lib/GlobalStyle'
import {Flex, HoverCard ,Text,Badge} from '@mantine/core'

import Link from 'next/link';
interface CardType {
     data : {
          title : string;
          type  : string;
          imageUrl : string;
          id : number;
          rating : number;
          season ?: string ;
          year ?: number ;
          isLoading ?: boolean;
          AnimeTags ?: {}[];
          description ?: string;
          status : string;
     } ,
 
  
}

 
const index = (props : CardType) => {
     const matches = useMediaQuery('(min-width: 56.25em)');

  
  return (
     <>
     {
          !props.data.isLoading && (
               <Link href={`/anime/${props?.data?.title}`}>

    <CardContainer>
     {
          props.data.description ? (
               <HoverCard position='top' styles={{'dropdown' :{background:"#fff"}}}>
               <AnimeCardContainer>
                   <AnimeCardImage   src={props?.data?.imageUrl} width={380} height={560} alt='' />
                   <ReatingAndTypeContainer>
                        <TypeIcon>{props?.data?.type}</TypeIcon>
                        <RatingIcon>Mal {props.data.rating}</RatingIcon>
                   </ReatingAndTypeContainer>
                   {props.data.status && (
                      <StatusIcon>{props.data.status}</StatusIcon>
                   )}
                 
              </AnimeCardContainer>  
              <HoverCard.Target>
              <AnimeTitle>{props?.data?.title}</AnimeTitle>
              </HoverCard.Target>  
              <SeasonGenerContainer>
                   <Season_Gener> {props?.data?.season} {props?.data?.year}</Season_Gener>
                   
              </SeasonGenerContainer>
              <HoverCard.Dropdown>
                   <AnimeTitle style={{textAlign:"center",color:"#000"}}>{props.data?.title}</AnimeTitle><br />
                   <Text color='#000' style={{maxWidth:"300px",direction:'rtl'}}>القصة : {props.data.description}  </Text>

                 </HoverCard.Dropdown>
              </HoverCard>
          ) : (
               <>
                     <AnimeCardContainer>
                   <AnimeCardImage   src={props?.data?.imageUrl} width={380} height={560} alt='' />
                   <ReatingAndTypeContainer>
                        <TypeIcon>{props?.data?.type}</TypeIcon>
                        <RatingIcon>Mal {props.data.rating}</RatingIcon>
                   </ReatingAndTypeContainer>
              </AnimeCardContainer>  
              <AnimeTitle title={props?.data?.title}>{props?.data?.title}</AnimeTitle>
              <SeasonGenerContainer>
                   <Season_Gener> {props?.data?.season} {props?.data?.year}</Season_Gener>
                   
              </SeasonGenerContainer>
               </>
          )
     }

    </CardContainer>

    </Link>
          )
     }
     {
          props.data.isLoading && (
               <Container>
               <Skeleton count={1} width={matches ? 220 : 188} height={matches ?336: 300}/>
               <Skeleton count={1} width={matches ? 220 : 188} height={matches ?336: 300}/>
               <Skeleton count={1} width={matches ? 220 : 188} height={matches ?336: 300}/>
               <Skeleton count={1} width={matches ? 220 : 188} height={matches ?336: 300}/>
               <Skeleton count={1} width={matches ? 220 : 188} height={matches ?336: 300}/>
               <Skeleton count={1} width={matches ? 220 : 188} height={matches ?336: 300}/>
               <Skeleton count={1} width={matches ? 220 : 188} height={matches ?336: 300}/>
               <Skeleton count={1} width={matches ? 220 : 188} height={matches ?336: 300}/>
               <Skeleton count={1} width={matches ? 220 : 188} height={matches ?336: 300}/>
               <Skeleton count={1} width={matches ? 220 : 188} height={matches ?336: 300}/>
               <Skeleton count={1} width={matches ? 220 : 188} height={matches ?336: 300}/>
               <Skeleton count={1} width={matches ? 220 : 188} height={matches ?336: 300}/>
     
             </Container> 
          )
     }
    </>
  )
}

export default index
