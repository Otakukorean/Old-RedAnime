import styled from "styled-components";

export const Header = styled.header`
     background-color: rgba(19, 20, 21, 1);
     direction: rtl;
     background-blend-mode:hard-light;
     padding-top: 5px;
     position: fixed;
     overflow: hidden;
     width: 100%;
     top: 0; 
     height: 4rem;
     z-index: 999999;
`

export const Nav = styled.nav`
     padding:3px 10px;

`
export const Ul = styled.ul`
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding-top:5px ;
`

export const Logo = styled.div`
     img {
          width: 75px;
          height: 35px;
          object-fit: cover;
          border-radius: 17px 17px 17px 17px;
     }
`

export const SecondItemsContainer = styled.ul`
        display: flex;
     align-items: center;
     justify-content: space-between;
     direction: ltr;
     gap:1rem;
`


export const Items = styled.li`
     margin: 0 10px;
     
     
`
export const LogoMenuContainer = styled.div`
     display : flex;
     justify-content: center;
     align-items: center;
     flex-direction: row-reverse;
     gap: 1rem;
`

export const Avatar = styled.div`
     img {
          width: 40px;
          height: 40px;
          border-radius: 100%;
          object-fit: cover;
     }
`

export const SignInBtn = styled.a`
     all:unset ;
     padding:5px 15px ;
     color:#fff ;
     background-color:#FB2576 ;
     border-radius:15px ;
     transition:all .2s ease ;
     cursor: pointer;
     &:hover {
          filter:brightness(0.7) ;
     }
` 
