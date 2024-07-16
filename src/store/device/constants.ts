import { DeviceState } from './types.ts'

export const deviceInitialState: DeviceState = {
  devices: [],
  searchedDevices: [],
  status: 'idle',
  searchStatus: 'idle',
  error: null,
}
