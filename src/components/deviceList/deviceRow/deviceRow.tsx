import { FC, memo } from 'react'

import { TableCell, TableRow } from '@mui/material'

import { Device } from '../../../types'

const columns = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'uniqueId', label: 'Unique ID' },
  { id: 'status', label: 'Status' },
  { id: 'lastUpdate', label: 'Last Update' },
]

interface DeviceRowProps {
  device: Device
}

export const DeviceRow: FC<DeviceRowProps> = memo(({ device }) => (
  <TableRow>
    {columns.map((column) => (
      <TableCell key={column.id}>
        {column.id === 'lastUpdate'
          ? new Date(device[column.id]).toLocaleString()
          : device[column.id as keyof Device]}
      </TableCell>
    ))}
  </TableRow>
))
