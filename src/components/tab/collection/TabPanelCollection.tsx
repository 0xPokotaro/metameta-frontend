import { useState } from 'react'
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { TabPanel } from '@mui/lab'
import { ArrowCircleRight } from '@mui/icons-material'
import CollectionDialogEdit from '@/components/dialog/CollectionDialogEdit'

type Props = {
  value: string
}

const CollectionTabPanel = (props: Props) => {
  const { value } = props

  const [openCollectionDialogEdit, setOpenCollectionDialogEdit] =
    useState(false)

  const handlerCloseCollectionDialogEdit = () => {
    setOpenCollectionDialogEdit(false)
  }

  return (
    <TabPanel value={value} sx={{ px: 0 }}>
      <Grid container spacing={2}>
        <Grid xs={12} sx={{ textAlign: 'right' }}>
          <Button
            variant="contained"
            disableElevation
            onClick={() => setOpenCollectionDialogEdit(true)}
          >
            Edit
          </Button>
          <CollectionDialogEdit
            open={openCollectionDialogEdit}
            onClose={handlerCloseCollectionDialogEdit}
          />
        </Grid>
        <Grid xs={12}>
          <Typography variant="h6" sx={{ pb: '16px' }}>
            Collection
          </Typography>
          <Box sx={{ pb: '24px' }}>
            <TextField
              id="nft-name"
              label="Name"
              defaultValue="Name"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box sx={{ pb: '24px' }}>
            <TextField
              id="nft-symbol"
              label="Symbol"
              defaultValue="Symbol"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box sx={{ pb: '24px' }}>
            <TextField
              id="nft-description"
              label="Description"
              defaultValue="Description"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h6" sx={{ pb: '16px' }}>
            Social media
          </Typography>
          <Box sx={{ pb: '24px' }}>
            <TextField
              id="nft-x"
              label="X"
              defaultValue="https://twitter.com/"
              fullWidth
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="start">
                    <ArrowCircleRight
                      sx={{ cursor: 'pointer' }}
                      onClick={() => console.log('hoge')}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ pb: '24px' }}>
            <TextField
              id="nft-discord"
              label="Discord"
              defaultValue="https://discord.com/"
              fullWidth
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="start">
                    <ArrowCircleRight
                      sx={{ cursor: 'pointer' }}
                      onClick={() => console.log('hoge')}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ pb: '24px' }}>
            <TextField
              id="nft-telegram"
              label="Telegram"
              defaultValue="https://telegram.org/"
              fullWidth
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="start">
                    <ArrowCircleRight
                      sx={{ cursor: 'pointer' }}
                      onClick={() => console.log('hoge')}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </TabPanel>
  )
}

export default CollectionTabPanel
