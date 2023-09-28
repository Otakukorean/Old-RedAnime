import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
display: flex;
justify-content: start;
direction: ltr;

     position: relative;
     left: 40px;
     top: 100px;
     flex-wrap: wrap;
     padding-bottom: 20px;
     @media screen and (max-width : 768px) {
          justify-content: center;
          left: 0;
          top: 40px;
          align-items: center;
     }
`

export const AnimeCardContainer = styled.div`
  
     display: flex;
     justify-content: start;
     align-items: start;
     width:23rem ;
     height:35rem ;
    position: relative;


`
export const AnimeHeroCardImage = styled(Image)`
     border-radius: 17px;
     width: 100%;
     
` 

export const ReatingAndTypeContainer = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
  position   :absolute ;
width: 100%;
top: 10px;
padding: 10px;
font-family: "AGRevueCyr Roman Medium V2";


`

export const TypeIcon = styled.span`
     background-color: #FB2576;
     color: #fff;
     
     padding: 2px 20px;
     border-radius: 17px;
     box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
     
`
export const RatingIcon = styled.span`
     background-color: #2E51A2;
     color: #fff;
   
     padding: 2px 20px;
     border-radius: 17px;
     box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
     `

export const AnimeMoreDetails = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
padding-left: 20px;
padding-top: 20px;

@media screen and (max-width : 768px) {
     justify-content: center;
     align-items: center;
     padding-left: 0;
}
     
`
export const AnimeTitleContainer = styled.div`
@media screen and (max-width : 768px) {
     text-align: center;
}
    
`

export const AnimeTitle = styled.span`
     color: #fff;
     font-size: 2.5rem;
     font-family: "AGRevueCyr Roman Medium V2";
     @media screen and (max-width : 768px) {
          font-size: 2rem;
         line-height: 3;
}
    

     
`

export const AnimeDescriptionContainer = styled.div`
    width :600px ;

    @media screen and (max-width : 768px) {
     width: 340px;
     margin-bottom: 20px;
    }
`

export const AnimeDescription = styled.p`
     color: #ffffffcc;
     width: 100%;
     font-size: 1.3rem;
     direction: rtl;
     @media screen and (max-width : 768px) {
          text-align: center;
    }
     
`
export const AnimeWarchContainer = styled.div`
     display: flex;
     justify-content: center;
     gap: 1rem;
     flex-wrap: wrap;
     align-items: center;
    @media screen and (max-width : 768px) {
     justify-content: center;
     align-items: center;
     margin-bottom: 2rem;
    }

`
export const AnimeWatchButton =styled.button<{ $primary?: boolean; }>`
     all: unset;
     color: #fff;
     background-color: ${props => props.$primary ? "#FB2576" : "#222831"};
     filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.40)) ,brightness(1);
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 1rem;
     font-size: 1.3rem;
     padding: 10px 50px;
     border-radius: 17px;
     cursor: pointer;
     transition:  0.3s ease;
     
     &:hover {
          filter: brightness(0.8);
     }
`