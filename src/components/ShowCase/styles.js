import styled from "styled-components"

const WrapShowcase = styled.div`
   width: 100%;
   margin: 10px auto;
   padding: 0;
`

const ListItems = styled.ul`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      margin: 0;
`

export {
   WrapShowcase,
   ListItems
}