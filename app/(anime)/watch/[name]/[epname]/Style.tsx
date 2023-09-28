import styled from "styled-components";

export const Container = styled.section`
display: flex;
justify-content: center;
align-items: center;
padding-top: 20px;
flex-direction: column;
gap: 2rem;
     @media screen and (min-width:768px) {
          padding-right: 60px;
     }
`

export const VideoServersContainer = styled.div`

     display: flex;
     justify-content: center;
     align-items: center;
    
     gap: 1rem;
     
`

export const ServersButtonsContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 1rem;
     flex-wrap: wrap;
     direction: rtl;

`

export const ServerButton = styled.button<{$isActive : boolean}>`
     all: unset;
     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     font-size: 1.2rem;
     background-color:${props => props.$isActive ? "#FB2576 " : "#fff" } ;
     padding: .6rem 2.5rem;
     color:${props => props.$isActive ? "#fff " : "#000" } ;
     border-radius:10px ;
     cursor: pointer;
     text-transform: uppercase;
`

export const VideoWatchContainer =styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 1rem;
     flex-direction:column;
        margin-bottom: 2rem;
        width: 80vw;
`


export const NextPrevContainer= styled.div`
     display: flex;
     justify-content: space-between;
     width: 100%;
     padding: 0 1rem;
     flex-wrap: wrap;
`
export const NextPrevButton = styled.button<{$isprev : boolean}>`
all: unset;
color: #fff;
padding: 0.5rem 2rem;
background-color: ${props => props.$isprev ? "#30475E":"#FB2576"};
     border-radius: 10px;
     transition: all 0.2s ease;
     cursor: pointer;
     &:hover {
          filter: brightness(0.8);
     }
`

export const VidoeContainer = styled.div`
       position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
    height: 0;
    margin-bottom: 0px;
     width: 100%;
    iframe {
     border: none;
  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    }
`
