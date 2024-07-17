import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '../store'
import { deviceActions } from '../store/device'
import { getDevices, getSearchStatus, getSearchedDevices } from '../store/device/selectors'
import { fetchDevices } from '../store/device/thunks'

export const useDevices = () => {
  const dispatch = useAppDispatch()
  const devices = useSelector(getDevices)
  const searchedDevices = useSelector(getSearchedDevices)
  const searchStatus = useSelector(getSearchStatus)

  useEffect(() => {
    dispatch(fetchDevices())
  }, [dispatch])

  const clearSearch = () => {
    dispatch(deviceActions.clearSearchedDevices())
    dispatch(fetchDevices())
  }

  return { devices, searchedDevices, searchStatus, clearSearch }
}
