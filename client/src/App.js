import { useState } from "react"
import "./styles/main.scss"
import Header from "./components/header"
import Form from "./components/form"
import Main from "./components/Main"

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
