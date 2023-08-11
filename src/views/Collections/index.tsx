import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
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
import { API_URI, PAGE_NAME } from '@/config'
import AlartDialog from '@/components/dialog/AlartDialog'
import CollectionDialogCreate from '@/components/dialog/CollectionDialogCreate'

const Collections: React.FC<React.PropsWithChildren> = () => {
  const router = useRouter()
  const { t } = useTranslation('collections')

  const [collections, setCollections] = useState([])
  const [openCreateCollectionDialog, setOpenCreateCollectionDialog] =
    useState<boolean>(false)
  const [openAlertDialog, setOpenAlertDialog] = useState<boolean>(false)

  const fetchCollections = async () => {
    try {
      const response = await fetch(API_URI.COLLECTIONS)
      const data = await response.json()
      setCollections(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handlerCloseCreateCollectionDialog = () => {
    setOpenCreateCollectionDialog(false)
  }

  const handlerOpenAlertDialog = () => {
    setOpenAlertDialog(true)
  }

  useEffect(() => {
    fetchCollections()
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
            {t('index.button.create')}
          </Button>
          <CollectionDialogCreate
            open={openCreateCollectionDialog}
            onAlart={handlerOpenAlertDialog}
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
                        onClick={() => router.push('/collections/detail/xxxx')}
                      >
                        Detail
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
      <AlartDialog
        open={openAlertDialog}
        onClose={() => setOpenAlertDialog(false)}
        title="Delete collection"
      />
    </Container>
  )
}

export default Collections
