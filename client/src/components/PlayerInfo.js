import React from "react"

const PlayerInfo = ({ username, level }) => {
  return (
    <>
      <h1 className='h2 text-center text-secondary text-uppercase'>{username}</h1>
      <h2 className='text-center text-info'>Level: {level}</h2>
    </>
  )
}

export default PlayerInfo
