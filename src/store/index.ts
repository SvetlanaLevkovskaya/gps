import { useDispatch } from 'react-redux'

import { ThunkDispatch, configureStore } from '@reduxjs/toolkit'
import { AsyncThunkConfig, OverrideThunkApiConfigs } from '@reduxjs/toolkit/dist/createAsyncThunk'

import { deviceReducer, deviceStoreName } from './device'
import { userReducer, userStoreName } from './user'

export const store = configureStore({
  reducer: {
    [userStoreName]: userReducer,
    [deviceStoreName]: deviceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunkDispatch = ThunkDispatch<
  RootState,
  void,
  OverrideThunkApiConfigs<AsyncThunkConfig, { rejectValue: string }>
>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
