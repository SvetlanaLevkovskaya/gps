import { FC } from 'react'

import { TableBody } from '@mui/material'

import { RequestStatus } from '../../../store/device/types.ts'
import { Device } from '../../../types'
import { DeviceRow } from '../deviceRow/deviceRow.tsx'
import { EmptyRow } from '../emptyRow/emptyRow.tsx'
import { LoadingRow } from '../loadingRow/loadingRow.tsx'

interface DeviceListBodyProps {
  devices: Device[] | null
  searchStatus: RequestStatus
}

export const DeviceListBody: FC<DeviceListBodyProps> = ({ devices, searchStatus }) => (
  <TableBody>
    {searchStatus === 'loading' ? (
      <LoadingRow colSpan={5} />
    ) : searchStatus === 'failed' || devices?.length === 0 ? (
      <EmptyRow colSpan={5} />
    ) : (
      devices && devices.map((device) => <DeviceRow key={device.id} device={device} />)
    )}
  </TableBody>
)
