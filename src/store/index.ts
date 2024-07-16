import { useDispatch } from 'react-redux'

import { AnyAction, ThunkDispatch, configureStore } from '@reduxjs/toolkit'

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

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
