import { PayloadAction, SerializedError, createSlice } from '@reduxjs/toolkit'

import { Device } from '../../types'

import { deviceInitialState } from './constants.ts'
import { fetchDevices, searchDevices } from './thunks.ts'
import { DeviceState, deviceStateName } from './types.ts'

const deviceSlice = createSlice({
  name: deviceStateName,
  initialState: deviceInitialState,
  reducers: {
    setDevices(state: DeviceState, { payload }: PayloadAction<Device[]>) {
      state.devices = payload
    },
    clearSearchedDevices(state: DeviceState) {
      state.searchedDevices = []
      state.searchStatus = 'idle'
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDevices.pending, (state: DeviceState) => {
        state.status = 'loading'
      })
      .addCase(
        fetchDevices.fulfilled,
        (state: DeviceState, { payload }: PayloadAction<Device[]>) => {
          state.status = 'succeeded'
          state.devices = payload
        }
      )
      .addCase(
        fetchDevices.rejected,
        (
          state: DeviceState,
          action: PayloadAction<string | undefined, string, never, SerializedError>
        ) => {
          state.status = 'failed'
          state.error = action.error.message || null
        }
      )
      .addCase(searchDevices.pending, (state: DeviceState) => {
        state.searchStatus = 'loading'
      })
      .addCase(
        searchDevices.fulfilled,
        (state: DeviceState, { payload }: PayloadAction<Device[]>) => {
          state.searchStatus = 'succeeded'
          state.devices = payload
        }
      )
      .addCase(
        searchDevices.rejected,
        (
          state: DeviceState,
          action: PayloadAction<string | undefined, string, never, SerializedError>
        ) => {
          state.searchStatus = 'failed'
          state.error = action.payload || action.error.message || null
        }
      )
  },
})

export const { name, reducer, actions } = deviceSlice
