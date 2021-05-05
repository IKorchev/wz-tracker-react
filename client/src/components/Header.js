import React, { useEffect, useRef } from "react"
import { Container } from "react-bootstrap"
import WarzoneSVG from "../images/Warzone.svg"
import BlockSVG from "../images/Block.svg"
import gsap from "gsap"
const Header = () => {
  let blockRef = useRef(null)
  let buttonRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.from(blockRef, { y: "-101%", duration: 1.2, ease: "elastic.out(1,0.5)" }).to(
      buttonRef,
      {
        boxShadow: " 0px 0px 15px rgb(179, 179, 179)",
        duration: 0.5,
        ease: "elastic",
      },
      "-=1"
    )
  }, [])
  return (
    <Container fluid id='container-column'>
      <Container id='landing-header'>
        <h1>Track your Call of Duty stats</h1>
        <p>Save your stats and check how you did after your games! </p>
        <button ref={(e) => (buttonRef = e)} className='button'>
          See more
        </button>
      </Container>
      <img id='warzone-svg' src={WarzoneSVG} alt='background' />
      <img ref={(el) => (blockRef = el)} id='block' src={BlockSVG} alt='background' />
    </Container>
  )
}

export default Header
