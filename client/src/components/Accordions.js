import {
  Card,
  Accordion,
  Container,
  Button,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap"
import React from "react"

const Accordions = ({ data, updateUser }) => {
  const renderTooltip = (props) => (
    <Tooltip id='button-tooltip' className="" {...props}>
      <h6>Permanently updates the previous stats to the current stats.</h6>
    </Tooltip>
  )
  //prettier-ignore
  return (
    data.map((arr) => {
      const stats = [arr.plunder, arr.battleRoyale]
      

      return (
      <Container className="border border-1 border-info my-4 p-2 text-center">
        <h2 className="text-center text-secondary">{arr._id ? "Before" : "Now"}</h2>
        {stats.map(gameMode => (
        <Accordion className='bg-dark' key={gameMode.title}>
          <Card className='bg-info text-dark'>
            <Accordion.Toggle id='toggler' eventKey='0'>
              <h5>{gameMode.title}</h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='0'>
              <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
              <h5 className="my-2">Wins: {gameMode.wins}</h5>
              <h5 className="my-2">Kills: {gameMode.kills}</h5>
              <h5 className="my-2">Deaths: {gameMode.deaths}</h5>
              <h5 className="my-2">Downs: {gameMode.downs}</h5>
              <h5 className="my-2">KD Ratio: {gameMode.kdRatio.toFixed(2)}</h5>
              <h5 className="my-2">Time Played: {gameMode.timePlayed.toFixed(2)} hours</h5>
              <h5 className="my-2">Games Played: {gameMode.matchesPlayed}</h5>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
      
        {
        arr._id ? 
        <OverlayTrigger placement="top" overlay={renderTooltip}>
          <Button className="mt-2 button w-100" onClick={updateUser}>Update</Button>
        </OverlayTrigger>
        : <></>}
        
      </Container>
      )
    })
  )
}

export default Accordions
