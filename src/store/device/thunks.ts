import { createAsyncThunk } from '@reduxjs/toolkit'

import { apiClientService } from '../../lib/api/axios.ts'
import { Device } from '../../types'

export const fetchDevices = createAsyncThunk<Device[], void, { rejectValue: string }>(
  'devices/fetchDevices',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClientService.getAllDevices()
      return response.data
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error'
      return rejectWithValue(message)
    }
  }
)

export const searchDevices = createAsyncThunk<Device[], string, { rejectValue: string }>(
  'devices/searchDevices',
  async (searchValue, { rejectWithValue }) => {
    try {
      const response = await apiClientService.getAllDevices({ params: { id: searchValue } })
      return response.data
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error'
      return rejectWithValue(message)
    }
  }
)
