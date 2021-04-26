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
    const response = await fetch("/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    if (response.status === 200) {
      const json_response = await response.json()
      setLoading(false)
      setData(json_response)
      
    }
    if (response.status !== 200) {
      console.log("error")
      setData(undefined)
      setLoading(false)
    }
    setPlatform("battle")
    setName("")
    return e.target.reset()
  }

  return (
    <div className='container'>
      <h3 className='text-center'>Look for a player</h3>
      <form className='form' onSubmit={handleFormSubmit}>
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
          value={platform}
          onChange={(e) => {
            setPlatform(e.target.value)
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
          <b>Search</b>
        </button>
      </form>
    </div>
  )
}

export default Form
