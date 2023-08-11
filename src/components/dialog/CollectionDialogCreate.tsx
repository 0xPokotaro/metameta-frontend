import { Controller, useForm } from 'react-hook-form'
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { API_URI } from '@/config'
import type { CollectionCreateRequest } from '@/types'

type Props = {
  open: boolean
  onAlart: () => void
  onClose: () => void
}

const CollectionDialogCreate = (props: Props) => {
  const { onClose, open, onAlart } = props

  const { control, reset, handleSubmit } = useForm<CollectionCreateRequest>({})

  const handleClose = () => {
    reset()
    onClose()
  }

  const submit = async (data: any) => {
    try {
      await fetch(API_URI.COLLECTIONS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      reset()
      onAlart()
      onClose()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Dialog open={open} maxWidth="sm" fullWidth>
      <DialogTitle>Create collection</DialogTitle>
      <Box component="form" onSubmit={handleSubmit(submit)}>
        <DialogContent dividers>
          <Box>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{
                required: { value: true, message: '必須入力' }
              }}
              render={({ field, formState: { errors } }) => (
                <TextField
                  {...field}
                  label="Collection name"
                  fullWidth
                  placeholder="Minthub"
                  error={errors.name ? true : false}
                  helperText={errors.name?.message as string}
                />
              )}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Box>
            <Button color="error" onClick={() => handleClose()}>
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </Box>
        </DialogActions>
      </Box>
    </Dialog>
  )
}

export default CollectionDialogCreate
