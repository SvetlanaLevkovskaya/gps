import { FC } from 'react'

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'

import { RequestStatus } from '../../store/device/types.ts'
import { Device } from '../../types'

interface DeviceListProps {
  devices?: Device[]
  searchStatus: RequestStatus
}

const columns = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'uniqueId', label: 'Unique ID' },
  { id: 'status', label: 'Status' },
  { id: 'lastUpdate', label: 'Last Update' },
]

export const DeviceList: FC<DeviceListProps> = ({ devices = [], searchStatus }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} sx={{ fontWeight: 700 }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {searchStatus === 'loading' ? (
              <TableRow>
                <TableCell colSpan={columns.length}>
                  <Typography align="center" color="textSecondary" fontSize="inherit">
                    Загрузка...
                  </Typography>
                </TableCell>
              </TableRow>
            ) : searchStatus === 'failed' || devices.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length}>
                  <Typography align="center" color="textSecondary" fontSize="inherit">
                    Объекты не найдены
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              devices.map((device) => (
                <TableRow key={device.id}>
                  {columns.map((column) => (
                    <TableCell key={column.id}>
                      {column.id === 'lastUpdate'
                        ? new Date(device[column.id]).toLocaleString()
                        : device[column.id as keyof Device]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
