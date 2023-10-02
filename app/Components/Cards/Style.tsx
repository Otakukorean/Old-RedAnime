import Image from "next/image";
import styled from "styled-components";



export const CardContainer = styled.div<{ $isEp?: boolean; }>`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     gap: 0.2rem;
     margin-top: 1.5rem;
     cursor: pointer;
     filter: brightness(1);
     transition: all .2s ease;
  
     @media screen and (max-width : 768px) {
          gap: 0.5rem;
    }
`

export const AnimeCardContainer = styled.div<{ $isEp?: boolean; }>`
  
     display: flex;
     justify-content: center;
     align-items: center;
     width:${props => props.$isEp ? "10rem" : "13.75rem"}  ;
     height:${props => props.$isEp ? "15rem" : "21rem"}  ;
    position: relative;

    @media screen and (max-width : 450px) {
     width: ${props => props.$isEp ? "10rem" : "11.75rem"};
     height:${props => props.$isEp ? "15rem" : "17rem"};
    }
    @media screen and (max-width : 376px) {
     width: ${props => props.$isEp ? "10rem" : "10.8rem"};
     height:${props => props.$isEp ? "15rem" : "17rem"};
    }
    
 
    


`
export const AnimeCardImage = styled(Image)<{$isWatching ?: boolean}>`
     border-radius: 17px;
     width: 100%;
     object-fit:cover ;
     height: 100%;
     filter: brightness(${props => props.$isWatching ? "0.7" : "1"}) ;
     position:relative ;
     transition: all 0.2s ease;
        &:hover {
          filter: brightness(0.8);
     }
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
export const StatusIcon = styled.span`
     background-color: #FB2576;
     color: #fff;
     position: absolute;
     bottom: 10px;
     left: 10px;
     font-size: 0.9rem;
     padding: 2px 10px;
     border-radius: 17px;
     box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
     
`
export const RatingIcon = styled.span`
     background-color: #2E51A2;
     color: #fff;
   
     padding: 2px 10px;
     border-radius: 17px;
     box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
export const AnimeTitle = styled.span`
text-align: center;
     font-size: 1rem;
     font-family:'Cairo' ;
     color: #fff;
     font-weight: bold;
    margin: 0;
    white-space: nowrap;
    width: 13rem;
    overflow: hidden;
    text-overflow: ellipsis;
    direction: ltr;
    @media screen and (max-width: 480px) {
     font-size: 1rem;
     width: 11rem;
    }
    @media screen and (max-width: 376px) {
  
  width: 10rem;
 }
`
export const EpisodeTitle = styled.span`
     text-align: center;
     font-size: 1rem;
     font-family:'Cairo' ;
     color: #fff;
`
export const SeenContainer = styled.div`
     position:absolute ;
     top:50% ;
     left:50% ;
     transform:translate(-50% , -50%) ;
     height:100% ;
     width:100% ;
     display:flex ;
     justify-content:center ;
     align-items:center ;
     background-color:rgba(0,0,0,0.2) ;

`
export const SeasonGenerContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 13rem;
@media screen and (max-width: 480px) {
  
     width: 11rem;
    }
@media screen and (max-width: 376px) {
  
     width: 10rem;
    }
`
export const Season_Gener = styled.span`
     color: #ffffffbe;
     font-size: 13px;

`

export const Description = styled.span`
color:#000 ;
 overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 5; /* number of lines to show */
           line-clamp: 5;
   -webkit-box-orient: vertical;
`

