import { Card, Accordion, Container } from "react-bootstrap"
import React from "react"

const Accordions = ({ data }) => {
  const dateString = (dateString) => {
    if (dateString) {
      const date = new Date(dateString)
      const formattedDate = date.toLocaleDateString("en-UK")
      const time = date.toLocaleTimeString("en-US")
      return `Stats before ( at ${time} on ${formattedDate})`
    }
    return `Last updated: Just now`
  }
  console.log(data)

  //prettier-ignore
  return (
    data.map((arr) => (

    <Container>
      <h2 className="my-4 text-center"> {arr._id ? dateString(arr.updatedAt) : "Player statistics now"}</h2>
    <Accordion className='bg-dark' key={arr.plunder.title}>
      <Card className='bg-info text-dark'>
        <Accordion.Toggle as={Card.Header} id='toggler' eventKey='0'>
          {arr.plunder.title}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
           <h5 className="my-2">Wins: {arr.plunder.wins}</h5>
           <h5 className="my-2">Kills: {arr.plunder.kills}</h5>
           <h5 className="my-2">Deaths: {arr.plunder.deaths}</h5>
           <h5 className="my-2">Downs: {arr.plunder.downs}</h5>
           <h5 className="my-2">KD Ratio: {arr.plunder.kdRatio.toFixed(2)}</h5>
           <h5 className="my-2">Time Played: {arr.plunder.timePlayed.toFixed(2)} hours</h5>
           <h5 className="my-2">Games Played: {arr.plunder.matchesPlayed}</h5>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

    <Accordion className='bg-dark' key={arr.battleRoyale.title}>
      <Card className='bg-info text-dark'>
        <Accordion.Toggle as={Card.Header} id='toggler' eventKey='0'>
          {arr.battleRoyale.title}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
           <h5 className="my-2">Wins: {arr.battleRoyale.wins}</h5>
           <h5 className="my-2">Kills: {arr.battleRoyale.kills}</h5>
           <h5 className="my-2">Deaths: {arr.battleRoyale.deaths}</h5>
           <h5 className="my-2">Downs: {arr.battleRoyale.downs}</h5>
           <h5 className="my-2">KD Ratio: {arr.battleRoyale.kdRatio.toFixed(2)}</h5>
           <h5 className="my-2">Time Played: {arr.battleRoyale.timePlayed.toFixed(2)} hours</h5>
           <h5 className="my-2">Games Played: {arr.battleRoyale.matchesPlayed}</h5>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    </Container>
    ))
    
  )
}

export default Accordions
