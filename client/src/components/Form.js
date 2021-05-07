import React, { useState, forwardRef, useRef } from "react"
import { Container } from "react-bootstrap"

const Form = ({ setData, setLoading, data }, ref) => {
  let h3Ref = useRef(null)
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
    <Container ref={ref} fluid className='text-center' id='content-wrapper'>
      <Container id='content-container'>
        <h3 ref={h3Ref}>Look for a player</h3>
        <form className='form' onSubmit={handleFormSubmit}>
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
              className='search'
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

export default forwardRef(Form)
