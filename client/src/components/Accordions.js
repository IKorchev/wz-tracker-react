import { Card, Accordion, Container } from "react-bootstrap"
import React from "react"
import { UpdateButton, DeleteButton } from "./Buttons"

const Accordions = ({ data }) => {
  console.log(data)
  return data.map((arr) => {
    const stats = [arr.plunder, arr.battleRoyale]
    return (
      <Container className='my-4 p-2 text-center' id='stats-container'>
        <h3 className='text-center mb-4'>
          {arr._id ? "Previous stats" : "Current stats"}
        </h3>
        {stats.map((gameMode) => (
          <Accordion className='bg-dark' key={gameMode.title}>
            <Card className='bg-info text-dark border-0 rounded-0'>
              <Accordion.Toggle id='toggler' eventKey='0'>
                <h5>{gameMode.title}</h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='0'>
                <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                  <h5 className='my-2'>Wins: {gameMode.wins}</h5>
                  <h5 className='my-2'>Kills: {gameMode.kills}</h5>
                  <h5 className='my-2'>Deaths: {gameMode.deaths}</h5>
                  <h5 className='my-2'>Downs: {gameMode.downs}</h5>
                  <h5 className='my-2'>KD Ratio: {gameMode.kdRatio.toFixed(2)}</h5>
                  <h5 className='my-2'>
                    Time Played: {gameMode.timePlayed.toFixed(2)} hours
                  </h5>
                  <h5 className='my-2'>Games Played: {gameMode.matchesPlayed}</h5>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
        {arr._id ? <UpdateButton /> : <DeleteButton />}
      </Container>
    )
  })
}

export default Accordions
