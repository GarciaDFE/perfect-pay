import React from "react"

import { WrapCard,
         WrapImage,
         Name,
         Value,
         WrapAction,
         ButtonSell,
         ButtonBuy,
         Unit } from "./styles"


const CardProduct = ({ onClickSell, classSell, onClickBuy, classBuy, amountUnit, valueUnit, name, classImage }) => {

   return (
      <WrapCard>
         <WrapImage className={classImage} />
         <Name>{name}</Name>
         <Value>${valueUnit}</Value>
         <WrapAction>
            <ButtonSell 
               className={classSell}
               onClick={onClickSell}>Sell</ButtonSell>
            <Unit>{amountUnit}</Unit>
            <ButtonBuy
               className={classBuy}
               onClick={onClickBuy}>Buy</ButtonBuy>
         </WrapAction>
      </WrapCard>
   )
}

export default CardProduct