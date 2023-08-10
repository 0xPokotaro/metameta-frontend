import { useEffect, useState } from 'react'
import {
  Breadcrumbs,
  Box,
  Button,
  Container,
  Link,
  InputAdornment,
  Tab,
  TextField,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { ArrowCircleRight } from '@mui/icons-material'
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
            <TabPanel value="1" sx={{ px: 0 }}>
              <Grid container spacing={2}>
                <Grid xs={12} sx={{ textAlign: 'right' }}>
                  <Button variant="contained" disableElevation>
                    Edit
                  </Button>
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
            <TabPanel value="2" sx={{ px: 0 }}>
              Item 2
            </TabPanel>
            <TabPanel value="3" sx={{ px: 0 }}>
              Item 3
            </TabPanel>
            <TabPanel value="4" sx={{ px: 0 }}>
              Item 4
            </TabPanel>
          </TabContext>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CollectionDetail
