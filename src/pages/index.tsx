import { useEffect, useState } from 'react'
import { Breadcrumbs, Container, Link, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Layout from '@/components/Layout'
import type { NextPageWithLayout } from '@/pages/_app'

const Home: NextPageWithLayout = () => {
  const [nftCollections, setNftCollections] = useState([])

  const fetchNftCollections = async () => {
    try {
      const response = await fetch('/api/nft/collection')
      const data = await response.json()
      setNftCollections(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchNftCollections()
  }, [])

  return (
    <Container maxWidth="lg" sx={{ my: '24px' }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="text.primary">HOME</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid xs={12}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Symbol</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Contract</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {nftCollections.map((row: any) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.symbol}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.contractType}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Link href={`https://etherscan.io/address/${row.tokenAddress}`}>
                    {row.tokenAddress}
                  </Link>
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

Home.getLayout = function getLayout(page) {
  return (
    <>
    <Layout>
      {page}
    </Layout>
    </>
  )
}

export default Home
