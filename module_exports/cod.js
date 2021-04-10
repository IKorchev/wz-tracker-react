const API = require("call-of-duty-api")()
const EMAIL = process.env.EMAIL
const PASSWORD = process.env.PASSWORD
// log in to call-of-duty
const codLogin = async () => {
  try {
    console.log(EMAIL, PASSWORD)
    await API.login(EMAIL, PASSWORD)
    let data = await API.isLoggedIn()
    console.log(`User logged in - ${data}`)
  } catch (err) {
    console.log(err)
  }
}

const getData = async (user, platform) => {
  let data
  try {
    data = await API.MWwz(user, platform)
    // console.log(data)
  } catch (error) {
    console.error(error)
  }
  return data
}
module.exports = { codLogin, getData }
