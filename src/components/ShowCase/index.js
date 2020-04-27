import React from "react"

import { WrapShowcase, ListItems } from "./styles"

const ShowCase = ({ children }) => {
  
   return (
      <WrapShowcase>
         <ListItems>{children}</ListItems>
      </WrapShowcase>
   )
}

export default ShowCase