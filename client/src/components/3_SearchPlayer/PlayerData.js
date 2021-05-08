import React, { useEffect, useRef } from "react"
import Accordions from "./Accordions"
import { gsap } from "gsap"
import { Container } from "react-bootstrap"

const PlayerData = ({ data }) => {
  // Animation
  let contentRef = useRef(null)
  const name = data[0].username

  useEffect(() => {
    const tl = gsap.timeline()
    let main = contentRef.children[0]
    let childrenrefs = contentRef.children[0].children[1].children
    console.log(childrenrefs)
    tl.from(main, {
      x: -100,
      opacity: 0,
      duration: 0.3,
      ease: "power1.inOut",
    }).from(childrenrefs, {
      scale: 0.89,
      y: -55,
      x: -55,
      opacity: 0,
      duration: 0.3,
      stagger: 0.1,
    })
  }, [])

  return (
    <Container id='main-wrapper' ref={(el) => (contentRef = el)}>
      <Container id='main-content'>
        <h1 className='h2 my-4 text-center text-secondary text-uppercase'>{name}</h1>
        <Container fluid className='d-lg-flex'>
          <Accordions data={data} />
        </Container>
      </Container>
    </Container>
  )
}

export default PlayerData
