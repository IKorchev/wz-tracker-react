import React, { forwardRef, useEffect, useRef } from "react"
import { Container } from "react-bootstrap"
import MyCard from "./MyCard"
import Kills from "../../images/Kills.svg"
import Wins from "../../images/Wins.svg"
import Deaths from "../../images/Deaths.svg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Cards = (props, forwardedRef) => {
  // Animation
  let cardRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  const startCardsAnimation = () => {
    gsap.from(cardRef.children, {
      y: 100,
      opacity: 0,
      stagger: 0.05,
      scrollTrigger: {
        trigger: cardRef.children[0],
      },
    })
  }

  useEffect(() => {
    startCardsAnimation()
  }, [])

  return (
    <Container ref={forwardedRef} fluid id='cards-page'>
      <h1 className='text-secondary text-center display-3 mb-5'>
        Keep track of your progress
      </h1>
      <div ref={(el) => (cardRef = el)} className='cards-wrapper'>
        <MyCard image={Kills} title='Kills' />
        <MyCard image={Wins} title='Wins' />
        <MyCard image={Deaths} title='Deaths' />
        <MyCard title='Assists' />
        <MyCard title='Time Played' />
        <MyCard title='Games Played' />
      </div>
    </Container>
  )
}

export default forwardRef(Cards)
