import React, { useEffect, useRef } from "react"
import Accordions from "./Accordions"
import PlayerInfo from "./PlayerInfo"
import { gsap } from "gsap"
import { Container } from "react-bootstrap"

const ContentComponent = ({ data }) => {
  // Animation
  let contentRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    let main = contentRef.children[0].children
    tl.from(main, {
      x: -200,
      opacity: 0,
      stagger: 0.25,
      duration: 0.5,
      ease: "power1.inOut",
    }).from(main, { scale: 0.85, ease: "power1.inOut", duration: 1 })
    console.log(main)
  }, [])

  return (
    <Container ref={(el) => (contentRef = el)} className='container-column'>
      <Container id='main'>
        <PlayerInfo data={data} />
        <Container fluid className='d-lg-flex'>
          <Accordions data={data} />
        </Container>
      </Container>
    </Container>
  )
}

export default ContentComponent
