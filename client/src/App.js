import { useState, useRef } from "react"
import "./styles/main.scss"
import Landing from "./components/1_Landing/LandingPage"
import Cards from "./components/2_Cards/Cards"
import Form from "./components/3_SearchPlayer/Form"
import Content from "./components/3_SearchPlayer/Content"
import Footer from "./components/4_Footer/Footer"
import "bootstrap"

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
  const formRef = useRef(null)

  return (
    <>
      <Landing myRef={formRef} />
      <Cards />
      <Form ref={formRef} setData={setData} setLoading={setLoading} data={data} />
      <Content data={data} loading={loading} />
      <Footer />
    </>
  )
}

export default App
