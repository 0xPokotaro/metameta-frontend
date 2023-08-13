import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { useDialog } from '@/hooks/dialog/useDialog'
import { useResultDialog } from '@/hooks/dialog/useResultDialog'
import { Breadcrumbs, Button, Container, Link, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { API_URI, PAGE_NAME } from '@/config'
import ResultDialog from '@/components/dialog/ResultDialog'
import CollectionDialogCreate from '@/components/dialog/CollectionDialogCreate'
import TableCollection from '@/components/table/collection/TableCollection'

const Collections: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation('collections')

  const {
    isOpen: isCreateCollectionDialog,
    openDialog: openCreateCollectionDialog,
    closeDialog: closeCreateCollectionDialog,
  } = useDialog()

  const {
    isOpen: isResultDialog,
    openDialog: openResultDialog,
    closeDialog: closeResultDialog,
    dialogProps: resultDialogProps,
  } = useResultDialog()

  const [collectionList, setCollectionList] = useState([])

  const fetchCollectionList = async () => {
    try {
      const response = await fetch(API_URI.COLLECTION)
      const data = await response.json()
      setCollectionList(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCollectionList()
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
              {PAGE_NAME.COLLECTION.INDEX}
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid xs={12} sx={{ textAlign: 'right' }}>
          <Button
            variant="contained"
            disableElevation
            onClick={openCreateCollectionDialog}
          >
            {t('index.button.create')}
          </Button>
          <CollectionDialogCreate
            open={isCreateCollectionDialog}
            onClose={closeCreateCollectionDialog}
            onComplite={openResultDialog}
            onFetch={fetchCollectionList}
          />
        </Grid>
        <Grid xs={12}>
          <TableCollection collectionList={collectionList} />
        </Grid>
      </Grid>
      <ResultDialog
        open={isResultDialog}
        onClose={closeResultDialog}
        title={resultDialogProps.title}
        content={resultDialogProps.content}
      />
    </Container>
  )
}

export default Collections
