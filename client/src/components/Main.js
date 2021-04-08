import React from "react"
import { Container, Accordion, Card, Button } from "react-bootstrap"

const Main = ({ data }) => {
  if (!data) return <></>
  const codData = data.callOfDutyData.lifetime.all.properties
  const dbData = data.databaseData
  const date = new Date(dbData.updatedAt)
  const formattedDate = date.toLocaleDateString("en-UK")
  const time = date.toLocaleTimeString("en-US")
  const diff = {
    name: data.callOfDutyData.username.toUpperCase(),
    kills: codData.kills - dbData.kills,
    assists: codData.assists - dbData.assists,
    deaths: codData.deaths - dbData.deaths,
    kdRatio: {
      previous: dbData.kdRatio.toFixed(2),
      current: codData.kdRatio.toFixed(2),
    },
    gamesPlayed: codData.totalGamesPlayed - dbData.matchesPlayed,
    // timePlayed: Math.floor((codData.timePlayedTotal / 60).toFixed(2) - dbData.timePlayed), unable to use this stat at the moment. COD team are not updating this stat correctly
    wins: codData.wins - dbData.wins,
  }
  const updateStats = () => {
    console.log("updated")
  }
  const string = `${diff.name} has ${diff.kills} more kills,
                  ${diff.assists} more assists, and died
                  ${diff.deaths} times, Their KD Ratio was 
                  ${diff.kdRatio.previous}, now it is 
                  ${diff.kdRatio.current}. They played 
                  ${diff.gamesPlayed} games and they won
                  ${diff.wins} games since their last stats update.`
  return (
    <div className='container-column'>
      <div id='main'>
        <h1 className='h2 text-center text-secondary text-uppercase'>
          {data.callOfDutyData.username}
        </h1>
        <h2 className='text-center text-info'>Level: {data.callOfDutyData.level}</h2>
        <Container id='summary'>
          <h5 className='text-center'>Summary</h5>
          <p>{string}</p>
        </Container>
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
      </div>
      <Button variant='info' className='my-5' onClick={updateStats}>
        Update stats
      </Button>
    </div>
  )
}

export default Main
