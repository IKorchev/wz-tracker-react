import React, { useState } from "react"

const Form = ({ setData }) => {
  const [name, setName] = useState("")
  const [platform, setPlatform] = useState("battle")

  const handleFormSubmit = async (e) => {
    const body = {
      name: name,
      platform: platform,
    }
    console.log(body)
    e.preventDefault()
    console.log("it works")
    const response = await fetch("/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    const json_response = await response.json()
    setData(json_response)

    e.target.reset()
  }

  return (
    <div className='container'>
      <h3>Look for a player</h3>
      <form className='form' onSubmit={handleFormSubmit} action='/search' method='POST'>
        <input
          type='text'
          onChange={(e) => {
            setName(e.currentTarget.value)
            console.log(name)
          }}
          className='search'
          placeholder='Name (include #id)'
        />
        <select
          onChange={(e) => {
            setPlatform(e.currentTarget.value)
            console.log(platform)
          }}>
          <option value='battle'>Battle.net</option>
          <option value='psn'>Playstation</option>
          <option value='xbl'>Xbox Live</option>
          <option value='acti'>Activision</option>
          <option value='uno'>Numerical Identifier</option>
        </select>
        <button type='submit' className='button'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
