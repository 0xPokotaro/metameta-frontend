import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  Button,
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import { API_URI } from '@/config'

const TableCollection = () => {
  const router = useRouter()

  const [collections, setCollections] = useState([])

  const fetchCollections = async () => {
    try {
      const response = await fetch(API_URI.COLLECTIONS)
      const data = await response.json()
      setCollections(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCollections()
  }, [])

  return (
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
                <Button onClick={() => router.push('/collections/detail/xxxx')}>
                  Detail
                </Button>
              </Box>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default TableCollection
