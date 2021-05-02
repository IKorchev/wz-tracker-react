const API = require("call-of-duty-api")()

const getData = async (user, platform) => {
  let warzoneData
  try {
    warzoneData = await API.MWwz(user, platform)
  } catch (error) {
    throw error
  }
  return warzoneData
}

module.exports = { getData }
