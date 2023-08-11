import { Breadcrumbs, Container, Link, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import TabContextCollection from '@/components/tab/collection/TabContextCollection'
import { PAGE_NAME } from '@/config'

const CollectionDetail: React.FC<React.PropsWithChildren> = () => {
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
          <TabContextCollection />
        </Grid>
      </Grid>
    </Container>
  )
}

export default CollectionDetail
