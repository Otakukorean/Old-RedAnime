import styled from "styled-components"

import Link from 'next/link'


export const Main = styled.main`
     position: relative;
     margin:3rem 0rem 0 0 ;
     
     font-size: 1rem;
     
     transition:  .2s;
     direction: rtl;
     &.space-toggle {
          @media screen and (max-width : 768px) {
               padding-right: 0;
          }
     }
     &.Show-space-toggle{
          
          padding-right: calc(68px + 40px);
          @media screen and (max-width : 768px) {
               padding-right: 0;


    }
     }

   

    
`

export const SiderBarContainer =styled.aside`
     position: fixed;
     top:48px ;
     right: -30%;
     height: 100vh;
     width:68px ;

     z-index: 99;
     background-blend-mode:hard-light;
     padding-top: 1rem;
     transition: .2s;
     span {
          display: none;
     }
    &.show {
     right: 0;
     background-color: rgba(19, 20, 21, 1);
     span {
          display: block;
     }
     @media screen and (min-width: 768px) {
 
    width: calc(68px + 100px);
  

    }
    @media screen and (max-width: 768px) {
 
     width: calc(68px + 100px);


 }
    
    }
      @media screen and (min-width : 768px) {
          right: 0;
          width:60px ;
          background-color: rgba(19, 20, 21, 0.5);
     }




` 

export const Nav = styled.nav`
    display :flex ;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  
    height: 100%;
`
export const NavLogo = styled.a`
       display: flex;
 align-items: center;
  column-gap: 2rem;
     padding: .5rem 1rem 0.5rem 0rem;
  
     gap: 0.5rem;
     margin-bottom: 2rem;
     transition: all.5s;
     &:hover {
          background-color: rgba(0,0,0,0.1);
        
     }
`
export const NavName= styled.span`
     color: #fff;
     font-size: 14px;
`

export const NavLogoIcon = styled.i`
     
`

export const NavList = styled.div`
    display :flex ;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`