import { useState } from 'react'
import Image from 'next/image'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { MuiFileInput } from 'mui-file-input'

type Props = {
  open: boolean
  onClose: () => void
}

const NftDialogImageUpload = (props: Props) => {
  const { onClose, open } = props

  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string>('')

  const handleChange = (newValue: File | null) => {
    setFile(!newValue ? null : newValue)
    setPreview(!newValue ? '' : window.URL.createObjectURL(newValue))
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={open} maxWidth="sm" fullWidth>
      <DialogTitle>Edit collection</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Box>
              <MuiFileInput
                value={file}
                onChange={handleChange}
                variant="outlined"
                label="Image"
                fullWidth
              />
            </Box>
            <Box></Box>
          </Grid>
          <Grid xs={12} sx={{ textAlign: 'center' }}>
            {preview ? (
              <Image
                id="image-preview"
                src={preview}
                alt="Picture of the author"
                width={350}
                height={350}
              />
            ) : (
              <Image
                id="image-no-preview"
                src={'/no_image.png'}
                alt="Picture of the author"
                width={350}
                height={350}
              />
            )}
          </Grid>
        </Grid>
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

export default NftDialogImageUpload
