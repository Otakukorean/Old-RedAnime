import React from 'react'
import {CardContainer,AnimeCardContainer,AnimeCardImage,EpisodeTitle,SeenContainer} from '../Style'
import {AiOutlineEye} from 'react-icons/ai'
import {FiTrash2} from 'react-icons/fi'

import Link from 'next/link';
import { TypeIcon } from '../../AnimeDetails/Style'

interface PageProps {
  imageSrc : string ;
  epname : string ;
  epNumber : number;
  AnimeName ?: string;
  animeId : number;
  currentEpName ?: any  ;
  ifSeen ?: any
  showanimeName ?: boolean;
  isFirst ?: boolean
  isLast ?:boolean;
  bigCard ?:boolean;
}

const index = (props : PageProps) => {
  console.log(props.ifSeen);
  
  return (
    <Link href={`/watch/${props.AnimeName}/${props.epname}`}>
    <CardContainer>
      <AnimeCardContainer $isEp={props.bigCard}>
          <AnimeCardImage $isWatching={decodeURI(props.currentEpName)  == props.epname} src={props.imageSrc}  width={160} height={250} alt='' />
          {
            props.ifSeen && decodeURI(props.currentEpName) !== props.epname ? (
              <SeenContainer>
              <AiOutlineEye size={45} color='#FB2576'/>
            </SeenContainer>
            ) : null
          }
          {
            props.isFirst && (
              <TypeIcon style={{position:"absolute",top:"10px",left:"10px",padding:"2px 10px"}} >جديد</TypeIcon>
            )
          }
          {
            props.isLast && (
              <TypeIcon style={{position:"absolute",top:"10px",left:"10px",padding:"2px 10px"}} >الاخيرة</TypeIcon>
            )
          }
        
      </AnimeCardContainer>
      {props.showanimeName && <EpisodeTitle style={{fontSize:"1.2rem"}} >{props.AnimeName}</EpisodeTitle> }
      
      <EpisodeTitle >الحلقة  {props.epNumber}</EpisodeTitle>
    </CardContainer>
    </Link>
  )
}

export default index
