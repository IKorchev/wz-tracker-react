import React from "react"
import AlertComponent from "./Alert"
import Accordions from "./Accordions"
import PlayerInfo from "./PlayerInfo"
import { Container, Button, Spinner } from "react-bootstrap"

const Content = ({ data, loading }) => {
  // while searching for a user
  if (loading) {
    return (
      <Container className='d-flex justify-content-center mt-5'>
        <Spinner animation='border' variant='primary' role='status' />
      </Container>
    )
  }
  //if there's no data
  if (data === undefined && !loading) {
    return <AlertComponent />
  }

  // when the data is received
  if (data) {
    const updateUser = async () => {
      const updated_data = await fetch("/update", { method: "POST" })
      console.log(updated_data)
    }
    console.log(data)
    return (
      <Container className='container-column'>
        <Container id='main'>
          {/* prettier-ignore */}
          <PlayerInfo />
          <Accordions data={data} />
        </Container>
        <Button variant='info' className='my-5' onClick={updateUser}>
          Update stats
        </Button>
      </Container>
    )
  }
  // DEFAULT - when nothing has been searched yet
  return <></>
}

export default Content