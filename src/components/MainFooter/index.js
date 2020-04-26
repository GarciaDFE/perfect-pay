import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import { WrapFooter,
         Footer, 
         Title, 
         Made, 
         Link,
         MoreOffers,
         Offer,
         Label,
         ImgOffer } from "./styles"
import Brand from "../../objects/Brand"

const MainFooter = () => {

   const { offer1, offer2 } = useStaticQuery(
      graphql`
        query {
          offer1: file(relativePath: { eq: "offer1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 740) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          offer2: file(relativePath: { eq: "offer2.jpg" }) {
            childImageSharp {
              fluid(maxHeight: 740) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }`
    )

   return (
      <WrapFooter>
         <Footer>
            <Title>You may also like</Title>
            <MoreOffers>
               <Offer>
                  <Label>Printing Money</Label>
                  <ImgOffer 
                     fluid={offer1.childImageSharp.fluid}
                     alt="imagem da oferta"
                  />
               </Offer>
               <Offer>
                  <Label>Speed</Label>
                  <ImgOffer 
                     fluid={offer2.childImageSharp.fluid}
                     alt="imagem da oferta"
                  />
               </Offer>
            </MoreOffers>
            <Made>Made with <span>❤️</span> by
               <Link 
                  href="https://twitter.com/nealagarwal"
                  target="_blank">
                  Neal Agarwal
               </Link>
            </Made>
            <Brand className="-small"/>
         </Footer>
      </WrapFooter>
   )
}

export default MainFooter