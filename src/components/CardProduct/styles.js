import styled from "styled-components"

import ButtonAction from "../../objects/ButtonAction"

import img01 from "../../images/products/bigmac.jpg"
import img02 from "../../images/products/cupofcoffee.jpg"
import img03 from "../../images/products/book.jpg"
import img04 from "../../images/products/videogame.jpg"
import img05 from "../../images/products/charity.jpg"
import img06 from "../../images/products/headphones.jpg"
import img07 from "../../images/products/airjordans.jpg"
import img08 from "../../images/products/skateboard.jpg"
import img09 from "../../images/products/smartphone.jpg"
import img10 from "../../images/products/gamingconsole.jpg"
import img11 from "../../images/products/bike.jpg"
import img12 from "../../images/products/drone.jpg"
import img13 from "../../images/products/designerhandbag.jpg"
import img14 from "../../images/products/jetski.jpg"
import img15 from "../../images/products/4ktv.jpg"
import img16 from "../../images/products/diamondring.jpg"
import img17 from "../../images/products/rolex.jpg"
import img18 from "../../images/products/speedboat.jpg"
import img19 from "../../images/products/foodtruck.jpg"
import img20 from "../../images/products/tesla.jpg"
import img21 from "../../images/products/monstertruck.jpg"
import img22 from "../../images/products/helicopter.jpg"
import img23 from "../../images/products/ferrari.jpg"
import img24 from "../../images/products/lamborghini.jpg"
import img25 from "../../images/products/firetruck.jpg"
import img26 from "../../images/products/townhouse.jpg"
import img27 from "../../images/products/bar.jpg"
import img28 from "../../images/products/pizzashop.jpg"
import img29 from "../../images/products/barofgold.jpg"
import img30 from "../../images/products/superbowlad.jpg"
import img31 from "../../images/products/beachhouse.jpg"
import img32 from "../../images/products/yacht.jpg"
import img33 from "../../images/products/f16.jpg"
import img34 from "../../images/products/skyscraper.jpg"
import img35 from "../../images/products/mansion.jpg"
import img36 from "../../images/products/rocket.jpg"
import img37 from "../../images/products/passengerjet.jpg"
import img38 from "../../images/products/monalisa.jpg"
import img39 from "../../images/products/cruiseship.jpg"
import img40 from "../../images/products/nbateam.jpg"
import img41 from "../../images/products/mlbteam.jpg"
import img42 from "../../images/products/nflteam.jpg"


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
   width: 100%;
   height: 160px;
   display: flex;
   align-items: flex-end;
   margin-bottom: 10px;
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center center;
   &.-img01 {
      background-image: url(${img01});
   }
   &.-img02 {
      background-image: url(${img02});
   }
   &.-img03 {
      background-image: url(${img03});
   }
   &.-img04 {
      background-image: url(${img04});
   }
   &.-img05 {
      background-image: url(${img05});
   }
   &.-img06 {
      background-image: url(${img06});
   }
   &.-img07 {
      background-image: url(${img07});
   }
   &.-img08 {
      background-image: url(${img08});
   }
   &.-img09 {
      background-image: url(${img09});
   }
   &.-img10 {
      background-image: url(${img10});
   }
   &.-img11 {
      background-image: url(${img11});
   }
   &.-img12 {
      background-image: url(${img12});
   }
   &.-img13 {
      background-image: url(${img13});
   }
   &.-img14 {
      background-image: url(${img14});
   }
   &.-img15 {
      background-image: url(${img15});
   }
   &.-img16 {
      background-image: url(${img16});
   }
   &.-img17 {
      background-image: url(${img17});
   }
   &.-img18 {
      background-image: url(${img18});
   }
   &.-img19 {
      background-image: url(${img19});
   }
   &.-img20 {
      background-image: url(${img20});
   }
   &.-img21 {
      background-image: url(${img21});
   }
   &.-img22 {
      background-image: url(${img22});
   }
   &.-img23 {
      background-image: url(${img23});
   }
   &.-img24 {
      background-image: url(${img24});
   }
   &.-img25 {
      background-image: url(${img25});
   }
   &.-img26 {
      background-image: url(${img26});
   }
   &.-img27 {
      background-image: url(${img27});
   }
   &.-img28 {
      background-image: url(${img28});
   }
   &.-img29 {
      background-image: url(${img29});
   }
   &.-img30 {
      background-image: url(${img30});
   }
   &.-img31 {
      background-image: url(${img31});
   }
   &.-img32 {
      background-image: url(${img32});
   }
   &.-img33 {
      background-image: url(${img33});
   }
   &.-img34 {
      background-image: url(${img34});
   }
   &.-img35 {
      background-image: url(${img35});
   }
   &.-img36 {
      background-image: url(${img36});
   }
   &.-img37 {
      background-image: url(${img37});
   }
   &.-img38 {
      background-image: url(${img38});
   }
   &.-img39 {
      background-image: url(${img39});
   }
   &.-img40 {
      background-image: url(${img40});
   }
   &.-img41 {
      background-image: url(${img41});
   }
   &.-img42 {
      background-image: url(${img42});
   }
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

const ButtonSell = styled(ButtonAction)`
   &.-actived {
      background-color: ${props => props.theme.color.thirdMedium};
      color: ${props => props.theme.color.secondyClear};
   }
`

const ButtonBuy = styled(ButtonAction)`
   &.-actived {
      background-color: ${props => props.theme.color.firstMedium};
      color: ${props => props.theme.color.secondyClear};
   }
`

export {
   WrapCard,
   WrapImage,
   Name,
   Value,
   WrapAction,
   ButtonSell,
   ButtonBuy,
   Unit,
}