import React from "react"
import AlertComponent from "./Alert"
import SpinnerComponent from "./SpinnerComponent"
import ContentComponent from "./ContentComponent"


const Content = ({ data, loading }) => {
  if (loading) return <SpinnerComponent />
  if (data === undefined && !loading) return <AlertComponent />
  if (data) return <ContentComponent data={data}/>
  return <></>
}

export default Content
