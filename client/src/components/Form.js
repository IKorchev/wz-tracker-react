import React, { useEffect, useRef, useState } from "react"

const Form = ({ setData, setLoading, data }) => {
  const [name, setName] = useState("")
  const [platform, setPlatform] = useState("battle")

  let searchRef = useRef(null)
  useEffect(() => searchRef.focus(), [])
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
    <div className='container'>
      <h3 className='text-center'>Look for a player</h3>
      <form className='form' onSubmit={handleFormSubmit}>
        <input
          type='text'
          ref={(el) => (searchRef = el)}
          onChange={(e) => {
            setName(e.currentTarget.value)
          }}
          className='search'
          placeholder='Name (include #id)'
        />
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
      </form>
    </div>
  )
}

export default Form
