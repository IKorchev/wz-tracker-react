import React from "react"
import Summary from "./SummaryComponent"
import { Container, Button } from "react-bootstrap"
import AccordionComponent from "./AccordionComponent"

const Main = ({ data }) => {
  if (!data) return <></>
  const codData = data.callOfDutyData.lifetime.all.properties
  const dbData = data.databaseData

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
  const string = `
    ${diff.name} has ${diff.kills} more kills,
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
          <Summary string={string} />
        </Container>
        <AccordionComponent codData={codData} dbData={dbData} />
      </div>
      <Button variant='info' className='my-5' onClick={updateStats}>
        Update stats
      </Button>
    </div>
  )
}

export default Main
