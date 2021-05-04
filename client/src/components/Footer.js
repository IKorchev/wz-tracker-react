import React from "react"
import { Button, Container } from "react-bootstrap"
const Footer = () => {
  return (
    <Container fluid id='footer'>
      <hr></hr>
      <Container
        id='footer-signup'
        className='d-flex flex-column align-items-center my-5'>
        <label for='email-input'>
          <h5 clasName='text-center'>Sign up for weekly stats and more</h5>
        </label>
        <Container>
          <input type='email' placeholder='Email' id='email-input' />
          <Button type='submit' className='button'>
            Sign up
          </Button>
        </Container>
      </Container>
      <ul id='footer-list'>
        <li>
          <a href='https://callofduty.com/' target='_blank' rel='noreferrer'>
            Visit Call Of Duty's official website
          </a>
        </li>
        <li>
          <a href='https://callofduty.com/' target='_blank' rel='noreferrer'>
            Activision
          </a>
          <a
            className='d-block'
            href='https://callofduty.com/'
            target='_blank'
            rel='noreferrer'>
            Battle.net
          </a>
        </li>
        <li>
          <a href='https://callofduty.com/' target='_blank' rel='noreferrer'>
            Privacy Policy
          </a>
        </li>
        <li>
          <a href='https://callofduty.com/' target='_blank' rel='noreferrer'>
            Terms and Conditions
          </a>
        </li>
      </ul>
      <div></div>
    </Container>
  )
}

export default Footer
