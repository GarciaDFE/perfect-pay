import styled from "styled-components"
import Img from "gatsby-image"

const Header = styled.div`
   width: 100%;
   height: 260px;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   margin: 0 auto;
   background-color: ${props => props.theme.color.secondyClear};
   margin-bottom: 10px;
`

const Title = styled.h2`
      font-family: ${props => props.theme.font.primary};
      font-size: ${props => props.theme.size.veryBig};
      font-weight: 700;
      color: ${props => props.theme.color.secondyDark};
      text-align: center;
`

const Avatar = styled(Img)`
   width: 100%;
   border-radius: 50%;
   background-color: violet;
   margin-bottom: 10px;
`

export {
   Header,
   Title,
   Avatar
}