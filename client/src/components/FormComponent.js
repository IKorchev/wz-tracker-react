import React, { useState } from "react"

const Form = ({ setData, setLoading }) => {
  const [name, setName] = useState("")
  const [platform, setPlatform] = useState("battle")

  const handleFormSubmit = async (e) => {
    const body = {
      name: name.toLowerCase(),
      platform: platform.toLowerCase(),
    }
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch("/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
      const json_response = await response.json()
      setData(json_response)
      setLoading(false)
      e.target.reset()
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div className='container'>
      <h3 className='text-center'>Look for a player</h3>
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
          <option value='steam'>Steam</option>
          <option value='acti'>Activision</option>
          <option value='uno'>Numerical Identifier</option>
        </select>
        <button type='submit' className='button'>
          Search
        </button>
      </form>
    </div>
  )
}

export default Form
