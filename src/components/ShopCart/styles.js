import styled from "styled-components"

const WrapCart = styled.div`
   width: 100%;
   margin: 0 auto;
   background-color: ${props => props.theme.color.secondyClear};
   text-align: center;
   padding: 30px 0 20px;
`

const Title = styled.h1`
   font-family: ${props => props.theme.font.primary};
   font-size: ${props => props.theme.size.mediumBig};
   font-weight: 700;
   color: ${props => props.theme.color.firstMedium};
`

const PurchaseList = styled.ul`
   display: grid;
   grid-template-columns: repeat(2, 1fr);   
   margin: 0;
`

export {
   WrapCart,
   Title,
   PurchaseList
}