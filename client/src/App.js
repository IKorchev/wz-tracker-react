import { useState } from "react"
import "./styles/main.scss"
import Header from "./components/Header"
import Form from "./components/Form"
import Content from "./components/Content"
import "bootstrap"

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
  
  return (
    <>
      <Header />
      <Form setData={setData} setLoading={setLoading} data={data} />
      <Content data={data} loading={loading} />
    </>
  )
}

export default App
