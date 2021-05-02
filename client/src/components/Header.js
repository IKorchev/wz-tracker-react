import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
const Header = () => {
  let headerRef = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline()
    tl.from(headerRef, {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      delay: 0.1,
    })
  }, [])

  return (
    <div ref={(el) => (headerRef = el)} className='container-column'>
      <h1 className='header'>Warzone Stats Tracker</h1>
    </div>
  )
}

export default Header
