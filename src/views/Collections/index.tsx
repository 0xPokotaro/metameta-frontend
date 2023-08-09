import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
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
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { PAGE_NAME } from '@/config'
import CreateCollectionDialog from '@/components/dialog/CreateCollectionDialog'
import EditCollectionDialog from '@/components/dialog/EditCollectionDialog'

const Collections: React.FC<React.PropsWithChildren> = () => {
  const router = useRouter()

  const [collections, setCollections] = useState([])
  const [openCreateCollectionDialog, setOpenCreateCollectionDialog] =
    useState(false)
  const [openEditCollectionDialog, setOpenEditCollectionDialog] =
    useState(false)

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/collection')
      const data = await response.json()
      setCollections(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handlerCloseCreateCollectionDialog = () => {
    setOpenCreateCollectionDialog(false)
  }

  const handlerCloseEditCollectionDialog = () => {
    setOpenEditCollectionDialog(false)
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
            <Typography color="text.primary">
              {PAGE_NAME.COLLECTIONS.INDEX}
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid xs={12} sx={{ textAlign: 'right' }}>
          <Button
            variant="contained"
            disableElevation
            onClick={() => setOpenCreateCollectionDialog(true)}
          >
            Create new collection
          </Button>
          <CreateCollectionDialog
            open={openCreateCollectionDialog}
            onClose={handlerCloseCreateCollectionDialog}
          />
        </Grid>
        <Grid xs={12}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Collection name</TableCell>
                <TableCell>Created on</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {collections.map((row: any) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.createdAt}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Box>
                      <Button
                        onClick={() => router.push('/collections/edit/xxxx')}
                      >
                        Edit
                      </Button>
                      <EditCollectionDialog
                        open={openEditCollectionDialog}
                        onClose={handlerCloseEditCollectionDialog}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Collections
