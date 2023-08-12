import { useRouter } from 'next/router'
import {
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'

interface Props {
  collectionList: any
}

const TableCollection = (props: Props) => {
  const { collectionList } = props

  const router = useRouter()

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
        {collectionList.map((row: any) => (
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
