export const deleteUser = async () => {
  const response = await fetch("/delete", { method: "DELETE" })
  console.log("Data deleted")
  console.log(response.status)
}

export const updateUser = async () => {
  const response = await fetch("/update", { method: "POST" })
  console.log("Data updated")
  console.log(response)
}
