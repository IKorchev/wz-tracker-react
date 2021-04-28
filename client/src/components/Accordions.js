import { Card, Accordion } from "react-bootstrap"
import React from "react"

const Accordions = ({ playerData }) => {
  const dateString = (dateString) => {
    if (dateString) {
      const date = new Date(dateString)
      const formattedDate = date.toLocaleDateString("en-UK")
      const time = date.toLocaleTimeString("en-US")
      return `Last updated: ${time} at ${formattedDate}`
    }
    return `Last updated: Just now`
  }

  const stats = [playerData.battleRoyale, playerData.plunder]
  //prettier-ignore
  return (
    stats.map((arr) => (
    <Accordion className='bg-dark' key={arr.title}>
      <Card className='bg-info text-dark'>
        <Accordion.Toggle as={Card.Header} id='toggler' eventKey='0'>
          {arr.title}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
           <h5 className="my-2">Wins: {arr.wins}</h5>
           <h5 className="my-2">Kills: {arr.kills}</h5>
           <h5 className="my-2">Deaths: {arr.deaths}</h5>
           <h5 className="my-2">Downs: {arr.downs}</h5>
           <h5 className="my-2">KD Ratio: {arr.kdRatio.toFixed(2)}</h5>
           <h5 className="my-2">Time Played: {arr.timePlayed.toFixed(2)} hours</h5>
           <h5 className="my-2">Games Played: {arr.matchesPlayed}</h5>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

    ))
    
  )
}

export default Accordions
