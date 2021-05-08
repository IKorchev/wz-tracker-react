import React from "react"
import { Card } from "react-bootstrap"

const MyCard = (props) => {
  return (
    <Card className='card'>
      <div className='d-flex'>
        {props.image ? <img id='card-image' src={props.image} alt='card'></img> : <></>}
        <h2>{props.title}</h2>
      </div>
    </Card>
  )
}

export default MyCard
