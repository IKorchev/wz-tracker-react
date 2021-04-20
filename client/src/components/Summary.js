import React from "react"
import { Container } from "react-bootstrap"

const Summary = ({ username, codData, dbData }) => {
  if (dbData) {
    const diff = {
      name: username.toUpperCase(),
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

    const string = `
  ${diff.name} played 
  ${diff.gamesPlayed} games and they won
  ${diff.wins} games since their last stats update. They have
  ${diff.kills} more kills,
  ${diff.assists} more assists, and died
  ${diff.deaths} times, Their KD Ratio currently is 
  ${diff.kdRatio.current}.`

    return (
      <Container className='px-5 py-3'>
        <h5 className='text-center'>Summary</h5>
        <p>{string}</p>
      </Container>
    )
  }
  if (dbData === undefined) {
    return (
      <Container className='px-5 py-3'>
        <h5 className='text-center'>Summary</h5>
        <p>Not enough data to form a summary.</p>
      </Container>
    )
  }
  return <></>
}

export default Summary
