import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'

type Props = {
  open: boolean
  onClose: () => void
  title: string
}

const AlartDialog = (props: Props) => {
  const { onClose, open, title } = props

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={open} maxWidth="sm" fullWidth onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
    </Dialog>
  )
}

export default AlartDialog
