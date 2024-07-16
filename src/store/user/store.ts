import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { userInitialState } from './constants.ts'
import { userStateName } from './types.ts'

const userSlice = createSlice({
  name: userStateName,
  initialState: userInitialState,
  reducers: {
    setEmail: (state, { payload }: PayloadAction<string>) => {
      localStorage.setItem('email', payload)
      state.email = payload
    },
  },
})

export const { name, reducer, actions } = userSlice
