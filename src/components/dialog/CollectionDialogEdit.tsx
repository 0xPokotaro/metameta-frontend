import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'

type Props = {
  open: boolean
  onClose: () => void
}

const CollectionDialogEdit = (props: Props) => {
  const { onClose, open } = props

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={open} maxWidth="sm" fullWidth>
      <DialogTitle>Edit collection</DialogTitle>
      <DialogContent dividers>
        <ul>
          <li>name</li>
          <li>symbol</li>
          <li>description</li>
          <li>tags</li>
        </ul>
      </DialogContent>
      <DialogActions>
        <Box>
          <Button color="error" onClick={() => handleClose()}>
            Cancel
          </Button>
          <Button onClick={() => handleClose()}>Update</Button>
        </Box>
      </DialogActions>
    </Dialog>
  )
}

export default CollectionDialogEdit
