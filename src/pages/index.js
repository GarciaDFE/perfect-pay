import React from "react";
import { Link } from 'gatsby'
// import { } from "./styles"

import Layout from "../components/Layout";
import SEO from "../components/seo"

import Container from "../objects/Container"
import MainHeader from "../components/MainHeader"
import ShopHeader from "../components/ShopHeader"
import MainBow from "../objects/MainBow"
import ShowCase from "../components/ShowCase"
import CardProduct from "../components/CardProduct"
import MainFooter from "../components/MainFooter"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home"/>
      <MainHeader />
      <Container>
        <ShopHeader />
      </Container>
      <Container>
        <MainBow value="90000000000"/>
      </Container>
      <Container>
        <ShowCase>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </ShowCase>
      </Container>
      <MainFooter />
      <Link to="/About">About</Link>
    </Layout>
  )

};


export default IndexPage;
