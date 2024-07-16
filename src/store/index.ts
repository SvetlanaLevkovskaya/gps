import { useDispatch } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'

import { userReducer, userStoreName } from './user'

export const store = configureStore({
  reducer: {
    [userStoreName]: userReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
