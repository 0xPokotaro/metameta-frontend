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

const CreateProjectDialog = (props: Props) => {
  const { onClose, open } = props

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={open} maxWidth="sm" fullWidth>
      <DialogTitle>Create project</DialogTitle>
      <DialogContent dividers>
        <ul>
          <li>project name</li>
          <li>nft name</li>
          <li>nft symbol</li>
        </ul>
      </DialogContent>
      <DialogActions>
        <Box>
          <Button color="error" onClick={() => handleClose()}>
            Cancel
          </Button>
          <Button onClick={() => handleClose()}>Create</Button>
        </Box>
      </DialogActions>
    </Dialog>
  )
}

export default CreateProjectDialog
