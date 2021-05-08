import React, { forwardRef } from "react"
import { Container } from "react-bootstrap"
import MyCard from "./MyCard"
import Kills from "../../images/Kills.svg"
import Wins from "../../images/Wins.svg"
// import Assists from "../../images/"
import Deaths from "../../images/Deaths.svg"
// import TimePlayed from "../../images/"
// import GamesPlayed from "../../images/"

const Cards = (props, ref) => {
  return (
    <Container ref={ref} fluid id='cards-page'>
      <h1 className='text-secondary text-center display-3 my-5'>
        Keep track of your progress
      </h1>
      <div className='cards-wrapper'>
        <MyCard image={Kills} title='Kills' />
        <MyCard image={Wins} title='Wins' />
        <MyCard image={Deaths} title='Deaths' />
        <MyCard title='Assists' />
        <MyCard title='Time Played' />
        <MyCard title='Games Played' />
      </div>
    </Container>
  )
}

export default forwardRef(Cards)
