import {
  Breadcrumbs,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material'
import { PAGE_NAME } from '@/config'

const Home: React.FC<React.PropsWithChildren> = () => {
  return (
    <Container maxWidth="lg" sx={{ my: '24px' }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="text.primary">{PAGE_NAME.HOME}</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
