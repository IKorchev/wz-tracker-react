import React from "react"
import { Button, Container } from "react-bootstrap"
const Footer = () => {
  return (
    <Container fluid id='footer'>
      <Container
        id='footer-signup'
        className='d-flex flex-column align-items-center my-4'>
        <h5 clasName='text-center'>Sign up for weekly stats and more</h5>
        <Container>
          <label for='email-input' className='visually-hidden'>
            Email
          </label>
          <input type='email' placeholder='Email' id='email-input' />
          <Button type='submit' className='button'>
            Sign up
          </Button>
        </Container>
        <p className='text-white mt-3 small text-muted'>
          By clicking sign up you agree to our Terms and Conditions
        </p>
      </Container>
      <Container id='footer-list' className='mx-auto'>
        <a href='https://callofduty.com/' target='_blank' rel='noreferrer'>
          Visit Call Of Duty's official website
        </a>
        <a href='https://callofduty.com/' target='_blank' rel='noreferrer'>
          Activision
        </a>
        <a href='https://callofduty.com/' target='_blank' rel='noreferrer'>
          Battle.net
        </a>
        <a href='https://callofduty.com/' target='_blank' rel='noreferrer'>
          Privacy Policy
        </a>
        <a href='https://callofduty.com/' target='_blank' rel='noreferrer'>
          Terms and Conditions
        </a>
      </Container>
      <Container id='icons-container'>
        <a href='https://twitch.tv/callofduty' rel='noreferrer' target='_blank'>
          <i className='bi bi-twitch'></i>
        </a>
        <a href='https://facebook.com/callofduty' rel='noreferrer' target='_blank'>
          <i className='bi bi-facebook'></i>
        </a>
        <a href='https://twitter.com/callofduty' rel='noreferrer' target='_blank'>
          <i className='bi bi-twitter'></i>
        </a>
        <a href='https://instagram.com/callofduty' rel='noreferrer' target='_blank'>
          <i className='bi bi-instagram'></i>
        </a>
      </Container>
      <Container className='px-5 text-center text-muted my-3 small '>
        <p className='px-5'>
          &copy; All other trademarks and trade names are property of their respective
          owners.
        </p>
        <a
          href='https://ikorchev.com/'
          className='text-muted'
          target='_blank'
          rel='noreferrer'>
          ikorchev.com
        </a>
      </Container>
    </Container>
  )
}

export default Footer
