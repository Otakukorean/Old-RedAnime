import Image from "next/image";
import Link from "next/link";
import styled from "styled-components"
export const AnimeDetailsContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: start;
     gap: 1rem;
     padding-top: 3rem;
     flex-wrap: wrap;
     position: relative;
`
export const AnimeCardActionsContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
`

export const AnimeCardContainer = styled.div`
  
     display: flex;
     justify-content: center;
     align-items: center;
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
flex-direction: row-reverse;


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
export const AnimeActionContainer = styled.div`
background-color:#222831 ;
border-radius: 17px;
width: 100%;
margin-top: .5rem;

`
export const ItemsContainer = styled.div`
     padding: 10px;
     width: 100%;
     display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row-reverse;
`

export const AnimeDetails = styled.div`
     background-color: #222831;
     padding: 10px;
     display: flex;
     justify-content: space-between;
     align-items: start;
     flex-direction: column;
    
     border-radius: 10px;
     gap: 1rem;
     margin: 1rem;
     width: 50%;

     @media screen and (max-width : 768px) {
          width: 95%;
     }
   
`
export const AnimeTitle = styled.span`
     font-size: 1.8rem;
     color: #fff;

`
export const AnimeStory = styled.span`
 color: #ffffffaf;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 100%;
word-wrap: break-word;
`
export const AnimeSeasonandGener = styled(Link)`
     font-size:1.25rem ;
     color:#FB2576 ;
     cursor: pointer;
`

export const SeasonEpContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     gap: 1rem;

`

export const SeasonButtonsContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 0.5rem;
     flex-wrap: wrap;
     margin-top: 1.5rem;
`
export const SeasonButton = styled.button<{ $isActive?: boolean;}>`
     all: unset;
     color: ${props => props.$isActive ? "#fff" : "#000"} ;
     background-color: ${props => props.$isActive ? "#FB2576" : "#fff"}  ;
     filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.40));
     font-size:1.25rem ;
     padding: 0.5rem 3rem;
     border-radius: 10px;
     cursor: pointer;
     @media screen and (max-width : 768px) {
          padding: 0.3rem 1rem;
     }
`
export const AdminBtns = styled.div`
display:flex ;
gap:0.5rem;
`
export const AdminBtn = styled.a`
     all:unset ;
     display:flex ;
     justify-content:center ;
     padding:10px ;
     background-color:#FB2576 ;
     color:#fff ;
     border-radius:10px ;
     font-size:1.2rem ;
     cursor: pointer;
     @media screen and (max-width : 768px){
          font-size: .8rem;
     }
`
export const Title = styled.span`
font-size:1.2em ;
padding:2px ;
background-color:#FB2576 ;
text-align:center ;
`
