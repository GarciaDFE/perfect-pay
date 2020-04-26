import React from "react"
// import { useStaticQuery, graphql } from 'gatsby'

import { WrapShowcase, ListItems } from "./styles"

const ShowCase = ({ children }) => {

  //  const { avatar } = useStaticQuery(
  //     graphql`
  //       query {
  //         avatar: file(relativePath: { eq: "billgates.jpg" }) {
  //           childImageSharp {
  //             fixed(width: 125) {
  //               ...GatsbyImageSharpFixed_tracedSVG
  //             }
  //           }
  //         }
  //       }`
  //   )
  
   return (
      <WrapShowcase>
         <ListItems>{children}</ListItems>
      </WrapShowcase>
   )
}

export default ShowCase