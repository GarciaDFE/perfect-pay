import React, { useState } from "react";
import { Link } from 'gatsby'

// import { } from "./styles"

import Layout from "../components/Layout";
import SEO from "../components/seo"

import Container from "../objects/Container"
import MainHeader from "../components/MainHeader"
import ShopHeader from "../components/ShopHeader"
import CoinPot from "../objects/CoinPot"
import ShowCase from "../components/ShowCase"
import CardProduct from "../components/CardProduct"
import MainFooter from "../components/MainFooter"

import data from "./data"

let valueUnit = 0

const IndexPage = () => {

  const [vlrPot, setVlrPot] = useState(100)

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
    let amountUnit = newCards[index].amountUnit
    let classBuy = newCards[index].classBuy
    valueUnit = data[index].value

    if (!amountUnit) amountUnit = 0 
    if (!classBuy) classBuy = "-actived" 
    if (vlrPot > valueUnit) {
      newCards[index].classSell = "-actived"
      newCards[index].amountUnit = amountUnit + 1
      setVlrPot(vlrPot - valueUnit)  
    } else if (vlrPot === valueUnit) {
      newCards[index].classSell = "-actived"
      newCards[index].amountUnit = amountUnit + 1
      newCards[index].classBuy = "-disabled"
      setVlrPot(vlrPot - valueUnit)  
    } else if (vlrPot < 0){
      newCards[index].classBuy = "-disabled"
    }
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
                key={index}
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
      <MainFooter />
      <Link to="/About">About</Link>
    </Layout>
  )

};


export default IndexPage;
