import { useState } from "react"
import "./styles/main.scss"
import Header from "./components/HeaderComponent"
import Form from "./components/FormComponent"
import Main from "./components/MainComponent"
import "bootstrap"

function App() {
  const [data, setData] = useState("")

  return (
    <div className='App'>
      <Header />
      <Form setData={setData} />
      <Main data={data} />
    </div>
  )
}

export default App
