import { Device } from '../../types'

export const deviceStateName = 'devices'

export type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

export type DeviceState = {
  devices: Device[]
  searchedDevices: Device[]
  status: RequestStatus
  searchStatus: RequestStatus
  error: string | null
}

export type StoreWithDeviceState = {
  [deviceStateName]: DeviceState
}
