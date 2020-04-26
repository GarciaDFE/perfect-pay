import styled from "styled-components"

const WrapCard = styled.li`
   width: 100%;
   height: 290px;
   background-color: ${props => props.theme.color.secondyClear};
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: center;
   padding: 20px 15px;
   margin: 0;
`

const WrapImage = styled.div`
   height: 160px;
   display: flex;
   align-items: flex-end;
   margin-bottom: 10px;
`

const Name = styled.h3`
   font-family: ${props => props.theme.font.primary};
   font-size: ${props => props.theme.size.mediumSmall};
   font-weight: 700;
   color: ${props => props.theme.color.secondyDark};
   margin-bottom: 5px;
`

const Value = styled.p`
   font-family: ${props => props.theme.font.primary};
   font-size: ${props => props.theme.size.small};
   font-weight: 500;
   color: ${props => props.theme.color.firstMedium};
   margin-bottom: 30px;
`

const WrapAction = styled.div`
   width: 100%;
   height: 4rem;
   display: grid;
   grid-template-columns: 1fr 2fr 1fr;
   grid-gap: 10px;
`

const Unit = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   font-family: ${props => props.theme.font.primary};
   font-size: ${props => props.theme.size.verySmall};
   font-weight: 400;
   color: ${props => props.theme.color.secondyDark};
   text-align: center;
   border: 1px solid ${props => props.theme.color.secondyDark};
   border-radius: 5px;
`

export {
   WrapCard,
   WrapImage,
   Name,
   Value,
   WrapAction,
   Unit
}