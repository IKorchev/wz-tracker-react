import React from "react"
import { Container, Spinner } from "react-bootstrap"
const SpinnerComponent = () => {
  return (
    <Container className='d-flex justify-content-center mb-5'>
      <Spinner animation='border' variant='primary' role='status' />
    </Container>
  )
}

export default SpinnerComponent
