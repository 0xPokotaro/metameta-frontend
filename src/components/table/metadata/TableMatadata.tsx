import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  Breadcrumbs,
  Button,
  Box,
  Chip,
  Container,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'

const TableMatadata = () => {
  const router = useRouter()

  const [metadataList, setMetadataList] = useState([])

  const truncateString = (str: string) => {
    return str.length > 50 ? str.substring(0, 50) + '...' : str
  }

  const fetchMetadataList = async () => {
    try {
      const response = await fetch('/api/metadata')
      const data = await response.json()
      setMetadataList(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchMetadataList()
  }, [])

  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Token ID</TableCell>
          <TableCell>Rarity rank</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {metadataList.map((row: any) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.tokenId}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.rarityRank}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell component="th" scope="row">
              {truncateString(row.descriotion)}
            </TableCell>
            <TableCell component="th" scope="row">
              <Chip label="draft" />
            </TableCell>
            <TableCell component="th" scope="row">
              <Box>
                <Button sx={{ mr: '8px' }} onClick={() => console.log('')}>
                  General
                </Button>
                <Button sx={{ mr: '8px' }} onClick={() => console.log('')}>
                  Image
                </Button>
                <Button onClick={() => console.log('')}>Attributes</Button>
              </Box>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default TableMatadata
