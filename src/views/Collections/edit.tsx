import { useEffect, useState } from 'react'
import {
  Breadcrumbs,
  Button,
  Box,
  Container,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { PAGE_NAME } from '@/config'
import CreateCollectionDialog from '@/components/dialog/CreateCollectionDialog'
import EditCollectionDialog from '@/components/dialog/EditCollectionDialog'

function CustomTabPanel(props: any) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const CollectionsEdit: React.FC<React.PropsWithChildren> = () => {
  const [collections, setCollections] = useState([])
  const [value, setValue] = useState(0)

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/collection')
      const data = await response.json()
      setCollections(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

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
              {PAGE_NAME.COLLECTIONS.EDIT}
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid xs={12}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="fullWidth"
          >
            <Tab label="Collection" {...a11yProps(0)} />
            <Tab label="Artwork" {...a11yProps(1)} />
            <Tab label="Smart contract" {...a11yProps(2)} />
            <Tab label="Allow list" {...a11yProps(3)} />
          </Tabs>
        </Grid>
        <Grid xs={12}>
          <CustomTabPanel value={value} index={0}>
            Item One
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            Item Three
          </CustomTabPanel>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CollectionsEdit
