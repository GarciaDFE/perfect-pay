import React from "react";
import styled from "styled-components";

const ContainerArea = styled.div`
   width: 100%;
   max-width: 950px;
   margin: 0 auto;
   display: flex;
`

const Container = ({ children, className }) => {
   return (
      <ContainerArea className={className}>{children}</ContainerArea>
   )
}

export default Container