import React from "react"

const PlayerInfo = ({ data }) => {
  const name = data[0].username
  return (
    <>
      <h1 className='h2 my-4 text-center text-secondary text-uppercase'>{name}</h1>
    </>
  )
}

export default PlayerInfo
