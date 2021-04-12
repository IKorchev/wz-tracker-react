import React from "react"
import { Alert, Container } from "react-bootstrap"

const AlertComponent = () => {
  return (
    <Container className='p-5 w-25 text-center' id="alert-container">
      <Alert className='py-4' variant='danger'>
        <h6>
          Could not find player data. Make sure the user you are trying to look for
          isn't in private mode.
        </h6>
      </Alert>
    </Container>
  )
}

export default AlertComponent
