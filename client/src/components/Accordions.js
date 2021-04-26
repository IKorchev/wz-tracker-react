import { Card, Accordion } from "react-bootstrap"
import React from "react"

const Accordions = ({ codData, dbData, cwData }) => {
  const dateString = (data) => {
    if (dbData) {
      const date = new Date(data.updatedAt)
      const formattedDate = date.toLocaleDateString("en-UK")
      const time = date.toLocaleTimeString("en-US")
      return `Last updated: ${time} at ${formattedDate}`
    }
    return `Last updated: Just now`
  }
  console.log(codData, dbData)
  //prettier-ignore
  return (
    <Accordion className='bg-dark'>
      <Card className='bg-info text-dark'>
        <Accordion.Toggle as={Card.Header} id='toggler' eventKey='0'>
          Current stats
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
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
      <Card className='bg-info text-dark'>
        <Accordion.Toggle as={Card.Header} id='toggler' eventKey='1'>
          Saved stats: {dateString(dbData)}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='1'>
          <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
            <h5 className='my-2'>Kills: {dbData ? dbData.kills : codData.kills}</h5>
            <h5 className='my-2'>Assists: {dbData ? dbData.assists : codData.assists}</h5>
            <h5 className='my-2'>Deaths: {dbData ? dbData.deaths : codData.deaths}</h5>
            <h5 className='my-2'>KD Ratio: {dbData ? dbData.kdRatio.toFixed(2) : codData.kdRatio.toFixed(2)}</h5>
            <h5 className='my-2'>Matches Played: {dbData ? dbData.matchesPlayed : codData.totalGamesPlayed}</h5>
            <h5 className='my-2'>Time Played: {dbData ? dbData.timePlayed.toFixed(2) : (codData.timePlayedTotal / 60).toFixed(2)}</h5>
            <h5 className='my-2'>Wins: {dbData ? dbData.wins : codData.wins}</h5>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className='bg-info text-dark'>
        <Accordion.Toggle as={Card.Header} id='toggler' eventKey='2'>
          Current stats
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='2'>
          <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
            <h5 className='my-2'>Kills: {cwData.kills}</h5>
            <h5 className='my-2'>Assists: {cwData.assists}</h5>
            <h5 className='my-2'>Deaths: {cwData.deaths}</h5>
            <h5 className='my-2'>KD Ratio: {cwData.kdratio.toFixed(2)}</h5>
            <h5 className='my-2'>Matches Played: {cwData.totalGamesPlayed}</h5>
            <h5 className='my-2'>
              Time Played: {(cwData.timePlayedTotal / 60).toFixed(2)}
            </h5>
            <h5 className='my-2'>Wins: {cwData.wins}</h5>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default Accordions
