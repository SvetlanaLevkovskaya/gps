import { FC } from 'react'

import { TableCell, TableHead, TableRow } from '@mui/material'

const columns = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'uniqueId', label: 'Unique ID' },
  { id: 'status', label: 'Status' },
  { id: 'lastUpdate', label: 'Last Update' },
]

export const DeviceListHeader: FC = () => (
  <TableHead>
    <TableRow>
      {columns.map((column) => (
        <TableCell key={column.id} sx={{ fontWeight: 700 }}>
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
)
