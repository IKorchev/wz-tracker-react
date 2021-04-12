import { useState } from "react"
import "./styles/main.scss"
import Header from "./components/Header"
import Form from "./components/Form"
import Content from "./components/Content"
import "bootstrap"

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
  const [alert, setAlert] = useState(null)

  return (
    <div className='App'>
      <Header />
      <Form setAlert={setAlert} setData={setData} setLoading={setLoading} />
      <Content alert={alert} data={data} loading={loading} />
    </div>
  )
}

export default App
