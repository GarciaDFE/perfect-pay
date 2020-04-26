import styled from "styled-components"
import { Link } from "gatsby"

const Header = styled.div`
   width: 100%;
   height: 95px;
   background-color: ${props => props.theme.color.secondyClear};
   margin-bottom: 25px;
`

const Navbar = styled.nav`
   width: 100%;
   max-width: 950px;
   height: 100%;
   margin: 0 auto;
   display: flex;
   align-items: center;
   background-color: transparent;
`

const LinkBrand = styled(Link)`
   text-decoration: none;
`

export {
   Header,
   Navbar,
   LinkBrand
}