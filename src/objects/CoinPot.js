import React from "react"
import styled from "styled-components"

const WrapContent = styled.div`
   width: 100%;
   background-color: ${props => props.theme.color.firstMedium};
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 20px;
`

const Content = styled.h1`
   display: flex;
   font-family: ${props => props.theme.font.primary};
   font-size: ${props => props.theme.size.veryBig};
   font-weight: 700;
   color: ${props => props.theme.color.secondyClear};
   margin: 0;
`

const CoinPot = ({ value }) => {
   return (
      <WrapContent>
         <Content>${value} left</Content>
      </WrapContent>
   )
}

export default CoinPot