import { useState } from 'react'
import { Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { TabPanel } from '@mui/lab'
import NftDialogImageUpload from '@/components/dialog/NftDialogImageUpload'
import TableMatadata from '@/components/table/metadata/TableMatadata'

type Props = {
  value: string
}

const TabPanelArtwork = (props: Props) => {
  const { value } = props

  const [openNftDialogImageUpload, setOpenNftDialogImageUpload] =
    useState(false)

  const handlerCloseNftDialogImageUpload = () => {
    setOpenNftDialogImageUpload(false)
  }

  return (
    <TabPanel value={value} sx={{ px: 0 }}>
      <Grid container spacing={2}>
        <Grid xs={12} sx={{ textAlign: 'right' }}>
          <Button
            sx={{ mr: '8px' }}
            onClick={() => setOpenNftDialogImageUpload(true)}
            variant="contained"
            disableElevation
          >
            Image upload
          </Button>
          <NftDialogImageUpload
            open={openNftDialogImageUpload}
            onClose={handlerCloseNftDialogImageUpload}
          />
          <Button variant="contained" disableElevation>
            Deploy
          </Button>
        </Grid>
        <Grid xs={12}>
          <TableMatadata />
        </Grid>
      </Grid>
    </TabPanel>
  )
}

export default TabPanelArtwork
