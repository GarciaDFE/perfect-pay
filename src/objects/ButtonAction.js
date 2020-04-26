import React from "react"
import styled from "styled-components"

const Button = styled.button`
   border: none;
   border-radius: 5px;
   padding: 10px 0;
   font-family: ${props => props.theme.font.primary};
   font-size: ${props => props.theme.size.verySmall};
   font-weight: 700;
   outline: none;
   cursor: pointer;
   color: ${props => props.theme.color.secondyDark};
   &.-sell {
      background-color: ${props => props.theme.color.thirdMedium};
      color: ${props => props.theme.color.secondyClear};
   }
   &.-buy {
      background-color: ${props => props.theme.color.firstMedium};
      color: ${props => props.theme.color.secondyClear};
   }
   &.-disabled {
      background-color: ${props => props.theme.color.secondyLight};
      color: ${props => props.theme.color.secondyDark}; 
   }
`

const ButtonAction = ({ children, className="-disabled" }) => {
   return (
      <Button className={className}>{children}</Button>
   )
}

export default ButtonAction