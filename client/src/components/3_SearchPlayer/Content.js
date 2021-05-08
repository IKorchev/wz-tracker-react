import React from "react"
import AlertComponent from "./Alert"
import SpinnerComponent from "./SpinnerComponent"
import PlayerData from "./PlayerData"

const Content = ({ data, loading }) => {
  if (loading) return <SpinnerComponent />
  if (data === undefined && !loading) return <AlertComponent />
  if (data) return <PlayerData data={data} />
  return <></>
}

export default Content
