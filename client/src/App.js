import { useState } from "react"
import "./styles/main.scss"
import Header from "./components/HeaderComponent"
import Form from "./components/FormComponent"
import Main from "./components/MainComponent"
import "bootstrap"

function App() {
  const [data, setData] = useState("")
  const [loading, setLoading] = useState(true)

  return (
    <div className='App'>
      <Header />
      <Form setData={setData} setLoading={setLoading} />
      <Main data={data} loading={loading} />
    </div>
  )
}

export default App
