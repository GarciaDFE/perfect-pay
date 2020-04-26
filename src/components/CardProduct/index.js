import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import { WrapCard,
         WrapImage,
         Name,
         Value,
         WrapAction,
         Unit } from "./styles"

import ButtonAction from "../../objects/ButtonAction"

const CardProduct = () => {

   const { imgProduct } = useStaticQuery(
      graphql`
        query {
          imgProduct: file(relativePath: { eq: "bigmac.jpg" }) {
            childImageSharp {
              fixed(width: 150) {
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
        }`
    )

   return (
      <WrapCard>
         <WrapImage>
            <Img   
               fixed={imgProduct.childImageSharp.fixed}
               alt="imagem do produto"
            />
         </WrapImage>
         <Name>Big Mac</Name>
         <Value>$2</Value>
         <WrapAction>
            <ButtonAction>Sell</ButtonAction>
            <Unit>0</Unit>
            <ButtonAction className="-buy">Buy</ButtonAction>
         </WrapAction>
      </WrapCard>
   )
}

export default CardProduct