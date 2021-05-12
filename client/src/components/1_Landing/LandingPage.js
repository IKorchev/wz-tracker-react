import React, { useEffect, useRef } from "react"
import { Container } from "react-bootstrap"
import WarzoneSVG from "../../images/Warzone.svg"
import BlockSVG from "../../images/Block.svg"
import gsap from "gsap"
import NavigationBar from "./Navbar"
const Landing = ({ myRef }) => {
  // refs
  let blockRef = useRef(null)
  let headerRef = useRef(null)

  // button onclick
  const handleButton = () => {
    myRef.current.scrollIntoView({ behavior: "smooth", alignToTop: true })
  }

  // button hover animation
  const handleHover = (e) => {
    gsap.to(e.target, {
      x: "-1px",
      y: "-1px",
      boxShadow: "6px 6px 9px $darker-grey",
      duration: 0.3,
    })
  }
  const handleMouseLeave = (e) => {
    gsap.to(e.target, {
      x: "1px",
      y: "1px",
      boxShadow: "3px 3px 9px $darker-grey",
      duration: 0.3,
    })
  }
  useEffect(() => {
    const tl = gsap.timeline()
    const headerItems = headerRef.children
    //prettier-ignore
    tl.from(blockRef, { y: "-101%", duration: 0.7, ease: "circ.out" })
      .from(headerItems, {
        opacity: 0,
        y: -100,
        duration: 0.8,
        ease: "back",
    }, "-=0.7")
  }, [])

  return (
    <>
      <NavigationBar />
      <Container fluid id='landing-page-wrapper'>
        <Container ref={(el) => (headerRef = el)} id='landing-header'>
          <h1>Track your Call of Duty stats</h1>
          <p>Save your stats and check how you did after your games! </p>
          <button
            onClick={handleButton}
            onMouseEnter={handleHover}
            onFocus={handleHover}
            onBlur={handleMouseLeave}
            onMouseLeave={handleMouseLeave}
            className='button'>
            See more
          </button>
        </Container>
        <img id='warzone-svg' src={WarzoneSVG} alt='background' />
        <img ref={(el) => (blockRef = el)} id='block' src={BlockSVG} alt='background' />
      </Container>
    </>
  )
}

export default Landing
