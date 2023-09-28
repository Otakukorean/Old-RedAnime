import React from 'react'
import {Container,AnimeCardContainer,AnimeHeroCardImage,ReatingAndTypeContainer,TypeIcon,RatingIcon,AnimeMoreDetails,AnimeTitle , AnimeDescription, AnimeWarchContainer,AnimeWatchButton,AnimeTitleContainer,AnimeDescriptionContainer} from './Style'
import {AiOutlineYoutube,AiOutlinePlayCircle} from 'react-icons/ai'
import Link from 'next/link';

interface PagePorps {
  imageUrl : string ;
  type : string ;
  rating : number ;
  title : string ;
  description : string ;

}

const index = (props : PagePorps) => {
  return (
    <Container>
     <AnimeCardContainer>
          <AnimeHeroCardImage src={props.imageUrl} width={380} height={560} alt='' />
          <ReatingAndTypeContainer>
               <TypeIcon>{props.type}</TypeIcon>
               <RatingIcon>Mal {props.rating}</RatingIcon>
          </ReatingAndTypeContainer>
     </AnimeCardContainer>
    <AnimeMoreDetails>
      <AnimeTitleContainer>
    <AnimeTitle>{props.title}</AnimeTitle>
    </AnimeTitleContainer>
    <AnimeDescriptionContainer>
    <AnimeDescription>
    {props.description}
    </AnimeDescription>
    </AnimeDescriptionContainer>
      <AnimeWarchContainer >
        <Link href={`/anime/${props.title}`}>
      <AnimeWatchButton $primary> <AiOutlinePlayCircle color='#fff' size={35}/>  المشاهدة الان </AnimeWatchButton>
      </Link>
      </AnimeWarchContainer>
    </AnimeMoreDetails>
    </Container>
  )
}

export default index
