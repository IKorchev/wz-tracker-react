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
    let main = contentRef.children[0]
    let childrenrefs = contentRef.children[0].children[1].children
    console.log(childrenrefs)
    tl.from(main, {
      x: -200,
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
    }).from(childrenrefs, {
      scale: 0.89,
      y: -55,
      x: -55,
      opacity: 0,
      duration: 0.4,
      stagger: 0.45,
    })
  }, [])

  return (
    <Container ref={(el) => (contentRef = el)} >
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
