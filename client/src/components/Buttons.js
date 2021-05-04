import { Tooltip, OverlayTrigger, Button } from "react-bootstrap"
import { deleteUser, updateUser } from "./_helper"

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

export const DeleteButton = () => (
  <OverlayTrigger placement='top' overlay={deleteTooltip}>
    <Button className='mt-2 button content-button w-100' onClick={deleteUser}>
      Delete stats
    </Button>
  </OverlayTrigger>
)

export const UpdateButton = () => (
  <OverlayTrigger placement='top' overlay={updateTooltip}>
    <Button className='mt-2 button content-button  w-100' onClick={updateUser}>
      Update stats
    </Button>
  </OverlayTrigger>
)
