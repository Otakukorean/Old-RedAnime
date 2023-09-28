import styled from "styled-components";


export const Container = styled.div`
    padding-top: 1rem;
    @media screen and (min-width:768px) {
     padding-right: 60px;
    }
    margin-bottom: 1rem;
`

export const CardContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 5.375rem;
`
export const LinetitleContainer = styled.div`
display:flex;
justify-content: start;
align-items: center;
gap: 0.5rem;
`

export const Line = styled.div`
     background-color: #FB2576;
     width: 3px;
     height: 50px;
     border-radius: 17px;
`
export const Jumpitle =styled.span`
     color: #fff;
     font-size: 1.5rem;
`