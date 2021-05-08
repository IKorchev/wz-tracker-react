import { Tooltip, OverlayTrigger, Button } from "react-bootstrap"

//REQUESTS
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

// Tooltips
const updateTooltip = (pr) => (
  <Tooltip {...pr}>
    <h6>Permanently updates the previous stats to the current stats.</h6>
  </Tooltip>
)
const deleteTooltip = (pr) => (
  <Tooltip className='outline-none' {...pr}>
    <h6>Permanently deletes player's stats from the database.</h6>
  </Tooltip>
)
// Buttons
export const DeleteButton = () => (
  <OverlayTrigger placement='top' overlay={deleteTooltip}>
    <Button className='button mt-2' onClick={deleteUser}>
      Delete stats
    </Button>
  </OverlayTrigger>
)

export const UpdateButton = () => (
  <OverlayTrigger placement='top' overlay={updateTooltip}>
    <Button className='button mt-2' onClick={updateUser}>
      Update stats
    </Button>
  </OverlayTrigger>
)
