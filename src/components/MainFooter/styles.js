import styled from "styled-components"
import Img from "gatsby-image"

const WrapFooter = styled.div`
   width: 100%;
   background-color: ${props => props.theme.color.secondyClear};
`

const Footer = styled.div`
   width: 100%;
   max-width: 950px;
   margin: 0 auto;
   height: auto;
   background-color: ${props => props.theme.color.secondyClear};
   text-align: center;
   padding: 30px 50px 50px;
`

const Title = styled.h2`
   font-family: ${props => props.theme.font.primary};
   font-size: ${props => props.theme.size.mediumSmall};
   font-weight: 500;
   color: ${props => props.theme.color.secondyDark};
   margin-bottom: 15px;
`

const Made = styled.h3`
   font-family: ${props => props.theme.font.primary};
   font-size: ${props => props.theme.size.small};
   font-weight: 500;
   color: ${props => props.theme.color.secondyDark};
   margin-bottom: 25px;
`

const Link = styled.a`
   margin-left: 1rem;
   color: ${props => props.theme.color.secondyDark};
`

const MoreOffers = styled.div`
   width: 100%;
   margin: 0 auto;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: 140px;
   grid-gap: 10px;
   margin-bottom: 30px;
`

const Offer = styled.div`
   position: relative;
   background-color: ${props => props.theme.color.secondyDark};
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   transition: all 300ms linear;
   cursor: pointer;
`

const Label = styled.p`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translateX(-50%) translateY(-50%);
   font-family: ${props => props.theme.font.primary};
   font-size: ${props => props.theme.size.mediumSmall};
   font-weight: 500;
   color: ${props => props.theme.color.secondyDark};
   background-color: ${props => props.theme.color.secondyClear};
   border-radius: 5px;
   padding: 10px 20px;
   z-index: 10;
`

const ImgOffer = styled(Img)`
   height: 140px;
   transition: opacity 300ms linear;
   &:hover {
      opacity: 0.5;
      transition: opacity 300ms linear;
   }
`

export {
   WrapFooter,
   Footer,
   Title,
   Made,
   Link,
   MoreOffers,
   Offer,
   Label,
   ImgOffer
}