import { useState, useRef } from "react"
import "./styles/main.scss"
import Header from "./components/LandingPage"
import Form from "./components/Form"
import Content from "./components/Content"
import Footer from "./components/Footer"
import "bootstrap"

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
  const formRef = useRef(null)

  return (
    <>
      <Header myRef={formRef} />
      <Form ref={formRef} setData={setData} setLoading={setLoading} data={data} />
      <Content data={data} loading={loading} />
      <Footer />
    </>
  )
}

export default App
