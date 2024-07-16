import { Device } from '../../types'

import { DeviceState, RequestStatus, StoreWithDeviceState, deviceStateName } from './types.ts'

const getState = (store: StoreWithDeviceState): DeviceState => store[deviceStateName]

export const getDevices = (s: StoreWithDeviceState): Device[] => getState(s).devices
export const getSearchedDevices = (s: StoreWithDeviceState): Device[] => getState(s).searchedDevices
export const getSearchStatus = (s: StoreWithDeviceState): RequestStatus => getState(s).searchStatus
export const getError = (s: StoreWithDeviceState): string | null => getState(s).error
