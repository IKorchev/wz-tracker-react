import React, { useState, useRef } from "react"
import { Container } from "react-bootstrap"

const Form = ({ setData, setLoading, data }) => {
  let formRef = useRef(null)
  const [name, setName] = useState("")
  const [platform, setPlatform] = useState("battle")

  const handleFormSubmit = async (e) => {
    const body = {
      name: name.toLowerCase(),
      platform: platform.toLowerCase(),
    }
    e.preventDefault()
    setLoading(true)
    const response = await fetch("/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    console.log(response.status)
    if (response.status === 200) {
      const json = await response.json()
      setLoading(false)
      setData(json)
    } else {
      setLoading(false)
      setData(undefined)
    }
    return e.target.reset()
  }

  return (
    <Container fluid className='text-center' id='content-wrapper'>
      <h1 className='display-3 my-5'>Player Lookup</h1>
      <Container id='content-container'>
        <form onSubmit={handleFormSubmit}>
          <Container
            ref={formRef}
            className='d-sm-flex justify-content-center'
            id='form-elements'>
            <label className='visually-hidden'>Player name</label>
            <input
              type='text'
              onChange={(e) => {
                setName(e.currentTarget.value)
              }}
              placeholder='Name (include #id)'
            />
            <label className='visually-hidden'>Platform</label>
            <select
              value={platform}
              onChange={(e) => {
                setPlatform(e.target.value)
              }}>
              <option value='battle'>Battle.net</option>
              <option value='psn'>Playstation</option>
              <option value='xbl'>Xbox Live</option>
              <option value='steam'>Steam</option>
              <option value='acti'>Activision</option>
              <option value='uno'>Numerical Identifier</option>
            </select>
            <button type='submit' id='search-button' className='button'>
              Search
            </button>
          </Container>
        </form>
      </Container>
    </Container>
  )
}

export default Form
