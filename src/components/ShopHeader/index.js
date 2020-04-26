import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import { Header, Title, Avatar } from "./styles"

const ShopHeader = () => {

   const { avatar } = useStaticQuery(
      graphql`
        query {
          avatar: file(relativePath: { eq: "billgates.jpg" }) {
            childImageSharp {
              fixed(width: 125) {
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
        }`
    )
  
   return (
      <Header>
         <Avatar 
            fixed={avatar.childImageSharp.fixed}
            alt="exemplo imagem fundo"
         />
         <Title>Spend Bill Gates' Money</Title>
      </Header>
   )
}

export default ShopHeader