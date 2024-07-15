import { FC, useEffect, useState } from 'react'

import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

import { apiClientService } from '../../lib/api/axios.ts'
import { Device } from '../../types'
import { SearchBar } from '../searchBar/searchBar.tsx'

interface DeviceListProps {
  devices?: Device[]
}

const columns = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'uniqueId', label: 'Unique ID' },
  { id: 'status', label: 'Status' },
  { id: 'lastUpdate', label: 'Last Update' },
]

export const DeviceList: FC<DeviceListProps> = ({ devices }) => {
  const [data, setData] = useState<Device[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClientService.getAllDevices()
        setData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    if (!devices) {
      fetchData()
    }
  }, [devices])

  const displayedData = devices || data

  const handleSearch = (searchedDevices: Device[]) => {
    console.log('searchedDevices', searchedDevices)
    setData(searchedDevices)
  }

  return (
    <Container maxWidth="xl">
      <SearchBar onSearch={handleSearch} />
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
            {displayedData ? (
              displayedData.map((device) => (
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
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length}>Loading...</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
