const API = require("call-of-duty-api")()
const EMAIL = process.env.EMAIL
const PASSWORD = process.env.PASSWORD
// log in to call-of-duty
const codLogin = async () => {
  try {
    console.log(EMAIL, PASSWORD)
    await API.login(EMAIL, PASSWORD)
    let logged = await API.isLoggedIn()
    console.log(`User logged in - ${logged}`)
  } catch (err) {
    console.log(err)
  }
}

const getData = async (user, platform) => {
  try {
    warzone = await API.MWwz(user, platform)
    coldwar = await API.CWmp(user, platform)

  } catch (error) {
    console.error(error)
  }
  return {
    warzone,
    coldwar,
  }
}

const getLeaderboards = async () => {}

module.exports = { codLogin, getData, getLeaderboards }
