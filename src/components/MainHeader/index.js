import React from "react"

import { Header, Navbar, LinkBrand } from "./styles"
import Brand from "../../objects/Brand"

const MainHeader = () => {
   return (
      <Header>
         <Navbar>
            <LinkBrand to="/">
               <Brand />
            </LinkBrand>
         </Navbar>
      </Header>
   )
}

export default MainHeader