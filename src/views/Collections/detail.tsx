import { useEffect, useState } from 'react'
import {
  Breadcrumbs,
  Button,
  Container,
  Link,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { PAGE_NAME } from '@/config'

const CollectionDetail: React.FC<React.PropsWithChildren> = () => {
  const [value, setValue] = useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Container maxWidth="lg" sx={{ my: '24px' }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              {PAGE_NAME.HOME}
            </Link>
            <Link underline="hover" color="inherit" href="/collections">
              {PAGE_NAME.COLLECTIONS.INDEX}
            </Link>
            <Typography color="text.primary">
              {PAGE_NAME.COLLECTIONS.DETAIL}
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid xs={12}>
          <TabContext value={value}>
            <TabList
              onChange={handleChange}
              aria-label="collection tab"
              variant="fullWidth"
            >
              <Tab label="Collection" value="1" />
              <Tab label="Artwork" value="2" />
              <Tab label="Smart contract" value="3" />
              <Tab label="Allow list" value="4" />
            </TabList>
            <TabPanel value="1">
              <Grid container spacing={2}>
                <Grid xs={12} sx={{ textAlign: 'right' }}>
                  <Button variant="contained" disableElevation>
                    Edit
                  </Button>
                </Grid>
                <Grid xs={12}>
                  <Typography variant="h5">Collection</Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography variant="h5">Social media</Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography variant="h5">Documents</Typography>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="2">Item 2</TabPanel>
            <TabPanel value="3">Item 3</TabPanel>
            <TabPanel value="4">Item 4</TabPanel>
          </TabContext>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CollectionDetail
