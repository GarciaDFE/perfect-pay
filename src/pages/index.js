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

let valueUnit
let name
let imgIcon

const IndexPage = () => {

  const [amountUnit, setAmountUnit] = useState(0)
  const [classSell, setClassSell] = useState("")
  const [classBuy, setClassBuy] = useState("-actived")
  const [vlrPot, setVlrPot] = useState(90000000000)



  const handleClickSell = (ev, index) => {
    // ev.preventDefault()
    if (amountUnit > 1) {
      setAmountUnit(amountUnit - 1)
      setVlrPot(vlrPot + valueUnit)
    } else if (amountUnit === 1) {
      setAmountUnit(amountUnit - 1)
      setVlrPot(vlrPot + valueUnit)
      setClassSell("-disabled")
    } else {
      setClassSell("-disabled")
    }
  }

  const handleClickBuy = (id) => {
    // e.preventDefault();
    console.log("ID: ", id)
    console.log("CARD: ", e.target.id)
    setAmountUnit(amountUnit + 1)
    setClassSell("-actived")
    setVlrPot(vlrPot - valueUnit)
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
            valueUnit = card.value
            name = card.name
            imgIcon = `-img${card.id}`
            return (
              <CardProduct
                key={card.id}
                name={name}
                classImage={imgIcon}
                valueUnit={valueUnit}
                onClickSell={handleClickSell}
                classSell={classSell}
                amountUnit={amountUnit}
                onClickBuy={() => handleClickBuy(card.id)}
                classBuy={classBuy} />
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
