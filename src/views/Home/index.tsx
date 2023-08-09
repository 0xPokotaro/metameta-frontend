import { useEffect, useState } from 'react'
import {
  Breadcrumbs,
  Button,
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { PAGE_NAME } from '@/config'
import CreateProjectDialog from '@/components/dialog/CreateCollectionDialog'

const Home: React.FC<React.PropsWithChildren> = () => {
  const [projects, setProjects] = useState([])
  const [openCreateProjectDialog, setOpenCreateProjectDialog] = useState(false)

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/project')
      const data = await response.json()
      setProjects(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handlerCloseCreateProjectDialog = () => {
    setOpenCreateProjectDialog(false)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <Container maxWidth="lg" sx={{ my: '24px' }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="text.primary">{PAGE_NAME.HOME}</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid xs={12} sx={{ textAlign: 'right' }}>
          <Button
            variant="contained"
            disableElevation
            onClick={() => setOpenCreateProjectDialog(true)}
          >
            Create new project
          </Button>
          <CreateProjectDialog
            open={openCreateProjectDialog}
            onClose={handlerCloseCreateProjectDialog}
          />
        </Grid>
        <Grid xs={12}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Project name</TableCell>
                <TableCell>Created on</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((row: any) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.createdAt}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Box>
                      <Button>Edit</Button>
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

export default Home
