import React from "react"
import styled from "styled-components"

const Title = styled.h1`
   font-family: ${props => props.theme.font.primary};
   font-size: ${props => props.theme.size.big};
   font-weight: 700;
   color: ${props => props.theme.color.secondyDark};
   &.-small {
      font-size: ${props => props.theme.size.mediumBig};
   }  
`

const Brand = ({ className="" }) => {
   return (
      <Title className={className}>Neal.fun</Title>
   )
}

export default Brand