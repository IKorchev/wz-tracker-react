const API = require("call-of-duty-api")()
// log in to call-of-duty

const getData = async (user, platform) => {
  try {
    warzoneData = await API.MWwz(user, platform)
    console.log(warzoneData.lifetime.mode.br)
  } catch (error) {
    throw error
  }
  return warzoneData
}


module.exports = { getData }
