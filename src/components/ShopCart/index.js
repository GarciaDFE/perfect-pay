import React from "react"

import { WrapCart, Title, PurchaseList } from "./styles"


const ShopCart = ({ children }) => {

   return (
      <WrapCart>
         <Title>Your Shopping Spree</Title>
         <PurchaseList>{children}</PurchaseList>
      </WrapCart>
   )
}

export default ShopCart