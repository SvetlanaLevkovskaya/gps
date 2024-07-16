import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { DeviceList } from '../../components/deviceList/deviceList.tsx'
import { SearchBar } from '../../components/searchBar/searchBar.tsx'
import { useAppDispatch } from '../../store'
import { deviceActions } from '../../store/device'
import { getDevices, getSearchStatus, getSearchedDevices } from '../../store/device/selectors.ts'
import { fetchDevices, searchDevices } from '../../store/device/thunks.ts'

export const DevicePage: FC = () => {
  const dispatch = useAppDispatch()
  const devices = useSelector(getDevices)
  const searchedDevices = useSelector(getSearchedDevices)
  const searchStatus = useSelector(getSearchStatus)

  useEffect(() => {
    dispatch(fetchDevices())
  }, [dispatch])

  const handleSearch = (searchValue: string) => {
    if (searchValue) {
      dispatch(searchDevices(searchValue))
    } else {
      dispatch(deviceActions.clearSearchedDevices())
      dispatch(fetchDevices())
    }
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <DeviceList
        devices={searchedDevices.length > 0 ? searchedDevices : devices}
        searchStatus={searchStatus}
      />
    </>
  )
}
