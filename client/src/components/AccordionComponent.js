import { Card, Accordion } from "react-bootstrap"
import React from "react"

const AccordionComponent = ({ codData, dbData }) => {
  const date = new Date(dbData.updatedAt)
  const formattedDate = date.toLocaleDateString("en-UK")
  const time = date.toLocaleTimeString("en-US")

  return (
    <Accordion defaultActiveKey='0' className='bg-dark'>
      <Card className='bg-info text-dark'>
        <Accordion.Toggle as={Card.Header} id='toggler' eventKey='0'>
          Your saved stats (last saved at {time} on {formattedDate})
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
            <h5 className='my-2'>Kills: {dbData.kills}</h5>
            <h5 className='my-2'>Assists: {dbData.assists}</h5>
            <h5 className='my-2'>Deaths: {dbData.deaths}</h5>
            <h5 className='my-2'>KD Ratio: {dbData.kdRatio.toFixed(2)}</h5>
            <h5 className='my-2'>Matches Played: {dbData.matchesPlayed}</h5>
            <h5 className='my-2'>Time Played: {dbData.timePlayed.toFixed(2)}</h5>
            <h5 className='my-2'>Wins: {dbData.wins}</h5>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className='bg-info text-dark'>
        <Accordion.Toggle as={Card.Header} id='toggler' eventKey='1'>
          Your current stats
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='1'>
          <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
            <h5 className='my-2'>Kills: {codData.kills}</h5>
            <h5 className='my-2'>Assists: {codData.assists}</h5>
            <h5 className='my-2'>Deaths: {codData.deaths}</h5>
            <h5 className='my-2'>KD Ratio: {codData.kdRatio.toFixed(2)}</h5>
            <h5 className='my-2'>Matches Played: {codData.totalGamesPlayed}</h5>
            <h5 className='my-2'>
              Time Played: {(codData.timePlayedTotal / 60).toFixed(2)}
            </h5>
            <h5 className='my-2'>Wins: {codData.wins}</h5>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default AccordionComponent
