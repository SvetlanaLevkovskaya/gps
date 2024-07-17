import { FC, memo } from 'react'

import { Paper, Table, TableContainer } from '@mui/material'

import { RequestStatus } from '../../store/device/types.ts'
import { Device } from '../../types'

import { DeviceListBody } from './deviceListBody/deviceListBody.tsx'
import { DeviceListHeader } from './deviceListHeader/deviceListHeader.tsx'

interface DeviceListProps {
  devices?: Device[]
  searchStatus: RequestStatus
}

export const DeviceList: FC<DeviceListProps> = memo(({ devices = [], searchStatus }) => (
  <TableContainer component={Paper}>
    <Table>
      <DeviceListHeader />
      <DeviceListBody devices={devices} searchStatus={searchStatus} />
    </Table>
  </TableContainer>
))
