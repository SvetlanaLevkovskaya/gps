import { FC } from 'react'

import { DeviceList } from '../../components/deviceList/deviceList.tsx'
import { SearchBar } from '../../components/searchBar/searchBar.tsx'
import { useDevices } from '../../hooks/useDevices.ts'

export const DevicePage: FC = () => {
  const { devices, searchedDevices, searchStatus, clearSearch } = useDevices()

  return (
    <>
      <SearchBar clearSearch={clearSearch} />
      <DeviceList
        devices={searchedDevices.length > 0 ? searchedDevices : devices}
        searchStatus={searchStatus}
      />
    </>
  )
}
