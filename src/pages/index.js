import React, { useState } from "react";
import { Link } from 'gatsby'

// import { } from "./styles"

import Layout from "../components/Layout";
import SEO from "../components/seo"

import Container from "../objects/Container"
import MainHeader from "../components/MainHeader"
import ShopHeader from "../components/ShopHeader"
import CoinPot from "../objects/CoinPot"
import CardProduct from "../components/CardProduct"
import ShowCase from "../components/ShowCase"
import PurchaseItem from "../objects/PurchaseItem"
import ShopCart from "../components/ShopCart"
import MainFooter from "../components/MainFooter"

import data from "../content/data"
const cart = []

let valueUnit = 0

const IndexPage = () => {

  const [vlrPot, setVlrPot] = useState(90000000000)

  const handleClickSell = (index) => {
    const newCards = [...data]
    let amountUnit = newCards[index].amountUnit
    valueUnit = data[index].value

    if (amountUnit > 1) {
      newCards[index].amountUnit = amountUnit - 1
      setVlrPot(vlrPot + valueUnit)
    } 
    else if (amountUnit === 1) {
      newCards[index].amountUnit = amountUnit - 1
      setVlrPot(vlrPot + valueUnit)
      newCards[index].classSell = "-disabled"
    } else {
      newCards[index].classSell = "-disabled"
    }
    newCards[index].classBuy = "-actived"
  }

  const handleClickBuy = (index) => {
    const newCards = [...data]
    let newItem = data[index]
    let amountUnit = newCards[index].amountUnit
    let classBuy = newCards[index].classBuy
    valueUnit = data[index].value

    if (!amountUnit) amountUnit = 0 
    if (!classBuy) classBuy = "-actived" 
    if (vlrPot > valueUnit) {
      newCards[index].classSell = "-actived"
      newCards[index].amountUnit = amountUnit + 1
      setVlrPot(vlrPot - valueUnit)

      AddCart(newItem)
    } else if (vlrPot === valueUnit) {
      newCards[index].classSell = "-actived"
      newCards[index].amountUnit = amountUnit + 1
      newCards[index].classBuy = "-disabled"
      setVlrPot(vlrPot - valueUnit)  
    } else if (vlrPot < 0){
      newCards[index].classBuy = "-disabled"
    }
  }

  const AddCart = (newItem) => {
    const pushItem = {
      "itemId": `${newItem.id}`,
      "itemName": `${newItem.name}`,
      "itemCount": `${newItem.amountUnit}`
    }
    cart.push(pushItem)
  }

  return (
    <Layout>
      <SEO title="Home"/>
      <MainHeader />
      <Container>
        <ShopHeader />
      </Container>
      <Container>
        <CoinPot value={vlrPot}/>
      </Container>
      <Container>
        <ShowCase>
          {data.map((card, index) => {
            (vlrPot >= card.value) ? 
              card.classBuy = "-actived" : 
              card.classBuy = "-disabled" 
            return (
              <CardProduct
                key={card.id}
                name={card.name}
                classImage={`-img${card.id}`}
                valueUnit={card.value}
                onClickSell={() => handleClickSell(index)}
                classSell={card.classSell}
                amountUnit={card.amountUnit}
                onClickBuy={() => handleClickBuy(index)}
                classBuy={card.classBuy}
              />
            )
          })}
        </ShowCase>
      </Container>
      <Container>
        <ShopCart>
          {cart.map((item, index) => {
            return(
              <PurchaseItem 
                itemId={item.itemId}
                itemName={item.itemName}
                itemCount={item.itemCount}
              />
            )
          })}
        </ShopCart>
      </Container>
      <MainFooter />
      <Link to="/About">About</Link>
    </Layout>
  )

};


export default IndexPage;
