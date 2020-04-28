import React from "react";
import styled from "styled-components";

const ItemCart = styled.li`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 20px;
`

const ItemImage = styled.div`
   width: 80px;
   height: 80px;
   border-radius: 50%;
   margin-right: 20px;
   background-color: yellow;
`

const ItemName = styled.p`
   font-family: ${props => props.theme.font.primary};
   font-size: ${props => props.theme.size.verySmall};
   font-weight: 500;
   color: ${props => props.theme.color.secondyDark};
`

const ItemCount = styled.span`
   font-family: ${props => props.theme.font.primary};
   font-size: ${props => props.theme.size.verySmall};
   font-weight: y00;
   color: ${props => props.theme.color.secondyDark};
`

const PurchaseItem = ({ itemName, itemCount }) => {
   return (
      <ItemCart>
         <ItemImage />
         <ItemName>{itemName} x <ItemCount>{itemCount}</ItemCount>
         </ItemName>
      </ItemCart>
   )
}

export default PurchaseItem