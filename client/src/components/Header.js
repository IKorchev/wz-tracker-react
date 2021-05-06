import React, { useEffect, useRef } from "react"
import { Container } from "react-bootstrap"
import WarzoneSVG from "../images/Warzone.svg"
import BlockSVG from "../images/Block.svg"
import gsap from "gsap"

const Header = ({ myRef }) => {
  let blockRef = useRef(null)
  let headerRef = useRef(null)
  const handleButton = () => {
    myRef.current.scrollIntoView({ behavior: "smooth", alignToTop: true })
  }
  useEffect(() => {
    const tl = gsap.timeline()
    const headerItems = headerRef.children
    tl.from(blockRef, { y: "-101%", duration: 0.7, ease: "circ.out" }).from(headerItems, {
      x: 50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
    })
  }, [])
  return (
    <Container fluid id='container-column'>
      <Container ref={(el) => (headerRef = el)} id='landing-header'>
        <h1>Track your Call of Duty stats</h1>
        <p>Save your stats and check how you did after your games! </p>
        <button onClick={handleButton} className='button'>
          See more
        </button>
      </Container>
      <img id='warzone-svg' src={WarzoneSVG} alt='background' />
      <img ref={(el) => (blockRef = el)} id='block' src={BlockSVG} alt='background' />
    </Container>
  )
}

export default Header
