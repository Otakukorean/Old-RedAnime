import Image from "next/image";
import styled from "styled-components";

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
max-width: 1000px;
     min-width: 300px;
`
export const AnimeSeasonandGener = styled.a`
     font-size:1.25rem ;
     color:#FB2576 ;
     cursor: pointer;
`
