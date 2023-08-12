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
  content: string
}

const ResultDialog = (props: Props) => {
  const { onClose, open, title, content } = props

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={open} maxWidth="sm" fullWidth onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  )
}

export default ResultDialog
