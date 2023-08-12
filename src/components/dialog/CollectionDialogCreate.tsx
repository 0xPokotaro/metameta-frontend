import { Controller, useForm } from 'react-hook-form'
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material'
import { API_URI } from '@/config'
import type { CollectionCreateRequest } from '@/types'
import type { ResultDialogProps } from '@/hooks/dialog/useResultDialog'

type Props = {
  open: boolean
  onClose: () => void
  onComplite: (props: ResultDialogProps) => void
}

const CollectionDialogCreate = (props: Props) => {
  const { onClose, open, onComplite } = props

  const { control, reset, handleSubmit } = useForm<CollectionCreateRequest>({})

  const handleClose = () => {
    reset()
    onClose()
  }

  const submit = async (data: CollectionCreateRequest) => {
    try {
      await fetch(API_URI.COLLECTIONS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      onClose()
      reset()

      await new Promise((resolve) => setTimeout(resolve, 250))

      onComplite({
        title: 'Success',
        content: 'Create collection success.',
      })
    } catch (error) {
      console.error(error)

      onComplite({
        title: 'Error',
        content: 'Create collection error.',
      })
    }
  }

  const FieldBox = (props: { children: React.ReactNode }) => {
    const { children } = props
    return (
      <Box sx={{ mb: 2 }}>
        {children}
      </Box>
    )
  }

  return (
    <Dialog open={open} maxWidth="sm" fullWidth>
      <DialogTitle>Create collection</DialogTitle>
      <Box component="form" onSubmit={handleSubmit(submit)}>
        <DialogContent dividers>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Create a collection to store your NFTs.
          </Typography>
          <FieldBox>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{
                required: { value: true, message: 'Required' },
              }}
              render={({ field, formState: { errors } }) => (
                <TextField
                  {...field}
                  label="Collection name"
                  fullWidth
                  placeholder="Minthub Collection"
                  error={errors.name ? true : false}
                  helperText={errors.name?.message as string}
                />
              )}
            />
          </FieldBox>
          <FieldBox>
            <Controller
              name="nftName"
              control={control}
              defaultValue=""
              rules={{
                required: { value: true, message: 'Required' },
              }}
              render={({ field, formState: { errors } }) => (
                <TextField
                  {...field}
                  label="NFT name"
                  fullWidth
                  placeholder="Minthub"
                  error={errors.nftName ? true : false}
                  helperText={errors.nftName?.message as string}
                />
              )}
            />
          </FieldBox>
          <FieldBox>
            <Controller
              name="nftSymbol"
              control={control}
              defaultValue=""
              rules={{
                required: { value: true, message: 'Required' },
              }}
              render={({ field, formState: { errors } }) => (
                <TextField
                  {...field}
                  label="NFT symbol"
                  fullWidth
                  placeholder="MTHB"
                  error={errors.nftSymbol ? true : false}
                  helperText={errors.nftSymbol?.message as string}
                />
              )}
            />
          </FieldBox>
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
